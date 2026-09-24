/**
 * The 2026 NCLEX-RN test plan, effective 1 April 2026 to 31 March 2029.
 * Source: NCSBN. 2026 NCLEX-RN Test Plan. 2026. https://www.nclex.com/test-plans.page
 * Only the structure is used here: category names, percentage ranges and exam
 * rules. The labels are the category names. No test plan text is copied.
 */

export type ClientNeed = "MOC" | "SIPC" | "HPM" | "PSY" | "BCC" | "PPT" | "RRP" | "PA";

export interface NeedInfo {
  id: ClientNeed;
  name: string;
  /** Parent category on the test plan. */
  group: string;
  min: number;
  max: number;
  /** Items in the 2,000 item bank. Test plan midpoint share of 2,000. */
  bank: number;
}

export const NEEDS: NeedInfo[] = [
  { id: "MOC", name: "Management of Care", group: "Safe and Effective Care Environment", min: 15, max: 21, bank: 360 },
  { id: "SIPC", name: "Safety and Infection Prevention and Control", group: "Safe and Effective Care Environment", min: 10, max: 16, bank: 260 },
  { id: "HPM", name: "Health Promotion and Maintenance", group: "Health Promotion and Maintenance", min: 6, max: 12, bank: 180 },
  { id: "PSY", name: "Psychosocial Integrity", group: "Psychosocial Integrity", min: 6, max: 12, bank: 180 },
  { id: "BCC", name: "Basic Care and Comfort", group: "Physiological Integrity", min: 6, max: 12, bank: 180 },
  { id: "PPT", name: "Pharmacological and Parenteral Therapies", group: "Physiological Integrity", min: 13, max: 19, bank: 320 },
  { id: "RRP", name: "Reduction of Risk Potential", group: "Physiological Integrity", min: 9, max: 15, bank: 240 },
  { id: "PA", name: "Physiological Adaptation", group: "Physiological Integrity", min: 11, max: 17, bank: 280 },
];

export const NEED_IDS = NEEDS.map((n) => n.id);
export const needName = (id: ClientNeed) => NEEDS.find((n) => n.id === id)!.name;
/** Midpoint share, 0 to 1. The midpoints sum to 100. */
export const midpoint = (id: ClientNeed) => {
  const n = NEEDS.find((x) => x.id === id)!;
  return (n.min + n.max) / 200;
};

/** Clinical Judgment Measurement Model steps, in order. */
export type CjmmStep = "recognize" | "analyze" | "prioritize" | "generate" | "action" | "evaluate";

export const CJMM: { id: CjmmStep; name: string }[] = [
  { id: "recognize", name: "Recognize cues" },
  { id: "analyze", name: "Analyze cues" },
  { id: "prioritize", name: "Prioritize hypotheses" },
  { id: "generate", name: "Generate solutions" },
  { id: "action", name: "Take action" },
  { id: "evaluate", name: "Evaluate outcomes" },
];
export const CJMM_IDS = CJMM.map((s) => s.id);
export const stepName = (id: CjmmStep) => CJMM.find((s) => s.id === id)!.name;

export type IntegratedProcess = "caring" | "clinical-judgment" | "communication" | "culture" | "nursing-process" | "teaching";

export const PROCESSES: { id: IntegratedProcess; name: string }[] = [
  { id: "caring", name: "Caring" },
  { id: "clinical-judgment", name: "Clinical Judgment" },
  { id: "communication", name: "Communication and Documentation" },
  { id: "culture", name: "Culture and Spirituality" },
  { id: "nursing-process", name: "Nursing Process" },
  { id: "teaching", name: "Teaching and Learning" },
];

/** Exam rules for the adaptive mock. */
export const EXAM = {
  minItems: 85,
  maxItems: 150,
  durationMs: 5 * 60 * 60 * 1000,
  /** Scored stand-alone items inside the minimum length. */
  minScoredStandalone: 52,
  caseStudies: 3,
  itemsPerCase: 6,
  pretest: 15,
  /** RN passing standard in logits. */
  passingStandard: 0,
} as const;

/** Bank plan. 1,400 stand-alone items and 100 case studies of 6 items. */
export const BANK_PLAN = { total: 2000, caseStudies: 100, standalone: 1400 } as const;
