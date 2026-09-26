import { test } from "vitest";
import { SOB_SAMPS } from "@/samps/s17/sob";
test("s", () => {
  for (const s of SOB_SAMPS) {
    console.log(s.id, s.version, s.reviewed, s.title, JSON.stringify(s.alsoTopics), s.questions.map(q => `${q.id}:${q.kind}:${q.keyFeature.topic}${q.keyFeature.n}${q.kind==="short"?"/r"+q.required:""}${q.kind==="menu"?"/s"+q.select:""}`).join(" "));
  }
});
