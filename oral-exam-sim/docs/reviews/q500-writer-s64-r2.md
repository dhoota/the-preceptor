# Q500 writer revision round 2: s64, Asthma/COPD

Revision against `docs/reviews/q500-qa-s64.md`. File `src/samps/s64/asthma-copd.ts`, export `ASTHMA_COPD_S64`. Ids are unchanged (asthma-copd-48 to asthma-copd-52). Every item stays `reviewed: false`, `version: 1`, `author: "Preceptor"`. This revision needs a fresh independent review.

## Required fixes and how each was done

| SAMP | Question | Required fix | What was done |
|---|---|---|---|
| 48, 49, 52 | all GINA items | Cite the current GINA report and confirm each statement | Source is now "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update." with the GINA 2026 PDF URL already used in s25 (id `gina-2026`). The 2026 PDF was downloaded and read. Two statements had changed and were rewritten (see "GINA 2026 changes" below). |
| 48 | whole SAMP | Rebuild, keep key features 2, 3 and 5 covered | Rebuilt as a new scenario: epidemic thunderstorm asthma in a 29-year-old woman with grass season hay fever and no asthma diagnosis, during a surge at a community hospital with no free oximeter. New decisions: the cause of a first wheeze in a storm cluster (KF1), oxygen when no oximeter is free (KF5), no antimicrobial for a non-infective flare (KF4), and storm-season trigger advice at discharge (KF8). KF5 is restored here. KF2 and KF3 stay covered by 49 q2, 49 q1, 52 q1 and 52 q3. |
| 48 | q1 | Fatal-risk menu repeats s25, s04 and s17 | Removed. The batch now has one fatal-risk question (49 q2). |
| 48 | q2 | 93 to 95% target repeats s04, s17 and the oral case | Removed. The new q2 keys whether to give oxygen without oximetry (GINA: "oxygen therapy should not be withheld if pulse oximetry is not available"). The range appears only in the explanation. |
| 48 | q3 | Normal PaCO2 repeats s17 and s04 | Removed. No PaCO2 question remains in the batch. |
| 48 | q4 | IV magnesium repeats s04, s17 and s25 | Removed. No magnesium question remains. |
| 49 | q1 | Peak flow as best severity measure repeats s04 and s25 | Reframed as the reviewer suggested. New lead-in: "Which of the following findings best shows that he perceives his airflow limitation poorly?" Key "His rating of 3 out of 10", set against his peak flow of 31% of best. Still KF3. |
| 50 | q3 | Update gives away q2 and an unseen implant part is implausible | Deleted "No radiopaque object is seen." The update is now "His chest X-ray shows right lower lobe consolidation with volume loss." The explanation now uses Sehgal 2015 (abstract read): the object was seen on imaging in only 24.6% of adults, and nonresolving pneumonia (30.6%) and segmental collapse (18.4%) were the commonest findings. It no longer claims anything about radiolucent materials, which Huh 2022 does not discuss. |
| 51 | whole SAMP | Rebuild, keep key feature 7 covered | Rebuilt as a new COPD scenario: a 74-year-old woman with hypercapnic failure who started gabapentin 3 weeks ago, with an eGFR of 38, who wants full treatment. Bilevel ventilation is given in the stem and updates, never keyed. New decisions: gabapentin as a contributor (KF4), full face mask as the first interface (KF7), refit the mask for a leak before calling NIV failed (KF7), and a menu on prognosis with invasive ventilation (survival underestimated, most survivors would choose it again) (KF7). KF7 is restored three times. |
| 51 | q1 | Air-driven nebulizers repeat the oral case | Removed. |
| 51 | q2 | pH as the acute component repeats the oral case and s17 | Removed. |
| 51 | q3 | pH 7.35 NIV threshold repeats s25, s04, s17 and the oral case | Removed. No pH threshold is keyed. The reviewer's example of NIV in asthma was not used, because BTS/ICS 2016 recommendation 39 says NIV should not be used in acute asthma with hypercapnic failure, while GINA 2026 makes no recommendation. A keyed asthma NIV decision would rest on a contested premise. |
| 51 | q4 | Rehabilitation repeats s04 and ward discharge is outside KF8 | Removed. KF8 is now covered by 48 q4 and 49 q4, both ED discharge decisions. |
| 52 | q1 | Life-threatening menu repeats s17, s04 and the oral case | Removed. Replaced by a new KF3 item: louder wheeze with better alertness means widening airways (key "Widening of her airways"), from GINA 2026 text that a quiet chest means too little ventilation to produce wheeze. |
| 52 | q3 and q4 | Fourth and fifth "risk of death" questions | Removed. Replaced by: the delivery device for a drowsy patient with near-fatal features (key "Nebulizer by face mask", KF5) and continuing her inhaled corticosteroid during admission (key "Continue her usual daily dose", KF6, GINA: admitted patients "should continue, or be prescribed, ICS-containing therapy"). The stem details that served the removed questions (recent overdose, home nebulizer, montelukast, cat, school and job) were removed. |

Unrequested but needed changes, for the reviewer to judge (REVIEW-RULES rule 4):

- 52: the old passing q2 ("Treat now and measure peak flow later") is unchanged in text and is now q1. It moved first because the new delivery question's lead-in asks how to give salbutamol, which would cue "treat now" in normal order (ruling B7). The new q2 lead-in avoids "now" so it does not imply the earlier key in mock mode (ruling B6) beyond what every q1 option already implies.
- 52 stem: fluticasone dose set to 250 mcg twice daily, so the patient does not echo asthma-copd-12 (a 16-year-old on fluticasone 125 mcg two puffs twice daily).
- 49 q3 was re-keyed. See below.
- 49 q4: one explanation sentence was replaced because GINA 2026 dropped it. See below.

## GINA 2026 changes that forced edits to passing items

1. **49 q3 (dexamethasone, passed in round 1).** GINA 2024 said "In adults, a small number of studies examined oral dexamethasone 12 to 16 mg ... for 1 to 2 days". GINA 2026 rewrote this as "Several studies in children examined oral dexamethasone 12 to 16 mg ...", and Box 9-7 now offers dexamethasone as an alternative only for children ("An alternative for children is oral dexamethasone"). The adult prescription is "prednisone/prednisolone 40 to 50 mg/day for 5 to 7 days". Keying dexamethasone for a 69-year-old against the current edition would be stale. Prednisone 5 days is already keyed in asthma-copd-12, 21 and 35, so the question was re-keyed to a new KF6 decision: step his budesonide-formoterol MART from Step 3 (1 inhalation twice daily) to Step 4 (2 inhalations twice daily plus 1 as needed) at discharge. GINA 2026: "In the context of a recent ED visit or hospitalization, it would be appropriate to commence treatment with ICS-formoterol in adults and adolescents at Step 4", and Box 4-8B gives "Step 4 to 5 MART: 2 inhalations twice daily plus 1 as needed" for budesonide-formoterol 160/4.5 (200/6). The stem now gives his inhaler as 200/6 mcg, one inhalation twice daily and as needed (10 inhalations a day stays under the 12 a day limit). The update now prescribes prednisone 50 mg daily for 5 days, and the old detail about stopping a prednisone course was removed.
2. **49 q4.** GINA 2024's sentence "Patients discharged from the ED with an action plan and PEF meter have better outcomes" is not in the 2026 report. The explanation now uses 2026 text: long-term PEF monitoring "for earlier detection of exacerbations, mainly in patients with poor perception of airflow limitation", and guided self-management (self-monitoring, written action plan, review) reduces hospitalizations and ED visits by one-third to two-thirds.

Statements confirmed unchanged in GINA 2026: Box 9-1 risk factors, including "Food allergy or history of anaphylaxis" and "using nebulized SABA" (49 q2 and q4). It also adds "Certain comorbidities, including pneumonia, diabetes and arrhythmias", which supports "his diabetes" in 49 q2. Also unchanged: measuring PEF "without unduly delaying treatment" and again at 1 hour, blood gases for non-responders with controlled oxygen continued, and oximeter overestimation in dark skin (52 q1). 5 and 7 day prednisone courses are as effective as 10 and 14, with no benefit from tapering. "High-dose ICS-formoterol is not recommended in Track 1 Step 4". The 93 to 95% target in severe adult exacerbations stands, and the general target on oxygen is now 92 to 95%.

## Final batch

| Id | Title | Questions | Key features |
|---|---|---|---|
| asthma-copd-48 | Wheezing after the walk home | 4 single | 1, 5, 4, 8 |
| asthma-copd-49 | Only a little tight | 4 single | 3, 2, 6, 8 |
| asthma-copd-50 | New asthma that will not settle | 4 single | 1, 1, 1, 4 |
| asthma-copd-51 | Hard to rouse after a bad week | 3 single, 1 menu | 4, 7, 7, 7 |
| asthma-copd-52 | Brought in from a group home | 4 single | 3, 5, 3, 6 |

20 questions: 19 single, 1 menu (51 q4, select 2 of 6). Every key feature is covered: KF1 4, KF2 1, KF3 3, KF4 3, KF5 2, KF6 2, KF7 3, KF8 2. Single key positions (first to fifth): 4, 4, 4, 4, 3. All tests pass, including the key position, longest-key and near-duplicate stem checks.

Numbers recomputed: 48 peak flow 160/450 = 35.6%, so 36%. After treatment 370/450 = 82%. 49 150/480 = 31.25%, so 31%, and 400/480 = 83.3%, so 83%. 51 gases check by Henderson-Hasselbalch: pH 6.1 + log(32 / (0.03 x 69)) = 7.29, and at 1 hour PaCO2 72 with bicarbonate about 33 gives 7.28. These are consistent with acute on chronic hypercapnia. 51 q4: 62% survival at 180 days against 49% predicted (BTS/ICS text).

## How uniqueness was checked

- Read the whole catalogue `scratchpad/q500/catalog/asthma-copd.md`: every SAMP, both batch03 oral cases (near-fatal-asthma, hypercapnic-copd-exacerbation) and the batch14 rural child case. Then grepped `sob.md`, `airway.md`, `pulmonary-edema.md`, `anaphylaxis.md` and every other catalogue for each new decision. Search terms: thunderstorm, pollen, hay fever, oximeter, antibiotic, antimicrobial, gabapentin, full face, interface, leak, prognosis, underestimate, futile, perception, Step 4, maintenance inhalations, nebulizer, face mask, louder wheeze, continue.
- None of the new keys appears as a keyed decision anywhere in the bank. The closest neighbours are:
  - asthma-copd-45 q1 (oximetry bias in dark skin). 48 q2 is about whether to give oxygen with no oximeter, not about reading one.
  - asthma-copd-38 q2 (pMDI and spacer for infection control). 52 q2 keys the nebulizer for a near-fatal patient who cannot use a mouthpiece, citing GINA's note that life-threatening patients were excluded from the spacer trials.
  - asthma-copd-19 q3 (morphine to tolerate NIV in COPD). No sedation item was written.
  - asthma-copd-26 (IPAP and EPAP settings). 51 q3 is a leak and fit problem, and lowering IPAP is a wrong distractor.
  - asthma-copd-02 q3 (NIV contraindication list, write-in). No contraindication is keyed.
  - The oral COPD case q-goals (capacity and substitute decisions). 51 q4 is about clinicians' prognostic pessimism, not consent.
  - asthma-copd-45 q2 ("Keep it, alongside short-acting inhalers", a COPD long-acting bronchodilator). 52 q4 is inhaled corticosteroid continuation in asthma during admission.
- One key wording, "Continue it at her usual dose", matched a key in another topic (hydromorphone in the ED) word for word. It was reworded to "Continue her usual daily dose".
- No patient numbers were reused. The 51 gas values (7.29, 69, 60, 32) and vitals differ from every COPD item in the catalogue. The 48 peak flow and the 52 fluticasone dose were also checked.
- Within the batch, each angle appears once. There is one fatal-risk question (49 q2) and one poor-perception recognition item (49 q1), with 49 q4 covering the discharge measure for it as the reviewer suggested. The two inhaled corticosteroid items differ in phase and decision: 49 q3 steps up MART at ED discharge, and 52 q4 continues an ICS on admission.
- No D1 repeat is created.

## Sources (all opened and read)

- Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update. Full PDF downloaded and read: https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf (Box 9-1, ED assessment and treatment, oxygen, antibiotics, systemic and inhaled corticosteroids, Box 9-7, Box 4-8B MART doses, PEF monitoring, self-management, thunderstorms and outdoor allergen advice, intranasal corticosteroids, physical activity, LABA without ICS, LTRA).
- Thien F, Beggs PJ, Csutoros D, et al. The Melbourne epidemic thunderstorm asthma event 2016. Lancet Planet Health. 2018. Title, journal and DOI confirmed, and abstract read in Europe PMC (PMID 29880157): https://doi.org/10.1016/S2542-5196(18)30120-7
- Health Canada. Summary Safety Review. Gabapentin: assessing the potential risk of serious breathing problems. 16 September 2016. Page read: https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/safety-reviews/summary-safety-review-gabapentin-assessing-potential-risk-serious-breathing.html
- Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. Thorax. 2016. Full PDF downloaded from the BTS site and read (recommendations 2, 7 to 9, 29 to 40, the interface text, Table 3, oxygen with NIV, prognostic pessimism): https://doi.org/10.1136/thoraxjnl-2015-208209
- Sehgal IS, et al. Foreign body inhalation in the adult population. Respir Care. 2015. Abstract read in Europe PMC: https://doi.org/10.4187/respcare.03976
- Huh JY. Foreign body aspirations in dental clinics: a narrative review. J Dent Anesth Pain Med. 2022. Reread: https://pmc.ncbi.nlm.nih.gov/articles/PMC9171332/

Removed with the rebuilt items: BTS oxygen 2017 (O'Driscoll) and ERS/ATS 2017 (Wedzicha). GOLD 2026 was read for background (NIV over high-flow in hypercapnic failure, ICU outcomes) but is not cited.

## Uncertain, for the reviewer

1. 48 q2 sets a severe patient with no free pulse oximeter during a storm surge at a community hospital. The key follows GINA (Evidence D) and the explanation follows GINA (Evidence B on controlled versus high-concentration oxygen). Please judge whether the setting is plausible enough.
2. 48 q1 is tagged KF1 (first episode of wheeze) although its key is an asthma diagnosis, not a mimic. The distractors are the mimics.
3. 48 q4 rests on GINA Evidence D advice: stay indoors with windows closed when pollen is highest. GINA ties thunderstorms to these epidemics. It does not give storm-specific advice.
4. 51 q1 uses a Health Canada review of gabapentin. Pregabalin is not covered by that page and is not mentioned.
5. 52 q2 keys a face mask nebulizer for a near-fatal patient. GINA says pMDI with spacer is equivalent in studies that excluded life-threatening asthma. It does not state that a nebulizer is preferred. The key rests on that exclusion and on her inability to use a mouthpiece.
6. Three KF7 items sit in one SAMP (51 q2 to q4). Each tests a different decision: the interface, fixing a leak, and prognosis.
