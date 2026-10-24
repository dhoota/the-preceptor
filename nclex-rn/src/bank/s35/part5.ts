import type { Item } from "@/engine/types";
import { ACYCLOVIR_SUSP, CABENUVA, DOBUTAMINE, EDURANT, HYPERGLYCEMIC_2024, ISMP_HIGH, LTBI_2020, MILRINONE, MYXREDLIN, PFIZERPEN, YESCARTA, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s35-41", {
      topic: "Capped weight-based acyclovir dose for chickenpox",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 11-year-old child who weighs 44 kg has had chickenpox for 18 hours. The prescription is acyclovir oral suspension 20 mg/kg/dose by mouth 4 times daily for 5 days, not to exceed 800 mg per dose. The suspension contains 200 mg/5 mL. How many mL should the nurse give for each dose?",
      rationale:
        "The weight-based amount is 20 mg/kg for 44 kg, which is 880 mg. This is above the 800 mg cap, so each dose is 800 mg. The suspension holds 40 mg in each mL. Dividing 800 mg by 40 mg/mL gives 20 mL. The label gives children over 40 kg the adult dose of 800 mg. The child also drinks plenty of fluids while taking acyclovir.",
      calc: { expr: "800 / (200 / 5)", answer: 20, unit: "mL", round: 0, steps: ["20 * 44 = 880", "200 / 5 = 40", "800 / 40 = 20"] },
      sources: [ACYCLOVIR_SUSP],
    }),
    kind: "mc",
    options: [
      { text: "4 mL", why: "This reads the strength as 200 mg in each mL instead of in 5 mL." },
      { text: "20 mL", why: "The capped dose of 800 mg divided by 40 mg/mL is 20 mL." },
      { text: "22 mL", why: "This gives 880 mg, which is above the 800 mg cap." },
      { text: "88 mL", why: "This gives the whole day's weight-based amount in one dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-42", {
      topic: "Acid suppression and rilpivirine failure",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 38-year-old client with HIV has had an undetectable viral load for 2 years on a once daily tablet of rilpivirine, emtricitabine and tenofovir alafenamide. The viral load is now 2400 copies/mL. The client takes the tablet at 0700 with breakfast and reports no missed doses. Two months ago the client began omeprazole 20 mg daily for heartburn. The client sometimes takes calcium carbonate 4 hours after the tablet. Which factor most likely explains the rise in viral load?",
      rationale:
        "Rilpivirine needs stomach acid to be absorbed. Proton pump inhibitors such as omeprazole raise gastric pH and can sharply lower rilpivirine levels, so the label lists them as contraindicated. The timing fits, because the viral load rose after omeprazole began. Taking the tablet with a meal is correct. Antacids are allowed when taken at least 4 hours after rilpivirine. A fixed morning time supports steady levels.",
      sources: [EDURANT],
    }),
    kind: "mc",
    options: [
      { text: "Starting omeprazole for heartburn", why: "Omeprazole raises gastric pH and lowers rilpivirine absorption, which can lead to viral rebound." },
      { text: "Taking the tablet with breakfast", why: "Rilpivirine is meant to be taken with a meal for good absorption." },
      { text: "Using calcium carbonate 4 hours later", why: "Antacids taken at least 4 hours after rilpivirine are allowed." },
      { text: "Taking the tablet at 0700 each day", why: "A fixed daily time keeps drug levels steady." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-43", {
      topic: "Covering a missed long-acting HIV injection",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 33-year-old client with HIV receives monthly injections of cabotegravir and rilpivirine and has an undetectable viral load. The client will travel abroad for 6 weeks and will miss the next injection visit. The prescriber orders daily oral cabotegravir and rilpivirine for the trip. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Missing a monthly injection by more than 7 days risks viral rebound and resistance, because drug levels fall below what suppresses the virus. Daily oral cabotegravir and rilpivirine can replace missed visits for up to 2 months. The first tablet is taken about 1 month after the last injection. Doses are taken with a meal at about the same time each day. The tablets continue until the day injections restart.",
      refs: ["When a monthly injection visit will be missed by more than 7 days, daily oral cabotegravir and rilpivirine may replace it for up to 2 months."],
      sources: [CABENUVA],
    }),
    kind: "sata",
    options: [
      { text: "Rely on the last injection to last through the trip", why: "Levels fall below suppressive levels before 6 weeks pass, which risks resistance." },
      { text: "Take the first tablets about 1 month after the last shot", why: "Oral therapy starts when the next injection would have been due." },
      { text: "Take both tablets with a meal at the same time each day", why: "Rilpivirine is absorbed best with food, and a fixed time keeps levels steady." },
      { text: "Get a double injection when you return", why: "Injection doses after a gap follow the label schedule, not a doubled dose." },
      { text: "Keep taking the tablets until the day injections restart", why: "Stopping early leaves a gap without suppressive drug levels." },
      { text: "Skip the tablets on days spent traveling", why: "Missed doses raise the risk of viral rebound and resistance." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s35-44", {
      topic: "Discharge teaching after CAR T-cell therapy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 57-year-old client is ready for discharge 9 days after receiving axicabtagene ciloleucel for lymphoma. The spouse will stay with the client. The couple lives 3 hours from the treatment center. Which instructions should the nurse include in the discharge teaching? Select all that apply.",
      rationale:
        "Cytokine release syndrome and neurologic toxicity can still develop after discharge. The label advises staying near a health care facility for at least 2 weeks after infusion and not driving for at least 2 weeks. A temperature of 38.0°C (100.4°F) or higher, confusion, shaking chills or a fast heartbeat needs a call or emergency care right away. Home treatment of fever delays care.",
      refs: ["After axicabtagene ciloleucel, clients stay near a health care facility for at least 2 weeks and avoid driving for at least 2 weeks."],
      sources: [YESCARTA],
    }),
    kind: "sata",
    options: [
      { text: "Stay near a health care facility for at least 2 weeks", why: "Serious reactions can still occur and need prompt treatment." },
      { text: "Drive yourself home today if you feel well", why: "Driving is avoided for at least 2 weeks because of neurologic risk." },
      { text: "Call right away for a temperature of 38.0°C (100.4°F) or more", why: "Fever can be the first sign of cytokine release syndrome." },
      { text: "Treat a fever at home for 2 days before calling", why: "Waiting delays treatment of a possibly life-threatening reaction." },
      { text: "Have the spouse report any confusion right away", why: "Confusion can be a sign of neurologic toxicity." },
      { text: "Expect no new effects once you leave the hospital", why: "Reactions can occur after discharge, which is why the client stays nearby." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s35-45", {
      topic: "Checking a pediatric rifampin dose by weight",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 6-year-old child who weighs 26 kg has latent tuberculosis infection. The prescription is rifampin 450 mg by mouth once daily for 4 months. The recommended pediatric dose is 15 to 20 mg/kg/day, with a maximum of 600 mg. Which statement about the prescribed dose is accurate?",
      rationale:
        "Dividing 450 mg by 26 kg gives 17.3 mg/kg/day. This falls inside the 15 to 20 mg/kg/day range and below the 600 mg maximum, so the dose is safe to give. Dividing by the weight in pounds gives a falsely low value. Using the 600 mg maximum in place of the prescribed dose gives a falsely high value.",
      calc: { expr: "450 / 26", answer: 17.307692307692307, unit: "mg/kg/day", round: 1, steps: ["450 / 26 = 17.3"] },
      sources: [LTBI_2020],
    }),
    kind: "mc",
    options: [
      { text: "7.9 mg/kg/day, below the range", why: "This divides by the weight in pounds instead of kilograms." },
      { text: "17.3 mg/kg/day, above the range", why: "17.3 mg/kg/day is between 15 and 20 mg/kg/day, so it is within the range." },
      { text: "17.3 mg/kg/day, within the range", why: "450 mg divided by 26 kg is 17.3 mg/kg/day, inside the 15 to 20 mg/kg/day range." },
      { text: "23.1 mg/kg/day, above the range", why: "This uses the 600 mg maximum instead of the prescribed 450 mg." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s35-46", {
      topic: "Reconstituting penicillin G to a chosen strength",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The prescription is penicillin G potassium 2 000 000 units IV every 4 hours. The vial holds 5 000 000 units of powder. Following the label table in the exhibit, the nurse adds 8.2 mL of sterile water to the vial. How many mL of the reconstituted solution contain the dose?",
      tabs: [
        {
          title: "Orders",
          text: "Label reconstitution table for the 5 000 000 unit vial.\nAdd 18.2 mL of diluent: about 250 000 units/mL.\nAdd 8.2 mL of diluent: about 500 000 units/mL.\nAdd 3.2 mL of diluent: about 1 000 000 units/mL.",
        },
      ],
      rationale:
        "Adding 8.2 mL gives about 500 000 units in each mL. Dividing 2 000 000 units by 500 000 units/mL gives 4 mL. The dissolved powder adds volume, so the final strength comes from the label table, not from the diluent volume alone. The vial is labeled with the strength, date and time once mixed.",
      calc: { expr: "2000000 / 500000", answer: 4, unit: "mL", round: 0, steps: ["2000000 / 500000 = 4"] },
      sources: [PFIZERPEN],
    }),
    kind: "mc",
    options: [
      { text: "0.4 mL", why: "This divides the dose by the units in the whole vial and reads the result as mL." },
      { text: "2 mL", why: "This uses the 1 000 000 units/mL strength made with 3.2 mL of diluent." },
      { text: "3.3 mL", why: "This treats 8.2 mL as the final volume and ignores the volume the powder adds." },
      { text: "4 mL", why: "2 000 000 units divided by 500 000 units/mL is 4 mL." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-47", {
      topic: "Checking the dose a dobutamine pump delivers",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client who weighs 80 kg has a prescription for dobutamine 5 mcg/kg/minute IV. The premixed bag contains dobutamine 500 mg in 250 mL. At the start of the shift the nurse finds the pump running at 18 mL/hour. What dose in mcg/kg/minute is the client receiving?",
      rationale:
        "The bag holds 500 mg in 250 mL, which is 2000 mcg in each mL. At 18 mL/hour the client receives 36 000 mcg each hour, or 600 mcg each minute. Divided by 80 kg, that is 7.5 mcg/kg/minute, which is higher than prescribed. The prescribed dose needs 12 mL/hour. The nurse corrects the rate per the prescription, checks heart rate and rhythm and reports the error.",
      calc: { expr: "18 * (500 * 1000 / 250) / 60 / 80", answer: 7.5, unit: "mcg/kg/minute", round: 1, steps: ["500 * 1000 / 250 = 2000", "18 * 2000 = 36000", "36000 / 60 = 600", "600 / 80 = 7.5"] },
      sources: [DOBUTAMINE, ISMP_HIGH],
    }),
    kind: "mc",
    options: [
      { text: "3.75 mcg/kg/minute", why: "This uses a strength of 1000 mcg/mL, half the strength of this bag." },
      { text: "7.5 mcg/kg/minute", why: "18 mL/hour of 2000 mcg/mL is 600 mcg/minute, which is 7.5 mcg/kg/minute for 80 kg." },
      { text: "12 mcg/kg/minute", why: "12 is the mL/hour rate that would give the prescribed dose, not the dose now running." },
      { text: "15 mcg/kg/minute", why: "This uses a strength of 4000 mcg/mL, twice the strength of this bag." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-48", {
      topic: "Overlap when moving from IV to subcutaneous insulin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 26-year-old client with type 1 diabetes is recovering from diabetic ketoacidosis on an IV regular insulin infusion. The ketoacidosis has resolved and the client is eating breakfast. At 0800 the primary health care provider prescribes insulin glargine 18 units subcutaneously now and asks that the infusion be stopped. When should the nurse stop the infusion?",
      rationale:
        "IV regular insulin acts for only minutes after an infusion stops. Glargine takes hours to start working. The consensus report advises giving basal insulin at least 1 to 2 hours before the infusion ends. The overlap prevents a gap in insulin that can bring back hyperglycemia and ketoacidosis. Stopping at the same time as the injection, or before it, leaves that gap.",
      refs: ["Basal insulin is given at least 1 to 2 hours before an IV insulin infusion is stopped."],
      sources: [HYPERGLYCEMIC_2024],
    }),
    kind: "mc",
    options: [
      { text: "1 to 2 hours after the glargine is given", why: "The overlap lets glargine start working before IV insulin wears off." },
      { text: "At 0800, when the glargine is given", why: "IV insulin wears off within minutes, before glargine starts to act." },
      { text: "At 0800, with glargine given at 1000", why: "Stopping first leaves 2 hours with no effective insulin." },
      { text: "Once glucose falls below 100 mg/dL (5.6 mmol/L)", why: "The timing depends on the basal dose overlap, not on a glucose target." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-49", {
      topic: "Safety checks for an IV insulin infusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse prepares to start a prescribed regular insulin infusion at 0.1 units/kg/hour for a 30-year-old client with diabetic ketoacidosis. IV 0.9% sodium chloride is running. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Insulin drives potassium into cells, so the potassium result is confirmed first. Insulin is delayed when potassium is below 3.5 mEq/L. Potassium is rechecked 2 hours after insulin starts and every 4 hours after that. Capillary glucose is checked every 1 to 2 hours. IV insulin is a high-alert medication, so a second nurse checks the pump. When glucose falls below 250 mg/dL, dextrose is added and insulin continues.",
      refs: [
        "Insulin is delayed when serum potassium is below 3.5 mEq/L (3.5 mmol/L).",
        "Potassium is checked 2 hours after insulin starts and every 4 hours after that.",
        "Dextrose is added when glucose falls below 250 mg/dL (13.9 mmol/L).",
      ],
      sources: [HYPERGLYCEMIC_2024, MYXREDLIN, ISMP_HIGH],
    }),
    kind: "sata",
    options: [
      { text: "Check capillary glucose every 6 hours", why: "Glucose can fall fast on IV insulin and is checked every 1 to 2 hours." },
      { text: "Confirm the potassium result before starting", why: "Insulin is delayed when potassium is below 3.5 mEq/L." },
      { text: "Have a second nurse check the pump settings", why: "IV insulin is high alert, and a second check adds a safety layer." },
      { text: "Stop insulin when glucose reaches 250 mg/dL (13.9 mmol/L)", why: "Dextrose is added at this point and insulin continues until ketoacidosis resolves." },
      { text: "Check capillary glucose every 1 to 2 hours", why: "Frequent checks catch a fast fall in glucose." },
      { text: "Recheck potassium 2 hours after insulin starts", why: "Insulin lowers potassium, so it is rechecked early." },
      { text: "Add NPH insulin to the bag for a longer effect", why: "Only short-acting insulin is given by IV infusion." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s35-50", {
      topic: "Milrinone maintenance infusion rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with acute decompensated heart failure weighs 78 kg. The primary health care provider prescribes milrinone 0.5 mcg/kg/minute IV with no loading dose. The premixed bag contains milrinone 20 mg in 100 mL of 5% dextrose. At what rate in mL/hour should the nurse set the pump?",
      rationale:
        "The dose is 0.5 mcg/kg/minute for 78 kg, which is 39 mcg each minute. Over 60 minutes that is 2340 mcg each hour. The bag holds 20 mg, which is 20 000 mcg, in 100 mL, so each mL holds 200 mcg. Dividing 2340 by 200 gives 11.7 mL/hour. Milrinone can cause arrhythmias and low BP, so heart rhythm and BP are watched.",
      calc: { expr: "0.5 * 78 * 60 / (20 * 1000 / 100)", answer: 11.7, unit: "mL/hour", round: 1, steps: ["0.5 * 78 = 39", "39 * 60 = 2340", "20 * 1000 / 100 = 200", "2340 / 200 = 11.7"] },
      sources: [MILRINONE],
    }),
    kind: "mc",
    options: [
      { text: "0.2 mL/hour", why: "This leaves out the 60 minutes in each hour." },
      { text: "5.9 mL/hour", why: "This uses 400 mcg/mL, twice the strength of this bag." },
      { text: "11.7 mL/hour", why: "2340 mcg/hour divided by 200 mcg/mL is 11.7 mL/hour." },
      { text: "23.4 mL/hour", why: "This uses 100 mcg/mL, half the strength of this bag." },
    ],
    correct: 2,
  },
];
