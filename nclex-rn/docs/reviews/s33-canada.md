# Batch s33 Canada pass

Scope: the 50 items in `src/bank/s33/` after the adversarial review. Only `canada` and `sources` were edited in this pass.

- Notes written: 7
- Left empty: 43
- `BATCH=s33 npx vitest run tests/bank.test.ts`: 61 of 61 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-s33-06 | WHO Growth Charts for Canada use the 3rd percentile as the low weight cut-off |
| rn-s33-17 | Police apprehension falls under the provincial mental health act, which varies by province |
| rn-s33-19 | Canadian 2018 deprescribing guideline example taper of 25% every 2 weeks, then 12.5% steps |
| rn-s33-21 | Cannabis legal for adults under the federal Cannabis Act, minimum age 18 to 21 by province |
| rn-s33-23 | Health Canada has not authorized any kratom product for sale |
| rn-s33-24 | Health Canada has not authorized kratom and has seized it from stores |
| rn-s33-35 | HIV reportable in every province and territory, partner notification models vary by province |

## Sources added

- Dietitians of Canada, Canadian Paediatric Society and partners, A Health Professional's Guide for Using the WHO Growth Charts for Canada, 2014. https://www.dietitians.ca/DietitiansOfCanada/media/Documents/WHO%20Growth%20Charts/2014-A-Health-Professionals-Guide-to-Using-the-Charts.pdf (06)
- Province of British Columbia, Mental Health Act, RSBC 1996, c. 288, section 28. https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96288_01 (17)
- Pottie K et al. Deprescribing Benzodiazepine Receptor Agonists. Canadian Family Physician 64(5):339, 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC5951648/ (19)
- Health Canada, Cannabis in the Provinces and Territories, 2022. https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/laws-regulations/provinces-territories.html (21)
- Health Canada, Advisory on unauthorized Saj kratom products, 4 May 2018. https://recalls-rappels.canada.ca/en/alert-recall/unauthorized-saj-kratom-products-seized-two-edmonton-stores-may-pose-serious-health (23, 24)
- CATIE, Partner Notification case study, 2016. https://www.catie.ca/partner-notification (35)

## How the claims were checked

- Growth charts: the guide's cut-off table lists underweight as weight-for-age below the 3rd percentile. The chart sets show the 3rd, not the 5th, percentile line.
- Mental health act: section 28 of the BC act lets police apprehend and take a person to a physician for examination. Other provinces have similar sections with different criteria.
- Benzodiazepines: the Canadian guideline gives 25% every 2 weeks and 12.5% near the end as an example. It covers insomnia and allows a slower rate when relapse risk is higher. The note does not change the item's 5 to 10% key.
- Cannabis: the Health Canada page lists 18 in Alberta, 19 in most provinces and territories, and 21 in Quebec.
- Kratom: the advisory states that Health Canada has not authorized the sale of any product containing kratom. Kratom is not listed under the Controlled Drugs and Substances Act, so the note speaks only of authorization.
- HIV: CATIE states that partner notification services are mandated in every province and territory, with varying models. PHAC reports that HIV has been notifiable in all jurisdictions since 2003.

## Left empty

No material Canadian difference was found for the other 43 items. Lorazepam, oxycodone and the other drugs named are sold in Canada under the same generic names. Gambling self-exclusion, vaping cessation, respite and cultural care do not change the keyed action for a Canadian nurse. rn-s33-33 is marked for pull and has no note.
