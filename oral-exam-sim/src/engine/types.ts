/**
 * Oral exam engine types. No AI, no network. Every case is a scripted,
 * branching examiner flow that ships as static data.
 *
 * Flow: the examiner reads the stem, then walks a graph of nodes. At each
 * question the candidate answers aloud (or in notes) against a timer, then
 * picks the option that best matches what they said. The option decides the
 * next node: a follow-up probe, an escalation or the next phase. At the end
 * the candidate sees model answers and self-scores a rubric checklist.
 *
 * Pure TypeScript. The Preceptor apps can import this folder as is.
 */

/** A result the candidate can ask for at any question. */
export interface Finding {
  id: string;
  /** Button label, e.g. "ECG", "Venous gas", "Bedside echo". */
  label: string;
  /** What the examiner says when asked. */
  result: string;
}

export interface Choice {
  id: string;
  /** What the candidate says they did, in their own voice. "I gave bicarbonate first." */
  label: string;
  /** Node to go to next. */
  next: string;
  /**
   * How the examiner script treats this path. Used only for review hints.
   * Scoring comes from the rubric self-score, not from choices.
   */
  quality?: "strong" | "partial" | "unsafe";
}

/** The examiner reads a line. Stem continuation, escalation or new result. */
export interface SayNode {
  kind: "say";
  id: string;
  /** Short heading shown above the line, e.g. "Ten minutes later". */
  phase?: string;
  text: string;
  next: string;
}

/** The examiner asks a timed question. */
export interface QuestionNode {
  kind: "question";
  id: string;
  phase?: string;
  prompt: string;
  /** Answer time in seconds. */
  seconds: number;
  /** Key points of a strong answer. Revealed after answering or at the end. */
  modelAnswer: string[];
  /** Rubric item IDs this question tests. Links the reveal to the checklist. */
  rubric: string[];
  /**
   * Self-select branch. With one choice or none, the flow continues to
   * `next`. With several, the candidate picks the closest match.
   */
  choices?: Choice[];
  next?: string;
}

/** The examiner closes the case. */
export interface EndNode {
  kind: "end";
  id: string;
  text: string;
}

export type CaseNode = SayNode | QuestionNode | EndNode;

export interface RubricDomain {
  id: string;
  name: string;
}

export interface RubricItem {
  id: string;
  domain: string;
  /** Observable behaviour. "Gives sodium bicarbonate 1 to 2 mEq/kg IV for QRS over 100 ms." */
  text: string;
  points: number;
  /** Missing a critical item fails the attempt whatever the total. */
  critical?: boolean;
  /** One or two lines shown in spaced review when this item was missed. */
  teaching: string;
}

export interface OralCase {
  id: string;
  title: string;
  domain: string;
  summary: string;
  durationMinutes: number;
  /** Read aloud first. */
  stem: string;
  findings: Finding[];
  start: string;
  nodes: CaseNode[];
  domains: RubricDomain[];
  rubric: RubricItem[];
  /** Pass mark as a fraction of total points. */
  passThreshold: number;
  /** Physician sign off. Every seed case ships as false until Arjan reviews it. */
  reviewed: boolean;
  author: string;
  version: number;
}

/** How the candidate rated themselves on one rubric item. */
export type SelfMark = "yes" | "partly" | "no";

export interface AttemptStep {
  nodeId: string;
  choiceId?: string;
  /** Seconds the candidate used on a question. */
  usedSeconds?: number;
  at: number;
}

export interface Attempt {
  id: string;
  caseId: string;
  caseVersion: number;
  mode: "practice" | "exam";
  startedAt: number;
  finishedAt: number | null;
  path: AttemptStep[];
  findingsAsked: string[];
  marks: Record<string, SelfMark>;
  score: Score | null;
}

export interface DomainScore {
  id: string;
  name: string;
  awarded: number;
  max: number;
}

export interface Score {
  awarded: number;
  max: number;
  percent: number;
  passed: boolean;
  criticalMisses: string[];
  domains: DomainScore[];
  /** Rubric items marked "no" or "partly". Feed spaced review. */
  missed: string[];
}
