import { NEEDS, needName, type ClientNeed } from "@/engine/blueprint";
import type { Item, Source } from "@/engine/types";

/**
 * Authoritative references the app cites. Every URL was checked to load on
 * 8 October 2026. Each question also cites its own named sources from the bank.
 */
export interface Reference {
  id: string;
  title: string;
  body: string;
  url: string;
  covers: string;
}

export const REFERENCES: Reference[] = [
  {
    id: "testplan",
    title: "NCLEX-RN Test Plan",
    body: "NCSBN",
    url: "https://www.nclex.com/test-plans.page",
    covers: "The Client Needs areas, the clinical judgment model and the exam rules every question is written to.",
  },
  {
    id: "delegation",
    title: "National Guidelines for Nursing Delegation",
    body: "NCSBN",
    url: "https://www.ncsbn.org/nursing-regulation/practice/delegation.page",
    covers: "Delegation, assignment and scope of practice.",
  },
  {
    id: "isolation",
    title: "Isolation Precautions Guideline",
    body: "Centers for Disease Control and Prevention (CDC)",
    url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
    covers: "Standard and transmission based precautions.",
  },
  {
    id: "immunization",
    title: "Immunization Schedules for Healthcare Professionals",
    body: "Centers for Disease Control and Prevention (CDC)",
    url: "https://www.cdc.gov/vaccines/hcp/imz-schedules/index.html",
    covers: "Vaccines across the lifespan.",
  },
  {
    id: "patientsafety",
    title: "Patient Safety",
    body: "World Health Organization (WHO)",
    url: "https://www.who.int/health-topics/patient-safety",
    covers: "Safety, error prevention and safe care systems.",
  },
  {
    id: "nimh",
    title: "Mental Health Information: Health Topics",
    body: "National Institute of Mental Health (NIMH), NIH",
    url: "https://www.nimh.nih.gov/health/topics",
    covers: "Mental health conditions and their treatment.",
  },
  {
    id: "988",
    title: "988 Suicide and Crisis Lifeline",
    body: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
    url: "https://www.samhsa.gov/find-help/988",
    covers: "Crisis support and suicide prevention.",
  },
  {
    id: "medlineplus",
    title: "MedlinePlus Health Topics",
    body: "National Library of Medicine, NIH",
    url: "https://medlineplus.gov/",
    covers: "Conditions, procedures, care and health promotion.",
  },
  {
    id: "labtests",
    title: "MedlinePlus Medical Tests",
    body: "National Library of Medicine, NIH",
    url: "https://medlineplus.gov/lab-tests/",
    covers: "Laboratory and diagnostic tests and their normal ranges.",
  },
  {
    id: "dailymed",
    title: "DailyMed: FDA drug labels",
    body: "National Library of Medicine, NIH",
    url: "https://dailymed.nlm.nih.gov/dailymed/",
    covers: "Official prescribing information for medications.",
  },
  {
    id: "ismp",
    title: "List of Confused Drug Names",
    body: "Institute for Safe Medication Practices (ISMP)",
    url: "https://www.ismp.org/recommendations/confused-drug-names-list",
    covers: "Medication safety and look-alike, sound-alike drugs.",
  },
  {
    id: "bookshelf",
    title: "NCBI Bookshelf",
    body: "National Center for Biotechnology Information, NIH",
    url: "https://www.ncbi.nlm.nih.gov/books/",
    covers: "Peer reviewed clinical reference chapters, including StatPearls.",
  },
];

const byId = new Map(REFERENCES.map((r) => [r.id, r]));

/** The guideline references that cover each Client Needs area, after the test plan. */
export const AREA_REFS: Record<ClientNeed, string[]> = {
  MOC: ["delegation", "patientsafety"],
  SIPC: ["isolation", "patientsafety"],
  HPM: ["immunization", "medlineplus"],
  PSY: ["nimh", "988"],
  BCC: ["medlineplus", "bookshelf"],
  PPT: ["dailymed", "ismp"],
  RRP: ["labtests", "bookshelf"],
  PA: ["medlineplus", "bookshelf"],
};

export interface Citation {
  label: string;
  url?: string;
}

export const sourceLabel = (s: Source) => `${s.body}. ${s.work}. ${s.year}.`;

/** The question's own named sources. */
export const itemCitations = (item: Item): Citation[] => item.sources.map((s) => ({ label: sourceLabel(s), url: s.url }));

/** The test plan section and the guidelines that cover the question's Client Needs area. Always links. */
export function guidelineCitations(item: Item): Citation[] {
  const plan = byId.get("testplan")!;
  return [
    { label: `NCSBN. NCLEX-RN Test Plan, Client Needs: ${needName(item.need)}.`, url: plan.url },
    ...AREA_REFS[item.need].map((id) => {
      const r = byId.get(id)!;
      return { label: `${r.body}. ${r.title}.`, url: r.url };
    }),
  ];
}

/** Every named source cited in the bank, once each, sorted by body then work. */
export function citedWorks(items: Item[]): Source[] {
  const seen = new Map<string, Source>();
  for (const i of items)
    for (const s of i.sources) {
      const k = `${s.body}|${s.work}|${s.year}`;
      const prev = seen.get(k);
      if (!prev || (!prev.url && s.url)) seen.set(k, s);
    }
  return [...seen.values()].sort((a, b) => a.body.localeCompare(b.body) || a.work.localeCompare(b.work));
}

export const AREAS = NEEDS.map((n) => ({ id: n.id, name: n.name, refs: ["testplan", ...AREA_REFS[n.id]].map((id) => byId.get(id)!) }));

export const EDUCATION_ONLY = "Educational exam preparation only. Not medical advice.";
