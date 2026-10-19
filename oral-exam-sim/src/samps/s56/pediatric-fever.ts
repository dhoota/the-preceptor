// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "pediatric-fever", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  scharman: { id: "scharman-dimenhydrinate", citation: "Scharman EJ, Erdman AR, Wax PM, et al. Diphenhydramine and dimenhydrinate poisoning: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol (Phila). 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16749537/" },
  cagPhyso: { id: "cag-physostigmine", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Physostigmine. Updated 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/physostigmine" },
  dawson: { id: "dawson-anticholinergic", citation: "Dawson AH, Buckley NA. Pharmacological management of anticholinergic delirium: theory, evidence and practice. Br J Clin Pharmacol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26589572/" },
  sscPeds: { id: "ssc-peds-2020", citation: "Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis-associated organ dysfunction in children. Intensive Care Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32030529/" },
  ata: { id: "ata-hyperthyroidism-2016", citation: "Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27521067/" },
  akhDose: { id: "akh-antipyretic-dosing", citation: "SickKids AboutKidsHealth. Acetaminophen and ibuprofen dose recommendations. 2024.", url: "https://www.aboutkidshealth.ca/globalassets/assets/acetaminophen-and-ibuprofen-dose-recommendations.pdf" },
  aapSinus: { id: "aap-sinusitis-2013", citation: "Wald ER, Applegate KE, Bordley C, et al. Clinical practice guideline for the diagnosis and management of acute bacterial sinusitis in children aged 1 to 18 years. Pediatrics. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23796742/" },
  thompson: { id: "thompson-mening", citation: "Thompson MJ, Ninis N, Perera R, et al. Clinical recognition of meningococcal disease in children and adolescents. Lancet. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16458763/" },
  fn: { id: "fn-peds-2023", citation: "Lehrnbecher T, Robinson PD, Ammann RA, et al. Guideline for the management of fever and neutropenia in pediatric patients with cancer and hematopoietic cell transplantation recipients: 2023 update. J Clin Oncol. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/36689694/" },
  almatrafi: { id: "almatrafi-ecthyma", citation: "Almatrafi MA, Alidrisi D, Alhusaini E, et al. Severe ecthyma gangrenosum in a pediatric patient with neutropenia and a novel HELLS variant: case report. Clin Case Rep. 2026.", url: "https://doi.org/10.1002/ccr3.73143" },
} satisfies Record<string, Source>;

export const PEDIATRIC_FEVER_S56: Samp[] = [
  /* 48 Dimenhydrinate poisoning with fever ------------------------------- */
  {
    id: "pediatric-fever-48",
    title: "Hot, restless toddler after a weekend away",
    stem:
      "A 3-year-old girl is brought to the emergency department by her parents at 21:00 because she has been hot, restless and not making sense for 3 hours. She keeps picking at things in the air and does not seem to recognize her mother. The family returned this afternoon from a cool, rainy weekend at her grandparents' cottage. She has had no cough, vomiting, diarrhea or rash, and she has not passed urine since noon. She is healthy and her immunizations are up to date. She is flushed and agitated. Her pupils are 7 mm and react sluggishly. Her skin, mouth and axillae are dry. Bowel sounds are quiet and her bladder is palpable. Her neck is supple and she moves all limbs.",
    vitals: { temperature: "38.9°C rectal", pulse: "168/minute", resp: "28/minute", bp: "102/64 mmHg", o2sat: "98% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this child's fever and confusion?",
        options: [
          "Anticholinergic poisoning",
          "Bacterial meningitis",
          "Classic heat stroke",
          "Herpes simplex encephalitis",
          "Serotonin toxicity",
        ],
        correct: 0,
        explanation:
          "Fever, agitated delirium with picking at the air, dilated pupils, flushed dry skin with dry axillae, quiet bowel sounds and a full bladder form the anticholinergic toxidrome, a noninfectious cause of fever in a child with no source. Serotonin toxicity causes sweating, clonus and diarrhea rather than dry skin and urinary retention. Meningitis and encephalitis cause fever and confusion but do not explain dry skin, wide pupils and retention together, and her neck is supple. Classic heat stroke needs a hot environment, and her weekend was cool and rainy.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "scharman-dimenhydrinate",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her grandmother calls to say that an open sleeve of her dimenhydrinate 50 mg tablets was found in the child's bag, with 5 tablets missing.",
        prompt: "Which of the following investigations is most important for this child now?",
        options: ["CT of the head", "Lumbar puncture", "Serum ammonia", "Twelve lead ECG", "Urine drug screen"],
        correct: 3,
        explanation:
          "Five 50 mg tablets is up to 250 mg, or about 17 mg/kg for her 15 kg. Dimenhydrinate contains diphenhydramine, and Scharman's consensus guideline sends children with more than mild drowsiness or stimulation to the emergency department. A large ingestion can block cardiac sodium channels and widen the QRS, and the Canadian Antidote Guide warns against physostigmine when the QRS is wide, so the ECG decides the next treatment. With a known drug and no focal signs, head CT and lumbar puncture are not needed now. Ammonia and a urine drug screen do not change her care.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "cag-physostigmine",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows sinus tachycardia at 166/minute with a QRS of 82 ms. She remains agitated and keeps pulling at her IV despite her parents and a quiet room.",
        prompt: "Which of the following is the most appropriate treatment for her delirium?",
        options: [
          "haloperidol 0.75 mg IV",
          "ketamine 15 mg IV",
          "physostigmine 0.3 mg IV",
          "quetiapine 25 mg PO",
          "risperidone 0.25 mg PO",
        ],
        correct: 2,
        explanation:
          "Pure anticholinergic delirium that has not settled with calming measures is the indication for physostigmine in the Canadian Antidote Guide, which gives 0.01 to 0.02 mg/kg IV, up to 0.5 mg per dose, in children. For 15 kg, 0.02 mg/kg is 0.3 mg, given slowly. Her QRS of 82 ms is normal and the ingestion is a single known anticholinergic. Dawson and Buckley advise waiting at least 10 to 15 minutes before a repeat dose. Haloperidol, quetiapine and risperidone add their own anticholinergic or QT effects and do not reverse the cause. Ketamine sedates without treating the delirium.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "dawson-anticholinergic",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings would most suggest that sepsis rather than her ingestion explains her illness?",
        options: [
          "Agitation with picking at the air",
          "Cool mottled legs with slow refill",
          "Dry axillae and a dry mouth",
          "Pupils of 7 mm that react slowly",
          "Urinary retention",
        ],
        correct: 1,
        explanation:
          "Anticholinergic poisoning leaves the skin hot, dry and flushed. Cool, mottled legs with a slow capillary refill show impaired perfusion, which the Surviving Sepsis Campaign counts as cardiovascular dysfunction in septic shock even before the blood pressure falls, and it would send the team looking for infection. Delirium with picking, dry axillae and mouth, wide pupils and urinary retention are all part of the toxidrome she already has.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "ssc-peds-2020",
      },
    ],
    sources: [S.scharman, S.cagPhyso, S.dawson, S.sscPeds],
    ...META,
  },
];
