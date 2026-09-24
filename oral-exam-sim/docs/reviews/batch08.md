# Batch 08 clinical accuracy review

Adversarial review of the ten batch 08 cases (toxicology, mental health, infection). Every dose, calculation, threshold, legal statement and citation was checked. All cases stay `reviewed: false`. Type check and the case test suite pass.

Verdicts: Accurate means no change was needed. Corrected means errors were fixed in the file. Needs physician attention means a judgement call remains that a physician should settle.

---

## chronic-lithium-toxicity: Confused and shaky after a stomach bug

**Verdict:** Corrected

**Changes**
1. Serum osmolality. Before: measured osmolality 312 mOsm/kg. The calculated value from sodium 148, glucose 6.1 and urea 21.4 is about 323, so measured was lower than calculated, which cannot happen. After: 326 mOsm/kg.
2. EXTRIP criteria. Before: the model answer left out the "suggested" criterion of a level over 5.0 mmol/L. After: added it alongside confusion and the 36 hour rule.
3. Nephrology pushback. Before: the answer relied only on decreased consciousness. After: also states that with her creatinine doubled she is unlikely to fall below 1.0 mmol/L within 36 hours, a second EXTRIP ground at a level of 3.4.
4. Diuretics. Before: said diuretics directly increase proximal lithium reabsorption. After: diuretics worsen volume depletion, and volume depletion drives proximal reabsorption. This is the accurate mechanism for loop diuretics.
5. Added the verified PubMed URL for the EXTRIP lithium paper.

**Verified**
- EXTRIP lithium recommendations (Decker et al, CJASN 2015): recommended for impaired kidney function with a level over 4.0, or decreased consciousness, seizures or life threatening dysrhythmias at any level. Suggested for a level over 5.0, confusion, or more than 36 hours to reach 1.0. Stop when the level is under 1.0, there is clinical improvement, or after at least 6 hours if no level is available. https://pubmed.ncbi.nlm.nih.gov/25583292/
- Baird-Gunning et al, J Intensive Care Med 2017, and CANMAT and ISBD 2018 bipolar guideline are real publications.
- Lorazepam 0.1 mg/kg capped at 4 mg for 64 kg is 4 mg. Correct.

**Residual for the physician**
- Whether GCS 13 with E3 counts as "decreased level of consciousness" or only "confusion" is an examiner judgement. The case now gives two grounds so the teaching holds either way.

---

## chronic-digoxin-toxicity: Nausea and a slow pulse in an older man

**Verdict:** Corrected

**Changes**
1. Atropine dose. Before: atropine 0.5 mg. After: 1 mg, the current adult bradycardia dose.
2. Pacing feedback. Before: stated that pacing a digitalis toxic heart triggers ventricular dysrhythmias and is poorly tolerated, framed as a reason against it. After: atropine and pacing are reasonable bridges (the 2023 AHA update rates both as "may be reasonable") but often fail, and capture can be unreliable. The antidote is still the answer. The choice stays partial.
3. Calcium. Before: "Calcium is not first line here." After: calcium probably does not cause harm but does not treat the cause and is not first line. The old "stone heart" teaching is not supported by recent data, and the case should not imply calcium is dangerous.
4. Metoprolol. Before: the prevention answer said rate control can rely on the beta blocker, although he arrived with complete heart block on metoprolol. After: hold metoprolol at presentation and restart it cautiously once the block resolves.
5. Added verified URLs for the Canadian DigiFab monograph and the AHA 2023 update.

**Verified**
- Unit conversion: 4.6 nmol/L divided by 1.28 is 3.6 ng/mL. Correct.
- Chronic dose: 3.6 times 68 divided by 100 is 2.4 vials, round up to 3. Correct.
- DigiFab is 40 mg per vial and binds about 0.5 mg digoxin. Marketed in Canada by Paladin since 2011. https://pdf.hres.ca/dpd_pm/00046345.PDF
- AHA 2023 focused update (Lavonas et al): Fab class 1, atropine and pacing class 2b, lidocaine as a bridge for ventricular dysrhythmias. It makes no calcium or magnesium recommendation for digoxin. https://pubmed.ncbi.nlm.nih.gov/37721023/
- Chan and Buckley, Clin Toxicol 2014, and the 2020 CCS and CHRS AF guideline are real.

**Residual for the physician**
- Apixaban 2.5 mg twice daily at his baseline (age 82, weight 68 kg, creatinine 98) meets only one dose reduction criterion, so the listed dose may be underdosed. Left as written because it is plausible real world prescribing, but it could confuse learners.
- Amiodarone is labelled unsafe. It is certainly wrong here, but some examiners may call it partial.

---

## severe-agitation-sedation: A man held down by police

**Verdict:** Corrected. Needs physician attention for source mapping.

**Changes**
1. ACEP citation. Before: no year and no journal. After: Ann Emerg Med 2024 with PubMed URL. The policy was approved by the ACEP board in October 2023 and published in January 2024.
2. Legal basis. Before: said restraint and sedation were both allowed under the Health Care Consent Act emergency provision. After: physical restraint to prevent imminent serious harm rests on the common law duty to restrain, which the Act preserves. Sedation is treatment and falls under the emergency treatment provision.
3. Sources. Before: rubric items on cooling and intubation cited the ACEP agitation policy, which addresses only the choice of parenteral sedative. After: added the AHA 2023 poisoning update, which recommends sedation and rapid external cooling for sympathomimetic toxicity, and mapped cooling and the airway item to it. The statute citation now names both the Health Care Consent Act and the Mental Health Act, since the Form 1 item relies on the latter.

**Verified**
- ACEP clinical policy on severe agitation. One critical question, on the best parenteral agent. Ketamine appears as a Level C option. https://pubmed.ncbi.nlm.nih.gov/38105109/
- AHA 2023 update: sedation for sympathomimetic agitation (class 1) and rapid external cooling for life threatening hyperthermia (class 1).
- Ketamine 4 mg/kg IM for 90 kg is 360 mg. Correct and within the usual 4 to 5 mg/kg range.
- Olanzapine IM with a parenteral benzodiazepine carries a product monograph warning. The unsafe label is also justified by leaving the patient unmonitored.
- Mental Health Act section 17 lets police take a person to a physician for examination. It does not authorize treatment.
- Project BETA papers (Holloman and Zeller, Richmond et al, WJEM 2012) are real.

**Residual for the physician**
- No listed source directly supports three rubric items: ending prone restraint (ag-r1), the rhabdomyolysis urine output target of 200 to 300 mL/h (ag-m4), and post sedation capnography (ag-m2). They are still cited to ACEP. The content is standard. Consider adding a rhabdomyolysis review and a restraint safety source, but the case is already at the six source limit.
- The Patient Restraints Minimization Act is cited for least restrictive restraint. Its application to an ED patient brought under section 17 is reasonable but worth a legal check.

---

## suicidal-patient-leaving: A farmer who wants to go home

**Verdict:** Corrected

**Changes**
1. Form 1 timing. Before: "Sign it the same day." That is not a legal requirement. After: the physician must have examined the person within the 7 days before signing. The form gives 7 days from signing to take him to a Schedule 1 facility, then up to 72 hours of detention there.
2. Form 42. Before: listed without saying who gives it. After: the signing physician gives it and explains the right to a lawyer without delay.
3. Holding him before the Form 1. Before: "you can hold him briefly." After: the common law duty to restrain lets you stop him while you examine him and complete a Form 1.
4. PHIPA. Before: general statement. After: names PHIPA section 40 and its "reasonable grounds" and "eliminate or reduce a significant risk of serious bodily harm" test.

**Verified**
- Form 1 timing and 72 hour limit, and that it is not authority for treatment. Ontario Ministry of Health Form 1 information guide (2024): https://www.ontario.ca/files/2024-05/moh-information-guide-application-for-psychiatric-assessment-form-1-en-2024-05-21.pdf
- Perlman CM et al, Suicide Risk Assessment Inventory, OHA and CPSI 2011, is real.
- ACEP 2017 clinical policy on the adult psychiatric patient says psychiatric assessment should rest on cognition, not a set alcohol level. Real.
- Stanley and Brown 2012 and Wilson et al 2012 are real.

**Residual for the physician**
- The consultant pushback node suggests escalation through CritiCall. Whether CritiCall handles Form 1 psychiatric transfers in every region is not certain. Local escalation paths may be more accurate.
- PHIPA disclosure is permissive, not mandatory. The case frames it correctly, but the examiner may also want to hear about contacting the provincial Chief Firearms Officer.

---

## psychosis-medical-cause: Strange behaviour for three days

**Verdict:** Corrected

**Changes**
1. Substitute decision maker. Before: "his wife as spouse is the substitute decision maker." After: she is, unless he has a guardian or an attorney for personal care. The Health Care Consent Act ranks those first.
2. Rights on incapacity. Before: not mentioned. After: tell him he has been found incapable and can apply to the Consent and Capacity Board.
3. Acyclovir teaching. Before: "Every hour of delay worsens outcome." That overstates the evidence. After: delay is linked to worse outcome.
4. Statute citation now covers both the Health Care Consent Act and the Mental Health Act, since a rubric item teaches Form 1 limits.

**Verified**
- Acyclovir 10 mg/kg for 82 kg is 820 mg. Correct.
- Levetiracetam 60 mg/kg for 82 kg is 4920 mg, capped at 4500 mg. Correct. Fosphenytoin 20 mg PE/kg and valproate 40 mg/kg are the ESETT doses.
- Repeat LP and PCR in 3 to 7 days after an early negative HSV PCR matches IDSA 2008.
- The Health Care Consent Act defines treatment to include diagnostic procedures, so the LP needs consent.
- Tunkel 2008 and 2004, Venkatesan 2013, Glauser 2016 and ACEP 2017 are all real.

**Residual for the physician**
- CSF to serum glucose ratio is 0.53, which the model answer calls normal. Some references use 0.6 as the normal cut off. Consider a CSF glucose of 4.0 if you want no ambiguity.

---

## severe-alcohol-withdrawal: Shaking and seeing bugs on the wall

**Verdict:** Corrected. Needs physician attention on thiamine dosing.

**Changes**
1. Thiamine and its source. Before: 500 mg IV three times daily presented as the dose, cited to the Canadian guideline. The Canadian guideline actually gives parenteral thiamine 200 to 300 mg daily for suspected Wernicke. After: high dose IV thiamine such as 500 mg, with a note that regimens range from 200 to 500 mg up to three times daily and that the Canadian guideline gives a floor of 200 to 300 mg daily.
2. Thiamine omitted choice. Before: feedback said glucose loads without thiamine precipitate Wernicke, which is weakly supported. After: untreated Wernicke can leave permanent memory loss, and ongoing dextrose without thiamine may worsen it. Still unsafe.
3. Discharge drug. Before: he leaves on naltrexone despite AST 188 (about 5 times normal), platelets 96 and hepatomegaly. After: acamprosate is chosen, with naltrexone avoided in acute hepatitis or liver failure. Creatinine is normal so no acamprosate adjustment is needed.
4. Form 1 wording. Before: "not the tool because this is a medical delirium." After: a Form 1 is for psychiatric assessment and does not authorize medical treatment.
5. CRISM citation. Before: organisation and year only. After: Wood E et al, CMAJ 2023, with URL.

**Verified**
- The Canadian guideline for the clinical management of high risk drinking and alcohol use disorder, CMAJ 2023, volume 195, page E1364. The paper names CRISM as the Canadian Research Initiative in Substance Misuse. CRISM now calls itself the Canadian Research Initiative in Substance Matters. The citation keeps the name used in the paper. https://www.cmaj.ca/content/195/40/E1364 and https://crism.ca/alcohol-use-disorder/
- Naltrexone and acamprosate are first line in that guideline. It lists acute hepatitis or liver failure as naltrexone contraindications. It does not discuss phenobarbital.
- Phenobarbital 10 mg/kg for 78 kg is 780 mg. The single dose design matches Rosenson et al, J Emerg Med 2013.
- Anion gap 133 minus 96 minus 17 is 20. Correct.
- ASAM 2020 withdrawal guideline and Sullivan 1989 CIWA-Ar are real.

**Residual for the physician**
- Choose a house thiamine dose for suspected Wernicke. The case now accepts a range.
- Phenobarbital 10 mg/kg on top of 200 mg of diazepam is a lot of sedative. The strong choice has ICU and airway ready, but some examiners will want the titrated 130 to 260 mg approach in a patient already heavily loaded.
- A 2026 CMAJ update to the screening section of the 2023 guideline was found. It does not appear to change withdrawal or pharmacotherapy content.

---

## eating-disorder-instability: Fainting at the campus gym

**Verdict:** Corrected

**Changes**
1. Refeeding monitoring. Before: electrolytes at least daily for the first week. After: every 12 hours for the first 3 days, then at least daily, in line with ASPEN for high risk patients. The strong choice, unsafe feedback and rubric were updated to match.
2. Form 1 grounds. Before: "mental disorder with likely serious bodily harm or serious physical impairment." After: Box A, using lack of competence to care for herself with likely serious bodily harm or serious physical impairment. Box B does not apply because she has never been treated.
3. Capacity question. Before: capacity "for the decision to leave." The Health Care Consent Act governs treatment decisions. After: capacity to consent to or refuse admission and refeeding.
4. Rights on incapacity. Before: absent. After: tell her of the finding and her right to apply to the Consent and Capacity Board. In a psychiatric facility this means a Form 33 and a rights adviser.
5. SDM. Before: "likely a parent." After: a parent, if there is no guardian, attorney for personal care or partner. There is no age of consent in Ontario, so at 19 the rules are the same as for any adult.

**Verified**
- BMI 41.2 divided by 1.68 squared is 14.6. Correct.
- SAHM 2022 position paper, RCPsych MEED 2022 (CR233) and ASPEN refeeding consensus (da Silva 2020) are real.
- Her vital signs meet SAHM young adult admission criteria (heart rate under 50, systolic under 90, temperature under 35.6, large orthostatic change).

**Residual for the physician**
- No national Canadian adult eating disorder guideline was found. The Canadian practice guideline (Couturier et al 2020) and the CPS statement cover children and adolescents only. The case relies on SAHM, MEED and ASPEN. Consider whether a provincial adult resource should be cited.
- Starting calories differ between ASPEN (10 to 20 kcal/kg) and MEED and SAHM, which support higher starts with monitoring. The model answer mentions both.

---

## adult-septic-shock: Fever and confusion in a retired teacher

**Verdict:** Corrected

**Changes**
1. Dopamine choice. Before: labelled unsafe. Dopamine is inferior but not truly unsafe, and some centres still use it. After: partial, with feedback that starting a pressor is right, the agent is wrong, and norepinephrine can run peripherally.
2. Shock definition teaching. Before: "Lactate over 4 or vasopressor need after fluid defines high risk." After: septic shock is vasopressor need for MAP 65 with lactate over 2 despite fluid. Lactate of 4 or more marks hypoperfusion.
3. Peripheral norepinephrine. Before: no guidance on site. After: a good IV in a large proximal vein, ideally the upper arm, with frequent checks.

**Verified**
- 30 mL/kg for 70 kg is 2.1 L. Correct.
- Norepinephrine 0.05 to 0.1 mcg/kg/min for 70 kg is 3.5 to 7 mcg/min. Correct.
- Surviving Sepsis 2021: antibiotics within 1 hour for shock, at least 30 mL/kg for hypoperfusion (weak), balanced crystalloid, peripheral start of vasopressors, vasopressin at norepinephrine 0.25 to 0.5, hydrocortisone 200 mg per day.
- Tokyo 2018 grade III cholangitis: any norepinephrine, altered consciousness, INR over 1.5 and platelets under 100 are all met. Creatinine 172 is just under the 176.8 threshold, but her oliguria meets the renal criterion. TG18 says urgent drainage as soon as possible once the patient is stabilized with organ support.
- Kiriyama 2018, Miura 2018, Evans 2021 and PRISM 2017 are all real.

**Residual for the physician**
- Tokyo 2018 frames grade III drainage as urgent after initial stabilization, not strictly "tonight". Pushing for overnight drainage in a patient on escalating norepinephrine is defensible, but the accepting morning ERCP choice is correctly partial, not unsafe.
- The safe intubation rubric item cites Surviving Sepsis, which does not cover airway technique.

---

## necrotizing-soft-tissue-infection: Leg pain after a scrape

**Verdict:** Corrected

**Changes**
1. Antibiotic feedback. Before: "This matches IDSA guidance" for vancomycin, piperacillin tazobactam and clindamycin. IDSA 2014 lists vancomycin plus piperacillin tazobactam as the empiric regimen and adds clindamycin for streptococcal or clostridial infection. After: vancomycin plus piperacillin tazobactam is the IDSA empiric regimen, and adding clindamycin is standard when streptococcal toxic shock is possible.
2. Added the verified URL for the PHAC guideline.

**Verified**
- LRINEC: CRP 312 gives 4, WBC 19.6 gives 1, hemoglobin 124 gives 1, sodium 130 gives 2, creatinine 158 gives 2, glucose 7.2 gives 0. Total 10. Correct.
- Vancomycin 25 mg/kg for 80 kg is 2 g. Correct.
- The PHAC 2006 invasive group A strep guideline is still the national reference. Canadian surveillance papers from 2024 still cite it. Chemoprophylaxis is recommended for close contacts of severe cases. https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/06pdf/32s2_e.pdf
- The CPS statement on invasive group A strep management and chemoprophylaxis also exists. https://cps.ca/en/documents/position/Invasive-group-A-streptococcal-disease
- Stevens 2014 IDSA and Wong 2004 LRINEC are real.

**Residual for the physician**
- Group A strep clindamycin resistance is rising in Canada. Linezolid is sometimes used for toxin suppression. Consider a line in the teaching.
- Invasive group A strep is reportable in Ontario. The Ontario infectious disease protocol could be cited as well, but the case is already at a reasonable source count.

---

## febrile-neutropenia: Chills at home during cancer treatment

**Verdict:** Corrected

**Changes**
1. Ceftriaxone feedback. Before: "no gram positive coverage for her port." Ceftriaxone covers streptococci and MSSA. After: it misses Pseudomonas, MRSA and coagulase negative staphylococci, the likely port organisms.

**Verified**
- MASCC: moderate burden 3, systolic over 90 gives 5, no COPD 4, solid tumour 4, needs IV fluid 0, outpatient 3, age under 60 gives 2. Total 21. Arithmetic is correct. The teaching that clinical instability overrides the score matches ASCO and IDSA 2018.
- Vancomycin 25 mg/kg for 65 kg is about 1.6 g. Correct.
- Cefepime 2 g every 8 hours and piperacillin tazobactam 4.5 g every 6 hours are standard empiric regimens (IDSA 2010). Indications for adding vancomycin are correctly listed.
- Port pocket infection and septic shock from a line are indications for removal (Mermel 2009). A 3 hour differential time to positivity supports a line source.
- Freifeld 2011, Taplitz 2018, Klastersky 2000, Mermel 2009, Shenoy 2019 and Evans 2021 are all real.

**Residual for the physician**
- No Canadian febrile neutropenia source is cited. Consider a provincial cancer agency guideline if a Canadian anchor is wanted.

---

## Batch summary

All ten cases were changed. There were 37 corrections in total: lithium 5, digoxin 5, agitation 3, suicidal patient 4, psychosis 4, alcohol withdrawal 5, eating disorder 5, septic shock 3, necrotizing infection 2, febrile neutropenia 1.

The most important fixes:
- A Canadian guideline was cited for a thiamine dose it does not give.
- A patient with an AST 5 times normal and low platelets was discharged on naltrexone.
- A made up legal requirement to sign the Form 1 on the day of the exam.
- Form 1 grounds were misstated for a patient with no prior treatment.
- An internally impossible osmolality.
- An outdated atropine dose.
- An ACEP policy was cited for content it does not cover.

All doses, weight based calculations, scores and cited publications were rechecked. No fabricated citations were found. All URLs added were confirmed by search. The writing reads as original case material, and nothing appeared copied from a textbook or question bank.

For the physician:
- Settle the thiamine dose for suspected Wernicke.
- Add sources for the unsupported agitation rubric items.
- Confirm local escalation paths such as CritiCall for psychiatric transfers.
- Decide whether an adult Canadian eating disorder source should be cited.
