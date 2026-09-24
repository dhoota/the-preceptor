# Batch c09 writer report

Five case studies, 30 items. Every item has `reviewed: false` and `canada: ""`. `BATCH=c09 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p .` prints no errors for `bank/c09`.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Cases

The five scenarios follow `docs/topic-plan.json` in order.

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c09-1 | Orthopedic surgical unit | Man, 66, acute hemolytic transfusion reaction on day 1 after knee arthroplasty | High |
| rn-c09-2 | Cardiac step-down unit | Man, 68, heparin-induced thrombocytopenia on day 6 after bypass surgery | Moderate to high |
| rn-c09-3 | Prenatal clinic | Woman, 34, gestational diabetes above goal at 32 weeks | Low to moderate |
| rn-c09-4 | Labor and birth unit | Woman, 29, placental abruption at 35 weeks | High |
| rn-c09-5 | Rural community hospital, triage line then unit | Woman, 22, preterm labor at 31 weeks | Moderate |

## Counts

Client Needs: MOC 6, SIPC 4, HPM 2, PSY 2, BCC 2, PPT 5, RRP 4, PA 5. This matches the plan.

Item types: mc 7, cloze 5, sata 5, highlight 4, matrix 4 (all single mode, in cases 1, 2, 4 and 5), msn 4, dnd 1. Each case uses 5 or more types.

Rationale scoring: one triad (rn-c09-1-3). Three dyads (rn-c09-3-2, rn-c09-4-3, rn-c09-5-3). rn-c09-2-2 and the dnd item rn-c09-3-4 use zero-one scoring.

CJMM steps: each case walks the six steps in order, 5 items per step.

Difficulty: level 2 has 6 items, level 3 has 18 and level 4 has 6.

Calculation: rn-c09-2-5 (argatroban mL/hour from mcg/kg/minute).

## MC key positions

Position 1: 2 (rn-c09-3-3, rn-c09-4-6). Position 2: 2 (rn-c09-2-3, rn-c09-2-5). Position 3: 1 (rn-c09-1-5). Position 4: 2 (rn-c09-3-5, rn-c09-5-2). The calculation item lists options low to high.

## Sources and verification

- CDC NHSN. Biovigilance Component Hemovigilance Module Surveillance Protocol v3.0, January 2026. Table 4 gives the acute hemolytic reaction signs: back or flank pain, chills, fever, hypotension, hematuria, oliguria, DIC. https://www.cdc.gov/nhsn/pdfs/biovigilance/bv-hv-protocol-current.pdf
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, Wolters Kluwer, 2022. https://shop.lww.com/Brunner---Suddarth-s-Textbook-of-Medical-Surgical-Nursing--2-vol-/p/9781975168285
- The Joint Commission. National Patient Safety Goals Effective January 2025, Hospital Program. Two identifiers and transfusion verification. https://www.jointcommission.org/-/media/tjc/documents/standards/national-patient-safety-goals/2025/hap-npsg-chapter-2025.pdf
- Cuker A et al. ASH 2018 guidelines for management of VTE: heparin-induced thrombocytopenia. Blood Advances 2(22):3360. No VKA before platelet recovery (usually 150 x 10^9/L or more). No routine platelet transfusion. https://ashpublications.org/bloodadvances/article/2/22/3360/16129/American-Society-of-Hematology-2018-guidelines-for
- Hikma. Argatroban Injection prescribing information, revised 1/2020. 2 mcg/kg/min without hepatic impairment, 50 mg in 50 mL (1 mg/mL), aPTT 1.5 to 3 times baseline, not above 100 seconds, checked 2 hours after start. https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/203049s007lbl.pdf
- ADA Professional Practice Committee. 15. Management of Diabetes in Pregnancy: Standards of Care in Diabetes 2025. Diabetes Care 48(Suppl 1):S306. Targets fasting under 95 mg/dL and 1 hour under 140 mg/dL, insulin preferred. https://diabetesjournals.org/care/article/48/Supplement_1/S306/157565/15-Management-of-Diabetes-in-Pregnancy-Standards (targets also read in the 2023 text at https://pmc.ncbi.nlm.nih.gov/articles/PMC9810465/)
- ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus. Obstet Gynecol 131(2):e49, 2018. https://journals.lww.com/greenjournal/fulltext/2018/02000/acog_practice_bulletin_no__190__gestational.37.aspx
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, Elsevier, 2023. https://www.us.elsevierhealth.com/maternity-and-womens-health-care-9780323810180.html
- Oyelese Y, Ananth CV. Placental abruption. Obstet Gynecol 108(4):1005, 2006. https://pubmed.ncbi.nlm.nih.gov/17012465/
- WHO. Global Guidelines for the Prevention of Surgical Site Infection, 2016. Do not shave. Clip only if hair must be removed. https://www.ncbi.nlm.nih.gov/books/NBK536407/
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- ACOG Practice Bulletin No. 171: Management of Preterm Labor. Obstet Gynecol 128(4):e155, 2016. Bed rest and hydration not effective. Tocolysis for under 48 hours to allow steroids or transfer. https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2016/10/management-of-preterm-labor
- ACOG and SMFM. Committee Opinion No. 455: Magnesium Sulfate Before Anticipated Preterm Birth for Neuroprotection. Obstet Gynecol 115(3):669, 2010. https://pubmed.ncbi.nlm.nih.gov/20177305/
- ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia. Obstet Gynecol 135(6):e237, 2020. Reflexes lost at 9 mg/dL (7 mEq/L), oliguria under 30 mL/hour, calcium gluconate for toxicity. https://pubmed.ncbi.nlm.nih.gov/32443079/
- ISMP. List of High-Alert Medications in Acute Care Settings, 2024. Magnesium sulfate injection is listed. https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf

## For the reviewer

- rn-c09-2-2 says the fall began 5 to 10 days after heparin started. Heparin began with bypass on day 0. The count recovered on day 3 and was low on day 6. The exact onset day between day 3 and day 6 is not shown. Please check the wording against the ASH timing criterion.
- rn-c09-2-4 keys "Record heparin in the allergy record" as indicated. This is common nursing practice. ASH does not state it directly. Brunner is cited.
- rn-c09-4-4 keys removing rings and piercings for electrosurgery burn and swelling risk. I cited Lowdermilk and did not find an AORN page to verify.
- rn-c09-5-1 relies on a warning threshold of contractions every 10 minutes or more often for 1 hour. I took it from Lowdermilk as I recall it. Please confirm in the 13th edition.
- rn-c09-5-6 uses a respiratory rate under 12/minute as a warning sign. PB 222 gives serum levels and oliguria. The 12/minute cut point is from nursing texts, cited as Lowdermilk. Please confirm.
- rn-c09-5-5 keys a secondary line for magnesium. This is standard teaching, not a statement in PB 222 or the ISMP list.
- rn-c09-3-6 teaches rolling the NPH vial, not shaking. This comes from the NPH labels and nursing texts. I did not fetch a Humulin N label.
- rn-c09-1-2 keys the pre-transfusion hemoglobin of 7.2 g/dL as expected after knee arthroplasty. It is lower than typical, but the stem gives 600 mL blood loss and the transfusion is the planned response.
- The ADA citation is the 2025 section. I read the targets and postpartum text in the 2023 PMC copy because the 2025 page returned 403. The targets are unchanged across these years per the search summary.
