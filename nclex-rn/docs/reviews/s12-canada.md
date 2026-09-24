# Batch s12 Canada notes

Batch s12 holds 50 stand-alone items in Psychosocial Integrity. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. Each new source is written inline in its item.

## Counts

- Notes written: 4
- Left empty: 46

## Notes written

- rn-s12-11 (Wernicke encephalopathy): glucose is reported in mmol/L only, so the value is 4.1 mmol/L. Diabetes Canada sets hypoglycemia below 4.0 mmol/L for people on insulin or a secretagogue.
- rn-s12-31 (brief alcohol intervention): Canadian counselling would use Canada's Guidance on Alcohol and Health from CCSA. It rates 3 to 6 standard drinks a week as moderate risk and 7 or more as high risk.
- rn-s12-42 (neglect of an older adult): Canada has no national adult protective services. Adult protection laws, the agency that takes a report and any duty to report vary by province. Newfoundland and Labrador requires anyone to report.
- rn-s12-47 (effects of chronic stress): glucose is reported in mmol/L only, so the rise is from 5.1 to 6.5 mmol/L. Diabetes Canada calls a fasting glucose of 6.1 to 6.9 mmol/L impaired fasting glucose.

## Sources added

- Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1). 2018. Added to rn-s12-11. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14
- Canadian Centre on Substance Use and Addiction. Canada's Guidance on Alcohol and Health: Final Report. 2023. Added to rn-s12-31. https://www.ccsa.ca/en/guidance-tools-resources/substance-use-and-addiction/alcohol/canadas-guidance-alcohol-and-health
- James K. Department of Justice Canada. Legal Definitions of Elder Abuse and Neglect. 2009. Added to rn-s12-42. https://www.justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/elder-aines/def/p211.html
- Government of Newfoundland and Labrador. Newly Proclaimed Act Ensures Adults are Protected from Abuse or Neglect. 2014. Added to rn-s12-42. https://www.releases.gov.nl.ca/releases/2014/health/0630n07.aspx
- Diabetes Canada Clinical Practice Guidelines Expert Committee, Punthakee Z, Goldenberg R, Katz P. Definition, Classification and Diagnosis of Diabetes, Prediabetes and Metabolic Syndrome. Canadian Journal of Diabetes 42(Suppl 1). 2018. Added to rn-s12-47. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-3

No item has more than 3 sources.

## How the claims were checked

- Diabetes Canada chapter 14, read with WebFetch: hypoglycemia includes a plasma glucose below 4.0 mmol/L for people treated with insulin or an insulin secretagogue.
- Diabetes Canada chapter 3, read with WebFetch: impaired fasting glucose is a fasting plasma glucose of 6.1 to 6.9 mmol/L, and 7.0 mmol/L or more diagnoses diabetes.
- CCSA guidance page, read with WebFetch: 1 to 2 drinks a week is low risk, 3 to 6 is moderate risk and 7 or more is high risk. It replaced the 2011 guidelines in 2023 and is current.
- Justice Canada report (page modified 2021-12-08), read with WebFetch: adult protection is addressed at the provincial and territorial level, and jurisdictions take different approaches.
- Newfoundland and Labrador release (2014), read with WebFetch: the Adult Protection Act requires anyone who believes an adult may need protective intervention to report to a social worker or police officer. Island Health confirmed that British Columbia has no mandatory reporting, which supports "vary by province".

## Left empty on purpose

- rn-s12-02, rn-s12-06, rn-s12-22 and rn-s12-44 (trafficking, child abuse, dating violence) test cues and charting, not the report itself. No Canadian rule changes what is tested.
- rn-s12-08, rn-s12-20, rn-s12-29, rn-s12-33 and rn-s12-39 (withdrawal, methadone, buprenorphine, alprazolam): the drugs are sold in Canada under the same names and the tools are used the same way. No note.
- The other items test therapeutic communication, crisis work, grief, culture and faith, delirium, stress and behavior therapy. Practice is the same in Canada and no other item turns on a lab value, drug name or law.

## Tests

`BATCH=s12 npx vitest run tests/bank.test.ts` passes, 61 of 61.
