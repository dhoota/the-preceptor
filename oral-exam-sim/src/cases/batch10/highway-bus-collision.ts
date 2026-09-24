// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const highwayBusCollision: OralCase = {
  id: "highway-bus-collision",
  title: "A call from the highway on a winter afternoon",
  blueprint: "systems",
  alsoCovers: ["trauma", "peds"],
  priorityTopic: "multiple-patients",
  keyFeatures: [{ topic: "multiple-patients", n: 1 }, { topic: "multiple-patients", n: 3 }, { topic: "multiple-patients", n: 4 }, { topic: "multiple-trauma", n: 1 }, { topic: "multiple-trauma", n: 2 }],
  summary: "Paramedics warn of many injured adults and children heading to a regional hospital that is not a trauma centre.",
  durationMinutes: 15,
  stem:
    "You are the emergency physician in charge at a 300 bed regional hospital in central Ontario on a Friday in February. It is 15:20. " +
    "The hospital has general surgery, orthopedics and anesthesia on call in house, two operating rooms running elective lists, one CT scanner and no pediatric intensive care. " +
    "The nearest lead trauma hospital with pediatric trauma care is 110 km away. " +
    "The paramedic supervisor calls the department directly: 'A coach bus carrying a school ski club has collided with a transport truck on the highway, 25 minutes from you. " +
    "Incident command is set up on scene. We estimate 30 or more patients, about half of them children. First ambulances will reach you in 20 minutes. You are the closest hospital.' " +
    "The charge nurse is standing beside you, waiting.",
  findings: [
    {
      id: "board",
      label: "Department board",
      result:
        "22 of 30 stretchers occupied. 3 admitted patients waiting for inpatient beds. 4 patients awaiting results who could likely go home. 18 people in the waiting room, none CTAS 1 or 2. " +
        "Resuscitation bays: 2 of 3 free.",
    },
    {
      id: "staffing",
      label: "Staffing",
      result:
        "2 emergency physicians on until 18:00, a third on call from home. 9 emergency nurses, 1 respiratory therapist. " +
        "In house: general surgeon, orthopedic surgeon, anesthesiologist, a hospitalist and a pediatrician on call from home 15 minutes away.",
    },
    {
      id: "blood",
      label: "Blood bank",
      result: "8 units of O negative and 22 units of O positive red cells. 12 units of plasma. 4 adult doses of platelets. Massive hemorrhage protocol available.",
    },
    {
      id: "or-ct",
      label: "Operating rooms and CT",
      result:
        "Both operating rooms are mid case on elective lists that could finish in 20 to 40 minutes. CT is working with one technologist. A second technologist can be called in.",
    },
    {
      id: "peds",
      label: "Pediatric resources",
      result:
        "Two length based resuscitation tapes with colour coded equipment bags. Pediatric airway cart in resus. Pediatrician on call from home.",
    },
    {
      id: "code-orange",
      label: "Hospital emergency plan",
      result:
        "The Code Orange plan allows the emergency physician in charge to request activation through switchboard. " +
        "It opens a hospital command centre, calls in staff by fan out, and sets up red, yellow and green treatment zones. MCI tag numbers are pre registered in the chart system.",
    },
    {
      id: "scene-update",
      label: "Scene update at 15:35",
      result:
        "Incident command reports 31 patients. Field triage so far: 6 red, 9 yellow, 14 green, 2 deceased on scene. " +
        "A second hospital 60 km away will take 8 green patients. Most of the rest are coming to you.",
    },
    {
      id: "transport",
      label: "Transport availability",
      result:
        "One Ornge helicopter is available with a 40 minute return time. A second aircraft could come from further away. " +
        "All local land ambulances are committed to the scene for the next 90 minutes.",
    },
    {
      id: "families",
      label: "Families and media",
      result:
        "Parents have gathered at the school and several are driving to your hospital. Switchboard has already had 20 calls. A television crew is in the parking lot.",
    },
    {
      id: "boy-14",
      label: "14 year old boy from the main entrance",
      result:
        "Walked in with his friends. Now pale and quiet. Heart rate 142, blood pressure 84/50, respiratory rate 28. Seat belt bruise across the lower abdomen. Abdomen tender and guarded. FAST shows free fluid in the right upper quadrant and pelvis.",
    },
    {
      id: "girl-7",
      label: "7 year old girl in resus",
      result:
        "Responds only to pain. Right pupil 5 mm and sluggish. Heart rate 64, blood pressure 128/80, respiratory rate 12. Large scalp hematoma. SpO2 91 percent on a non rebreather.",
    },
    {
      id: "driver",
      label: "58 year old truck driver in resus",
      result:
        "Heart rate 124, blood pressure 102/68, respiratory rate 36, SpO2 86 percent. Absent breath sounds on the left. Chest wall crepitus. FAST shows no abdominal fluid.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "The call",
      text: "You have 20 minutes before the first ambulance. The department is busy but functioning.",
      next: "q-activate",
    },
    {
      kind: "question",
      id: "q-activate",
      phase: "The first decision",
      prompt: "What do you do in the next two minutes?",
      seconds: 60,
      modelAnswer: [
        "Declare this a mass casualty incident. Request Code Orange through switchboard now.",
        "Inform the administrator on call and the hospital command centre.",
        "Confirm the key facts back to the paramedic supervisor: number, types of injury, children, arrival times.",
        "Stay in the department as the medical lead. Do not go to the scene.",
      ],
      rubric: ["mc-l1"],
      choices: [
        {
          id: "c-code-orange",
          label: "I asked switchboard to call a Code Orange right away, informed the administrator on call and confirmed numbers and arrival times with the paramedic supervisor.",
          next: "q-prepare",
          quality: "strong",
          feedback:
            "Correct. Thirty patients with half of them children will exceed normal capacity. Early activation buys time to clear space and call people in. It is easier to stand down than to catch up.",
        },
        {
          id: "c-wait",
          label: "I waited to see the first few patients before deciding whether to activate the plan.",
          next: "s-late",
          quality: "partial",
          feedback:
            "The information you already have meets any activation threshold. Waiting loses the 20 minutes you need to open beds and bring in staff. The examiner wanted immediate activation.",
        },
        {
          id: "c-scene",
          label: "I told the charge nurse I would go to the scene to help triage.",
          next: "s-scene",
          quality: "unsafe",
          feedback:
            "The scene has incident command and paramedics. Your job is to prepare the receiving hospital. Leaving removes a physician and a leader from the place where the critically injured will arrive.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-late",
      phase: "Fifteen minutes later",
      text:
        "The first three ambulances arrive together. Two resus bays fill at once. No extra staff have been called and the operating rooms are still running elective cases. You ask switchboard to activate Code Orange now.",
      next: "q-prepare",
    },
    {
      kind: "say",
      id: "s-scene",
      phase: "A moment later",
      text:
        "The charge nurse stops you. 'Paramedics are running the scene. We need you here. Who is going to lead the department?' You stay and ask switchboard to activate Code Orange.",
      next: "q-prepare",
    },
    {
      kind: "question",
      id: "q-prepare",
      phase: "Getting ready",
      prompt: "Code Orange is active. How do you prepare the department in the time you have?",
      seconds: 120,
      modelAnswer: [
        "Create space. Discharge the 4 patients awaiting results. Move the 3 admitted patients to floors. Redirect the waiting room.",
        "Set up red, yellow and green zones with a lead for each. Green zone away from resus.",
        "Assign a senior nurse and physician as triage officers at the ambulance bay with a single entry point.",
        "Call in the third emergency physician, the pediatrician and extra nurses and technologists.",
        "Ask surgery and anesthesia to finish elective cases and hold the operating rooms.",
        "Alert the blood bank and prepare pediatric equipment. Use MCI tag numbers for registration.",
        "Contact CritiCall early to line up the lead trauma hospital and pediatric trauma centre.",
      ],
      rubric: ["mc-l2", "mc-l3", "mc-d1"],
      next: "s-wave",
    },
    {
      kind: "say",
      id: "s-wave",
      phase: "First wave at the ambulance bay",
      text:
        "Six patients arrive within four minutes. Field tags are missing on three. " +
        "One. A 34 year old man walking, with a deep forearm laceration. " +
        "Two. The 58 year old truck driver on a stretcher, breathing 36 times a minute. " +
        "Three. A 16 year old girl who cannot walk because of a deformed lower leg. Breathing 22, radial pulse present, follows commands. " +
        "Four. A 7 year old girl who cannot walk. Breathing 12, with a palpable radial pulse. She is drowsy but follows simple commands. " +
        "Five. A 67 year old woman who is not breathing and does not start when her airway is opened. " +
        "Six. A 8 year old boy who is not breathing but has a palpable pulse. He does not start breathing when his airway is opened.",
      next: "q-triage",
    },
    {
      kind: "question",
      id: "q-triage",
      phase: "Triage at the door",
      prompt: "You are the triage physician. Sort these six patients and tell me the rule you used for each.",
      seconds: 120,
      modelAnswer: [
        "Adults by START. Children who look about 8 or younger by JumpSTART.",
        "One. Walking, so green.",
        "Two. Respiratory rate over 30, so red.",
        "Three. Breathing under 30, radial pulse present, follows commands. Yellow.",
        "Four. JumpSTART. Respiratory rate under 15 is red, even though an adult rule would pass it.",
        "Five. Apneic after airway repositioning. Black, expectant or deceased. No CPR in a mass casualty setting.",
        "Six. JumpSTART. Apneic child with a pulse gets 5 rescue breaths. If he breathes, red. If not, black.",
      ],
      rubric: ["mc-a1", "mc-a2", "mc-p1"],
      choices: [
        {
          id: "c-correct",
          label: "Green, red, yellow, red, black, and I gave the 8 year old 5 rescue breaths. He started breathing so I tagged him red.",
          next: "s-surge",
          quality: "strong",
          feedback:
            "All correct. The key traps are the children. JumpSTART is built for children up to about 8 years old. It flags a respiratory rate under 15 or over 45 as red, and gives an apneic child with a pulse 5 rescue breaths before tagging black. Many pediatric arrests are respiratory, so this can be lifesaving.",
        },
        {
          id: "c-adult-rule",
          label: "I used START for everyone. The 7 year old was yellow because her breathing was under 30, and the 8 year old was black because he did not breathe after airway opening.",
          next: "s-undertriage",
          quality: "partial",
          feedback:
            "Adult START under triages young children. She follows commands, so START makes her yellow. But a breathing rate of 12 is dangerously slow in a 7 year old and JumpSTART makes her red. An apneic child with a pulse should get 5 rescue breaths before being tagged black.",
        },
        {
          id: "c-cpr",
          label: "I started CPR on the 67 year old woman and tagged the others once she was handed over.",
          next: "s-cpr",
          quality: "unsafe",
          feedback:
            "In a mass casualty incident, a patient who does not breathe after airway repositioning is tagged expectant or deceased. CPR ties up two or three staff for a patient with very poor odds while salvageable patients wait. Do the most good for the most people.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-undertriage",
      phase: "Ten minutes later",
      text:
        "A nurse in the yellow zone calls for help. The 7 year old now only responds to pain and her right pupil is larger. " +
        "A respiratory therapist, walking past triage, gave the 8 year old rescue breaths and he began breathing. Both are moved to resus.",
      next: "s-surge",
    },
    {
      kind: "say",
      id: "s-cpr",
      phase: "Six minutes later",
      text:
        "You and two nurses are doing CPR. Behind you, the truck driver's saturation has dropped to 80 percent and nobody has assessed the children. " +
        "The charge nurse tells you the ambulance bay is backing up. You stop CPR, tag the woman black and triage the rest.",
      next: "s-surge",
    },
    {
      kind: "say",
      id: "s-surge",
      phase: "The second wave",
      text:
        "At 16:05, nine students and two chaperones arrive at the main entrance in private cars. They were never triaged on scene. " +
        "Parents are gathering in the lobby. One of the walking students, a 14 year old boy, is now pale and quiet in a waiting room chair.",
      next: "q-surge",
    },
    {
      kind: "question",
      id: "q-surge",
      phase: "The second wave",
      prompt: "How do you handle this group, the parents and the boy?",
      seconds: 90,
      modelAnswer: [
        "Close the main entrance to casualties. Route everyone through the single triage point.",
        "Re triage every self presenter. Field status is not reliable and triage is dynamic.",
        "The boy goes straight to resus. He is shocked with a seat belt sign.",
        "Set up a family reception and reunification area away from the department with social work and spiritual care.",
        "Keep registration going with MCI numbers so children are not lost or mixed up.",
      ],
      rubric: ["mc-a3", "mc-c1"],
      choices: [
        {
          id: "c-retriage",
          label: "I sent a nurse to re triage everyone at the main entrance, moved the boy straight to resus and asked social work to open a family reception area away from the department.",
          next: "q-resources",
          quality: "strong",
          feedback:
            "Correct. Self presenters bypass field triage and often include hidden injuries. Triage is repeated, not done once. Families need a separate, staffed space so they do not flood the treatment areas.",
        },
        {
          id: "c-waiting-room",
          label: "I asked them all to wait in the waiting room to be triaged in the usual order.",
          next: "s-boy",
          quality: "partial",
          feedback:
            "Normal CTAS queues fail in a surge. These patients need rapid MCI triage at the point of entry. A hidden injury in a walking patient is common after high energy crashes.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-boy",
      phase: "Twenty minutes later",
      text:
        "A parent finds her son slumped in the waiting room chair. His heart rate is 146 and blood pressure 80/48. He is carried to resus. You assign a nurse to re triage the rest.",
      next: "q-resources",
    },
    {
      kind: "question",
      id: "q-resources",
      phase: "Three red patients",
      prompt:
        "You now have three red patients. The truck driver has signs of a left tension pneumothorax. The 7 year old has a probable expanding head injury. The 14 year old is in shock with a positive FAST. You have one CT, one operating room ready, one helicopter. How do you allocate them?",
      seconds: 120,
      modelAnswer: [
        "Truck driver. Needle or finger decompression then chest tube in resus. CT after stabilization.",
        "14 year old. Massive hemorrhage protocol now. Shocked with free fluid and not settling, so straight to the operating room with the general surgeon for damage control.",
        "7 year old. She has a blown pupil and Cushing physiology, so she is herniating. Intubate with neuroprotective targets. Give 3 percent saline 2 to 5 mL/kg IV. CT head only if it does not delay transfer.",
        "She needs a neurosurgeon. Use the helicopter for her through CritiCall to the pediatric trauma centre.",
        "Do not send an unstable bleeding patient on a long flight when a surgeon is on site.",
      ],
      rubric: ["mc-m1", "mc-d2", "mc-m2"],
      choices: [
        {
          id: "c-allocate",
          label: "Chest tube for the driver in resus, the 14 year old straight to the operating room for damage control surgery, and the intubated 7 year old to CT and then the helicopter to the pediatric trauma centre.",
          next: "q-blood",
          quality: "strong",
          feedback:
            "This matches each patient to the resource that saves them. An unstable abdominal bleed with a surgeon in house goes to the operating room, not the scanner or a helicopter. The head injured child needs neurosurgery that only the trauma centre has.",
        },
        {
          id: "c-ct-all",
          label: "I sent all three to CT first so we would know exactly what we were dealing with.",
          next: "s-ct-all",
          quality: "partial",
          feedback:
            "CT is for stable patients. The shocked 14 year old and the driver with tension physiology need intervention first. One scanner used for three patients in sequence also delays the child who needs transfer.",
        },
        {
          id: "c-fly-boy",
          label: "I put the 14 year old on the helicopter first because he is the sickest child.",
          next: "s-fly-boy",
          quality: "partial",
          feedback:
            "He is the sickest, but he needs a surgeon within minutes. One is in the building. A 40 minute flight in hemorrhagic shock is risky, and it takes the only aircraft away from the child who needs neurosurgery.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct-all",
      phase: "Ten minutes later",
      text: "On the CT table, the 14 year old's blood pressure falls to 68/40. The general surgeon calls from the operating room asking where he is. He is rushed to the operating room.",
      next: "q-blood",
    },
    {
      kind: "say",
      id: "s-fly-boy",
      phase: "Ten minutes later",
      text:
        "The flight crew arrives and says he is too unstable to fly without a surgeon on the other end within minutes. The general surgeon in your hospital is ready. He goes to the operating room instead, and the aircraft takes the 7 year old.",
      next: "q-blood",
    },
    {
      kind: "question",
      id: "q-blood",
      phase: "Blood supply",
      prompt: "The blood bank calls. They have released 6 units of O negative already. How do you protect the supply?",
      seconds: 60,
      modelAnswer: [
        "Keep O negative for children and for females who could become pregnant.",
        "Switch adult males and older women to O positive.",
        "Move to group specific blood as soon as types are known.",
        "Ask the blood bank to call Canadian Blood Services for resupply now.",
        "Tranexamic acid within 3 hours for bleeding patients. 1 g IV in adults. 15 mg/kg to a maximum of 1 g in children. Each followed by an infusion.",
      ],
      rubric: ["mc-m3"],
      next: "q-media",
    },
    {
      kind: "question",
      id: "q-media",
      phase: "Families and media",
      prompt: "A reporter walks into the department and asks you how many children have died. A father is at the triage desk demanding to know where his daughter is. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Do not give the reporter any patient information. Refer to hospital communications and have security escort them out.",
        "Take the father to the family reception area. Match him to his child through the MCI registration list.",
        "Only a designated person gives family updates, in private, with social work present.",
        "Keep the treatment areas clear so staff can work.",
      ],
      rubric: ["mc-c2", "mc-p2"],
      next: "q-standdown",
    },
    {
      kind: "question",
      id: "q-standdown",
      phase: "Stand down",
      prompt: "By 19:30 every patient has been seen, transferred or admitted. What happens next?",
      seconds: 75,
      modelAnswer: [
        "Recommend stand down to the hospital command centre once no more patients are expected.",
        "Restore the department. Restock, reopen normal flow, catch up the waiting room.",
        "Hot debrief with the team before people go home.",
        "Check on staff. Offer peer support and employee assistance. Watch for distress in the days after.",
        "Contribute to a formal after action review and update the Code Orange plan.",
      ],
      rubric: ["mc-l4", "mc-p3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The command centre stands down Code Orange at 19:50. More than thirty patients from the crash came through your department. The 14 year old is in the ICU after surgery. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "mc-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Activates the hospital external disaster plan early and stays in the department as medical lead.",
      points: 3,
      critical: true,
      teaching: "Activate on the information you have. Waiting for patients to arrive wastes the only preparation time you get.",
      source: "oha-codes",
    },
    {
      id: "mc-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Creates capacity by discharging, moving admitted patients and holding the operating rooms.",
      points: 2,
      teaching: "Surge capacity comes from clearing current patients as much as from calling in staff.",
      source: "caep-disaster",
    },
    {
      id: "mc-l3",
      competency: "leadership",
      criterion: "plan",
      text: "Sets up a single triage entry point, treatment zones with named leads and incident management roles.",
      points: 2,
      teaching: "A clear structure with defined roles prevents freelancing. Incident management uses a single chain of command.",
      source: "ems-ims",
    },
    {
      id: "mc-l4",
      competency: "leadership",
      criterion: "plan",
      text: "Stands down deliberately, restores the department and contributes to an after action review.",
      points: 1,
      teaching: "Recovery is a planned phase. The after action review is how the plan gets better.",
      source: "ems-ims",
    },
    {
      id: "mc-a1",
      competency: "assessment",
      criterion: "data",
      text: "Applies START correctly to adults, including the respiratory rate over 30 and apnea after repositioning rules.",
      points: 2,
      teaching: "START sorts by walking, breathing, perfusion and mental status. It takes under a minute per patient.",
      source: "start",
    },
    {
      id: "mc-a2",
      competency: "assessment",
      criterion: "data",
      text: "Applies JumpSTART to children, including respiratory rate under 15 or over 45 and 5 rescue breaths for an apneic child with a pulse.",
      points: 3,
      critical: true,
      teaching: "Adult rules under triage young children. JumpSTART is designed for children up to about 8 years old. Pediatric arrest is often respiratory, so rescue breaths before tagging black can save a child.",
      source: "jumpstart",
    },
    {
      id: "mc-a3",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Re triages self presenting and walking patients and recognizes the shocked child with a seat belt sign.",
      points: 2,
      teaching: "Triage is dynamic. Walking wounded after a high energy crash can hide serious abdominal injury.",
      source: "start",
    },
    {
      id: "mc-m1",
      competency: "management",
      criterion: "plan",
      text: "Sends the unstable bleeding patient to the operating room rather than to CT or a long transfer.",
      points: 3,
      critical: true,
      teaching: "Hemodynamically unstable torso bleeding needs surgery. CT is for stable patients. Transfer should not delay a lifesaving operation that can be done locally.",
      source: "atls",
    },
    {
      id: "mc-m2",
      competency: "management",
      criterion: "plan",
      text: "Decompresses the chest of the patient with tension physiology before imaging.",
      points: 1,
      teaching: "Tension pneumothorax is a clinical diagnosis. Decompress first, image later.",
      source: "atls",
    },
    {
      id: "mc-m3",
      competency: "management",
      criterion: "plan",
      text: "Conserves O negative blood for children and females of childbearing potential and asks for resupply early.",
      points: 2,
      teaching: "O positive is safe for adult males and older women in an emergency. O negative is the scarcest resource in a mass casualty incident.",
      source: "atls",
    },
    {
      id: "mc-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Contacts CritiCall early to arrange trauma and pediatric trauma centre capacity.",
      points: 1,
      teaching: "Early notice lets receiving centres prepare and lets transport be matched to the sickest patients.",
      source: "caep-disaster",
    },
    {
      id: "mc-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Uses the single available aircraft for the patient who needs a service only the trauma centre can provide.",
      points: 2,
      teaching: "Match scarce transport to the need that cannot be met locally. Here that is pediatric neurosurgery.",
      source: "atls",
    },
    {
      id: "mc-c1",
      competency: "communication",
      criterion: "plan",
      text: "Opens a staffed family reception and reunification area away from treatment zones.",
      points: 1,
      teaching: "Parents arriving in numbers need a place, a person and accurate information. It keeps treatment areas clear.",
      source: "caep-disaster",
    },
    {
      id: "mc-c2",
      competency: "communication",
      criterion: "plan",
      text: "Refers media to hospital communications and gives no patient information.",
      points: 1,
      teaching: "Only the designated spokesperson speaks to media. Patient privacy still applies in a disaster.",
      source: "ems-ims",
    },
    {
      id: "mc-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Does not start CPR on an adult who stays apneic after airway repositioning during a mass casualty incident.",
      points: 2,
      teaching: "Mass casualty triage aims for the greatest good for the greatest number. Resources go to salvageable patients first.",
      source: "start",
    },
    {
      id: "mc-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Matches families to children using the registration system and gives updates in private.",
      points: 1,
      teaching: "Misidentification of children is a known disaster risk. MCI numbers link each child to the right family.",
      source: "oha-codes",
    },
    {
      id: "mc-p3",
      competency: "professionalism",
      criterion: "plan",
      text: "Runs a hot debrief and arranges psychological support for staff.",
      points: 1,
      teaching: "Pediatric mass casualty events are hard on staff. Early support and follow up reduce lasting distress.",
      source: "caep-disaster",
    },
  ],
  sources: [
    {
      id: "start",
      citation: "Benson M, Koenig KL, Schultz CH. Disaster triage. START, then SAVE. A new method of dynamic triage for victims of a catastrophic earthquake. Prehospital and Disaster Medicine. 1996.",
    },
    {
      id: "jumpstart",
      citation: "Romig LE. Pediatric triage. A system to JumpSTART your triage of young patients at MCIs. JEMS. 2002.",
    },
    {
      id: "oha-codes",
      citation: "Ontario Hospital Association. Standardized hospital emergency colour codes. Code Orange for external disasters.",
    },
    {
      id: "ems-ims",
      citation: "Government of Ontario. Emergency Management Ontario. Incident Management System (IMS) Guidance. Version 2.0.",
      url: "https://www.ontario.ca/document/incident-management-system-ims-guidance-version-2",
    },
    {
      id: "caep-disaster",
      citation: "Kollek D, et al. CAEP position statement. Hospital disaster preparedness. Canadian Journal of Emergency Medicine. 2020.",
      url: "https://pubmed.ncbi.nlm.nih.gov/32425150/",
    },
    {
      id: "atls",
      citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support. 11th edition. 2025.",
      url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
