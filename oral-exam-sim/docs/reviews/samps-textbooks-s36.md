# Textbook citations: s36 environmental

Scope: the 7 questions that cited Rosen's Emergency Medicine. Counts: 3 guideline, 0 study, 4 textbook kept with chapter. One explanation changed. No key changed. The content from the overlap review (commit 8cc1214) is kept.

| SAMP and question | Old | Verdict | New source | Text changed |
|---|---|---|---|---|
| environmental-17 q1, anticholinergic signs in a heat stroke patient | Rosen, chapters on heat illness and others | Textbook kept | Rosen's Emergency Medicine. 10th ed. Elsevier. 2023. Chapter 140, Anticholinergics | None |
| environmental-19 q1, neuromuscular blocker with K 6.3 mmol/L | Rosen | Guideline | Acquisto NM, et al. Society of Critical Care Medicine clinical practice guidelines for rapid sequence intubation in the critically ill adult patient. Crit Care Med. 2023. doi:10.1097/CCM.0000000000006000. https://pubmed.ncbi.nlm.nih.gov/37707379/ | Explanation softened, see below |
| environmental-33 q1, methamphetamine hyperthermia after a conducted energy weapon | Rosen | Textbook kept | Same book, Chapter 144, Cocaine and Other Sympathomimetics | None |
| environmental-36 q1, cause of hypotension after electrical injury and a fall | Rosen | Textbook kept | Same book, Chapter 54, Thermal Injuries | None |
| environmental-36 q2, FAST in a hypotensive injured child | Rosen | Textbook kept | Same book, Chapter 38, Abdominal Trauma | None |
| environmental-37 q2, disposition with ECG changes and troponin after lightning | Rosen | Guideline | Davis C, et al. Wilderness Medical Society practice guidelines for the prevention and treatment of lightning injuries: 2014 update. Wilderness Environ Med. 2014. https://pubmed.ncbi.nlm.nih.gov/25498265/ (already in the file) | None |
| environmental-37 q3, thoracic midline tenderness after being thrown | Rosen | Guideline | Beckmann NM, et al. ACR Appropriateness Criteria suspected spine trauma. American College of Radiology. J Am Coll Radiol. 2019. doi:10.1016/j.jacr.2019.02.002. https://pubmed.ncbi.nlm.nih.gov/31054754/ | None |

The chapter numbers and titles were confirmed on the Elsevier 10th edition product page (ISBN 9780323757898): 38 Abdominal Trauma, 54 Thermal Injuries, 140 Anticholinergics, 144 Cocaine and Other Sympathomimetics. The single "rosen" source object is replaced by four chapter-specific ones. The ids rosen-ch140 and rosen-ch144 match the ids other batches use.

Why each textbook was kept:
- environmental-17 q1: no guideline sets out the bedside signs that separate anticholinergic toxicity from serotonin toxicity, neuroleptic malignant syndrome and classic heat stroke. The 2024 WMS heat guideline names drug risk factors but does not cover this.
- environmental-33 q1: the 2023 ACEP severe agitation clinical policy covers sedative choice. It does not address hyperthermia from sympathomimetics, cooling or prone restraint.
- environmental-36 q1 and q2: the 2023 European guideline on major bleeding after trauma recommends POCUS including FAST (Recommendation 8, Grade 1C). But it says it does not cover paediatric patients, and this patient is 13. No paediatric guideline on FAST in unstable children was found. No burn guideline was found that states the timing of burn shock.

What was checked:
- SCCM 2023: the PubMed abstract. The recommendation text ("either rocuronium or succinylcholine ... when there are no known contraindications to succinylcholine") was checked in the Guideline Central summary. The rationale's listing of hyperkalemia as a succinylcholine adverse effect was checked in a slide summary of the guideline. The full text is paywalled.
- WMS lightning 2014: the full text is paywalled at the publisher. It was read in a reproduction. It lists QT prolongation and ST changes, recommends ECG and echocardiography for high-risk patients, and recommends telemetry for at least 24 hours for high-risk patients.
- ACR 2019: the PubMed abstract says "CT is preferred to radiographs for initial assessment of spine trauma".

## Keys or explanations changed
- environmental-19 q1 (key unchanged, rocuronium). The explanation dropped two figures that the new source does not support: "raises serum potassium by about 0.5 mmol/L" and "intubating conditions in about 60 seconds". It now reads "Succinylcholine raises serum potassium" and "gives rapid intubating conditions". One sentence was added: "The Society of Critical Care Medicine suggests either rocuronium or succinylcholine for rapid sequence intubation when succinylcholine has no known contraindication." The dose is unchanged (1.2 mg/kg x 85 kg = 102 mg, about 100 mg).

## For the physician
- environmental-17 q1, environmental-33 q1 and environmental-36 q1 and q2 now rest on the Rosen chapters named above. I confirmed the chapter titles and numbers but could not read the chapters. Please confirm that each claim is taught there.
- environmental-19 q1: the SCCM guideline is for critically ill adults and gives no potassium threshold. The statement that hyperkalemia with ECG changes rules out succinylcholine is standard teaching. It is not a graded recommendation.
- environmental-37 q2: the WMS lightning guideline is from 2014 and no newer WMS update was found. It calls routine cardiac markers of limited use. The stem gives a troponin anyway. The key, telemetry admission and echocardiography, matches the guideline.
- environmental-37 q3: the sentence that lightning victims are often thrown and have blunt injuries that are easily missed comes from general teaching and the WMS guideline's advice to examine for trauma. It is not from the ACR document.
