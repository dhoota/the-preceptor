import { CFPC_KF_URL, topicById } from "@/blueprint/priorityTopics";
import type { OralCase, Source } from "@/engine";

/** Shown wherever clinical content and its sources appear. */
export const EDU_ONLY = "Educational exam preparation only. Not medical advice.";

/** Title of the CFPC exam blueprint every question is mapped to. */
export const BLUEPRINT_TITLE = "CFPC. Emergency Medicine Key Features of the Priority Topics (2017)";

export interface Ref {
  label: string;
  url: string;
}

/**
 * The section of the CFPC blueprint that covers a priority topic, linked to its
 * page in the official PDF. Every SAMP question and oral case is mapped to one,
 * so every answer has at least this authoritative, tappable reference even when
 * its own source is a textbook with no public URL.
 */
export function blueprintRef(topicId: string, keyFeature?: number): Ref {
  const t = topicById(topicId);
  if (!t) return { label: BLUEPRINT_TITLE, url: CFPC_KF_URL };
  const kf = keyFeature ? `, key feature ${keyFeature}` : "";
  return { label: `${BLUEPRINT_TITLE}: ${t.name}${kf}`, url: `${CFPC_KF_URL}#page=${t.page}` };
}

/** A source's own link, when it has a real public one. */
export const sourceUrl = (s: Source | undefined): string | undefined => (s?.url && /^https:\/\//.test(s.url) ? s.url : undefined);

export function openUrl(url: string) {
  window.open(url, "_blank");
}

/** The sources behind an oral question: those of the rubric points it tests. */
export function sourcesFor(c: OralCase, rubricIds: string[]): Source[] {
  const ids = new Set(rubricIds.map((id) => c.rubric.find((r) => r.id === id)?.source).filter(Boolean));
  return c.sources.filter((s) => ids.has(s.id));
}
