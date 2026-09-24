# Textbook citation pass: s32, s46, s49

Label: s32-s46-s49. Scope: every question in these three files that cited Goldfrank's Toxicologic Emergencies, Nelson Textbook of Pediatrics or Rosen's Emergency Medicine. That is 18 Goldfrank questions in s32 (loc), 28 Nelson and 7 Goldfrank questions in s46 (pediatric fever), and 8 Goldfrank and 9 Rosen questions in s49 (seizures). That makes 70 in all.

The loc-26 and loc-37 fixes from commit da27929 are kept. loc-26 q1 and all of loc-37 were not touched. For loc-26, only q2 to q4 changed source.

Every guideline and study cited below was opened and read. Some were read in full text and some through the publisher, the body's own page, or the Europe PMC abstract. The generic source objects "goldfrank", "nelson" and "rosen" are gone from all three files. Each kept textbook citation now names its chapter.

## How the chapters were checked

- Goldfrank's, 11th edition, 2019. Chapter 3, Initial Evaluation of the Patient: Vital Signs and Toxic Syndromes, and Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient, come from the McGraw Hill product page table of contents (https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html). That table stops after Chapter 8.
- Goldfrank's Chapter 76, Ethanol (Yip L), comes from the chapter's own address on McGraw Hill's AccessEmergency Medicine platform (legacysectionid=goldtox11_ch76). The page itself returned 403, so only the title and address were seen.
- Four Goldfrank's chapters have titles checked on AccessEmergency Medicine but no chapter number I could verify. The full table of contents is behind a login and every library copy I tried was blocked. They are cited by title with no number: Antidiabetics and Hypoglycemics/Antiglycemics (Bosse GM), Antiepileptics, Antidotes in Depth: L-Carnitine, and Serotonin Reuptake Inhibitors and Atypical Antidepressants (Stork CM).
- Nelson, 22nd edition, 2024. Chapter numbers and titles come from the Elsevier table of contents (https://www.inspectioncopy.elsevier.com/book/details/9780323883054). The publication date given there is April 2024.
- Rosen's, 10th edition, 2023. Chapter numbers and titles come from the Elsevier table of contents (https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html). The editors are Walls, Hockberger, Gausche-Hill, Erickson and Wilcox.

## Counts

| File and book | Guideline | Study | Textbook kept | Total |
|---|---|---|---|---|
| s32 Goldfrank's | 7 | 2 | 9 | 18 |
| s46 Goldfrank's | 4 | 0 | 3 | 7 |
| s46 Nelson | 11 | 2 | 15 | 28 |
| s49 Goldfrank's | 6 | 0 | 2 | 8 |
| s49 Rosen's | 3 | 0 | 6 | 9 |
| All | 31 | 4 | 35 | 70 |

No key changed. No stem, option or keyFeature mapping changed. Every SAMP stays reviewed: false.

## Items

### s32 loc (Goldfrank's)

| SAMP and question | Old book | Verdict | New source | Text changed |
|---|---|---|---|---|
| loc-22 q1, first dextrose dose for a 15 kg child | Goldfrank's | guideline | World Health Organization. Pocket book of hospital care for children. 2nd ed. 2013. https://www.ncbi.nlm.nih.gov/books/NBK154447/ | The dose is now stated as the WHO 5 mL/kg of dextrose 10% (0.5 g/kg). The glucagon line was softened to "not needed when IV access is in place". |
| loc-22 q2, what to ask the grandfather | Goldfrank's | textbook kept, chapter number not verified | Goldfrank's 11th ed. 2019. Chapter: Antidiabetics and Hypoglycemics/Antiglycemics (Bosse GM) | None |
| loc-22 q3, recurrent hypoglycemia on gliclazide | Goldfrank's | study (systematic literature review) | Glatstein M, Scolnik D, Bentur Y. Clin Toxicol. 2012. https://doi.org/10.3109/15563650.2012.734626 | Octreotide dose now given as the suggested 1 to 1.5 mcg/kg, and 15 mcg is 1 mcg/kg. "Diazoxide can cause hypotension" was replaced with "octreotide worked better than diazoxide in human studies". The glucagon and hydrocortisone lines were softened. |
| loc-22 q4, disposition | Goldfrank's | study | Glatstein 2012 | Now cites the reported onset up to 16 hours and recurrence in half of children even after octreotide. |
| loc-25 q3, methanol antidote | Goldfrank's | guideline | Barceloux DG et al. American Academy of Clinical Toxicology practice guidelines on the treatment of methanol poisoning. J Toxicol Clin Toxicol. 2002. https://doi.org/10.1081/clt-120006745 | Adds that fomepizole is preferred over ethanol. Changed "folic acid" to "folinic acid", which is the AACT agent. |
| loc-26 q2, added investigations in amitriptyline overdose | Goldfrank's | textbook kept | Goldfrank's 11th ed. Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient | None |
| loc-26 q3, airway after bicarbonate | Goldfrank's | guideline | Emergency Care BC. Tricyclic antidepressant overdose. 2018 (already in file as ecbc-tca) | None. ECBC states that GCS under 8 with instability needs intubation and that respiratory acidosis worsens toxicity. |
| loc-26 q4, most useful collateral detail | Goldfrank's | guideline | Emergency Care BC 2018 | None. ECBC gives onset within 4 to 6 hours and at least 6 hours of monitoring. |
| loc-27 q1, cause of decreased LOC on lithium | Goldfrank's | guideline | EXTRIP lithium. Decker BS et al. Clin J Am Soc Nephrol. 2015 (already in file) | None |
| loc-27 q2, statement showing a change from baseline | Goldfrank's | guideline | NICE CG103. Delirium. 2010, updated 2023. https://www.nice.org.uk/guidance/cg103 | None. NICE 1.3.1 says to ask a carer or relative about recent changes. |
| loc-27 q4, home medications | Goldfrank's | guideline | Yatham LN et al. CANMAT and ISBD 2018 bipolar guidelines. Bipolar Disord. 2018. https://doi.org/10.1111/bdi.12609 | None |
| loc-33 q4, confirming how much morphine was taken | Goldfrank's | textbook kept | Goldfrank's Chapter 4 | None |
| loc-34 q1, valproate hyperammonemia | Goldfrank's | textbook kept, chapter number not verified | Goldfrank's. Chapter: Antiepileptics | None |
| loc-34 q2, collateral that excluded overdose | Goldfrank's | textbook kept | Goldfrank's Chapter 4 | None |
| loc-34 q3, levocarnitine | Goldfrank's | textbook kept, number not verified | Goldfrank's. Antidotes in Depth: L-Carnitine | None |
| loc-39 q1, dextrose in an intoxicated adolescent | Goldfrank's | textbook kept | Goldfrank's Chapter 76, Ethanol (Yip L) | None |
| loc-39 q2, ethanol 14 mmol/L does not explain her state | Goldfrank's | textbook kept | Goldfrank's Chapter 76 | None |
| loc-39 q3, what to ask her friends | Goldfrank's | textbook kept | Goldfrank's Chapter 4 | None |

### s46 pediatric fever (Goldfrank's)

| SAMP and question | Old book | Verdict | New source | Text changed |
|---|---|---|---|---|
| pediatric-fever-31 q1, cause of fever after diphenhydramine | Goldfrank's | textbook kept | Goldfrank's Chapter 3, Initial Evaluation of the Patient: Vital Signs and Toxic Syndromes | None |
| pediatric-fever-31 q2, QRS 128 ms | Goldfrank's | guideline | Lavonas EJ et al. 2023 AHA focused update on poisoning. Circulation. 2023. https://doi.org/10.1161/CIR.0000000000001161 | AHA Table 3 lists diphenhydramine as a sodium channel blocker, and bicarbonate is reasonable (2a). The physostigmine line was softened to "usually avoided ... because of concern for". |
| pediatric-fever-31 q3, treating his temperature | Goldfrank's | textbook kept | Goldfrank's Chapter 3 | None |
| pediatric-fever-33 q1, sweaty skin separates the toxidromes | Goldfrank's | textbook kept | Goldfrank's Chapter 3 | None |
| pediatric-fever-33 q2, first treatment for agitation | Goldfrank's | guideline | AHA 2023 (sedation COR 1, prolonged restraint without sedation 3: Harm) | The propranolol "unopposed alpha" line and the "haloperidol second line" line were replaced with claims the guideline supports. |
| pediatric-fever-33 q3, temperature 40.4°C | Goldfrank's | guideline | AHA 2023 (rapid external cooling COR 1) | Now says evaporative or immersion cooling works faster than ice packs, as AHA states. |
| pediatric-fever-33 q4, creatine kinase | Goldfrank's | guideline | AHA 2023 (rhabdomyolysis listed as a manifestation) | None |

### s46 pediatric fever (Nelson)

| SAMP and question | Old book | Verdict | New source | Text changed |
|---|---|---|---|---|
| pediatric-fever-25 q1, occult bacteremia risk | Nelson | textbook kept | Nelson 22nd ed. 2024. Chapter 221, Fever in the Older Child | None |
| pediatric-fever-25 q4, plan for a well toddler | Nelson | guideline | NICE NG143. Fever in under 5s. 2019, updated 2021. https://www.nice.org.uk/guidance/ng143 | Adds the NICE advice against oral antibiotics for fever without an apparent source, and that home care with advice is fine with no amber or red features. |
| pediatric-fever-29 q1, systemic JIA | Nelson | guideline (classification criteria) | Petty RE et al. ILAR classification of JIA, second revision. J Rheumatol. 2004. https://pubmed.ncbi.nlm.nih.gov/14760812/ | None |
| pediatric-fever-29 q2, bone marrow before steroids | Nelson | textbook kept | Nelson Chapter 196, Juvenile Idiopathic Arthritis | None |
| pediatric-fever-29 q4, MAS treatment | Nelson | guideline | Arkachaisri T et al. APLAR consensus recommendations on systemic JIA. Int J Rheum Dis. 2026. https://doi.org/10.1111/1756-185x.70810 | Now says pulse IV methylprednisolone first, with cyclosporine or anakinra added after 48 to 72 hours of inadequate response (APLAR statements 14 and 15). |
| pediatric-fever-30 q1, q2, q3, Hodgkin lymphoma and mediastinal mass | Nelson | textbook kept | Nelson Chapter 545, Lymphoma | None |
| pediatric-fever-37 q1, q2, mononucleosis with amoxicillin rash | Nelson | textbook kept | Nelson Chapter 301, Epstein-Barr Virus | None |
| pediatric-fever-37 q3, signs of a dangerous drug reaction | Nelson | study (systematic review of guidelines) | Creighton R et al. Pediatr Dermatol. 2026. https://doi.org/10.1111/pde.70149 | None |
| pediatric-fever-38 q1, q2, roseola | Nelson | textbook kept | Nelson Chapter 303, Roseola (Human Herpesviruses 6 and 7) | None |
| pediatric-fever-38 q4, dangerous features with rash | Nelson | guideline | NICE NG143 (non-blanching rash and appearing ill are red features) | None |
| pediatric-fever-39 q1, q2, q3, staphylococcal scalded skin syndrome | Nelson | textbook kept | Nelson Chapter 227, Staphylococcus | None |
| pediatric-fever-40 q1, eczema herpeticum | Nelson | guideline | NICE CG57. Atopic eczema in under 12s. 2007, updated 2025. https://www.nice.org.uk/guidance/cg57 | None |
| pediatric-fever-40 q2, IV acyclovir dose | Nelson | textbook kept | Nelson Chapter 299, Herpes Simplex Virus | None |
| pediatric-fever-40 q3, added ED steps | Nelson | guideline | NICE CG57 (1.5.1.41 and 1.7.1.1) | "Urgent" became "same-day" ophthalmology. Dermatology in 2 weeks is now wrong because NICE wants same-day dermatology advice. |
| pediatric-fever-41 q1, scarlet fever | Nelson | textbook kept | Nelson Chapter 229, Group A Streptococcus | None. The CPS GAS statement does not describe scarlet fever. |
| pediatric-fever-43 q3, return precautions after a febrile seizure | Nelson | guideline | NICE NG143 (1.7.3) | Return advice now follows NICE: another fit, a non-blanching rash, or a child who seems less well. The unsourced list was removed. |
| pediatric-fever-44 q1, IgA vasculitis | Nelson | guideline (classification criteria) | Ozen S et al. EULAR/PRINTO/PRES criteria. Ann Rheum Dis. 2010. https://doi.org/10.1136/ard.2009.116657 | None |
| pediatric-fever-44 q2, CBC and urinalysis | Nelson | textbook kept | Nelson Chapter 210, Vasculitis Syndromes | None |
| pediatric-fever-44 q3, follow-up plan | Nelson | study (systematic review) | Narchi H. Arch Dis Child. 2005. https://doi.org/10.1136/adc.2005.074641 | Adds 97% of urine changes within 6 months and no late impairment after a normal urinalysis. "Steroids do not prevent kidney disease" was softened to "not needed for his mild disease and do not replace monitoring". |
| pediatric-fever-45 q1, bulging fontanelle | Nelson | guideline | NICE NG143 (1.2.19, 1.2.20, red features) | "Neck stiffness is often absent, so the fontanelle is more useful" became the NICE wording. The bulging fontanelle and high-pitched cry are red flags, and classic signs are often absent in infants. |
| pediatric-fever-47 q1, hand, foot and mouth disease | Nelson | guideline | WHO Western Pacific Region. A guide to clinical management and public health response for HFMD. 2011. https://iris.who.int/handle/10665/207490 | The varicella line now follows WHO: a larger area including the scalp, sparing the palms and soles. |
| pediatric-fever-47 q2, treatment plan | Nelson | guideline | WHO HFMD 2011 | The viscous lidocaine line was softened. It no longer claims seizures, because no source for that was opened. |

### s49 seizures (Goldfrank's)

| SAMP and question | Old book | Verdict | New source | Text changed |
|---|---|---|---|---|
| seizures-18 q2, bupropion ECG change | Goldfrank's | textbook kept, chapter number not verified | Goldfrank's. Chapter: Serotonin Reuptake Inhibitors and Atypical Antidepressants (Stork CM) | None |
| seizures-18 q4, refractory toxic seizures | Goldfrank's | textbook kept, number not verified | Same chapter | None |
| seizures-19 q1, TCA with QRS 148 ms | Goldfrank's | guideline | Emergency Care BC. Tricyclic antidepressant overdose. 2018 | "Amiodarone worsens toxicity" became "benefit and safety uncertain", as ECBC says. "Lidocaine is second line" became "lowers the seizure threshold, used with caution". |
| seizures-19 q2, anticonvulsant in TCA seizure | Goldfrank's | guideline | Emergency Care BC 2018 (benzodiazepines, avoid phenytoin, avoid flumazenil) | None |
| seizures-19 q3, bicarbonate target | Goldfrank's | guideline | AHA 2023 | Now states the AHA limits: pH not above 7.50 to 7.55 and sodium not above 150 to 155 mmol/L, with a hypokalemia risk. "Reduced cerebral blood flow" was removed. |
| seizures-32 q1, combative after cocaine | Goldfrank's | guideline | AHA 2023 (benzodiazepines are the mainstay, and beta blocker safety is controversial) | "Beta blockers are avoided" became "their safety is controversial". The haloperidol and phenytoin lines were softened. |
| seizures-32 q2, temperature 41.2°C | Goldfrank's | guideline | AHA 2023 (rapid external cooling, COR 1) | None |
| seizures-32 q3, labs after cooling | Goldfrank's | guideline | AHA 2023 | None |

### s49 seizures (Rosen's)

| SAMP and question | Old book | Verdict | New source | Text changed |
|---|---|---|---|---|
| seizures-21 q1, hyperventilation for absences | Rosen's | guideline (ILAE diagnostic manual) | ILAE. EpilepsyDiagnosis.org. Childhood absence epilepsy. Updated 2024. https://www.epilepsydiagnosis.org/syndrome/cae-eeg.html | None |
| seizures-26 q1, hypocalcemic seizures | Rosen's | textbook kept | Rosen's 10th ed. Chapter 169, Pediatric Neurologic Disorders | None. The Munns 2016 rickets consensus was read but gives no IV calcium regimen. |
| seizures-27 q4, uterine displacement and fetal monitoring | Rosen's | textbook kept | Rosen's Chapter 174, Medical Emergencies During Pregnancy | None |
| seizures-28 q3, neuroimaging need | Rosen's | textbook kept | Rosen's Chapter 88, Seizure | None |
| seizures-29 q2, levetiracetam after missed doses | Rosen's | textbook kept | Rosen's Chapter 169 | None |
| seizures-30 q2, likely nonepileptic event | Rosen's | textbook kept | Rosen's Chapter 88 | None |
| seizures-37 q4, triggers in JME | Rosen's | textbook kept | Rosen's Chapter 88 | None. A JME precipitant study found alcohol in only 11%, so it was not used. |
| seizures-40 q1, focal impaired awareness seizures | Rosen's | guideline (ILAE diagnostic manual) | ILAE. EpilepsyDiagnosis.org. Temporal lobe seizure. Updated 2024. https://www.epilepsydiagnosis.org/seizure/temporal-overview.html | None |
| seizures-40 q2, MRI and EEG | Rosen's | guideline | NICE NG217 (already in file, 1.2.5 and 1.3.1) | The unsourced "causes after age 60" sentence was replaced with the NICE MRI and EEG recommendations. |

## Keys or explanations changed

No key changed. These 19 questions changed more than their source. An independent reviewer should check exactly these:

- loc-22 q1, q3, q4
- loc-25 q3
- pediatric-fever-25 q4
- pediatric-fever-29 q4
- pediatric-fever-31 q2
- pediatric-fever-33 q2, q3
- pediatric-fever-40 q3
- pediatric-fever-43 q3
- pediatric-fever-44 q3
- pediatric-fever-45 q1
- pediatric-fever-47 q1, q2
- seizures-19 q1, q3
- seizures-32 q1
- seizures-40 q2

## Checks

- SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 675 passed.
- SAMP_BATCH=s46, same command: 687 passed.
- SAMP_BATCH=s49, same command: 651 passed.
- npx tsc --noEmit -p .: clean.
- LAUNCH_GATE=1 npx vitest run tests/samps.test.ts: 4503 passed.

## Edited SAMP ids

loc-22, loc-25, loc-26, loc-27, loc-33, loc-34, loc-39, pediatric-fever-25, 29, 30, 31, 33, 37, 38, 39, 40, 41, 43, 44, 45, 47, seizures-18, 19, 21, 26, 27, 28, 29, 30, 32, 37, 40.

## For the physician

- seizures-19 q3. The key is "serum pH 7.50 to 7.55". AHA 2023 gives that range as an upper limit not to exceed. Emergency Care BC says to repeat boluses until the pH reaches 7.55. The key still stands, but please confirm that "usual target" is the wording you want.
- seizures-32 q1. AHA 2023 calls beta blocker safety in cocaine toxicity controversial. It does not ban them. Diazepam remains the clear answer, and the explanation no longer says that beta blockers are avoided.
- loc-22 q1. The WHO pocket book dose is 5 mL/kg of dextrose 10%. A 2021 WHO Bulletin exchange proposed 2 mL/kg, but that proposal was not adopted. The key uses 5 mL/kg.
- loc-25 q3. The AACT methanol guideline dates from 2002. It names folinic acid, so the explanation now says folinic acid, not folic acid.
- pediatric-fever-40 q2. NICE CG57 says to start systemic aciclovir at once but gives no dose. The 10 mg/kg IV every 8 hours dose rests on Nelson.
- pediatric-fever-47 q2. The viscous lidocaine rationale was softened because no source was opened for it. A Health Canada or FDA warning could be added if you want the stronger claim back.
- pediatric-fever-29 q2. The bone marrow before steroids key rests on Nelson. APLAR 2026 says malignancy must be excluded and that glucocorticoids can mask disease, but it does not name a bone marrow examination.
- pediatric-fever-44 q3. The SHARE 2019 IgA vasculitis recommendations could not be read in full, so the Narchi systematic review supports the 6 month follow-up. The ASA and Reye syndrome line is unchanged and has no source opened here.
- Goldfrank's chapter numbers. Four chapters are cited by title without a number because the full 11th edition table of contents could not be opened: Antidiabetics and Hypoglycemics/Antiglycemics, Antiepileptics, Antidotes in Depth: L-Carnitine, and Serotonin Reuptake Inhibitors and Atypical Antidepressants. Chapter 76, Ethanol, comes only from the publisher's chapter address, not a table of contents.
- The Emergency Care BC TCA summary was last reviewed in 2018. It is the Canadian source already used for loc-26 q1 in commit da27929.
- Some distractor reasons that the new source does not address were kept, because they are standard teaching and do not conflict with the source. Examples are glucagon and hydrocortisone in loc-22 q3, and transient global amnesia in seizures-40 q1.

## Review

Independent review of the 19 changed explanations, the writer's flags, a sample of new sources and a sample of chapter citations. Lens: clinical truth and internal consistency. Every SAMP stays reviewed: false.

### The 19 changed explanations

| SAMP and question | Verdict | Note |
|---|---|---|
| loc-22 q1 | Pass | WHO 2013 pocket book gives 5 mL/kg of dextrose 10%. 75 mL for 15 kg is correct. |
| loc-22 q3 | Pass | Glatstein 2012 abstract: children 1 to 1.5 mcg/kg, octreotide superior to IV dextrose and diazoxide in humans. 15 mcg is 1 mcg/kg. |
| loc-22 q4 | Pass | Glatstein 2012: time to hypoglycemia 1.5 to 16 hours in 14 children, 7 (50%) had recurrence and needed more octreotide. |
| loc-25 q3 | Pass | No option, key or other text in loc.ts says folic acid. The key is fomepizole. AACT 2002 names folinic acid and says fomepizole is preferred. No key-text change was needed. |
| pediatric-fever-25 q4 | Pass | NICE NG143 1.4.9 (oral antibiotics) and 1.3.5, 1.4.5, 1.5.26 (green features, home care) say what the text says. NICE 1.4 applies to general EDs. His pulse of 150 at 14 months is not above the amber cut-off of 150. |
| pediatric-fever-29 q4 | Pass | APLAR 2026 statement 14 (pulse methylprednisolone first) and statement 15 (add cyclosporin A or anakinra after 48 to 72 hours of inadequate response), read in full text on PMC. |
| pediatric-fever-31 q2 | Pass | AHA 2023 Table 3 lists diphenhydramine. Bicarbonate for other sodium channel blockers is COR 2a. |
| pediatric-fever-33 q2 | Pass | AHA 2023 section 14 says benzodiazepines control agitation, relax muscles and treat seizures, and that antipsychotics control agitation. Every distractor now has a true reason. |
| pediatric-fever-33 q3 | Pass | AHA 2023 says evaporative or immersive cooling is faster than cold packs. |
| pediatric-fever-40 q3 | Pass | NICE CG57: with eczema herpeticum around the eyes, same-day ophthalmological and dermatological advice. |
| pediatric-fever-43 q3 | Pass | NICE NG143 1.7.3 matches: a fit, a non-blanching rash, or a child less well. |
| pediatric-fever-44 q3 | Pass | Narchi 2005 abstract: 97% within 6 months, no permanent impairment after a normal urinalysis. |
| pediatric-fever-45 q1 | Pass, with a note | NG143 1.2.5 and 1.2.20 are quoted correctly. 1.2.20 lists the bulging fontanelle itself among the classic signs often absent, so the sentence does not mean the fontanelle is more reliable than neck stiffness. It does not weaken the key, because the finding is present here. 1.2.19 (consider meningitis with fever and a bulging fontanelle) is the most direct support. |
| pediatric-fever-47 q1 | Pass | WHO HFMD 2011 section 5.2: varicella involves a larger area including the scalp and spares the palms and soles. |
| pediatric-fever-47 q2 | Pass | The WHO guide treats with paracetamol and adequate fluids. The lidocaine line is standard teaching and has no source here (see below). |
| seizures-19 q1 | Fixed | The new lidocaine line gave only "used with caution" and dropped why it is not the first drug. ECBC and AHA 2023 both place lidocaine after bicarbonate. AHA says lidocaine and phenytoin are "second-line therapies after sodium bicarbonate". The line now reads: "Lidocaine is kept for dysrhythmias that persist after bicarbonate, and it lowers the seizure threshold, which matters after his seizure." Confidence medium. |
| seizures-19 q3 | Fixed | The prompt asks for the "usual target", but the explanation gave only AHA's ceiling. This is a mismatch in wording, not in the key. The explanation now adds that Emergency Care BC repeats boluses until the QRS narrows or the serum pH reaches 7.55, then gives the AHA limits. Confidence medium. |
| seizures-32 q1 | Pass | AHA 2023 section 6 says benzodiazepines are the mainstay and that beta blocker safety is "controversial, with studies showing both benefit and harm". Diazepam stays the single best answer. |
| seizures-40 q2 | Pass | NICE NG217: offer MRI to people diagnosed with epilepsy unless they have idiopathic generalised epilepsy, and routine EEG supports the diagnosis. |

### Writer's flags

- seizures-19 q3. The key "Serum pH 7.50 to 7.55" still stands. ECBC 2018 (the Canadian source) uses pH 7.55 as the end point for repeat boluses. AHA 2023 gives 7.50 to 7.55 as a ceiling. The key sits in that range under both sources, and every distractor is outside it. The explanation now cites both.
- pediatric-fever-40 q2. No CPS statement on eczema herpeticum dosing was found. The AAP Red Book acyclovir page returned 403. The Perth Children's Hospital ChAMP aciclovir monograph (https://pch.health.wa.gov.au/~/media/Files/Hospitals/PCH/General-documents/Health-professionals/ChAMP-Monographs/Aciclovir.pdf) lists eczema herpeticum in children 3 months to 18 years at IV 10 mg/kg (maximum 750 mg) every 8 hours. This matches the key of 140 mg for 14 kg. Other published ranges run from 5 to 10 mg/kg every 8 hours. Every other option is a non-antiviral, so the key holds whatever dose within the range is chosen. The citation was not changed, because the monograph is a hospital formulary and not a CPS or AAP source.
- pediatric-fever-29 q2. The EULAR/PReS 2024 Still's disease recommendations (Fautrel B et al. Ann Rheum Dis 2024, https://doi.org/10.1136/ard-2024-225851, full text PMC11672000) say to consider malignancy as an alternative diagnosis (RS3). They also warn that glucocorticoids are "potentially deleterious if Still's disease is misdiagnosed, particularly in the presence of malignancies". Their main text does not name bone marrow examination. The investigations are listed in online supplementary table 2, which was not opened. The key is consistent with the guideline, but the specific test still rests on Nelson. The source was not changed.

### New sources spot-checked (opened)

1. Glatstein 2012, Clin Toxicol (Europe PMC abstract). Supports loc-22 q3 and q4.
2. Barceloux 2002, AACT methanol (Europe PMC abstract). Supports folinic acid and fomepizole as the preferred antidote.
3. Lavonas 2023, AHA (full text PDF). Supports Table 3, the sodium and pH limits, hypokalemia, section 6 on cocaine, and section 14 on sympathomimetics.
4. NICE NG143 (full PDF). Supports 1.2.5, 1.2.19, 1.2.20, 1.3.5, 1.4.9 and 1.7.3.
5. APLAR 2026 (PMC full text). Supports statements 14 and 15.
6. Narchi 2005, Arch Dis Child (Europe PMC abstract). Supports the text.
7. WHO HFMD 2011 (IRIS PDF). Supports section 5.2 and the treatment box.
8. WHO pocket book 2013. Dose confirmed through the WHO Bulletin 2021 discussion. The NCBI page was blocked by a captcha.
9. Emergency Care BC TCA 2018 (page). Supports the text on lidocaine, amiodarone, the pH 7.55 end point, phenytoin, flumazenil and intubation.
10. Creighton 2026, Petty 2004, Ozen 2010 and the two ILAE EpilepsyDiagnosis.org pages. Each exists with the title and year cited.

### Textbook chapters spot-checked against the publisher's table of contents

- Nelson 22nd ed. (Elsevier inspection copy table of contents). Checked: 196 Juvenile Idiopathic Arthritis, 210 Vasculitis Syndromes, 221 Fever in the Older Child, 227 Staphylococcus, 229 Group A Streptococcus, 299 Herpes Simplex Virus, 301 Epstein-Barr Virus, 303 Roseola, and 545 Lymphoma. All match.
- Rosen's 10th ed. (Elsevier US table of contents). Checked: 88 Seizure, 169 Pediatric Neurologic Disorders, and 174 Medical Emergencies During Pregnancy. All match.
- Goldfrank's 11th ed. The McGraw Hill product page confirms Initial Evaluation of the Patient and Principles of Managing the Acutely Poisoned or Overdosed Patient, and it stops after Part A. AccessEmergency Medicine, AccessPharmacy, VitalSource and pdfcoffee all returned 403, and Open Library failed. Search-engine summaries of the publisher's pages point to Chapter 47 for Antidiabetics and Hypoglycemics/Antiglycemics and Chapter 48 for Antiepileptics. No table of contents confirmed this, so no number was added. L-Carnitine and Serotonin Reuptake Inhibitors and Atypical Antidepressants remain unverified. The four Goldfrank's citations stay title-only.

### Needs physician decision

- pediatric-fever-47 q2. Consider citing the FDA 2014 Drug Safety Communication on oral viscous lidocaine for the lidocaine distractor. Its 22 cases included stomatitis as well as teething. The FDA page returned 401, so it was not added.
- pediatric-fever-40 q2 and pediatric-fever-29 q2. See the flags above.

### Checks

- npx tsc --noEmit -p .: clean.
- SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 675 passed.
- SAMP_BATCH=s46, same command: 687 passed.
- SAMP_BATCH=s49, same command: 651 passed.

### Summary

The review checked 19 changed explanations. 17 pass. 2 were fixed, both in explanations only: seizures-19 q1 and q3. No key, option or stem changed. There were no key-text changes. loc-25 had no remaining folic acid text.
