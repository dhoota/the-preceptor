# Signed-duplicate rebuild, round 2 fixes, label r2t

Files: `src/samps/s16/seizures.ts` and `src/samps/s16/shock.ts`. Review answered: `docs/reviews/signed-rebuild-r2e-review.md`. Nothing committed.

Changed blocks: seizures-05, seizures-07, shock-04 and shock-05. The only other change is one new `S` entry in seizures.ts (`bellamyCpvt`). shock-09, shock-11, seizures-03, shock-07, shock-12, shock-13 and every other SAMP are byte-identical to the copies taken before this round (`scratchpad/r2t/*.before.ts`).

Each of the four keeps its id, topic, question count, and each question's kind and key feature. Each keeps `...META, reviewed: false, version: 2`. All four are already listed in `src/samps/held-back/r2e.json`, so no `r2t.json` was created.

D1 repeats designed in: none.

## Result per id

| Id | Status | What changed |
|---|---|---|
| seizures-05 | q4 fixed. **q3 stopped: no standard source found** | q3 unchanged (see below). q4 re-matched and one item added |
| seizures-07 | q4 re-keyed | Epinephrine avoidance is now the only keyed decision. Sedation and beta blockade are no longer scored. Bellamy 2019 cited directly |
| shock-04 | q3 re-keyed through the stem, q4 match fixed | AKI is now stage 1A with no SBP, so EASL gives crystalloid. Ringer's replaced by 0.45% saline |
| shock-05 | q2, q3, q4 fixed | Cue removed, unacceptable narrowed, `packing` narrowed |

## seizures-05

**q3: stopped.** The key (a short-acting beta blocker for caffeine VT with hypotension) was left as it was. I opened these sources. None of them is a standard toxicology reference that supports the key.
- **Goldfrank** (the review's first suggestion). AccessEmergencyMedicine returns a Cloudflare "Just a moment" page, the same as earlier rounds' `ae_*.html`. Not opened.
- **StatPearls "Caffeine toxicity"** (NCBI Bookshelf NBK532910). reCAPTCHA page. Not opened.
- **Medscape eMedicine "Caffeine toxicity", Treatment** (opened, `r2t/medscape.txt`). This does not support the key. For VT it gives "amiodarone or lidocaine" if stable and "electrical cardioversion" if unstable or refractory. It limits beta blockade to "In theory, beta blockade can be beneficial in patients with refractory hypotension and could be used in consultation with the regional poison control center". Lidocaine has not been tried in the stem, so the key is not the single best answer under this source.
- **WikEM "Caffeine toxicity"** (opened). "BB or CCB for tachycardia (Esmolol or Propranolol). If Vtach, initiate code protocol." Not VT.
- **LITFL "Theophylline toxicity"** (opened). Beta blockers for supraventricular arrhythmias only.
- **Dtsch Arztebl Int 2025, "Caffeine intoxication", 216 published cases** (doi 10.3238/arztebl.m2025.0113, full text opened). "Amiodarone and lidocaine were the drugs used primarily to treat ventricular cardiac arrhythmia". Beta blockers were used mainly for supraventricular arrhythmia. "No definitive treatment recommendations can be derived".
- **Primary reports** (PubMed abstracts opened). Price 1990 Ann Emerg Med (PMID 1688693): esmolol "controlled her multiple dysrhythmias". Laskowski 2015 Clin Toxicol (PMID 26279469): esmolol infusion after 23 episodes of pulseless VT. These are single cases, like Miyamura.

So q3 is still held on a single case letter, and now also on two more case reports. The standard sources I could open point to amiodarone or lidocaine and cardioversion for caffeine VT. Arjan or the coordinator must decide: accept case-level support, re-key q3 (for example to hemodialysis, which Kohara supports), or keep the signed text.

**q4: fixed.** `required` stays 2. There are now three items:
- `neuro`: "No driving until a neurologic evaluation has been done". Every match ties driving to neurology, for example "no driving … neurology", "before driving … neurologic", "cleared by neurology". Bare "neurology" no longer scores.
- `toxic`: no 3-month wait applies. The "drive once recovered" and "drive again once" family was removed.
- `abstain` (new): driving depends on staying off caffeine tablets. This follows the CMA Section 11 alert: "Driving after a seizure caused by use of a substance depends on complete abstinence from use of that substance."
- New unacceptable: "She can drive now" ("can drive now", "may drive today" and similar).
- The loose unacceptable "after 3 months" became "drive after 3 months" or "driving after 3 months". The old form rejected "after that she does not need to wait 3 months".
- The explanation now quotes the Section 11 alert: stop at once, resumption depends on neurologic assessment, and abstinence.
- Source: CMA Driver's Guide Section 11, re-read in `scratchpad/g05/cma.txt`.

## seizures-07 q4

- **Prompt:** "If these runs become sustained or he arrests, which drug from the usual resuscitation algorithm would you avoid?" The question now covers arrest, so the key's "even if he arrests" is inside the scenario.
- **Scoring:** `required` changed from 2 to 1. Kind (short) and key feature (arrhythmia 6) are kept. There is one accept item, `noepi`. `sedate` (the arrhythmia-24 q4 repeat) and `bb` (the keeper's decision) were removed as scoring items. They are mentioned, unscored, in the explanation.
- **noepi matches:**
  - Bare drug names, because the prompt asks what to avoid: epinephrine, adrenaline, catecholamine and isoproterenol.
  - Negated forms: avoid, no, not, don't, withhold, hold, never, without.
  - Post-negated forms: "… contraindicated", "… avoided", "… withheld".
  - Harm statements: "… worse", "… harmful", "… proarrhythmic", "… trigger".
- **Unacceptable:** positive orders only, such as "give epinephrine", "start isoproterenol", "use adrenaline", "epinephrine 1 mg" and "push dose epinephrine".
- **Source:** now Bellamy D, et al. Pediatr Crit Care Med 2019 (doi 10.1097/PCC.0000000000001847, full text PMC6400445 opened). It says: "Appropriate management is avoidance of epinephrine, administration of general anesthesia, IV opiates, and consideration of flecainide". It also says: "Hypotension and low cardiac output can be difficult to manage because catecholamines should be avoided". Fitzgerald 2025 is kept in `sources`.
- **Decision search:** "avoid/withhold epinephrine" is keyed only in environmental-06 q3 and arrhythmia-06 q4, for hypothermia below 30 °C. That is a different reason. There is no CPVT anywhere in src/samps outside seizures-07. Sedation is no longer keyed, so the arrhythmia-24 q4 repeat is gone.

## shock-04

**q3 (single, same key feature).**
- **Stem change:** creatinine is now 128 umol/L (from 84, 1.52 times baseline, below 133 umol/L or 1.5 mg/dL). That is EASL AKI stage 1A. The update adds "ascitic neutrophil count of 90 x 10^6/L", so there is no SBP.
- **Why saline is now single best:** EASL 2018 (re-read in `scratchpad/r2e/easl.txt`) gives crystalloids for diarrhea. Its 20% albumin 1 g/kg recommendation is for "no obvious cause of AKI, AKI stage >1A or infection-induced AKI". He now has none of these. Fig. 8 leaves stage 1A to removing risk factors and "expand plasma volume".
- **Options:** Ringer's lactate was replaced by "Saline 0.45% 1 L IV". This removes the second defensible crystalloid. European trauma 2023 Recommendation 15 (re-read) accepts 0.9% saline or a balanced crystalloid. 0.45% saline is hypotonic and a poor volume expander with a subdural.
- **Final options:** Albumin 20% 1 g/kg, Albumin 5% 500 mL, **Normal saline 1 L** (key, index 2), Red cells 2 units, Saline 0.45% 1 L. They are alphabetical. The key moved to index 2 to keep the s16 position balance test passing.
- **Other text:** the explanation was rewritten to include the stage 1A and SBP reasoning. The q4 explanation now reads "rise in creatinine from 84 to 128 umol/L".

**q4.**
- The `nsaid` item gained "instead of nsaid", "rather than nsaid", "instead of ibuprofen" and similar.
- The unacceptable is now positive orders only ("give/start/prescribe/use ibuprofen", "ibuprofen 400", "ketorolac 15" and similar). Bare "nsaid" no longer catches "Acetaminophen instead of NSAIDs".
- "Ibuprofen for rib pain" no longer carries the unacceptable label, but it still scores 0.

## shock-05

- **q2:**
  - "autotransfusion port" was removed from the update. The update now says "A left chest tube drains 1100 mL of blood, then 200 mL more over 15 minutes."
  - The stem's resource list now says, in the reviewer's neutral wording, "Your trauma chest drain kits can be connected to a blood giving set."
  - The explanation adds European Recommendation 17: cell salvage for severe bleeding from a thoracic cavity (Grade 2B, re-read).
- **q3:** the unacceptable is now only "Another 2 L of crystalloid" ("2 L crystalloid", "2 L saline", "2 litre" and similar). "More crystalloid" and "more saline" were removed.
- **q4:** bare "packing" was replaced by wound-specific forms: "pack the wound", "pack wound", "packing the wound", "wound packing", "gauze packing", "pack with gauze", "hemostatic gauze", "hemostatic dressing", "hemostatic agent", "combat gauze" and "quikclot".
- Stem length is now 138 words.

## markQuestion probes

Script: `scratchpad/r2t/probe.ts`, run with vite-node. It uses the reviewer's keeper text sets: `keeper_only.json`, and `keeper_texts.json` (keeper plus every cluster member plus the SAMP's signed text). Output: `scratchpad/r2t/probe-out.txt`.

**Keeper best score** (bipartite maximum over every keeper text, with unacceptable texts dropped)

| Q | Keeper only | All cluster |
|---|---|---|
| seizures-05 q4 | 0/2 | 0/2 |
| seizures-07 q4 | 0/1 | 0/1 |
| shock-04 q4 | 0/2 | 0/2 |
| shock-05 q2 | 0/1 | 0/1 |
| shock-05 q3 | 0/1 | 0/1 |
| shock-05 q4 | 1/2 ("Call the trauma surgeon …" → `or`) | 1/2 |

shock-04 q3 is single, so keeper text cannot be typed. Option probes: index 2 scores 1/1, and indexes 0, 1, 3 and 4 score 0/1.

**Natural answers**

| Q | Answer lines | Score |
|---|---|---|
| seizures-05 q4 | "She can drive again once recovered" + "neurology follow-up" | **0/2** (was 2/2) |
| seizures-05 q4 | "She can drive again once recovered and off caffeine tablets" + "needs neurologist review" | 1/2 (abstain) |
| seizures-05 q4 | "She can drive now" + "no swimming alone" | 0/2, unacceptable |
| seizures-05 q4 | "No driving until cleared by neurology" + "No swimming alone" | 1/2 |
| seizures-05 q4 | "No driving until a neurologic evaluation" + "She does not need the 3 month wait for an unprovoked seizure" | 2/2 |
| seizures-05 q4 | "Do not drive until she has seen a neurologist" + "Stop taking caffeine tablets" | 2/2 |
| seizures-05 q4 | "She cannot drive until neurology has assessed her" + "After that she does not need to wait 3 months, as long as she avoids caffeine pills" | 2/2 |
| seizures-05 q4 | "Neurologic assessment before driving" + "Complete abstinence from caffeine tablets" | 2/2 |
| seizures-05 q4 | "She doesn't have to wait 3 months" + "No driving until neurology has seen her" | 2/2 |
| seizures-05 q4 | "no driving for 3 months" / "She should drive after 3 months seizure free" / "Wait 3 months before driving" | unacceptable |
| seizures-05 q4 | seizures-09 q4 text "No driving until cleared by neurology and the licensing authority" + "Avoid sleep deprivation and excess alcohol" | 1/2 |
| seizures-07 q4 | "IV propranolol" + "midazolam for sedation" (keeper plus sedation) | **0/1** (was 2/2) |
| seizures-07 q4 | "Mild sedation with close monitoring" (arrhythmia-24 q4) / "Esmolol infusion" / "Amiodarone" | 0/1 |
| seizures-07 q4 | "Epinephrine should be avoided, even in arrest" / "Don't give epinephrine" / "Withhold adrenaline" / "epinephrine makes CPVT worse" | 1/1 each (was unacceptable or 0) |
| seizures-07 q4 | "Epinephrine" / "Avoid catecholamines such as epinephrine and isoproterenol" / "Adrenaline, because it drives the VT storm" / "No epinephrine infusion" | 1/1 each |
| seizures-07 q4 | "Give epinephrine 1 mg every 3 to 5 minutes" / "Start an isoproterenol infusion" / "Use epinephrine per ACLS" | 0/1, unacceptable |
| shock-04 q4 | "Acetaminophen instead of NSAIDs" + "hold nadolol" | **2/2** (was unacceptable) |
| shock-04 q4 | "Acetaminophen instead of ibuprofen for rib pain" + "stop spironolactone" | 2/2 |
| shock-04 q4 | "NSAIDs are contraindicated" + "reduce lactulose" / "No NSAIDs" + "Hold beta blocker" | 2/2 |
| shock-04 q4 | "Give ibuprofen 400 mg" / "Start ketorolac 15 mg IV" (plus a correct line) | 1/2, unacceptable line |
| shock-04 q4 | "ibuprofen for rib pain" + "hold nadolol" | 1/2 (line scores 0, no label) |
| shock-05 q2 | "autotransfuse the hemothorax blood" / "Reinfuse the chest tube blood through a filter" | 1/1 |
| shock-05 q2 | "activate MTP" 0/1. "2 L normal saline" | unacceptable |
| shock-05 q3 | "norepinephrine infusion" / "Norepinephrine infusion with a small crystalloid bolus" | 1/1 |
| shock-05 q3 | "more crystalloid" | 0/1, **no longer unacceptable** |
| shock-05 q3 | "2 L crystalloid bolus" | unacceptable |
| shock-05 q4 | keeper "Call the trauma surgeon and interventional radiology" + "Transfusion and angioembolization or preperitoneal packing" | **1/2** (was 2/2) |
| shock-05 q4 | "Preperitoneal packing" + "Pelvic binder" | 0/2 |
| shock-05 q4 | "Wound packing with gauze" + "Firm direct pressure" / "Pack the stab wound" + "Transfer to a thoracic surgeon" / Foley + "Pack the wound with hemostatic gauze" | 2/2 |

## Duplicate checks

- **Decision search (allkeys.tsv and src/samps):**
  - Epinephrine or catecholamine avoidance is keyed only for hypothermia (environmental-06 q3, arrhythmia-06 q4).
  - Abstinence as a driving condition: no key. Among driving keys, the nearest is seizures-09 q4, "No driving until cleared by neurology and the licensing authority", which is for an unprovoked seizure. That overlaps the `neuro` item, which the review asked for. It can reach only 1 of 2 here.
  - "Half normal" or 0.45% saline: no key. The shock-04 q3 key is unchanged from r2e, where the review found no D1 issue.
  - Wound packing with hemostatic gauze also appears in multiple-trauma-13 q3 (thigh wound). That is an existing round 1 item, and the review did not raise it.
  - CPVT appears nowhere in src/samps outside seizures-07, checked just before finishing.
- **Simcheck** (`python3 scratchpad/simcheck.py r2t/d-<id>.txt <id>`; cards in `r2t/sim-<id>.txt`, all read, none tells the same story):

| Id | First five printed (full / keys) |
|---|---|
| seizures-05 | seizures-18 0.18/0.09, shock-26 0.18/0.08, seizures-20 0.16/0.02, tox-21 0.09/0.15, seizures-34 0.08/0.15 |
| seizures-07 | arrhythmia-34 0.24/0.18, arrhythmia-27 0.16/0.11, arrhythmia-05 0.15/0.04, seizures-45 0.06/0.14, arrhythmia-46 0.13/0.04 |
| shock-04 | abdominal-pain-42 0.27/0.09, gi-bleed-11 0.21/0.17, loc-13 0.21/0.17, dvt-pe-44 0.19/0.02, sob-36 0.17/0.05 |
| shock-05 | multiple-trauma-16 0.18/0.12, multiple-trauma-38 0.17/0.13, multiple-trauma-02 0.15/0.11, multiple-trauma-13 0.13/0.15, multiple-trauma-42 0.14/0.10 |

## Checks

- `SAMP_BATCH=s16 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 465 of 465 passed.
  - A first run failed on two points, and both were fixed. seizures-05 `abstain` did not match its own text, and the `toxic` text was caught by the unacceptable. The shock-04 q3 key at index 3 put 6 of 18 s16 single keys in one position, and the limit is 30%.
- `npx tsc --noEmit -p .`: clean (exit 0).
- The new text has no semicolons and no em or en dashes.
- No command was refused.

## For the physician

- **seizures-05 q3.** No standard toxicology reference I could open supports a beta blocker for caffeine VT with hypotension. Medscape lists amiodarone or lidocaine and cardioversion, and calls beta blockade for refractory hypotension theoretical. The support is three single cases (Miyamura 2024, Price 1990, Laskowski 2015). Do you accept this key, or should q3 be re-keyed?
- **seizures-05 q4.** Stop driving until a neurologist assesses her. After that there is no 3-month wait, provided she stays off caffeine tablets. The Ontario reporting question from the r2e review is still open.
- **seizures-07 q4.** It is now a single decision: avoid epinephrine and other catecholamines if the CPVT storm becomes sustained or he arrests (Bellamy 2019). This departs from ACLS and PALS. Please confirm.
- **shock-04 q3.** With AKI stage 1A from lactulose diarrhea, no SBP and a mild subdural, is normal saline over 20% albumin 1 g/kg the answer you want?
- **shock-05 q2.** Do rural Canadian trauma chest drain kits connect to a blood giving set, as the stem now says?
