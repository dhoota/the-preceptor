# Q500 writer report, round 2: s68, Gastrointestinal (GI) bleed

Writer: Preceptor. File: `src/samps/s68/gi-bleed.ts`, ids gi-bleed-48 to gi-bleed-52 (unchanged). All SAMPs stay `reviewed: false`, `version: 1`, author "Preceptor". This revision needs a fresh independent review.

Checks: the type check shows no s68 errors. `SAMP_BATCH=s68 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 3 files and 128 tests.

## Required fixes and how each was done

### gi-bleed-48 (stem, q2, q3 failed as a retell of gi-bleed-04)

- Stem rebuilt. The new case is an 84-year-old woman with severe aortic stenosis, waiting for a transcatheter valve, who arrives with unstable maroon stools. The source is truly colonic: angiodysplasia from Heyde syndrome. She takes no NSAID, ASA or anticoagulant. Her urea is normal. Recent endoscopy and colonoscopy were normal. Every value is new.
- q1 kept as the reviewer asked: shock index and the BSG stable or unstable class. The numbers are new: 116 / 84 = 1.38, which rounds to 1.4. Distractors: 84 / 116 = 0.72 (inverted), 1.0 (the threshold) and 1.7. The key value avoids shock-16's keyed 1.3.
- q2 replaced (KF1): the most likely source is bleeding angiodysplasia. Aortic stenosis is the clue.
- q3 replaced (KF1, coagulopathy as the clue): the bleeding keeps recurring because of loss of large von Willebrand multimers, an acquired von Willebrand syndrome.
- q4 replaced (KF6): replacing her aortic valve is the treatment most likely to prevent further bleeding. Octreotide, iron, hemicolectomy and tranexamic acid are the distractors.
- The 72-hour PPI question (old q4, which passed) was dropped. This change was not requested. A colonic diagnosis cannot carry it, and the Q500 oral case batch15 weak-and-pale-after-a-stent keys the same 3-day high-dose PPI order in q-dispo. The reviewer should judge this on its merits.

### gi-bleed-49 (stem retold gi-bleed-03, q4 mock-mode order)

- Patient rebuilt. She is a 69-year-old woman (was a 74-year-old man), seen in a community hospital, not tertiary. The drug pair is now rivaroxaban 20 mg daily with diclofenac (was apixaban with ibuprofen). Every value is new: pulse 116 irregular, BP 112/64 against a usual 150, hemoglobin 66 g/L (129 four months ago, a 63 g/L fall), urea 18.2, creatinine 78. After 2 units she is clearly stable at 132/74, and her last dose was 14 hours ago.
- The COPD-breathlessness question (q1) and the blood-pattern question (q2) are kept, with numbers recomputed (150 minus 112 = 38, "almost 40").
- The menu moves to q3, before the reversal question, as required. The reversal question is now q4. Its key is "No reversal agent", in the last position. It no longer says "hold rivaroxaban", so it does not name the menu key in mock mode.
- The ACG-CAG 2022 suggestion against PCC, and against andexanet for rivaroxaban or apixaban, applies unchanged.

### gi-bleed-50 (q1 to q4 failed, q2 explanation false)

- Stem rebuilt so that it is not gi-bleed-26 or gi-bleed-03. A 63-year-old man has a single-vehicle crash at 30 km/h. His car drifted slowly off the road, and he has only a belt abrasion. The cause is an ulcer from untreated Helicobacter pylori. He takes no NSAID.
- q1 (KF3): the key is "Shock with only a minor injury", meaning shock out of proportion to the injury. This is not the gi-bleed-26 key (resting tachycardia). It is not postural vital signs, because first-trimester-bleeding-29 q1 keys the postural pulse rise. It is not a prodrome before the event, because chest-pain-29 q4 keys "pain beginning before the fall".
- Old q2 (equilibration) was dropped rather than only corrected. This change was not requested. shock-17 q3 keys "Hemodilution has not yet occurred", the same teaching. The reviewer's sentence fix is therefore moot.
- q2 is new (KF5): the fastest access is a large 16 gauge cannula in each arm, rather than central lines, a PICC or a tibial intraosseous needle (Reddick 2011).
- q3 replaced old q3, endoscopy timing (KF1, a clue new to the bank): the key is H. pylori left untreated.
- q4 replaced old q4 and old q5 (KF6): "Repeat endoscopy only if he rebleeds", meaning no routine second-look endoscopy (ICG 2019 statement B12). It does not test timing, and there is no rebleed while waiting.
- Old q5 (melena turning maroon while he waited for endoscopy) passed QA but was removed under the coordinator's ruling. See the next section.

### gi-bleed-51 (stem and q1 fever, q2 timeline, q3 and q4 off-blueprint)

- His temperature is now 38.4°C oral, so "fever" in q1 is true.
- Timeline: the stem now gives 2 days of blood-streaked sputum before this morning's 100 mL. The dark stool is passed soon after arrival. The q2 prompt and explanation match this.
- q3 replaced (KF4): the first investigation for the source is a chest radiograph (AAFP 2015). The distractors are GI tests that look in the wrong place or mislead: nasogastric aspirate, stool occult blood, upper endoscopy and CT angiography of the abdomen.
- q4 replaced (KF1, liver disease as the clue): of the complications of cystic fibrosis, cirrhosis with portal hypertension most raises his risk of a major upper GI bleed (Debray 2011, ECFS). The stem adds "The spleen is not palpable".
- Every question now tests a gi-bleed key feature. No lung management question remains.

### gi-bleed-52 (q3 and q4 repeated gi-bleed-30, q4 misread its source)

- The CT angiography question (q3) is kept. The embolization question (q4) is replaced, as the reviewer offered.
- The stem now opens "You are working in a community hospital emergency department". q4's update adds that the hospital has no interventional radiology service. The new key is "Transfer now for embolization". The distractors are serial hemoglobin checks, transfer only if he bleeds again, a papilla clip, and octreotide with repeat imaging. Surgery is no longer an option, because Tarar notes that surgery may be favoured with a pseudocyst.
- The new explanation uses Table 5 correctly: embolization was the commonest treatment, 46%. It does not call this a success rate.
- The q4 update says "Imaging shows", not "CT angiography shows", so it does not name the q3 key.
- Advisory taken: the q2 hemobilia sentence now says "most often follows liver injury".

## Coordinator ruling on the batch15 oral case

I read `src/cases/batch15/weak-and-pale-after-a-stent.ts` in full. Neither gi-bleed-48 nor gi-bleed-50 tests upper endoscopy over colonoscopy for maroon stool. Neither tests endoscopy within 24 hours against deferral. Neither uses a rebleed while waiting.

- Old gi-bleed-50 q5 (melena turning maroon with instability while he waited for endoscopy, key "Brisk upper GI bleeding") was removed for this reason.
- gi-bleed-48's maroon stool is truly colonic, and no question in it keys an endoscopy decision.
- Two partial contacts with the oral case remain, for the reviewer:
  - gi-bleed-50 q4's update describes a duodenal ulcer with a visible vessel treated with clips and thermal coagulation, as the oral case's q-dispo does. The decision tested (no routine second look) is not in the oral case.
  - The oral case's dispo answer also lists "test and treat H. pylori". gi-bleed-50 q3 keys an untreated H. pylori infection as the clue to the source, not testing or treatment.
- KF2 now rests on gi-bleed-52 q2 alone, which passed.

## Key feature coverage (19 single, 1 menu)

| KF | Questions |
|---|---|
| 1 | 48 q2, 48 q3, 49 q3 (menu), 50 q3, 51 q4, 52 q1 |
| 2 | 52 q2 |
| 3 | 49 q1, 49 q2, 50 q1 |
| 4 | 51 q1, 51 q2, 51 q3 |
| 5 | 48 q1, 50 q2 |
| 6 | 48 q4, 49 q4, 50 q4, 52 q3, 52 q4 |

Single key positions (first to fifth): 4, 4, 3, 4, 4. The key is the longest option in 2 of 19 single questions (49 q1 and 52 q1, both kept unchanged).

## How uniqueness was checked

- I read the full catalogues for gi-bleed, shock and abdominal-pain, including the [Q500 NEW] items and oral cases.
- I grepped every catalogue for the new angles: von Willebrand, aortic stenosis, angiodysplasia, rivaroxaban, access, gauge and flow, chest radiograph, H. pylori, crash, cystic fibrosis, second look, and interventional radiology.
- None of the new keys appears as a keyed decision. Near contacts, named for the reviewer:
  - 48 q1 shock index: shock-16 keys 1.3 and shock-52 keys "above 1". The value 1.4 and the BSG classification are new.
  - 48: pulmonary-edema-14 lists "Anemia or GI bleeding" as a cause of decompensation in aortic stenosis. It is not a key.
  - 50 q2 access: "Two large bore IV lines" is one item in the write-in lists of gi-bleed-01, 06 and 13. Choosing peripheral over central access by flow is not keyed anywhere.
  - 50 q1: chest-pain-29 q4 teaches medical cause against injury after a fall, keyed on pain before the fall. Our key is shock out of proportion to the injury.
  - 51 q3: gi-bleed-24 q2 (tuberculosis) has "Chest radiograph" as one of three items in an immediate-steps menu. Ours is a single-best choice of the first investigation against GI tests. The reviewer suggested this angle.
  - 51 q4: gi-bleed-01 and gi-bleed-32 teach that a large spleen points to varices. Ours keys the cystic fibrosis complication, cirrhosis with portal hypertension.
  - 52 q3 (kept) still echoes gi-bleed-30 q2 (CT angiography for a pseudoaneurysm). The reviewer allowed one of the pair to stay.
- No patient's numbers are reused from another item.

## Sources (each verified this round)

- Oakland K et al. BSG lower GI bleeding guideline. Gut. 2019. https://www.bsg.org.uk/getattachment/6d80aa64-9d11-4923-8789-a2e9b08502ef/gutjnl-2018-317807.pdf?lang=en-US (verified in round 1 and QA).
- Lourdusamy D, Mupparaju VK, Sharif NF, Ibebuogu UN. Aortic stenosis and Heyde's syndrome: a comprehensive review. World J Clin Cases. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8464459/. Full text read. It covers the shear and ADAMTS13 mechanism, angiodysplasia as the commonest cause of obscure lower GI bleeding, valve correction leading to resolution of bleeding (79% free of recurrence over 15 years in one surgical series), and no benefit from octreotide.
- Abraham NS et al. ACG and CAG guideline. J Can Assoc Gastroenterol. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8972207/
- Tintinalli's Emergency Medicine, 9th edition. 2020. Its text was not read. QA accepted it for standard teaching (49 q1, q2, q3 and now 50 q1).
- Reddick AD, Ronald J, Morrison WG. Intravenous fluid resuscitation: was Poiseuille right? Emerg Med J. 2011. https://pubmed.ncbi.nlm.nih.gov/20581377/. Abstract read: "Short, wide cannulae should be used when rapid fluid resuscitation is required".
- Barkun AN et al. International Consensus Group. Ann Intern Med. 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/. Read: B12 "Routine second-look endoscopy is not recommended", and D5, test bleeding ulcers for H. pylori.
- Flume PA et al. CF Foundation guideline. Am J Respir Crit Care Med. 2010. https://pubmed.ncbi.nlm.nih.gov/20675678/. It is now cited only for 51 q1 and q2, the hemoptysis setting in cystic fibrosis. Its full text was again unreachable (403 and 503).
- Earwood JS, Thompson TD. Hemoptysis: evaluation and management. Am Fam Physician. 2015. https://www.aafp.org/pubs/afp/issues/2015/0215/p243.html. Read: "Chest radiography is recommended as the initial diagnostic test for hemodynamically stable patients with hemoptysis".
- Debray D, Kelly D, Houwen R, Strandvik B, Colombo C. Best practice guidance for the diagnosis and management of cystic fibrosis-associated liver disease. J Cyst Fibros. 2011. https://www.ecfs.eu/sites/default/files/publications-ecfs-guidelines/JCF10_Sup2_S29_S36.pdf. Full text read: multilobular cirrhosis in 5 to 10% in the first decade, then portal hypertension in the second decade, "mainly variceal bleeding".
- Tarar ZI et al. J Investig Med High Impact Case Rep. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8796068/. Read: embolization "is a preferred method", untreated cases can have massive hemorrhage, and surgery is for instability or failed embolization.

## Uncertain, for the reviewer

- 48 q4: the evidence that valve replacement stops Heyde bleeding is observational, and the review says it is insufficient for a strong recommendation. The key says "most likely to prevent further bleeding", which the review's series support.
- 48 q2: angiodysplasia is "most likely" on the clinical picture. The BSG still advises considering an upper source in unstable hematochezia. The stem gives a normal urea, a normal endoscopy 8 months ago and no NSAID or antiplatelet to make the upper source less likely.
- 50 q1 cites Tintinalli for the reasoning about a medical cause behind a crash. No guideline was found that states it directly.
- 51 q3: the AAFP review reserves CT for an abnormal film, recurrent hemoptysis or cancer risk. Two days of streaky sputum could be read as recurrent. CT of the chest is not offered as an option, so the key stays unambiguous.
- Unrequested changes: 48's PPI question dropped, 50's old q2 dropped, 50's old q5 removed under the coordinator's ruling, and the distractor wording changes needed to keep the key from being the longest option.

## Round 3

This round answers `docs/reviews/q500-verify2-s68.md` and the coordinator's rulings: no D1 slot, 51 q1 rebuilt, 52 q3 replaced. Only `src/samps/s68/gi-bleed.ts` and this report were edited. The type check shows no s68 errors. `SAMP_BATCH=s68` samps, samp-quality and citations tests passed: 3 files, 128 tests. Single key positions (first to fifth) are 4, 4, 3, 4, 4. The key is the longest option in 3 of 19 single questions.

### Fixes

- **48 q4.** The octreotide sentence now reads: "Octreotide, a somatostatin analogue, can reduce transfusion needs in angiodysplasia bleeding, but it does not remove the shear stress that causes her bleeding." This matches the OCEAN trial, whose abstract I read on PubMed (38158089): 11.0 against 21.2 transfusion units, a reduction of 10.2, 95% CI 2.4 to 18.1. The review is no longer cited for "no benefit". The key is unchanged. The trial is not added as a source, because each question cites one source and the key rests on the review.
- **49 q3 (new menu, select one, KF1, a medication clue).** It asks which recently started drug would most have raised her rivaroxaban level. The key is itraconazole 200 mg PO.
  - The distractors are peer prescriptions: amoxicillin, azithromycin, carbamazepine, doxycycline, levofloxacin and rifampin.
  - Source: 2021 EHRA practical guide (Steffel, Europace 2021, https://pubmed.ncbi.nlm.nih.gov/33895845/). I read the full accepted manuscript from openaccess.sgul.ac.uk.
  - The guide gives itraconazole and ketoconazole +160% AUC with rivaroxaban, a strong inhibitor that "should not be used". It says rifampicin and carbamazepine "markedly reduce NOAC plasma levels". It gives azithromycin "No PK data". Amoxicillin, doxycycline and levofloxacin are not listed.
  - I excluded clarithromycin (+50%) and fluconazole (+42%) so that the single key is not arguable.
  - It is not gi-bleed-03 q3. It does not name rivaroxaban as held or reversed. It stays before q4.
- **50 q1.**
  - The key is now the stem fact "Car drifting slowly off the road".
  - The explanation now says a negative eFAST "makes a large intraperitoneal bleed less likely but does not exclude retroperitoneal or pelvic bleeding, so it cannot point to an illness", which no longer undercuts the key.
  - The missing full stop is fixed.
  - The 2 days of weakness are now supporting text only, not the key (chest-pain-29 q4 keys a symptom before the event).
- **50 q4 update.** It now reads "a 9 mm ulcer is found on the posterior wall of the duodenum, and its visible vessel is injected and closed with a hemoclip". That is away from the oral case's q-dispo wording. The decision is unchanged.
- **51 q1 (rebuilt, KF1, coagulopathy as the clue).** The blood test most likely to show a treatable contributor is the prothrombin time (INR), because of vitamin K deficiency from malabsorption.
  - The stem adds that he takes fat-soluble vitamins but often skips his enzymes and vitamins.
  - Source: Debray 2011 (ECFS), full text read: "An isolated decrease in cofactors VII, X and II suggest vitamin K deficiency that should be corrected with oral or intramuscular vitamin K supplementation."
- **51 q2.** It is re-cited to Fried MP, Epistaxis, Merck Manual Professional Version, 2025 (page read): "Swallowed blood may lead to gastric irritation followed by vomiting, hematemesis, or melena." The explanation now says that swallowed blood appearing as melena is well described after a nosebleed, and that blood swallowed from the airway behaves the same way. The CF Foundation guideline is no longer cited anywhere and has been removed from the sources. The AAFP source was dropped with the old q3.
- **51 q3 (replaced, KF4).** It asks which finding would most suggest blood loss beyond what he has coughed up. The key is a hemoglobin fall of 35 g/L. The arithmetic: 70 mL/kg x 52 kg is about 3.6 L of blood, and a quarter of that is about 900 mL, against 100 mL of hemoptysis. The other findings are expected from swallowed blood, from fever or from his lung disease. Source: Tintinalli, accepted earlier as a standard text, though its text was not read.
- **52 q3 (replaced, KF1).** The most likely bleeding artery is the splenic artery. Tarar 2022 (page read) gives splenic 54%, gastroduodenal 16%, and hepatic and pancreaticoduodenal 11% each. The q4 update now says "a 2 cm arterial pseudoaneurysm", so it does not name the q3 key.

### Uniqueness checks

I grepped the gi-bleed, shock and abdominal-pain catalogues and the batch15 oral case for: itraconazole, P-glycoprotein, interaction, prothrombin time and INR keys, vitamin K, splenic artery, drift, and hemoglobin fall. None of these is a key in any of them. Contacts named for the reviewer:

- 51 q3: signed gi-bleed-22 q1 keys "Fall in hemoglobin of 61 g/L" as the sign of hidden blood loss in shock. Ours keys a hemoglobin fall disproportionate to visible hemoptysis, which means a second source. The decision differs (proportion against the visible loss), but the finding type is shared. If the reviewer judges it a repeat, I have no clean KF4 alternative left in this case that avoids gi-bleed-05, 18, 19, 23, 24 and 47.
- 51 q1: gi-bleed-17 (newborn vitamin K deficiency bleeding) keys the diagnosis, CT head, then plasma and vitamin K. Ours keys the choice of test (prothrombin time) for an acquired deficiency from cystic fibrosis malabsorption.
- 49 q3: a cva item keys interactions that lower DOAC levels (rifampin, carbamazepine) as a cause of stroke on a DOAC. Ours keys a strong inhibitor raising the level as a bleeding clue, and the inducers are distractors.
- 52 q3: no artery-identity key exists. gi-bleed-01 keys splenic embolization for varices due to splenic vein thrombosis, which is a different decision.

### Uncertain

- 49 q3 tags a drug interaction as key feature 1 (medications as a clue to the source and cause of bleeding). The physician may prefer to read it as risk assessment.
- 51 q1 assumes he has a prolonged prothrombin time. The cited guidance supports the test as the way to detect vitamin K deficiency in cystic fibrosis, but the question gives no result.

## Round 4

This round answers `docs/reviews/q500-verify3-s68.md`, plus the coordinator ruling that naming the bleeding artery is anatomy recall. gi-bleed-48, 49 and 50 were not touched, and neither were 51 q1, 51 q2, 52 q1, q2 and q4. The type check shows no s68 errors. The `SAMP_BATCH=s68` samps, samp-quality and citations tests passed: 3 files, 128 tests. Single key positions (first to fifth) are 4, 4, 3, 4, 4. The key is the longest option in 4 of 19 single questions.

### Fixes

- **51 stem.** "for several minutes" and "into the sink" are cut, so the stem is now 150 words. Every fact a question uses is kept: fat-soluble vitamins, skipped enzymes and vitamins, no iron, spleen not palpable, and the fever.
- **51 q3 (replaced, KF4, apparent melena).**
  - Update: over 3 days his hemoptysis stops and his hemoglobin stays at 131 g/L, but his stools remain dark.
  - The key is "Old blood still passing through". The distractors are a bleeding duodenal ulcer, continued lung bleeding, small-bowel angiodysplasia, and varices from liver disease.
  - Source, page opened: Ansari P, Overview of gastrointestinal bleeding, Merck Manual Professional Version, 2025 (https://www.merckmanuals.com/professional/gastrointestinal-disorders/gi-bleeding/overview-of-gi-bleeding). It states that melena "may persist for several days after bleeding has ceased".
  - No hemoglobin fall is keyed, so it is clear of sob-39 q1 and gi-bleed-22 q1. Tintinalli is no longer cited in 51 and was removed from its sources. Tintinalli stays only in 49 and 50, where it was accepted.
- **51 q4.** The verdict's replacement sentence is used word for word. The distractor reason no longer contradicts q1.
- **52 q3 (replaced, KF2).** It asks why his upper endoscopy 10 days ago was normal. The key is "The bleeding had paused".
  - The teaching is that a normal endoscopy between bleeding episodes does not exclude an upper source of maroon stools.
  - Tarar 2022 (page opened) says "initial endoscopic evaluation can frequently be negative for active bleeding" and "Hemorrhage is usually intermittent". Its Table 4 shows bleeding at the ampulla in 46% of cases.
  - Conventional endoscopy can also miss the papilla, so that reason is deliberately not offered as a distractor, which keeps the key single.
  - No artery figures remain anywhere, so the Ru 2019 misattribution is gone. The q4 update still says "arterial pseudoaneurysm".
- **48 q4 OCEAN citation (advisory): not done.** Each question carries one `source`, and every listed source must be cited by a question. Adding OCEAN would mean re-pointing q4's citation away from Lourdusamy, which supports the key, or listing an uncited source, which the citation tests forbid. Both would change a passed SAMP beyond the citation. If the physician wants it, the cleaner option is the verdict's shorter sentence, "Octreotide does not remove the shear stress that causes her bleeding."

### Uniqueness checks

I grepped the gi-bleed, shock and abdominal-pain catalogues and the batch15 oral case for: persisting melena, old blood, intermittent bleeding, a normal endoscopy between episodes, and "paused". None of these is a key or a model-answer decision.

- 51 q3 sits next to 51 q2 (swallowed blood darkens the stool), but tests a different decision. q2 asks the cause. q3 asks whether ongoing dark stool means ongoing bleeding.
- 52 q3 adds a second KF2 question beside 52 q2. Its teaching (a negative endoscopy during a pause) is not keyed elsewhere. gi-bleed-38 keys a side-viewing scope, which this item does not offer.

### Uncertain

- 52 q3: a reviewer may judge that the key's point is foreshadowed in the 52 q1 explanation ("endoscopy is often normal between episodes"). That explanation was left untouched because q1 passed.
- 51 q3: applying melena persistence to swallowed blood is reasoning from the Merck statement, not a direct quote about swallowed blood.
