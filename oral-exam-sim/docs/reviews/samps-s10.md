# SAMP review: batch s10 (eye, first trimester bleeding)

Adversarial review against docs/SAMP_REVIEW_BRIEF.md. All 30 SAMPs remain `reviewed: false`. Ids are unchanged. Type check and `SAMP_BATCH=s10 npx vitest run tests/samps.test.ts` pass (94 tests).

Note on the engine. `src/engine/samp.ts` now also treats "contraindicated", "avoided" and "withheld" directly after a phrase as negation. So "Mydriatics contraindicated" no longer trips a flag. Other post wording ("is unsafe", "not needed" after the phrase) is still not detected. A repeated word also defeats negation, because the engine uses the first time a word appears. Dangerous flags below were narrowed to action phrases for these reasons. Broad nouns were moved to non dangerous `unacceptable` items, which the candidate can override.

## Eye

| SAMP | Verdict |
| --- | --- |
| eye-01 Headache and vomiting after an evening out | Corrected |
| eye-02 Student with a sore eye | Corrected |
| eye-03 Red eye worsening on prescribed drops | Corrected |
| eye-04 Daycare worker with two red eyes | Corrected |
| eye-05 Forehead rash and a watery eye | Accurate |
| eye-06 Young man with a painful blurry eye | Accurate |
| eye-07 Older woman who woke unable to see | Corrected |
| eye-08 Sudden painless loss of vision | Corrected |
| eye-09 Flashing lights and a shadow | Corrected |
| eye-10 Teen struck in the eye at hockey | Corrected |
| eye-11 Anticoagulated woman after a fall | Corrected |
| eye-12 Splash at work | Accurate |
| eye-13 Something flew into the eye | Corrected |
| eye-14 Child with a swollen eyelid and fever | Accurate |
| eye-15 Red eye after a procedure | Accurate |

Changes:

- eye-01 q1. Before: the dangerous flag matched "mydriatic", "tropicamide", "dilated fundus" and "dilate the pupil". "Pupil fixed mid dilated, do not dilate the pupil" scored the whole question zero, because "pupil" appears twice. After: the dangerous flag needs an action ("give tropicamide", "instil mydriatic", "give cyclopentolate"). "Dilated fundus" and "tropicamide" alone are non dangerous.
- eye-01 q2. Before: "Mannitol 20 g/kg IV" was an absurd distractor. After: "Phenylephrine 2.5% one drop", which is plausible and wrong.
- eye-01 q3. Before: hydrochlorothiazide was credited as a predisposing factor. After: removed. Sulfonamide angle closure is bilateral, from ciliary body swelling, and occurs soon after starting the drug. It does not explain a unilateral pupil block attack. The explanation now says so.
- eye-02 q3. Before: dangerous on "patch" and "steroid" alone. After: dangerous only on "patch the eye", "apply patch", "start steroid", "prescribe prednisolone", "tobradex" and similar. "Eye patch" and "topical steroid" alone are non dangerous.
- eye-02 q4. Key feature changed from eye 1 to eye 2, because it asks for history.
- eye-03 q2. Added "discontinue tobradex" and "hold steroid" wordings to the correct stop steroid item.
- eye-04 q3. Before: "work" alone matched, so "return to work tomorrow" earned credit. After: "off work", "stay home", "time off" and similar only.
- eye-07 q3. Before: the dangerous flag included "hold steroid" and "after biopsy". "Do not hold steroids for biopsy" and "methylprednisolone now, biopsy after" were marked dangerous. After: "await biopsy", "wait for biopsy", "until biopsy", "delay steroid", "defer steroid". Added "methylprednisolone 500mg" and "solumedrol 1g" wordings.
- eye-08 q1. Explanation now says thrombolysis within 4.5 hours is considered in some centres, but randomized trials (THEIA, Lancet Neurology 2025) have not shown clear benefit. The stroke pathway answer is unchanged.
- eye-08 q2. Key feature changed from cva 4 (TIA) to cva 3, which covers finding the cause and imaging in a persistent deficit.
- eye-09 q3. Before: a shadow rising from the bottom of vision came with a "superior field defect". After: "inferior field defect", which is what a superior detachment causes. Explanation wording on the vitreous detachment and the disc was corrected.
- eye-10 q2. Before: "ketorolac" and "naproxen" alone were unacceptable, so "No NSAIDs such as ibuprofen or ketorolac" was rejected. After: dose or verb phrases only ("give ketorolac", "ibuprofen 400"). Added "avoid ketorolac" to the correct item.
- eye-10 q3. Before: the correct answers "Avoid acetazolamide" and "Avoid mannitol" could never match, because the negation cancelled "acetazolamide" and "mannitol". After: the match phrases contain the negation ("avoid acetazolamide", "no mannitol", "acetazolamide contraindicated").
- eye-11 q3. Added "discontinue apixaban", "withhold apixaban" and DOAC wordings.
- eye-13 q2. Before: dangerous on "tonometry". After: dangerous on "perform tonometry", "measure iop", "check iop". "Tonometry" alone is non dangerous.
- eye-13 q4. Before: dangerous on "pressure patch" and "remove foreign body". "Don't attempt to remove the foreign body" scored zero, because "don't" splits into two words and falls outside the window. After: dangerous only on "apply pressure patch" and on removal in the ED, at the bedside, at the slit lamp or with a needle. The plain phrases are non dangerous and can be overridden.

Doses checked: acetazolamide 500 mg IV, timolol 0.5%, apraclonidine 1% (AAO and COS). HSV epithelial keratitis: acyclovir 400 mg five times daily, valacyclovir 500 mg two or three times daily (AAO 2014). HZO: valacyclovir 1 g three times daily, famciclovir 500 mg three times daily, acyclovir 800 mg five times daily. GCA with visual loss: methylprednisolone 500 to 1000 mg IV daily for 3 days (BSR 2020), or prednisone 1 mg/kg up to 60 mg. PCC 2000 units or 50 units/kg for apixaban bleeding (Thrombosis Canada practice). Sickle trait hyphema: avoid carbonic anhydrase inhibitors and osmotic agents. Topical steroid for uveitis only with ophthalmology input.

## First trimester bleeding

| SAMP | Verdict |
| --- | --- |
| ftb-01 Collapse at work | Corrected |
| ftb-02 Heavy period and dizziness | Corrected |
| ftb-03 Spotting at six weeks | Corrected |
| ftb-04 Pain on one side at seven weeks | Corrected |
| ftb-05 Pain after fertility treatment | Accurate |
| ftb-06 Stable patient with an adnexal finding | Corrected |
| ftb-07 Collapse in the triage line | Corrected |
| ftb-08 Brown spotting at nine weeks | Corrected |
| ftb-09 Bleeding at eleven weeks | Corrected |
| ftb-10 Passed something at home | Corrected |
| ftb-11 Bleeding, vomiting and palpitations | Accurate |
| ftb-12 Spotting after intercourse | Corrected |
| ftb-13 Irregular bleeding in her forties | Corrected |
| ftb-14 Going home after an early loss | Corrected |
| ftb-15 Teen who fainted at school | Corrected |

Most serious error: Rh immune globulin. SOGC Guideline No. 448 (2024) is real. It recommends not giving RhIG before 8 weeks after threatened, spontaneous or induced abortion, ectopic or molar pregnancy. Between 8 and 12 weeks it suggests not giving it, but it may be considered for a risk averse patient. From 12 weeks it suggests 300 mcg. A certain complete mole needs none. The draft keyed RhIG as mandatory in every first trimester case and marked "not needed" as wrong. The draft cited the guideline for the opposite of what it says.

Changes:

- New shared key items. `RH_NOT` (not routinely required at this gestation). `RH_OPTIONAL` (withholding is reasonable at 8 to 12 weeks). `RH_EARLY_BAD` (RhIG given before 8 weeks is non dangerous unacceptable).
- ftb-01 q4 (7 weeks, ectopic). Before: key RhIG 300 or 120 mcg, with "not needed" unacceptable. After: key is not required before 8 weeks. Giving it is unacceptable but not dangerous. "Not needed because it is ectopic" is rejected as the wrong reason.
- ftb-03 q4 (6 weeks, PUL). Same change. Explanation now says 300 mcg applies if bleeding recurs after 12 weeks.
- ftb-08 q4 (9 weeks, missed miscarriage), ftb-09 q3 (11 weeks, threatened) and ftb-14 q4 (8 weeks, complete). Before: RhIG only. After: withholding, 300 mcg or 120 mcg are all accepted, with shared decision explained.
- ftb-15 q4. Before: the stem gave no gestation, yet 300 mcg was keyed. After: the update states 13 weeks by dates (and that she disclosed sexual activity when interviewed alone), so 300 mcg is correct under SOGC 2024.
- ftb-06 q1. Explanation no longer says every Rh D negative patient receives RhIG.
- ftb-02 q3 and ftb-13 q2. Before: dangerous on "discharge" alone, so "Discharge is unsafe" scored zero. After: dangerous on "discharge home", "send home", "discharge with follow up". "Discharge" alone is non dangerous.
- ftb-04 q3. Before: dangerous on "threatened miscarriage" and "no follow up". "Gynecology follow up today, no delay" and "Probable ectopic rather than threatened miscarriage" scored zero. After: dangerous on "discharge home", "send home", "discharge as threatened", "discharge without follow".
- ftb-02 q1 and ftb-15 q1. Before: "normal blood pressure" was unacceptable, so "Normal BP does not exclude shock" was rejected. After: "excludes shock" and "rules out shock" only.
- ftb-06 q3. Removed "mass" alone from the mass size item.
- ftb-07 q3. The prompt asks for doses, but oxytocin, ergonovine and TXA scored without one. After: each needs a dose ("oxytocin 10", "ergonovine 0.2", "tranexamic acid 1 g"). "Cytotec" alone removed.
- ftb-10 q3. "Reassure" alone narrowed to "reassure complete" and "reassure and discharge".
- ftb-12 q1. "Os" alone matched "closed os". Now needs "from the os" or similar.
- ftb-12 q4. Options now carry doses. Ceftriaxone 500 mg IM plus azithromycin 1 g PO is keyed. PHAC raised ceftriaxone to 500 mg IM in December 2024. The doxycycline distractor is now 100 mg twice daily for 7 days.
- ftb-13 q1. "Ligation exclude" matched the correct "Tubal ligation does not exclude pregnancy". Replaced with "exclude pregnancy", which the negation handles.
- ftb-08 q5 and ftb-14 q1. Added "no fault" and "fault".
- Citations for SOGC 448 and SOGC 408 now give authors, volume and pages.

Checked and left as written: a minimum rise of 35% in 48 hours for a viable IUP (Barnhart). An expected fall of about 21 to 35% at 2 days after complete miscarriage, depending on the starting level. A methotrexate day 4 to 7 fall of at least 15%. Relative contraindications of hCG above 5000, a mass over 3.5 cm and cardiac activity (ACOG 193). Heterotopic pregnancy up to about 1 in 100 after ART. Methotrexate 50 mg/m2 IM (BSA 1.77 m2 for 68 kg and 165 cm, about 88 mg). Mifepristone 200 mg then misoprostol 800 mcg vaginally 24 hours later (ACOG 200). CRL 7 mm or more with no cardiac activity (Doubilet 2013). Cervical shock with os tissue. Oxytocin is less effective early because receptors are few. At 11 weeks with a live IUP, prognosis is good. NICE recommends vaginal micronized progesterone only with a prior miscarriage, and she has none.

## Sources verified

- SOGC Guideline No. 448. Fung-Kee-Fung K, Wong K, Walsh J, Hamel C, Clarke G. J Obstet Gynaecol Can 2024, 46(4):102449. PubMed 38553007. https://www.jogc.com/article/S1701-2163(24)00260-3/abstract. First trimester recommendations confirmed through https://www.guidelinecentral.com/guideline/4590140/ and ACEP Now.
- SOGC Guideline No. 408. Eiriksson L, Dean E, Sebastianelli A, et al. J Obstet Gynaecol Can 2021, 43(1):91 to 105. Joint SOGC and GOC. https://www.jogc.com/article/S1701-2163(20)30222-X/abstract. Confirmed real.
- PHAC gonorrhea update, December 2024, ceftriaxone 500 mg IM. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea.html and https://www.catie.ca/catie-news/canada-raises-dose-of-preferred-antibiotic-for-gonorrhea
- THEIA trial, Lancet Neurology 2025. https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(25)00308-4/fulltext
- The other citations (SOGC 414 2021, ACOG PB 193 and 200, NICE NG126, Doubilet NEJM 2013, AAO PPPs, AAO HSV 2014, AHA CRAO 2021, ACR 2021, BSR 2020, COS 2009, CSBPR) are real publications known to the reviewer. No URLs were added for them.

## Open questions for the physician

1. RhIG before 12 weeks. The keys now follow SOGC 2024. The CFPC key feature still reads "offer prophylaxis", and many EDs have not changed. Before 8 weeks (ftb-01, ftb-03), giving RhIG is unacceptable but not dangerous and can be overridden. Confirm this is how you want it marked. Also confirm 120 mcg is still acceptable where it is used at 8 to 12 weeks.
2. ftb-15 now places a ruptured ectopic at 13 weeks so that 300 mcg is correct. That is late for a tubal ectopic, although interstitial ectopics rupture then. You might prefer a different teaching point.
3. CRAO thrombolysis. The explanation reflects the negative THEIA trial. Check local stroke protocols and the current CSBPR wording.
4. eye-03 q2. "Continue tobramycin, stop steroid" still trips the dangerous "continue steroid" flag, because the engine matches words in any order. This is rare. Accept or rephrase.
5. eye-07 q3 accepts both IV pulse methylprednisolone and prednisone 60 mg. Decide whether visual loss should require IV pulse.
6. eye-12 q4 credits tetanus after a chemical injury. This is low yield but harmless.

## Summary

Eye: 10 SAMPs corrected. The main fixes were dangerous flags that caught correct answers (mydriatics, steroids, patching, tonometry, foreign body removal, biopsy), a sickle trait key that could never match, a reversed visual field, a thiazide claim and two key feature labels. First trimester bleeding: 12 corrected. The main fix was bringing all six Rh questions in line with SOGC Guideline No. 448 (2024), which the draft cited but contradicted. Discharge flags, drug doses and the PHAC ceftriaxone dose were also fixed. Both SOGC guideline numbers (448 and 408) are real and correctly cited.
