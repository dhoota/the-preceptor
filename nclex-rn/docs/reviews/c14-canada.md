# Batch c14 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c14/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 6
- Left empty: 24
- `BATCH=c14 npx vitest run tests/bank.test.ts`: see the test note at the end

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c14-1-2 | SI units only. Creatinine 186 micromol/L, potassium 4.3 mmol/L. MCC lists troponin I in ng/L |
| rn-c14-1-4 | IV nicardipine is not marketed in Canada. Hospitals obtain it through the Special Access Program or titrate another IV agent, such as labetalol |
| rn-c14-1-6 | Provincial and territorial plans cover medically necessary hospital and medical care. Outpatient drugs are not fully covered, so adult drug coverage varies by province |
| rn-c14-2-1 | Glucose in mmol/L only, 14.5 mmol/L. Diabetes Canada random inpatient target under 10.0 mmol/L |
| rn-c14-2-2 | Diabetes Canada perioperative target of 5.0 to 10.0 mmol/L for minor and moderate surgery. 14.5 mmol/L is above it, so the key stands |
| rn-c14-4-6 | Canadian term is substitute decision maker. Who may act, and in what order, varies by province. A capable client signs his own consent |

No note changes or softens a key.

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2)
- Pham H. Canadian Society of Hospital Pharmacists, Clinical Pearls: Hypertensive Crises, 2023. https://www.cshp.ca/Site/Site/Content/News/news-items/cp-hc.aspx (1-4)
- Health Canada, Drug Product Database, nicardipine and labetalol product listings, 2026. https://health-products.canada.ca/dpd-bdpp/ (1-4)
- Health Canada, Canada's health care system, 2025. https://www.canada.ca/en/health-canada/services/canada-health-care-system.html (1-6)
- Malcolm J, Halperin I, Miller DB, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee, In-Hospital Management of Diabetes. Canadian Journal of Diabetes 42(Suppl 1):S115, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16 (2-1, 2-2)
- Canadian Nurses Protective Society, InfoLAW: Consent for the Incapable Adult, reviewed 2025. https://cnps.ca/article/consent-for-the-incapable-adult/ (4-6)

Item 1-4 now has 4 sources, the limit. No other item has more than 3.

## How the claims were checked

- Lab units: the MCC normal values page (fetched, updated December 2020) gives potassium in mmol/L, creatinine in micromol/L, glucose in mmol/L and troponin I in ng/L.
- Nicardipine: the Health Canada Drug Product Database API (queried) lists only oral Cardene capsules, all cancelled post market by 2001. No IV nicardipine product is listed. The CSHP pearl (fetched, June 2023) says nicardipine is not commercially marketed in Canada but is accessible through the Special Access Program. The same database lists several IV labetalol products with the status Marketed.
- Drug coverage: the Health Canada page (fetched, modified June 2025) says provincial and territorial plans cover medically necessary hospital and physician services. It lists prescription drugs among services not fully covered, with extra coverage for some groups set by each province or territory. The note says medical care because the item gate bans the word physician.
- Glucose targets: Diabetes Canada chapter 16 (fetched) targets 5.0 to 10.0 mmol/L for minor and moderate surgery, and preprandial 5.0 to 8.0 mmol/L with random values under 10.0 mmol/L for most noncritically ill inpatients. The client's 14.5 mmol/L is above both, so the keys stand.
- Substitute decision makers: the CNPS article (fetched, reviewed September 2025) says laws on consent for incapable adults vary between provinces and territories. It says statutes set a hierarchy, led by a court-appointed decision maker or an attorney for personal care, then family in statutory order.

## Left empty, with the reason

These 24 items have no verified material Canadian difference: 1-1, 1-3, 1-5, 2-3, 2-4, 2-5, 2-6, 3-1, 3-2, 3-3, 3-4, 3-5, 3-6, 4-1, 4-2, 4-3, 4-4, 4-5, 5-1, 5-2, 5-3, 5-4, 5-5 and 5-6.

- 1-3 repeats the creatinine unit covered by the note on 1-2.
- 1-5 is the nicardipine rate calculation. The note on 1-4 covers its availability in Canada, and the arithmetic does not change.
- 2-6: nicotine patches are sold in Canada without a prescription, as in the US.
- 3-4 to 3-6: enoxaparin, ibuprofen and progestin-only methods are sold in Canada under the same generic names. Dosing by weight is the same.
- 4-4 and case 5: normal saline, labetalol, metoprolol, nitroglycerin, furosemide and cefazolin are all sold in Canada under the same names. CVP and BP are reported in mmHg in Canada as well.

## Test note

All 43 c14 tests pass, including every c14 item gate. The run also includes a whole-bank near duplicate check. It flags a stem pair between rn-s17-27 and rn-s26-44, two batches outside c14. That failure is not caused by this pass and was left alone, since this pass may only edit c14.
