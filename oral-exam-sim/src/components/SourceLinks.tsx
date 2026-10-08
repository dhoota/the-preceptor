import type { Source } from "@/engine";
import { blueprintRef, openUrl, sourceUrl } from "@/lib/sources";

/**
 * The citation under every answer and rationale: the question's own source
 * (a link when it has a public URL) and the CFPC blueprint section that covers
 * the topic, which is always a link.
 */
export function SourceLinks({ sources, topic, keyFeature }: { sources: (Source | undefined)[]; topic: string; keyFeature?: number }) {
  const seen = new Set<string>();
  const list = sources.filter((s): s is Source => !!s && !seen.has(s.citation) && !!seen.add(s.citation));
  const bp = blueprintRef(topic, keyFeature);
  return (
    <div className="cite sources">
      {list.map((s) => {
        const url = sourceUrl(s);
        return (
          <div key={s.id + s.citation}>
            Source:{" "}
            {url ? (
              <button className="linkbtn citelink" onClick={() => openUrl(url)}>
                {s.citation}
              </button>
            ) : (
              s.citation
            )}
          </div>
        );
      })}
      <div>
        {list.length ? "Blueprint: " : "Source: "}
        <button className="linkbtn citelink" onClick={() => openUrl(bp.url)}>
          {bp.label}
        </button>
      </div>
    </div>
  );
}
