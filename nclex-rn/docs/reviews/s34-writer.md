# Batch s34 writer report

Stand-alone batch. 50 items, rn-s34-01 to rn-s34-50. All items are `reviewed: false`. `canada` is an empty string except item 48 (albuterol is sold as salbutamol in Canada).

Checks run:

- `BATCH=s34 npx vitest run tests/bank.test.ts`: 61 of 61 tests pass. This includes the whole-bank near duplicate gate and the sign-off gate.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s34`: prints nothing.

Files: `src/bank/s34/common.ts`, `part1.ts` to `part5.ts`, `index.ts`.

## Counts

Client Needs: BCC 40, PPT 10. This matches the plan.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Item 10 is a trend mc (catheterization volumes). Item 42 is a trend mc (cooling blanket and shivering).

CJMM step: action 22, generate 8, evaluate 8, analyze 5, recognize 5, prioritize 2.

Difficulty: 1 has 3, 2 has 17, 3 has 19, 4 has 9, 5 has 2.

Calculations: item 27 (carbohydrate grams from a label) has a `calc` block. PPT has 10 items, so the 12 percent rule does not apply.

## MC key positions

Across 28 mc items, counting both trend mc items: position 1 has 7, position 2 has 7, position 3 has 7, position 4 has 7. The key is the strict longest option in 7 items (10, 38, 41, 42, 47, 49, 50).

Multi-key pools: keyed choices run longer than distractors in 8 of 20 pools. Select all keys in the first half of the list: 19 of 39.

## Coverage

BCC, by focus list topic:

- Prosthesis: loose socket late in the day (01), residual limb and liner hygiene (46)
- Orthosis: skin check after a new ankle-foot orthosis (16)
- Glasses and hearing aids in hospital (03)
- Suprapubic catheter: site care (04), urethral leakage from a blocked catheter (05, bowtie)
- Nephrostomy bag position at home (07)
- Bladder scanner: steps (08), male setting after hysterectomy (09)
- Intermittent catheterization: catheter in the vagina (11), volumes over a day (10, trend)
- Stool specimen for a toxin test (12)
- Colostomy irrigation: water, bag height and cone (14), cramping (15)
- Heel offloading: heel suspension boot check (17)
- Transfer board set-up (20)
- Burn contracture positioning (19), resting hand splint after a dorsal hand burn (50)
- Continuous passive motion alignment (21)
- Thermoplastic splint and heat (22)
- IDDSI flow test reading (23), foods that melt to thin liquid (24)
- Phosphate additives on hemodialysis (26)
- Carbohydrate counting from a label (27)
- Bolus prescription into a jejunostomy (28)
- Vitamin K food sources with warfarin (29)
- Lactose intolerance and dairy (31)
- Halal meals when the kitchen is not certified (32), lacto-ovo vegetarian protein (33)
- Restless legs triggers (34)
- Sucrose timing (36), skin-to-skin and breastfeeding during a heel stick (37)
- Persistent hiccups (38)
- Pruritus from dry skin: bathing practices (39)
- Xerostomia after radiation (40)
- Constipation in hospice care: commode instead of bedpan (41)
- Cooling blanket and shivering (42)
- Uncircumcised male: perineal care order (43), paraphimosis after catheter insertion (44, bowtie), infant foreskin care (45)

PPT, administration technique only: ear drops by age (02), eye drops before ointment (06), nasal steroid aim (13), rectal suppository placement (18), vaginal cream applicator (25), insulin pen safety test and hold time (30), rivastigmine patch change (35), spacer cleaning (47), nebulizer technique (48), enoxaparin skin fold and site rotation (49).

## Uniqueness

Before each chunk I grepped the inventory for BCC and PPT items and for each topic's key terms. Points already in the bank were avoided:

- Enoxaparin: s15-05 covers the air bubble, abdomen site, no aspiration and no rubbing. Item 49 tests holding the skin fold throughout and alternating sides.
- Inhalers: s16-05, s18-05, s27-43 and s27-49 cover spacer steps, technique and toddler masks. Item 47 tests spacer cleaning and static.
- Eye drops: s16-38 covers drop technique. Item 06 tests drops before ointment.
- Patches: s18-40, s18-42 and c19-4-5 cover nicotine and fentanyl teaching. Item 35 is a nurse changing a rivastigmine patch.
- Heels: s21-30 tests floating heels on a pillow. Item 17 tests a heel resting inside a suspension boot.
- Self-catheterization: s14-21 tests clean technique and a schedule. Item 10 tests adjusting the interval to volumes. Item 11 tests a catheter in the vagina.
- Kidney diet: s24-19 covers potassium and phosphorus foods and binders. Item 26 tests phosphate additive labels.
- Palliative constipation: s15-49 covers laxatives and fiber. Item 41 tests commode over bedpan.
- Warfarin: the fixture tests steady greens. Item 29 tests naming high vitamin K foods.
- Highest stem similarity to any other bank item is 0.25 (05 against s13-10, from the shared bow-tie lead-in). No topic label equals an existing one.

## Sources

Verified during writing with WebSearch or WebFetch:

- IDDSI Complete Framework Detailed Definitions 2.0, 2019. Flow test values read from the PDF text. https://iddsi.org/framework/
- Davis, Chrisman, Walden. To Scan or Not to Scan? Nursing Made Incredibly Easy 10(4):53, 2012. Male setting after hysterectomy and scan steps read from the PDF. https://msskills2012.yolasite.com/resources/To_scan_or_not_to_scan__Detecting_urinary.13%5B1%5D.pdf
- Alberta Health Services SCN, Intermittent Catheter Loop, 2018. Volume rules read from the PDF. https://albertahealthservices.ca/assets/about/scn/ahs-scn-nrv-spinal-cord-injury-intermittent-catheter-loop.pdf
- University Hospital Southampton, Caring for Your Suprapubic Urinary Catheter, 2024. https://uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Digestionandurinaryhealth/Caring-for-your-suprapubic-catheter-1619-PIL.pdf
- University Hospital Southampton, Thermoplastic Splint Instructions, version 3, 2026. https://www.uhs.nhs.uk/Media/UHS-website-2019/Patientinformation/Medicinestherapiesandanaesthetics/Thermoplastic-splint-instructions-1822-PIL.pdf
- Island Health, Orthoses Guidelines, 2019. Redness should fade within about 20 minutes. https://www.islandhealth.ca/sites/default/files/2019-11/orthoses-guidelines.pdf
- Gillette Children's, Prosthetic Socks. https://www.gillettechildrens.org/your-visit/patient-education/prosthetic-socks
- Kaiser Permanente, Nephrostomy Tube Care. https://healthy.kaiserpermanente.org/health-wellness/health-encyclopedia/he.nephrostomy-tube-care-care-instructions.zc2006
- Memorial Sloan Kettering, Colostomy Irrigation Instructions, 2022. https://www.mskcc.org/cancer-care/patient-education/colostomy-irrigation-instructions-sigmoid-descending-colostomy
- Chinese Burn Association, Guidelines for Burn Rehabilitation in China, Burns and Trauma 2015, Table 1. https://pmc.ncbi.nlm.nih.gov/articles/PMC4964028/
- Sherwood Forest Hospitals, Continuous Passive Motion leaflet, 2025. https://www.sfh-tr.nhs.uk/media/hknarjxv/pil202508-04-cpm-continuous-passive-motion.pdf
- Royal Children's Hospital Melbourne, Jejunal Feeding guideline, 2021. https://www.rch.org.au/rchcpg/hospital_clinical_guideline_index/jejunal_feeding_guideline/
- Kalantar-Zadeh et al., CJASN 2010. https://pubmed.ncbi.nlm.nih.gov/20093346/
- NIDDK, Eating, Diet and Nutrition for Lactose Intolerance. https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/eating-diet-nutrition
- Toronto Public Health, Understanding Halal Foods, 2023. Read from the PDF. https://www.toronto.ca/wp-content/uploads/2023/08/857f-HalalFactSheet20235.pdf
- AASM RLS guideline, doi 10.5664/jcsm.11390. Exacerbating factors confirmed through a Practical Neurology summary.
- Yamada et al., Cochrane CD014806, 2023. Johnston et al., Cochrane CD008435, 2017. Moretto et al., Cochrane CD008768, 2013.
- American Academy of Dermatology, Top Tips for Relieving Dry Skin. https://www.aad.org/public/everyday-care/skin-care-basics/dry/dermatologists-tips-relieve-dry-skin
- NCI PDQ Oral Complications (2024) and Gastrointestinal Complications (2025). https://www.cancer.gov/about-cancer/treatment/side-effects/mouth-throat/oral-complications-hp-pdq and https://www.cancer.gov/about-cancer/treatment/side-effects/constipation/gi-complications-hp-pdq
- Chen et al., Cooling Blankets in Hospitalized Patients, Am J Med Sci 2021. https://scholars.mssm.edu/en/publications/cooling-blankets-in-hospitalized-patients-time-to-reevaluate-2/
- Choe, Paraphimosis, Am Fam Physician 2000. https://www.aafp.org/pubs/afp/issues/2000/1215/p2623.html
- AAP HealthyChildren, Care for an Uncircumcised Penis, 2024. https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Care-for-an-Uncircumcised-Penis.aspx
- Lantus label and SoloStar instructions, 2025 (safety test 2 units, count to 10). https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a
- FDA Drug Safety Communication on pen sharing, 2015. https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-requires-label-warnings-prohibit-sharing-multi-dose-diabetes-pen
- Lovenox label, section 2.5, 2025. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5017a927-2a24-4f27-89f9-27c805bf7d59
- Estradiol vaginal cream patient information, 2025. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c895ac14-5dbd-4201-bf3e-ba7c38a4e994
- Exelon Patch label, 2016. Read from the PDF. https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/022083s023lbl.pdf
- NHS Greater Glasgow and Clyde Aerochamber leaflet (towel drying causes static). Dartford and Gravesham Aerochamber guide, 2022. https://wheeze.dgt.nhs.uk/guides/aerochamber
- American Lung Association, How to Use a Nebulizer. https://www.lung.org/lung-health-diseases/lung-disease-lookup/copd/patient-resources-and-videos/how-to-use-a-nebulizer
- McDonald et al., IDSA and SHEA C. difficile guideline, Clin Infect Dis 2018. https://academic.oup.com/cid/article/66/7/e1/4855916
- Benninger et al., Techniques of Intranasal Steroid Use, 2004. Citation confirmed through reference lists. Full text not read.

Textbooks used as in other batches: Potter Fundamentals 11th edition, Hinkle Brunner and Suddarth 15th edition, Lehne 11th edition, Hockenberry Wong 12th edition. NPIAP 2019, ASPEN 2017, KDOQI 2020, GINA 2025 and the HICPAC CAUTI guideline are shared with other batches.

## For the reviewer

The shared web search budget ran out partway through. These points rest on textbook knowledge or partial checks and deserve a close look:

- 18: suppository placement past the internal sphincter against the rectal wall, sourced to Potter and Lehne only.
- 02: pinna direction by age. Confirmed by nursing education sources, cited to Potter and Hockenberry.
- 03: opening the battery door at night and the delirium link, cited to Potter and Hinkle.
- 20: transfer board set-up, cited to Potter and Hinkle.
- 27: the ADA Standards section is cited for carbohydrate counting. I did not open that section this session.
- 29: the vitamin K food list. The ODS consumer sheet names spinach, kale and broccoli. Collards come from an extension table citing ODS. The low vitamin K distractors (rice, banana, potato) are general knowledge.
- 33: lacto-ovo vegetarian definition, cited to Potter only.
- 36: giving sucrose about 2 minutes before the stick. It is the usual protocol timing and matches trial methods, but the Cochrane abstract was not read.
- 34: the AASM citation volume and pages (21(1):137, 2025) come from memory. The DOI and content were confirmed.
- 46: daily liner washing and no soaking, cited to Hinkle only.
- 42: shivering raising heat production is standard physiology. Chen 2021 supports shivering as a common adverse effect.
- 09: the reason the female setting reads low (it expects a uterus) is my wording. The source gives the instruction without the mechanism.
- 44: cold packs before manual reduction come from Choe 2000. Local practice may have the provider direct this.
- 14: 45 cm is my metric conversion of the 18 inches given by Memorial Sloan Kettering.
