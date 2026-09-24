import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c14-5";

const REF_PULSUS = "A fall in systolic BP of more than 10 mmHg during inspiration is pulsus paradoxus.";

/** Case 5. Cardiac surgery intensive care. Older woman on the evening after coronary bypass grafting. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "First Evening After Heart Surgery",
  intro:
    "A 66-year-old woman is in the cardiac surgery intensive care unit after bypass grafting of 3 coronary arteries. Her surgery ended at 1200 and her breathing tube was removed at 1500. Her daughter is at the bedside.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Coronary artery disease in 3 vessels. Type 2 diabetes. Hypertension.",
        "Median sternotomy with 2 mediastinal chest tubes to suction.",
        "Temporary epicardial pacing wires, capped.",
        "Pulmonary artery catheter in place.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Nitroglycerin IV at 10 mcg/minute for BP control.",
        "Cefazolin 2 g IV every 8 hours for 48 hours.",
        "Chest tubes to suction at 20 cm of water.",
        "Keep 2 units of packed red blood cells crossmatched.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1500", "1600", "1700", "1800"],
        rows: [
          ["Heart rate (/minute)", "88", "94", "106", "122"],
          ["BP (mmHg)", "124/68", "116/70", "102/74", "88/72"],
          ["CVP (mmHg)", "8", "10", "14", "18"],
          ["SpO2 (%)", "97", "97", "96", "95"],
          ["Urine output (mL/hour)", "70", "55", "30", "15"],
          ["Chest tube drainage (mL/hour)", "160", "140", "60", "10"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Cues of blood collecting around the heart",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 1810 the nurse examines the client and records the bedside note below. Click to highlight the findings that call for immediate follow-up in this client after cardiac surgery.",
        rationale:
          "Distended neck veins, faint heart sounds and a systolic fall of 18 mmHg on inspiration are signs of pressure around the heart. Clots in the tubing explain why chest tube drainage fell from 160 to 10 mL/hour. Blood that cannot drain collects in the mediastinum. Alertness, a dry dressing, mild pain and secured pacing wires are expected.",
        refs: [REF_PULSUS],
        sources: [SRC.pericardial, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Awake and follows commands]]. [[Neck veins distended with the head of the bed at 30 degrees]]. [[Heart sounds faint and distant]]. [[Sternal dressing dry and intact]]. [[Systolic BP falls 18 mmHg during inspiration]]. [[Incision pain 3 of 10]]. [[Clots seen in the chest tube tubing]]. [[Pacing wires capped and secured]].",
      spans: [
        { text: "Awake and follows commands", why: "An alert client who follows commands shows adequate brain perfusion for now." },
        { text: "Neck veins distended with the head of the bed at 30 degrees", why: "Pressure around the heart blocks venous return, so the neck veins fill." },
        { text: "Heart sounds faint and distant", why: "Blood around the heart muffles the heart sounds." },
        { text: "Sternal dressing dry and intact", why: "A dry dressing is expected. Bleeding can collect inside the chest without soaking it." },
        { text: "Systolic BP falls 18 mmHg during inspiration", why: "A fall of more than 10 mmHg on inspiration is pulsus paradoxus." },
        { text: "Incision pain 3 of 10", why: "Mild incision pain is expected on the day of surgery." },
        { text: "Clots seen in the chest tube tubing", why: "Clots can block drainage and trap blood around the heart." },
        { text: "Pacing wires capped and secured", why: "Capped, secured wires are the expected setup when pacing is not in use." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Interpreting hemodynamic trends after bypass",
        cjmm: "analyze",
        difficulty: 5,
        stem: "The nurse compares the bedside findings with the vital sign trends from 1500 to 1800. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A CVP rising from 8 to 18 mmHg while the BP falls shows the heart cannot fill. The pulse pressure has narrowed to 16 mmHg at 1800. With falling drainage, faint heart sounds and pulsus paradoxus, this fits cardiac tamponade. Bleeding alone would lower the CVP. Rewarming would widen the pulse pressure. The note gives no sign of a collapsed lung.",
        refs: [REF_PULSUS],
        sources: [SRC.pericardial, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client's findings are most consistent with {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "hypovolemia from bleeding", why: "Bleeding lowers the CVP. Here the CVP rose from 8 to 18 mmHg." },
            { text: "tension pneumothorax", why: "The note describes neither absent breath sounds on one side nor a shifted trachea." },
            { text: "cardiac tamponade", why: "A rising CVP, falling BP, narrow pulse pressure and pulsus paradoxus fit compression of the heart." },
            { text: "vasodilation from rewarming", why: "Vasodilation lowers the CVP and widens the pulse pressure." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "urine output of 70 mL/hour at 1500", why: "An output of 70 mL/hour was adequate and does not point to any condition." },
            { text: "a CVP rising from 8 to 18 mmHg", why: "A rising CVP with a falling BP shows blood backing up because the heart cannot fill." },
            { text: "an SpO2 of 97% at 1600", why: "An SpO2 of 97% is normal." },
            { text: "incision pain of 3 of 10", why: "Mild pain is expected and does not point to any condition." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a dry sternal dressing", why: "A dry dressing does not rule out blood collecting inside the chest." },
            { text: "pacing wires that are capped", why: "Capped wires are routine and do not point to any condition." },
            { text: "a heart rate of 88/minute at 1500", why: "A rate of 88/minute is normal." },
            { text: "a pulse pressure narrowing to 16 mmHg", why: "A narrow pulse pressure reflects a small stroke volume from poor filling." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority problem in suspected tamponade",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse identifies several problems for this client at 1815. Which problem is the priority?",
        rationale:
          "Compression of the heart lowers cardiac output and can progress to cardiac arrest. It also causes the falling urine output, so treating it comes first. Anxiety and infection risk matter but do not threaten life now. The urine output will improve only when cardiac output improves.",
        sources: [SRC.pericardial, SRC.sts],
      }),
      kind: "mc",
      options: [
        { text: "Falling urine output from reduced kidney perfusion", why: "Low output is a result of the low cardiac output, not the root problem." },
        { text: "Anxiety in the client and her daughter", why: "Anxiety needs attention, but it does not threaten life now." },
        { text: "Low cardiac output from a compressed heart", why: "Compression of the heart can progress to cardiac arrest." },
        { text: "Risk of a sternal wound infection", why: "Infection is a later risk. It is not the immediate threat." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Medication and blood decisions in suspected tamponade",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 4,
        stem: "The nurse calls the cardiac surgeon, who is on the way to the unit. Which three actions should the nurse anticipate? Select three.",
        rationale:
          "Tamponade limits filling, so the heart depends on preload and a fast rate. Nitroglycerin lowers preload and should stop. Furosemide and metoprolol would lower preload and the rate. The surgeon may reopen the chest at the bedside to relieve the pressure, so the tray is prepared. Blood is kept ready because the source may be active bleeding.",
        sources: [SRC.pericardial, SRC.sts],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Give IV furosemide for the rising CVP", why: "A diuretic lowers preload and can worsen output in tamponade." },
        { text: "Stop the nitroglycerin infusion", why: "Nitroglycerin dilates veins and lowers the preload the heart needs." },
        { text: "Give IV metoprolol for the heart rate", why: "The fast rate is compensating. Slowing it lowers cardiac output further." },
        { text: "Prepare the sterile chest reopening tray", why: "Reopening the chest at the bedside may be needed to relieve the pressure." },
        { text: "Clamp the chest tubes to prevent air entry", why: "Clamping blocks drainage and can worsen the tamponade." },
        { text: "Confirm blood is ready for transfusion", why: "Active bleeding may be the source of the collection." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Supporting family during an emergency",
        cjmm: "action",
        process: "caring",
        difficulty: 2,
        stem: "The surgeon arrives and the team prepares to open the chest. The daughter is crying and says, \"Please tell me what is happening to my mom.\" Which action by the nurse is best?",
        rationale:
          "The daughter needs honest information and support. A brief update tells her what is happening without taking the nurse from the client for long. A staff member who stays with her offers ongoing support. Refusing to share leaves her afraid. A promise that all will be fine may not be true. A detailed explanation now would pull the nurse from urgent care.",
        sources: [SRC.varcarolis, SRC.potter],
      }),
      kind: "mc",
      options: [
        { text: "Tell her no details can be shared right now", why: "Refusing any update leaves her frightened and without support." },
        { text: "Give a brief update and have a staff member stay with her", why: "A short, honest update with ongoing support meets her need without delaying care." },
        { text: "Tell her that everything will be fine in a few minutes", why: "This is false reassurance. The outcome is not known." },
        { text: "Explain the full procedure to her in detail now", why: "A long explanation would pull the nurse from urgent care of the client." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Evaluating sternal precautions",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Clot is removed from around the heart and the client recovers. On day 3 the nurse evaluates how she protects her sternum. For each action, specify whether it is consistent with sternal precautions or needs correction.",
        rationale:
          "Splinting with a pillow supports the sternum during coughing. Rolling to the side and using the legs to sit up avoids strain on the chest. Walking and deep breathing help recovery. Pushing up with both arms and planning to lift a 9 kg child put strain across the healing sternum.",
        sources: [SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Consistent with precautions", "Needs correction"],
      rows: [
        { text: "Hugs a pillow against her chest when she coughs", correct: [0], why: "Splinting with a pillow supports the sternum during coughing." },
        { text: "Pushes up from the bed rails with both arms", correct: [1], why: "Pushing with both arms pulls on the healing sternum." },
        { text: "Rolls to her side and uses her legs to sit up", correct: [0], why: "Rolling and using the legs avoids strain on the chest." },
        { text: "Plans to lift her 9 kg grandson at home", correct: [1], why: "Lifting a heavy load strains the healing sternum." },
        { text: "Walks in the hall 3 times a day", correct: [0], why: "Regular walking aids recovery and does not strain the sternum." },
        { text: "Uses the incentive spirometer every hour while awake", correct: [0], why: "Deep breathing prevents lung collapse after surgery." },
      ],
    },
  ],
};
