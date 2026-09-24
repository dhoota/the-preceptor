# Format conformance: batch s01

Topics: abdominal-pain and abuse-domestic. 30 SAMPs, 113 questions (29 single, 3 menu, 81 write-in). Done against `docs/CONFORMANCE_BRIEF.md`. Format only. No `correct` meaning, `select`, `required`, `accept`, `unacceptable` or clinical fact was changed. Every `correct` index was remapped to the same answer after reordering, and the remap was checked against the signed-off key snapshot by script.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s01` shows no errors.
- `CONFORM=s01 SAMP_BATCH=s01 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 454 passed, 21 failed. All 21 failures are the expected "keeps its keys" test, one per SAMP with a reworded keyed option (25 questions, listed below). A separate script confirmed that for every s01 SAMP the question ids, kinds, `select`, `required`, `accept` and `unacceptable` match the snapshot exactly, and that the only key differences are the 25 rewordings below.

## Counts

| Item | Count |
| --- | --- |
| Prompts reworded | 112 of 113 (AP-06 q1 was already conformant) |
| Context sentences moved from prompt to `update` | 15 updates added or extended |
| Options removed | 2 (AP-02 q2 "Colonoscopy", AP-10 q4 "5% albumin 45 mL IV", the weakest distractors in 6-option singles) |
| Options added | 0 |
| Options reworded | 96 of 170 |
| Keyed options reworded | 25 (22 single, 3 menu) |
| Stems changed | 28 |
| Vitals moved to the `vitals` field | 28 SAMPs |
| Names removed | 0 (none present) |
| Other notation fixes | µmol/L to umol/L (2 stems), /min to /minute (1 stem, 1 update), 1850 to 1 850 (1 update), 2340 to 2 340 (1 explanation) |
| Explanations updated | 21 (reason text moved out of options, or quoted wording updated) |
| Citations completed | 26 |
| Citations replaced | 3 |

Stem details: vitals values were copied exactly. Items that are not CFPC vital fields stayed in the stem as a sentence: "Respirations are deep." (AP-06), "Capillary refill is 3 seconds." (AP-10), "The fetal heart rate is 148/minute." (AD-01) and 158/minute (AD-11), "GCS is 15." (AD-03, AD-08), "Her chart lists a weight of 52 kg six months ago." (AD-04). AD-09 and AD-15 give normal vitals in words and were left as is.

## Key position across the 29 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Before | 28 | 0 | 1 | 0 | 0 |
| After | 6 | 7 | 6 | 5 | 5 |

Maximum after is 7 of 29 (24 percent). The key is the single longest option in 4 of 29 singles after (14 percent), 25 of 29 before.

## Keyed option rewordings

Each is for length parity, the 60 character limit or the 10 word limit. Removed reason text was moved to the explanation.

| SAMP | Question | Before | After |
| --- | --- | --- | --- |
| abdominal-pain-01 | q4 (menu) | Target a systolic BP of 70 to 90 mmHg while mentation is preserved | Target systolic BP of 70 to 90 mmHg while alert |
| abdominal-pain-04 | q4 | No CT. Pneumonia explains his findings. CT radiation carries a higher lifetime cancer risk in children. Return if the pain localizes or worsens. | No CT, with return if the pain localizes or worsens |
| abdominal-pain-05 | q2 (menu) | Activate the catheterization lab for primary PCI | Activate catheterization lab for primary PCI |
| abdominal-pain-06 | q3 | Regular insulin infusion at 0.1 units/kg/h with no bolus. Hold potassium replacement while potassium is above 5.0 mmol/L and recheck it often. | Insulin 0.1 units/kg/h, no bolus, KCl held above 5.0 mmol/L |
| abdominal-pain-06 | q4 | No CT. Pain that resolves with correction of DKA supports DKA as the cause. Reassess and image only if pain persists. | No CT, reassess and image only if pain persists |
| abdominal-pain-08 | q4 | Current SOGC guidance advises against routine Rh immune globulin for an ectopic pregnancy at this gestation. Document her Rh status and discuss it with her. | Discuss and record Rh status, no routine Rh immune globulin |
| abdominal-pain-09 | q2 | Urgent urology consultation for surgical exploration without waiting for ultrasound | Urgent urology exploration without waiting for ultrasound |
| abdominal-pain-09 | q3 | A normal Doppler ultrasound yesterday does not exclude torsion today | A normal Doppler yesterday does not exclude torsion today |
| abdominal-pain-10 | q4 | 0.9% sodium chloride 180 mL IV over 5 to 20 minutes | 0.9% saline 180 mL IV over 5 to 20 minutes |
| abdominal-pain-12 | q1 | Point-of-care renal ultrasound for hydronephrosis, with no CT if the course is uncomplicated | Renal POCUS, with no CT if the course is uncomplicated |
| abdominal-pain-12 | q3 (menu) | Tamsulosin 0.4 mg PO daily if the stone is distal and 5 to 10 mm | Tamsulosin 0.4 mg PO daily, distal 5 to 10 mm |
| abdominal-pain-13 | q2 | No. Typical pain plus lipase above three times normal confirms pancreatitis. Reserve CT for diagnostic doubt or failure to improve. | No CT, reserved for diagnostic doubt or failure to improve |
| abdominal-pain-14 | q3 | Ask the surgeon to assess him now, because free air with peritonitis needs operative management without further imaging | Ask the surgeon to assess him now, without further imaging |
| abuse-domestic-01 | q3 | Obstetric assessment with fetal monitoring, obstetric ultrasound and Rh status | Fetal monitoring, obstetric ultrasound and Rh status |
| abuse-domestic-02 | q2 | Ask privately and directly, using the same questions asked of all patients, regardless of gender or relationship | Ask privately and directly, as with every patient |
| abuse-domestic-02 | q4 | Respect his decision, document carefully, provide resources and a safety plan, and offer follow-up | Respect wishes, document, resources, safety plan, follow-up |
| abuse-domestic-04 | q3 | Admit her for safety, involve social work, and address concerns about her substitute decision maker | Admit, involve social work, address decision maker concerns |
| abuse-domestic-05 | q1 | Report immediately to the Director under the Fixing Long-Term Care Act, 2021, because you have reasonable grounds to suspect abuse that caused harm or a risk of harm | Report immediately to the long-term care Director |
| abuse-domestic-06 | q3 | Report directly and promptly to child protection services yourself (the children's aid society in Ontario) | Report promptly to child protection services yourself |
| abuse-domestic-07 | q3 | A hospital sexual assault and domestic violence program with trained nurse examiners | Hospital sexual assault program with trained nurse examiners |
| abuse-domestic-08 | q3 | Report to child protection services (the children's aid society in Ontario), and tell her you are doing so, because repeated exposure to partner violence places her son at risk of harm | Report to child protection services and inform her |
| abuse-domestic-09 | q2 | Use a professional medical interpreter by phone or video, with her husband out of the room | Professional interpreter, with her husband out of the room |
| abuse-domestic-10 | q3 | Because violence at home is common, I ask everyone about it. Has someone hurt you? | Violence at home is common. Has someone hurt you? |
| abuse-domestic-11 | q3 | Rh immune globulin 300 mcg IM now, with a Kleihauer-Betke test to decide whether more is needed | Rh immune globulin 300 mcg IM now, plus Kleihauer-Betke |
| abuse-domestic-12 | q4 | Admit or arrange a safe alternative, because an unsafe home is itself a reason not to discharge a burn patient | Admit or arrange a safe alternative |

The menu keys keep the snapshot order in `correct` (AP-01 q4 [7, 6], AP-05 q2 [1, 0], AP-12 q3 [2, 7]).

## Citation changes

Completed (author or body, work, year or edition added):

| Source id | Now reads | Verified at |
| --- | --- | --- |
| esvs-mesenteric | Bjorck M and colleagues. ESVS mesenteric arteries and veins guidelines. Eur J Vasc Endovasc Surg. 2017. | https://pubmed.ncbi.nlm.nih.gov/28359440/ |
| tintinalli | Tintinalli JE, Ma OJ, Yealy DM, and colleagues, editors. 9th ed. 2020. | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| rosen (both files) | Walls RM, Hockberger RS, Gausche-Hill M, editors. 10th ed. 2023. | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| acr-rlq | ACR Appropriateness Criteria. Right lower quadrant pain: 2022 update. J Am Coll Radiol. 2022. | https://pubmed.ncbi.nlm.nih.gov/36436969/ |
| wses-appy | Di Saverio S and colleagues. 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg. 2020. | https://pubmed.ncbi.nlm.nih.gov/32295644/ |
| cps-cap | Le Saux N, Robinson JL. CPS. Paediatr Child Health. 2015. Updated 2024. | https://cps.ca/en/documents/position/pneumonia-management-children-youth |
| ccs-stemi | Wong GC and colleagues. 2019 CCS/CAIC STEMI focused update. Can J Cardiol. 2019. | https://onlinecjc.ca/article/S0828-282X(18)31321-7/fulltext |
| dc-dka | Goguen J, Gilbert J. Diabetes Canada. Hyperglycemic emergencies in adults. Can J Diabetes. 2018. | https://pubmed.ncbi.nlm.nih.gov/29650082/ |
| sis-iai | Solomkin JS and colleagues. SIS and IDSA complicated intra-abdominal infection. Clin Infect Dis. 2010. | https://academic.oup.com/cid/article/50/2/133/327316 |
| sogc-ectopic | Po L and colleagues. SOGC Guideline No. 414. J Obstet Gynaecol Can. 2021. | https://pubmed.ncbi.nlm.nih.gov/33453378/ |
| acog-723 | Year and journal added. Obstet Gynecol. 2017. | https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/10/guidelines-for-diagnostic-imaging-during-pregnancy-and-lactation |
| eau-stone | EAU guidelines on urolithiasis. 2025 edition. | https://uroweb.org/guidelines/urolithiasis |
| acg-panc | Tenner S and colleagues. ACG acute pancreatitis. Am J Gastroenterol. 2024. | https://pubmed.ncbi.nlm.nih.gov/38857482/ |
| wses-pud | Tarasconi A and colleagues. WSES perforated and bleeding peptic ulcer. World J Emerg Surg. 2020. | https://pubmed.ncbi.nlm.nih.gov/31921329/ |
| wses-sbo | Ten Broek RPG and colleagues. Bologna ASBO guidelines, 2017 update. World J Emerg Surg. 2018. | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6006983/ |
| rnao-ipv | RNAO. Woman abuse: screening, identification and initial response. 2005, with 2012 supplement. | https://rnao.ca/bpg/guidelines/woman-abuse-screening-identification-and-initial-response |
| sogc-ipv | Cherniak D, Grant L, Mason R, and colleagues. SOGC No. 157. J Obstet Gynaecol Can. 2005. | https://pubmed.ncbi.nlm.nih.gov/15999433/ |
| sogc-trauma | Jain V, Chari R, and colleagues. SOGC No. 325. J Obstet Gynaecol Can. 2015. | https://pubmed.ncbi.nlm.nih.gov/26334607/ |
| aap-abuse | Christian CW, AAP Committee on Child Abuse and Neglect. Pediatrics. 2015. | https://publications.aap.org/pediatrics/article/135/5/e1337/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse |
| strangulation | Training Institute on Strangulation Prevention. Adult/adolescent non/near fatal strangulation. 2022. | https://www.allianceforhope.org/training-institute-on-strangulation-prevention/resources/recommendations-for-the-medicalradiographic-evaluation-of-acute-adult-nonnear-fatal-strangulation |
| danger | Campbell JC, Webster DW, Glass N. The Danger Assessment validation. J Interpers Violence. 2009. | https://pubmed.ncbi.nlm.nih.gov/18667689/ |
| easi | Yaffe MJ, Wolfson C, Lithwick M, Weiss D. EASI. J Elder Abuse Negl. 2008. | https://www.researchgate.net/publication/23391751 |
| sadv | Ontario Network of SA/DV Treatment Centres. Standards of care. 2nd ed. 2019. | https://www.sadvtreatmentcentres.ca/assets/resource_library/public/Standards%20of%20Care%20-%202019.pdf |
| rnao-suicide | RNAO. Assessment and care of adults at risk for suicidal ideation and behaviour. 2009. | https://www.suicideinfo.ca/resource/siecno-20090783/ |
| aba | American Burn Association and ACS Committee on Trauma. Burn center referral criteria. In: Resources for Optimal Care of the Injured Patient. 2006. | https://rherman.pharmacy.uiowa.edu/lib/PdfDocs/Burns/ABA-BurnCenterReferralCriteria.pdf |

Replaced:

| Question | Before | After | Reason | Verified at |
| --- | --- | --- | --- | --- |
| AP-04 q4, AP-10 q2 | Image Gently Alliance. Radiation safety in paediatric imaging. | Pearce MS and colleagues. Radiation exposure from CT scans in childhood and subsequent risk of leukaemia and brain tumours. Lancet. 2012. (id pearce-ct) | No specific work or year could be verified for the Image Gently citation. Pearce supports the same point: CT radiation carries a higher cancer risk in children. | https://pubmed.ncbi.nlm.nih.gov/22681860/ |
| AP-12 q1 | Choosing Wisely Canada. Emergency medicine recommendations from CAEP. | Smith-Bindman R and colleagues. Ultrasonography versus computed tomography for suspected nephrolithiasis. N Engl J Med. 2014. (id smith-bindman) | The CAEP Choosing Wisely Canada list (June 2015 and October 2016 items, current page updated 2024) has no kidney stone recommendation. The "no CT for young patients with known stones" item is from the US ACEP list. Smith-Bindman supports ultrasound first with no worse outcomes and less radiation. | https://www.nejm.org/doi/full/10.1056/NEJMoa1404446 and https://choosingwiselycanada.org/emergency-medicine/ |
| AD-07 q4 | Public Health Agency of Canada. Canadian guidelines on sexually transmitted infections. | Now cites the existing sadv source (Standards of care, 2019), and phac-sti was removed from AD-07. | The PHAC guideline has been replaced by continually updated online guides with no fixed year, and the guides page does not address follow-up after sexual assault. The SA/DV Standards of care covers follow-up, counselling and repeat STI testing. | https://www.sadvtreatmentcentres.ca/assets/resource_library/public/Standards%20of%20Care%20-%202019.pdf |

Unchanged, already complete: svs-aaa (2018), idsa-asb (2019), sogc-rh (2024), twist (2013), who-ipv (2013), ten4 (2021), hiv-pep (2025), cyfsa (2017 Act), fltca (2021 Act).

## Needs physician decision

No new clinical error was found in the keys. The items below are left as signed off.

1. Keyed rewordings that compress wording. Please confirm the meaning is unchanged for all 25 above, in particular:
   - AD-10 q3 drops "I ask everyone about it". The option keeps the normalizing statement and the direct question. The explanation keeps the routine framing.
   - AD-02 q4 is telegraphic ("Respect wishes, document, resources, safety plan, follow-up") to keep all five elements within 60 characters.
   - AD-05 q1 names "the long-term care Director". The Act and the harm threshold are now in the explanation.
   - AP-12 q3 compresses "if the stone is distal and 5 to 10 mm" to ", distal 5 to 10 mm". The explanation states the condition in full.
   - AP-09 q2 drops "consultation". AD-09 q2 moves "medical" and "by phone or video" to the explanation. AP-10 q4 says "saline" for "sodium chloride".
2. AP-12 q1. The earlier review (samps-s01.md, flag 4) said the no-CT strategy "matches the CAEP Choosing Wisely recommendation". It does not appear on the CAEP list. The key is unchanged. The source is now Smith-Bindman 2014.
3. SOGC Intimate partner violence consensus statement No. 157 (2005), cited in AD-01 and AD-11, is marked "RETIRED" on JOGC and PubMed. It is kept because nothing in the batch contradicts it. Consider a current source.
4. Superseded or soon superseded sources, kept as cited: ESVS mesenteric 2017 (a 2025 ESVS guideline on mesenteric and renal arteries now exists), RNAO suicide 2009 (a second edition covering people 10 years and older exists), RNAO woman abuse 2005 (second edition expected 2026), EAU urolithiasis 2025 (the medical expulsive therapy section is due for revision in 2026).
5. AD-12 q4. The current ABA referral guidelines (2022) do not mention social circumstances or suspected abuse. The 2006 ACS and ABA criteria do ("special social, emotional, or rehabilitative intervention"), so that is the cited version. The key is unchanged.
6. Rosen's 10th edition chapter title "Intimate partner violence and abuse" (abuse-domestic rosen source) was kept from the original citation. I could not see the 10th edition table of contents to confirm it.

## Process note

A scratch directory used during this pass was shared with other batch agents. A restore from it copied four files from another batch into `src/samps/s01/` (anaphylaxis.ts, arrhythmia.ts, lacerations.ts, multiple-patients.ts) and overwrote `index.ts`. `index.ts` was restored to its original content. The four stray files are not imported and do not affect the tests, but they must be deleted by hand. The permission system blocked their deletion.
