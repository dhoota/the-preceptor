import type { Item } from "@/engine/types";
import { ACG_CELIAC, ASPEN_EN, HINKLE, HOCKENBERRY, LOWDERMILK, MASCC, NIDDK_DUMP, POTTER, meta } from "./common";

/** Batch s14, items 11 to 20. */
export const PART2: Item[] = [
  {
    ...meta("rn-s14-11", {
      topic: "Handling a damp plaster cast",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client has a new plaster cast on the left forearm. The cast is still damp. How should the nurse handle the cast when moving the arm?",
      rationale:
        "A damp plaster cast dents easily. The palms spread the pressure over a wide area, so the cast keeps its shape. A dent made by fingertips presses on the skin underneath and can cause a pressure injury. Lifting by an edge or gripping one end puts force on a small area of soft plaster.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Support it on the fingertips of one hand", why: "Fingertips leave dents that press on the skin under the cast." },
      { text: "Cradle it with the palms of both hands", why: "The palms spread the pressure so the damp cast keeps its shape." },
      { text: "Lift it by the edge near the elbow", why: "Lifting by the edge can crack or bend the soft plaster." },
      { text: "Grip the cast firmly at the wrist end", why: "A firm grip on one end dents the plaster under the fingers." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-12", {
      topic: "Care of skin traction before hip surgery",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "An 82-year-old client with a right hip fracture awaits surgery. Buck's traction with 3 kg of weight is applied to the right leg. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Traction works only when the weight hangs freely and the rope runs smoothly in the pulley. The foam boot can rub the skin of a frail older adult, so the skin around it is checked. Pedal pulses and toe movement show that the boot is not compressing vessels or nerves. Resting the weight on the floor stops the traction. Weight is changed only by prescription. A knot against the pulley blocks the pull.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Keep the weight hanging freely", why: "A freely hanging weight keeps a steady pull on the leg." },
      { text: "Rest the weight on the floor when turning", why: "A weight on the floor removes the traction and lets the fracture move." },
      { text: "Keep the rope in the pulley groove", why: "A rope in the groove moves smoothly and keeps the pull in line." },
      { text: "Add weight when the client reports pain", why: "Traction weight is set by prescription. The nurse does not change it for pain." },
      { text: "Inspect the skin around the traction boot", why: "The boot can rub and break down fragile skin." },
      { text: "Tie the knot so it rests on the pulley", why: "A knot against the pulley stops the rope moving and blocks the pull." },
      { text: "Check pedal pulses and toe movement", why: "Pulses and movement show that the boot is not compressing vessels or nerves." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s14-13", {
      topic: "Perineal comfort soon after birth",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A client gave birth vaginally 2 hours ago and has a repaired second-degree laceration. The perineum is swollen, and the client rates perineal pain 5 of 10. Which comfort measure should the nurse use first?",
      rationale:
        "Cold narrows blood vessels, which limits swelling and numbs the area. It is used in the first 24 hours after birth, so it fits a client 2 hours after birth with a swollen perineum. Warm sitz baths and warm compresses increase blood flow. They are used after the first 24 hours. A heat lamp adds heat to swollen tissue now.",
      refs: ["Cold is applied to a swollen perineum in the first 24 hours after birth. Warm sitz baths are used after that."],
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Soak in a warm sitz bath for relief", why: "Warm sitz baths increase blood flow and are used after the first 24 hours." },
      { text: "Apply a warm perineal compress", why: "Heat in the first hours after birth can add to the swelling." },
      { text: "Apply an ice pack to the perineum", why: "Cold limits swelling and numbs the area in the first 24 hours." },
      { text: "Aim a heat lamp at the perineum", why: "A heat lamp adds heat to tissue that is still swelling." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s14-14", {
      topic: "Teaching about a TENS unit",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches a client with chronic low back pain how to use a transcutaneous electrical nerve stimulation (TENS) unit at home. Which statement by the client needs further teaching?",
      rationale:
        "TENS electrodes go on clean, dry, intact skin. Placing them over a rash or broken skin can burn or irritate it further. The intensity is raised until the client feels a comfortable tingling. The unit is turned off before the pads are moved so the client does not get a shock.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I will put the pads on clean, dry skin.\"", why: "Clean, dry skin helps the pads stick and conduct evenly." },
      { text: "\"I will raise it until I feel a tingle.\"", why: "A comfortable tingling shows the setting is working." },
      { text: "\"I can put the pads over the rash on my back.\"", why: "Electrodes on broken or irritated skin can cause burns. The client needs more teaching." },
      { text: "\"I will switch it off before I move the pads.\"", why: "Turning the unit off first prevents a sudden jolt." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s14-15", {
      topic: "Gluten-free meal choices",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client newly diagnosed with celiac disease asks the nurse for help planning meals. Complete the following sentences by choosing from the lists of options.",
      rationale:
        "Celiac disease is treated with a lifelong gluten-free diet. Gluten is found in wheat, barley and rye. Spelt and couscous are forms of wheat. Breaded foods use wheat flour. Corn, rice and plain fish contain no gluten.",
      sources: [ACG_CELIAC],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "For breakfast, the client may choose {0}. For dinner, the client may choose {1}.",
    blanks: [
      {
        options: [
          { text: "wheat toast", why: "Wheat contains gluten." },
          { text: "barley porridge", why: "Barley contains gluten." },
          { text: "rye crackers", why: "Rye contains gluten." },
          { text: "corn tortillas", why: "Plain corn contains no gluten." },
        ],
        correct: 3,
      },
      {
        options: [
          { text: "spelt pasta", why: "Spelt is a type of wheat and contains gluten." },
          { text: "rice and baked fish", why: "Rice and plain fish contain no gluten." },
          { text: "couscous salad", why: "Couscous is made from wheat." },
          { text: "breaded chicken", why: "The breading is made from wheat flour." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s14-16", {
      topic: "Protecting a flaccid shoulder after stroke",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had a left hemisphere stroke 2 days ago. The right arm is flaccid. The client is sitting in a chair for lunch. Which action by the nurse protects the right shoulder?",
      rationale:
        "A flaccid arm has no muscle tone to hold the humerus in the shoulder joint. Resting the forearm on a pillow or lap tray supports the joint and prevents subluxation. An arm left hanging is pulled down by gravity. Pulling on the weak arm can dislocate the shoulder. Holding the arm bent tightly across the chest encourages a flexion contracture.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Let the arm hang at the side of the chair", why: "Gravity pulls the unsupported arm down and can sublux the shoulder." },
      { text: "Rest the forearm on a pillow or lap tray", why: "Support under the forearm holds the humerus in the joint." },
      { text: "Help the client up by pulling the right arm", why: "Pulling on a flaccid arm can injure or dislocate the shoulder." },
      { text: "Keep the arm bent tightly across the chest", why: "Holding the arm flexed promotes a flexion contracture." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-17", {
      topic: "Sleep habits for a teenager",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 15-year-old sleeps about 6 hours on school nights and falls asleep in class. The adolescent uses a phone in bed until after midnight. Which three suggestions should the nurse make? Select three.",
      rationale:
        "Six hours is less sleep than adolescents need. Screen light and activity in bed delay sleep onset, so the phone stays out of the bedroom. A steady wake time, including weekends, keeps the body clock stable. A dark, cool room supports sleep. Energy drinks, long late naps, hard exercise at bedtime and long weekend lie-ins all disrupt the sleep pattern.",
      sources: [HOCKENBERRY, POTTER],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Leave the phone outside the bedroom at night", why: "Removing the phone cuts screen light and late activity that delay sleep." },
      { text: "Keep the same wake time on weekends", why: "A steady wake time keeps the body clock stable." },
      { text: "Have an energy drink before homework", why: "Caffeine late in the day delays sleep onset." },
      { text: "Take a long nap in the early evening", why: "A long late nap lowers sleep drive and delays bedtime." },
      { text: "Keep the bedroom dark and cool", why: "A dark, cool room supports falling and staying asleep." },
      { text: "Exercise hard just before bedtime", why: "Vigorous exercise close to bedtime raises alertness." },
      { text: "Sleep late on weekends to catch up", why: "Long weekend lie-ins shift the body clock later." },
    ],
    correct: [0, 1, 4],
  },
  {
    ...meta("rn-s14-18", {
      topic: "Mouth care with chemotherapy sores",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receiving chemotherapy has painful red sores inside the mouth. The client can still eat soft foods. Which oral care measure should the nurse use?",
      rationale:
        "Basic oral care during chemotherapy keeps the mouth clean without more injury. A soft toothbrush removes plaque gently. A bland saline rinse cleans and soothes. A firm brush can tear inflamed tissue. Alcohol dries and stings the mucosa. Lemon-glycerin swabs dry the mouth and the acid irritates the sores.",
      sources: [MASCC, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Use a soft brush and rinse with saline", why: "A soft brush and saline clean the mouth without harming sore tissue." },
      { text: "Brush with a firm toothbrush after meals", why: "A firm brush can tear inflamed mucosa and cause bleeding." },
      { text: "Rinse with an alcohol-based mouthwash", why: "Alcohol dries the mucosa and stings open sores." },
      { text: "Clean the mouth with lemon-glycerin swabs", why: "Lemon-glycerin dries the mouth and its acid irritates sores." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s14-19", {
      topic: "Symptoms soon after meals following gastric surgery",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client had a partial gastrectomy 6 weeks ago. The client reports cramping, diarrhea, sweating, dizziness and a racing heart about 20 minutes after meals. The client drinks two glasses of juice with each meal. Heart rate after lunch is 112/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Cramping, diarrhea, sweating, dizziness and a heart rate of 112/minute about 20 minutes after meals fit early dumping syndrome. Food and sugary fluid enter the small bowel too fast and pull fluid into it. Six small meals a day and drinking liquids 30 minutes after meals slow the emptying. Symptoms after meals show whether the plan works. Weight shows whether intake is enough.",
      sources: [NIDDK_DUMP, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Early dumping syndrome", why: "Symptoms within 30 minutes of eating after gastric surgery fit early dumping." },
      { text: "Late dumping syndrome", why: "Late dumping starts hours after a meal and comes from low blood glucose." },
      { text: "Anastomotic leak", why: "A leak causes fever and abdominal pain, usually soon after surgery, not a meal pattern." },
      { text: "Pernicious anemia", why: "Vitamin B12 deficiency develops slowly and does not follow each meal." },
    ],
    actions: [
      { text: "Eat six small meals a day", why: "Small meals reduce the load entering the small bowel at once." },
      { text: "Drink juice with meals for fluid", why: "Sugary fluid with meals speeds emptying and worsens dumping." },
      { text: "Drink liquids 30 minutes after meals", why: "Separating liquids from solids slows gastric emptying." },
      { text: "Choose sweets for quick energy", why: "Simple sugars draw fluid into the bowel and worsen symptoms." },
      { text: "Walk briskly right after meals", why: "Lying down after meals slows emptying. Brisk walking does not help." },
    ],
    parameters: [
      { text: "Serum amylase level", why: "Amylase tracks pancreatic injury, not dumping." },
      { text: "Symptoms after each meal", why: "Fewer symptoms after meals show the diet changes are working." },
      { text: "Peak expiratory flow", why: "Peak flow measures airway narrowing, not dumping." },
      { text: "Weekly body weight", why: "Weight shows whether intake meets needs despite the symptoms." },
      { text: "Hemoglobin A1C level", why: "A1C reflects diabetes control over months, not dumping." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s14-20", {
      topic: "Giving medications through a gastrostomy tube",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse observes a new graduate nurse giving three oral medications through a client's gastrostomy tube. Which action by the new graduate nurse needs correction?",
      rationale:
        "Crushing an extended-release tablet releases the whole dose at once and can cause toxicity. It can also clog the tube. The nurse asks the pharmacist or primary health care provider for another form. Pausing the feeding, giving each medication on its own and flushing with water between them are safe practice.",
      sources: [ASPEN_EN, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Pauses the feeding before giving the doses", why: "Pausing the feeding limits interactions between formula and drugs." },
      { text: "Flushes the tube with water between doses", why: "Flushing between doses stops drugs mixing and clogging the tube." },
      { text: "Gives each medication on its own", why: "Giving drugs separately avoids interactions and clogging." },
      { text: "Crushes an extended-release tablet", why: "Crushing it releases the full dose at once. This action needs correction." },
    ],
    correct: 3,
  },
];
