/**
 * Spaced review of missed rubric items. A small Leitner scheduler:
 * each card sits in a box. Recall moves it up a box and pushes the next
 * review further out. A miss sends it back to box 0 for a short relearn.
 * Five correct recalls in a row retire the card.
 */

export const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35];
export const RETIRE_BOX = INTERVAL_DAYS.length;
const DAY = 24 * 60 * 60 * 1000;
const RELEARN_MS = 10 * 60 * 1000;

export interface ReviewCard {
  /** `${caseId}:${rubricId}` */
  key: string;
  caseId: string;
  itemId: string;
  box: number;
  due: number;
  lapses: number;
  addedAt: number;
  lastReviewed: number | null;
}

export type Deck = Record<string, ReviewCard>;

export const cardKey = (caseId: string, itemId: string) => `${caseId}:${itemId}`;

/**
 * After a scored attempt: missed items enter the deck (or drop back to box 0
 * if already there). Items the candidate now marked "yes" move up a box, so
 * doing well in a real attempt counts as a successful review.
 */
export function updateDeckFromAttempt(
  deck: Deck,
  caseId: string,
  missed: string[],
  gotRight: string[],
  now: number,
): Deck {
  const next: Deck = { ...deck };
  for (const itemId of missed) {
    const key = cardKey(caseId, itemId);
    const prev = next[key];
    next[key] = prev
      ? { ...prev, box: 0, due: now, lapses: prev.lapses + 1 }
      : { key, caseId, itemId, box: 0, due: now, lapses: 0, addedAt: now, lastReviewed: null };
  }
  for (const itemId of gotRight) {
    const key = cardKey(caseId, itemId);
    if (next[key]) next[key] = promote(next[key], now);
  }
  return next;
}

function promote(card: ReviewCard, now: number): ReviewCard {
  const box = Math.min(card.box + 1, RETIRE_BOX);
  const days = INTERVAL_DAYS[Math.min(box, INTERVAL_DAYS.length - 1)];
  return { ...card, box, due: now + days * DAY, lastReviewed: now };
}

/** Records a review answer. `recalled` is the candidate's honest self-check. */
export function review(deck: Deck, key: string, recalled: boolean, now: number): Deck {
  const card = deck[key];
  if (!card) return deck;
  const updated = recalled
    ? promote(card, now)
    : { ...card, box: 0, due: now + RELEARN_MS, lapses: card.lapses + 1, lastReviewed: now };
  return { ...deck, [key]: updated };
}

export function isRetired(card: ReviewCard): boolean {
  return card.box >= RETIRE_BOX;
}

/** Cards due now, most overdue first, then most lapsed. */
export function dueCards(deck: Deck, now: number): ReviewCard[] {
  return Object.values(deck)
    .filter((c) => !isRetired(c) && c.due <= now)
    .sort((a, b) => a.due - b.due || b.lapses - a.lapses);
}

export function deckStats(deck: Deck, now: number) {
  const cards = Object.values(deck);
  return {
    total: cards.length,
    due: cards.filter((c) => !isRetired(c) && c.due <= now).length,
    learning: cards.filter((c) => !isRetired(c) && c.box < 3).length,
    retired: cards.filter(isRetired).length,
  };
}
