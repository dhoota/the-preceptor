import type { CaseNode, OralCase } from "./types";

/**
 * Structural checks for a case. Run in tests over every shipped case so a
 * broken edit fails CI instead of stranding a candidate mid case.
 */
export function validateCase(c: OralCase): string[] {
  const errors: string[] = [];
  const err = (m: string) => errors.push(`${c.id}: ${m}`);

  const byId = new Map<string, CaseNode>();
  for (const n of c.nodes) {
    if (byId.has(n.id)) err(`duplicate node id "${n.id}"`);
    byId.set(n.id, n);
  }
  if (!byId.has(c.start)) err(`start node "${c.start}" does not exist`);

  const domainIds = new Set(c.domains.map((d) => d.id));
  const rubricIds = new Set<string>();
  for (const r of c.rubric) {
    if (rubricIds.has(r.id)) err(`duplicate rubric id "${r.id}"`);
    rubricIds.add(r.id);
    if (!domainIds.has(r.domain)) err(`rubric "${r.id}" has unknown domain "${r.domain}"`);
    if (!(r.points > 0)) err(`rubric "${r.id}" has no points`);
    if (!r.teaching?.trim()) err(`rubric "${r.id}" has no teaching line`);
  }
  if (!c.rubric.some((r) => r.critical)) err("no critical rubric items");

  const findingIds = new Set<string>();
  for (const f of c.findings) {
    if (findingIds.has(f.id)) err(`duplicate finding id "${f.id}"`);
    findingIds.add(f.id);
  }

  const referenced = new Set<string>();
  for (const n of c.nodes) {
    const targets = nextIds(n);
    if (n.kind === "question") {
      n.rubric.forEach((id) => {
        referenced.add(id);
        if (!rubricIds.has(id)) err(`question "${n.id}" references unknown rubric "${id}"`);
      });
      if (!n.modelAnswer.length) err(`question "${n.id}" has no model answer`);
      if (!(n.seconds > 0)) err(`question "${n.id}" has no time limit`);
      if (n.choices && n.choices.length > 1 && n.next) err(`question "${n.id}" has both choices and next`);
      const choiceIds = new Set<string>();
      for (const ch of n.choices ?? []) {
        if (choiceIds.has(ch.id)) err(`question "${n.id}" has duplicate choice "${ch.id}"`);
        choiceIds.add(ch.id);
      }
    }
    if (n.kind !== "end" && targets.length === 0) err(`node "${n.id}" has no next node`);
    for (const t of targets) if (!byId.has(t)) err(`node "${n.id}" points to missing node "${t}"`);
  }
  for (const id of rubricIds) if (!referenced.has(id)) err(`rubric "${id}" is never tested by a question`);

  // Every path must terminate at an end node with no cycles.
  const state = new Map<string, "visiting" | "done">();
  const visit = (id: string) => {
    const n = byId.get(id);
    if (!n) return;
    if (state.get(id) === "visiting") {
      err(`cycle through node "${id}"`);
      return;
    }
    if (state.get(id) === "done") return;
    state.set(id, "visiting");
    nextIds(n).forEach(visit);
    state.set(id, "done");
  };
  visit(c.start);
  for (const n of c.nodes) if (!state.has(n.id)) err(`node "${n.id}" is unreachable`);

  return errors;
}

export function nextIds(n: CaseNode): string[] {
  if (n.kind === "end") return [];
  if (n.kind === "say") return [n.next];
  const fromChoices = (n.choices ?? []).map((c) => c.next);
  return fromChoices.length > 1 ? fromChoices : [n.next ?? fromChoices[0]].filter(Boolean) as string[];
}

/** Longest and shortest number of questions on any path. For the case list. */
export function questionRange(c: OralCase): { min: number; max: number } {
  const byId = new Map(c.nodes.map((n) => [n.id, n]));
  const memo = new Map<string, { min: number; max: number }>();
  const walk = (id: string): { min: number; max: number } => {
    const hit = memo.get(id);
    if (hit) return hit;
    const n = byId.get(id);
    if (!n) return { min: 0, max: 0 };
    const own = n.kind === "question" ? 1 : 0;
    const kids = nextIds(n).map(walk);
    const r = kids.length
      ? { min: own + Math.min(...kids.map((k) => k.min)), max: own + Math.max(...kids.map((k) => k.max)) }
      : { min: own, max: own };
    memo.set(id, r);
    return r;
  };
  return walk(c.start);
}
