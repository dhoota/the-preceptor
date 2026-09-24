import { CASES } from "@/cases";
import type { SampAttempt } from "@/lib/storage";
import { advance, atEnd, choicesFor, currentNode, finishAttempt, markSamp, newAttempt, updateDeckFromAttempt, type Attempt, type Deck, type Samp, type SampResponse, type SelfMark } from "@/engine";

/**
 * Development only. Builds a believable practice history so the dashboard
 * and store screenshots have something to show. Loaded with ?seed=1 in the
 * dev server. Never bundled into production builds.
 */
export function seedHistory(count = 26): { attempts: Attempt[]; deck: Deck } {
  let rand = 7;
  const next = () => ((rand = (rand * 48271) % 2147483647) / 2147483647);
  const attempts: Attempt[] = [];
  let deck: Deck = {};
  const day = 86_400_000;
  const start = Date.now() - count * 2 * day;
  const picks = CASES.filter((_, i) => i % Math.max(1, Math.floor(CASES.length / count)) === 0).slice(0, count);

  picks.forEach((c, k) => {
    const t = start + k * 2 * day;
    let a = newAttempt(c, k % 3 === 0 ? "exam" : "practice", t, `seed-${k}`);
    let guard = 0;
    while (!atEnd(c, a) && guard++ < 60) {
      const n = currentNode(c, a);
      const choices = n.kind === "question" ? choicesFor(n) : [];
      const choiceId = choices.length ? (next() < 0.75 ? choices.find((x) => x.quality === "strong")!.id : choices[Math.floor(next() * choices.length)].id) : undefined;
      a = advance(c, a, t + guard * 60_000, { choiceId, usedSeconds: 50 });
    }
    // Candidates improve over time.
    const skill = 0.45 + (k / picks.length) * 0.4;
    const marks: Record<string, SelfMark> = {};
    for (const r of c.rubric) {
      const x = next();
      marks[r.id] = x < skill ? "yes" : x < skill + 0.15 ? "partly" : "no";
    }
    const done = finishAttempt(c, a, marks, t + 14 * 60_000);
    attempts.unshift(done);
    deck = updateDeckFromAttempt(deck, c.id, done.score!.missed, Object.keys(marks).filter((id) => marks[id] === "yes"), t);
  });
  return { attempts, deck };
}

/**
 * Development only. A believable written history: some SAMPs in most topics,
 * with a mix of right, partly right and wrong answers that improves over time.
 */
export function seedSampHistory(samps: Samp[], perTopic = 3): SampAttempt[] {
  let rand = 11;
  const next = () => ((rand = (rand * 48271) % 2147483647) / 2147483647);
  const day = 86_400_000;
  const topics = [...new Set(samps.map((s) => s.topic))];
  const picks = topics.flatMap((t, ti) => (ti % 6 === 5 ? [] : samps.filter((s) => s.topic === t).slice(0, perTopic)));
  const start = Date.now() - picks.length * 0.4 * day;
  return picks.map((s, k) => {
    const skill = 0.4 + (k / picks.length) * 0.4;
    const responses: Record<string, SampResponse> = {};
    for (const q of s.questions) {
      const good = next() < skill;
      if (q.kind === "single") responses[q.id] = { kind: "single", choice: good ? q.correct : (q.correct + 1) % q.options.length };
      else if (q.kind === "menu") responses[q.id] = { kind: "menu", choices: good ? q.correct : q.correct.slice(0, Math.max(0, q.correct.length - 1)) };
      else {
        const n = good ? q.required : Math.max(1, Math.floor(q.required / 2));
        responses[q.id] = { kind: "short", lines: q.accept.slice(0, n).map((a) => a.text) };
      }
    }
    return { id: `seed-samp-${k}`, sampId: s.id, topic: s.topic, mode: "practice", at: start + k * 0.4 * day, responses, mark: markSamp(s, responses) };
  });
}
