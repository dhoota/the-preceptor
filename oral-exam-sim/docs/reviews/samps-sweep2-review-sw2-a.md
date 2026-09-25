# Sweep 2 review, batch s25 (label sw2-a)

Independent review of the seven SAMPs rebuilt by writer SW2-A in `src/samps/s25/asthma-copd.ts`: asthma-copd-24, 35, 38, 41, 42, 43 and 45. Both lenses were applied. Edits were made only inside these seven SAMPs. Nothing was committed. Every SAMP stays `reviewed: false`.

## Verdicts

| SAMP | Verdict | Summary |
|---|---|---|
| asthma-copd-24 | Fixed (minor), flagged | KF4 fit is sound. The official KF4 wording names CAD. q3 is an inpatient cardiology decision. Mock mode cue trimmed. |
| asthma-copd-35 | Fixed (key change) | q2 key contradicted the 2023 CTS COPD guideline. q3 key changed to keep the device consistent. |
| asthma-copd-38 | Pass | The q3 key is correct against GINA 2026, the Canadian Paxlovid monograph and the Liverpool tables. |
| asthma-copd-41 | Fixed (key change) | q1 copied the keyed decision of sob s51 q3. q2 key reworded to drop a UK staffing ratio. |
| asthma-copd-42 | Needs rebuild | Laryngectomy scenario and stoma teaching copy airway-18. The q3 premise conflicts with airway-18. |
| asthma-copd-43 | Pass, flagged | Claims check against GINA. Partial overlap in q2 and q3 teaching points. |
| asthma-copd-45 | Fixed (minor) | Sjoding figures correct. Key option shortened to remove a length cue. One caveat added to q3. |

## One row per question

| SAMP | Q | KF (matches HEAD) | Verdict | Finding and change | Confidence |
|---|---|---|---|---|---|
| 24 | q1 | 4, yes | Pass | NSTEMI in a patient with asthma. Official KF4 lists CAD as a comorbid condition. Troponin 58 to 390 ng/L against 16 is right. | high |
| 24 | q2 | 4, yes | Pass | ASA 160 mg chewed fits ESC 150 to 300 mg and the Canadian 160 to 320 mg habit. GINA says NSAIDs are not contraindicated without prior reaction. | high |
| 24 | q3 | 4, yes | Fixed, flagged | Starting bisoprolol is an inpatient decision, not an ED one. GINA says a beta-blocker in asthma should start under specialist supervision, which fits admission better than the ED. Kept, but flagged. Update trimmed ("admitted under cardiology", "anterior hypokinesis") to reduce the mock mode cue to q1. | medium |
| 35 | q1 | 5, yes | Pass | GOLD 2026 exacerbation section: SABA by pMDI 1 to 2 puffs hourly for 2 to 3 doses, no high doses. Confirmed in the PDF. | high |
| 35 | q2 | 6, yes | Key changed | Old key "Switch to a LAMA-LABA combination" (GOLD rule for eosinophils below 100). The 2023 CTS guideline dropped eosinophils and strongly recommends single-inhaler ICS-LAMA-LABA for high-risk patients (2 moderate or 1 severe exacerbation), with a mortality benefit. He is high risk. New key "Switch to a single triple inhaler". Prompt now names the CTS guideline, as SAMP_SPEC section 9 requires when references disagree. "Add tiotropium" (triple by two inhalers, also defensible) replaced with "Change to a LAMA-LABA inhaler". Source changed to cts-copd, and CTS_COPD added to sources. | high |
| 35 | q3 | 8, yes | Key changed | A soft mist inhaler suited the old LAMA-LABA key. No triple inhaler is sold as a soft mist inhaler. The update now says his medicine comes as a dry powder inhaler or pMDI. New key "Change to a pMDI with a spacer" (GOLD device section: switch to pMDI with or without spacer or SMI by drug availability, spacer if any doubt). | medium |
| 38 | q1 | 4, yes | Pass | GINA 2026 COVID-19 section: recent OCS marks poorly controlled asthma and higher COVID-19 admission risk. | high |
| 38 | q2 | 4, yes | Pass | GINA COVID-19 section: avoid nebulizers, pMDI and spacer, single-patient spacer. | high |
| 38 | q3 | 6, yes | Pass | Key "fluticasone alone until 5 days after it ends" is right. See the detailed check below. | high |
| 41 | q1 | 3, yes | Key changed | Old key (pH and PaCO2 moving toward normal, SpO2 as the lure, pH 7.26 then 1 hour of bilevel) copied sob s51 q3 and echoed asthma-copd-22 q3. Rebuilt as a 30 minute check before the repeat gas. New key "Respiratory rate now 22/minute" from 32, on BTS/ICS recommendation 30 (pH and respiratory rate). | medium |
| 41 | q2 | 7, yes | Fixed | Key "Monitored area, 1 nurse per 2 NIV patients" carried a UK staffing standard (BTS/ICS Box 3). Now "Monitored high-dependency area". The ratio stays in the explanation, attributed to BTS/ICS. | medium |
| 41 | q3 | 7, yes | Pass, flagged | Matches BTS/ICS recommendation 31 and the weaning practice point word for word. KF7 fit is loose (weaning, not recognition). | medium |
| 42 | q1 | 3, yes | Pass | Gas severity. Numbers consistent. | high |
| 42 | q2 | 5, yes | Pass | BTS 2017 R2 (air-driven nebulizer in hypercapnia) and P1 (tracheostomy mask after laryngectomy) confirmed in the PDF. | high |
| 42 | q3 | 7, yes | Needs rebuild | airway-18 (s21) q2 keys bag ventilation with an infant mask sealed over a laryngectomy stoma. So a noninvasive interface can reach his trachea, and bilevel over the stoma is a real option that the key never faces. The explanation was edited so it no longer implies no interface exists. The scenario, and the rule that face devices are useless and support goes through the stoma, copy airway-18 q1 and q2. | high |
| 43 | q1 | 2, yes | Pass, flagged | GINA diagnosis section: ask whether symptoms improve away from work (an essential screen). The official KF2 wording is a high-risk history (ICU, steroids, visits). A work history is a stretch. | medium |
| 43 | q2 | 6, yes | Pass, flagged | GINA: no LABA without ICS. Partly overlaps asthma-copd-36 q (no LABA or LAMA without ICS in asthma plus COPD). The context is different. | medium |
| 43 | q3 | 8, yes | Pass, flagged | GINA: follow-up in 2 to 7 days, and referral for suspected occupational asthma (Evidence A). The 2 to 7 day key repeats asthma-copd-32. The referral half is new. | medium |
| 45 | q1 | 3, yes | Fixed | Sjoding multicentre cohort: 160 of 939 (17.0%) in Black patients against 546 of 8795 (6.2%) in White patients. The ratio is 2.7, so "nearly three times" holds. Key option "Oximeter bias with darker skin" was the longest by a clear margin (30 against 17 to 24 characters). Now "Skin pigmentation bias". | high |
| 45 | q2 | 5, yes | Pass | GOLD exacerbation section: continue long-acting bronchodilators during an exacerbation. | high |
| 45 | q3 | 7, yes | Fixed (minor) | GOLD respiratory failure section describes HFNT for patients who cannot tolerate NIV. Added that about 30% switched to NIV in one trial, so the gas must be rechecked. Key stands. | medium |

## Key changes

- asthma-copd-35 q2: "Switch to a LAMA-LABA combination" became "Switch to a single triple inhaler". The reason is the 2023 CTS guideline. The prompt now names it.
- asthma-copd-35 q3: "Change to a soft mist inhaler" became "Change to a pMDI with a spacer". This keeps the device consistent with the new q2 key.
- asthma-copd-41 q1: "pH and PaCO2 moving toward normal" became "Respiratory rate now 22/minute". The reason is overlap with sob s51 q3.

## Specific checks requested

1. **Key features.** All 21 `keyFeature` values match `git show HEAD`. asthma-copd-24 fits KF4, because the official wording names CAD among comorbid conditions. q1 and q2 are sound ED decisions. q3 (start bisoprolol at EF 35%) is a ward decision. GINA wants a specialist to start it. It is kept and flagged.
2. **asthma-copd-38 q3.** GINA 2026 (COVID-19 section) says ritonavir is unlikely to cause important corticosteroid effects over a short course. It warns about salmeterol and vilanterol. It advises switching to ICS alone or ICS-formoterol for the course and 5 more days. The Canadian Paxlovid monograph (Pfizer, pdf.hres.ca 00072671) lists salmeterol in Table 1 as contraindicated. For fluticasone it says "not recommended unless the potential benefit outweighs the risk" and to consider alternatives "particularly for long-term use". The Liverpool outpatient table (March 2025) codes salmeterol red and inhaled fluticasone green. The colours were read from the PDF drawing layer, so treat this with moderate confidence. The key holds and was not changed. Adrenal suppression and Cushing syndrome follow long-term co-use, not a 10 day window.
3. **asthma-copd-35.** q1 and q3 match GOLD 2026. q2 conflicted with CTS 2023. It is fixed as above.
4. **asthma-copd-41 and 42.** BTS/ICS recommendations 25, 27, 30, 31 and 34, and Box 3 (level 2 area, 1 nurse per 2 NIV patients), were confirmed in the full text (PMC4800170). No current CTS guideline covers NIV location, staffing or weaning. The 2011 Canadian NIV guideline (Keenan et al, CMAJ) predates this and was not used. The UK staffing ratio was removed from the key.
5. **asthma-copd-45.** Sjoding figures are exact. The HFNT key is supported by GOLD and consistent with ERS advice to try NIV first, which he refused.
6. **asthma-copd-43.** Occupational asthma claims match the GINA diagnosis, risk reduction and specific populations sections. The menu keys (2 to 7 day follow-up and specialist referral) match GINA. No current CTS asthma guideline was found that conflicts. The 2008 CTS occupational asthma statement was not opened.
7. **Cueing.** No "most accurate statement" questions, so no hedged-key cue. Mock mode: asthma-copd-24 q2 (antiplatelet) and q3 (beta-blocker after admission) imply the q1 diagnosis of ACS. This is structural. The q3 update was trimmed, and q1 is answerable from its own troponin anyway. asthma-copd-35 q3 option "pMDI with a spacer" weakly echoes q1. Longest-key count for s25 singles is 32 of 102 including ties, under 35%. One clear length cue fixed (45 q1). Key positions are now 23, 25, 18, 21 and 15 of 102.
8. **Overlap.** Found three problems: 42 against airway-18, 41 q1 against sob s51 q3, and weaker overlaps for 43 q2 and q3 and for 35 q2 (triple escalation is also keyed in asthma-copd-19 q4 and s04). The rest had no match: NSTEMI in asthma, COVID-19 and nirmatrelvir, oximeter skin bias, HFNT after NIV refusal, air-driven nebulizers and occupational asthma.

## Sources verified

- GINA 2026 report, full PDF read (diagnosis, risk reduction, COVID-19, occupational asthma and Appendix B sections).
- GOLD 2026 report v1.3, full PDF read (follow-up pharmacotherapy, devices, exacerbation treatment, HFNT sections).
- Bourbeau et al, 2023 CTS COPD pharmacotherapy guideline, through the primary care summary (PMC11333456).
- Pfizer Canada, Paxlovid product monograph, https://pdf.hres.ca/dpd_pm/00072671.PDF
- Liverpool Drug Interactions Group, Interactions with outpatient medicines and NMV/r, March 2025, https://www.covid19-druginteractions.org/prescribing_resources/paxlovid-outpatient-medicines
- Davidson et al, BTS/ICS 2016, https://pmc.ncbi.nlm.nih.gov/articles/PMC4800170/
- O'Driscoll et al, BTS oxygen guideline 2017, full PDF.
- Sjoding et al, N Engl J Med 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC7808260/

## Checks

- `SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 675 passed.
- `npx tsc --noEmit -p .`: no errors.

## For the physician

- **asthma-copd-42 needs a rebuild.** A total laryngectomy with the stoma as the only airway is already the scenario of airway-18 (s21). airway-18 also teaches that face devices fail and that support goes through the stoma. airway-18 q2 keys bag ventilation with an infant mask sealed over the stoma. That means bilevel over the stoma is possible, yet 42 q3 keys intubation through the stoma for an alert patient with pH 7.27, where BTS would try NIV first. It could not be fixed in place.
- **asthma-copd-35 q2 key change.** CTS 2023 and GOLD 2026 disagree on ICS for low eosinophils. The prompt now names CTS. Please confirm you want the Canadian guideline tested this way. The triple-escalation teaching also appears in asthma-copd-19 q4 and s04. The new part is that CTS ignores the eosinophil count.
- **asthma-copd-35 q3** now states in the update that his medicine comes as a dry powder inhaler or a pMDI. This rests on no triple inhaler being sold as a soft mist inhaler in Canada.
- **asthma-copd-24 q3** tests a ward decision (start bisoprolol for EF 35% the next morning). Decide whether to keep it or swap it for an ED decision.
- **asthma-copd-38 q3** stands. The fluticasone plus ritonavir risk of Cushing syndrome is real with long-term use. GINA, the Canadian monograph and Liverpool all accept a short course.
- **asthma-copd-41 q1** was rebuilt around respiratory rate. It now shares only the question frame with sob s51 q3, not the key. q2 and q3 are loose fits for KF7, which is about recognizing failure and starting NIV.
- **asthma-copd-43 q1** maps a work history to KF2 (high-risk history). Please confirm.
- No Canadian source covers NIV location, staffing or weaning. BTS/ICS 2016 is the source for asthma-copd-41 and 42.

Summary: 7 SAMPs reviewed. 2 pass (38, 43). 4 fixed (24, 35, 41, 45), with 3 key changes. 1 needs a rebuild (42), not re-rebuilt here.
