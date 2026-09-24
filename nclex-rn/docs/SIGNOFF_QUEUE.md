# Sign-off queue for Arjan

Every item in the bank ships with `reviewed: false`. This file gathers what the 48 adversarial reviews left for Arjan. The full reports are in `docs/reviews/`.

## Answer key changes on bank items

Three bank items changed their key during review. Each needs Arjan's approval before sign-off.

- rn-s21-18. The cardioversion order had two defensible sequences. The reviewer made one sequence correct.
- rn-s27-26. The implant duration moved from up to 3 years to up to 5 years, to match the Nexplanon label the FDA approved on 16 January 2026.
- rn-c04-2-2. A matrix row (furosemide) was replaced because it was a second defensible answer. No existing row changed its key.

Every review also changed the key of one planted calibration item (the magnesium antidote). Those items were never in the bank and are not listed here.

## Items the reviewers flagged, by batch

The notes below are copied from each review under "Key changes" and "Needs Arjan's decision". Planted calibration items are left out.

### c01

#### Needs Arjan's decision

- rn-c01-4 timeline: the last drink moved from about 36 to about 24 hours. If you would rather keep 36 hours, the onset reference and the 4-2 rationale then need rewording for a delayed onset.
- rn-c01-5-5: the vitals (RR 22, new altered mentation, HR 104, BP down to 108/62) meet two qSOFA criteria. A recommendation of "see her today" may be less urgent than some reviewers expect. The key is still the best of the tokens.
- rn-c01-5-4: the AP measures vital signs on a resident with new fever and tachycardia. This is defensible because the nurse interprets them, but local policy may differ.
- rn-c01-2-5: weighing pads by the AP during active hemorrhage, as the writer flagged. Left as is.
- The CDC gastroenteritis MMWR is from 2003. No newer CDC guidance replaces it, so it was kept.

### c02

#### Needs Arjan's decision

- rn-c02-1-3 says a heart rate of 104/minute does not fit thyroid storm. Thyroid storm usually brings a much faster rate. Left as written, but a reader might want "only mildly fast" added.
- rn-c02-5 rests on Winstein 2016 for dysphagia content that I could see only in the abstract. Brunner carries the swallowing teaching as the second source.
- I ran one read-only `git diff --stat` by mistake while checking edits. It changed nothing.

### c03

#### Needs Arjan's decision

- rn-c03-3-2 keys a heart rate of 112/minute and a temperature of 38.1°C to both pancreatitis and withdrawal. This is defensible in a multi mode matrix and I left it.
- rn-c03-2-4 is tagged MOC. It could be read as PPT. I left the tag.
- rn-c03-5-5 starts a heparin infusion while the history still lists enoxaparin 40 mg daily. No item says the enoxaparin is stopped. Consider a line in the stem.
- helpers.ts gives the GOLD 2026 Report the year 2025. The PDF is dated December 2025 and copyrighted 2025 and 2026. Either year is defensible.

### c04

#### Key changes

- rn-c04-2-2 is not a key flip. The furosemide row was replaced by a new row, so no existing row changed its key. Logged here so Arjan sees it.

#### Needs Arjan's decision

- AHA PALS 2025 materials are out. A secondary summary of the 2025 card gives infant heart rate 100 to 180/minute, not the 2020 awake range of 100 to 190/minute used in rn-c04-1-2 refs. The primary card could not be opened (503). The item value of 172/minute falls inside both, so the key holds. The citation and ref may need updating to 2025.
- UKKA 2023 advises a 10% glucose infusion after insulin when pre-treatment glucose is below 7.0 mmol/L. The client in case 2 had 5.3 mmol/L. rn-c04-2-6 teaches the hypoglycemia correctly, but a later edit could add this step.
- rn-c04-2-4 gives calcium gluconate over 15 minutes. UKKA 2023 says 10 minutes, ALS 2021 says 15. Both are within the US label limit. No change made.

### c05

#### Needs Arjan's decision

- rn-c05-4-4 keys "prone for 30 minutes 3 times a day" and "sitting limited to 1 hour at a time". Both match common amputation teaching but I could not open Brunner to confirm the exact figures.
- rn-c05-5-6 keeps the option "the warmest setting on the label". CDC now says to follow the label and dry fully. The option is not false, but Arjan may prefer the CDC wording in the option too.
- rn-c05-4-2 carries need PSY while four of six rows test contracture and falls. BCC or RRP may fit better.

### c06

#### Needs Arjan's decision

- rn-c06-4 (case design, items 3 and 4). Spasovski 2014 counts vomiting as a severe symptom, and confusion and headache as moderately severe symptoms. It gives hypertonic saline for both, and also for an acute fall of more than 10 mmol/L without severe symptoms. At 0745 she has vomited, is slowed and has headache, and her sodium fell 16 mEq/L in about 48 hours. By the case's own source she qualified for 3% saline before the 1015 seizure, not fluid restriction alone. I removed the false "first treatment" claim from rn-c06-4-4 but kept the case flow. Options: accept the case as a teaching simplification, drop the 0630 vomiting and slow the fall, or have the team give the bolus at 0745.
- rn-c06-3-5. When a durable power of attorney for health care takes effect varies by state and usually needs a documented finding of incapacity. The writer flagged this too. The key is defensible as written.

### c07

#### Needs Arjan's decision

- rn-c07-1-5. The propranolol 60 mg every 4 hours prescription stands while 1-3 showed BP 98/58 mmHg with new crackles. ATA Table 7 advises caution and invasive monitoring in heart failure. The item tests iodide timing, so the key is safe. A nurse would question this dose, though, and the item never says so. Consider adding a BP at 0800 or changing the beta blocker to esmolol.
- rn-c07-3-4. The why for the ointment says topical agents are held until the burn team assesses the wound. A clean dry dressing before transfer is well supported. I could not open the ABLS manual to confirm the explicit hold on topical agents. The key does not change either way.
- rn-c07-3-5. The stem says no IV fluid was given before 0400, 90 minutes after arrival, for a 27% burn. That depicts delayed resuscitation as routine. The arithmetic needs the delay. Consider a reason in the stem, such as failed IV access until intraosseous access at 0400.
- rn-c07-3 tabs. The 27% estimate equals the anterior trunk and anterior arms. The full-thickness dorsal hand burn would add about 1%. It changes no key.
- rn-c07-1-2. The hemoglobin reference range is in g/L while the result is in g/dL. A g/dL range with its SI pair fails the unit gate in an item tab, so it was left as is.
- During the review the whole bank near duplicate test briefly failed on rn-c01-1-1 and rn-c03-1-1 against rn-c12-1-1, while batch c12 was being written. No c07 item was involved, and it passed on the final run.

### c08

#### Needs Arjan's decision

- rn-c08-5-5 teaches double chemotherapy gloves and an impermeable gown for body fluids. ONS also advises face protection when splashing is likely. The item does not raise splashing, so no change was made.

### c09

#### Needs Arjan's decision

- rn-c09-5-4 Orders tab gives nifedipine and magnesium sulfate together. Combined use carries a reported risk of hypotension and neuromuscular blockade. It is common practice and the item does not test it, so it was left. Consider a monitoring note or a different tocolytic.
- rn-c09-1-5 keys calling the blood bank and the other client's nurse as the next action. The client is hypotensive at 96/58 mmHg. No option names the primary health care provider, so the key holds, but a reader may argue for the provider first.
- rn-c09-2-4 keys recording heparin in the allergy record. This is standard nursing practice. ASH does not state it directly.
- rn-c09-1-2 now relies on the added hemoglobin before surgery of 10.4 g/dL (104 g/L). Confirm the value suits the scenario.

### c11

#### Needs Arjan's decision

- The NCSL duty to warn page could not be fetched. Confirm the URL is still live, or replace it with the state statute summary the team prefers.
- rn-c11-1-5 gives ibuprofen to a toddler who had no wet diaper for 10 hours. The stem shows she is now drinking. Confirm whether a hydration note in the rationale is wanted.

### c12

#### Needs Arjan's decision

- The AAOS OrthoInfo page shows no review date, so the year 2023 in `aaosTkr` could not be confirmed. The page does show Neil P. Sheth as contributor.
- Textbook statements rest on Halter (rn-c12-1-5 observation after meals, rn-c12-5-4), Wong (rn-c12-4-2 loose tooth, rn-c12-4-6 bath soak) and Brunner (rn-c12-5-6 pillow under the knee). These are standard teaching but no page was checked.
- rn-c12-3-5 keys the subcutaneous heparin injection to the licensed practical nurse. This fits most state scopes but varies.
- The whole bank near duplicate test fails on rn-s25-47 against rn-s26-07 (Jaccard 0.54). Neither item is in c12 and I did not edit them. Every c12 test passes.

### c13

#### Needs Arjan's decision

- rn-c13-4-4 and rn-c13-4-1. IDSA 2017 prefers soap and water over alcohol rub and sporicidal cleaning mainly in outbreak or hyperendemic settings. CDC advises soap and water and spore-killing products without that limit. The keys follow CDC and are defensible. No edit made.
- rn-c13-3-4. The oxygen target row uses the BTS range of 94% to 98%, declared in `refs`. Many US units use 92% to 96%. The 2025 ATS pneumonia guideline confirms no corticosteroids in nonsevere pneumonia, so the key stands. Consider adding the 2025 ATS guideline as a second source once its full citation is confirmed.
- rn-c13-2-1 and rn-c13-2-2. The 2 to 3 mm wafer margin matches the usual 1/16 to 1/8 inch teaching. No edit made.

### c14

#### Needs Arjan's decision

- rn-c14-5-6 teaches traditional sternal precautions. Some centers now use "keep your move in the tube". The item still fits current NCLEX teaching.
- rn-c14-5-4 leaves volume loading out of the options. That avoids a second defensible key and was kept.
- The whole-bank near duplicate test fails on rn-c01-1-1 against rn-c17-3-1 (Jaccard 0.52). Neither item is in c14 and this review may not edit them. All other 43 tests pass with BATCH=c14.

### c15

#### Needs Arjan's decision

- NICE NG220 search results show an update dated 26 August 2026. The recommendations page returned 403, so I could not check whether the cited 2022 wording or the citation year needs updating.
- rn-c15-1-5 gives the scheduled enoxaparin to the LPN while the client is deteriorating. This fits delegation of a stable task, but state scope and facility policy vary.
- rn-c15-5-3 ranks airway before seizure control. In practice both happen at once.
- rn-c15-4 uses IV methylprednisolone 1 g for 3 days, which is US practice. NICE prefers oral 0.5 g for 5 days first.

### c16

#### Needs Arjan's decision

- rn-c16-2-6. The night aide comes twice a week, but the keyed finding is about 7 hours of sleep on most nights. The day program may explain the rest. Left as written.
- rn-c16-4-5. LPN insulin scope varies by state and province.

### c17

#### Needs Arjan's decision

- rn-c17-2 ARV guideline year 2025 and OI guideline year 2026 could not be read directly because clinicalinfo.hiv.gov returns 403. The content matches, but the year stamps are unconfirmed.
- rn-c17-2-4: the why for stopping prophylaxis gives the main criterion (CD4 200 or more for 3 months). The OI guideline also allows stopping at CD4 100 to 200 with an undetectable viral load (BII). Left as is for entry level.
- rn-c17-4-3: the rationale says folic acid does not block methotrexate. ACR 2021 supports folic acid with methotrexate, but the label warns folate may reduce response in cancer use. Left as is.
- rn-c17-4-2: a creatinine clearance of 38 mL/minute is keyed as raising toxicity risk, which is correct. Some readers may argue the nurse should question starting methotrexate at all. The item does not ask that.
- rn-c17-5-5: social worker keyed for drug cost. Some centers use a transplant financial coordinator.

### c18

#### Needs Arjan's decision

- rn-c18-2-4 teaches Rho(D) immune globulin at 28 weeks only. It is also given after birth if the newborn is Rh positive. The key is still the only full arrangement, but the rationale could name the postpartum dose.
- The ADA 2026 foot care section full text is not open. Its support for items 1-1 and 1-5 is now carried by the IWGDF 2023 guideline.

### c19

#### Needs Arjan's decision

- rn-c19-4-4: "Walk with him in the hallway" is keyed. A client on wet suction can walk only on water seal if the prescription allows. Consider adding that to the stem.
- rn-c19-3-2: the 2024 global ARDS definition keeps the same PaO2/FiO2 grades for intubated clients, so the Berlin key stands. A newer citation could be added.
- rn-c19-3-6: the propofol label gives no fixed triglyceride cutoff. 610 mg/dL as needing follow-up rests on the label's advice to monitor and adjust.
- rn-c19-2-4 (BCC) and rn-c19-2-6 (SIPC) Client Needs tags remain judgment calls.

### c20

#### Needs Arjan's decision

- rn-c20-2-5 still relies on an Irish source for the US peripheral potassium limits. A US nursing or pharmacy text would be a better fit.
- rn-c20-5-6 has the client speak about his wife's blood test. It is true that no screening is needed, but it tests a different person than the learner. Consider rewording to his own test.

### s01

#### Needs Arjan's decision

- rn-s01-34: approve the stem change. The old cue could be read to support pain as the first problem.
- rn-s01-20 is tagged recognize cues but asks what to do first. I left it because its key is a bedside assessment. After my changes recognize has 5 items and analyze has 3, and all six steps are still used.
- Canada notes are empty in every item. Items 05, 19, 26, 30, 33, 36 and 46 rest on US law or US forms. They need notes in the Canada pass.
- rn-s01-35: the rationale names slander, which is not a choice. It is harmless and I left it.

### s02

#### Needs Arjan's decision

- rn-s02-13: the TJC sentinel event page returns 403 and I could not open the policy itself. The item's rule (a fall with any fracture is a sentinel event) matches the published policy as I know it, but I did not confirm it from the page this session.
- HHS HIPAA and AHRQ pages (HIPAA_ACCESS, HIPAA, BEDSIDE, TEACHBACK) return 403 to this session. The citations are real and the regulation text was confirmed from the CFR where one applies.
- ELDER_REPORT carries year 2024 from the upload path. The brief's state list is dated June 2020. The true publication year may be earlier.
- rn-s02-45: the rationale says any team member can stop the procedure. NPG.01.06.03 describes the time-out but does not state that right in words. It is standard teaching.

### s03

#### Key changes

No key in rn-s03-01 to rn-s03-50 was changed.

#### Needs Arjan's decision

- rn-s03-30. The item is a video visit. The cited HHS guidance is for audio-only telehealth. It supports private settings and avoiding speakerphone. The statement that public-facing apps are not allowed came from the 2020 enforcement discretion notice, which has expired. The teaching is still right under HIPAA, but a video-specific HHS source would fit better.
- rn-s03-17. The NLC citation points to the FAQ page, which does not state the practice-law rule. Consider pointing the URL to the "Nurses and the NLC" page.
- rn-s03-18. The IHI FMEA tool page shows no year. The 2017 date is the writer's estimate.
- rn-s03-25. The key option names the defect ("Two active metoprolol prescriptions") while the distractors read as chart entries. This is mild cueing that is hard to remove in this format. Left as is.

### s04

#### Needs Arjan's decision

- rn-s04-30 keys two supervision actions. At a respiratory rate of 9/minute and hard to rouse, stimulation and naloxone by protocol would also come first clinically. No distractor offers them, so the key stands. Confirm the framing.
- rn-s04-05 keys the chain of command. The TeamSTEPPS two-challenge rule would also support restating the concern to the surgeon. That is not an option, so the key stands.
- The PSNet primer was reviewed in 2025. Consider updating its year from 2019.

### s05

#### Needs Arjan's decision

- rn-s05-13: the keyed CUS statement uses concerned and safety issue but omits uncomfortable, while the rationale lists all three. It is still the best choice. Left as written.
- rn-s05-41: the why calls a heart rate of 104/minute in new atrial fibrillation "controlled enough". That is defensible against the lenient rate target of under 110/minute. Left as written.

### s06

#### Needs Arjan's decision

- rn-s06-03: the refs line gives the HIV PEP window, but the source client has hepatitis C. It is harmless but unused. Consider removing it and PEP2025.
- rn-s06-37: the chlorhexidine why says it "may raise mortality". Klompas 2022 calls the signal uncertain. The hedge is fair and I left it.
- rn-s06-22: soap and water for C. difficile is the CDC preference. Some policies allow alcohol rub outside outbreaks. The key stands.

### s07

#### Needs Arjan's decision

- rn-s07-50: the why "Sharps containers are not reused" is sound practice, but the FDA page does not state it. Consider a local disposal program source if a direct citation is wanted.
- rn-s07-35: the 3 feet spacing comes from the 2007 isolation guideline. Some current CDC respiratory hygiene material uses 6 feet. The key is unaffected.

### s08

#### Needs Arjan's decision

- USDA_TX: a 2011 revision of the transplant booklet exists. The 2006 edition is real and supports the item. Consider citing the current FDA page.
- rn-s08-32: a nursing text now backs the contrasting step edge advice. Confirm Potter covers it, or reword the key to an item STEADI names, such as a handrail on both sides.
- rn-s08-21: the distractor about holding hands below the elbows borrows a surgical scrub rule. WHO does not set hand position for a surgical rub. Left as is.

### s09

#### Needs Arjan's decision

- The Perry 7th edition shows a publication date of April 2022 on the Elsevier page. The citation gives 2023, which is likely the copyright year. It was left as is.

### s10

#### Needs Arjan's decision

- The BENZOCAINE source names the FDA as its body but links to an AAFP news page. The FDA page that link describes moved and I could not find a working fda.gov URL for it.
- rn-s10-47 calls a total cholesterol of 215 mg/dL borderline high, but no cited source supports that. Decide whether to add a lipid source or drop the word.
- The difficulty of rn-s10-47 is 5. It may be closer to 3.

### s11

#### Needs Arjan's decision

- rn-s11-07 tests restraint time limits. The NCLEX test plan places use of restraints under Safety and Infection Control. The batch plan fixes all 50 items as PSY, so the tag was not changed. Consider moving the item to a SIPC batch or reframing it around behavioral crisis care.
- rn-s11-06: the order (move others away, calm verbal contact, offer a choice, then oral medication) is defensible under least restrictive care. Some texts put calm verbal contact first. Left as keyed.
- One early test run failed the bank-wide near duplicate gate. Three reruns passed 61 of 61. The failure was likely a concurrent edit in another batch. No s11 stem was involved in any passing run.

### s12

#### Needs Arjan's decision

- rn-s12-44: the "visit for a headache" distractor. Headaches can go with partner violence, but the keyed bruises and phone checks are clearly stronger. I left it as written.
- rn-s12-44: the CDC page covers physical violence and psychological control but does not name phone checking. Halter is also cited and covers controlling behavior.

### s13

#### Needs Arjan's decision

- rn-s13-37: the ref says PAINAD totals of 4 to 6 mean moderate pain. Warden 2003 did not publish bands. The tool instructions call the bands a possible reading that the literature has not confirmed. Also, moaning, a frown and guarding alone score about 3 or 4. The stated total of 6 implies findings the stem does not give. Consider giving the other findings or a lower total.
- rn-s13-03, 10 and 38: the earlier review's difficulty and distractor concerns still stand.
- rn-s13-16: the why for the rigid brace is sound practice, but neither cited guideline covers bracing.

### s14

#### Needs Arjan's decision

- rn-s14-12 (listed as a defect, not edited). The stem places Buck's traction on an 82-year-old with a hip fracture before surgery. The AAOS 2021 guideline advises against routine preoperative traction for hip fracture. The nursing care taught is correct, but the scenario models a practice current guidance discourages. Options: keep it and state that traction is prescribed, or move the scenario to another traction indication.
- rn-s14-35 is rated difficulty 4 for a two-step addition. A lower rating would be more honest, but level 3 already holds 20 of 50, so a change needs rebalancing across the batch.

### s15

#### Needs Arjan's decision

- rn-s15-48: the AWHONN monograph now has a 6th edition (2025). Consider moving the citation to it.
- rn-s15-33: CHEST 2012 is still the usual citation for managing a high INR without bleeding. A newer source may be preferred.
- rn-s15-11: the rationale says the left side, head down position traps air in the right atrium. Brunner and Suddarth says the same. Some sources say the right ventricle. I left it unchanged.

### s16

#### Needs Arjan's decision

- rn-s16-12 Canada note: the 2026 AHA/ASA guideline also endorses tenecteplase in the 4.5 hour window. The note no longer marks a Canadian difference. Consider setting it to an empty string.
- rn-s16-11: ketorolac 15 mg IM is half the usual adult IM dose. It is not unsafe. Carried over from the earlier review.

### s17

#### Needs Arjan's decision

- rn-s17-13 still teaches the alteplase bolus. The 2026 guideline gives tenecteplase as an equal choice. The item stays valid, but a tenecteplase item may be worth adding.
- rn-s17-15 names the subdural hematoma in the stem, so the bow-tie condition is easy. Left as is.

### s18

#### Needs Arjan's decision

- rn-s18-38 was reworked to secondary prophylaxis. Please confirm the new scenario.
- rn-s18-12 says haloperidol does not treat withdrawal. ASAM allows antipsychotics as an adjunct for agitation or hallucinations that benzodiazepines do not control. The key is safe. The why could be softened to "does not treat the withdrawal itself" if preferred.
- CDC_OPIOID is declared in common.ts but no item uses it. Harmless.

### s19

#### Needs Arjan's decision

- rn-s19-49: the item no longer states a 1 hour antibiotic target. I could not read the 2026 Surviving Sepsis timing recommendations. If the 2026 edition keeps 1 hour for probable sepsis, the 1 hour teaching can return with a ref that names the condition it applies to.
- rn-s19-29: the 2026 stroke guideline replaced the 2019 update. Its abstract confirms dysphagia recommendations, but I could not read their wording to confirm "before food, fluid or oral medicines".
- rn-s19-43: AWHONN published a 6th edition of Cervical Ripening and Labor Induction and Augmentation in 2025. The item cites the 5th edition of 2020. The teaching point is unchanged, but the citation may need updating, as flagged in s15.
- rn-s19-24: the 0 to 60 degree head of bed range is cited to Hinkle alone. I could not confirm the wording. The AACN Procedure Manual would be a stronger source.
- rn-s19-47: a bariatric source would strengthen the item. Kim J et al., ASMBS position statement on gastrointestinal leak, Surg Obes Relat Dis 11(4):739, 2015 (PMID 26071849), exists, but I could not read the full text to confirm the heart rate wording, so I did not add it.
- rn-s19-48: the cjmm is evaluate. The item asks for the best response to a new symptom, which reads as take action. I left it for Arjan.
- rn-s19-40: process is teaching, but the item asks the nurse to interpret a result, not to teach.

### s20

#### Needs Arjan's decision

- rn-s20-10: after a baseline result under 10 mm, the 2005 guideline calls for a second step test in 1 to 3 weeks. The item is right to call 8 mm negative, but it could mention the second step. I left it as written.
- rn-s20-09: the INS left side head-down position for air embolism is still taught but has weaker evidence in newer reviews. I could not read the INS full text to confirm the 2024 wording.

### s21

#### Key changes

- rn-s21-18. Before: correct order [1, 4, 0, 5, 2] with token 4 "Confirm sedation has taken effect". After: correct order [1, 0, 5, 2, 4] with token 4 "Press and hold the shock buttons". Reason: the old order had a second defensible sequence. Arjan needs to approve this change.

#### Needs Arjan's decision

- Approve the two key changes above.
- HINKLE cites the 15th edition of Brunner and Suddarth (2022). The 16th edition (2026) is out. The content used here is unchanged fundamentals, so I did not replace it. Decide whether the bank moves to the 16th edition.
- rn-s21-23 says saline instillation before suctioning is not recommended. The claim is standard, but the SHEA 2022 guideline cited on the item does not state it directly. A suctioning guideline could be added.

### s22

#### Needs Arjan's decision

- rn-s22-34 applies a 25 percent first-hour limit to mean arterial pressure. The 2025 guideline states the limit for systolic BP. The stem gives the limit as the prescription, so the key stands, but the cited source does not phrase it this way.
- rn-s22-12 refs pair 30 mL/kg with a lactate of 4 mmol/L or more. The 2021 guideline says "sepsis-induced hypoperfusion". The lactate threshold comes from the earlier hour-1 bundle. Left as is.
- The whole bank near duplicate gate fails on rn-s02-33 against rn-s03-29 (Jaccard 0.54). Neither item is in s22. Every s22 gate passes.

### s23

#### Needs Arjan's decision

- rn-s23-41 cites Adrogue and Madias (2000) for a limit of 10 mEq/L in 24 hours. It is still the usual teaching limit, but newer cohort data question it. Keep, or add a newer source.
- The whole bank test fails on two near duplicate pairs outside this batch (rn-s25-47 with rn-s26-07, and rn-c02-1-1 with rn-c14-3-1). No s23 stem is involved. This reviewer may not edit those files.

### s24

#### Needs Arjan's decision

- Client Needs tags. The whole batch is tagged PA. Some items arguably test other areas: seizure precautions (rn-s24-25) and bleeding precautions (rn-s24-32) fit Safety or Reduction of Risk Potential. The kidney and celiac diet items (rn-s24-19, rn-s24-30) fit Basic Care and Comfort. Left unchanged because the batch was commissioned as Physiological Adaptation.
- rn-s24-10 teaches the Somogyi effect. Continuous glucose monitoring studies question how often it occurs. It remains standard nursing text teaching, so the item is left as written.

### s25

#### Needs Arjan's decision

- rn-s25-20: NHLBI 2014 is still the usual sickle cell citation. ASH has newer topic guidelines if a more recent source is preferred.
- rn-s25-17: the BP parameter why mentions fluids, which the item never lists as an action. It is true teaching and I left it.

### s26

#### Needs Arjan's decision

- rn-s26-27: ASHP 2018 says spiking an IV set into an HD solution in an uncontrolled setting must be avoided unless a CSTD gives a dry connection. The passage includes a closed-system device, so the key holds. A reader may still wonder why bedside spiking is shown at all.
- rn-s26-35: the NIOSH 2016 list has been superseded by the NIOSH 2024 list, which dropped the PPE table. The single-glove teaching is still supported by ASHP 2018, which is also cited. Consider replacing the NIOSH 2016 citation with a current NIOSH document.
- rn-s26-42: many units treat the glucose below 250 mg/dL as a protocol step for adding dextrose rather than a call. The key is defensible because the stem gives no protocol.

### s27

#### Key changes

- rn-s27-26. Before: implant matched to "Up to 3 years". After: implant matched to "Up to 5 years". Reason: FDA approval of the Nexplanon supplemental application on January 16, 2026 extends labeled use to up to 5 years. The correct index array is unchanged.
Arjan approves both.

#### Needs Arjan's decision

- Both key changes above.
- rn-s27-39 cites the 2020 ISMP do-not-crush list with no URL. The four keyed drugs are on that list. A current product label could replace it.
- rn-s27-26 now teaches the 5-year implant label. The SFP extended-use source still supports longer off-label use of other devices.

### s28

#### Needs Arjan's decision

- rn-s28-11 cites PADIS, an ICU guideline, for a medical unit client. It supports clustering care and noise and light reduction, but a ward-level source may be preferable.
- rn-s28-10: the why for the denial option says the recall expectation has "no basis". The stem says only that the client lost the job. Left as is because it reads as a reasonable inference, but Arjan may prefer "laid off permanently" in the stem.
