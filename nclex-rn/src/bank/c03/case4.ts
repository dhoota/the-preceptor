import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c03-4";

/** Case 4. Progressive care unit. Older adult with COPD, influenza and carbon dioxide retention. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Drowsy Afternoon in the Progressive Care Unit",
  intro:
    "A 72-year-old woman with COPD was admitted to the progressive care unit this morning with 4 days of worsening breathlessness, cough and fever. A nasal swab is positive for influenza A. She uses oxygen at 2 L/minute at home. Her son is visiting.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "COPD for 15 years. Smoked 1 pack a day for 45 years and still smokes.",
        "Home oxygen 2 L/minute by nasal cannula.",
        "Home medications: tiotropium inhaler daily, albuterol inhaler as needed.",
        "Did not receive an influenza vaccine this season.",
        "Lives with her son.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Oxygen by nasal cannula to keep SpO2 88% to 92%.",
        "Ipratropium and albuterol by nebulizer every 4 hours.",
        "Prednisone 40 mg by mouth daily for 5 days.",
        "Oseltamivir 75 mg by mouth twice daily for 5 days.",
        "Droplet precautions.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0900"],
        rows: [
          ["Temperature", "38.3°C (100.9°F)"],
          ["Heart rate", "104/minute"],
          ["Respiratory rate", "26/minute"],
          ["BP", "142/84 mmHg"],
          ["SpO2", "89% on 2 L/minute"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "SIPC",
        topic: "Hazards in the room of a client on oxygen",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 1400 the nurse enters the room and records the observations below. Which observations need follow-up? Click to highlight them.",
        rationale:
          "A flow of 6 L/minute is far above her home setting and pushes the SpO2 to 97%, above the prescribed 88% to 92%. Drowsiness in a client with COPD on extra oxygen suggests rising carbon dioxide. A lighter near oxygen is a fire hazard. Her son is unmasked in the room of a client with influenza on droplet precautions. The call light, low bed and scheduled nebulizer are in order.",
        sources: [SRC.bts, SRC.cdcFlu, SRC.gold, { body: "Public Health Agency of Canada", work: "Guidance: Infection Prevention and Control Measures for Healthcare Workers in Acute Care and Long-term Care Settings (seasonal influenza)", year: 2021, url: "https://www.canada.ca/en/public-health/services/infectious-diseases/nosocomial-occupational-infections/guidance-infection-prevention-control-measures-healthcare-workers-acute-care-long-term-care-settings.html" }],
        canada:
          "In Canada, PHAC advises Droplet and Contact Precautions for seasonal influenza, not droplet precautions alone. Canadian staff would also wear a gown and gloves for direct care.",
      }),
      kind: "highlight",
      passage:
        "[[Oxygen flowmeter set at 6 L/minute]]. [[Call light within reach]]. [[Son at the bedside without a mask]]. [[Drowsy and hard to keep awake]]. [[SpO2 97%]]. [[Bed in the lowest position]]. [[A cigarette lighter on the bedside table]]. [[Nebulizer given at 1200 as scheduled]].",
      spans: [
        { text: "Oxygen flowmeter set at 6 L/minute", why: "This flow is well above her prescription and can worsen carbon dioxide retention." },
        { text: "Call light within reach", why: "A call light in reach is an expected safety measure." },
        { text: "Son at the bedside without a mask", why: "Droplet precautions call for a mask in the room of a client with influenza." },
        { text: "Drowsy and hard to keep awake", why: "New drowsiness can signal carbon dioxide narcosis." },
        { text: "SpO2 97%", why: "This is above the prescribed range of 88% to 92%." },
        { text: "Bed in the lowest position", why: "A low bed is an expected fall precaution." },
        { text: "A cigarette lighter on the bedside table", why: "An open flame near oxygen is a fire risk." },
        { text: "Nebulizer given at 1200 as scheduled", why: "The nebulizer was given on time." },
      ],
      correct: [0, 2, 3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Interpreting a blood gas in COPD",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The primary health care provider obtains an arterial blood gas at 1415. Complete the following sentence by choosing from the lists of options.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "1415", "Reference range"],
              rows: [
                ["pH", "7.27", "7.35 to 7.45"],
                ["PaCO2", "72 mmHg", "35 to 45 mmHg"],
                ["HCO3", "32 mEq/L (32 mmol/L)", "22 to 26 mEq/L"],
                ["PaO2", "86 mmHg", "80 to 100 mmHg"],
              ],
            },
          },
        ],
        rationale:
          "A pH of 7.27 is acidotic. A PaCO2 of 72 mmHg is high, so the acidosis is respiratory. A bicarbonate of 32 mEq/L is above range, showing the kidneys have retained base, but not enough to bring the pH back to normal. That is partly compensated respiratory acidosis. Oxygen above her target worsens ventilation and perfusion matching and raises the carbon dioxide level.",
        sources: [SRC.bts, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The results show {0}, most likely made worse by {1}.",
      blanks: [
        {
          options: [
            { text: "uncompensated metabolic acidosis", why: "The high PaCO2 makes the problem respiratory, and the bicarbonate is high, not low." },
            { text: "partly compensated respiratory acidosis", why: "A low pH with a high PaCO2 and a raised bicarbonate fits this pattern." },
            { text: "compensated respiratory alkalosis", why: "The pH is below 7.35, so this is acidosis." },
            { text: "uncompensated metabolic alkalosis", why: "The pH is acidotic, which rules out alkalosis." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "hyperventilation from anxiety", why: "Hyperventilation lowers the PaCO2. Hers is 72 mmHg." },
            { text: "ketones from poor intake", why: "Ketones cause a metabolic acidosis with a low bicarbonate." },
            { text: "oxygen above her target range", why: "Excess oxygen in COPD can raise the PaCO2 and deepen acidosis." },
            { text: "vomiting of stomach acid", why: "Vomiting causes metabolic alkalosis, and no vomiting is reported." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting priorities in COPD with hypercapnia",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse has identified several problems during the 1400 visit and the blood gas review. Which problem should the nurse address first?",
        rationale:
          "Drowsiness with a pH of 7.27 and a PaCO2 of 72 mmHg is an active threat to breathing and the airway. It comes first. The lighter is a serious hazard but is a risk, not a present harm. The son's exposure and the gap in knowledge about oxygen settings need action after the client is stabilized.",
        sources: [SRC.gold, SRC.bts],
      }),
      kind: "mc",
      options: [
        { text: "Fire risk from the lighter at the bedside", why: "The lighter is a hazard to remove soon, but it is not causing harm now." },
        { text: "Influenza exposure of her unmasked son", why: "Protecting the son matters but does not outrank a threat to her breathing." },
        { text: "Hypercapnia with a falling level of alertness", why: "A rising PaCO2 with drowsiness threatens her airway and breathing." },
        { text: "Knowledge gap about her oxygen settings", why: "Teaching follows once her breathing is stabilized." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Droplet precautions and oxygen safety",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The oxygen is lowered to the prescribed flow and the provider is notified. The nurse plans care for the rest of the shift. Which actions should the nurse include? Select all that apply.",
        rationale:
          "Influenza spreads by droplets, so the son wears a facemask in the room and the client wears one outside it. A negative pressure room is for airborne spread. Droplet precautions last 7 days from onset or until 24 hours after fever and respiratory symptoms resolve, whichever is longer. Removing the lighter and posting a no-smoking sign lower the fire risk. Only staff adjust the oxygen flow.",
        refs: ["Droplet precautions for influenza last 7 days after illness onset or until 24 hours after fever and respiratory symptoms resolve, whichever is longer."],
        sources: [SRC.cdcFlu, SRC.brunner, { body: "Public Health Agency of Canada", work: "Guidance: Infection Prevention and Control Measures for Healthcare Workers in Acute Care and Long-term Care Settings (seasonal influenza)", year: 2021, url: "https://www.canada.ca/en/public-health/services/infectious-diseases/nosocomial-occupational-infections/guidance-infection-prevention-control-measures-healthcare-workers-acute-care-long-term-care-settings.html" }],
        canada:
          "PHAC advises Droplet and Contact Precautions for seasonal influenza. It ends them when the client is no longer symptomatic or per organization policy, rather than at a fixed 7 days.",
      }),
      kind: "sata",
      options: [
        { text: "Move her to a negative pressure room", why: "Influenza spreads by droplets. Negative pressure is for airborne agents." },
        { text: "Remove the lighter and explain the fire risk", why: "Oxygen feeds a flame, so the lighter must leave the room." },
        { text: "Let the son adjust the oxygen as needed", why: "The flow follows the prescription and is set by staff, not visitors." },
        { text: "Offer the son a facemask in the room", why: "A facemask protects him from droplets at close range." },
        { text: "Post a no-smoking sign on the door", why: "The sign warns everyone that oxygen is in use." },
        { text: "End droplet precautions once her fever breaks", why: "Precautions continue for at least 7 days from onset, even after the fever resolves." },
        { text: "Mask the client if she leaves the room", why: "A mask on the client limits droplet spread during transport." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Medications in a COPD flare with influenza",
        cjmm: "action",
        difficulty: 4,
        stem: "The nurse gives the client's scheduled medications. Which two actions are appropriate? Select two.",
        rationale:
          "Oseltamivir can cause nausea, which is less likely when it is taken with food. Prednisone raises blood glucose, so glucose is checked. Hospitalized clients with influenza get antivirals even when illness began more than 48 hours earlier. In carbon dioxide retention, nebulizers are driven by air with oxygen given by nasal cannula. Appetite gain is an expected steroid effect.",
        refs: ["Antiviral treatment is recommended for hospitalized clients with influenza even when started more than 48 hours after illness onset."],
        sources: [SRC.cdcAntiviral, SRC.bts, SRC.gold, { body: "Health Canada", work: "Drug Product Database: Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
        canada:
          "Albuterol is sold in Canada as salbutamol, for example Ventolin HFA. A Canadian order would read ipratropium and salbutamol by nebulizer.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Hold oseltamivir because symptoms began 4 days ago", why: "Hospitalized clients benefit from antivirals even after 48 hours." },
        { text: "Give oseltamivir with food to limit nausea", why: "Taking oseltamivir with food lowers nausea and vomiting." },
        { text: "Drive the nebulizer with oxygen at 8 L/minute", why: "High-flow oxygen through a nebulizer can raise her PaCO2. Air is used to drive it." },
        { text: "Stop the prednisone if her appetite increases", why: "A larger appetite is a common steroid effect, not a reason to stop." },
        { text: "Check blood glucose while she takes prednisone", why: "Systemic steroids raise blood glucose." },
        { text: "Hold ipratropium while oseltamivir is given", why: "These drugs do not interact, and holding the bronchodilator would worsen airflow." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Preventing future COPD flares",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Before discharge, the nurse teaches the client how to lower her risk of another flare. For each statement by the client, specify whether it shows understanding or needs further teaching.",
        rationale:
          "A yearly influenza vaccine and vaccines against pneumococcal disease and RSV lower the risk of flares. Quitting smoking is the most effective step, and a cessation program with medication raises success. Cutting down is not the same as quitting. Nicotine replacement is safe and effective in COPD. Home oxygen stays at the prescribed flow.",
        sources: [SRC.gold, SRC.uspstf, SRC.cdcRsv, { body: "National Advisory Committee on Immunization", work: "Summary of NACI statement of April 10, 2026: Updated guidance on respiratory syncytial virus (RSV) vaccines for older adults and for adults at high risk of severe RSV disease", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/vaccines-immunization/national-advisory-committee-immunization-summary-updated-guidance-respiratory-syncytial-virus-vaccines-older-adults-high-risk-severe-rsv-disease.html" }],
        canada:
          "NACI's April 2026 statement strongly recommends an RSV vaccine for adults on home oxygen and for adults 65 to 74 at increased risk of severe disease. This client qualifies through her home oxygen.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I will get a flu shot every fall.\"", correct: [0], why: "Yearly influenza vaccination lowers the risk of flares and hospital stays." },
        { text: "\"I can cut down to a few cigarettes a day instead of quitting.\"", correct: [1], why: "Only quitting stops the ongoing damage. Cutting down is not enough." },
        { text: "\"I will ask about the vaccines for pneumonia and RSV.\"", correct: [0], why: "Both vaccines are advised for an adult of her age with COPD." },
        { text: "\"Nicotine patches are not safe with my lung disease.\"", correct: [1], why: "Nicotine replacement is safe in COPD and raises the chance of quitting." },
        { text: "\"I will join a quit-smoking program before I go home.\"", correct: [0], why: "Counseling plus medication gives the best chance of quitting." },
        { text: "\"I can turn up my home oxygen when I feel short of breath.\"", correct: [1], why: "Raising the flow without a prescription can cause carbon dioxide retention." },
      ],
    },
  ],
};
