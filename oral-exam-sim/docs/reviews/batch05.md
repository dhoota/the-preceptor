# Batch 05 clinical accuracy review

Adversarial review of the trauma and geriatrics cases in `src/cases/batch05/`. Every case still ships with `reviewed: false`. Graph structure and node ids are unchanged. Where I added a source, the source count stays within 2 to 6.

Checks run after the edits:

- `npx tsc --noEmit -p . 2>&1 | grep batch05` gives no output.
- `CASE_BATCH=batch05 npx vitest run tests/cases.test.ts` passes, 63 of 63.

Legend for verdicts: Accurate means no clinical change was needed. Corrected means I fixed errors and the case is now defensible. Needs physician attention means a judgment call is left open for the reviewer.

---

## 1. assault-head-injury-deterioration: Intoxicated man after a fight

**Verdict:** Corrected

**Changes**

1. Clinical decision rule reasoning. Before: the feedback, teaching and a consequence node said intoxication makes the Canadian CT Head Rule and Canadian C-Spine Rule invalid. After: the rules do not apply because his GCS is 12. The CT Head Rule covers GCS 13 to 15 and the C-Spine Rule needs an alert patient with a GCS of 15. I added that intoxication by itself was not an exclusion for the CT Head Rule. This is a real teaching error that an examiner would pick up.
2. Tranexamic acid feedback. Before: "reasonable under most trauma protocols" with no mention of severity. After: reasonable under many protocols, and CRASH-3 showed no clear benefit in severe injury like his (GCS 7 at that point) but no excess harm.
3. Seizure prophylaxis teaching. Before: levetiracetam and phenytoin presented as equal. After: the Brain Trauma Foundation 4th edition supports phenytoin. Levetiracetam is widely used with similar results but weaker evidence.
4. Sodium target. Before: "Keep sodium 145 to 155 mmol/L" stated as a rule. After: framed as a common unit target, not a guideline threshold.
5. PHIPA police answer. Before: "Stating that a patient is here and his general condition may be allowed." After: a hospital may confirm he is a patient and give his general health status unless he has objected (PHIPA s. 38(3)).

**Doses rechecked:** ketamine 1 to 2 mg/kg at 85 kg is 85 to 170 mg. Etomidate 0.3 mg/kg is about 25 mg. Rocuronium 1.2 mg/kg is about 100 mg. Mannitol 1 g/kg is 85 g. Phenytoin 20 mg/kg at no more than 50 mg/min. Tranexamic acid 1 g over 10 minutes then 1 g over 8 hours. SBP at least 110 mmHg for age 15 to 49, CPP 60 to 70 mmHg, ICP threshold 22 mmHg, all match BTF 4th edition. GCS components add up.

**Sources verified**

- Brain Trauma Foundation 4th edition guideline (Carney N, et al. Neurosurgery 2017, released 2016). Real.
- CRASH-3 collaborators. Lancet 2019. Title matches.
- Stiell IG, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet 2001. Real.
- Ontario PHIPA ss. 38(3) and 40(1), confirmed through the IPC Ontario and CPSO summaries: https://www.ipc.on.ca/en/health-organizations/collection-use-and-disclosure-of-personal-health-information/disclosure

**Residual uncertainty:** whether tranexamic acid should be labelled strong in a patient who is now GCS 7 with a fixed pupil. I kept it strong because many Canadian trauma protocols give it within 3 hours, but a reviewer may prefer partial or a neutral framing.

---

## 2. precordial-stab-wound: Stabbed at a house party

**Verdict:** Accurate (one source mapping fixed)

**Changes**

1. Rubric st-l2 (debrief and sharps exposure) was sourced to the EAST thoracotomy guideline, which does not cover staff debriefs. Changed to ATLS.

**Checked and correct:** signs of life definition, EAST strong recommendation for thoracotomy in pulseless penetrating thoracic injury with signs of life, pericardiotomy anterior to and parallel with the phrenic nerve, left anterolateral incision in the 4th or 5th space, avoidance of induction and positive pressure in tamponade, ketamine 0.5 mg/kg if forced, tranexamic acid and calcium doses, 1 to 1 to 1 products.

**Sources verified**

- Seamon MJ, et al. EAST practice management guideline on ED thoracotomy. J Trauma Acute Care Surg 2015. Real.
- Burlew CC, et al. WTA critical decisions in trauma: resuscitative thoracotomy. J Trauma Acute Care Surg 2012. Real.

**Residual uncertainty:** local damage control by a general surgeon who has never repaired a heart versus immediate transfer is a judgment call. The case models local control first. That is defensible for a heart just restarted, but some examiners may want both options discussed.

---

## 3. house-fire-burns: Pulled from a basement fire

**Verdict:** Corrected

**Changes**

1. Cyanide lactate threshold. Before: "A lactate above about 8 mmol/L is a useful marker" and the same in the teaching. After: in fire victims a lactate of 10 mmol/L or more tracked with toxic cyanide levels (Baud 1991). Lower values are treated when the patient is acidotic, confused or in shock. His lactate is 9.6 with pH 7.16 and GCS 13, so empiric hydroxocobalamin stays strong. The 8 mmol/L figure comes from pure cyanide poisoning studies, not smoke inhalation.
2. Added source: Baud FJ, et al. Elevated blood cyanide concentrations in victims of smoke inhalation. N Engl J Med 1991. Rubric bu-a2 now cites it.
3. Referral source. Before: "American Burn Association. Burn centre referral criteria." After: "American Burn Association. Guidelines for burn patient referral. 2022." with the ABA URL.

**Doses and numbers rechecked:** burn map adds to 35 percent (4 plus 18 plus 9 plus 4) and erythema is excluded. ABLS 2018 adult thermal start of 2 mL/kg per percent gives 5,600 mL per 24 hours, 2,800 mL in the first 8 hours from the burn, minus the 500 mL given, about 330 mL/h. The Parkland branch at 4 mL/kg is correctly 700 mL/h. Urine target 0.5 mL/kg/h is 40 mL/h. Hydroxocobalamin 5 g IV over 15 minutes with a possible second 5 g. Succinylcholine safe in the first 24 hours. Escharotomy lines correct. The 2 mL/kg start with Parkland as partial is a fair quality label under ABLS 2018.

**Sources verified**

- ABLS 2018 update, 2 mL/kg/%TBSA adult start confirmed through the Canadian consensus FAQ that cites it: https://nbtrauma.ca/wp-content/uploads/2020/10/FAQ-Burn-Consensus-Statement-JULY-2019-FINAL.pdf
- ABA Guidelines for burn patient referral: https://ameriburn.org/resources/burnreferral/
- Baud FJ, et al. NEJM 1991: https://www.nejm.org/doi/full/10.1056/NEJM199112193252502
- Borron SW, et al. Ann Emerg Med 2007. Real.

**Residual uncertainty:** none major. Some Canadian burn centres still teach Parkland. The partial label for 4 mL/kg rests on the "without planning to titrate" wording.

---

## 4. diving-injury-cottage: Dock at the cottage

**Verdict:** Corrected

**Changes**

1. MAP target. Before: "85 to 90 mmHg for up to 7 days. Newer AO Spine guidance accepts a floor of 75 to 80." After: AANS and CNS 2013 suggests 85 to 90 mmHg for 7 days. The 2024 AO Spine and Praxis update suggests a floor of 75 to 80 and a ceiling of 90 to 95 mmHg for 3 to 7 days. The same fix went into the rubric teaching and the strong choice feedback.
2. Methylprednisolone framing. Before: steroids "increase infection and bleeding" and the 48 hour regimen "increases sepsis, pneumonia and GI bleeding". After: steroids "may increase infection and GI bleeding". The 48 hour regimen raised severe sepsis and severe pneumonia in NASCIS III without better recovery, and AO Spine recommends against it. The 24 hour within 8 hours weak option is correctly stated.
3. Internal consistency error in the family question. Before: the model answer said "Speak to Ethan directly as well. He is awake and capable" after every path had intubated him. After: the prompt says he is sedated. His parents act as substitute decision makers while he is incapable, and the physician plans to update Ethan himself when he can take part. Rubric sc-p1 was rewritten to match and now cites the Health Care Consent Act.
4. Sources. Before: one AO Spine citation with a generic title dated 2017. After: the real 2017 methylprednisolone guideline title, plus a separate 2024 AO Spine and Praxis citation that covers hemodynamic management (Kwon BK, et al.) and the timing of decompression (Fehlings MG, et al.). The decompression within 24 hours point now cites the 2024 update, which recommends it as the preferred option. Added Ontario Health Care Consent Act, 1996.

**Doses and numbers rechecked:** VC 900 mL at 70 kg is about 13 mL/kg. Ketamine 1 mg/kg, rocuronium 1.2 mg/kg, atropine 1 mg, push dose epinephrine 10 to 20 mcg. The C5 level fits elbow flexion 3 out of 5 with no wrist extension and sensation to the lateral upper arm. NASCIS bolus 30 mg/kg then 5.4 mg/kg/h.

**Sources verified**

- AO Spine 2024 hemodynamic guideline: https://pubmed.ncbi.nlm.nih.gov/38526923/
- AO Spine 2017 methylprednisolone guideline: https://journals.sagepub.com/doi/10.1177/2192568217703085
- AO Spine 2024 decompression timing update, Global Spine J 2024 14(3S) 174S to 186S: https://journals.sagepub.com/doi/pdf/10.1177/21925682231181883
- Walters BC, et al. AANS and CNS 2013 update. Neurosurgery 2013. Real.

**Residual uncertainty:** the phenylephrine choice is labelled unsafe. It is clearly the wrong drug with a heart rate of 46 and no chronotropic cover, but some examiners would call it partial. The reviewer should confirm which MAP target the program wants candidates to lead with.

---

## 5. restrained-driver-abdominal-pain: Restrained driver with a sore belly

**Verdict:** Corrected

**Changes**

1. Rh immune globulin dose before 12 weeks. Before: "300 mcg IM is standard. Some protocols use 120 mcg before 12 weeks." After: before 12 weeks SOGC accepts a minimum of 120 mcg. Many Canadian EDs stock and give 300 mcg, which is also correct. The indication now says "unsensitized" (antibody screen negative).
2. Added source: SOGC Guideline No. 448, Prevention of Rh D alloimmunization, 2024 (Fung-Kee-Fung K, et al.). Rubric sb-m2 now cites it. The 2024 guideline no longer recommends routine anti-D for early pregnancy loss before 12 weeks, but that does not apply to abdominal trauma.

**Checked and correct:** fetal dose from one abdominopelvic CT is well under 50 mGy. Iodinated contrast is not withheld. Kleihauer Betke is for more than 20 weeks. The CT picture fits a Chance type L2 injury with mesenteric injury. Ceftriaxone with metronidazole is acceptable in pregnancy.

**Sources verified**

- SOGC Guideline No. 448 (2024): https://www.jogc.com/article/S1701-2163(24)00260-3/abstract and summary at https://www.guidelinecentral.com/guideline/4590140/
- Jain V, et al. SOGC pregnant trauma guideline. JOGC 2015. Real.
- ACOG Committee Opinion 723, 2017. Real.
- Hoff WS, et al. EAST blunt abdominal trauma guideline. J Trauma 2002. Real.

**Residual uncertainty:** I could not open the full text of SOGC 448 to confirm its exact trauma wording. The 120 mcg minimum before 12 weeks is confirmed for procedures such as CVS. The reviewer should confirm the trauma section.

---

## 6. neck-wound-robbery: Wound to the neck after a robbery

**Verdict:** Accurate (citation and label fixes)

**Changes**

1. Consequence node phase. Before: "In the scanner" although the patient never reaches the scanner. After: "On the way to CT".
2. CAFG citation. Before: generic title. After: the real Part 2 title on the anticipated difficult airway, with the PubMed URL.
3. Added the WTA URL for the penetrating neck algorithm.

**Checked and correct:** zone II wound, hard and soft signs, collar removal without neuro deficit, no probing, Foley balloon tamponade, no circumferential wrap, no blind clamping, permissive hypotension without head injury, CT angiography for stable patients whatever the zone.

**Sources verified**

- Sperry JL, et al. WTA penetrating neck trauma. J Trauma Acute Care Surg 2013: https://www.westerntrauma.org/wp-content/uploads/2020/07/WTACriticalDecisionsPenetratingNeckTrauma.pdf
- Law JA, et al. CAFG Part 2. Can J Anesth 2021: https://pubmed.ncbi.nlm.nih.gov/34105065/
- Navsaria P, et al. Foley balloon tamponade. World J Surg 2006. Real.

**Residual uncertainty:** moving a hypotensive patient to the operating room for the airway is labelled strong. It is defensible with the operating room one floor up, but ED double set up is also acceptable and the reviewer may want that said.

---

## 7. trench-collapse-crush: Trapped in a trench

**Verdict:** Corrected

**Changes**

1. Insulin in kidney injury. Before: insulin 10 units with 25 g dextrose and "check glucose hourly", with no adjustment for his kidney injury. After: many give 5 units, or add a dextrose infusion, when there is kidney injury. Check glucose hourly for at least 4 to 6 hours. Rubric cr-m1 teaching updated. The strong choice with 10 units stays strong because it is still standard.

**Doses and numbers rechecked:** calcium chloride 1 g or calcium gluconate 3 g are about equivalent. Salbutamol 10 to 20 mg nebulized. Delta pressure 62 minus 52 is 10 mmHg, under the 30 mmHg threshold. First web space numbness fits the anterior compartment. Urine target 200 to 300 mL/h is about 3 mL/kg/h at 95 kg. Advice not to treat asymptomatic hypocalcemia is correct.

**Sources verified**

- Sever MS, Vanholder R, et al. Recommendations for the management of crush victims in mass disasters. Nephrol Dial Transplant 2012: https://academic.oup.com/ndt/article/27/Suppl_1/i1/1818526
- Bosch X, et al. NEJM 2009. Real.
- McQueen MM, Court-Brown CM. J Bone Joint Surg Br 1996. Real.
- WSIB Form 8. Real.

**Residual uncertainty:** the reviewer should decide whether the program teaches 5 units as the default in kidney injury.

---

## 8. older-woman-brought-by-son: Brought in by her son after a fall

**Verdict:** Corrected. Legal content needs physician attention before release.

**Changes**

1. Long term care reporting. Before: "anyone, including physicians, must report... under the Fixing Long-Term Care Act." After: anyone except a resident, including physicians, must report to the Director at the Ministry of Long-Term Care. The duty applies even if the information is confidential. This matches FLTCA s. 28.
2. Retirement home reporting. Before: "Similar duties apply." After: the Retirement Homes Act sets a duty to report harm, abuse, neglect or misuse of a resident's money to the Registrar of the Retirement Homes Regulatory Authority. This matches RHA s. 75(1) and 75(3).
3. Public Guardian and Trustee. Before: "Financial abuse by an attorney for property can also be reported to the Public Guardian and Trustee" with no condition. After: the PGT investigates when a person is incapable of managing property and serious adverse effects are occurring or may occur (SDA s. 27). While Margaret is capable she can revoke a power of attorney herself.
4. PHIPA threshold. Before: the partial feedback said overriding her needs "a serious imminent risk". After: disclosure without consent needs a significant risk of serious bodily harm (PHIPA s. 40(1)), and admission already reduces that risk. PHIPA does not use the word imminent.
5. Bruise dating. Before: "bruises of different ages" stated as fact. After: bruises that look to be of different ages, with teaching that colour is a poor guide to age.
6. Citation. Before: FLTCA only. After: FLTCA s. 28 and RHA s. 75.

**Checked and correct:** no general duty to report abuse of a capable adult in the community in Ontario. A power of attorney for personal care acts only when the grantor is incapable (SDA). A power of attorney for property gives no health care authority. Capacity is decision specific. A MoCA of 21 does not mean incapacity. The medical findings are consistent (hypernatremia, AKI, 17 percent weight loss, nightstick type ulnar fracture).

**Sources verified**

- FLTCA s. 28 duty and physician confidentiality clause, confirmed through College of Dietitians summary: https://collegeofdietitians.org/programs/complaints-discipline/mandatory-reports/mandatory-reporting-in-a-long-term-care-homes/
- RHA s. 75(1) and (3), confirmed through the RHRA fact sheet and the OCSWSSW notice: https://www.rhra.ca/wp-content/uploads/2018/10/Mandatory-Reporting-Fact-Sheet-PDF-2.pdf
- SDA ss. 27 and 62 PGT investigation duty: https://www.publications.gov.on.ca/store/20170501121/Free_Download_Files/300635.pdf
- PHIPA s. 40(1): https://www.cpso.on.ca/physicians/policies-guidance/policies/reporting-requirements/advice-to-the-profession-reporting-requirements
- Lachs MS, Pillemer KA. NEJM 2015. Real.
- Yaffe MJ, et al. EASI. J Elder Abuse Negl 2008. Real.

**Residual uncertainty:** I could not load the e-Laws text directly, so the statute wording was confirmed through regulator and college summaries. A reviewer should read FLTCA s. 28 and RHA s. 75 on e-Laws. The decision about where she lives is personal care under the SDA rather than treatment under the HCCA. The case cites the HCCA capacity test for it, which is a close but not exact fit. The EASI was validated in patients with MMSE 24 or more, and her MoCA is 21.

---

## 9. older-man-severe-abdominal-pain: Belly pain that will not settle

**Verdict:** Accurate (citation fix)

**Changes**

1. CAR citation. Before: "Canadian Association of Radiologists. Guidance on contrast associated acute kidney injury." After: Macdonald DB, et al., with the correct title and the PubMed URL.

**Doses rechecked:** heparin 80 units/kg at 72 kg is about 5,800 units, then 18 units/kg/h. Piperacillin tazobactam 4.5 g. Hydromorphone 0.25 to 0.5 mg. MAP at least 65 mmHg. The CAR 2022 guidance supports giving contrast at an eGFR of 46 and says contrast should not be withheld when it is needed for diagnosis.

**Sources verified**

- Macdonald DB, et al. CAR guidance on contrast associated AKI. Can Assoc Radiol J 2022: https://pubmed.ncbi.nlm.nih.gov/35608223/
- Bala M, et al. WSES acute mesenteric ischemia update. World J Emerg Surg 2022. Real.
- Björck M, et al. ESVS mesenteric guideline. Eur J Vasc Endovasc Surg 2017. Real.
- Rockwood K, et al. CMAJ 2005. Real.

**Residual uncertainty:** ESVS may have published a newer mesenteric guideline since 2017. Please check before release. Holding apixaban for 4 days for a dental extraction is poor practice. It works as story, but a reviewer may want a teaching line on it.

---

## 10. older-woman-confusion-seizure: Confused, then shaking

**Verdict:** Corrected

**Changes**

1. Sertraline. Before: "Do not restart either" (thiazide and sertraline). After: stop the thiazide for good. Hold sertraline and have her family doctor review mood treatment, with sodium checks if an antidepressant is restarted. A blanket ban on treating her depression is not defensible. The family explanation was updated to match.
2. Beers citation title corrected to the published form.

**Doses and numbers rechecked:** 3 percent saline 150 mL over 20 minutes up to three times (ESE 2014) or 100 mL over 10 minutes (Verbalis 2013). The 8 mmol/L limit for a high risk patient counts from 112, so about 120. The rise to 122 at 6 hours is overcorrection. Desmopressin 2 mcg IV every 6 to 8 hours. D5W 3 mL/kg/h at 50 kg is 150 mL/h. Calculated osmolality is about 233, which fits the measured 236. Urine osmolality 390 then 95 fits a water diuresis.

**Sources verified**

- Spasovski G, et al. Eur J Endocrinol 2014. Real.
- Verbalis JG, et al. Am J Med 2013. Real.
- Sterns RH. NEJM 2015. Real.
- AGS Beers Criteria 2023. J Am Geriatr Soc 2023. Real.

**Residual uncertainty:** ESE allows 10 mmol/L in the first 24 hours in general. The case uses the stricter 8 because of her risk factors, which I think is correct. Newer cohort data suggest osmotic demyelination is rarer than once thought. That does not change exam teaching.

---

## Batch summary

- Cases reviewed: 10. Accurate: 3 (precordial stab, neck wound, mesenteric ischemia, each with citation or label fixes only). Corrected: 7.
- Most serious errors found:
  1. The head injury case taught that intoxication voids the Canadian CT Head Rule and C-Spine Rule. The real reason is his GCS of 12.
  2. The diving case had a sedated, intubated patient described as "awake and capable" in the family question.
  3. The elder abuse case had loose legal statements. It did not name who receives reports (the Director for long term care, the Registrar for retirement homes). It implied the PGT acts on financial abuse without incapacity. It used an "imminent risk" test that PHIPA does not contain.
  4. The burns case used an 8 mmol/L lactate cyanide threshold drawn from pure cyanide studies instead of the smoke inhalation data.
- Items for the physician reviewer: the Ontario statute wording against e-Laws, the tranexamic acid label in severe TBI, the MAP target to lead with in spinal cord injury, the insulin default in kidney injury, the SOGC 448 trauma wording, and whether a newer ATLS edition or ESVS mesenteric guideline should replace the cited ones.
