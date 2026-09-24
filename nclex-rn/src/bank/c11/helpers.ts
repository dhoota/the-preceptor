import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c11 items. */
export const meta = (id: string, over: Partial<ItemMeta>): ItemMeta => ({
  id,
  need: "PA",
  topic: "",
  cjmm: "recognize",
  process: "clinical-judgment",
  difficulty: 3,
  stem: "",
  rationale: "",
  sources: [],
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const SRC: Record<string, Source> = {
  fsEval: {
    body: "Subcommittee on Febrile Seizures, American Academy of Pediatrics",
    work: "Febrile Seizures: Guideline for the Neurodiagnostic Evaluation of the Child With a Simple Febrile Seizure. Pediatrics 127(2):389",
    year: 2011,
    url: "https://pubmed.ncbi.nlm.nih.gov/21285335/",
  },
  fsLong: {
    body: "Steering Committee on Quality Improvement and Management, Subcommittee on Febrile Seizures, American Academy of Pediatrics",
    work: "Febrile Seizures: Clinical Practice Guideline for the Long-term Management of the Child With Simple Febrile Seizures. Pediatrics 121(6):1281",
    year: 2008,
    url: "https://pubmed.ncbi.nlm.nih.gov/18519501/",
  },
  fever: {
    body: "Sullivan JE, Farrar HC. American Academy of Pediatrics Section on Clinical Pharmacology and Therapeutics, Committee on Drugs",
    work: "Fever and Antipyretic Use in Children. Pediatrics 127(3):580",
    year: 2011,
    url: "https://pubmed.ncbi.nlm.nih.gov/21357332/",
  },
  cdcSeizure: {
    body: "Centers for Disease Control and Prevention",
    work: "First Aid for Seizures",
    year: 2024,
    url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  abuseEval: {
    body: "Christian CW, Committee on Child Abuse and Neglect, American Academy of Pediatrics",
    work: "The Evaluation of Suspected Child Physical Abuse. Pediatrics 135(5):e1337",
    year: 2015,
    url: "https://publications.aap.org/pediatrics/article/135/5/e20150356/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse",
  },
  ten4: {
    body: "Pierce MC, Kaczor K, Lorenz DJ, et al.",
    work: "Validation of a Clinical Decision Rule to Predict Abuse in Young Children Based on Bruising Characteristics. JAMA Network Open 4(4):e215832",
    year: 2021,
    url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2778559",
  },
  reporting: {
    body: "Child Welfare Information Gateway, Children's Bureau, US Department of Health and Human Services",
    work: "Mandatory Reporting of Child Abuse and Neglect: State Statutes",
    year: 2023,
    url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/",
  },
  milestones: {
    body: "Zubler JM, Wiggins LD, Macias MM, et al.",
    work: "Evidence-Informed Milestones for Developmental Surveillance Tools. Pediatrics 149(3):e2021052138",
    year: 2022,
    url: "https://www.cdc.gov/act-early/milestones/4-months.html",
  },
  purple: {
    body: "Barr RG, Rivara FP, Barr M, et al.",
    work: "Effectiveness of Educational Materials Designed to Change Knowledge and Behaviors Regarding Crying and Shaken-Baby Syndrome in Mothers of Newborns. Pediatrics 123(3):972",
    year: 2009,
    url: "https://pubmed.ncbi.nlm.nih.gov/19255028/",
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
    year: 2022,
    url: "https://evolve.elsevier.com/cs/product/9780323697071",
  },
  tjc: {
    body: "The Joint Commission",
    work: "National Performance Goals Effective January 2026 for the Hospital Program, NPG.08.01.01 Reduce the Risk for Suicide",
    year: 2026,
    url: "https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82",
  },
  safetyPlan: {
    body: "Stanley B, Brown GK",
    work: "Safety Planning Intervention: A Brief Intervention to Mitigate Suicide Risk. Cognitive and Behavioral Practice 19(2):256",
    year: 2012,
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1077722911000630",
  },
  tramadol: {
    body: "US Food and Drug Administration",
    work: "Ultram (tramadol hydrochloride) tablets prescribing information",
    year: 2021,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020281s049lbl.pdf",
  },
  lithium: {
    body: "Sun Pharmaceutical Industries. US National Library of Medicine, DailyMed",
    work: "Lithium Carbonate Tablets prescribing information",
    year: 2023,
    url: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d3284649-ed4c-4096-987b-4ac16b8278f2&type=display",
  },
  restraint: {
    body: "Centers for Medicare and Medicaid Services",
    work: "Condition of Participation: Patient's Rights, Restraint or Seclusion. 42 CFR 482.13(e)",
    year: 2024,
    url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13",
  },
  potter: {
    body: "Potter PA, Perry AG, Stockert PA, Hall AM",
    work: "Fundamentals of Nursing, 11th edition",
    year: 2023,
  },
  paliperidone: {
    body: "Janssen Pharmaceuticals. US Food and Drug Administration",
    work: "Invega Sustenna (paliperidone palmitate) extended-release injectable suspension prescribing information",
    year: 2024,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/022264s037lbledt.pdf",
  },
  dutyWarn: {
    body: "National Conference of State Legislatures",
    work: "Mental Health Professionals' Duty to Warn",
    year: 2022,
    url: "https://www.ncsl.org/health/mental-health-professionals-duty-to-warn",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
};
