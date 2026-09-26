// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  alsPcs: { id: "als-pcs", citation: "Ontario Ministry of Health, Emergency Health Regulatory and Accountability Branch. Advanced Life Support Patient Care Standards, version 5.4, in force 2 June 2025, including the PCP and ACP core and auxiliary medical directives. 2025.", url: "https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf" },
  blsPcs: { id: "bls-pcs", citation: "Ontario Ministry of Health, Emergency Health Regulatory and Accountability Branch. Basic Life Support Patient Care Standards, version 3.4, including the paramedic prompt cards. 2023.", url: "https://files.ontario.ca/moh_2/moh-standards-basic-life-support-patient-care-standards-v3-4-en-2023-03-10.pdf" },
  hcca: { id: "hcca", citation: "Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A (Ontario).", url: "https://www.ontario.ca/laws/statute/96h02" },
  iedema: { id: "imist-ambo", citation: "Iedema R, Ball C, Daly B, et al. Design and trial of a new ambulance-to-emergency department handover protocol: IMIST-AMBO. BMJ Qual Saf. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/22626739/" },
  east: { id: "east-edt", citation: "Seamon MJ, Haut ER, Van Arendonk K, et al. An evidence-based approach to patient selection for emergency department thoracotomy: a practice management guideline from the Eastern Association for the Surgery of Trauma. J Trauma Acute Care Surg. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26091330/" },
  shaker: { id: "anaphylaxis-2020", citation: "Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis, a 2020 practice parameter update, systematic review, and GRADE analysis. J Allergy Clin Immunol. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32001253/" },
  carter: { id: "carter-palliative", citation: "Carter AJE, et al. Paramedics providing palliative care at home: a mixed-methods exploration of patient and family satisfaction and paramedic comfort and confidence. CJEM. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/30739628/" },
  bcehsDyspnea: { id: "bcehs-p04", citation: "BC Emergency Health Services. Clinical practice guideline P04: palliative care, dyspnea. BCEHS Handbook. Accessed 24 September 2026.", url: "https://handbook.bcehs.ca/clinical-practice-guidelines/p-palliative-care/p04-palliative-care-dyspnea/" },
  csbpr: { id: "csbpr", citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute Stroke Management module. 7th edition, 2022 update.", url: "https://pubmed.ncbi.nlm.nih.gov/36529857/" },
  ccsStemi: { id: "ccs-stemi", citation: "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction: focused update on regionalization and reperfusion. Can J Cardiol. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/30760415/" },
  atls: { id: "atls", citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 11th ed. 2025. Content on transfer to definitive care.", url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/" },
  crash2: { id: "crash2-timing", citation: "CRASH-2 collaborators. The importance of early treatment with tranexamic acid in bleeding trauma patients: an exploratory analysis of the CRASH-2 randomised controlled trial. Lancet. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21439633/" },
  patchTrauma: { id: "patch-trauma", citation: "PATCH-Trauma Investigators and the ANZICS Clinical Trials Group. Prehospital tranexamic acid for severe trauma. N Engl J Med. 2023.", url: "https://doi.org/10.1056/NEJMoa2215457" },
  prism: { id: "prism", citation: "Chilcott RP, Amlot R, editors. Primary Response Incident Scene Management (PRISM) guidance for chemical incidents. Volume 1: strategic guidance for mass casualty disrobe and decontamination. Biomedical Advanced Research and Development Authority, US Department of Health and Human Services. 2015.", url: "https://www.medicalcountermeasures.gov/media/36872/prism-volume-1.pdf" },
  okumura1: { id: "okumura-tokyo-1", citation: "Okumura T, Suzuki K, Fukuda A, et al. The Tokyo subway sarin attack: disaster management, Part 1: community emergency response. Acad Emerg Med. 1998.", url: "https://pubmed.ncbi.nlm.nih.gov/9660289/" },
  okumura: { id: "okumura-tokyo", citation: "Okumura T, Suzuki K, Fukuda A, et al. The Tokyo subway sarin attack: disaster management, Part 2: hospital response. Acad Emerg Med. 1998.", url: "https://pubmed.ncbi.nlm.nih.gov/9660290/" },
  remmContam: { id: "remm-contam", citation: "US Department of Health and Human Services. Radiation Emergency Medical Management (REMM). Management modifiers for treating radiation contamination. Accessed 24 September 2026.", url: "https://remm.hhs.gov/contam_modifiers.htm" },
  remmPpe: { id: "remm-ppe", citation: "US Department of Health and Human Services. Radiation Emergency Medical Management (REMM). Personal protective equipment in a radiation emergency. Accessed 24 September 2026.", url: "https://remm.hhs.gov/radiation_ppe.htm" },
  crush: { id: "crush-ndt", citation: "Sever MS, Vanholder R, and the Renal Disaster Relief Task Force of the International Society of Nephrology with European Renal Best Practice. Recommendation for the management of crush victims in mass disasters. Nephrol Dial Transplant. 2012. Includes the short field version.", url: "https://doi.org/10.1093/ndt/gfs156" },
  remmHospital: { id: "remm-hospital", citation: "US Department of Health and Human Services. Radiation Emergency Medical Management (REMM). Hospital activities during radiation emergencies. Accessed 24 September 2026.", url: "https://remm.hhs.gov/hospitalprep.htm" },
  salt: { id: "salt", citation: "Lerner EB, Schwartz RB, Coule PL, et al. Mass casualty triage: an evaluation of the data and development of a proposed national guideline. Disaster Med Public Health Prep. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18769263/" },
  warren: { id: "warren-transport", citation: "Warren J, Fromm RE Jr, Orr RA, Rotello LC, Horst HM. Guidelines for the inter- and intrahospital transport of critically ill patients. Crit Care Med. 2004.", url: "https://pubmed.ncbi.nlm.nih.gov/14707589/" },
  cpsHie: { id: "cps-hie", citation: "Lemyre B, Chau V. Canadian Paediatric Society, Fetus and Newborn Committee. Hypothermia for newborns with hypoxic-ischemic encephalopathy. Paediatr Child Health. 2018.", url: "https://cps.ca/en/documents/position/hypothermia-for-newborns" },
  aha25: { id: "aha-als-2025", citation: "Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: adult advanced life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.", url: "https://doi.org/10.1161/CIR.0000000000001376" },
  aorta: { id: "acc-aha-aorta", citation: "Isselbacher EM, Preventza O, Hamilton Black J, et al. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/36322642/" },
  pals: { id: "aha-pals-2025", citation: "Lasa JJ, Dhillon GS, Duff JP, et al. Part 8: pediatric advanced life support. 2025 American Heart Association and American Academy of Pediatrics guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.", url: "https://pubmed.ncbi.nlm.nih.gov/41122885/" },
  hockstein: { id: "hockstein-lvad", citation: "Hockstein MA. Continuous-flow left ventricular assist devices: management in the emergency department. J Am Coll Emerg Physicians Open. 2020.", url: "https://doi.org/10.1002/emp2.12178" },
  krassioukov: { id: "krassioukov-ad", citation: "Krassioukov A, Linsenmeyer TA, Beck LA, and colleagues, Consortium for Spinal Cord Medicine. Evaluation and management of autonomic dysreflexia and other autonomic dysfunctions: preventing the highs and lows. Management of blood pressure, sweating, and temperature dysfunction. Top Spinal Cord Inj Rehabil. 2021.", url: "https://doi.org/10.46292/sci2702-225" },
  acmt: { id: "acmt-fentanyl", citation: "Moss MJ, Warrick BJ, Nelson LS, and colleagues. ACMT and AACT position statement: preventing occupational fentanyl and fentanyl analog exposure to emergency responders. J Med Toxicol. 2017.", url: "https://doi.org/10.1007/s13181-017-0628-2" },
} satisfies Record<string, Source>;

export const EMS_S35: Samp[] = [
  /* 16 Paramedic termination request in a toxic arrest -------------------- */
  {
    id: "ems-16",
    topic: "ems",
    alsoTopics: ["tox"],
    title: "Patch from an apartment during a resuscitation",
    stem:
      "You are working in an Ontario emergency department that also takes base hospital calls. A primary care paramedic crew patches from an apartment 15 minutes from your hospital. A 44-year-old woman was found unresponsive by her roommate 30 minutes ago. The roommate last spoke with her 2 hours earlier. Four empty blister packs of amitriptyline 25 mg were beside the bed. She was pulseless when the crew arrived. They have given 21 minutes of CPR through a supraglottic airway. The rhythm has been a wide complex PEA at about 30/minute throughout, and the AED has advised no shock. There has been no return of spontaneous circulation. She is not visibly pregnant and was found in a warm room. The crew asks to terminate resuscitation.",
    vitals: { weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of this arrest excludes her from the paramedic medical termination of resuscitation directive?",
        options: ["Duration of CPR under 30 minutes", "Pulseless electrical activity rhythm", "Suspected tricyclic antidepressant overdose", "Unwitnessed arrest before paramedics arrived", "No shock delivered during resuscitation"],
        correct: 2,
        explanation:
          "The empty amitriptyline packs point to a non-opioid drug overdose, which the Ontario medical termination directive lists as a contraindication, because a toxic arrest may respond to a specific antidote and longer resuscitation. Her other features meet the directive: she is over 16, the arrest was not witnessed by paramedics, 20 minutes have passed without ROSC and no shock was delivered. Those findings support termination rather than exclude it. PEA does not exclude her, and the directive sets no 30 minute minimum.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew at this point in the patch?",
        options: ["Begin transport with ongoing CPR", "Continue CPR on scene for 20 more minutes", "Give naloxone 2 mg IN and reassess", "Terminate and notify the coroner", "Wait on scene for an advanced care crew"],
        correct: 0,
        explanation:
          "When termination is not authorized and there is no ROSC after 20 minutes, the directive tells the crew to initiate transport. A tricyclic arrest has a treatment the primary care crew cannot give, hypertonic sodium bicarbonate, so bringing her in with CPR continuing gives her access to it within 15 minutes. Another 20 minutes on scene only delays that treatment. Termination is excluded by the overdose. There is no history of opioid use and naloxone does not treat a tricyclic arrest. Waiting for an advanced care crew delays transport from a scene close to your hospital.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "She arrives with CPR in progress. The paramedic begins the handover while your team moves her to the stretcher.",
        prompt: "Which of the following handover details can only the paramedics provide to your team?",
        options: ["Current cardiac rhythm on the monitor", "Current end-tidal CO2 reading", "Pupil size and reactivity now", "Supraglottic airway position", "Time found and time CPR began"],
        correct: 4,
        explanation:
          "The time she was found and the time CPR began exist only in the crew's memory and record, and together with the roommate's last contact 2 hours earlier they bound her no-flow and low-flow times, which shape how long your team continues. A structured handover such as IMIST-AMBO puts treatment given and timing ahead of findings the team can see for itself. The current rhythm, the end-tidal CO2, the pupils and the airway position are all visible to your team at the bedside within seconds.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
      {
        id: "q4",
        kind: "single",
        update: "Your team takes over CPR through the supraglottic airway. Two boluses of sodium bicarbonate have been given. The monitor still shows a wide complex rhythm at about 30/minute with no pulse, and no other drug has been given.",
        prompt: "Which of the following drugs should be given next during her resuscitation?",
        options: ["amiodarone 300 mg IV", "atropine 1 mg IV", "epinephrine 1 mg IV", "magnesium sulfate 2 g IV", "vasopressin 40 units IV"],
        correct: 2,
        explanation: "Standard advanced life support continues in a poisoned arrest alongside the antidote. Her rhythm is pulseless electrical activity, which is not shockable, and the 2025 AHA guideline gives epinephrine 1 mg IV as soon as feasible in a nonshockable arrest, repeated every 3 to 5 minutes. Amiodarone is for shock-refractory ventricular fibrillation or pulseless ventricular tachycardia, not PEA, and it has sodium channel blocking effects of its own. Atropine is not part of the PEA algorithm. Vasopressin, alone or added to epinephrine, offers no advantage and is not a substitute for epinephrine. Magnesium is not given routinely in arrest and is kept for torsades de pointes.",
        keyFeature: { topic: "tox", n: 4 },
        source: "aha-als-2025",
      },
    ],
    sources: [S.alsPcs, S.iedema, S.aha25],
    ...META,
  },

  /* 17 Penetrating chest trauma with loss of pulse ------------------------ */
  {
    id: "ems-17",
    topic: "ems",
    alsoTopics: ["multiple-trauma"],
    title: "Patch from a parking lot late at night",
    stem:
      "You are working in the emergency department of an Ontario lead trauma hospital at 2310. An advanced care paramedic crew patches from a parking lot 12 minutes away. A 27-year-old man was stabbed once in the left chest. When the crew reached him 4 minutes ago he was gasping, pale and confused, with a weak carotid pulse. The vital signs below were taken then. He has now lost his pulse. The monitor shows a narrow complex rhythm at 110/minute with no palpable pulse. His pupils react to light. Breath sounds are equal. A community hospital emergency department is 5 minutes away. The crew asks for direction.",
    vitals: { pulse: "132/minute", resp: "8/minute", bp: "62/30 mmHg", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew now that he has lost his pulse?",
        options: ["Direct transport to your trauma hospital", "Needle decompression before leaving scene", "Remain on scene for 20 minutes of CPR", "Terminate resuscitation on scene", "Transport to the closest community hospital"],
        correct: 0,
        explanation:
          "A penetrating torso wound with a lead trauma hospital under 30 minutes away is a contraindication to the trauma termination rule, and the field trauma triage standard sends such a patient straight to that hospital even when a closer emergency department exists. He also has signs of life, organized electrical activity and reactive pupils. His likely lesion needs surgical control that the community hospital cannot provide. Remaining on scene delays that control. His breath sounds are equal, so tension pneumothorax is not suspected and needle decompression would add delay without benefit.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following should you activate or prepare in your department before he arrives?",
        options: ["Cardiac catheterization team", "CT scanner held for his arrival", "Interventional radiology team", "Massive hemorrhage protocol", "Resuscitative thoracotomy set", "Trauma team activation"],
        select: 3,
        correct: [3, 4, 5],
        explanation:
          "A pulseless patient with a stab wound to the left chest and signs of life is the group in which EAST strongly recommends emergency department thoracotomy, so the set, the trauma team and blood through the massive hemorrhage protocol must be ready at the door. He will not go to CT while pulseless, and any imaging follows control of the bleeding. Interventional radiology does not treat cardiac or great vessel injury from a stab wound. A catheterization team treats coronary occlusion, not a penetrating wound.",
        keyFeature: { topic: "ems", n: 1 },
        source: "east-edt",
      },
      {
        id: "q3",
        kind: "single",
        update: "He arrives 14 minutes later with CPR in progress. The paramedic begins the handover as he is moved to the stretcher.",
        prompt: "Which of the following handover details most directly guides your decision about resuscitative thoracotomy?",
        options: ["Alcohol intake before the assault", "Blood volume seen at the scene", "Length of the knife blade", "Minutes of CPR since pulse loss", "Position he was found in"],
        correct: 3,
        explanation:
          "Survival after thoracotomy for penetrating chest injury depends on how recently signs of life were present, and it falls as prehospital CPR lengthens. Only the crew knows when his pulse was lost and which signs of life they saw along the way, which are the elements EAST uses to select patients. The blade length and the blood at the scene do not change the decision for a pulseless patient with a chest wound. Alcohol intake and the position he was found in have no bearing on whether thoracotomy can still help.",
        keyFeature: { topic: "ems", n: 2 },
        source: "east-edt",
      },
      {
        id: "q4",
        kind: "single",
        update: "Later, the crew asks which injured patients may have resuscitation stopped in the field after a patch.",
        prompt: "Which of the following patients, each with no return of circulation, would meet the paramedic trauma termination of resuscitation criteria?",
        options: ["Age 15, asystole after a fall", "Asystole and no signs of life after a fall", "Neck stab, asystole, trauma centre 20 minutes", "PEA after a fall, closest ED 10 minutes away", "Pulseless VT that was shocked once"],
        correct: 1,
        explanation:
          "The trauma rule applies from age 16 when no shock was given, the rhythm is asystole and there have been no signs of life since extrication, as in the adult who fell. A 15-year-old is below the age limit. A penetrating neck wound with a lead trauma hospital under 30 minutes away is a listed contraindication. PEA qualifies only when the closest emergency department is 30 minutes or more away, not 10. Any delivered shock excludes the rule, so the patient in pulseless VT does not qualify.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
    ],
    sources: [S.blsPcs, S.east, S.alsPcs],
    ...META,
  },

  /* 18 Refusal after self-treated anaphylaxis ----------------------------- */
  {
    id: "ems-18",
    topic: "ems",
    alsoTopics: ["shock"],
    title: "A patch about a man with a pump",
    stem: "You are working in an Ontario emergency department that also takes base hospital calls. A primary care paramedic crew patches from a home 20 minutes away. A 62-year-old man with a left ventricular assist device placed 8 months ago for heart failure has had 2 days of vomiting and diarrhea and is now weak and lightheaded. His wife says the pump controller gave a low-flow alarm twice this morning. The crew cannot feel a radial or carotid pulse, and the automated cuff gives no reading. He is awake, answers questions correctly and says he feels faint when he sits up. His skin is cool. The pulse oximeter will not register. The crew asks whether to start CPR.",
    vitals: { temperature: "36.9°C oral", resp: "22/minute" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew about CPR for this patient?",
        options: [
          "Apply the AED pads and analyze",
          "Begin chest compressions now",
          "Compress only if the pump stops",
          "Ventilate by bag-valve mask first",
          "Withhold CPR and keep reassessing",
        ],
        correct: 4,
        explanation: "A continuous-flow pump leaves little pulsatility, so a missing pulse, an absent automated cuff reading and a failed pulse oximeter are expected and do not mean arrest. He is awake and answering correctly, which shows his brain is perfused. The approach summarized from the American Heart Association statement reserves chest compressions for a patient with an assist device who is unresponsive and pulseless with evidence of poor perfusion. Compressions and an AED analysis would harm a perfusing, conscious patient. A pump that stops in a patient who remains awake is a device emergency, not an indication for compressions. He is breathing on his own and does not need assisted ventilation.",
        keyFeature: { topic: "ems", n: 1 },
        source: "hockstein-lvad",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following contacts should your department make as early as possible for this patient?",
        options: [
          "Cardiac surgery on call here",
          "His family physician's office",
          "His VAD program coordinator",
          "Home care nursing agency",
          "The ICU charge nurse",
        ],
        correct: 2,
        explanation: "Patients with an assist device are discharged with a VAD coordinator from their advanced heart failure program, who should be involved as early as possible, even when the patient arrives at a hospital other than the implanting centre. The coordinator links the emergency team with the heart failure team, helps interpret alarms and device settings, and arranges disposition. A local surgeon may have no experience with his device. His family physician and home care agency cannot guide acute device care. The ICU charge nurse is part of internal preparation but is not the device expert.",
        keyFeature: { topic: "ems", n: 1 },
        source: "hockstein-lvad",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following should your team prepare before this patient arrives?",
        options: [
          "Automated cuff as the BP guide",
          "Crystalloid for cautious boluses",
          "Manual cuff for return-to-flow MAP",
          "Nitroglycerin infusion",
          "Pads for immediate cardioversion",
          "Pulse oximetry as perfusion guide",
          "Resuscitation bay with monitoring",
        ],
        select: 3,
        correct: [1, 2, 6],
        explanation: "He should go to a resuscitation bay with monitoring, where the team can listen for the pump hum and assess him. Automated cuffs and pulse oximeters are unreliable with little pulsatility, so mean arterial pressure is measured with a manual cuff by the return-to-flow method, or with an arterial line if that fails. Vomiting and diarrhea with low-flow alarms suggest an underfilled left ventricle causing suction events, which cautious fluid can correct, while watching for right ventricular failure. Cardioversion pads are for an arrhythmia, which has not been reported. Nitroglycerin would reduce filling further.",
        keyFeature: { topic: "ems", n: 1 },
        source: "hockstein-lvad",
      },
      {
        id: "q4",
        kind: "single",
        update: "The crew arrives with him awake. The paramedic begins the handover while your team moves him to the stretcher.",
        prompt: "Which of the following details from the crew is most useful for your next decisions about this patient?",
        options: [
          "Automated BP readings en route",
          "Controller alarms and readings en route",
          "His current level of alertness",
          "His home medication list",
          "Pulse oximetry values en route",
        ],
        correct: 1,
        explanation: "The controller shows flow, power and alarms, and what it displayed at home and during transport is known only to the crew and his wife. Low-flow alarms with dehydration point to suction events from an underfilled ventricle, while power spikes suggest pump thrombosis, which changes management. Automated BP and pulse oximetry readings are unreliable in patients with continuous-flow pumps. His alertness can be assessed on arrival, and his medication list can come from his wife or pharmacy.",
        keyFeature: { topic: "ems", n: 2 },
        source: "hockstein-lvad",
      },
    ],
    sources: [S.hockstein],
    ...META,
    version: 2,
  },

  /* 19 Palliative dyspnea at home, British Columbia ----------------------- */
  {
    id: "ems-19",
    topic: "ems",
    alsoTopics: ["sob"],
    title: "A call for breathlessness at home",
    stem:
      "You are working in a British Columbia emergency department and take a consult through the BC Emergency Health Services clinical support line. An advanced care paramedic is at the home of a 78-year-old man with metastatic lung cancer. His family called 911 for 2 hours of worsening breathlessness at rest. He is alert and anxious, sitting forward in his chair. He tells the paramedic he wants to stay home. His palliative care plan, signed last week with his family physician, records a wish for comfort care at home and no CPR. He takes hydromorphone 2 mg PO every 4 hours, with good pain control. He has no chest pain or fever. Breath sounds are reduced at the right base, as on his recent imaging, and there is no wheeze.",
    vitals: { temperature: "36.8°C oral", pulse: "108/minute", resp: "28/minute", bp: "132/78 mmHg", o2sat: "97% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first drug treatment to direct for his breathlessness?",
        options: ["High-flow oxygen by face mask", "IV furosemide bolus", "Nebulized salbutamol", "Opioid given subcutaneously", "Subcutaneous midazolam"],
        correct: 3,
        explanation:
          "Opioids are the first-line drug treatment for breathlessness in advanced cancer, and the subcutaneous route acts quickly without an IV. His oral hydromorphone controls pain but not this episode. Midazolam may be added for anxiety once the opioid is given, but it is not first-line. Furosemide treats fluid overload, and he has no sign of heart failure. Salbutamol helps bronchospasm, and he has no wheeze. The BCEHS guideline gives oxygen only when the saturation is 94% or lower, and his is 97% on room air, so high-flow oxygen adds nothing.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bcehs-p04",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following comfort measures should the paramedic add while the first treatment takes effect?",
        options: ["Cool air from a fan to the face", "Lying flat with legs raised", "Nasal prong oxygen at 2 L/minute", "Non-rebreather mask oxygen", "Oral suctioning of the pharynx"],
        correct: 0,
        explanation:
          "Moving air across the face with a fan is one of the first-line comfort measures in the BCEHS guideline and can relieve breathlessness in a patient who is not hypoxic. The guideline gives oxygen only when the saturation is 94% or lower, and his is 97% on room air, so neither nasal prongs nor a non-rebreather mask is indicated. He should sit upright without compression of the chest and abdomen, as he is already doing, rather than lie flat. He has no pooled secretions, so suctioning would only distress him.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bcehs-p04",
      },
      {
        id: "q3",
        kind: "single",
        update: "Twenty minutes after treatment his respiratory rate is 20/minute and he says he feels calmer. His daughter asks whether he must go to hospital.",
        prompt: "Which of the following is the most appropriate plan for him now?",
        options: ["Transport for a chest radiograph and labs", "Transport for admission to a medical ward", "Transport for IV antibiotics and fluids", "Transport only if the family insists", "Treat at home and notify palliative team"],
        correct: 4,
        explanation:
          "His symptoms have settled with treatment, and his documented goal and his own stated wish are comfort care at home. Paramedic palliative programs in Canada were built to relieve symptoms in the home without transport and to link the patient back to the palliative team. A radiograph or blood work would not change a comfort-focused plan. He has no fever to suggest infection. Admission would override his wishes when his symptoms are controlled. The decision rests with him as a capable patient, not with his family.",
        keyFeature: { topic: "ems", n: 1 },
        source: "carter-palliative",
      },
    ],
    sources: [S.bcehsDyspnea, S.carter],
    ...META,
  },

  /* 20 DNR Confirmation Form and respiratory distress --------------------- */
  {
    id: "ems-20",
    topic: "ems",
    alsoTopics: ["pulmonary-edema"],
    title: "A resident of a retirement home with a form",
    stem:
      "You are working in an Ontario emergency department that also takes base hospital calls. A primary care paramedic crew patches from a retirement home. An 88-year-old woman with heart failure and moderate dementia has 1 hour of worsening breathlessness. Staff hand the crew a completed Ministry of Health DNR Confirmation Form signed by her physician last month. Her son, who is her substitute decision maker, is on the phone and asks that she be treated and taken to hospital. She has crackles to both mid zones and pitting edema to the knees. She is drowsy but opens her eyes and answers to her name.",
    vitals: { temperature: "36.9°C tympanic", pulse: "112/minute", resp: "32/minute", bp: "178/96 mmHg", o2sat: "84% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes how the DNR Confirmation Form affects her care right now?",
        options: ["Comfort measures only, without transport", "Oxygen only, with no medications given", "Treatment only if her son revokes the form", "Usual treatment, with CPR withheld at arrest", "No treatment until you authorize it"],
        correct: 3,
        explanation:
          "The DNR standard defines what is withheld as CPR, meaning compressions, defibrillation, artificial ventilation, airway insertion, pacing and resuscitation drugs, and it applies when she has a respiratory or cardiac arrest. Until then she receives the treatment her pulmonary edema needs, and the crew must also provide comfort care. Nothing in the form restricts transport or medications. Her son does not need to revoke the form for her to be treated. No base hospital authorization is needed before usual treatment.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following would the crew withhold if she became pulseless and apneic during transport?",
        options: ["Advising the dispatch centre", "AED rhythm analysis and shock", "Bag-valve-mask ventilation", "Chest compressions", "Documenting the time of death", "Oral suctioning for comfort", "Positioning for comfort", "Supraglottic airway insertion"],
        select: 4,
        correct: [1, 2, 3, 7],
        explanation:
          "A valid form directs the crew not to start CPR, which the standard defines to include chest compressions, defibrillation, artificial ventilation such as bag-valve-mask ventilation, and insertion of an airway device such as a supraglottic airway. Suctioning and positioning for comfort are care the standard still expects. Once death has occurred the crew must advise the dispatch centre and document the time at which death was confirmed, so those tasks continue.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would oblige the crew to begin CPR despite the DNR Confirmation Form?",
        options: ["Arrest occurring inside the ambulance", "Capable request for CPR from her", "Form signed a month before the call", "Form signed by a registered nurse", "Form that is a photocopy of the original"],
        correct: 1,
        explanation:
          "The standard requires CPR when a patient with a valid form appears capable and clearly asks to be resuscitated, or when her wish becomes unclear, because the form reflects her plan only while she agrees with it. A form signed before the date of the call is valid. A physician, registered nurse, registered practical nurse or nurse practitioner may sign it. A copy of a fully completed original is valid. The form applies wherever she arrests, including in the ambulance.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
    ],
    sources: [S.blsPcs],
    ...META,
  },

  /* 21 Stroke protocol after corrected hypoglycemia ----------------------- */
  {
    id: "ems-21",
    topic: "ems",
    title: "A headache in a man who uses a wheelchair",
    stem: "You are working in an Ontario emergency department that also takes base hospital calls. An advanced care paramedic crew patches from an apartment 25 minutes away. A 36-year-old man with C6 complete tetraplegia from a diving injury 10 years ago has had a pounding headache, a stuffy nose and blurred vision for 30 minutes. He is flushed and sweating above the level of his injury. He is lying flat in bed. His indwelling urethral catheter drains into a leg bag, which is empty. He takes baclofen and oxybutynin. His usual systolic pressure is about 100 mmHg.",
    vitals: { pulse: "52/minute regular", resp: "16/minute", bp: "186/102 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first direction to the crew for this patient?",
        options: [
          "Apply nitroglycerin paste now",
          "Check a 12-lead ECG first",
          "Give ketorolac for the headache",
          "Sit him up and lower his legs",
          "Start oxygen and transport flat",
        ],
        correct: 3,
        explanation: "His systolic pressure of 186 mmHg is 86 mmHg above his usual 100 mmHg, far more than the 20 mmHg rise that defines the condition, with a pounding headache, flushing and sweating above his injury and a slow pulse, which is autonomic dysreflexia. The first step in the Consortium for Spinal Cord Medicine guideline is to sit the person up and lower the legs, and to loosen clothing or constrictive devices. Keeping him flat forgoes this step. A drug comes only if the pressure stays at 150 mmHg or more after the trigger is sought. An ECG and ketorolac do not remove the cause.",
        keyFeature: { topic: "ems", n: 1 },
        source: "krassioukov-ad",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important next step for the crew in this patient?",
        options: [
          "Apply a cold cloth to his head",
          "Check catheter and tubing for kinks",
          "Give acetaminophen 1 g PO",
          "Recheck BP in 30 minutes",
          "Wait for pressure to settle alone",
        ],
        correct: 1,
        explanation: "Bladder and bowel problems are the most common triggers, and an empty leg bag in a man with an indwelling catheter suggests the drainage is blocked. The guideline advises checking the catheter system along its full length for kinks, folds, constrictions or an overfilled bag. Pressure is checked every few minutes during an episode, not every 30 minutes. The pressure will not settle while the trigger persists. Acetaminophen and a cold cloth treat the headache but not its cause.",
        keyFeature: { topic: "ems", n: 1 },
        source: "krassioukov-ad",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following medications should your department have ready if his systolic pressure stays at 150 mmHg or more?",
        options: [
          "amlodipine 10 mg PO",
          "lorazepam 1 mg SL",
          "metoprolol 5 mg IV",
          "nitroglycerin paste 2.5 cm",
          "ondansetron 4 mg IV",
        ],
        correct: 3,
        explanation: "The guideline recommends a rapid-onset, short-acting antihypertensive, such as nitroglycerin paste, nifedipine, hydralazine or sublingual clonidine, when systolic pressure stays at 150 mmHg or more after positioning and a search for the trigger. Recent use of a phosphodiesterase-5 inhibitor should be excluded before a nitrate is given. Metoprolol would worsen his slow pulse. Amlodipine acts too slowly and lasts too long. Lorazepam and ondansetron treat symptoms rather than the pressure.",
        keyFeature: { topic: "ems", n: 1 },
        source: "krassioukov-ad",
      },
      {
        id: "q4",
        kind: "single",
        update: "The crew straightens a kink in the tubing, and 700 mL of urine drains. He is sitting up, his headache is easing, and his BP is now 124/78 mmHg.",
        prompt: "Which of the following is the most appropriate direction to the crew now for this patient?",
        options: [
          "Give nitroglycerin paste anyway",
          "Leave him at home with no follow-up",
          "Lie him flat to rest",
          "Remove the catheter and leave",
          "Transport for monitoring of recurrence",
        ],
        correct: 4,
        explanation: "After an episode resolves, the guideline advises checking pressure every few minutes until stable and close monitoring for at least 2 hours for recurrent dysreflexia or low blood pressure, which is not possible if the crew leaves. A nitrate after the pressure has normalized risks hypotension. Lying him flat works against the position that helps control pressure. Removing the catheter leaves his bladder without drainage.",
        keyFeature: { topic: "ems", n: 1 },
        source: "krassioukov-ad",
      },
    ],
    sources: [S.krassioukov],
    ...META,
    version: 2,
  },

  /* 22 STEMI bypass with an anterior infarct ------------------------------ */
  {
    id: "ems-22",
    topic: "ems",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Patch from a highway rest stop",
    stem:
      "You are working in an Ontario emergency department without a catheterization laboratory, and you take base hospital calls. A primary care paramedic crew patches from a highway rest stop. A 58-year-old man has had 50 minutes of heavy central chest pressure with sweating. The crew's 12-lead ECG shows 3 mm ST elevation in V2 to V5 with ST depression in III and aVF. He uses nitroglycerin spray for stable angina and has chewed ASA 160 mg from the crew. He has no IV access. The PCI centre is 40 minutes away by land and your hospital is 10 minutes away.",
    vitals: { pulse: "76/minute", resp: "18/minute", bp: "118/74 mmHg", o2sat: "96% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings would have excluded him from the Ontario STEMI bypass protocol?",
        options: ["Age of 84 years", "Pain that began 10 hours ago", "Prior stent in the same artery", "Transport time of 50 minutes", "Ventricular paced rhythm on ECG"],
        correct: 4,
        explanation:
          "A ventricular paced rhythm is a listed contraindication to the Ontario STEMI bypass protocol, as are left bundle branch block and other STEMI imitators, because ST changes cannot be read reliably on such a tracing. The protocol sets only a lower age limit of 18 years, so an older patient still qualifies. Pain that began under 12 hours earlier qualifies, so 10 hours does not exclude him. A PCI centre is excluded only when it is 60 minutes or more from patient contact. A previous stent is not a contraindication, and stent thrombosis is itself treated with PCI.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following should the crew do now that a STEMI has been identified?",
        options: ["Apply defibrillation pads now", "Give a second ASA 160 mg dose", "Give nitroglycerin 0.8 mg SL", "Give oxygen by non-rebreather mask", "Start a 1 L saline bolus"],
        correct: 0,
        explanation:
          "The Ontario cardiac ischemia directive tells the crew to apply defibrillation pads as soon as a STEMI is identified, because ventricular fibrillation is most likely early in an infarction and pads allow an immediate shock. ASA is a single dose of 160 to 162 mg, and he has already chewed it. The maximum single dose of nitroglycerin is 0.4 mg. His saturation is 96% on room air, so oxygen is not indicated. He is normotensive and has no IV access, so a fluid bolus has no indication.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "Fifteen minutes into transport he becomes pulseless in VF. After two shocks he remains in VF. The PCI centre is 25 minutes away and your hospital is 8 minutes away.",
        prompt: "Which of the following is the most appropriate direction to the crew now?",
        options: ["Continue to the PCI centre with CPR", "Divert to your emergency department", "Request an air ambulance rendezvous", "Terminate after 20 minutes of CPR", "Wait for an advanced care intercept"],
        correct: 1,
        explanation:
          "A patient in arrest without ROSC is a complication that requires a primary care crew to divert from the bypass protocol to the closest emergency department, where drugs, airway management and further defibrillation are available within 8 minutes. Continuing 25 minutes with CPR in a moving vehicle lowers the quality of resuscitation, although the interventional program may still accept him after ROSC. An aircraft or an intercept adds delay. Termination does not apply because the arrest was witnessed by paramedics and shocks were delivered.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q4",
        kind: "single",
        update: "He arrives in your department with ROSC after a third shock. He is intubated by your team.",
        prompt: "Which of the following items from the crew is most important for decisions about his coronary reperfusion?",
        options: ["Current blood pressure and heart rate", "Current cardiac rhythm", "Oxygen saturation now", "Pre-arrest 12-lead ECG tracings", "Pupil size after ROSC"],
        correct: 3,
        explanation:
          "An ECG recorded soon after ROSC can be distorted by the arrest and the shocks, while the crew's pre-arrest tracings document an anterior STEMI. Those tracings support immediate transfer for angiography and must travel with him. His current rhythm, blood pressure, heart rate, saturation and pupils are all visible to your team at the bedside and do not decide whether he needs reperfusion.",
        keyFeature: { topic: "ems", n: 2 },
        source: "ccs-stemi",
      },
    ],
    sources: [S.ccsStemi, S.alsPcs, S.blsPcs],
    ...META,
  },

  /* 23 Helicopter or ground from a rural highway -------------------------- */
  {
    id: "ems-23",
    topic: "ems",
    alsoTopics: ["multiple-trauma"],
    title: "A call ahead about a highway collision",
    stem:
      "You are working in a rural Ontario hospital emergency department with no CT scanner and no surgeon on call. The nearest lead trauma hospital is 2 hours away by land. At 1420 a primary care paramedic crew calls. Their patient is a 34-year-old woman whose car struck a moose 25 minutes ago. She has left chest wall pain and a tender, guarded abdomen. An air ambulance helicopter was requested at the time of the call and is still 25 minutes from the scene. It is not on approach. The patient is loaded in the ambulance, which is 20 minutes from your hospital. The crew asks whether to wait for the aircraft.",
    vitals: { pulse: "128/minute", resp: "26/minute", bp: "94/60 mmHg", o2sat: "95% on non-rebreather mask", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew about the aircraft?",
        options: ["Drive toward the trauma centre by land", "Proceed now to your emergency department", "Stay on scene until BP exceeds 100 mmHg", "Wait at the scene for an advanced care crew", "Wait at the scene for the helicopter"],
        correct: 1,
        explanation:
          "The Ontario air ambulance standard tells a land crew not to delay transport waiting for a helicopter unless it is on final approach. With the patient loaded and the aircraft 25 minutes out, the crew should go to the closest hospital, and the aircraft meets them there. A 2 hour land drive to the trauma centre takes a patient in shock away from blood and airway help. Waiting on scene for a helicopter or an advanced care crew delays hemorrhage control, and she will not reach a blood pressure goal without blood.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q2",
        kind: "menu",
        update: "She arrives 50 minutes after the crash. She is alert. Your hospital stocks 4 units of O negative red cells. The aircraft will land in 15 minutes.",
        prompt: "Which of the following should your team do while the aircraft is on its way?",
        options: ["Crystalloid 3 L IV bolus", "eFAST at the bedside", "O negative red cells", "Rapid sequence intubation", "tranexamic acid 1 g IV", "Urinary catheter insertion"],
        select: 3,
        correct: [1, 2, 4],
        explanation:
          "She is in hemorrhagic shock with a pulse of 128/minute and BP of 94/60 mmHg, so blood is the resuscitation fluid, and tranexamic acid given within 3 hours of injury reduces death from bleeding. An eFAST takes minutes and tells the receiving team whether the chest or abdomen is the source. Three litres of crystalloid dilutes clotting factors. She is alert with an intact airway, so intubation before the flight is not needed and risks collapse. A urinary catheter can wait.",
        keyFeature: { topic: "ems", n: 3 },
        source: "crash2-timing",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would have made waiting at the scene for the helicopter appropriate?",
        options: ["Crew unable to start an IV", "Heart rate above 120/minute", "Helicopter seen on final approach", "Local hospital without a CT scanner", "Patient request for air transport"],
        correct: 2,
        explanation:
          "The standard allows a loaded land crew to wait only when the helicopter can be seen on final approach to the scene, because at that point the handover is faster than driving away. The crew's inability to start an IV, her heart rate and the lack of CT at the local hospital do not change that rule, and a sicker patient is a reason to move sooner. A patient's wish for air transport does not change the operational criteria for an on-scene aircraft.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
      {
        id: "q4",
        kind: "single",
        update: "Freezing rain grounds the aircraft. She has received 2 units of red cells, and her BP is 102/68 mmHg. The trauma centre accepts her by land, 2 hours away.",
        prompt: "Which of the following is the most appropriate arrangement for the land transfer?",
        options: ["Advanced care crew without an escort", "Hold her until the helicopter can fly", "Physician or nurse escort with blood", "Primary care crew without an escort", "Transfer after a CT at another hospital"],
        correct: 2,
        explanation:
          "She needs ongoing transfusion and reassessment for bleeding over 2 hours, which is beyond the scope of primary and advanced care paramedics, so the sending hospital must provide a medically responsible escort under the Ontario transport standard. Waiting for the weather to clear leaves a bleeding patient in a hospital without a surgeon. A detour for CT delays definitive surgery without changing the need for it.",
        keyFeature: { topic: "ems", n: 3 },
        source: "bls-pcs",
      },
    ],
    sources: [S.blsPcs, S.crash2],
    ...META,
  },

  /* 24 Ammonia release at a curling rink ---------------------------------- */
  {
    id: "ems-24",
    topic: "ems",
    alsoTopics: ["multiple-patients"],
    title: "A call from a curling rink",
    stem:
      "You are working in an Ontario community hospital emergency department. At 1930 the EMS district supervisor calls from a curling rink 10 minutes away. An ammonia refrigeration line has ruptured. Fire crews have evacuated about 40 people to the parking lot. Twelve have cough and burning eyes, three have wheeze and one, a 61-year-old man, has stridor and a hoarse voice. Several people have already left by private car. The vital signs below are for the man with stridor. The supervisor asks for direction.",
    vitals: { pulse: "118/minute", resp: "30/minute", bp: "152/90 mmHg", o2sat: "89% on room air", weight: "95 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following decontamination measures should you advise for people with skin or eye symptoms at the scene?",
        options: ["Blot skin dry with absorbent pads only", "Neutralize skin with dilute vinegar", "Remove clothing and irrigate with water", "Scrub skin with a stiff brush and soap", "No decontamination for a gas exposure"],
        correct: 2,
        explanation:
          "Ammonia is an alkali that dissolves in the moisture of the skin, eyes and airway. Removing clothing takes away most of the contamination, and a caustic agent that irritates the skin calls for wet decontamination with large volumes of water. Dry blotting is the default for most chemicals but not for a caustic one. Neutralizing with acid releases heat and worsens the burn. Scrubbing hard drives the chemical into the skin. People with burning eyes and skin need decontamination even when the exposure was to a gas.",
        keyFeature: { topic: "ems", n: 4 },
        source: "prism",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following people at the scene should be transported first?",
        options: ["Boy aged 9, coughing, walking", "Man aged 30, anxious, no symptoms", "Man aged 61, stridor and hoarse voice", "Woman aged 24, burning eyes", "Woman aged 45, wheeze, O2 sat 95%"],
        correct: 2,
        explanation:
          "Stridor and a hoarse voice with a saturation of 89% mean upper airway swelling from the alkali burn, which can progress to obstruction within minutes to hours, so he needs the first ambulance to a hospital that can secure his airway. The woman with wheeze has a saturation of 95% and can follow. A walking, coughing child and a woman with burning eyes need eye irrigation and observation but not the first transport. The man without symptoms needs decontamination and reassurance.",
        keyFeature: { topic: "ems", n: 4 },
        source: "prism",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction about the people who left by private car?",
        options: ["Alert nearby hospitals to expect them", "Ask police to return them to the rink", "Send an ambulance to each home", "Track them down for decontamination", "No action unless they call 911"],
        correct: 0,
        explanation:
          "People who leave a chemical scene by private vehicle go to the nearest emergency departments without warning and still contaminated. In the Tokyo sarin attack more than 4 000 victims reached hospital on foot, by taxi or in private vehicles, far more than the 688 moved by EMS, and no guidance given to private vehicles let victims concentrate at one hospital. Warning nearby hospitals lets them set up decontamination before these people walk in. Police and ambulances cannot quickly trace people who left on their own, and chasing them takes resources from the scene. Waiting for a 911 call leaves the hospitals unprepared.",
        keyFeature: { topic: "ems", n: 1 },
        source: "okumura-tokyo-1",
      },
      {
        id: "q4",
        kind: "single",
        update: "A 24-year-old woman who wears contact lenses has burning, watering eyes after the release. She is otherwise well, and the crew is preparing to transport her.",
        prompt: "Which of the following is the most appropriate eye care for her before and during transport?",
        options: ["Irrigate for 2 minutes, then transport", "Patch both eyes for transport", "Remove lenses, irrigate 20 minutes or more", "Topical anesthetic drops alone", "Transport now, irrigate in hospital"],
        correct: 2,
        explanation:
          "Ammonia is an alkali that penetrates the eye quickly. The Ontario hazardous materials standard asks paramedics to remove contact lenses that come out easily and to irrigate a suspected alkali exposure for at least 20 minutes at the scene when the patient is stable, then to continue irrigation en route. A 2 minute rinse leaves alkali against the cornea. Patching traps the chemical in the eye. Anesthetic drops ease pain and make irrigation easier but remove no chemical. Leaving irrigation until hospital lets the burn deepen.",
        keyFeature: { topic: "ems", n: 4 },
        source: "bls-pcs",
      },
    ],
    sources: [S.prism, S.okumura1, S.blsPcs],
    ...META,
  },

  /* 25 Explosion with radioactive contamination --------------------------- */
  {
    id: "ems-25",
    topic: "ems",
    alsoTopics: ["multiple-patients"],
    title: "A call from a downtown festival site",
    stem:
      "You are the emergency physician in charge at an Ottawa tertiary care hospital at 1310 on a summer holiday. EMS command calls. A small explosion at a downtown festival site has injured about 25 people. Hazardous materials crews have detected radioactive contamination at the scene and suspect a device built to spread radioactive material. The most seriously injured patient is a 35-year-old man with a penetrating wound to the left neck and ongoing bleeding despite direct pressure. He is confused. His vital signs are below. Command asks whether he must be decontaminated before transport.",
    vitals: { pulse: "134/minute", resp: "28/minute", bp: "86/50 mmHg", o2sat: "93% on non-rebreather mask", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction for this man before transport?",
        options: ["Full decontamination before he leaves", "Give potassium iodide before transport", "Hold him until a radiation survey is done", "Remove clothing and transport at once", "Transport directly without undressing"],
        correct: 3,
        explanation:
          "He is in hemorrhagic shock from a neck wound, and life-saving care comes before formal decontamination. Removing his clothing takes away up to about 90% of external contamination in seconds, so it is done and transport follows. Full decontamination or a radiation survey at the scene would delay surgery for a man with a BP of 86/50 mmHg. Leaving his clothing on carries avoidable contamination into the hospital. Potassium iodide protects the thyroid after radioactive iodine intake and does nothing for his injury.",
        keyFeature: { topic: "ems", n: 4 },
        source: "remm-contam",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes the risk this contaminated patient poses to your resuscitation staff?",
        options: ["High enough to need lead aprons", "Low with gown, gloves and mask", "Moderate until staff take iodide", "Negligible, so no protective gear", "Requires treating him outdoors"],
        correct: 1,
        explanation:
          "Secondary contamination of staff has rarely caused significant medical harm in past radiation events, so barrier protection of gown, gloves, mask and cap, with a personal dosimeter to track dose, lets staff resuscitate him safely. Lead aprons of the kind used in diagnostic radiology do not shield against high-energy penetrating radiation and are cumbersome. Potassium iodide protects only the thyroid against radioactive iodine and is not a staff protective measure here. Some protective gear is still needed to limit spread of contamination. Treating a man in shock outdoors would delay his care without benefit to staff.",
        keyFeature: { topic: "ems", n: 4 },
        source: "remm-ppe",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following hospital measures is most appropriate before the first contaminated patients arrive?",
        options: ["Close the hospital to all ambulances", "Evacuate the emergency department", "Hold him in the ambulance until surveyed", "Send him to a radiation-only centre", "Separate entrance with a control line"],
        correct: 4,
        explanation:
          "Directing incoming ambulances to a designated entrance with a control line keeps contaminated patients and equipment apart from the rest of the department while care goes on. Closing the hospital or evacuating the department removes the trauma care these patients need. Holding a man in shock in the ambulance for a survey delays surgery. There is no separate radiation centre that treats penetrating trauma, so he must come to a trauma hospital.",
        keyFeature: { topic: "ems", n: 4 },
        source: "remm-hospital",
      },
    ],
    sources: [S.remmContam, S.remmPpe, S.remmHospital],
    ...META,
  },

  /* 26 Derailment with a trapped passenger ------------------------------ */
  {
    id: "ems-26",
    topic: "ems",
    alsoTopics: ["multiple-patients", "multiple-trauma"],
    title: "A call from a rural derailment",
    stem:
      "You are working in a regional hospital emergency department in Saskatchewan. At 1015 the EMS incident commander calls about a passenger train derailment 30 minutes away that happened at 0815. Two coaches rolled onto their sides and about 60 passengers are involved. Crews are using SALT triage. The commander asks for guidance about a 42-year-old woman whose legs have been pinned under a collapsed seat frame since the derailment. Rescuers expect to free her in 30 minutes. Both legs are swollen and she cannot move her feet. An advanced care paramedic has started an IV. She is pale and answers questions.",
    vitals: { pulse: "118/minute", resp: "22/minute", bp: "108/70 mmHg", o2sat: "97% on room air", weight: "65 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction for her before she is freed?",
        options: ["Bilateral thigh tourniquets now", "Furosemide 40 mg IV now", "Hold fluids until she is freed", "Isotonic saline infusion now", "Mannitol infusion now"],
        correct: 3,
        explanation:
          "Release of limbs crushed for about 2 hours can flood the circulation with potassium, myoglobin and acid, so the international crush recommendations advise starting fluid before extrication, while she is still trapped, and avoiding potassium-containing solutions. Isotonic saline meets both aims, at about 1 L/hour in an adult, reduced to about 500 mL/hour if extrication takes more than 2 hours. Holding fluid until she is free lets hypovolemia and hyperkalemia strike at the moment of release. Tourniquets are for life-threatening bleeding, which she does not have, and are not used to prevent reperfusion injury. Furosemide does nothing for the volume deficit that drives kidney injury. Mannitol is considered only after extrication, once volume is restored and urine is flowing.",
        keyFeature: { topic: "ems", n: 1 },
        source: "crush-ndt",
      },
      {
        id: "q2",
        kind: "single",
        update: "Passengers of all ages, injured and uninjured, are spread along the embankment beside the two coaches. The commander asks how the first crews should choose whom to assess first.",
        prompt: "Which of the following groups does SALT direct crews to assess individually first after the global sort?",
        options: ["Adults aged 65 years or older", "Children under 8 years of age", "Those able to walk to a set area", "Those still or with a clear life threat", "Those waving or moving purposefully"],
        correct: 3,
        explanation:
          "SALT begins with a global sort by voice. Passengers who can walk are asked to go to a designated area, and the rest are asked to wave or are watched for purposeful movement. Those who stay still and those with an obvious life threat, such as major bleeding, are assessed individually first, because they are the most likely to need a life-saving intervention. Those who wave come next. The walkers are assessed last, but they are still assessed, because walking does not exclude serious injury. SALT sorts every age group by the same commands, so neither older adults nor young children are taken first because of age alone.",
        keyFeature: { topic: "ems", n: 4 },
        source: "salt",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is freed and arrives at 1130 with a saline infusion running. The paramedic begins the handover.",
        prompt: "Which of the following handover details most shapes your early management of her?",
        options: ["Hours she was trapped", "SALT category at scene", "Seat position in the coach", "Speed of the train", "Time of her last meal"],
        correct: 0,
        explanation:
          "Only the crew can report when she was actually freed, and so how long her legs were compressed. More than 2 hours of entrapment of both legs puts her at high risk of crush syndrome, with hyperkalemia, rhabdomyolysis and acute kidney injury after release. That time sets how closely you watch the ECG, potassium, creatine kinase and urine output, and how much fluid she needs. Her field SALT category is replaced by your own assessment at the door. The speed of the train and her seat position describe the mechanism but not her crush risk. The time of her last meal matters only for an anesthetic.",
        keyFeature: { topic: "ems", n: 2 },
        source: "crush-ndt",
      },
    ],
    sources: [S.crush, S.salt],
    ...META,
  },

  /* 27 Nerve agent release in a subway station ---------------------------- */
  {
    id: "ems-27",
    topic: "ems",
    alsoTopics: ["tox", "multiple-patients"],
    title: "A call from a house party",
    stem: "You are working in an Ontario emergency department that takes base hospital calls. At 0140 an advanced care paramedic supervisor patches from a house party 6 minutes away. Eleven young adults became unwell after snorting a white powder sold as cocaine. Four are unresponsive with pinpoint pupils, each breathing 2 to 6 times a minute. Three more are drowsy but rousable, breathing 10 to 12 times a minute with oxygen saturations of 95% to 97%. The rest are anxious but alert. Two paramedic crews and a fire truck are on scene, and two more crews are 10 minutes away. A firefighter says he touched powder on a table, feels dizzy and asks whether he needs hazmat decontamination.",
    vitals: {  },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following patients should the crews treat first under SALT mass casualty triage?",
        options: [
          "Alert man with chest tightness",
          "Drowsy woman breathing 12/minute",
          "Man with a pulse, breathing 4/minute",
          "Tense, alert woman with pulse 130/minute",
          "Vomiting man who is fully alert",
        ],
        correct: 2,
        explanation: "SALT directs crews to assess first those who are still or have an obvious life threat, and to begin with brief lifesaving interventions such as opening the airway. A man with a pulse breathing 4 times a minute does not obey commands and has failing breathing, so he is immediate and can be rescued with ventilation and an antidote. The tense woman with a pulse of 130/minute obeys commands, has a pulse and is not in respiratory distress, so she passes every SALT check, because SALT uses no heart rate cut-off. The drowsy woman is still breathing adequately, and alert patients who can speak and move are assessed last.",
        keyFeature: { topic: "ems", n: 4 },
        source: "salt",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction for the three drowsy patients breathing 10 to 12 times a minute?",
        options: [
          "Buprenorphine-naloxone 16 mg SL each",
          "Monitor, naloxone if rate below 10",
          "Naloxone 0.4 mg IM each now",
          "Naloxone 2 mg IN each now",
          "Release them to friends at the scene",
        ],
        correct: 1,
        explanation: "The Ontario opioid toxicity directive gives naloxone for altered consciousness with a respiratory rate below 10/minute, or when ventilation is inadequate or needs ongoing assistance. These three breathe 10 to 12 times a minute with saturations of 95% or more, so they meet neither condition and need close watching, with naloxone if the rate falls below 10. Naloxone given now, by any route, goes beyond the directive and can provoke withdrawal and combative behaviour. Buprenorphine-naloxone is only for withdrawal after naloxone, with a COWS score of 8 or more. Drowsy patients who took an unknown potent powder cannot be released at the scene, because their sedation may deepen.",
        keyFeature: { topic: "ems", n: 4 },
        source: "als-pcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "The firefighter is alert and talking. His respiratory rate is 16/minute, his pupils are normal and his oxygen saturation is 98%.",
        prompt: "Which of the following is the most appropriate direction for the firefighter who touched the powder?",
        options: [
          "Alcohol gel on his hands, then work",
          "Full hazmat decontamination shower",
          "Naloxone 0.4 mg IM as a precaution",
          "Transport him as a priority patient",
          "Wash skin with water and observe",
        ],
        correct: 4,
        explanation: "The ACMT and AACT position statement says incidental skin contact is very unlikely to cause opioid toxicity, and that skin should be washed with water right away. Alcohol-based hand sanitizers should not be used, because they do not remove the drug and may increase absorption. Naloxone is for objective signs of hypoventilation, not dizziness or anxiety, and he is breathing normally. A hazmat shower and priority transport would pull resources from patients who are barely breathing. Nitrile gloves protect responders during routine handling.",
        keyFeature: { topic: "ems", n: 4 },
        source: "acmt-fentanyl",
      },
      {
        id: "q4",
        kind: "single",
        update: "One man is still breathing only 2 times a minute, with a pulse, after three intranasal doses of naloxone. He is being ventilated with a bag-valve mask.",
        prompt: "Which of the following is the most appropriate direction to the crew for this man?",
        options: [
          "Flumazenil 0.2 mg IV now",
          "Rapid transport without bagging",
          "Stop bagging and reassess later",
          "Tag as expectant and move on",
          "Ventilate and authorize more naloxone",
        ],
        correct: 4,
        explanation: "The directive allows three doses of naloxone and advises a patch for further doses when there is no response, with continued airway management. A very potent opioid in the powder may need more naloxone than usual. If there is still no response, glucose should be checked. He has a pulse and can be kept alive with ventilation, so he is not expectant. Stopping ventilation or transporting without it would let him become hypoxic. Flumazenil is not part of the directive and can provoke seizures when other drugs are involved.",
        keyFeature: { topic: "ems", n: 4 },
        source: "als-pcs",
      },
    ],
    sources: [S.salt, S.alsPcs, S.acmt],
    ...META,
    version: 2,
  },

  /* 28 Ventilated septic patient for land transfer ------------------------ */
  {
    id: "ems-28",
    topic: "ems",
    alsoTopics: ["shock", "infectious-diseases"],
    title: "A foggy night and a ventilated patient",
    stem:
      "You are working in a rural Ontario hospital emergency department. A 63-year-old woman with 3 days of fever and cough is in septic shock from pneumonia. You intubated her 40 minutes ago for hypoxia. She has received 30 mL/kg of crystalloid and piperacillin-tazobactam. A norepinephrine infusion at 0.15 mcg/kg/minute runs through a secure 18 gauge IV in the left antecubital fossa, and propofol and fentanyl infusions provide sedation. The regional ICU, 2 hours away by land, has accepted her. The critical care air service cannot fly because of fog. The local paramedic service can send a primary care crew in 20 minutes.",
    vitals: { temperature: "38.9°C rectal", pulse: "112/minute", resp: "18/minute", bp: "96/58 mmHg", o2sat: "93% on FiO2 0.6 by ventilator", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate arrangement for her transfer to the ICU?",
        options: ["Advanced care crew without an escort", "Escort from your hospital with the crew", "Hold her until the fog lifts", "Primary care crew without an escort", "Private transfer vehicle with a nurse"],
        correct: 1,
        explanation:
          "A ventilated patient on vasopressor and sedative infusions needs care beyond the certification of primary and advanced care paramedics, so the Ontario transport standard requires the crew to ask the sending hospital for a medically responsible escort, such as a nurse and respiratory therapist or a physician. A primary or advanced care crew alone could not titrate norepinephrine or manage the ventilator. Waiting for the fog leaves her in a hospital without an ICU for an unknown time. A non-ambulance vehicle lacks the equipment and crew for a critically ill patient.",
        keyFeature: { topic: "ems", n: 3 },
        source: "bls-pcs",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following should be completed before she leaves your department?",
        options: ["Chest radiograph for tube position", "Extubation to BiPAP for the trip", "Hold norepinephrine during the move", "Lower FiO2 to 0.3 to save oxygen", "Second secure IV access", "Stop sedation for a neurological check", "Waveform capnography connected"],
        select: 3,
        correct: [0, 4, 6],
        explanation:
          "Transport guidelines call for a secure, confirmed airway, reliable vascular access and continuous monitoring before a critically ill patient leaves. A chest radiograph confirms tube depth, waveform capnography detects displacement at once during the moves, and a second IV protects the vasopressor line. Extubating a hypoxic patient in shock for a 2 hour trip invites a crash in the ambulance. Holding norepinephrine drops her pressure. Lowering FiO2 to 0.3 risks hypoxia when she needs 0.6. Stopping sedation risks agitation and tube dislodgement.",
        keyFeature: { topic: "ems", n: 3 },
        source: "warren-transport",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate preparation of her infusions for the 2 hour trip?",
        options: ["Battery pumps with spare infusions", "Change sedation to boluses", "Gravity drip for norepinephrine", "Mix new drugs on arrival at the ICU", "Pause infusions during the move"],
        correct: 0,
        explanation: "A 2 hour road trip can run long, so her norepinephrine, propofol and fentanyl should run on transport pumps with charged batteries, with spare prepared infusions to cover delays, because mixing new infusions in a moving ambulance is difficult and prone to error. A gravity drip cannot deliver a vasopressor dose reliably. Pausing the infusions during the move drops her pressure and lightens sedation when the tube is most at risk. Changing sedation to boluses swings her between awareness and hypotension. Waiting to mix new drugs at the ICU leaves her without them if the bags run out en route.",
        keyFeature: { topic: "ems", n: 3 },
        source: "warren-transport",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following items does the paramedic crew need from you before departure?",
        options: ["Blood culture results before leaving", "Consent form signed by her husband", "Her photo identification card", "Orders and accepting physician's name", "Repeat lactate before departure"],
        correct: 3,
        explanation:
          "For an interfacility transfer the Ontario standard asks the crew to obtain the sending physician's name and orders, the transfer papers and the names of the receiving facility and physician, so that care en route and at arrival has a clear line of responsibility. Blood culture results take a day or more and must not delay transfer. A repeat lactate can be sent to the receiving ICU. Consent is not a condition of emergency transfer for an incapable patient. Identification is helpful but is not what the crew needs to deliver care.",
        keyFeature: { topic: "ems", n: 3 },
        source: "bls-pcs",
      },
    ],
    sources: [S.blsPcs, S.warren],
    ...META,
  },

  /* 29 Newborn encephalopathy awaiting transport -------------------------- */
  {
    id: "ems-29",
    topic: "ems",
    title: "A newborn awaiting the transport team",
    stem:
      "You are working in a community hospital with no neonatal intensive care unit. A male infant was born 90 minutes ago at 40 weeks after a prolonged second stage and a shoulder dystocia. He needed 12 minutes of positive pressure ventilation. Apgar scores were 1, 3 and 5 at 1, 5 and 10 minutes. Cord arterial pH was 6.92 with a base deficit of 17 mmol/L. He is now lethargic with hypotonia, a weak suck and an incomplete Moro reflex. He breathes on his own in room air under a radiant warmer. The neonatal transport team is 3 hours away, and the neonatologist is on the phone.",
    vitals: { temperature: "37.2°C rectal", pulse: "150/minute", resp: "44/minute", o2sat: "96% on room air", weight: "3.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate temperature management while awaiting the transport team?",
        options: ["Active cooling with ice packs", "Keep the warmer set to 37°C", "Rewarm to 37.5°C with a warm blanket", "Turn off the warmer and remove his hat", "Wait until the team arrives to act"],
        correct: 3,
        explanation:
          "He meets the criteria for therapeutic hypothermia: 40 weeks, under 6 hours old, cord pH 6.92 with base deficit 17, and moderate encephalopathy with abnormal consciousness, tone and primitive reflexes. The Canadian Paediatric Society advises community centres to start passive cooling promptly, in consultation with the neonatologist, by removing the hat and blankets and turning off the warmer. Ice packs used by untrained staff can cause severe hypothermia. Keeping him warm or rewarming him forgoes neuroprotection. Waiting 3 hours for the team wastes half the treatment window.",
        keyFeature: { topic: "ems", n: 3 },
        source: "cps-hie",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following temperature targets and monitoring should you use while he is passively cooled?",
        options: ["Axillary 35 to 36°C, checked hourly", "Rectal 33 to 34°C, checked every 15 minutes", "Rectal 30 to 32°C, checked every 30 minutes", "Skin 36.5°C by warmer probe", "Tympanic 34 to 35°C, checked hourly"],
        correct: 1,
        explanation:
          "Cooling aims for a core temperature of 33 to 34°C, and during passive cooling the rectal temperature, or axillary if rectal is not possible, is checked every 15 minutes to keep it above 33°C. A target of 30 to 32°C is below the therapeutic range and risks arrhythmia and coagulopathy. Hourly checks miss overcooling. Targets of 34 to 35°C and 35 to 36°C give too little cooling to protect the brain. A servo skin temperature of 36.5°C describes normothermia, and tympanic readings are not used in newborns.",
        keyFeature: { topic: "ems", n: 3 },
        source: "cps-hie",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following should be in place before the neonatal transport team arrives?",
        options: ["D10W infusion IV", "Frequent glucose monitoring", "Observation for seizures", "Oral feeds by bottle", "Prophylactic phenobarbital IV", "Sodium bicarbonate for the acidosis", "Warm blankets and a hat"],
        select: 3,
        correct: [0, 1, 2],
        explanation:
          "The CPS statement names normal serum glucose as an important adjunct in encephalopathy, so he needs an IV D10W infusion with frequent glucose checks. Seizures are common after asphyxia and antiepileptics are used when clinical or electrographic seizures are present, so he needs close observation. The statement cautions against antiepileptics without seizures because of their neurotoxicity, so prophylactic phenobarbital is not given. An encephalopathic newborn with a weak suck should not bottle feed because of aspiration risk. Bicarbonate to correct the acidosis is not among the supportive measures the statement lists, and it adds a sodium and osmolar load. Warm blankets and a hat would undo passive cooling.",
        keyFeature: { topic: "ems", n: 3 },
        source: "cps-hie",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the latest age by which therapeutic hypothermia should start for him to benefit?",
        options: ["2 hours", "4 hours", "6 hours", "12 hours", "24 hours"],
        correct: 2,
        explanation:
          "Cooling is offered to infants of 36 weeks or more with moderate to severe encephalopathy who are 6 hours old or younger, since the trials that showed benefit started within that window. He is 90 minutes old, so passive cooling now keeps him within it even with a 3 hour wait for the team. Two and 4 hours are stricter than the evidence requires and would exclude infants who still benefit. Twelve and 24 hours lie beyond the window in which benefit has been shown.",
        keyFeature: { topic: "ems", n: 3 },
        source: "cps-hie",
      },
    ],
    sources: [S.cpsHie],
    ...META,
  },

  /* 30 Aortic dissection for transfer ------------------------------------- */
  {
    id: "ems-30",
    topic: "ems",
    alsoTopics: ["chest-pain"],
    title: "Tearing pain far from a surgeon",
    stem:
      "You are working in a community hospital emergency department 90 minutes by land from the nearest cardiac surgery centre. A 64-year-old man had sudden tearing chest pain radiating to his back 2 hours ago. CT angiography shows a Stanford type A dissection from the aortic root to the arch. Bedside ultrasound shows no pericardial effusion. He takes amlodipine for hypertension. The cardiac surgeon has accepted him and asks that his heart rate and BP be managed to the 2022 ACC/AHA aortic disease guideline targets. A critical care land transport crew can leave in 30 minutes. He still rates his pain 8 out of 10.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "20/minute", bp: "182/98 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "An esmolol infusion is started. Twenty minutes later his pulse is 72/minute and his BP is 164/92 mmHg.",
        prompt: "Which of the following medications should be added before he departs for surgery?",
        options: ["enalaprilat 1.25 mg IV over 5 minutes", "hydralazine 10 mg IV", "nitroprusside 0.3 mcg/kg/minute IV", "phentolamine 5 mg IV", "verapamil 5 mg IV over 2 minutes"],
        correct: 2,
        explanation: "Esmolol has brought his pulse into the ACC/AHA range of 60 to 80/minute, but his systolic pressure of 164 mmHg is still above the target below 120 mmHg, so a titratable IV vasodilator is added now that the heart rate is controlled. Nitroprusside acts within minutes and can be turned down at once if his pressure falls in the ambulance. Hydralazine and enalaprilat act for hours and cannot be titrated. Phentolamine is a bolus alpha blocker for catecholamine excess and gives an abrupt, unsteady fall in pressure. Verapamil added to esmolol risks bradycardia and heart block.",
        keyFeature: { topic: "ems", n: 3 },
        source: "acc-aha-aorta",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following targets should be reached before departure and maintained during the transfer?",
        options: ["Pulse below 50, systolic below 90 mmHg", "Pulse 60 to 80, systolic below 120 mmHg", "Pulse 80 to 100, systolic below 140 mmHg", "Pulse 60 to 80, systolic 140 to 160 mmHg", "Pulse under 100, MAP above 65 mmHg"],
        correct: 1,
        explanation:
          "The 2022 ACC/AHA guideline advises lowering systolic pressure below 120 mmHg, or to the lowest level that keeps end organs perfused, with a heart rate of 60 to 80/minute. A systolic of 140 to 160 mmHg or below 140 mmHg leaves too much wall stress, and a pulse of 80 to 100/minute is faster than the guideline range. A pulse below 50 with a systolic below 90 mmHg risks cerebral, renal and spinal hypoperfusion. A mean pressure above 65 mmHg is a septic shock goal and would accept pressures that extend the dissection.",
        keyFeature: { topic: "ems", n: 3 },
        source: "acc-aha-aorta",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his ongoing pain before departure?",
        options: ["fentanyl 50 mcg IV", "heparin 5000 units IV", "ketamine 25 mg IV", "ketorolac 15 mg IV", "naproxen 500 mg PO"],
        correct: 0,
        explanation:
          "Pain drives catecholamine release, raising heart rate and blood pressure, so opioid analgesia such as fentanyl is part of controlling the forces on the aorta. Ketamine raises heart rate and blood pressure and works against that aim. Ketorolac and naproxen impair platelets in a man who may go straight to the operating room, and heparin adds bleeding risk into a dissected aorta and the pericardium.",
        keyFeature: { topic: "ems", n: 3 },
        source: "acc-aha-aorta",
      },
    ],
    sources: [S.aorta],
    ...META,
  },

  /* 31 Child with adrenal insufficiency and vomiting ---------------------- */
  {
    id: "ems-31",
    topic: "ems",
    alsoTopics: ["shock"],
    title: "Patch about a vomiting child with a kit",
    stem:
      "You are working in an Ontario emergency department that also takes base hospital calls. A primary care paramedic crew patches from a home 25 minutes from your hospital. A 6-year-old girl with congenital adrenal hyperplasia has had vomiting and diarrhea since this morning and is now drowsy. She takes hydrocortisone and fludrocortisone by mouth but vomited her last two doses. Her mother hands the crew a vial of hydrocortisone sodium succinate 100 mg from the child's emergency kit. The crew's glucose reading is 3.4 mmol/L. She is pale and cool, with a capillary refill of 4 seconds.",
    vitals: { temperature: "37.9°C tympanic", pulse: "142/minute", resp: "26/minute", bp: "78/44 mmHg", o2sat: "97% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following hydrocortisone doses does the Ontario adrenal crisis directive allow the crew to give now?",
        options: ["hydrocortisone 40 mg IM", "hydrocortisone 60 mg IM", "hydrocortisone 80 mg IM", "hydrocortisone 100 mg IM", "No hydrocortisone before hospital"],
        correct: 0,
        explanation:
          "The Ontario adrenal crisis directive gives hydrocortisone 2 mg/kg IM to a maximum of 100 mg, rounded to the nearest 10 mg. For 21 kg that is 42 mg, which rounds to 40 mg. Doses of 60 and 80 mg are about 3 and 4 mg/kg, beyond the directive. The 100 mg dose is the maximum single dose and is reached only at 50 kg. Holding the drug until hospital leaves a hypotensive, drowsy child without the one treatment that reverses adrenal crisis for another 25 minutes.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is a required condition before the crew may give hydrocortisone under the Ontario directive?",
        options: ["A base hospital patch for approval", "Blood pressure below 70 mmHg", "Confirmed fever of 38°C or more", "Glucose below 3 mmol/L", "Her own vial presented to the crew"],
        correct: 4,
        explanation:
          "The directive applies to a patient with primary adrenal failure when the paramedics are presented with a vial of hydrocortisone for that patient, plus any one sign of crisis. Her vomiting, drowsiness, tachycardia and low blood pressure each qualify, as does her glucose of 3.4 mmol/L, since the directive defines hypoglycemia from age 2 as below 4.0 mmol/L, so no single threshold of blood pressure, glucose or temperature must be met. A fever of 38°C or more is one of the qualifying signs, not a requirement. The directive has no mandatory patch point, although a patch like this one is reasonable when a crew is unsure.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "She arrives 25 minutes later. She is more alert, and her BP is 90/56 mmHg. The paramedic begins the handover.",
        prompt: "Which of the following handover details is most important to confirm before your team gives further steroid?",
        options: ["Allergies listed on her kit", "Current blood pressure reading", "Current capillary glucose", "Name of her endocrinologist", "Time and dose of the hydrocortisone"],
        correct: 4,
        explanation:
          "Only the crew knows exactly what dose they gave and when, and that decides whether and when her next parenteral dose is due, avoiding both a gap and an unplanned double dose. Her current blood pressure and glucose are measured by your team at the bedside. Her mother can name the endocrinologist and her allergies, and the kit label is in the room. A structured handover puts treatments given and their timing ahead of details others can supply.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
    ],
    sources: [S.alsPcs, S.iedema],
    ...META,
  },

  /* 32 Paramedic buprenorphine after naloxone ----------------------------- */
  {
    id: "ems-32",
    topic: "ems",
    alsoTopics: ["tox"],
    title: "A young man who feels better after the ambulance",
    stem:
      "A 29-year-old man is brought to an Ontario emergency department by a primary care paramedic crew. His roommate found him unresponsive with slow breathing 70 minutes ago. The crew found a respiratory rate of 6/minute and gave naloxone 0.4 mg IM twice, 5 minutes apart, with return of normal breathing. Twenty minutes later he was sweating, yawning, vomiting and restless, with a Clinical Opiate Withdrawal Scale score of 14. He agreed to treatment, and the crew gave buprenorphine and naloxone 16 mg SL under their medical directive. He now feels much better. He uses fentanyl bought on the street most days.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "128/80 mmHg", o2sat: "97% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following handover details matters most for the safety of the buprenorphine he received?",
        options: ["Methadone taken in the past 72 hours", "Number of naloxone doses given", "Past use of buprenorphine", "Route by which he used fentanyl", "Street source of his fentanyl"],
        correct: 0,
        explanation:
          "Methadone taken in the past 72 hours is a listed contraindication to paramedic buprenorphine, alongside allergy, because methadone is long acting and buprenorphine can displace it and cause severe, prolonged withdrawal. You should confirm the crew asked about it. Naloxone for the current episode is a condition of the directive, but the number of doses does not change safety. Earlier buprenorphine use is not required. The route of fentanyl use and where he bought it do not alter the risk of the dose he received.",
        keyFeature: { topic: "ems", n: 2 },
        source: "als-pcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings would have excluded him from buprenorphine under the paramedic directive?",
        options: ["COWS score of 6 after naloxone", "Daily use of fentanyl", "Fentanyl use within the past 12 hours", "Seventeen years of age", "Two doses of naloxone needed"],
        correct: 0,
        explanation:
          "The directive requires age 16 or older, an unaltered level of awareness, naloxone for the current episode and a Clinical Opiate Withdrawal Scale score of 8 or more. A score of 6 is mild withdrawal below that threshold. A 17-year-old meets the age condition. Two doses of naloxone is within the directive. Daily fentanyl use and recent use are not contraindications, because the naloxone has already displaced the opioid and produced withdrawal, which is the state in which buprenorphine can be started.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "Later, another crew patches about a 34-year-old woman revived with naloxone who now has a withdrawal score of 11. She takes methadone 80 mg daily from a clinic and took this morning's dose.",
        prompt: "Which of the following is the most appropriate direction to that crew?",
        options: ["buprenorphine and naloxone 16 mg SL", "buprenorphine and naloxone 8 mg SL", "naloxone 0.4 mg IM repeated", "Supportive care and transport", "No transport, release on scene"],
        correct: 3,
        explanation:
          "Her methadone dose this morning is a contraindication to buprenorphine at any dose, so she needs supportive care and transport. Methadone acts far longer than naloxone, so she is at risk of renewed respiratory depression once the naloxone wears off, which makes release on scene unsafe. More naloxone would deepen her withdrawal while she is breathing adequately. Her clinic can be contacted about her dosing once she is in hospital.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
    ],
    sources: [S.alsPcs],
    ...META,
  },

  /* 33 Motorcycle rider with a change en route ---------------------------- */
  {
    id: "ems-33",
    topic: "ems",
    alsoTopics: ["multiple-trauma"],
    title: "Handover after a rural motorcycle crash",
    stem:
      "A 24-year-old man is brought to the emergency department by an advanced care paramedic crew 35 minutes after a motorcycle crash on a rural road. As he moves to the stretcher, the paramedic reports that he struck a guardrail at about 80 km/h and was thrown about 10 metres. His helmet has a deep crack over the left side. At the scene he was talking, with a GCS of 14. He received fentanyl 100 mcg IV en route for a deformed left thigh. The crew saw no seizure. He now opens his eyes to pain, says inappropriate words and localizes pain, for a GCS of 10. His left pupil is 5 mm and sluggish, and the right is 3 mm and brisk. Glucose is 6.1 mmol/L.",
    vitals: { pulse: "58/minute", resp: "12/minute", bp: "172/94 mmHg", o2sat: "95% on non-rebreather mask", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following handover details most changes your immediate priorities for this patient?",
        options: ["Crack in the left side of the helmet", "Fentanyl 100 mcg IV for thigh pain", "GCS falling from 14 to 10 en route", "Speed of about 80 km/h at impact", "Thrown about 10 metres"],
        correct: 2,
        explanation:
          "A fall in GCS from 14 to 10 after a period of talking, now with a unilateral dilated pupil, marks an expanding intracranial lesion, and it moves airway control, neurosurgical notification and immediate CT to the front of the plan. Only the crew witnessed his level at the scene. The speed, the distance thrown and the cracked helmet raise suspicion of head injury but do not show that he is deteriorating. The fentanyl dose matters for interpretation but does not set the priorities.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains his change in level of consciousness since the scene?",
        options: ["Delayed effect of the fentanyl", "Hemorrhagic shock from the femur", "Hypoglycemia after the crash", "Intracranial hematoma expanding", "Postictal state after a seizure"],
        correct: 3,
        explanation:
          "Talking at the scene, then declining, with a dilated sluggish left pupil and a pulse of 58/minute with BP 172/94 mmHg, fits an expanding hematoma raising intracranial pressure. An opioid causes symmetric small pupils and would not produce a unilateral dilated pupil or hypertension. Hemorrhagic shock would lower his blood pressure and raise his pulse. His glucose is 6.1 mmol/L. The crew saw no seizure, and a postictal state would not explain the pupil and the pressure response.",
        keyFeature: { topic: "ems", n: 2 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following further details should you ask the crew for before they leave?",
        options: ["Current blood pressure", "Current femur alignment", "Current oxygen saturation", "Current pupil size", "Pupil size at the scene"],
        correct: 4,
        explanation:
          "Only the crew saw his pupils at the scene. If they were equal then, the new asymmetry dates the deterioration to the last 35 minutes and supports an urgent operation. His current blood pressure, oxygen saturation, pupils and femur are all in front of your team. Handover time is best spent on what only the paramedics witnessed, such as the scene findings, treatments given and changes en route.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
    ],
    sources: [S.iedema, S.atls],
    ...META,
  },

  /* 34 Infant in arrest, call ahead --------------------------------------- */
  {
    id: "ems-34",
    topic: "ems",
    title: "An early morning call ahead about an infant",
    stem:
      "You are working in an Ontario community hospital emergency department. At 0540 a primary care paramedic crew calls ahead. They are 8 minutes away with a 9-month-old boy whom his mother found not breathing in his crib 20 minutes ago. He was well at his 0200 feed. The crew found him pulseless and apneic in asystole and has given CPR with bag-valve-mask ventilation since. The AED has advised no shock and there has been no return of circulation. They estimate his weight at 9 kg. His father is following by car.",
    vitals: { weight: "9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The paramedic asks whether they could have stopped resuscitation at the home under their medical termination directive.",
        prompt: "Which of the following best describes how that termination directive applies to this child?",
        options: ["Allowed after 20 minutes of CPR", "Allowed if the arrest was unwitnessed", "Allowed only with a parent's consent", "Allowed with a base physician patch", "Not applicable to patients under 16"],
        correct: 4,
        explanation:
          "The Ontario medical termination directive applies only to patients 16 years of age or older, so a 9-month-old in cardiac arrest is transported with resuscitation continuing unless he meets the criteria for obvious death. The 20 minute, unwitnessed and patch elements describe how the directive works for an adult and do not extend it to children. A parent's consent does not create authority to terminate that the directive does not give.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following should you have ready in the resuscitation bay before he arrives?",
        options: ["amiodarone 45 mg IV", "atropine 0.18 mg IV", "epinephrine 0.09 mg IV", "Intraosseous needle set", "Pediatric airway equipment", "sodium bicarbonate 9 mmol IV", "Transvenous pacing wire"],
        select: 3,
        correct: [2, 3, 4],
        explanation:
          "Asystole is treated with CPR and epinephrine 0.01 mg/kg, which is 0.09 mg for 9 kg, repeated every 3 to 5 minutes. Intraosseous access is often the quickest route in an infant in arrest when an IV is not rapidly obtained, and airway equipment sized for him must be laid out. Amiodarone 5 mg/kg is for shockable rhythms. Atropine does not treat asystole. Sodium bicarbonate is not given routinely in pediatric arrest. Transvenous pacing has no role in asystole.",
        keyFeature: { topic: "ems", n: 1 },
        source: "aha-pals-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "Later, a resident asks which findings allow Ontario paramedics to withhold resuscitation from a patient found without vital signs.",
        prompt: "Which of the following findings would have allowed the crew to withhold resuscitation at the home?",
        options: ["Apnea with fixed dilated pupils", "Asystole on the first rhythm check", "Cool skin on the hands and feet", "Fixed non-blanching dependent lividity", "No pulse for more than 10 minutes"],
        correct: 3,
        explanation:
          "The Ontario standard defines obvious death as absent vital signs together with a gross sign such as fixed, non-blanching dependent lividity or gross rigor mortis, or findings incompatible with life. Those signs take hours to develop and show that resuscitation cannot succeed. Fixed dilated pupils, asystole, cool extremities and 10 minutes without a pulse are all compatible with a recent arrest, so none of them allows the crew to withhold CPR.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bls-pcs",
      },
    ],
    sources: [S.alsPcs, S.pals, S.blsPcs],
    ...META,
  },

  /* 35 Crane collapse with a tourniquet ---------------------------------- */
  {
    id: "ems-35",
    topic: "ems",
    alsoTopics: ["multiple-patients", "multiple-trauma"],
    title: "The first ambulance from a street collapse",
    stem:
      "You are working in the emergency department of an Ontario lead trauma hospital. A construction crane collapsed onto a crowded downtown street 25 minutes away at 1350, and EMS has declared a multiple casualty incident. At 1500 the first ambulance arrives with a 45-year-old man with a near amputation of the left arm above the elbow. A tourniquet on the upper arm has stopped the bleeding. His triage tag is red. The primary care crew gave tranexamic acid 1 g IM at the scene under their auxiliary directive. He is pale and anxious and has no other obvious injury.",
    vitals: { pulse: "124/minute", resp: "24/minute", bp: "98/60 mmHg", o2sat: "96% on non-rebreather mask", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details must the crew hand over about the tourniquet?",
        options: ["Brand of tourniquet used", "Name of the person who applied it", "Number of turns of the windlass", "Pressure reading under the tourniquet", "Time the tourniquet was applied"],
        correct: 4,
        explanation:
          "The Ontario standard requires the time of tourniquet application to be documented and reported at transfer of care, and in a multiple casualty incident written on the patient and on the tourniquet. That time tells the surgeon how long the limb has been ischemic and sets his priority for the operating room. The brand, the number of windlass turns and who applied it do not change management. Field tourniquets are not fitted with a pressure gauge.",
        keyFeature: { topic: "ems", n: 2 },
        source: "bls-pcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings would have excluded him from paramedic tranexamic acid under the Ontario directive?",
        options: ["Heart rate of 118/minute", "Intramuscular route with no IV", "Systolic BP of 96 mmHg", "Time from injury over 3 hours", "Tourniquet controlling the bleeding"],
        correct: 3,
        explanation:
          "The directive excludes patients more than 3 hours from injury, or with an unknown injury time, reflecting CRASH-2, in which tranexamic acid given after 3 hours appeared to increase death from bleeding. A heart rate of 110/minute or more or hypotension is the condition for giving it, not a reason to withhold it. The IM route is allowed for a crew without IV authorization. A tourniquet controlling the limb does not stop ongoing blood loss or shock, and he remains tachycardic.",
        keyFeature: { topic: "ems", n: 4 },
        source: "crash2-timing",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate tranexamic acid plan now that he is in your department?",
        options: ["tranexamic acid 1 g IM now", "tranexamic acid 1 g IV over 8 hours", "tranexamic acid 1 g IV over 10 minutes", "tranexamic acid 2 g IV over 10 minutes", "No further tranexamic acid"],
        correct: 1,
        explanation:
          "The field dose of 1 g counts as the first dose of the standard regimen. In a large prehospital trial, 1 g IV before hospital was followed by 1 g IV over 8 hours after arrival. He is 70 minutes from injury, with a pulse of 124/minute and BP of 98/60 mmHg, so the 8 hour infusion should follow. Another 1 g or a 2 g bolus repeats the first dose, and a further IM dose is not needed once he has IV access. Stopping after the field dose leaves the regimen incomplete while he remains in shock.",
        keyFeature: { topic: "ems", n: 4 },
        source: "patch-trauma",
      },
    ],
    sources: [S.blsPcs, S.crash2, S.patchTrauma],
    ...META,
    version: 2,
  },

  /* 36 Dialysis patient with a wide complex bradycardia ------------------- */
  {
    id: "ems-36",
    topic: "ems",
    alsoTopics: ["seizures"],
    title: "A patch from a shopping mall",
    stem: "You are working in an Ontario emergency department that also takes base hospital calls. An advanced care paramedic crew patches from a shopping mall. A 34-year-old woman with epilepsy had a generalized convulsion lasting about 90 seconds while waiting in line. It stopped before the crew arrived, and she has had no medication. She is now alert, oriented and back to her usual self. She takes lamotrigine and has not missed doses. Her last seizure, 8 months ago, looked the same. She is 11 weeks pregnant. She has no injuries, no fever and no recent illness. Her vital signs and glucose are normal. Her roommate can stay with her tonight. She asks to go home, and the crew asks whether she meets the treat-and-discharge criteria.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute regular", resp: "16/minute", bp: "118/72 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features excludes her from paramedic treat and discharge under the Ontario seizure directive?",
        options: [
          "Her age of 34 years",
          "Last seizure 8 months ago",
          "Pregnancy at 11 weeks",
          "Roommate staying overnight",
          "Seizure lasting 90 seconds",
        ],
        correct: 2,
        explanation: "The Ontario seizure directive allows treat and discharge only when every criterion is met, and one criterion is that the patient is not pregnant. She otherwise qualifies: she is between 18 and 65, has known epilepsy, takes her medication, had a single seizure like her usual ones, is back to normal with normal vital signs, received no midazolam and has no injury. A responsible adult staying for 4 hours is a requirement that her roommate meets. A 90-second seizure matching her usual pattern does not exclude her.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew about this patient now?",
        options: [
          "Arrange a clinic visit tomorrow",
          "Discharge her with her roommate",
          "Give midazolam 10 mg IM first",
          "Recommend transport for assessment",
          "Transport only if she seizes again",
        ],
        correct: 3,
        explanation: "Because she is pregnant, the crew cannot use the treat-and-discharge pathway, so the direction is to recommend transport for assessment and explain why. Discharging her with her roommate, or arranging a clinic visit instead, would apply a pathway she does not meet. Midazolam is indicated only for an active generalized motor seizure. Waiting for another seizure before transport ignores the directive's exclusion.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "While the crew is still with her, she has a second generalized convulsion that has lasted 3 minutes. The crew has IV access.",
        prompt: "Which of the following midazolam doses should the crew give her now under the Ontario directive?",
        options: [
          "midazolam 14 mg IM",
          "midazolam 2 mg IV",
          "midazolam 5 mg IV",
          "midazolam 7 mg IV",
          "midazolam 10 mg IV",
        ],
        correct: 2,
        explanation: "The directive gives midazolam 0.1 mg/kg IV to a maximum single dose of 5 mg, repeated once after 5 minutes if needed. At 70 kg, 0.1 x 70 = 7 mg, which is capped at 5 mg. The IM dose is 0.2 mg/kg to a maximum of 10 mg, so 14 mg IM exceeds the cap. A dose of 10 mg IV is the IM maximum given by the wrong route, and 2 mg IV is below the directive dose.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q4",
        kind: "single",
        update: "The crew arrives. She is drowsy but breathing well. The paramedic begins the handover.",
        prompt: "Which of the following handover details is most important for your team's next decisions about her?",
        options: [
          "Current capillary glucose",
          "Her current level of alertness",
          "Her roommate's phone number",
          "Her usual lamotrigine dose",
          "Seizure length and midazolam time",
        ],
        correct: 4,
        explanation: "A structured handover covers the treatments given and the response. How long the second seizure lasted and when midazolam was given are known only to the crew, and they tell your team whether another benzodiazepine dose is due and when to move to a second-line drug if she seizes again. Her glucose and alertness can be checked on arrival. Her lamotrigine dose and her roommate's number can come from her or her bottles later.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
    ],
    sources: [S.alsPcs, S.iedema],
    ...META,
    version: 2,
  },
];
