# SAMP review. Batch s34, delirium and agitation. Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Scope: all 23 SAMPs in `src/samps/s34/delirium-agitation.ts` (delirium-agitation-16 to delirium-agitation-38) and the 2 SAMPs in `src/samps/s34/review-extra.ts` (delirium-agitation-39 and delirium-agitation-40). Each SAMP was read on its own, every explanation sentence against its stem and updates. The Lens A report was not relied on. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| delirium-agitation-39 (extra) | q1 | correct | Keyed index 4 "Inattention and altered consciousness only", which lacks acute onset and fails the CAM. The explanation itself rejects it. The Lens A report says this was fixed, but the file on disk still held index 4. Key set to index 2 | high |
| delirium-agitation-40 (extra) | q2 | explanation | Invented fact. "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" is in no stem or update and has nothing to do with steroid risk. Lens A reports it removed, but it was still on disk. Sentence removed | high |
| delirium-agitation-38 | q1 | options, explanation | Distractor "Normal blood pressure" and the explanation's "a normal blood pressure" contradict the vitals (148/86 mmHg). Replaced with "Normal temperature" (36.9°C in the vitals), and the explanation now says it makes hypoxia and infection less likely. Key position unchanged | high |
| delirium-agitation-29 | q3, q4 | explanation | Called the respiratory therapist "injured" twice. The stem says only that the father shoved him, and q4 itself says review is needed "whether or not there was a physical injury". Now "assaulted staff member" and "the therapist who was shoved". q4 also rejected a ban as disproportionate "to one supervised visit", which is not what happened. Now "a single incident that settled with de-escalation" | high |
| delirium-agitation-29 | q2 | stem | Key "That must have been terrifying to watch" and the explanation assume the father saw the seizure. The stem never said so. Stem now says the seizure was at home, witnessed by both parents | medium |
| delirium-agitation-21 | q3 | options, correct, explanation | Distractor "Insomnia for the past two nights" is a finding the case never gave. Replaced with "Coarse tremor of both hands", which is in the stem and is a withdrawal sign, not a marker of delirium. Alphabetical order moves the key "Failing to count back from 20" from index 0 to index 1 | medium |
| delirium-agitation-25 | q3 | explanation | "An anterior STEMI with falling saturation". Saturation is 91% in the vitals and no update says it fell. Now "with hypoxemia and crackles" | medium |
| delirium-agitation-25 | q2, q3 | stem | A daughter first appears in the q2 options ("Daughter who visits her daily") and the q3 update. Added to the stem: "their daughter visits her daily" | medium |
| delirium-agitation-25 | q1 | explanation | Called the crackles "new" and rejected lumbar puncture on "no meningism". Neither is in the stem. Now "bibasilar crackles" and "an afebrile woman with a cardiac picture" | low |
| delirium-agitation-32 | q1 | stem | The menu offers ceftriaxone, acetaminophen and heparin prophylaxis as things she is receiving, and the explanation relies on it, but the stem never said she was on them. Added to the stem | medium |
| delirium-agitation-34 | stem | stem | Timeline conflict. "Last seen well 30 hours ago" but his daughter "saw him 2 days ago". Now "A neighbour last saw him well 30 hours ago". The 30-hour long lie in q3 is unchanged | medium |
| delirium-agitation-35 | q2, q3 | explanation | "He is in septic shock" before any fluid. Septic shock needs hypotension that persists after fluid resuscitation, and the q4 update shows his pressure responded to 2 L. Now "sepsis with hypotension" in q3, "inadequate with hypotension", and "low blood pressure" in q2 | medium |
| delirium-agitation-20 | q2 | stem, explanation | "She takes no lithium" is used to reject the lithium level, but the stem gave no medication history. Stem now says she takes no medications. Explanation adjusted | medium |
| delirium-agitation-17 | q3 | options | Distractor "Restart clozapine at 400 mg in 2 days" sits exactly on the 48-hour line the explanation uses ("after more than 48 hours off"). Now "in 3 days", so the stated reason applies without doubt | low |
| delirium-agitation-24 | q3 | stem | Option "Brother who lives in the same town" gave a detail the stem lacked. Stem now says the brother lives in the same town | low |
| delirium-agitation-27 | q2 | explanation | "The baby is safe with his grandmother". The baby's sex is never given. Now "with the mother-in-law", as in the stem | low |
| delirium-agitation-31 and delirium-agitation-40 | stem | stem | "Sodium and calcium are normal" is a vague qualifier (SAMP_SPEC section 3). Now "Sodium is 138 mmol/L and calcium 2.36 mmol/L". Mirrored in the duplicate extra | low |
| delirium-agitation-33 | q3 | options | Distractor "olanzapine plus lorazepam IM" had no doses, unlike every other option. Now "olanzapine 10 mg, lorazepam 2 mg IM". Longest to shortest option ratio 2.06, under 2.1 | low |
| delirium-agitation-19 | q2 | explanation | 9 sentences, over the 3 to 6 limit. Merged the scoring items into fewer sentences. No number changed | low |

## Key changes

- delirium-agitation-39 q1 (review-extra): index 4 ("Inattention and altered consciousness only") to index 2 ("Acute onset, inattention and disorganized thinking"). The explanation already argued for index 2.
- delirium-agitation-21 q3: index 0 to index 1. Position change only. The keyed answer is the same option, "Failing to count back from 20". A distractor was replaced and the options were re-sorted.

## Numbers recomputed by script

All correct as written unless listed in the fixes:

- Burch-Wartofsky, delirium-agitation-19 q2: temperature 39.6°C in the 39.5 to 39.9 band scores 25, delirium or psychosis 20, vomiting and diarrhea 10, pulse 156 at 140 or more 25, no heart failure 0, atrial fibrillation 10, precipitant 10. Total 100. Mild agitation instead gives 90.
- 4AT, delirium-agitation-34 q1: alertness 0, AMT4 errors on year and place give 2, December back to May is 8 months (7 or more scores 0), acute change 4. Total 6. Without the acute change item 2, months partly done 7, months untestable 8.
- CAM, delirium-agitation-23 q1 and -39 q1: only acute onset plus inattention plus disorganized thinking satisfies it.
- GCS, delirium-agitation-33: eyes spontaneous 4, confused 4, obeys 6, total 14. Injury 1 hour ago, so the CCHR 2-hour GCS criterion is not yet met. Two vomits meets "two or more".
- Weight-based doses: ketamine 180 mg for 45 kg is 4.0 mg/kg (18). Lorazepam ceiling 0.1 mg/kg is 5.4 mg for 54 kg (20) and 5.5 mg for 55 kg (36). Ketamine 250 mg for 55 kg is 4.55 mg/kg (36, "about 4.5"). Risperidone 0.5 mg twice daily plus 0.5 mg is 1.5 mg a day (18).
- Daily totals and ratios: pregabalin 150 mg twice daily is 300 mg, double the 150 mg ceiling at CrCl 15 to 30 (16). Lorazepam 1 mg plus 2 mg is 3 mg a day (21). Zopiclone 7.5 mg is twice 3.75 mg (32). Haloperidol 5 mg is ten times 0.5 mg (32).
- Kidney function, delirium-agitation-16: CKD-EPI 2021 for an 86-year-old woman with creatinine 168 umol/L gives about 25 mL/minute/1.73 m2, consistent with the stated eGFR of 24.
- Sodium and glucose: glucose 19.8 mmol/L is well below the hyperosmolar range of about 33 mmol/L (31). Ascitic neutrophils 90 x 10^6/L are below 250 (24). Sodium, calcium and potassium values in 16, 17, 24, 26 and 34 match the explanations.
- Timelines: 28 haloperidol and lorazepam at 21:00, calm 22:30, akathisia 23:30, so lorazepam was 2.5 hours earlier. 38 boarding 26 hours at 04:00 means arrival at 02:00 the day before ("yesterday"). 36 vape 2 hours before arrival at 23:00. 37 asleep at 6 minutes, within the 10-minute endpoint. 32 daughter left 21:00, zopiclone 22:00, agitation 02:00. 17 smoking stopped 12 days ago, within the 1 to 2 week induction window. 31 prednisone day 9, symptoms 3 days. 27 day 8 postpartum, within 2 weeks.
- Detention and statute limits: BC Mental Health Act 48 hours on one certificate, second certificate to continue (27). BC HCCA 12-month contact rule against 5 years without contact (23).
- Taylor 2017 differences at 10 minutes, 25.0 and 25.4 percentage points (37), checked against the abstract.

Format script (stem 50 to 150 words, updates 10 to 45 words, prompts 10 to 30 words, no semicolons or dashes, option ratios, key length) found no breach after the fixes. Single key positions are 18, 18, 16, 18, 15 of 85 (highest 21.2%), and the key is the longest option in 18 of 85 (21.2%).

## Sources verified

- Taylor DM et al. Annals of Emergency Medicine 2017, abstract: https://pubmed.ncbi.nlm.nih.gov/27745766/ (differences 25.0% and 25.4% at 10 minutes).
- No citation was added or changed under this lens. The other numbers were checked against the standard definitions of the Burch-Wartofsky scale, the 4AT, the CAM, the GCS, the Canadian CT Head Rule and CKD-EPI 2021.

## Needs physician decision

1. review-extra.ts. delirium-agitation-39 duplicates delirium-agitation-23 and delirium-agitation-40 duplicates delirium-agitation-31. Both extras are now internally correct, but neither should enter the bank. Recommend dropping both. The Lens A fixes to these two SAMPs were not on disk when this review started.
2. delirium-agitation-35 q3 still calls this sepsis rather than septic shock. A physician may prefer different wording, since practice often uses "septic shock" loosely at the bedside.
3. delirium-agitation-33 q2 distractor "His blood alcohol above the driving limit" implies a measured level that the case never gives. Left, since the option is a rejected reason, not a fact the key relies on. Low concern.
4. delirium-agitation-29 q1 and delirium-agitation-38 q1: the key is the longest option (1.35 and 1.40 times the mean distractor). Both are under the 1.5 limit and the batch rate is 21%.

## Summary

- 25 SAMPs reviewed (23 in the batch, 2 extra). 19 fixes in 16 SAMPs.
- By category: 1 wrong key (39), 1 invented fact (40), 1 option contradicting the vitals (38), 5 explanation claims not in the case (25 q3, 25 q1, 29 q3 and q4, 27 q2, 20 q2), 5 stem facts added so options or explanations trace (29, 25, 32, 24, 20), 1 option finding not in the case (21 q3), 1 timeline conflict (34), 1 wrong threshold term (35 septic shock), 1 option on a threshold edge (17), 1 vague lab qualifier (31 and 40), 1 option lacking doses (33), 1 explanation over the sentence limit (19).
- Most serious: the wrong key in delirium-agitation-39 q1 and the invented lactate in delirium-agitation-40 q2, both still on disk although the Lens A report says they were fixed. Next, the "normal blood pressure" distractor at 148/86 mmHg in delirium-agitation-38 q1, the "injured" therapist in delirium-agitation-29, and the invented "falling saturation" in delirium-agitation-25 q3.
- SAMPs with a defect: delirium-agitation-17, delirium-agitation-19, delirium-agitation-20, delirium-agitation-21, delirium-agitation-24, delirium-agitation-25, delirium-agitation-27, delirium-agitation-29, delirium-agitation-31, delirium-agitation-32, delirium-agitation-33, delirium-agitation-34, delirium-agitation-35, delirium-agitation-38, delirium-agitation-39, delirium-agitation-40.
- Checks: `npx tsc --noEmit -p . 2>&1 | grep samps/s34` prints nothing. `SAMP_BATCH=s34 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 528 passed, 0 failed.
