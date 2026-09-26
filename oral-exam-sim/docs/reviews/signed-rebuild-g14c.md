# Signed-duplicate rebuild, label g14c

File: `src/samps/s18/tox.ts`. Held back in `src/samps/held-back/g14c.json`. tox-09 was removed from the working-tree `src/samps/held-back/g13.json`, so it is held back in one file only.

This replaces the g13 rebuild of tox-09, which failed review (docs/reviews/signed-rebuild-g13-review.md). Its q2 keyed a beta blocker for thyroid hormone excess, and that decision is already keyed in environmental-04, arrhythmia-22 and pre-eclampsia-15. The levothyroxine story and the cluster 17 cocaine story are both dropped.

tox-09 keeps its id, topic and 4 questions. The kinds are still short, short, menu, short. The key features are still tox 2, tox 4, tox 4, chest pain 1. It spreads META, then sets `version: 2` and `reviewed: false`. No other SAMP was changed.

Source constants in `S`: `synthroid` was removed, because only the failed rebuild used it. `esc2023` was used only by tox-09 and is kept, with its citation text updated to the sections now used. New entries: `cdcYb`, `tortorella` and `gingras`.

## Rebuilt SAMP

| Id (cluster) | Old story | New story | Keyed decisions | Sources | Duplicate-check evidence |
|---|---|---|---|---|---|
| tox-09 (17) | Signed: a man who was agitated and hyperthermic after snorting cocaine. The g13 rebuild used levothyroxine taken for weight loss, and it failed review. | A 46-year-old woman with a peppery taste, flushing of the face and upper chest, headache, palpitations, loose stools and chest tightness about 30 minutes after seared tuna at a restaurant. Her husband, who shared the tuna, is ill too. She eats tuna often and has no allergies. Title "Flushing and chest tightness after dinner". The direction was not followed, because the bank already keys its q2. | q1 (short, tox 2, required 2): features that point to histamine (scombroid) fish poisoning rather than IgE fish allergy: a cluster of ill diners, eats tuna often, peppery taste, flushing rather than hives or swelling, onset about 30 minutes in, no hives, swelling, wheeze or hypotension. q2 (short, tox 4, required 2): an H2 plus an H1 antihistamine IV. Epinephrine without airway, breathing or circulation compromise is unacceptable. q3 (menu, tox 4, select 2): cetirizine for 2 days and resume eating fish, rather than the fish allergy pathway (autoinjector, avoiding fish, allergist, tuna IgE, prednisone, montelukast). q4 (short, chest pain 1, required 3): after new ST depression, life-threatening causes: ischemia including histamine vasospasm and Type 2 MI, arrhythmia, evolving anaphylaxis, myocardial dysfunction such as takotsubo, PE, dissection, pneumothorax. | q1: Ansdell VE, CDC Yellow Book 2026, "Food poisoning from marine toxins" (opened: onset 10 to 60 min, flushing like sunburn, peppery taste, clustering helps exclude fish allergy, histamine not destroyed by cooking, H1 with possible H2 benefit). q2: Tortorella V et al. Case Rep Emerg Med 2014, doi:10.1155/2014/482531 (opened, PMC4273511: H1 such as diphenhydramine 25 to 100 mg plus an H2 such as famotidine, IV when severe, epinephrine and steroids for airway edema, bronchospasm or hypotension, histamine causes coronary vasoconstriction and arrhythmic risk, a case with ST depression and apical hypokinesia). q3: Gingras V, Marois L (Université Laval). Int J Emerg Med 2025, doi:10.1186/s12245-025-00930-3 (opened, PMC12224635: Table 1 contrasts scombroid with anaphylaxis, allergy is uncommon to a regularly eaten food, oral loratadine or cetirizine for 1 to 2 days is reasonable, steroids and epinephrine are reserved for severe cases, the patient later ate the fish again safely). q4: Byrne RA et al. 2023 ESC ACS guidelines, doi:10.1093/eurheartj/ehad191 (opened scratchpad text: section 3.4.2 names CT for PE and aortic dissection, Figure 15 lists coronary spasm, allergic reactions and takotsubo among MINOCA causes, section 12.1 lists tachycardia and spasm as causes of Type 2 MI). | Decision search in scratchpad/allkeys.tsv and src/samps. Terms: scombroid, histamine fish, tuna, mackerel, fish, famotidine, ranitidine, H2, histamine, cetirizine, tryptase, allergy label, Kounis, epinephrine autoinjector, beta blocker, propranolol, clenbuterol, dinitrophenol, and more (below). No bank key names scombroid. Closest hits: anaphylaxis-27 q1 and q3 (salmon anaphylaxis: avoid all finned fish, allergist, action plan, which is the opposite pathway), anaphylaxis-39 q1 (shrimp allergy, the partner who shared the meal is well), cva-31 q3 (diphenhydramine and famotidine IV, but for alteplase angioedema), anaphylaxis-41 q4 (no allergy label after an epinephrine effect at the dentist), anaphylaxis-13 and anaphylaxis-15 q3 (Kounis syndrome listed in a shock differential), environmental-30 (ciguatera, where scombroid is only a distractor). Simcheck top 5 (full / keys): anaphylaxis-27 0.17 / 0.12, asthma-copd-13 0.16 / 0.16, sob-15 0.14 / 0.13, anaphylaxis-47 0.13 / 0.09, environmental-30 0.11 / 0.13. All cards were read. None tells this story. |

## How the poisoning was chosen

Candidates were rejected when the bank already had the story or its keys:

- Clenbuterol (a beta 2 agonist): no hits by name. But tox-28 (theophylline) already keys cautious potassium for a beta 2 shift, and its core key would be a beta blocker again.
- Caffeine (seizures, s16), butane (arrhythmia-29), aconite (shock, s16), ergotism with ritonavir (headache, s11), fluorouracil vasospasm (chest pain, s28), loperamide (tox-31), methemoglobinemia (tox-36) and carbon monoxide (tox-12): all already in the bank.
- 2,4-dinitrophenol: no hits, but its treatment decisions are few and weakly sourced, and active cooling for toxic hyperthermia is already keyed.
- Scombroid: no key anywhere in the bank, with Canadian and current open sources. It has a real chest pain complication, histamine coronary vasospasm.

## D1

q4 is the one D1 repeat. It keys a list of life-threatening causes of chest pain. Chest pain key feature 1 reads "assess for life-threatening diagnoses first and promptly recognize clinical presentations that clearly suggest these diagnoses (e.g., ACS, PE, pneumothorax, aortic dissection)". Many signed chest pain SAMPs key such a list. q1 to q3 key decisions that are not in the bank. The product owner should add "tox-09 q4 (rebuilt signed-off SAMP) | Life-threatening causes of chest pain (chest pain KF 1) | the chest pain KF 1 lists in signed chest pain SAMPs" to the D1 Covered SAMPs table in docs/DECISIONS.md. This writer did not edit that file.

## Checks

- `SAMP_BATCH=s18 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 270 passed, including the bank-wide near duplicate stem test.
- `npx tsc --noEmit -p .`: exit 0, no output.
- The new text has no em or en dashes and no semicolons.
- src/samps was grepped again at the end. "scombroid" appears only in tox-09 and in environmental-30 as a distractor. chest-pain-11, the other rebuild in cluster 17, is now a rheumatoid arthritis chest pressure story with no toxin. The keeper, ischemic-heart-disease-06, was not touched.

## For the physician

- The cluster 17 direction (levothyroxine with propranolol) was not followed, because the bank already keys propranolol for thyrotoxic symptoms. Please confirm a scombroid story in place of it.
- q2 requires both an H1 and an H2 antihistamine. The CDC Yellow Book calls H1 the usual treatment and says H2 "might provide some benefit". Tortorella and Gingras advise both. Ranitidine is no longer sold in Canada, so famotidine is named. It is still credited if written.
- q2 marks epinephrine as unacceptable (not dangerous). She has no airway swelling, bronchospasm or hypotension, but she does have chest tightness and a pulse of 128. Please confirm this is fair while a true allergy has not been fully excluded.
- q3 keys cetirizine for 2 days. Gingras supports this as reasonable but says specific evidence is lacking. q3 also keys resuming fish, based on the cluster and her frequent tuna meals. Tryptase was left out of the options. Gingras argues for testing it, so it would be a defensible choice.
- q4 relies on case evidence for scombroid myocardial ischemia (Tortorella and the cases it cites). The ESC 2023 guideline supplies the general MINOCA and Type 2 MI causes.
