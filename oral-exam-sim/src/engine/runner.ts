import { nextIds } from "./validate";
import type { Attempt, CaseNode, OralCase, QuestionNode } from "./types";

/**
 * Pure attempt state machine. Every function returns a new Attempt.
 * The UI owns time. The engine only records what it is told.
 */

export function newAttempt(c: OralCase, mode: Attempt["mode"], now: number, id: string): Attempt {
  return {
    id,
    caseId: c.id,
    caseVersion: c.version,
    mode,
    startedAt: now,
    finishedAt: null,
    path: [{ nodeId: c.start, at: now }],
    findingsAsked: [],
    marks: {},
    score: null,
  };
}

export function nodeById(c: OralCase, id: string): CaseNode {
  const n = c.nodes.find((x) => x.id === id);
  if (!n) throw new Error(`${c.id}: missing node ${id}`);
  return n;
}

export function currentNode(c: OralCase, a: Attempt): CaseNode {
  return nodeById(c, a.path[a.path.length - 1].nodeId);
}

/** True once the attempt has reached an end node. */
export function atEnd(c: OralCase, a: Attempt): boolean {
  return currentNode(c, a).kind === "end";
}

/** Choices shown after a question. Empty when the flow simply continues. */
export function choicesFor(n: QuestionNode) {
  return n.choices && n.choices.length > 1 ? n.choices : [];
}

/**
 * Moves past the current node. For a question with several choices a
 * choiceId is required. usedSeconds records how long the candidate spoke.
 */
export function advance(
  c: OralCase,
  a: Attempt,
  now: number,
  opts: { choiceId?: string; usedSeconds?: number } = {},
): Attempt {
  const n = currentNode(c, a);
  if (n.kind === "end") return a;

  let next: string;
  const path = [...a.path];
  const last = { ...path[path.length - 1] };

  if (n.kind === "question") {
    const choices = choicesFor(n);
    if (choices.length) {
      const choice = choices.find((ch) => ch.id === opts.choiceId);
      if (!choice) throw new Error(`${c.id}: choose an option for ${n.id}`);
      next = choice.next;
      last.choiceId = choice.id;
    } else {
      next = nextIds(n)[0];
    }
    if (opts.usedSeconds !== undefined) last.usedSeconds = Math.max(0, Math.round(opts.usedSeconds));
  } else {
    next = n.next;
  }

  path[path.length - 1] = last;
  path.push({ nodeId: next, at: now });
  const reachedEnd = nodeById(c, next).kind === "end";
  return { ...a, path, finishedAt: reachedEnd ? now : a.finishedAt };
}

/** Records that the candidate asked for a finding. Returns the result text. */
export function askFinding(c: OralCase, a: Attempt, findingId: string): { attempt: Attempt; result: string } {
  const f = c.findings.find((x) => x.id === findingId);
  if (!f) throw new Error(`${c.id}: unknown finding ${findingId}`);
  const findingsAsked = a.findingsAsked.includes(f.id) ? a.findingsAsked : [...a.findingsAsked, f.id];
  return { attempt: { ...a, findingsAsked }, result: f.result };
}

/** Questions the candidate actually faced, in order. Drives the model answer reveal. */
export function questionsOnPath(c: OralCase, a: Attempt): QuestionNode[] {
  return a.path
    .map((s) => nodeById(c, s.nodeId))
    .filter((n): n is QuestionNode => n.kind === "question");
}

/**
 * Rubric items to self-score. Items tested by questions on the candidate's
 * path come first. Items on branches they never reached still count, since
 * the rubric is the whole case, and follow in rubric order.
 */
export function rubricOrder(c: OralCase, a: Attempt): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const q of questionsOnPath(c, a)) for (const id of q.rubric) if (!seen.has(id)) (seen.add(id), ordered.push(id));
  for (const r of c.rubric) if (!seen.has(r.id)) (seen.add(r.id), ordered.push(r.id));
  return ordered;
}

/** Choices the script flags as unsafe that the candidate picked. */
export function unsafeChoices(c: OralCase, a: Attempt): string[] {
  const out: string[] = [];
  for (const step of a.path) {
    if (!step.choiceId) continue;
    const n = nodeById(c, step.nodeId);
    if (n.kind !== "question") continue;
    const ch = n.choices?.find((x) => x.id === step.choiceId);
    if (ch?.quality === "unsafe") out.push(ch.label);
  }
  return out;
}
