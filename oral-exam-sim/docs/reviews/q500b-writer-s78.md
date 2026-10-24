# Q500B writer report: s78, Multiple patients

File: `src/samps/s78/multiple-patients.ts` (`MULTIPLE_PATIENTS_S78`). All items `reviewed: false`, `author: "Preceptor"`, `version: 1`.

## Ids written

| Id | Title | Setting | Angle |
|---|---|---|---|
| multiple-patients-36 | Screens go dark at shift change | Tertiary | Ransomware downtime of the electronic record with a full department and a septic patient |
| multiple-patients-37 | Cars arriving from the aquatic centre | Community | Chlorine gas release at a swim meet with families arriving by car before EMS |
| multiple-patients-38 | Propofol drawn up in bay two | Rural | Planned hip reduction sedation interrupted by a chest stab wound with massive hemothorax |
| multiple-patients-39 | A faint at home after midnight | Community, night | Ruptured ectopic pregnancy with the gynecologist and OR team at home, and consultant pushback |
| multiple-patients-40 | Saturday at the arena | Community | Carbon monoxide from an ice resurfacer at a youth hockey tournament |

## Counts

- 5 SAMPs, 21 questions: 16 `single`, 5 `menu` (one per SAMP).
- Single key positions (first to fifth): 4, 3, 3, 3, 3.
- Key feature coverage in this batch: KF1 3, KF2 5, KF3 7, KF4 6.
- Bank before this batch: KF1 38, KF2 28, KF3 25, KF4 21. The extra questions went to KF4 and KF3, the thinnest.

## Uniqueness

All 35 existing multiple-patients SAMPs (s13, s44), the EMS SAMPs that touch mass casualty work (s09, s35) and the multiple-patients oral cases were read first. None of the bank items covers an IT or ransomware downtime, a chlorine release, an interrupted procedural sedation, consultant pushback on an unstable ectopic pregnancy, or a CO cluster at an arena. Chlorine and CO appear elsewhere in the bank as single patient toxicology. These items test the multi-patient decisions instead (self-presenters, decontamination triage, ending the exposure, early hyperbaric referral, discharge to free beds). The bank-wide near duplicate stem test passes.

## Sources and verification

| Source | Verified with |
|---|---|
| The Joint Commission. Sentinel Event Alert 67. 2023 | Full PDF read: https://digitalassets.jointcommission.org/api/public/content/8bd6addf4df943f383a074f2d9d4af64 |
| Prescott HC et al. Surviving Sepsis Campaign 2026 | SCCM guideline page and summaries confirm "immediate antimicrobial therapy" for possible septic shock. DOI https://doi.org/10.1097/CCM.0000000000007075 (already used in the bank) |
| Auf der Heide E. Ann Emerg Med. 2006 | PubMed abstract, https://pubmed.ncbi.nlm.nih.gov/16387217/ |
| ATSDR. Medical management guidelines for chlorine. 2014 | Page read: https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=198&toxid=36 |
| Godwin SA et al. ACEP clinical policy, procedural sedation. 2014 | PubMed record (PMID 28395927, correction listing authors) and the ACEP Now summary of the recommendations. No URL given |
| Dawson-Amoah K et al. Ochsner J. 2018 | Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC6162140/ |
| ATLS 11th edition. 2025 | Bank source, unchanged |
| Moore C et al. Acad Emerg Med. 2007 | PubMed abstract, https://pubmed.ncbi.nlm.nih.gov/17554008/ |
| ACOG Practice Bulletin No. 193. 2018 | PubMed abstract, https://pubmed.ncbi.nlm.nih.gov/29470343/ |
| Bullard MJ et al. CTAS 2016. CJEM 2017 | Bank source, unchanged |
| Rose JJ et al. Am J Respir Crit Care Med. 2017 | Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC5363978/ |
| Creswell PD et al. MMWR. 2015 | Page read: https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6445a3.htm |

## Uncertain points for the reviewers

1. multiple-patients-38 q2 keys a massive hemothorax at 1 600 mL immediate drainage, using the ATLS 1 500 mL threshold as the bank already does. My web search budget ran out before I could recheck the 11th edition wording. It matches the signed bank item that uses ATLS.
2. multiple-patients-38 q1 and q4 rest on the ACEP 2014 two-person recommendation (a nurse or other qualified individual monitors continuously). The reasons for rejecting "the respiratory therapist sedates" and "nurse-administered propofol" are practice based, not quoted from the policy. Provincial scope of practice may differ.
3. multiple-patients-39 q2: the reasons for uncrossmatched red cells and two large-bore lines are standard hemorrhage care and are not in the ACOG abstract. The methotrexate contraindication with instability or rupture is in the full bulletin, which I could not open.
4. multiple-patients-36 q1: diversion is a reasonable hospital level choice after a risk review (the Joint Commission case diverted emergency cases). The item keys declaring downtime as the first step, not diversion as wrong in all cases.
5. multiple-patients-40 q3 keys the fire service call. The hyperbaric and poison centre reasons come from Rose 2017, not the MMWR source cited for that question.
6. Test timing: the bank wide near duplicate stem test needs about 20 seconds and timed out at the 5 second default while the machine was under heavy load (load average above 20). With `--testTimeout=300000` all 132 tests pass, and the test passes on its own.
