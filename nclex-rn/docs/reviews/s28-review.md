# Batch s28 review

Adversarial review of batch s28 (Psychosocial Integrity and Basic Care and Comfort). Scope was all 50 items in `part1.ts` to `part5.ts` and the 2 items in `extra.ts`, which `index.ts` does not import. Both lenses were applied to every item. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s28-91 (extra) | options[1], rationale | Keyed antidote was protamine sulfate. Protamine reverses heparin. Calcium gluconate is the antidote for magnesium toxicity. | A | high |
| rn-s28-91 (extra) | need | Antidote selection is Pharmacological and Parenteral Therapies, not Basic Care and Comfort. Changed BCC to PPT. | B | medium |
| rn-s28-91 (extra) | sources | SOGC citation lacked the full title and journal. Completed from PubMed 35577426. | A | high |
| rn-s28-92 (extra) | rationale | Rationale said "this client has asthma". The stem gives no asthma, and propranolol would be contraindicated if it did. Rewrote without the invented history. | B | high |
| rn-s28-92 (extra) | need | Drug teaching is PPT, not BCC. | B | medium |
| rn-s28-02 | stem, rationale | Timeline conflict. The spouse died 6 weeks ago but the client stopped managing bills 2 months ago, which is before the loss. The rationale says the change began after the loss. Stem now says the client managed bills until the spouse died. | B | high |
| rn-s28-11 | stem | The key "reschedule the 0200 vital signs" is justified for "a stable client", but the stem never gave stability. Added "Vital signs have been stable since admission." | B | medium |
| rn-s28-23 | cjmm | Lead-in asks which action to take, yet cjmm was analyze. Changed to action. | B | medium |
| rn-s28-38 | conditions[3].why | Incontinence-associated dermatitis was described as redness "in skin folds". Redness in skin folds is intertriginous dermatitis. IAD affects skin exposed to urine or stool. | A | low |

## Key changes

- rn-s28-91 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate". After: option 1 "Calcium gluconate". The index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin and would teach a dangerous error.

No key in the 50 bank items was changed.

## Sources verified

PubMed records checked through the NCBI E-utilities API. Author list, title, journal, year, volume and first page match for all of them.

- DEATH_RATTLE, Moons et al 2024, Ann Palliat Med 13(1):150. https://pubmed.ncbi.nlm.nih.gov/38073292/
- FIN_EXPLOIT, Mosafer et al 2025, Geriatr Nurs 61:662. https://pubmed.ncbi.nlm.nih.gov/39516091/
- CHS, Sorensen et al 2017, J Med Toxicol 13(1):71. https://pubmed.ncbi.nlm.nih.gov/28000146/
- RAMADAN, Hassanein et al 2022, Diabetes Res Clin Pract 185:109185. https://pubmed.ncbi.nlm.nih.gov/35016991/
- ASPEN_EN, Boullata et al 2017, JPEN 41(1):15. https://pubmed.ncbi.nlm.nih.gov/27815525/
- WOCN_OSTOMY, WOCN Society 2018, JWOCN 45(1):50. https://pubmed.ncbi.nlm.nih.gov/29300288/
- PADIS, Devlin et al 2018, Crit Care Med 46(9):e825. https://pubmed.ncbi.nlm.nih.gov/30113379/
- AASM_INSOMNIA, Edinger et al 2021, J Clin Sleep Med 17(2):255. https://pubmed.ncbi.nlm.nih.gov/33164742/
- SLOANE_BATH, Sloane et al 2004, J Am Geriatr Soc 52(11):1795. https://pubmed.ncbi.nlm.nih.gov/15507054/
- PAINAD, Warden et al 2003, J Am Med Dir Assoc 4(1):9. https://pubmed.ncbi.nlm.nih.gov/12807591/
- CIWA, Sullivan et al 1989, Br J Addict 84(11):1353. https://pubmed.ncbi.nlm.nih.gov/2597811/
- ASAM_AWM, ASAM 2020, J Addict Med 14(3S Suppl 1):1. https://pubmed.ncbi.nlm.nih.gov/32511109/
- GOULD_CAUTI, Gould et al 2010, Infect Control Hosp Epidemiol 31(4):319. https://pubmed.ncbi.nlm.nih.gov/20156062/
- MALNUTRITION, White et al 2012, JPEN 36(3):275. https://pubmed.ncbi.nlm.nih.gov/22535923/
- SOGC Guideline No. 426, Magee et al 2022, J Obstet Gynaecol Can 44(5):547. https://pubmed.ncbi.nlm.nih.gov/35577426/
- NIDA_INHALANTS. The page lists "Paint or other stains on face, hands, or clothing" as a sign of inhalant use, which supports rn-s28-28. https://nida.nih.gov/research-topics/inhalants

Publisher and body pages resolved and match the title and edition:

- Potter, Fundamentals of Nursing 11th edition. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Halter, Varcarolis' Foundations 9th edition. https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1
- Hockenberry, Wong's Nursing Care of Infants and Children 12th edition. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- Yalom and Leszcz, 6th edition. https://www.hachettebookgroup.com/titles/irvin-d-yalom/the-theory-and-practice-of-group-psychotherapy/9781541617575/
- NCP Clinical Practice Guidelines 4th edition. https://www.nationalcoalitionhpc.org/ncp/
- DSM-5-TR. https://www.psychiatry.org/psychiatrists/practice/dsm
- EPUAP, NPIAP, PPPIA International Guideline 2019. https://internationalguideline.com/2019
- CLAS Standards 2013, Federal Register. https://www.federalregister.gov/documents/2013/09/24/2013-23164/national-standards-for-culturally-and-linguistically-appropriate-services-clas-in-health-and-health
- Davis's Drug Guide 18th edition. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-nurses-vallerand-18

Not fully confirmed: the SAMHSA TIP 57 URL returned 403 to automated fetch. TIP 57 (HHS publication SMA14-4816, 2014) is a real, well-known publication. Hinkle 15th edition (2022) has no URL. The web search budget ran out during this session, so these two were not rechecked online.

## Numbers recomputed

- rn-s28-05: intake 240 + 180 + 120 + 600 = 1140, output 350 + 425 + 100 = 875, balance +265. Distractors: without IV 540 - 875 = -335, emesis twice 1140 - 975 = 165, emesis left out 1140 - 775 = 365. All correct.
- rn-s28-23: 62.0 to 58.9 kg is 3.1 kg, 5.0 percent over 3 weeks. Matches the 5 percent in 1 month ref.
- rn-s28-42: PAINAD 1 + 2 + 2 + 1 + 0 = 6. Distractor reasons for 4, 5 and 7 check out.
- rn-s28-48: 1800 / 24 = 75 mL/hour. 60 gives 1440, 90 gives 2160, 150 gives 1800 in 12 hours. All whys correct.
- Unit pairs: 37.0°C = 98.6°F, 38.2°C = 100.8°F, glucose 112 mg/dL = 6.2 mmol/L. All convert.
- rn-s28-35: a mark falling from 55 to 48 cm at the nostril means about 7 cm has come out. The direction in the rationale is correct.

## Needs Arjan's decision

- rn-s28-91 key change (extra item, not yet in the bank). Confirm calcium gluconate. The source is Canadian (SOGC). An ACOG source may suit the NCLEX better if the item is admitted.
- rn-s28-11 cites PADIS, an ICU guideline, for a medical unit client. It supports clustering care and noise and light reduction, but a ward-level source may be preferable.
- rn-s28-10: the why for the denial option says the recall expectation has "no basis". The stem says only that the client lost the job. Left as is because it reads as a reasonable inference, but Arjan may prefer "laid off permanently" in the stem.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). 7 items had defects, with 9 field fixes and 1 key change, in extra item rn-s28-91. The most serious defects were the wrong antidote in rn-s28-91, invented asthma history in rn-s28-92 and a timeline conflict in rn-s28-02. `tsc` shows no s28 errors, and `BATCH=s28 npx vitest run tests/bank.test.ts` passes 61 of 61 tests. The extra items also pass the per-item quality gates.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
