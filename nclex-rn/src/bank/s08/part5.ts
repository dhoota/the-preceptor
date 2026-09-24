import type { Item } from "@/engine/types";
import { ANA_SPHM, BUSHBERG, CDC_HCP, EPA_HG, HINKLE, NFPA99, NRC_ALARA, OSHA_WPV, POTTER, SHAKER, SIEGEL, TJC_NPG, meta } from "./common";

/** Batch s08, items 41 to 50. */
export const PART5: Item[] = [
  {
    ...meta("rn-s08-41", {
      topic: "Two clients with similar names",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "Two clients with the same last name and similar first names are admitted to rooms across the hall from each other. Both have prescriptions for insulin. Which action should the nurse take?",
      rationale:
        "Similar names raise the risk that one client receives the other's care. A name alert on the charts and wristbands warns every staff member to take extra care. Each check still uses two identifiers, such as full name and date of birth. A room number is a location and is not an identifier. The client states the name, because a client may agree to a name read aloud. Barcode scanning adds to other checks but does not replace them.",
      sources: [TJC_NPG, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Flag both charts and wristbands with a name alert", why: "The alert warns all staff that two clients have similar names." },
      { text: "Identify each client by room number at each dose", why: "A room number is a location and is not an acceptable identifier." },
      { text: "Ask each client to confirm the name the nurse reads", why: "A client may agree to a wrong name. The client states the name instead." },
      { text: "Rely on the barcode scan in place of other checks", why: "Scanning supports but does not replace the two-identifier check." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-42", {
      topic: "Broken mercury thermometer at home",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A parent calls the clinic after an old mercury thermometer broke on a hard kitchen floor. No one has touched the beads. Complete the sentence by dragging the correct actions into the blanks.",
      rationale:
        "Children and pets are kept out of the room so no one tracks mercury through the home. The beads are gathered with stiff paper and drawn up with an eyedropper, then sealed in a container. A vacuum heats and spreads mercury vapor into the air. A broom breaks the beads into smaller droplets. Mercury is never washed into a drain, where it lodges in the plumbing.",
      sources: [EPA_HG],
    }),
    kind: "dnd",
    template: "The nurse tells the parent to first {0}, and then to collect the beads with {1}.",
    scoring: "dyad",
    targets: ["First action", "Cleanup tool"],
    tokens: [
      { text: "wipe the beads into a drain with a rag", why: "Mercury lodges in the plumbing and pollutes water. It is not poured or wiped into a drain." },
      { text: "keep children and pets out of the room", why: "Keeping others out stops mercury from being tracked through the home." },
      { text: "a broom and dustpan", why: "A broom breaks mercury into smaller droplets and spreads them." },
      { text: "stiff paper and an eyedropper", why: "Paper gathers the beads and an eyedropper draws them up without spreading them." },
      { text: "rinse the floor with hot water", why: "Water spreads the beads, and heat increases mercury vapor." },
      { text: "a household vacuum", why: "A vacuum puts mercury vapor into the air and contaminates the machine." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s08-43", {
      topic: "Contact precautions before culture results",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "Four clients are admitted to a surgical unit while culture results are pending. Which client should the nurse place on contact precautions now?",
      rationale:
        "Drainage that soaks through a dressing cannot be contained and can spread organisms such as Staphylococcus aureus to hands and surfaces. Contact precautions start while cultures are pending. A wound under a dry, intact dressing is contained, so standard precautions apply. Cloudy urine in a closed drainage system is contained. A cough with fever calls for respiratory precautions, not contact precautions.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "A client with a cough and a fever of 38.4°C (101.1°F)", why: "Respiratory symptoms call for droplet or airborne measures, not contact precautions." },
      { text: "A client with a surgical wound under a dry, intact dressing", why: "A contained wound needs standard precautions only." },
      { text: "A client with cloudy urine in the catheter drainage bag", why: "Urine in a closed system is contained. Standard precautions apply." },
      { text: "A client with an abscess draining through the dressing", why: "Uncontained drainage spreads organisms by contact, so contact precautions begin now." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-44", {
      topic: "Loneliness during isolation precautions",
      cjmm: "generate",
      process: "caring",
      difficulty: 3,
      stem: "A 67-year-old client has been on contact precautions for 10 days. The client says, \"Nobody comes in here unless they have to.\" Which plan best addresses this concern?",
      rationale:
        "Clients on isolation precautions receive fewer staff visits and report more anxiety and depression. Scheduled check-ins show the client that staff will come, and a clear explanation of the precautions eases fear. Stopping precautions exposes other clients. Limiting visits to meals and medications deepens isolation. A shared room exposes a roommate to the organism.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Schedule regular check-ins and explain the precautions", why: "Planned contact and clear information ease the isolation the client describes." },
      { text: "Stop the precautions so staff can visit more freely", why: "Ending precautions without criteria risks spread to other clients." },
      { text: "Limit visits to meal and medication times", why: "Fewer visits make the client's isolation worse." },
      { text: "Move the client to a shared room for company", why: "A roommate would be exposed to the organism." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-45", {
      topic: "Warning signs of violence from a visitor",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A visitor at the nurses' station is upset about delays in a family member's care. Which findings indicate an increased risk of violence? Select all that apply.",
      rationale:
        "Clenched fists, a rigid posture, pacing, shouting and swearing are signs of rising agitation. A stated intent to harm someone is a direct threat. These cues call for early de-escalation and for security to be alerted. Asking when the provider will arrive, crying quietly and sitting relaxed show distress or concern without signs of aggression.",
      sources: [OSHA_WPV],
    }),
    kind: "sata",
    options: [
      { text: "Clenched fists and a rigid posture", why: "Tense posture and clenched fists signal rising anger." },
      { text: "Asking when the provider will arrive", why: "A question about timing shows concern, not aggression." },
      { text: "Pacing back and forth by the desk", why: "Pacing shows mounting agitation." },
      { text: "Crying quietly in the waiting area", why: "Quiet crying shows distress without signs of aggression." },
      { text: "Shouting and swearing at the clerk", why: "Verbal abuse often comes before physical aggression." },
      { text: "Saying someone is going to pay for this", why: "A stated intent to harm is a direct threat." },
      { text: "Sitting in a chair with relaxed arms", why: "A relaxed posture does not suggest aggression." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s08-46", {
      topic: "First check during a power failure",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The power fails on a medical unit and the emergency generator starts. On this unit, emergency power outlets are red and regular outlets are white. The nurse hears several alarms. Which client should the nurse check first?",
      rationale:
        "Only the red outlets receive generator power. A ventilator plugged into a white outlet has lost wall power and is alarming, and the client depends on it to breathe. The nurse checks the ventilator, moves it to a red outlet and is ready to ventilate by hand. The IV pump runs on its battery for now. A bed that will not lower and a dark room are safety concerns that can wait.",
      sources: [NFPA99],
    }),
    kind: "mc",
    options: [
      { text: "A client whose IV pump has switched to battery", why: "The pump keeps running on its battery for a time." },
      { text: "A client whose bed will not lower to the floor", why: "The bed is a fall concern, not an immediate threat to life." },
      { text: "A client on a ventilator plugged into a white outlet", why: "The white outlet has no generator power, and the client depends on the ventilator." },
      { text: "A client whose room lights have gone dark", why: "A dark room is a hazard, but a flashlight fixes it for now." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-47", {
      topic: "Nurse returning to work after influenza",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse developed fever and cough from influenza on day 0. It is now day 3. The last fever was on the evening of day 1, and the nurse has taken no antipyretics since. The cough is improving and the nurse feels well. Which action is appropriate?",
      rationale:
        "At least 3 days have passed since symptoms began. The nurse has been fever free for more than 24 hours without antipyretics. Symptoms are improving and the nurse feels well. All return criteria are met. The nurse wears a mask as source control through day 7, because virus can still be shed. A negative test is not required to return.",
      refs: ["Staff with a viral respiratory infection may return once at least 3 days have passed since symptom onset, fever has been absent for 24 hours without antipyretics, symptoms are improving and they feel well. They wear source control through day 7."],
      sources: [CDC_HCP],
    }),
    kind: "mc",
    options: [
      { text: "Stay home until 7 days have passed", why: "The return criteria are met on day 3. Masking covers the rest of the period." },
      { text: "Return without a mask since fever has resolved", why: "Source control is worn through day 7 because shedding can continue." },
      { text: "Return only after a negative influenza test", why: "A negative test is not a return criterion." },
      { text: "Return to work and wear a mask through day 7", why: "The nurse meets the return criteria and masks while shedding may continue." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-48", {
      topic: "Reaction during urinary catheter insertion",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 32-year-old client with spina bifida needs a urinary catheter. The chart lists no allergies. Minutes after the nurse inserts a catheter from a kit that contains latex, the client reports itching and throat tightness. Hives spread over the chest. BP falls from 118/72 to 84/50 mmHg and heart rate rises to 124/minute. Wheezes are heard. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "People with spina bifida have high rates of latex allergy from repeated early exposure. Hives, throat tightness, wheezes and a fall in BP from 118/72 to 84/50 mmHg minutes after latex contact fit anaphylaxis. The latex source is removed and IM epinephrine is given as the first drug. Antihistamines do not treat airway swelling or shock. BP and the airway are monitored closely for worsening or a second phase.",
      sources: [SHAKER, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Latex anaphylaxis", why: "Hives, wheezes and hypotension minutes after latex contact fit anaphylaxis." },
      { text: "Vasovagal reaction", why: "A vasovagal reaction slows the heart and does not cause hives or wheezes." },
      { text: "Autonomic dysreflexia", why: "Dysreflexia raises the BP. Here the BP fell to 84/50 mmHg." },
      { text: "Urosepsis", why: "Sepsis develops over hours with fever. It does not cause hives minutes after insertion." },
    ],
    actions: [
      { text: "Give oral diphenhydramine as the first drug", why: "Antihistamines relieve itching but do not treat airway swelling or shock." },
      { text: "Remove the catheter that contains latex", why: "Removing the allergen stops further exposure." },
      { text: "Wait for a tryptase result before treating", why: "Anaphylaxis is treated at once. Lab results do not guide the first dose." },
      { text: "Give IM epinephrine as prescribed", why: "Epinephrine reverses airway swelling and low BP. It is the first drug." },
      { text: "Recheck the vital signs in 1 hour", why: "The client is unstable. Vital signs are checked continuously." },
    ],
    parameters: [
      { text: "Blood pressure", why: "The BP shows whether shock is responding to treatment." },
      { text: "Urine specific gravity", why: "Specific gravity does not guide care of anaphylaxis." },
      { text: "Airway and breath sounds", why: "Throat tightness and wheezes can progress to airway obstruction." },
      { text: "Serum sodium level", why: "Sodium does not guide care of anaphylaxis." },
      { text: "Bladder volume by scan", why: "Bladder volume does not show whether the reaction is improving." },
    ],
    correct: { condition: 0, actions: [1, 3], parameters: [0, 2] },
  },
  {
    ...meta("rn-s08-49", {
      topic: "Body mechanics during a bed bath",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse observes an assistive personnel giving a bed bath to a client in an adjustable bed. Which action shows correct body mechanics?",
      rationale:
        "Raising the bed to about waist height lets the worker keep the back straight and the work close to the body. Bending at the waist to reach across the bed strains the lower back. Twisting the trunk while reaching loads the spine unevenly. A narrow stance gives a small base of support and poor balance.",
      sources: [POTTER, ANA_SPHM],
    }),
    kind: "mc",
    options: [
      { text: "Raises the bed to about waist height first", why: "A working height near the waist keeps the back straight." },
      { text: "Bends at the waist to reach the far side", why: "Reaching with a bent back strains the lower spine." },
      { text: "Twists the trunk to reach supplies behind", why: "Twisting while reaching loads the spine unevenly." },
      { text: "Stands with the feet close together", why: "A narrow stance gives a small base of support and poor balance." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-50", {
      topic: "Distance and radiation dose rate",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client received a therapeutic dose of a radioactive isotope. The radiation safety officer measures a dose rate of 20 microsievert/hour at 1 m from the client. The nurse will stand 2 m from the client while teaching. What dose rate should the nurse expect at 2 m?",
      rationale:
        "Radiation from a point source follows the inverse square law. Doubling the distance from 1 m to 2 m divides the dose rate by 2 squared, which is 4. The expected rate is 5 microsievert/hour. Distance is one of the three tools for limiting exposure, with time and shielding.",
      calc: { expr: "20 / (2 * 2)", answer: 5, unit: "microsievert/hour", round: 0, steps: ["2 * 2 = 4", "20 / 4 = 5"] },
      sources: [NRC_ALARA, BUSHBERG],
    }),
    kind: "mc",
    options: [
      { text: "2.5 microsievert/hour", why: "This divides by 8, as if the rate fell with the cube of the distance." },
      { text: "5 microsievert/hour", why: "Doubling the distance cuts the rate to one fourth, so 20 becomes 5." },
      { text: "10 microsievert/hour", why: "This halves the rate, as if it fell in step with distance." },
      { text: "40 microsievert/hour", why: "Moving away lowers the rate. This doubles it instead." },
    ],
    correct: 1,
  },
];
