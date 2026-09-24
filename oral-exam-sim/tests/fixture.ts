import type { OralCase } from "@/engine/types";

/** Small synthetic case for engine tests. Not clinical content. */
export const FIXTURE: OralCase = {
  id: "fixture",
  title: "Fixture case",
  domain: "Test",
  summary: "A test case.",
  durationMinutes: 10,
  stem: "A 50 year old arrives with a test complaint.",
  findings: [
    { id: "ecg", label: "ECG", result: "Sinus rhythm at 90." },
    { id: "glu", label: "Glucose", result: "5.4 mmol/L." },
  ],
  start: "open",
  nodes: [
    { kind: "say", id: "open", text: "The nurse asks what you want.", next: "q1" },
    {
      kind: "question",
      id: "q1",
      prompt: "What do you do first?",
      seconds: 60,
      modelAnswer: ["Monitor", "Fluid bolus"],
      rubric: ["r1", "r2"],
      choices: [
        { id: "good", label: "I gave a bolus.", next: "q2", quality: "strong" },
        { id: "bad", label: "I waited.", next: "crash", quality: "unsafe" },
      ],
    },
    { kind: "say", id: "crash", phase: "Five minutes later", text: "The pressure is 60 over 30.", next: "q2" },
    { kind: "question", id: "q2", prompt: "Where does the patient go?", seconds: 45, modelAnswer: ["ICU"], rubric: ["d1", "d2"], next: "end" },
    { kind: "end", id: "end", text: "That ends the case." },
  ],
  domains: [
    { id: "resus", name: "Resuscitation" },
    { id: "dispo", name: "Disposition" },
  ],
  rubric: [
    { id: "r1", domain: "resus", text: "Places patient on a monitor", points: 2, teaching: "Monitor first." },
    { id: "r2", domain: "resus", text: "Gives a fluid bolus", points: 2, critical: true, teaching: "Bolus early." },
    { id: "d1", domain: "dispo", text: "Admits to ICU", points: 3, teaching: "ICU." },
    { id: "d2", domain: "dispo", text: "Updates the family", points: 3, teaching: "Talk to family." },
  ],
  passThreshold: 0.6,
  reviewed: false,
  author: "test",
  version: 1,
};
