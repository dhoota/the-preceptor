import { useMemo, useState } from "react";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { PRIORITY_TOPICS } from "@/blueprint/priorityTopics";
import { BLUEPRINT_TITLE, EDU_ONLY, blueprintRef, openUrl, sourceUrl } from "@/lib/sources";
import { LINKS } from "./Resources";

interface Row {
  citation: string;
  url?: string;
}

/** Every source cited anywhere in the app, once each, with its link when it has one. */
export function allSources(): Row[] {
  const byCitation = new Map<string, Row>();
  for (const s of [...CASES.flatMap((c) => c.sources), ...SAMPS.flatMap((p) => p.sources)]) {
    const key = s.citation.trim();
    const prev = byCitation.get(key);
    const url = sourceUrl(s);
    if (!prev) byCitation.set(key, { citation: key, url });
    else if (!prev.url && url) prev.url = url;
  }
  return [...byCitation.values()].sort((a, b) => a.citation.localeCompare(b.citation, "en"));
}

export function Sources() {
  const rows = useMemo(allSources, []);
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const shown = needle ? rows.filter((r) => r.citation.toLowerCase().includes(needle)) : rows;

  return (
    <>
      <h1>Sources &amp; References</h1>
      <p className="edu-only">{EDU_ONLY}</p>
      <p className="muted" style={{ marginTop: 8 }}>
        Every answer, rationale and model answer in this app shows its source and the section of the CFPC exam blueprint
        that covers it. This page lists them all. Links open on the publisher's website.
      </p>

      <section className="section">
        <span className="label">Exam blueprint</span>
        <div className="srcrow">
          <button className="linkbtn citelink" onClick={() => openUrl(blueprintRef("").url)}>
            {BLUEPRINT_TITLE}
          </button>
        </div>
        {PRIORITY_TOPICS.map((t) => {
          const ref = blueprintRef(t.id);
          return (
            <div key={t.id} className="srcrow">
              <button className="linkbtn citelink" onClick={() => openUrl(ref.url)}>
                {t.name}
              </button>
            </div>
          );
        })}
      </section>

      <section className="section">
        <span className="label">Official exam resources</span>
        {LINKS.map((l) => (
          <div key={l.url} className="srcrow">
            <button className="linkbtn citelink" onClick={() => openUrl(l.url)}>
              {l.title}
            </button>
          </div>
        ))}
      </section>

      <section className="section">
        <span className="label">Guidelines and references · {rows.length}</span>
        <input
          className="srcfilter"
          type="search"
          placeholder="Filter by author, society or topic"
          aria-label="Filter sources"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {shown.map((r) => (
          <div key={r.citation} className="srcrow">
            {r.url ? (
              <button className="linkbtn citelink" onClick={() => openUrl(r.url!)}>
                {r.citation}
              </button>
            ) : (
              <span>{r.citation}</span>
            )}
          </div>
        ))}
        {!shown.length && <p className="muted small">No source matches.</p>}
      </section>

      <p className="muted small" style={{ marginTop: 16 }}>
        Textbooks without a public web page are listed without a link. Opening links needs an internet connection.
      </p>
    </>
  );
}
