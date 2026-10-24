// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const emsPatchBlockedTracheostomyChild: OralCase = {
  id: "ems-patch-blocked-tracheostomy-child",
  title: "A patch about a boy who is working hard to breathe",
  blueprint: "systems",
  alsoCovers: ["peds", "resp"],
  priorityTopic: "ems",
  keyFeatures: [
    { topic: "ems", n: 1 },
    { topic: "ems", n: 2 },
    { topic: "ems", n: 3 },
    { topic: "airway", n: 4 },
    { topic: "airway", n: 6 },
  ],
  summary: "A paramedic crew patches about a young boy at home who is struggling to breathe, and his mother is with him.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A primary care paramedic crew patches from a home 12 minutes away. A 6 year old boy with a tracheostomy is working hard to breathe, and his oxygen saturation is falling.",
  card: {
    vitals: {
      temperature: "38.5°C axillary, measured at home by his mother",
      pulse: "152/minute",
      resp: "48/minute",
      bp: "108/68 mmHg",
      o2sat: "84% on 10 L/minute by tracheostomy mask",
      weight: "21 kg (46 lb)",
    },
    medications: "Salbutamol inhaler as needed. Nebulized saline as needed. Omeprazole daily.",
    allergies: "None known",
  },
  findings: [
    {
      id: "patch-report",
      label: "The first patch report (18:10)",
      result:
        "The crew arrived 4 minutes ago. The boy is sitting up with deep chest indrawing and a quiet, whistling noise from the tube. Pulse 152/minute, respirations 48/minute, BP 108/68 mmHg, saturation 84% on 10 L/minute by tracheostomy mask. " +
        "His mother suctioned him twice. The catheter stops about 3 cm in. The crew has no capnography. His mother has a go-bag and is asking whether she should change the tube.",
    },
    {
      id: "trach-details",
      label: "Tracheostomy details (from the mother and the emergency card)",
      result:
        "Uncuffed 4.5 pediatric tracheostomy tube with no inner cannula. The stoma is mature. His mother changes the tube herself every week and last changed it 5 days ago. " +
        "The go-bag holds a spare 4.5 tube, a 4.0 tube, suction catheters, ties, scissors and water-based lubricant. The laminated emergency card from his ENT surgeon says: 'Upper airway not patent. Oral intubation is expected to fail. Oxygenate and ventilate through the stoma.'",
    },
    {
      id: "hpi",
      label: "History of the presenting illness",
      result:
        "Two days of runny nose and cough. His secretions became thick and yellow yesterday and he needed suction every hour overnight. Fever to 38.5°C today. " +
        "At 18:00 his breathing became noisy and then quieter while he worked harder. No choking episode, no vomiting, no bleeding from the tube.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Born at 26 weeks. Intubated for 10 weeks, then developed grade III subglottic stenosis. Tracheostomy at 5 months. He is on the list for airway reconstruction at the children's hospital. " +
        "Mild chronic lung disease of prematurity and reflux. His last tracheal aspirate, 4 months ago, grew Pseudomonas aeruginosa. Immunizations are up to date.",
    },
    {
      id: "meds",
      label: "Medication details",
      result:
        "Salbutamol 100 mcg per puff, 2 to 4 puffs through a spacer adapted to the tube as needed. Nebulized 0.9% saline 3 mL as needed for thick secretions. Omeprazole 10 mg daily. No allergies.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Lives with his parents and a 9 year old sister on a rural property. Both parents completed tracheostomy training at the children's hospital. His father is driving in separately. He attends grade 1 with a trained support worker.",
    },
    {
      id: "crew-handover",
      label: "What the paramedics saw and did",
      result:
        "At 18:14 the mother cut the ties and removed the tube. It held a thick yellow plug. She could not pass the new 4.5 tube, so at 18:16 she inserted the 4.0 tube with the crew holding his shoulders. " +
        "The crew gave a few bag breaths through the new tube with good chest rise and suctioned thick secretions. Lowest saturation was 71% at 18:15. Saturation reached 94% by 18:20. No CPR. A small amount of blood at the stoma. The used 4.5 tube is in a bag.",
    },
    {
      id: "exam-arrival",
      label: "Examination on arrival",
      result:
        "At 18:32: temperature 38.4°C axillary, pulse 138/minute, respirations 36/minute, BP 102/64 mmHg, saturation 93% on 6 L/minute by tracheostomy mask. Alert and clinging to his mother. Mild subcostal indrawing. The 4.0 tube is tied with two fingers of slack. Air moves freely through the tube. Coarse crackles at the right base. " +
        "The stoma is slightly red with a little dried blood. No neck swelling or crepitus. Capillary refill 2 seconds. Capnography through the tube shows a normal waveform with end tidal CO2 of 46 mmHg.",
    },
    {
      id: "bedside",
      label: "Bedside tests",
      result: "Capillary glucose 6.1 mmol/L. Venous gas pH 7.32, pCO2 51 mmHg, bicarbonate 25 mmol/L, lactate 1.6 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result: "White cells 15.8 x 10^9/L with 82% neutrophils. Hemoglobin 124 g/L. Platelets 344 x 10^9/L. Sodium 137 mmol/L. Potassium 4.1 mmol/L. Creatinine 34 µmol/L. CRP 52 mg/L.",
    },
    {
      id: "cxr",
      label: "Chest X-ray on arrival",
      result: "Tracheostomy tube tip at the level of T2, well above the carina. New patchy consolidation in the right lower lobe. No pneumothorax.",
    },
    {
      id: "displacement",
      label: "Findings at 19:05",
      result:
        "Saturation 72% and falling. Pulse 168/minute. The capnography trace is flat. A suction catheter will not pass. The skin beside the stoma is swelling and crackles under your fingers. The chest does not rise with bag breaths through the tube.",
    },
    {
      id: "repeat-cxr",
      label: "Repeat chest X-ray after reinsertion",
      result: "Tube tip at T2. A small amount of air in the soft tissues of the lower neck. No pneumothorax or pneumomediastinum. Right lower lobe consolidation unchanged.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A community hospital in northern Ontario. A respiratory therapist is in house. An anesthetist and a general surgeon are on call from home, 20 minutes away. There is no ENT surgeon and no pediatric ICU. " +
        "The children's hospital is a 75 minute flight away. Its pediatric critical care transport team is dispatched through CritiCall Ontario and Ornge.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "18:10, the patch",
      text: "The paramedic is calm but speaks quickly. You can hear a child coughing and a woman's voice in the background. The paramedic asks for direction.",
      next: "q-patch",
    },
    {
      kind: "question",
      id: "q-patch",
      phase: "The patch",
      prompt: "What do you want to know from the crew, and what direction do you give them?",
      seconds: 110,
      modelAnswer: [
        "Ask why he has a tracheostomy, the tube size and type, whether it is cuffed, and whether his upper airway is patent. Ask what the emergency card says.",
        "Ask what has been tried. Attachments off, how far the suction catheter goes, and whether spare tubes and a trained parent are there.",
        "A catheter that will not pass with falling saturation means a blocked tube. Direct a tube change now, at home, before transport.",
        "The trained mother changes the tube with the crew's help. Try the same size first, then the half size smaller tube. Once the tube is out, the crew can reinsert one themselves under their directive, up to 2 attempts.",
        "Oxygen to the stoma and the face. If no tube will go in, oxygenate and bag through the stoma. Do not rely on bag mask ventilation over the mouth, because his upper airway is blocked.",
        "Confirm the plan back with the crew, ask for a call back after the change, and get their arrival time.",
      ],
      rubric: ["tr-h1", "tr-h2", "tr-m1", "tr-m2", "tr-pr1"],
      choices: [
        {
          id: "c-change-now",
          label: "I asked why he has the tube, its size, whether it is cuffed and what the emergency card says about his upper airway. Then I directed his mother to change it now with the crew's help, same size first and the 4.0 if that failed, with oxygen to the stoma, and asked them to call me back once it was in.",
          next: "s-change",
          quality: "strong",
          feedback:
            "This is the key decision. A suction catheter that stops 3 cm in with a saturation of 84% means a blocked tube, and a blocked tube must be changed where the child is. A trained parent is often the most skilled person in the room. The same size tube comes first, then a half size smaller one.",
        },
        {
          id: "c-load-go",
          label: "I told them to keep suctioning, give high flow oxygen to the tube and come straight in, since we have more help here.",
          next: "s-load-go",
          quality: "unsafe",
          feedback:
            "A blocked tube does not clear on the road, and he can arrest in the 12 minutes it takes to reach you. Transport does not fix an obstructed airway. The tube must be changed at home first, and the mother and crew are able to do it.",
        },
        {
          id: "c-bag-mouth",
          label: "I told them to take the tube out and bag mask ventilate him over the mouth and nose while they drive in.",
          next: "s-bag-mouth",
          quality: "unsafe",
          feedback:
            "He has grade III subglottic stenosis, so air from the mouth may never reach his lungs. The stoma is his airway. Asking about the upper airway first would have changed this direction. Replace the tube, or oxygenate through the stoma if no tube will go in.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-load-go",
      phase: "18:15",
      text: "The paramedic calls back as they load him. His saturation is 71% and his pulse is dropping. His mother has already cut the ties and has a new tube in her hand. You tell them to stop, let her change the tube, and call you back.",
      next: "s-change",
    },
    {
      kind: "say",
      id: "s-bag-mouth",
      phase: "18:15",
      text: "The paramedic says there is no chest rise with the mask and his saturation is 70%. His mother says his throat is closed and that the card says to use the stoma. You agree and ask her to put in a new tube.",
      next: "s-change",
    },
    {
      kind: "say",
      id: "s-change",
      phase: "18:20, the call back",
      text: "The crew calls back. The 4.5 tube would not pass, but the 4.0 went in. They gave a few bag breaths with good chest rise. His saturation is 94% on oxygen. They are leaving now and will arrive at about 18:32.",
      next: "q-prepare",
    },
    {
      kind: "question",
      id: "q-prepare",
      phase: "Before arrival",
      prompt: "You have 12 minutes. How do you prepare your department and your hospital?",
      seconds: 90,
      modelAnswer: [
        "Resuscitation bay with pediatric equipment and a length based tape. Respiratory therapist and a nurse at the bedside.",
        "Tracheostomy tubes in 4.5, 4.0 and 3.5, uncut uncuffed and cuffed endotracheal tubes in small sizes, suction catheters, a bougie or airway exchange catheter, and a small face mask that fits over the stoma.",
        "Waveform capnography ready to attach to the tube on arrival.",
        "Call the anesthetist in early. A child with a narrowed stoma and a blocked upper airway has a high risk airway.",
        "Warn the pediatric team at the children's hospital through CritiCall Ontario that a transfer is likely.",
        "Clear the bay so the handover can happen in a quiet room.",
      ],
      rubric: ["tr-m3", "tr-pr3"],
      next: "s-arrive",
    },
    {
      kind: "say",
      id: "s-arrive",
      phase: "18:32, arrival",
      text: "The crew wheels him in with his mother beside him. The nurse starts moving him to the bed, and the respiratory therapist reaches for the monitor leads while the paramedic begins to talk.",
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "How do you run the handover, and what do you ask the paramedics and his mother?",
      seconds: 90,
      modelAnswer: [
        "One person speaks at a time. Hands off for a short, structured report unless he is in danger, then move him.",
        "Ask what only they know. When it started, the lowest saturation, how long he was low, and whether he needed CPR.",
        "Ask what was done. How many insertion attempts, why the 4.5 failed, how hard the 4.0 was to place, any bleeding, and how he responded to bag breaths.",
        "Ask for the emergency card and the used tube with its plug. Keep the go-bag at the bedside.",
        "Confirm the plan to keep his mother with him. She knows his baseline and his airway.",
        "Do not release the crew until your questions are answered.",
      ],
      rubric: ["tr-h3", "tr-h4", "tr-pr2"],
      choices: [
        {
          id: "c-structured",
          label: "I asked the team to pause for a 1 minute hands-off handover, then asked about the timeline, the lowest saturation, each insertion attempt, why the 4.5 failed, bleeding, and his response to bag breaths. I took the emergency card and the used tube and kept the go-bag at the bedside.",
          next: "q-assess",
          quality: "strong",
          feedback:
            "Good. A structured handover with the team quiet carries more information with fewer questions. The failed 4.5 tube tells you the stoma has narrowed, and the card tells you oral intubation is expected to fail. Only the crew and his mother can give you these facts.",
        },
        {
          id: "c-parallel",
          label: "I let the nurse and respiratory therapist move him and attach monitors while the paramedic talked, and I examined him at the same time.",
          next: "s-lost-card",
          quality: "partial",
          feedback:
            "When the patient is stable, talking over a transfer loses information. You missed that the 4.5 tube failed and that his upper airway is not patent. A short pause for a structured handover costs about a minute and protects the key facts.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-lost-card",
      phase: "Ten minutes later",
      text: "The crew has left for another call. The nurse finds the emergency card in the go-bag and reads it to you. His mother adds that the usual tube would not go in at home.",
      next: "q-assess",
    },
    {
      kind: "question",
      id: "q-assess",
      phase: "Assessment",
      prompt: "He is stable for now. What else do you ask his mother, what do you examine and what tests do you want?",
      seconds: 110,
      modelAnswer: [
        "Illness. Two days of cold symptoms, thicker yellow secretions, more suction, fever. Baseline oxygen needs and work of breathing.",
        "Airway history. Why he has a tracheostomy, previous difficult changes, the planned reconstruction, and any past stoma narrowing.",
        "Past organisms in tracheal cultures, medications, allergies and immunizations.",
        "Examine work of breathing, air entry, the tube position and ties, the stoma for bleeding, swelling or crepitus, and perfusion.",
        "Attach waveform capnography and check that a suction catheter passes freely.",
        "Chest X-ray for tube position, pneumonia and air leak. CBC, CRP, gas and a tracheal aspirate for culture.",
      ],
      rubric: ["tr-h4", "tr-p1", "tr-p2", "tr-m6"],
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "18:55",
      text: "He has a normal capnography waveform with an end tidal CO2 of 46 mmHg. The chest X-ray shows the tube tip at T2 and a new right lower lobe consolidation. White cells are 15.8 x 10^9/L and CRP is 52 mg/L. You start treatment and call the children's hospital.",
      next: "s-displace",
    },
    {
      kind: "say",
      id: "s-displace",
      phase: "19:05",
      text: "A nurse is changing the wet tube ties on her own. He coughs hard and pulls away. His saturation falls to 72%, the capnography trace goes flat and the skin beside the stoma begins to swell.",
      next: "q-displace",
    },
    {
      kind: "question",
      id: "q-displace",
      phase: "Deterioration",
      prompt: "What is happening, and what do you do?",
      seconds: 100,
      modelAnswer: [
        "The tube has come partly out into a false passage in front of the trachea. A flat trace, swelling and crepitus make that likely.",
        "Call for help. Oxygen to the face and the stoma. Stop bagging through the misplaced tube, because it forces air into the tissues.",
        "Remove the tube. Reinsert a tube of the same or smaller size, using a suction catheter passed into the stoma as a guide if needed.",
        "Confirm placement with a returning capnography waveform, chest rise and rising saturation.",
        "If no tube passes, oxygenate through the stoma with a small face mask or an uncut endotracheal tube placed just into the stoma. Oral intubation is not the first plan in this child.",
        "Have one person hold the tube during every tie change.",
      ],
      rubric: ["tr-p3", "tr-m4", "tr-pr4"],
      choices: [
        {
          id: "c-remove-reinsert",
          label: "I called for help, gave oxygen to the face and stoma, removed the displaced tube, passed a suction catheter into the stoma and slid a new 4.0 tube over it. I confirmed it with a returning capnography waveform and chest rise.",
          next: "s-recovered",
          quality: "strong",
          feedback:
            "Correct. A flat capnography trace, swelling and crepitus mean the tube is out of the trachea. Remove it, oxygenate through the stoma and reinsert over a guide. Waveform capnography is the fastest proof that the new tube is in the airway.",
        },
        {
          id: "c-push-bag",
          label: "I pushed the same tube back in and bagged harder to get his saturation up.",
          next: "s-push-bag",
          quality: "unsafe",
          feedback:
            "Bagging through a tube in a false passage pumps air into the neck and can make the stoma impossible to find. The flat trace was telling you the tube was not in the airway. Remove it and reinsert, then confirm with capnography.",
        },
        {
          id: "c-oral",
          label: "I removed the tube and prepared to intubate orally with a 5.0 endotracheal tube.",
          next: "s-oral",
          quality: "partial",
          feedback:
            "Removing the tube was right. But his emergency card says oral intubation is expected to fail because of subglottic stenosis. The stoma is the quickest route. Oral intubation is only a backup when the stoma cannot be used and the upper airway allows it.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-push-bag",
      phase: "Two minutes later",
      text: "His neck swells further and the saturation is 61%. The respiratory therapist says the trace is still flat. You pull the tube, give oxygen over the stoma and pass a new 4.0 tube over a suction catheter. The waveform returns.",
      next: "s-recovered",
    },
    {
      kind: "say",
      id: "s-oral",
      phase: "One minute later",
      text: "On laryngoscopy you see a pinhole below the cords and the tube will not pass. His mother says, 'You have to use the hole in his neck.' You pass a new 4.0 tube through the stoma over a suction catheter. The waveform returns.",
      next: "s-recovered",
    },
    {
      kind: "say",
      id: "s-recovered",
      phase: "19:15",
      text: "His saturation is 95% and his end tidal CO2 is 48 mmHg. A repeat chest X-ray shows the tube tip at T2, a small amount of air in the neck and no pneumothorax. The children's hospital accepts him, and the transport team says it can reach you in 2 hours.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "Your charge nurse asks whether he can go now by land ambulance with the next primary care paramedic crew and one of your nurses. How do you get him ready, and who should take him?",
      seconds: 100,
      modelAnswer: [
        "He has a narrowed stoma, a recent false passage, air in the neck and pneumonia. He needs a team that can replace his tube in a moving vehicle. Wait for the pediatric critical care transport team unless he cannot wait.",
        "Secure the tube with ties checked by two people. Confirm the position with capnography and the X-ray.",
        "Send spare tubes in 4.0 and 3.5, suction catheters, a small stoma mask, scissors, the go-bag and the emergency card.",
        "Continuous saturation and capnography monitoring. Humidified oxygen. Secure IV access.",
        "Give the transport team a structured handover with the events, attempts, tube size and the airway plan. Ask that his mother travel with him if space allows.",
        "Reassess him regularly while you wait, with one person responsible for his airway.",
      ],
      rubric: ["tr-pr3", "tr-pr4"],
      choices: [
        {
          id: "c-wait-team",
          label: "I kept him in resus with the respiratory therapist assigned to his airway, checked the ties with a second person, packed spare 4.0 and 3.5 tubes with the go-bag and card, and waited for the pediatric critical care transport team. I asked that his mother go with him.",
          next: "q-mother",
          quality: "strong",
          feedback:
            "Good. The team escorting a child must be able to manage his airway if it fails again. A primary care crew and a nurse without airway training cannot. Stabilize first, pack the airway equipment and give a structured handover.",
        },
        {
          id: "c-send-now",
          label: "I agreed to send him now with the paramedic crew and our nurse, since the children's hospital is the best place for him.",
          next: "s-send-now",
          quality: "partial",
          feedback:
            "Getting him to the right place matters, but the escort must match the risk. He displaced his tube less than half an hour ago and has air in his neck. A further displacement on the road would need skills this crew does not have. Wait for the pediatric transport team, or send someone with airway skills.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-send-now",
      phase: "Ten minutes later",
      text: "The paramedic crew asks who will manage the airway if the tube comes out on the highway. The transport physician at CritiCall Ontario advises waiting for the pediatric team. You keep him in resus and prepare the equipment.",
      next: "q-mother",
    },
    {
      kind: "question",
      id: "q-mother",
      phase: "His mother",
      prompt: "While they wait, his mother says she nearly froze at home with the paramedics watching, and she asks why the tube came out here. What do you say, and what else do you do?",
      seconds: 80,
      modelAnswer: [
        "Thank her. Her tube change at home cleared his airway and likely saved his life.",
        "Explain why the smaller tube was needed. His stoma has narrowed, and the ENT team should know.",
        "Tell her honestly that the tube came out during a tie change with one person, that he is safe now, and what you changed.",
        "Report the event through the hospital safety system.",
        "Advise that the go-bag always holds the same size and a smaller tube.",
        "Call the crew back with feedback, and document the patch and your directions.",
      ],
      rubric: ["tr-pr5", "tr-pr6", "tr-pr1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The pediatric critical care transport team takes him to the children's hospital with his mother. He is treated for Pseudomonas tracheitis and pneumonia. His airway reconstruction is moved up on the list. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "tr-h1",
      competency: "assessment",
      criterion: "history",
      text: "During the patch, asks why he has a tracheostomy, the tube size and type, whether it is cuffed, and whether his upper airway is patent.",
      points: 2,
      teaching:
        "Whether the upper airway is patent decides the rescue plan. A child with subglottic stenosis cannot be oxygenated or intubated from above, so the stoma is the only airway.",
      source: "doherty",
    },
    {
      id: "tr-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks what has been tried. Attachments removed, how far the suction catheter passes, and whether spare tubes and a trained caregiver are present.",
      points: 2,
      teaching:
        "Paramedics may suction a tracheostomy for obstruction or increased secretions, and may reinsert a tube once it is out. Spare tubes and a trained parent at the scene make a field tube change possible.",
      source: "als-pcs",
    },
    {
      id: "tr-h3",
      competency: "assessment",
      criterion: "history",
      text: "At handover, asks the crew for details only they know. The timeline, the lowest saturation, each insertion attempt, why the 4.5 failed, bleeding and the response to bag breaths.",
      points: 2,
      critical: true,
      teaching:
        "The failed 4.5 tube means the stoma has narrowed, so the next change will be harder. This fact lives only with the crew and the parent and is easily lost at handover.",
      source: "imist",
    },
    {
      id: "tr-h4",
      competency: "assessment",
      criterion: "history",
      text: "Takes a focused history from his mother. The illness, secretions, fever, baseline breathing, previous difficult changes, past tracheal cultures and the emergency card.",
      points: 2,
      teaching:
        "Parents of children with tracheostomies know the baseline and the plan. The bedside emergency card gives the tube size, the smaller size and whether the upper airway can be used.",
      source: "doherty",
    },
    {
      id: "tr-p1",
      competency: "assessment",
      criterion: "physical",
      text: "On arrival, confirms the tube is patent and in the trachea with a freely passing suction catheter and waveform capnography.",
      points: 2,
      teaching:
        "A capnography waveform is the best sign of a patent tube in the airway. A suction catheter that passes freely helps rule out a blocked tube.",
      source: "doherty",
    },
    {
      id: "tr-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Examines work of breathing, air entry, the tube and ties, and the stoma for bleeding, swelling or crepitus, and orders a chest X-ray, gas, CBC and a tracheal aspirate.",
      points: 1,
      teaching:
        "Fever, thick secretions and focal crackles point to tracheitis or pneumonia as the cause of the plug. The X-ray also checks the tube position and looks for an air leak.",
      source: "doherty",
    },
    {
      id: "tr-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes displacement into a false passage from the flat capnography trace, swelling, crepitus, no chest rise and falling saturation.",
      points: 2,
      teaching:
        "Loss of the capnography waveform means the tube is not in the airway until proven otherwise. Neck swelling and crepitus during bagging suggest a false passage.",
      source: "doherty",
    },
    {
      id: "tr-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Directs an immediate tube change at the scene by the trained mother with the crew's support, same size first and then the smaller tube, before transport.",
      points: 3,
      critical: true,
      teaching:
        "A blocked tube must be changed where the child is. Ontario paramedic directives allow reinsertion with a tube provided for the patient and favour using a trained caregiver.",
      source: "als-pcs",
    },
    {
      id: "tr-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Directs oxygen to the stoma and face and plans stoma ventilation if no tube passes, without relying on bag mask ventilation over the mouth.",
      points: 2,
      teaching:
        "If the upper airway is not patent, ventilation from above will fail. A small face mask over the stoma can oxygenate until a tube is placed.",
      source: "doherty",
    },
    {
      id: "tr-m3",
      competency: "management",
      criterion: "management",
      text: "Prepares tracheostomy tubes of the same and smaller sizes, small uncut endotracheal tubes, suction catheters, a stoma mask and capnography, and calls the anesthetist in early.",
      points: 2,
      teaching:
        "The emergency set for a child with a tracheostomy includes the same size and a half size smaller tube. Early expert help matters because the next airway event may be harder.",
      source: "doherty",
    },
    {
      id: "tr-m4",
      competency: "resuscitation",
      criterion: "management",
      text: "For the displaced tube, removes it, oxygenates through the stoma, reinserts a tube over a suction catheter guide and confirms placement with waveform capnography.",
      points: 3,
      critical: true,
      teaching:
        "Never keep bagging through a tube that shows no CO2. Remove it, oxygenate and reinsert, using a suction catheter as a guide when the stoma is tight.",
      source: "doherty",
    },
    {
      id: "tr-m6",
      competency: "management",
      criterion: "management",
      text: "Treats the cause of the plug with humidified oxygen, regular suction, an antipyretic and a tracheal aspirate culture before antibiotics chosen with the pediatric team.",
      points: 1,
      teaching:
        "Dry gas and infected secretions are common causes of tube blockage. Humidification and suction reduce the risk of a second plug.",
      source: "doherty",
    },
    {
      id: "tr-pr1",
      competency: "communication",
      criterion: "process",
      text: "Gives clear direction within the paramedics' scope, has the plan read back, asks for a call back and later documents the patch and gives the crew feedback.",
      points: 2,
      teaching:
        "A base hospital physician may only direct care within the paramedic's scope. If a direction exceeds it, the paramedic must say so and ask for another plan.",
      source: "als-pcs",
    },
    {
      id: "tr-pr2",
      competency: "leadership",
      criterion: "process",
      text: "Runs a short hands-off structured handover with the team quiet, and does not release the crew until key questions are answered.",
      points: 2,
      teaching:
        "A structured format such as IMIST-AMBO gives more information, fewer repeated questions and a shorter handover. Talking over a transfer loses facts.",
      source: "imist",
    },
    {
      id: "tr-pr3",
      competency: "disposition",
      criterion: "process",
      text: "Arranges early transfer to the children's hospital through the provincial service and waits for a pediatric critical care transport team, with ties checked, placement confirmed, spare tubes, suction and the emergency card packed.",
      points: 3,
      critical: true,
      teaching:
        "Transport staff must be able to manage the patient's airway en route. Resuscitate and stabilize before a critically ill patient leaves, and keep the same monitoring during the trip.",
      source: "warren",
    },
    {
      id: "tr-pr4",
      competency: "leadership",
      criterion: "process",
      text: "Assigns one person to the airway and reassesses after every intervention, including two-person tie changes and a repeat X-ray after reinsertion.",
      points: 1,
      teaching:
        "Accidental decannulation is a common tracheostomy emergency, and handling the tube is a time of risk. One person holds the tube while the other changes the ties.",
      source: "doherty",
    },
    {
      id: "tr-pr5",
      competency: "communication",
      criterion: "process",
      text: "Thanks the mother for her tube change, explains the narrowed stoma, and advises keeping the same size and a smaller tube in the go-bag.",
      points: 1,
      teaching: "Parents and carers are part of the emergency team for a child with a tracheostomy. Their preparation and education reduce the harm from tracheostomy emergencies.",
      source: "doherty",
    },
    {
      id: "tr-pr6",
      competency: "professionalism",
      criterion: "process",
      text: "Tells the mother honestly that the tube came out during a tie change in the department, with sympathy and the facts known, and reports the event.",
      points: 1,
      teaching: "Disclosure of harm from care starts as soon as reasonably possible, with the facts known so far and without speculation. An expression of sorrow is not an admission of fault.",
      source: "cmpa",
    },
  ],
  sources: [
    {
      id: "doherty",
      citation:
        "Doherty C, Neal R, English C, Cooke J, and colleagues. Multidisciplinary guidelines for the management of paediatric tracheostomy emergencies. Anaesthesia. 2018.",
    },
    {
      id: "als-pcs",
      citation:
        "Ontario Ministry of Health, Emergency Health Regulatory and Accountability Branch. Advanced Life Support Patient Care Standards, version 5.4. 2025.",
      url: "https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. Version 3. 2017.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients",
    },
    {
      id: "imist",
      citation:
        "Iedema R, Ball C, Daly B, Young J, and colleagues. Design and trial of a new ambulance-to-emergency department handover protocol: IMIST-AMBO. BMJ Qual Saf. 2012.",
    },
    {
      id: "warren",
      citation:
        "Warren J, Fromm RE Jr, Orr RA, Rotello LC, Horst HM. Guidelines for the inter- and intrahospital transport of critically ill patients. American College of Critical Care Medicine. Crit Care Med. 2004.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
