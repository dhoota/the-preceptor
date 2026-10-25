# Batch s29 Canada pass

Canada pass on batch s29 after the review. Only the `canada` field and `sources` were changed in this pass.

## Counts

- Notes written: 25 (rn-s29-02, 04, 05, 07, 08, 09, 10, 11, 14, 17, 18, 22, 24, 25, 26, 27, 29, 31, 33, 34, 36, 37, 38, 39, 46)
- Left empty: 25. That includes the five items marked for pull (19, 23, 28, 30, 50).

Most notes say that a US federal rule (CMS conditions, EMTALA, CFR staffing rules) does not apply in Canada and that the matter varies by province. Others cover the RPN title in Ontario, SI glucose units, ASA as the Canadian name for aspirin, and provincial mental health acts.

## Sources added

- CNO_SCOPE. College of Nurses of Ontario, Practice Standard: Scope of Practice, 2023. https://cno.org/en/news/2023/july-2023/cnos-scope-of-practice-standard-takes-effect (items 10, 18, 27)
- DC_HYPO. Yale JF, Paty B, Senior PA, Diabetes Canada, Hypoglycemia, Can J Diabetes 42(Suppl 1):S104, 2018. https://doi.org/10.1016/j.jcjd.2017.10.010 (item 05)
- ON_GIFT. Government of Ontario, Trillium Gift of Life Network Act, R.S.O. 1990, c. H.20, section 8.1. https://www.ontario.ca/laws/statute/90h20 (items 25, 29)
- C83. Parliament of Canada, Bill C-83, 2019. https://www.parl.ca/documentviewer/en/42-1/bill/C-83/first-reading (item 09)
- ON_IMS. Government of Ontario, Incident Management System Guidance, version 2.0, 2021. https://www.ontario.ca/document/incident-management-system-ims-guidance-version-2 (item 37)

## Checks

`BATCH=s29 npx vitest run tests/bank.test.ts` passes every s29 test. The one failure is the sign-off check on rn-s30-29 and rn-s30-36, which are in another batch.
