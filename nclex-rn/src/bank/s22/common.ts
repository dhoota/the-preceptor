import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s22. Physiological Adaptation. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PA",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const WONG: Source = { body: "Hockenberry MJ, Duffy EA, Gibbs K", work: "Wong's Nursing Care of Infants and Children, 12th edition", year: 2023 };
export const SEPSIS: Source = { body: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign", work: "International Guidelines for Management of Sepsis and Septic Shock 2021. Critical Care Medicine 49(11):e1063", year: 2021 };
export const STROKE: Source = { body: "Prabhakaran S, Gonzalez NR, Zachrison KS, et al. American Heart Association and American Stroke Association", work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke, doi:10.1161/STR.0000000000000513", year: 2026 };
export const HYPONA: Source = { body: "Spasovski G, Vanholder R, Allolio B, et al.", work: "Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. European Journal of Endocrinology 170(3):G1", year: 2014 };
export const BTF: Source = { body: "Carney N, Totten AM, O'Reilly C, et al. Brain Trauma Foundation", work: "Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery 80(1):6", year: 2017 };
export const THYROID: Source = { body: "Ross DS, Burch HB, Cooper DS, et al. American Thyroid Association", work: "2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 26(10):1343", year: 2016 };
export const SICKLE: Source = { body: "National Heart, Lung, and Blood Institute", work: "Evidence-Based Management of Sickle Cell Disease: Expert Panel Report", year: 2014 };
export const BRONCH: Source = { body: "Ralston SL, Lieberthal AS, Meissner HC, et al. American Academy of Pediatrics", work: "Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics 134(5):e1474", year: 2014 };
export const KAWASAKI: Source = { body: "Jone PN, Tremoulet A, Choueiter N, et al. American Heart Association", work: "Update on Diagnosis and Management of Kawasaki Disease: A Scientific Statement. Circulation 150(23)", year: 2024 };
export const HTN: Source = { body: "Jones DW, Ferdinand KC, Taler SJ, et al. American Heart Association and American College of Cardiology", work: "2025 Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults", year: 2025 };
export const TLS: Source = { body: "Howard SC, Jones DP, Pui CH", work: "The Tumor Lysis Syndrome. New England Journal of Medicine 364(19):1844", year: 2011 };
export const REFEED: Source = { body: "da Silva JSV, Seres DS, Sabino K, et al. American Society for Parenteral and Enteral Nutrition", work: "ASPEN Consensus Recommendations for Refeeding Syndrome. Nutrition in Clinical Practice 35(2):178", year: 2020 };
export const ALS: Source = { body: "American Heart Association", work: "Part 9: Adult Advanced Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 152", year: 2025 };
export const GIBLEED: Source = { body: "Laine L, Barkun AN, Saltzman JR, Martel M, Leontiadis GI. American College of Gastroenterology", work: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. American Journal of Gastroenterology 116(5):899", year: 2021 };
export const HEAT: Source = { body: "Eifling KP, Gaudio FG, Dumke C, et al. Wilderness Medical Society", work: "Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update. Wilderness and Environmental Medicine 35(1 Suppl):112S", year: 2024 };
export const ADA: Source = { body: "American Diabetes Association Professional Practice Committee", work: "Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132", year: 2026 };
