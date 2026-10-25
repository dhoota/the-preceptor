# Batch s34 adversarial review

Stand-alone batch of 50 items. 40 are Basic Care and Comfort and 10 are administration technique. I read every stem, choice, why and rationale. I checked every writer flag and every source I could reach. I grepped the 2,000 item inventory, the case list and the other new batches for each topic and teaching point.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s34-02 | whole item | Same teaching point as rn-s09-47 (pinna down and back before age 3, up and back for adults). Marked PULL. | Uniqueness | high |
| rn-s34-42 | whole item | Same teaching point as rn-s21-35 (shivering makes heat and raises oxygen use, so it works against cooling). Marked PULL. | Uniqueness | high |
| rn-s34-08 | stem, tokens, correct | Placing the client supine and selecting the male setting could be done in either order, so two sequences were defensible. The stem now says the scanner is on and set to male. That token became a wrong step (head of bed raised to 60 degrees). Five targets remain. | B5, A3 | high |
| rn-s34-03 | sources | The delirium claim rested on textbooks. Added NICE CG103, which tells staff to make sure hearing and visual aids are available, used and working. | A7 | medium |
| rn-s34-13 | sources | Benninger 2004 had no locator. Added its DOI after a Crossref check. | A7 | high |
| rn-s34-27 | sources | The ADA 2026 Section 5 citation had no pages or DOI. Fixed to Diabetes Care 49(Suppl 1):S89, doi 10.2337/dc26-s005. Added Diabetes Canada for the Canada note. | A7 | high |
| rn-s34-29 | sources | Collards and the cooked greens were not on the ODS consumer sheet. Added the HealthLinkBC vitamin K food table. It lists kale, spinach, collards and broccoli. | A7 | high |
| rn-s34-33 | sources | Textbook only. Added the Academy of Nutrition and Dietetics 2016 position paper on vegetarian diets. | A7 | medium |
| rn-s34-36 | sources | The 2 minute timing was not in the Yamada 2023 abstract. Added Stevens 2018, a Canadian trial that gave 24% sucrose 2 minutes before the heel lance. | A7 | medium |
| rn-s34-41 | sources | The claims about gravity and a delayed urge come from fundamentals, not from the PDQ text. Added Potter. | B1 | medium |
| rn-s34-46 | sources | Textbook only. Added Ossur limb and liner care guidance. It covers daily washing with mild soap, a mirror check and daily liner washing. | A7 | medium |

Every edited item carries `version: 2`. The two pulled items are left in place with a PULL comment above each one.

## Writer flags resolved

- rn-s34-18 suppository placement, rn-s34-02 pinna, rn-s34-20 transfer board. These are standard fundamentals content and fit Potter. Item 02 is pulled for uniqueness, not for content.
- rn-s34-03 battery door and delirium. Delirium now cites NICE CG103. Opening the battery door at night is routine hearing aid care and stays on Potter.
- rn-s34-27 ADA section. Confirmed by Crossref and fixed as above. The arithmetic was rerun by script: 1.5 / 0.75 = 2 servings and 2 * 24 = 48 g. The distractors also check: 24 * 0.75 = 18, 24 / 0.75 = 32 (1 cup) and 3 * 24 = 72.
- rn-s34-29 vitamin K list. Now backed by HealthLinkBC values: kale raw 499 mcg per cup, collards cooked 408 mcg per half cup, spinach raw 153 mcg per cup, broccoli cooked 116 mcg per half cup.
- rn-s34-33 lacto-ovo. Now backed by the Academy position paper.
- rn-s34-36 sucrose timing. Now backed by Stevens 2018. An Australian neonatal protocol also puts the peak effect at about 2 minutes, lasting about 4.
- rn-s34-34 AASM volume and pages. Crossref confirms J Clin Sleep Med 21(1):137 to 152, 2025, Winkelman, Berkowski, DelRosso and Koo. The full text names alcohol, caffeine and antihistaminergic drugs as exacerbating factors. It also advises iron studies with ferritin and transferrin saturation. The citation stands.
- rn-s34-46 liner. Now backed by Ossur.
- rn-s34-42 shivering. Content is sound, but the item is pulled for uniqueness.
- rn-s34-09 male setting. Davis 2012 says to use the male setting after a hysterectomy. The mechanism sentence says "can give a falsely low reading", which is hedged enough. No change.
- rn-s34-44 cold pack for paraphimosis. Choe 2000 calls paraphimosis a urologic emergency. It also says ice packs reduce penile and foreskin swelling before manual reduction. Cold applied to swelling is an independent nursing comfort measure. It is keyed together with prompt notification of the provider. Manual reduction itself is not keyed. The key is right for an entry-level RN. No change.
- rn-s34-14 bag height. Memorial Sloan Kettering says the bottom of the bag sits at shoulder level, about 18 inches above the stoma. 18 inches is 45.7 cm, so "about 45 cm" holds. The cap of 1000 mL of warm water was confirmed.

## Uniqueness

Grepped each topic and teaching point against inventory.txt, cases.txt and new500.txt, then read the full text of the closest items.

- Duplicates found: rn-s34-02 against rn-s09-47 and rn-s34-42 against rn-s21-35. Both are pulled.
- Close but distinct, kept:
  - rn-s34-12 tests collection technique. rn-s19-45 tests unformed stool only.
  - rn-s34-26 tests reading labels for "phos" additives. rn-s24-19 tests food choices and binders.
  - rn-s34-41 keys a commode for a hospice client with an urge right now. In rn-s13-08 the bedpan is only a distractor.
  - rn-s34-29 asks which foods are high in vitamin K. rn-s26-50 asks for causes of a low INR.
  - rn-s34-06 tests drops before ointment. rn-s16-38 tests the wait between two drops.
  - rn-s34-49 tests the held skin fold and alternating sides. rn-s15-05 tests the air bubble and the site.
- No overlap found with the other new batches. rn-s31-16 is about nebulizer rinsing during a Legionella cluster, not technique.

## Other checks

- Numbers recomputed by script: phosphorus 6.8 mg/dL is 2.20 mmol/L. 40.1°C is 104.2°F and 38.0°C is 100.4°F. Item 10 has three of four volumes above 500 mL.
- Item 10 refs match the Alberta Health Services loop exactly: 401 to 500 mL means the next catheterization in 4 hours, and 500 mL or more means 3 hours.
- Item 23 IDDSI flow test bands match Framework 2.0: under 1 mL, 1 to 4 mL, 4 to 8 mL, and more than 8 mL.
- Item 16 matches the Island Health text: redness should fade in about 20 minutes, and the ankle strap is done up first.
- Item 04 and item 05 match the Southampton leaflet: soap and water twice a day, no powder or lotion, and bypassing as a sign of blockage.
- Item 47 matches the Glasgow leaflet: wash monthly, do not towel dry because of static, replace every 12 months.
- Item 32 matches Toronto Public Health: zabihah meat, gelatin, and pure or artificial vanilla extract.
- Items 22 and 21 match the Southampton splint leaflet (sunny cars) and the Sherwood Forest leaflet (hinge under the knee, rubbing on the inner thigh).

## Key changes

None.

## Sources verified

- AASM RLS guideline 2025. https://doi.org/10.5664/jcsm.11390 and https://pmc.ncbi.nlm.nih.gov/articles/PMC11701286/
- Yamada 2023 Cochrane CD014806. https://pubmed.ncbi.nlm.nih.gov/37655530/
- Stevens 2018 BMC Pediatrics 18:85 (added). https://doi.org/10.1186/s12887-018-1026-x
- ADA Standards of Care 2026 Section 5. https://doi.org/10.2337/dc26-s005
- Diabetes Canada Basic Carbohydrate Counting 2018 (added). Text read from a copy of the handout. https://dm.cortico.ca/public/handouts/422bcf1d321848c988867dfc36e2572e.pdf
- HealthLinkBC Food Sources of Vitamin K 2018 (added). https://www.healthlinkbc.ca/sites/default/files/healthyeating/pdf/food_sources_of_vitamin_k.pdf
- Academy of Nutrition and Dietetics vegetarian position 2016 (added). https://doi.org/10.1016/j.jand.2016.09.025
- NICE CG103 delirium (added). https://www.nice.org.uk/guidance/cg103
- Ossur limb, liner and prosthesis care (added). https://www.ossur.com/en-za/prosthetics/information/limb-liner-prosthesis-care
- Benninger 2004 nasal steroid technique. https://doi.org/10.1016/j.otohns.2003.10.007
- Island Health orthoses guidelines. https://www.islandhealth.ca/sites/default/files/2019-11/orthoses-guidelines.pdf
- Memorial Sloan Kettering colostomy irrigation. https://www.mskcc.org/cancer-care/patient-education/colostomy-irrigation-instructions-sigmoid-descending-colostomy
- Davis 2012 bladder scan. https://msskills2012.yolasite.com/resources/To_scan_or_not_to_scan__Detecting_urinary.13%5B1%5D.pdf
- Alberta Health Services intermittent catheter loop. https://albertahealthservices.ca/assets/about/scn/ahs-scn-nrv-spinal-cord-injury-intermittent-catheter-loop.pdf
- Southampton suprapubic catheter leaflet. https://uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Digestionandurinaryhealth/Caring-for-your-suprapubic-catheter-1619-PIL.pdf
- Southampton thermoplastic splint leaflet. https://www.uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Medicinestherapiesandanaesthetics/Thermoplastic-splint-instructions-1822-PIL.pdf
- Sherwood Forest CPM leaflet. https://www.sfh-tr.nhs.uk/media/hknarjxv/pil202508-04-cpm-continuous-passive-motion.pdf
- Gillette prosthetic socks. https://www.gillettechildrens.org/your-visit/patient-education/prosthetic-socks
- Kaiser Permanente nephrostomy care. https://healthy.kaiserpermanente.org/health-wellness/health-encyclopedia/he.nephrostomy-tube-care-care-instructions.zc2006
- Toronto Public Health halal foods. https://www.toronto.ca/wp-content/uploads/2023/08/857f-HalalFactSheet20235.pdf
- Choe 2000 paraphimosis. https://www.aafp.org/pubs/afp/issues/2000/1215/p2623.html
- NCI PDQ GI complications. https://www.cancer.gov/about-cancer/treatment/side-effects/constipation/gi-complications-hp-pdq
- NHS GGC Aerochamber leaflet. https://nhsggc.org.uk/media/223669/How%20to%20use%20your%20Aerochamber%20Spacer.pdf
- Dartford and Gravesham Aerochamber guide. https://wheeze.dgt.nhs.uk/guides/aerochamber
- Crossref checks: Chen 2021 cooling blankets, Kalantar-Zadeh 2010, Moretto hiccups and Johnston skin-to-skin.

## Needs the Preceptor team's decision

- PULL rn-s34-02 and rn-s34-42 for uniqueness. If PPT coverage matters, item 02 could be rewritten later around ear drop warming and positioning. That rewrite would need new keys.
- The shared `meta()` default in `src/bank/s34/common.ts` sets `reviewed: true`. All 50 ids are in `docs/signoff.json`. ITEM_SPEC says new items ship as false. I did not touch either, as instructed.
- rn-s34-25 is about estradiol vaginal cream. I could not confirm that an estradiol cream is sold in Canada, so no Canada note was written.

## Summary

- Items reviewed: 50
- Passed unchanged: 39 (two of them carry only a Canada note)
- Fixed with key unchanged: 9 (rn-s34-03, 08, 13, 27, 29, 33, 36, 41, 46)
- Pull: 2 (rn-s34-02, rn-s34-42)
- Key changes: 0
