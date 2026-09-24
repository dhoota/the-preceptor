import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s17. */
export const meta = (
  id: string,
  over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">,
): ItemMeta => ({
  id,
  need: "PPT",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const LEHNE: Source = { body: "Burchum JR, Rosenthal LD", work: "Lehne's Pharmacology for Nursing Care, 11th edition", year: 2022 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const ISMP_HIGH: Source = { body: "Institute for Safe Medication Practices", work: "ISMP List of High-Alert Medications in Acute Care Settings", year: 2024 };
export const INS: Source = { body: "Nickel B, Gorski L, Kleidon T, et al. Infusion Nurses Society", work: "Infusion Therapy Standards of Practice, 9th edition. Journal of Infusion Nursing 47(1S):S1", year: 2024 };
export const AABB: Source = { body: "AABB, America's Blood Centers, American Red Cross and Armed Services Blood Program", work: "Circular of Information for the Use of Human Blood and Blood Components", year: 2024 };
export const PN_SAFETY: Source = { body: "Ayers P, Adams S, Boullata J, et al. American Society for Parenteral and Enteral Nutrition", work: "A.S.P.E.N. Parenteral Nutrition Safety Consensus Recommendations. JPEN 38(3):296", year: 2014 };
export const REFEEDING: Source = { body: "da Silva JSV, Seres DS, Sabino K, et al. American Society for Parenteral and Enteral Nutrition", work: "ASPEN Consensus Recommendations for Refeeding Syndrome. Nutrition in Clinical Practice 35(2):178", year: 2020 };
export const CDC_CATHETER: Source = { body: "O'Grady NP, Alexander M, Burns LA, et al. Healthcare Infection Control Practices Advisory Committee", work: "Guidelines for the Prevention of Intravascular Catheter-Related Infections", year: 2011 };
export const STROKE_2026: Source = { body: "Prabhakaran S, Gonzalez NR, Zachrison KS, et al. American Heart Association and American Stroke Association", work: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57:e316", year: 2026 };
export const HF_2022: Source = { body: "Heidenreich PA, Bozkurt B, Aguilar D, et al. AHA, ACC and HFSA", work: "2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895", year: 2022 };
export const ASRA: Source = { body: "Horlocker TT, Vandermeuelen E, Kopp SL, et al. American Society of Regional Anesthesia and Pain Medicine", work: "Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy, 4th edition. Regional Anesthesia and Pain Medicine 43(3):263", year: 2018 };
export const ACC_BLEED: Source = { body: "Tomaselli GF, Mahaffey KW, Cuker A, et al. American College of Cardiology", work: "2020 ACC Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants. JACC 76(5):594", year: 2020 };
export const ADRENAL: Source = { body: "Bornstein SR, Allolio B, Arlt W, et al. Endocrine Society", work: "Diagnosis and Treatment of Primary Adrenal Insufficiency. Journal of Clinical Endocrinology and Metabolism 101(2):364", year: 2016 };
export const BEERS: Source = { body: "American Geriatrics Society Beers Criteria Update Expert Panel", work: "American Geriatrics Society 2023 Updated AGS Beers Criteria. Journal of the American Geriatrics Society 71(7):2052", year: 2023 };
export const FDA_CLOPIDOGREL: Source = { body: "US Food and Drug Administration", work: "FDA reminder to avoid concomitant use of Plavix (clopidogrel) and omeprazole", year: 2010 };
export const ADA_GOALS: Source = { body: "American Diabetes Association Professional Practice Committee", work: "Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132", year: 2026 };
export const ADA_HOSPITAL: Source = { body: "American Diabetes Association Professional Practice Committee", work: "Diabetes Care in the Hospital: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S339", year: 2026 };
export const HYPOTHYROID: Source = { body: "Jonklaas J, Bianco AC, Bauer AJ, et al. American Thyroid Association", work: "Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670", year: 2014 };
