import type { Item } from "@/engine/types";
import { CORLANOR, ENTRESTO, GARCIA_2012, HINKLE, LAMICTAL, PRAXBIND, PROTAMINE, RELPREVV, VITAMIN_K, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s35-11", {
      topic: "Risk factors for a protamine reaction",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 66-year-old client received heparin 5000 units IV during a peripheral artery procedure and is now oozing blood from the access site. The primary health care provider prescribes protamine sulfate IV. Before giving it, the nurse reviews the history. Which finding raises the client's risk of a severe reaction to protamine?",
      rationale:
        "NPH insulin contains protamine. Current or past use of protamine-containing insulin is a labeled risk factor for severe protamine reactions, including hypotension and cardiovascular collapse. The nurse tells the prescriber and has resuscitation equipment ready before giving it slowly. Latex allergy, statin use and a past joint replacement are not listed risk factors.",
      sources: [PROTAMINE],
    }),
    kind: "mc",
    options: [
      { text: "Has a latex allergy", why: "Latex allergy is not a listed risk factor for protamine reactions." },
      { text: "Uses NPH insulin twice daily", why: "NPH insulin contains protamine, so prior exposure can sensitize the client." },
      { text: "Takes atorvastatin each night", why: "Statins do not contain protamine and are not a listed risk factor." },
      { text: "Had a knee replacement last year", why: "A past joint replacement does not raise the risk of a protamine reaction." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-12", {
      topic: "Follow-up after dabigatran reversal",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 79-year-old client taking dabigatran was admitted with gastrointestinal bleeding and received idarucizumab 5 g IV at 0900. The aPTT was 31 seconds at 1000. The nurse reviews the findings at 2100. Which finding should the nurse report to the primary health care provider now?",
      rationale:
        "Idarucizumab binds dabigatran, but some clients show a second rise in clotting times as drug moves back from the tissues into the blood. A new black stool with the aPTT climbing from 31 to 58 seconds means bleeding has returned with renewed anticoagulant effect. The label states a second 5 g dose may be considered in this case. A stable hemoglobin, stable vital signs and an unchanged bruise do not need urgent action.",
      sources: [PRAXBIND],
    }),
    kind: "mc",
    options: [
      { text: "New black stool and aPTT up from 31 to 58 seconds", why: "Renewed bleeding with a rising aPTT suggests dabigatran effect has returned and needs review now." },
      { text: "Hemoglobin 9.4 g/dL (94 g/L), unchanged from the 1000 result", why: "A stable hemoglobin shows no new blood loss since the morning." },
      { text: "BP 124/70 mmHg and heart rate 84/minute", why: "These vital signs are stable and show no sign of new bleeding." },
      { text: "Bruise at the IV site, unchanged in size", why: "An unchanged bruise does not suggest active bleeding." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-13", {
      topic: "Adjusting heparin by an aPTT protocol",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client who weighs 90 kg has a deep vein thrombosis and receives heparin at 18 units/kg/hour by IV infusion. The bag contains heparin 25 000 units in 500 mL. The 6-hour aPTT is 41 seconds. Using the unit protocol in the exhibit, at what rate in mL/hour should the nurse set the pump after giving the bolus?",
      tabs: [
        {
          title: "Orders",
          text: "Weight-based heparin protocol. Adjust after each aPTT.\naPTT below 35 seconds: bolus 80 units/kg, then increase the infusion by 4 units/kg/hour.\naPTT 35 to 45 seconds: bolus 40 units/kg, then increase the infusion by 2 units/kg/hour.\naPTT 46 to 70 seconds: no change.\naPTT 71 to 90 seconds: decrease the infusion by 2 units/kg/hour.\naPTT above 90 seconds: hold the infusion 1 hour, then decrease by 3 units/kg/hour.",
        },
      ],
      rationale:
        "An aPTT of 41 seconds falls in the 35 to 45 second row. The protocol gives a bolus of 40 units/kg and raises the infusion by 2 units/kg/hour. The new dose is 20 units/kg/hour. For 90 kg that is 1800 units/hour. The bag holds 50 units in each mL, so the pump runs at 36 mL/hour. A second nurse checks the new rate.",
      calc: { expr: "(18 + 2) * 90 / (25000 / 500)", answer: 36, unit: "mL/hour", round: 0, steps: ["18 + 2 = 20", "20 * 90 = 1800", "25000 / 500 = 50", "1800 / 50 = 36"] },
      sources: [GARCIA_2012],
    }),
    kind: "mc",
    options: [
      { text: "32.4 mL/hour", why: "This is the current rate of 18 units/kg/hour. The protocol calls for an increase." },
      { text: "36 mL/hour", why: "20 units/kg/hour for 90 kg is 1800 units/hour, which is 36 mL/hour at 50 units/mL." },
      { text: "39.6 mL/hour", why: "This adds 4 units/kg/hour, the change for an aPTT below 35 seconds." },
      { text: "72 mL/hour", why: "This treats the 40 units/kg bolus as an hourly rate." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-14", {
      topic: "Laboratory trend during sacubitril-valsartan titration",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 70-year-old client with heart failure with reduced ejection fraction started sacubitril-valsartan 4 weeks ago. The dose was doubled at week 2. The prescription is to double it again today if the client tolerates it. The client reports no dizziness. Based on the trend, which finding should the nurse report before the dose increase?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Result", "Start", "Week 2", "Week 4"],
            rows: [
              ["BP (mmHg)", "128/76", "116/70", "108/66"],
              ["Heart rate (/minute)", "78", "74", "72"],
              ["Potassium, mEq/L (mmol/L)", "4.6 (4.6)", "5.1 (5.1)", "5.9 (5.9)"],
              ["Creatinine, mg/dL (micromol/L)", "1.1 (97)", "1.2 (106)", "1.3 (115)"],
              ["Weight (kg)", "82.4", "81.6", "81.2"],
            ],
          },
        },
      ],
      rationale:
        "Potassium has climbed from 4.6 to 5.9 mEq/L over 4 weeks and is now above the normal range. Sacubitril-valsartan blocks the renin angiotensin system and can raise potassium. The label calls for dose reduction or interruption when hyperkalemia occurs, so the nurse reports it before any increase. A BP of 108/66 mmHg without dizziness is acceptable. The creatinine change is small. The slight weight loss fits less fluid.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [ENTRESTO, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "BP down to 108/66 mmHg", why: "A lower BP is an expected effect, and the client has no dizziness." },
      { text: "Creatinine up to 1.3 mg/dL (115 micromol/L)", why: "A rise from 1.1 to 1.3 mg/dL is small and expected with this class." },
      { text: "Potassium up to 5.9 mEq/L (5.9 mmol/L)", why: "A level above 5.0 mEq/L that keeps rising calls for review before a higher dose." },
      { text: "Weight down to 81.2 kg", why: "A small weight loss fits less fluid retention and is a good sign." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s35-15", {
      topic: "Ivabradine teaching points",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 63-year-old client with heart failure with reduced ejection fraction starts ivabradine 5 mg by mouth twice daily. The client drives a delivery van at night. Which instructions should the nurse include in the teaching? Select all that apply.",
      rationale:
        "Ivabradine is taken twice daily with food. It can cause brief bright spots or halos in vision, mostly with sudden light changes, so care is needed when driving at night. These often fade with time and are not a reason to stop on one's own. Atrial fibrillation is a labeled risk, so a racing or irregular heartbeat is reported. Grapefruit juice raises drug levels. Dizziness and tiredness can signal a slow heart rate.",
      sources: [CORLANOR],
    }),
    kind: "sata",
    options: [
      { text: "Take each dose with food", why: "The label directs that ivabradine is taken with meals." },
      { text: "Stop the drug if light flashes appear", why: "Light flashes are common, often fade and are reported rather than a reason to stop alone." },
      { text: "Use caution driving when light changes suddenly", why: "Visual light effects are triggered by sudden changes in light, as with oncoming headlights." },
      { text: "Expect dizziness and tiredness as harmless effects", why: "These can signal a slow heart rate and are reported." },
      { text: "Report a racing or irregular heartbeat", why: "Ivabradine raises the risk of atrial fibrillation." },
      { text: "Avoid drinking grapefruit juice", why: "Grapefruit juice inhibits the enzyme that clears ivabradine and raises its level." },
      { text: "Take an extra dose if the pulse is high", why: "Doses are adjusted by the prescriber. Extra doses risk bradycardia." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s35-16", {
      topic: "Home drug that conflicts with ivabradine",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 66-year-old client with heart failure with reduced ejection fraction has a resting heart rate of 78/minute on the highest tolerated dose of metoprolol. The primary health care provider prescribes ivabradine 5 mg by mouth twice daily. The home list also includes diltiazem, furosemide and atorvastatin. Which home drug should the nurse question?",
      rationale:
        "Diltiazem inhibits the enzyme that clears ivabradine, which raises ivabradine levels. Diltiazem also slows the heart. The label advises avoiding the combination because of bradycardia risk. Ivabradine is meant to be added to a beta blocker at the highest tolerated dose, so metoprolol is expected. Furosemide and atorvastatin do not interact in this way.",
      sources: [CORLANOR],
    }),
    kind: "mc",
    options: [
      { text: "Diltiazem", why: "Diltiazem raises ivabradine levels and adds to heart rate slowing, so the label advises avoiding it." },
      { text: "Metoprolol", why: "Ivabradine is intended for clients already on a beta blocker at the highest tolerated dose." },
      { text: "Furosemide", why: "Furosemide treats fluid overload and does not raise ivabradine levels." },
      { text: "Atorvastatin", why: "Atorvastatin does not slow the heart or raise ivabradine levels." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-17", {
      topic: "Giving IV phytonadione safely",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client taking warfarin has black stools and an INR of 6.8. The primary health care provider prescribes phytonadione 10 mg IV once. The client has no allergies. How should the nurse give this dose?",
      rationale:
        "IV phytonadione can cause severe hypersensitivity reactions, including fatal anaphylaxis. The label directs that the IV dose is given slowly, at no more than 1 mg per minute. A 10 mg dose therefore takes at least 10 minutes, with the client observed closely. A fast push raises the reaction risk. An IM injection in a client with an INR of 6.8 risks a hematoma. Changing the route needs a new prescription.",
      sources: [VITAMIN_K],
    }),
    kind: "mc",
    options: [
      { text: "Push it undiluted over 1 minute", why: "A rapid push raises the risk of a severe hypersensitivity reaction." },
      { text: "Inject it into the deltoid muscle", why: "An IM injection with an INR of 6.8 risks a hematoma, and the prescription is IV." },
      { text: "Give the injectable solution by mouth with water", why: "Changing the route needs a new prescription from the provider." },
      { text: "Infuse it diluted over at least 10 minutes", why: "A rate of 1 mg per minute or slower lowers the risk of a severe reaction." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-18", {
      topic: "Fever and mouth sores on lamotrigine",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 24-year-old client with bipolar disorder started lamotrigine 3 weeks ago and moved to 50 mg daily last week. The client calls to report a red rash on the chest, sores inside the mouth, burning eyes and a temperature of 38.6°C (101.5°F). What should the nurse tell the client?",
      rationale:
        "Nearly all life-threatening lamotrigine rashes start within 2 to 8 weeks of the first dose. A rash with fever, mouth sores and eye involvement suggests Stevens-Johnson syndrome. The label directs that the drug is stopped at the first sign of rash unless it is clearly unrelated. This client needs urgent evaluation today. An antihistamine, a lower dose or waiting for a routine visit delays care.",
      refs: ["Nearly all life-threatening lamotrigine rashes occur within 2 to 8 weeks of starting treatment."],
      sources: [LAMICTAL],
    }),
    kind: "mc",
    options: [
      { text: "Take an antihistamine tonight and keep taking the usual dose", why: "Treating the itch does not stop a reaction that can become life threatening." },
      { text: "Stop lamotrigine and go to an emergency department now", why: "Rash with fever, mouth sores and eye symptoms needs urgent care and the drug stopped." },
      { text: "Cut the dose in half until the rash fades", why: "A lower dose does not make a serious rash safe. The drug is stopped." },
      { text: "Keep taking it and come to the clinic next week", why: "A week's delay could let the reaction progress." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-19", {
      topic: "Restarting lamotrigine after a long gap",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 40-year-old client with bipolar disorder has been stable on lamotrigine 200 mg daily and takes no other drugs. The client ran out of tablets and took none for 10 days. The client has picked up a refill and plans to take 200 mg tonight. Which response by the nurse is best?",
      rationale:
        "After a gap longer than 5 half-lives, the label advises restarting lamotrigine with the initial slow titration. A gap of 10 days is longer than that for a client on no interacting drugs. Restarting at the full dose raises the risk of a serious rash, because exceeding the starting dose is a known rash risk factor. The prescriber sets a new schedule. Doubling up or a fast climb carries the same risk.",
      refs: ["In adults taking no interacting drugs, the mean lamotrigine half-life is about 33 hours, so 5 half-lives is about 7 days."],
      sources: [LAMICTAL],
    }),
    kind: "mc",
    options: [
      { text: "\"Restart the full 200 mg tonight because your body is used to it.\"", why: "After a gap this long, a full dose acts like a start above the labeled dose and raises the risk of serious rash." },
      { text: "\"Take 100 mg tonight and go back to 200 mg tomorrow.\"", why: "A 1-day step is far faster than the labeled restart titration." },
      { text: "\"Hold the tablets and call your prescriber for a restart plan.\"", why: "After 10 days off, the drug restarts at a low dose with slow titration set by the prescriber." },
      { text: "\"Take 400 mg tonight to build your level back up.\"", why: "A double dose raises the risk of a life-threatening rash." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s35-20", {
      topic: "Care after an olanzapine pamoate injection",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 33-year-old client with schizophrenia receives a scheduled injection of olanzapine pamoate extended-release in the clinic. This is the client's fifth monthly injection. The client drove to the appointment. Which actions should the nurse include in the plan after the injection? Select all that apply.",
      rationale:
        "Olanzapine pamoate can cause a post-injection delirium and sedation syndrome when drug enters the blood too fast. Most cases start within 3 hours, so the client is observed for at least 3 hours after every injection. Before release, the nurse confirms the client is alert and oriented. The client is accompanied to the destination and does not drive for the rest of the day.",
      refs: ["After each olanzapine pamoate injection, the client is observed for at least 3 hours in a certified setting."],
      sources: [RELPREVV],
    }),
    kind: "sata",
    options: [
      { text: "Let the client drive home if alert after 1 hour", why: "The syndrome can begin after 1 hour, and driving is avoided for the rest of the day." },
      { text: "Observe the client in the clinic for at least 3 hours", why: "Most post-injection reactions begin within 3 hours." },
      { text: "Stop observing because this is not the first injection", why: "The reaction can occur after any injection, so observation follows each one." },
      { text: "Confirm the client is alert and oriented before release", why: "Sedation or confusion is a sign of the post-injection syndrome." },
      { text: "Arrange for someone to go home with the client", why: "The label requires that the client is accompanied to the destination." },
      { text: "Advise the client not to drive for the rest of the day", why: "Delayed sedation can still occur after the observation period." },
    ],
    correct: [1, 3, 4, 5],
  },
];
