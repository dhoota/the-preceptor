# Q500 writer report: s54, Common fractures/MSK

Writer: Preceptor. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Questions | Key features |
|---|---|---|---|
| msk-39 | Runner with an aching knee | 4 single | 3, 4, 7, 2 |
| msk-40 | Groin pain after lifting a heavy bag | 4 single | 3, 3, 7, 3 |
| msk-41 | Arm pain while lifting a kettle | 4 single | 2, 2, 1, 8 |
| msk-42 | Boy who fell from a skateboard | 3 single, 1 menu | 6, 6, 5, 7 |
| msk-43 | Farmer stepped on in the barn | 4 single | 6, 6, 8, 7 |

20 questions: 19 single, 1 menu (select 3). Single key positions, first to fifth: 3, 4, 4, 4, 4.

## Key feature coverage

KF1: 1. KF2: 3. KF3: 4. KF4: 1. KF5: 1. KF6: 4. KF7: 4. KF8: 2. Every key feature is tested. The extra weight sits on KF3 and KF6, then KF2, as asked.

## Scenarios and why they are new

The existing msk SAMPs (msk-01 to msk-38) and the related topics were searched for each scenario before writing.

- msk-39: femoral neck stress fracture on the tension side in an amenorrheic runner, presenting as knee pain. No existing SAMP has this. Robertson was listed in s29 sources but never cited by a question.
- msk-40: ruptured abdominal aortic aneurysm presenting as hip and groin pain in a community hospital. Existing referred pain items cover SCFE, hip fracture with knee pain, obturator hernia and sacral insufficiency.
- msk-41: pathologic humeral shaft fracture from myeloma, with hypercalcemia and kidney injury. No existing pathologic fracture item. Humeral shaft immobilization (msk-26) was avoided.
- msk-42: child with an open both-bone forearm fracture whose puncture was hidden under a bandage. Existing open fracture items are adult (ankle, tibia, distal radius in an older woman, fight bite).
- msk-43: rural farm crush with an open metatarsal fracture, agricultural contamination, penicillin for clostridia, and foot compartment syndrome. Seymour fracture, nail gun, chainsaw, dog bite and posterior hip dislocation scenarios were found elsewhere in the bank and avoided.

## Sources and verification

- Robertson GA, Wood AM. Sports Med Int Open. 2017. Full text read through Europe PMC (PMC6226070). https://pubmed.ncbi.nlm.nih.gov/30539087/
- Mountjoy M et al. IOC REDs consensus. Br J Sports Med. 2023. Abstract read. https://pubmed.ncbi.nlm.nih.gov/37752011/
- Azhar B et al. J Endovasc Ther. 2014. Abstract read (42% misdiagnosis, ureteric colic and MI, 61%, 46%, 45%). https://pubmed.ncbi.nlm.nih.gov/25101588/
- Rubano E et al. Acad Emerg Med. 2013. Abstract read (sensitivity 99%, specificity 98%, half lack the triad). https://pubmed.ncbi.nlm.nih.gov/23406071/
- Wanhainen A et al. ESVS 2024 aorto-iliac guideline. Full PDF read, section 6.2.1 (permissive hypotension, systolic 70 to 90 mmHg, recommendation 72). https://pubmed.ncbi.nlm.nih.gov/38307694/
- BOA. BOAST management of metastatic bone disease. 2022. Page read. https://boa.ac.uk/resource/boast-management-of-metastatic-bone-disease.html
- Rajkumar SV et al. IMWG criteria. Lancet Oncol. 2014. Abstract read. https://pubmed.ncbi.nlm.nih.gov/25439696/
- Dimopoulos MA et al. IMWG renal impairment. J Clin Oncol. 2016. Abstract read (high fluid intake, grade B). https://pubmed.ncbi.nlm.nih.gov/26976420/
- Garcia-Lopez E et al. J Pediatr Orthop Soc N Am. 2021. Page and PDF read. https://jposna.org/index.php/jposna/article/view/225
- BOA. BOAST open fractures. 2017. Page read (antibiotics within 1 hour, photographs, saline dressing, neurovascular documentation, debridement timing). https://www.boa.ac.uk/resource/boast-4-pdf.html
- Hoff WS et al. EAST open fracture antibiotics. J Trauma. 2011. PDF read (penicillin for farm injuries, fluoroquinolones). https://pubmed.ncbi.nlm.nih.gov/21610369/
- BOA. BOAST compartment syndrome. 2014, updated 2025. Page read. https://www.boa.ac.uk/resource/boast-10-pdf.html
- Dodd A, Le I. J Am Acad Orthop Surg. 2013. Abstract read. https://pubmed.ncbi.nlm.nih.gov/24187035/

## For the reviewers

- msk-40 q3 is tagged KF7 (urgent surgical consultation). A ruptured aneurysm is not a fracture, so a reviewer may prefer KF3 for all four questions. Coverage would still pass.
- msk-40 q4 asks for the most common misdiagnosis. Azhar names ureteric colic and myocardial infarction as the most common pair, so myocardial infarction was kept out of the options to avoid a second defensible answer.
- msk-41 q4 states that plating is planned after staging. The BOA metastatic bone disease standard supports staging before surgery for metastatic disease. Myeloma workup is assumed to follow the same path.
- msk-42 q4: pediatric low grade open fractures may be managed with bedside irrigation (Garcia-Lopez). The key is orthopedic consultation now, not operative debridement, to keep it true either way.
- msk-43 q3 (slab for transfer) rests on general fracture care plus the BOAST compartment standard on circumferential dressings. No source states the slab choice for metatarsal fractures directly.
- The BOAST compartment standard says to elevate the limb. No distractor uses elevation, to avoid the heart level debate.

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s5` printed nothing. `SAMP_BATCH=s54 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 128 tests passed.
