# Q500 writer report, round 2: s67, Abuse (domestic)

Writer: Preceptor. File: `src/samps/s67/abuse-domestic.ts`. Ids are unchanged (abuse-domestic-39 to abuse-domestic-43). All SAMPs stay `reviewed: false`, `version: 1`, author "Preceptor". Passing questions were kept as they were, apart from wording that the reframe of abuse-domestic-40 forced (pronouns and the caregiver).

## Required fixes and how each was done

| Item | Verdict | What changed |
|---|---|---|
| 39 q3 | Repeat of AST, ALT, lipase and coagulation keys. Must stay a menu. | Replaced with a new KF3 menu (select 2): head growth compared with past records, and a full mouth exam including both frenula. Distractors are abdominal CT, spine MRI, PECARN, portable films and a bone scan. Each point comes from the CPS 2025 practice point (focused examination list, abdominal CT, spine MRI and decision rule statements, and films that are insufficient). It is still the batch's only menu. |
| 40 stem | Repeats the frame of the oral case `older-woman-brought-by-son`. | Now a 79-year-old man with dementia, living with a paid live-in caregiver hired through an agency by a daughter in another province. The daughter finds him. British Columbia is kept for q2 and q4. q1, q2 and q4 options and explanations were reworded to match (him, caregiver). Their keys and positions are unchanged. |
| 40 q3 | Near duplicate of abuse-domestic-24 q1 (Wiglesworth bruise site). | Replaced with a KF2 question on bruise dating. Bruise colour cannot date a bruise. In older adults some bruises were mostly yellow within 24 hours (Mosqueda 2005). Key: "Their age cannot be judged by colour". All options are declarative statements in the same form, so the key is not the only hedged option. |
| 40 q4 | Citation range. | Now "sections 44 to 50". I read section 50 myself (the agency must report to police if it has reason to believe a criminal offence was committed), and the explanation now states it in those terms. |
| 41 q2 | Repeats the "everyone is seen alone" device. | Replaced with a different KF4 decision: how to respond when she is asked privately and denies abuse. Key: "Say she can return to talk any time". This follows the WHO 2013 care pathway: do not pressure her to disclose, give information on services and offer follow-up. The privacy here comes about by chance and is not the decision being tested. The q3 update was reworded ("Later that night, alone with the nurse") so the order of events still holds. |
| 41 sources | Miller and McCaw 2019 was unread. | Removed. Replaced with WHO 2013, *Responding to intimate partner violence and sexual violence against women*. I extracted and read the full PDF. q3 and q4 now state only what WHO says: first-line support includes helping her reach services and mobilizing social support, and helping her increase her safety. WHO warns about printed information taken home when an abusive partner is there. WHO advises against mandatory police reporting, with a report offered only if she wants one. |
| 42 q1 | Cross-question cue (1.7 figure). | Sentence replaced word for word as the verdict asked. The figure now appears only in q4. |
| 42 q2 | Repeat of abuse-domestic-31 q1 (Wu). | Replaced with KF3: after she discloses the kick and slap, ask about forced sex by her partner. Asking finds injuries she has not mentioned and care that cannot wait: WHO advises considering HIV PEP within 72 hours, and she was assaulted 2 days ago. The disclosure moved into this update. The Wu source was removed. |
| 42 q3 | Key contradicted AUA Statement 2. | Rebuilt. The update gives a normal urinalysis, and the key is "Contrast CT with delayed images". I read the explanation against Statements 1 to 3 and the Statement 2 discussion on auanet.org: a significant blow to the flank and significant flank ecchymosis are triggers, renal injury can occur without hematuria, delayed images are needed, and ultrasound is mentioned only for children. The citation URL is now the auanet.org page I read. |
| 43 q2 | Hedged-key cue (B5) and the wording of the survey figure. | Two distractors are now hedged claims that are still wrong ("It lowers concern for inflicted injury", "It raises concern only for her own safety"). "Raises" and "lowers" now both appear among the options. The explanation says "youth who had witnessed partner violence", with 33.9% against 8.6%. |
| 43 q3 | Repeat of the skeletal survey key (abuse-domestic-16, 17, 19, 20). | Replaced with KF3 retinal examination. The update gives a thin subdural on head CT. Key: a dilated ophthalmology exam within 72 hours. CPS 2025 calls for an experienced paediatric ophthalmologist for children with intracranial hemorrhage, ideally within 72 hours. I did not use the neuroimaging angle the reviewer suggested, because 39 q2 already keys CT head for a child aged 24 months or younger. |

## Key features and format

- KF1: 40 q1, 41 q1, 42 q1, 42 q4, 43 q2. KF2: 39 q1, 39 q4, 40 q3, 43 q1. KF3: 39 q2, 39 q3, 40 q2, 42 q2, 42 q3, 43 q3. KF4: 41 q2, 43 q4. KF5: 41 q3. KF6: 40 q4, 41 q4. Every key feature is covered.
- 20 questions: 19 single and 1 menu (39 q3). Single key positions, first to fifth: 4, 4, 4, 4, 3.
- `npx tsc --noEmit -p . | grep samps/s67` printed nothing. `SAMP_BATCH=s67 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed all 3 files and 128 tests.

## Uniqueness check

I read in full the scratchpad catalogues for abuse-domestic, multiple-trauma and pediatric-fever. No elderly or geriatric catalogue exists. I then grepped all 35 catalogues for each new angle:

- head circumference, frenulum and PECARN
- bruise dating and colour
- retinal exam and fundoscopy
- flank, renal injury and hematuria
- responses to a denial
- forced sex and PEP

Findings:

- Head circumference appears only as a stem fact in abuse-domestic-17. The frenulum appears only as a finding (39 q1, the oral case, TEN-4-FACESp). Neither is keyed as a decision.
- Bruise dating is keyed nowhere. "Bruises of different ages" appears only as a finding in write-in lists (04, multiple-trauma-15).
- Dilated fundoscopy is a menu key in abuse-domestic-17 q3 and a write-in item in 06. The new 43 q3 tests a different decision: when the exam is done and by whom, in a toddler with a known subdural. The verdict listed this angle as a candidate.
- No renal trauma imaging question exists in any catalogue. Other CT abdomen keys (18 q3, abdominal-pain-33) cover pediatric hollow viscus and solid organ injury, not a renal mechanism with a normal urinalysis.
- No item keys the response to a denial. The nearest items (38 q1, a return to the partner, and 29 q2, believing a disclosure) test different decisions.
- Sexual assault care in abuse-domestic-07 and the oral case is an acquaintance assault that the patient presents for. No item keys asking about sexual violence after a physical partner violence disclosure. Forced sex appears in 03 q4 only as a lethality risk factor.
- The new 40 frame differs from 24 (wife with husband), 25 (nephew paid from the man's pension who locks him in), 26 (son, financial abuse), 36 (son with schizophrenia), 04 (son) and the oral case (son).

No patient numbers were reused.

## Sources opened and read for this round

- CPS 2025 practice point, Shouldice et al. Full text read on cps.ca (the PMC copy is abstract only): https://cps.ca/en/documents/position/medical-assessment-of-THI-CM. Citation URL kept as the PubMed record https://pubmed.ncbi.nlm.nih.gov/40904407/.
- WHO 2013 IPV guideline. Full PDF from IRIS, landing page https://www.who.int/publications/i/item/9789241548595. Read: recommendations 1 to 4, 15, 37 and 38, Box 1, Box B and Figure 1.
- Mosqueda L et al. J Am Geriatr Soc 2005, abstract: https://pubmed.ncbi.nlm.nih.gov/16078959/
- AUA Urotrauma guideline (amended 2020), Statements 1 to 3 and discussion: https://www.auanet.org/guidelines-and-quality/guidelines/urotrauma-guideline. The PubMed record 33053308 matches the citation.
- BC Adult Guardianship Act, sections 1, 44 to 50: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96006_01
- I reread these sources kept from round 1:
  - ESDC *Facts on the abuse of seniors* (PDF text extracted)
  - BC PharmaNet page (ED access to 14 months of history)
  - Justice Canada *About family violence* (financial abuse, modified 2024-05-17)
  - Abstracts of Sheets 2013, Pierce 2021, Hamby 2010, Peitzmeier 2020 and Wu 2010
  - ACR Appropriateness Criteria, revised 2025 (variant 1 table)
  - CPS 2013 bruising statement (full text on cps.ca: slate-grey nevi listed among mimics)

## Uncertain, for the reviewer

- 39 q3: PECARN is a distractor because CPS says decision tools are not validated for maltreatment. A strict reading of mock-mode cueing (B6) could see it as hinting that head imaging should not hinge on a rule. I judged the hint too weak to give away the 39 q2 key.
- 42 q2 applies WHO guidance on sexual assault, written for women, to a transgender woman, which fits her. The explanation cites WHO only. The higher rate of sexual violence in transgender people is left for q4 and Peitzmeier, so the q4 key is not cued.
- 43 q4 still cites Hamby for the private-asking point (the earlier low-confidence note). WHO 2013 ("consultation is conducted in private") could be added as a second source if the reviewer wants it. I left it unchanged because it passed.
- Physician decision still open from round 1: whether key feature 4 items may use a "seen alone" device. No new item in this round uses it as a key.

## Round 3

This round applies the fixes in docs/reviews/q500-verify2-s67.md. abuse-domestic-39 and 42 passed and are unchanged. D1 was not used.

| Item | Required fix | What changed |
|---|---|---|
| 40 q3 | Delete the PharmaNet sentence (B6). Reword a distractor so the key is not the only limited claim (B5). | The update now starts "Fully undressed, he has ...". The distractor "The yellow bruise is at least a week old" is now "Only the yellow bruise can be dated", which is still wrong under Mosqueda (bruises mostly yellow within 24 hours). The explanation says so. The key stays fifth. |
| 41 q3 | Repeat of signed abuse-domestic-26 q3. Rebuild as a new KF5 decision. | New KF5 decision: how to connect her with a violence support service when her partner holds her phone. Key: "Phone the service with her now". Distractors: ask her to call once home, give her the crisis line number, refer through her family physician, send a referral letter to her home. The update adds "She asks for help but has no phone of her own." Source: WHO 2014 clinical handbook (WHO/RHR/14.26), Referrals section. It says women often do not follow up on referrals, advises offering to phone and make the appointment when she has no phone or no safe place to call, and says to tell her where the service is and whom she will see. The social worker key and its teaching are gone. The key is third. |
| 43 q3 | Repeat of signed abuse-domestic-17 q3 (dilated fundoscopy). Replace with a new KF3 decision. | Bleeding workup for his subdural. The update gives a normal CBC, platelets, INR and PTT. Key: "Factor levels and von Willebrand tests". CPS 2025 lists factor VIII, von Willebrand antigen and platelet-dependent activity with the blood group, and factors IX and XIII, beyond the screening tests. Distractors: bleeding time, platelet function screen only, repeat INR and PTT, no further tests. The CT head decision of 39 q2 is not reused, because the CT result is given in the update. The key is second. |
| 43 q4 | Replace the distractor that is defensible under the WHO age 2 rule. Cite WHO. Rewrite the explanation from WHO's text. Remove the Hamby sentence. | "Ask her in front of her son" is now "Ask her at the open triage desk". The source is now WHO 2014 (`who-handbook`), added to 43's sources (4 in all). The explanation follows the handbook: talk about abuse only when alone, no one older than age 2 able to overhear, and ask a colleague to look after her children. The Hamby claims were removed from q4. Hamby stays cited by q2. The key is unchanged and still third. |

Uniqueness: I searched all catalogues for phoning or arranging the service for the patient, making an appointment, helpline or crisis line numbers, warm handoff, factor VIII, von Willebrand, factor XIII and factor levels.

- The only phone-call key is abuse-domestic-18 q4 ("Phone the society's after-hours line"). That is a child protection report, not connecting an adult with violence services.
- Factor and von Willebrand items exist only as treatment of known bleeding disorders (multiple-trauma-05 and -10, gi-bleed). None is a workup to exclude a bleeding cause of a subdural in suspected maltreatment.
- abuse-domestic-17 q3 keys "Coagulation studies" generally. The new 43 q3 teaches that normal INR and PTT do not complete the workup.

Checks: `npx tsc --noEmit -p . | grep samps/s67` printed nothing. `SAMP_BATCH=s67 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed all 3 files and 128 tests. Single key positions, first to fifth: 4, 4, 4, 4, 3. KF5 is covered again by 41 q3.

Source opened and read this round: WHO. Health care for women subjected to intimate partner violence or sexual violence: a clinical handbook. WHO/RHR/14.26. 2014. https://www.philippines.unfpa.org/sites/default/files/pub-pdf/WHO_RHR_14.26_eng_1.pdf (full PDF text extracted: "Avoid putting her at risk", "Support" and "Referrals"). The CPS 2025 coagulation list was reread on cps.ca.

Uncertain:
- 43 q3 rejects bleeding time and a platelet function screen only because CPS does not list them. CPS gives no further reason against them.
- 41 q3 says a family physician referral adds delay. That is my reasoning, not a WHO statement.
- The URL for the WHO 2014 handbook is the UNFPA Philippines copy that the reviewer found. I did not find a working WHO IRIS PDF link.

## Round 4

As required by docs/reviews/q500-verify3-s67.md, the 41 q3 update now reads "She asks for help, but her partner still has her phone." The explanation already says her partner holds her phone, so it needed no change. In the 43 q3 explanation, the platelet test sentence was replaced with the reviewer's wording. The s67 type check and tests pass (128 tests).
