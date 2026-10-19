import { AUTHORED_SAMPS } from "@/samps/source";
const topic = process.env.TOPIC!;
for (const s of AUTHORED_SAMPS) {
  const rel = s.topic === topic || s.questions.some(q => q.keyFeature.topic === topic);
  if (!rel) continue;
  console.log(`\n## ${s.id} [${s.topic}] ${s.title}\n${s.stem}`);
  for (const q of s.questions) {
    let key = "";
    if (q.kind === "single") key = q.options[q.correct];
    else if (q.kind === "menu") key = q.correct.map(i => q.options[i]).join(" + ");
    else key = q.accept.map(a => a.text).join(" / ");
    console.log(` - ${q.id} kf${q.keyFeature.topic === topic ? q.keyFeature.n : q.keyFeature.topic+q.keyFeature.n} ${q.kind}: ${q.update ? "[U: "+q.update+"] " : ""}${q.prompt} => ${key}`);
  }
}
