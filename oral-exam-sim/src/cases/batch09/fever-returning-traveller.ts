// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const feverReturningTraveller: OralCase = {
  id: "fever-returning-traveller",
  title: "Fever and confusion after a family visit abroad",
  blueprint: "id",
  alsoCovers: ["resus", "neuro"],
  priorityTopic: "infectious-diseases",
  keyFeatures: [{ topic: "infectious-diseases", n: 3 }, { topic: "infectious-diseases", n: 5 }, { topic: "loc", n: 2 }, { topic: "seizures", n: 2 }],
  summary: "A 31 year old woman back from a month abroad has four days of fever and is now confused.",
  durationMinutes: 14,
  stem:
    "You are working a day shift at a large community hospital in the Greater Toronto Area with an ICU and an infectious diseases service by phone. " +
    "The lab runs a malaria rapid test and smears around the clock. " +
    "IV artesunate is not stocked here. The nearest Canadian Malaria Network pharmacy is at a hospital 30 minutes away. " +
    "Adaeze Okafor is 31 years old. She returned nine days ago from four weeks visiting family in Lagos, Nigeria. " +
    "Triage vitals: heart rate 118, blood pressure 104/62, respiratory rate 24, SpO2 95 percent on room air, temperature 39.8, capillary glucose 4.1 mmol/L. CTAS 2. " +
    "The nurse says: 'Her sister brought her in. Fever for four days. Since this morning she keeps asking the same questions.'",
  findings: [
    {
      id: "history",
      label: "History from patient and sister",
      result:
        "Fever, chills, headache and muscle aches for four days. Vomited twice today. Sister says she has been muddled since waking. " +
        "She grew up in Lagos and moved to Canada eight years ago. She did not take malaria prevention because she felt she was immune. " +
        "Many mosquito bites. No sick contacts, no funerals, no hospital visits, no contact with rodents and no freshwater swimming.",
    },
    {
      id: "pmh",
      label: "Past history and medications",
      result: "Healthy. No medications. No allergies. Last menstrual period two weeks ago. Weight 64 kg.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "GCS 14 with E4, V4 and M6. Mild scleral icterus. Spleen tip palpable. No rash. No petechiae or bleeding. " +
        "Neck supple. No focal neurological deficit. Chest clear.",
    },
    {
      id: "rdt",
      label: "Malaria rapid diagnostic test",
      result: "Positive for the P. falciparum HRP2 antigen.",
    },
    {
      id: "smear",
      label: "Thick and thin blood smears",
      result: "P. falciparum ring forms. Parasitemia 7 percent on the thin film. No schizonts seen.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 92 g/L. Platelets 38 x 10^9/L. WBC 5.2 x 10^9/L. Creatinine 188 µmol/L. Total bilirubin 58 µmol/L. ALT 64 U/L. " +
        "Bicarbonate 17 mmol/L. Lactate 3.4 mmol/L. Sodium 133 mmol/L. Lab glucose 4.0 mmol/L.",
    },
    {
      id: "bhcg",
      label: "Pregnancy test",
      result: "Serum beta hCG negative.",
    },
    {
      id: "cultures",
      label: "Blood cultures and urinalysis",
      result: "Blood cultures pending. Urine dark, 2+ blood on dipstick with few red cells on microscopy.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "Clear lung fields. Normal heart size.",
    },
    {
      id: "ct-head",
      label: "CT head after the seizure",
      result: "No hemorrhage, mass or hydrocephalus. No signs of raised intracranial pressure.",
    },
    {
      id: "sister",
      label: "Collateral from the sister",
      result:
        "Her sister was on the same trip. She took atovaquone proguanil the whole time and feels well. " +
        "She asks if she should be tested and whether the family should worry.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text: "She is hot, shivering and slow to answer. Her sister is holding her hand and asking what is wrong.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial approach",
      prompt: "What is your differential and what do you send right now?",
      seconds: 90,
      modelAnswer: [
        "Falciparum malaria until proven otherwise in any febrile traveller from sub Saharan Africa.",
        "Screen for viral hemorrhagic fever exposure because she was in Nigeria within 21 days.",
        "Malaria rapid test plus thick and thin smears stat, repeated every 12 to 24 hours for three sets if negative.",
        "Blood cultures, CBC, electrolytes, creatinine, glucose, liver tests, lactate, blood gas, pregnancy test.",
        "Also consider bacterial sepsis, meningitis, typhoid, dengue and HIV seroconversion.",
      ],
      rubric: ["ma-a1", "ma-a2"],
      choices: [
        {
          id: "c-stat-smear",
          label: "I asked targeted exposure questions for viral hemorrhagic fever, then sent a stat malaria rapid test and smears with cultures and labs.",
          next: "q-severe",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Malaria is the leading dangerous cause of fever after travel to sub Saharan Africa. " +
            "Visiting friends and relatives travellers without prophylaxis are the highest risk group. " +
            "A brief exposure screen for viral hemorrhagic fever protects staff without delaying care.",
        },
        {
          id: "c-routine-smear",
          label: "I sent a malaria smear as a routine test and treated her for a viral illness while I waited.",
          next: "s-routine-smear",
          quality: "partial",
          feedback:
            "You thought of malaria but did not treat it as an emergency. Falciparum malaria can progress to severe disease within hours. " +
            "The examiner wanted a stat rapid test and smear with results in about an hour.",
        },
        {
          id: "c-viral",
          label: "I treated her as a viral syndrome with fluids and acetaminophen.",
          next: "s-viral",
          quality: "unsafe",
          feedback:
            "Fever and confusion in a traveller from West Africa without prophylaxis is falciparum malaria until proven otherwise. " +
            "Missing it risks death. The examiner wanted urgent malaria testing on the first contact.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-routine-smear",
      phase: "Three hours later",
      text: "The lab technologist phones you directly. The smear shows P. falciparum with high parasitemia. She is now harder to rouse.",
      next: "q-severe",
    },
    {
      kind: "say",
      id: "s-viral",
      phase: "Two hours later",
      text:
        "Her GCS drops to 13. The triage nurse had added a malaria rapid test on the travel history. It is positive for P. falciparum. The smear is being read now.",
      next: "q-severe",
    },
    {
      kind: "question",
      id: "q-severe",
      phase: "Results",
      prompt: "The smear shows P. falciparum at 7 percent parasitemia. Is this severe malaria? Which features tell you so?",
      seconds: 75,
      modelAnswer: [
        "Yes. This is severe falciparum malaria.",
        "Impaired consciousness counts on its own.",
        "Parasitemia of 5 percent or more meets the Canadian threshold for severe disease in a non immune adult.",
        "She lost her childhood immunity after eight years in Canada. Treat her as non immune.",
        "Other features to look for: seizures, shock, hypoglycemia, acidosis, severe anemia, renal failure, jaundice, bleeding, pulmonary edema.",
        "Severe malaria needs IV artesunate and ICU level care.",
      ],
      rubric: ["ma-a3"],
      choices: [
        {
          id: "c-severe-yes",
          label: "I called it severe malaria because of impaired consciousness and parasitemia over 5 percent.",
          next: "q-treat",
          quality: "strong",
          feedback:
            "Correct. Either feature alone makes this severe under the Canadian criteria. Naming the criteria shows the examiner you know when oral therapy is no longer enough.",
        },
        {
          id: "c-severe-no",
          label: "I felt it was uncomplicated because she is talking and her pressure is normal.",
          next: "s-severe-no",
          quality: "unsafe",
          feedback:
            "A GCS of 14 is impaired consciousness and parasitemia is over 5 percent. Both are severe criteria in the Canadian guidance. " +
            "Labelling this uncomplicated leads to oral therapy in a patient who needs IV artesunate now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-severe-no",
      phase: "On the phone",
      text:
        "The infectious diseases physician on call reviews the numbers with you. She points out that the GCS and the parasitemia both meet severe criteria and asks you to get IV artesunate.",
      next: "q-treat",
    },
    {
      kind: "question",
      id: "q-treat",
      phase: "Treatment",
      prompt: "What antimalarial do you give, at what dose, and how do you get it?",
      seconds: 90,
      modelAnswer: [
        "IV artesunate 2.4 mg/kg at 0, 12 and 24 hours, then once daily until she can take oral therapy. About 154 mg per dose for her.",
        "Get it through the Canadian Malaria Network. Call the listed pharmacy now and arrange urgent courier. Complete the network's case forms.",
        "If artesunate is more than about an hour away and she can swallow safely, start an oral agent while waiting. CATMAT names oral quinine. CDC prefers artemether lumefantrine. Use what pharmacy stocks, with ID advice.",
        "Chloroquine is not effective against falciparum from Nigeria.",
        "After IV therapy, complete a full oral course.",
        "Involve infectious diseases.",
      ],
      rubric: ["ma-m1", "ma-l1"],
      choices: [
        {
          id: "c-artesunate",
          label: "I called the Canadian Malaria Network pharmacy for IV artesunate 2.4 mg/kg at 0, 12 and 24 hours. She could swallow, so I started an oral antimalarial on ID advice while the courier was on the way.",
          next: "s-seizure",
          quality: "strong",
          feedback:
            "Excellent. Artesunate lowers mortality compared with quinine and is the drug of choice for severe malaria. " +
            "Knowing the Canadian Malaria Network route is what the examiner wanted, along with a bridge if the drug is not yet in hand.",
        },
        {
          id: "c-oral-only",
          label: "I gave oral atovaquone proguanil as definitive treatment.",
          next: "s-oral-only",
          quality: "partial",
          feedback:
            "An oral agent is a reasonable bridge but not definitive therapy for severe malaria. Atovaquone proguanil clears parasites slowly and she may vomit it. " +
            "The examiner wanted IV artesunate through the Canadian Malaria Network.",
        },
        {
          id: "c-chloroquine",
          label: "I gave oral chloroquine.",
          next: "s-chloroquine",
          quality: "unsafe",
          feedback:
            "Falciparum from West Africa is chloroquine resistant. This dose wastes time she does not have. " +
            "Severe malaria needs IV artesunate 2.4 mg/kg at 0, 12 and 24 hours.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-oral-only",
      phase: "One hour later",
      text: "She vomits the tablets. The ED pharmacist asks whether you want IV artesunate from the Canadian Malaria Network pharmacy. You call and arrange a courier.",
      next: "s-seizure",
    },
    {
      kind: "say",
      id: "s-chloroquine",
      phase: "Pharmacy call",
      text:
        "The pharmacist refuses to dispense chloroquine for falciparum from Nigeria. She has already called the Canadian Malaria Network pharmacy about artesunate. You agree to the plan.",
      next: "s-seizure",
    },
    {
      kind: "say",
      id: "s-seizure",
      phase: "Ninety minutes later",
      text:
        "The first artesunate dose has just arrived. Then she has a generalized tonic clonic seizure. It has lasted two minutes. Capillary glucose is 2.6 mmol/L. SpO2 is 90 percent.",
      next: "q-seizure",
    },
    {
      kind: "question",
      id: "q-seizure",
      phase: "Seizure",
      prompt: "What do you do? Which treatments help and which harm in this setting?",
      seconds: 90,
      modelAnswer: [
        "Position, suction, high flow oxygen, prepare airway equipment.",
        "Dextrose 50 percent 50 mL IV, which is 25 g, then a dextrose 10 percent infusion. Recheck glucose every hour.",
        "Lorazepam 4 mg IV, repeated once if the seizure continues.",
        "Give the first artesunate dose without delay.",
        "CT head, and cover for bacterial meningitis with ceftriaxone 2 g IV until it is excluded.",
        "Avoid dexamethasone and mannitol. Both are harmful or unhelpful in cerebral malaria.",
      ],
      rubric: ["ma-r1", "ma-m2"],
      choices: [
        {
          id: "c-dex-loraz",
          label: "I gave 25 g of dextrose and lorazepam 4 mg IV, supported her airway, gave the artesunate and added ceftriaxone until meningitis was excluded.",
          next: "q-fluids",
          quality: "strong",
          feedback:
            "That is the complete answer. Hypoglycemia is common in severe malaria and can cause the seizure. " +
            "Artesunate must not wait for the CT. Covering bacterial meningitis is prudent until it is excluded.",
        },
        {
          id: "c-loraz-only",
          label: "I gave lorazepam 4 mg IV and waited for the lab glucose.",
          next: "s-loraz-only",
          quality: "partial",
          feedback:
            "The benzodiazepine is correct. A capillary glucose of 2.6 mmol/L needs treatment now, not a lab confirmation. " +
            "The examiner wanted dextrose 25 g IV and hourly glucose checks.",
        },
        {
          id: "c-steroid",
          label: "I gave dexamethasone and mannitol for cerebral malaria.",
          next: "s-steroid",
          quality: "unsafe",
          feedback:
            "Steroids worsen outcomes in cerebral malaria and mannitol has no proven benefit. " +
            "The seizure needs lorazepam and the low glucose needs dextrose. The examiner wanted both named, with artesunate given at once.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-loraz-only",
      phase: "Five minutes later",
      text: "The seizure stops but she remains unresponsive. The nurse rechecks the glucose. It is 2.1 mmol/L. You give 25 g of dextrose and she begins to move.",
      next: "q-fluids",
    },
    {
      kind: "say",
      id: "s-steroid",
      phase: "Five minutes later",
      text:
        "The seizure continues. The nurse asks whether she should give lorazepam and dextrose. You order both and the seizure stops. The ICU fellow asks you to cancel the steroids.",
      next: "q-fluids",
    },
    {
      kind: "question",
      id: "q-fluids",
      phase: "Supportive care",
      prompt:
        "Her pressure is 98/60 and creatinine 188 µmol/L. The nurse asks if you want two litres of saline. A resident asks about exchange transfusion. What do you say?",
      seconds: 75,
      modelAnswer: [
        "Give fluid cautiously in 250 to 500 mL boluses with reassessment.",
        "Adults with severe malaria develop pulmonary edema and ARDS with aggressive fluid.",
        "Use norepinephrine for shock that persists after modest fluid.",
        "Exchange transfusion is not indicated at 7 percent. CDC no longer recommends it. CATMAT says it may be considered above 10 percent. Discuss with ID.",
        "Check parasitemia every 12 to 24 hours until clear.",
      ],
      rubric: ["ma-m3", "ma-m4"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where does she go and who do you call?",
      seconds: 60,
      modelAnswer: [
        "ICU admission for severe malaria with seizures, hypoglycemia and renal impairment.",
        "Infectious diseases consult and ongoing contact with the Canadian Malaria Network.",
        "Report to the local public health unit. Malaria is a reportable disease in Ontario.",
        "Structured handover with parasitemia, doses and times of artesunate and glucose trend.",
      ],
      rubric: ["ma-d1", "ma-l2"],
      next: "q-sister",
    },
    {
      kind: "question",
      id: "q-sister",
      phase: "Family and follow up",
      prompt:
        "Her sister asks: 'I travelled with her. Do I need to be tested? And what should we do next time?' What do you tell her, and what follow up will the patient need?",
      seconds: 75,
      modelAnswer: [
        "She took prophylaxis but any fever within a year of travel needs urgent malaria testing. Tell her to say she travelled.",
        "Malaria is not spread person to person in Canada.",
        "Immunity from childhood fades after years away. Future trips need a pre travel clinic and prophylaxis.",
        "Patient needs a full oral course after IV artesunate.",
        "Weekly hemoglobin for four weeks after artesunate to detect delayed hemolysis.",
      ],
      rubric: ["ma-c1", "ma-c2", "ma-d2"],
      choices: [
        {
          id: "c-counsel",
          label: "I told her malaria does not spread between people, that any fever within a year needs testing, and that childhood immunity fades so future trips need a pre travel clinic.",
          next: "end",
          quality: "strong",
          feedback:
            "Well done. The examiner wanted the myth of lasting immunity addressed directly. " +
            "Travellers visiting friends and relatives carry the most imported malaria in Canada.",
        },
        {
          id: "c-reassure",
          label: "I reassured her that she took pills so she cannot have malaria.",
          next: "s-reassure",
          quality: "partial",
          feedback:
            "No prophylaxis is fully protective. She needs to know that fever within a year of travel means urgent testing. " +
            "The examiner also wanted advice to prevent the next case.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-reassure",
      phase: "Later that week",
      text:
        "Ten days later the sister develops a fever. A walk in clinic tells her it is the flu. She remembers only that you said she was safe, and she does not mention her travel.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is admitted to the ICU. Her parasitemia is under 1 percent at 24 hours. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ma-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Considers falciparum malaria first in a febrile traveller from sub Saharan Africa and sends a stat rapid test and smears.",
      points: 3,
      critical: true,
      teaching: "Every fever after travel to an endemic area needs urgent malaria testing. Repeat smears every 12 to 24 hours for three sets if the first is negative.",
      source: "catmat",
    },
    {
      id: "ma-a2",
      competency: "assessment",
      criterion: "approach",
      text: "Screens for viral hemorrhagic fever exposure risk within 21 days of return.",
      points: 1,
      teaching: "A short exposure screen covers sick contacts, funerals, health facilities and rodents. It guides precautions without delaying malaria testing.",
      source: "who",
    },
    {
      id: "ma-a3",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Identifies severe malaria using impaired consciousness and parasitemia of 5 percent or more.",
      points: 2,
      teaching: "One severe criterion is enough. The Canadian parasitemia threshold is 5 percent in non immune adults and 10 percent in semi immune adults. Others include seizures, shock, hypoglycemia, acidosis, severe anemia, renal failure and pulmonary edema.",
      source: "catmat",
    },
    {
      id: "ma-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives IV artesunate 2.4 mg/kg at 0, 12 and 24 hours, then daily if still needed.",
      points: 3,
      critical: true,
      teaching: "Artesunate is first line for severe malaria and lowers mortality compared with quinine. CATMAT lists doses at 0, 12, 24 and 48 hours. Complete a full oral course once she can swallow.",
      source: "catmat",
    },
    {
      id: "ma-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Obtains artesunate urgently through the Canadian Malaria Network and bridges with an oral agent if the delay is more than about an hour.",
      points: 2,
      teaching: "Know where your nearest supply is before you need it. Start an oral agent while the drug travels if she can swallow safely.",
      source: "catmat",
    },
    {
      id: "ma-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Treats the seizure with lorazepam 4 mg IV and the hypoglycemia with dextrose 25 g IV, with airway support.",
      points: 3,
      critical: true,
      teaching: "Check glucose in every seizing malaria patient. Follow a dextrose bolus with an infusion and hourly checks.",
      source: "who",
    },
    {
      id: "ma-m2",
      competency: "management",
      criterion: "plan",
      text: "Avoids corticosteroids and mannitol and covers bacterial meningitis until excluded.",
      points: 1,
      teaching: "Steroids worsen cerebral malaria outcomes. Bacterial co infection can mimic cerebral malaria, so cover it until excluded.",
      source: "who",
    },
    {
      id: "ma-m3",
      competency: "management",
      criterion: "plan",
      text: "Gives fluid cautiously in small boluses with reassessment.",
      points: 2,
      teaching: "Adults with severe malaria are prone to pulmonary edema. Use small boluses and early norepinephrine for persistent shock.",
      source: "who",
    },
    {
      id: "ma-m4",
      competency: "management",
      criterion: "data",
      text: "States that exchange transfusion is not indicated here and monitors parasitemia every 12 to 24 hours.",
      points: 1,
      teaching: "Artesunate clears parasites fast. CDC no longer recommends exchange transfusion. The Canadian guidance still lists it as an option above 10 percent parasitemia, so involve ID.",
      source: "cdc",
    },
    {
      id: "ma-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to the ICU with infectious diseases involvement.",
      points: 2,
      teaching: "Severe malaria can deteriorate over hours with seizures, hypoglycemia, acidosis and ARDS. It needs ICU level monitoring.",
      source: "catmat",
    },
    {
      id: "ma-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Reports the case to the local public health unit.",
      points: 1,
      teaching: "Malaria is a designated reportable disease in Ontario. Public health tracks imported cases.",
      source: "ontario-dd",
    },
    {
      id: "ma-c1",
      competency: "communication",
      criterion: "plan",
      text: "Counsels the sister that malaria is not spread person to person and that fever within a year of travel needs urgent testing.",
      points: 1,
      teaching: "Travellers should tell every clinician about travel for a year after return. Prophylaxis lowers but does not remove risk.",
      source: "catmat",
    },
    {
      id: "ma-c2",
      competency: "communication",
      criterion: "plan",
      text: "Addresses the belief of lasting immunity and recommends a pre travel clinic for future trips.",
      points: 1,
      teaching: "Partial immunity fades within a few years away from endemic areas. Visiting friends and relatives travellers are the highest risk group.",
      source: "catmat",
    },
    {
      id: "ma-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Plans weekly hemoglobin checks for four weeks after artesunate.",
      points: 1,
      teaching: "Delayed hemolysis usually appears two to three weeks after artesunate. CDC advises weekly checks for four weeks.",
      source: "cdc",
    },
  ],
  sources: [
    {
      id: "catmat",
      citation:
        "Public Health Agency of Canada. Committee to Advise on Tropical Medicine and Travel. Canadian recommendations for the prevention and treatment of malaria.",
      url: "https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria.html",
    },
    {
      id: "who",
      citation: "World Health Organization. WHO guidelines for malaria.",
    },
    {
      id: "cdc",
      citation: "Centers for Disease Control and Prevention. Clinical guidance on the treatment of severe malaria.",
      url: "https://www.cdc.gov/malaria/hcp/clinical-guidance/treatment-of-severe-malaria-1.html",
    },
    {
      id: "ontario-dd",
      citation: "Ontario. Health Protection and Promotion Act and Ontario Regulation 135/18 on designation of diseases.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
