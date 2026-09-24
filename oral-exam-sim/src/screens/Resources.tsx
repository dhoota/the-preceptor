import { CFPC_KF_URL } from "@/blueprint/priorityTopics";

/**
 * Links out to the official CFPC material. The app does not copy any of it.
 * CFPC content is copyright and real exam content is confidential.
 */
const LINKS = [
  {
    title: "Preparing for the examination",
    body: "Exam format, timing, the virtual oral and the SAMP software.",
    url: "https://www.cfpc.ca/en/education-professional-development/examinations-and-certification/examination-of-added-competence-in-emergency-medic/preparing-for-the-examination-of-added-competence",
  },
  {
    title: "Candidate guide",
    body: "The official guide to the Examination of Added Competence in Emergency Medicine.",
    url: "https://www.cfpc.ca/en/candidate-guide-to-the-examination-of-added-competence-in-emergency-medicine",
  },
  {
    title: "Sample SAMPs",
    body: "The CFPC sample written cases with example answers.",
    url: "https://www.cfpc.ca/CFPC/media/Resources/Examinations/EM-Sample-Samps-English.pdf",
  },
  {
    title: "Sample structured oral",
    body: "A sample oral station with its score sheet.",
    url: "https://www.cfpc.ca/CFPC/media/Resources/Examinations/EM-Sample-Oral.pdf",
  },
  {
    title: "Priority topics and key features",
    body: "The official wording of every key feature. The app uses short paraphrases.",
    url: CFPC_KF_URL,
  },
  {
    title: "SAMP software tutorial",
    body: "How the computer based written exam works.",
    url: "https://www.cfpc.ca/en/Resources/Examinations/SAMP-Software-Tutorial",
  },
  {
    title: "CAEP point of care ultrasound recommendations",
    body: "Part of the exam content along with the priority topics.",
    url: "https://caep.ca/wp-content/uploads/2019/08/recommendations_for_the_use_of_pointofcare_ultrasound_pocus_by_emergency_physicians_in_canada.pdf",
  },
];

export function Resources() {
  return (
    <>
      <div className="label">Official CFPC resources</div>
      <h1 style={{ marginTop: 6 }}>From the source</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        These open on the CFPC and CAEP websites. Every question in this app is original. None is taken from CFPC samples
        or from any real exam.
      </p>
      {LINKS.map((l) => (
        <button key={l.url} className="nextcase" onClick={() => window.open(l.url, "_blank")}>
          <div className="t">{l.title}</div>
          <div className="muted small">{l.body}</div>
        </button>
      ))}
      <p className="muted small" style={{ marginTop: 16 }}>
        Preceptor: CCFP-EM is independent. It is not affiliated with or endorsed by the College of Family Physicians of
        Canada. Opening these links needs an internet connection. Everything else works offline.
      </p>
    </>
  );
}
