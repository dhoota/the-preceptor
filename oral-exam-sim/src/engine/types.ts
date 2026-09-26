import type { Vitals } from "./samp";
/**
 * Oral exam engine types. No AI, no network. Every case is a scripted,
 * branching examiner flow that ships as static data.
 *
 * Flow: the examiner reads the stem, then walks a graph of nodes. At each
 * question the candidate answers aloud against a timer, then picks the
 * option that best matches what they said. The option decides the next
 * node and carries scripted examiner feedback. At the end the candidate
 * self-scores a rubric and gets a rule-built report.
 *
 * Pure TypeScript. The Preceptor apps can import this folder as is.
 */

/** Exam blueprint. Every case belongs to exactly one primary area. */
export const BLUEPRINT = [
  { id: "resus", label: "Resuscitation" },
  { id: "cardio", label: "Cardiovascular" },
  { id: "resp", label: "Respiratory" },
  { id: "neuro", label: "Neurology" },
  { id: "trauma", label: "Trauma" },
  { id: "peds", label: "Pediatrics" },
  { id: "obgyn", label: "Obstetrics and gynecology" },
  { id: "tox", label: "Toxicology" },
  { id: "enviro", label: "Environmental" },
  { id: "psych", label: "Mental health" },
  { id: "id", label: "Infection and sepsis" },
  { id: "geri", label: "Geriatrics" },
  { id: "procedures", label: "Procedures" },
  { id: "ethics", label: "Ethics and law" },
  { id: "comm", label: "Communication" },
  { id: "systems", label: "Systems and leadership" },
] as const;

export type BlueprintId = (typeof BLUEPRINT)[number]["id"];

/** Fixed competency domains. Every rubric item belongs to one. */
export const COMPETENCIES = [
  { id: "assessment", label: "Assessment and diagnosis" },
  { id: "resuscitation", label: "Resuscitation and stabilization" },
  { id: "management", label: "Management" },
  { id: "communication", label: "Communication and collaboration" },
  { id: "disposition", label: "Disposition and safety" },
  { id: "professionalism", label: "Ethics and professionalism" },
  { id: "leadership", label: "Leadership and systems" },
] as const;

export type CompetencyId = (typeof COMPETENCIES)[number]["id"];

/**
 * The structured oral is marked on the four rows of the CFPC sample score
 * sheet, each on a 0 to 10 scale. Every rubric item belongs to one row.
 */
export const ORAL_CRITERIA = [
  { id: "history", label: "History" },
  { id: "physical", label: "Physical exam and differential diagnosis" },
  { id: "management", label: "Management" },
  { id: "process", label: "Overall process of care" },
] as const;

export type OralCriterionId = (typeof ORAL_CRITERIA)[number]["id"];

/** The score sheet row for an id, if it is one. */
export const toCriterion = (id: string): OralCriterionId | undefined => ORAL_CRITERIA.find((c) => c.id === id)?.id;

export const criterionLabel = (id: string) => ORAL_CRITERIA.find((c) => c.id === id)?.label ?? id;

/** A CFPC EM priority topic key feature. See src/blueprint/priorityTopics.ts. */
export interface TopicKeyFeature {
  topic: string;
  n: number;
}

export const blueprintLabel = (id: string) => BLUEPRINT.find((b) => b.id === id)?.label ?? id;
export const competencyLabel = (id: string) => COMPETENCIES.find((c) => c.id === id)?.label ?? id;

/** A guideline or reference the case content rests on. */
export interface Source {
  id: string;
  /** Human readable citation. "CAEP. Position statement on ... 2023." */
  citation: string;
  url?: string;
}

/** A result the candidate can ask for at any question. */
export interface Finding {
  id: string;
  label: string;
  result: string;
}

export interface Choice {
  id: string;
  /** What the candidate says they did, first person. "I gave bicarbonate first." */
  label: string;
  next: string;
  quality: "strong" | "partial" | "unsafe";
  /**
   * Scripted examiner feedback. Why this is right, partial or unsafe, and
   * what the examiner wanted to hear. Two to four short sentences.
   */
  feedback: string;
}

export interface SayNode {
  kind: "say";
  id: string;
  phase?: string;
  text: string;
  next: string;
}

export interface QuestionNode {
  kind: "question";
  id: string;
  phase?: string;
  prompt: string;
  seconds: number;
  modelAnswer: string[];
  /** Rubric item IDs this question tests. */
  rubric: string[];
  choices?: Choice[];
  next?: string;
}

export interface EndNode {
  kind: "end";
  id: string;
  text: string;
}

export type CaseNode = SayNode | QuestionNode | EndNode;

export interface RubricItem {
  id: string;
  competency: CompetencyId;
  /** Observable behaviour. */
  text: string;
  points: number;
  critical?: boolean;
  /** One or two sentence teaching point. Shown in the report and spaced review. */
  teaching: string;
  /** ID of an entry in the case's `sources`. */
  source: string;
  /** Score sheet row this item counts toward. */
  criterion: OralCriterionId;
}

export interface OralCard {
  vitals: Vitals;
  medications: string;
  allergies: string;
}

export interface OralCase {
  id: string;
  title: string;
  blueprint: BlueprintId;
  /** Secondary areas the case also exercises. */
  alsoCovers?: BlueprintId[];
  /** Primary CFPC EM priority topic id. */
  priorityTopic: string;
  /** CFPC key features the case tests. At least two. */
  keyFeatures: TopicKeyFeature[];
  summary: string;
  durationMinutes: number;
  /**
   * What the candidate reads aloud, as on a CFPC oral card. It opens "You are
   * working in the emergency department of ..." and gives age, sex, arrival
   * and complaint in one or two sentences. No patient name.
   */
  stem: string;
  /** The labelled block under the stem on a CFPC oral card. */
  card?: OralCard;
  findings: Finding[];
  start: string;
  nodes: CaseNode[];
  rubric: RubricItem[];
  sources: Source[];
  /** Physician sign off. Every case ships as false until a physician reviews it. */
  reviewed: boolean;
  author: string;
  version: number;
}

export type SelfMark = "yes" | "partly" | "no";

export interface AttemptStep {
  nodeId: string;
  choiceId?: string;
  usedSeconds?: number;
  at: number;
}

export interface Attempt {
  id: string;
  caseId: string;
  caseVersion: number;
  mode: "practice" | "exam" | "station";
  startedAt: number;
  finishedAt: number | null;
  path: AttemptStep[];
  findingsAsked: string[];
  marks: Record<string, SelfMark>;
  score: Score | null;
}

export interface CriterionScore {
  id: OralCriterionId;
  name: string;
  awarded: number;
  max: number;
  /** The row on the CFPC 0 to 10 scale, to one decimal. */
  outOf10: number;
}

export interface CompetencyScore {
  id: CompetencyId;
  name: string;
  awarded: number;
  max: number;
}

export type Band = "pass" | "borderline" | "fail";

export interface Score {
  awarded: number;
  max: number;
  percent: number;
  band: Band;
  /** Rubric IDs of critical items not marked "yes". */
  criticalMisses: string[];
  competencies: CompetencyScore[];
  /** Score per examiner criterion. */
  criteria: CriterionScore[];
  /** Rubric items marked "no" or "partly". Feed spaced review. */
  missed: string[];
}
