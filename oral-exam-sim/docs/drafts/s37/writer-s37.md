# Writer report: batch s37, Eye: red eye and loss of vision

File: `src/samps/s37/eye.ts` (export `EYE_S37_SAMPS`), wired into `src/samps/s37/index.ts` as `SAMPS_S37`.

## Count and mix

- 23 SAMPs, eye-16 to eye-38. All `reviewed: false`.
- 82 questions. 75 single and 7 menu. No short questions.
- Questions per SAMP: 4 in 12 SAMPs, 3 in 11 SAMPs.
- Menu questions sit in 7 SAMPs: eye-16, eye-19, eye-23, eye-25, eye-26, eye-27 and eye-30.
- Key positions across the 75 singles, first to fifth: 15, 16, 17, 15, 12. The highest is 22.7 percent.
- The key is the single longest option in 12 of 75 singles (16 percent).
- Checks: `npx tsc --noEmit -p . 2>&1 | grep samps/s37` shows nothing. `SAMP_BATCH=s37 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 496 of 496.

## Cases

| SAMP | Setting and patient | Teaching |
|---|---|---|
| eye-16 | Newborn, 4 days | Gonococcal ophthalmia. Cornea check, ceftriaxone by weight, admission, testing the parents |
| eye-17 | Woman, 26 | Ultraviolet keratitis after spring skiing. Acuity first, infiltrate as a warning sign |
| eye-18 | Girl, 6 | Subtarsal sand with vertical abrasions. Lid eversion |
| eye-19 | Woman, 31 | Topiramate bilateral angle closure. Not pupil block, so no pilocarpine or iridotomy |
| eye-20 | Woman, 29 | Optic neuritis. RAPD, MRI, oral prednisone alone and recurrence |
| eye-21 | Man, 52 | Steroid response after 3 weeks of tobramycin and dexamethasone for viral conjunctivitis |
| eye-22 | Boy, 5 | Primary HSV blepharoconjunctivitis with a dendrite. Steroid harm |
| eye-23 | Man, 38 | Bungee cord. Microhyphema seen only on slit lamp, discharge plan, day 3 rebleed |
| eye-24 | Boy, 12 | White-eyed blowout with oculocardiac reflex |
| eye-25 | Woman, 81 | Open globe at an old cataract wound. Shield, deferred tonometry, ED bundle |
| eye-26 | Woman, 58 | Scleritis with rheumatoid arthritis. Phenylephrine test, disposition, associations |
| eye-27 | Man, 71 | Central retinal vein occlusion. Disposition, neovascular glaucoma, risk factor tests |
| eye-28 | Man, 49 | Diabetic vitreous hemorrhage on ocular POCUS. ASA continues |
| eye-29 | Man, 34 | Traumatic carotid-cavernous fistula labelled conjunctivitis |
| eye-30 | Woman, 36 | Endogenous endophthalmitis in injection drug use |
| eye-31 | Girl, 2 | Conjunctivitis-otitis syndrome. Amoxicillin-clavulanate |
| eye-32 | Boy, 16 | Seasonal allergic conjunctivitis. Olopatadine, not a steroid |
| eye-33 | Man, 62, rural hospital | Fungal keratitis after plant trauma while using a spouse's steroid drops |
| eye-34 | Boy, 3 | Cyanoacrylate glue in the eye |
| eye-35 | Woman, 44 | Traumatic iritis. Look for microhyphema, late angle recession |
| eye-36 | Man, 74 | Spontaneous subconjunctival hemorrhage on warfarin. When trauma changes the approach |
| eye-37 | Woman, 69 | Angle closure from mask-nebulized ipratropium. Timolol risk in COPD |
| eye-38 | Boy, 17 | Lens subluxation after blunt trauma in Marfan syndrome |

Overlap was checked against s10 eye (eye-01 to eye-15), s11 and s40 headache (giant cell arteritis, third nerve palsy, cluster, angle closure), s05 and s27 CVA (amaurosis, retinal artery occlusion), s41 (orbital cellulitis, sinusitis) and s46 (Kawasaki). Giant cell arteritis and retinal artery occlusion are not retested. eye-37 is angle closure again, but its teaching is the drug trigger, early recognition in a patient being treated for something else, and choosing drops in COPD, not the eye-01 regimen.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Exclude serious causes before calling it conjunctivitis | 23 |
| 2. Detailed history, including systemic disease | 21 |
| 3. Visual acuity and full examination with slit lamp | 17 |
| 4. Avoid topical steroids for viral infection | 7 |
| 5. Exclude hyphema after trauma with subconjunctival hemorrhage | 14 |

Key feature 4 questions: eye-21 q1, q2 and q3, eye-22 q2, eye-32 q2 and q3, eye-35 q3. eye-35 q3 contrasts appropriate steroid use in sterile traumatic iritis with viral infection.

## Sources

Verified this session with WebSearch or WebFetch unless noted.

- Moore DL, MacDonald NE, CPS. Preventing ophthalmia neonatorum. Paediatr Child Health. 2015. https://academic.oup.com/pch/article/20/2/93/2647267 (ceftriaxone 50 mg/kg, maximum 125 mg, IV or IM, single dose)
- Le Saux N, Robinson JL, CPS. Management of acute otitis media. 2016, reaffirmed 2024. https://cps.ca/en/documents/position/acute-otitis-media (amoxicillin-clavulanate or cefuroxime preferred with purulent conjunctivitis)
- Fraunfelder FW, Fraunfelder FT, Keates EU. Topiramate-associated acute, bilateral, secondary angle-closure glaucoma. Ophthalmology. 2004. https://pubmed.ncbi.nlm.nih.gov/14711721/
- Lahham S, et al. Point-of-care ultrasonography in the diagnosis of retinal detachment, vitreous hemorrhage, and vitreous detachment in the emergency department. JAMA Netw Open. 2019. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730478
- Okhravi N, et al. Scleritis. Surv Ophthalmol. 2005. https://pubmed.ncbi.nlm.nih.gov/16644370/
- Gharaibeh A, et al. Medical interventions for traumatic hyphema. Cochrane Database Syst Rev. 2019. https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005431.pub4/full
- Jordan DR, et al. Intervention within days for some orbital floor fractures: the white-eyed blowout. Ophthalmic Plast Reconstr Surg. 1998. https://pubmed.ncbi.nlm.nih.gov/9842557/
- Ellis JA, et al. Carotid-cavernous fistulas. Neurosurg Focus. 2012. https://thejns.org/focus/view/journals/neurosurg-focus/32/5/2012.2.focus1223.xml
- Reddy SC. Superglue injuries of the eye. Int J Ophthalmol. 2012. https://pubmed.ncbi.nlm.nih.gov/23166877/
- Jackson TL, et al. Systematic review of 342 cases of endogenous bacterial endophthalmitis. Surv Ophthalmol. 2014. https://doi.org/10.1016/j.survophthal.2014.06.002
- Thomas PA, Kaliamurthy J. Mycotic keratitis: epidemiology, diagnosis and management. Clin Microbiol Infect. 2013. https://pubmed.ncbi.nlm.nih.gov/23398543/
- Lachkar Y, Bouassida W. Drug-induced acute angle closure glaucoma. Curr Opin Ophthalmol. 2007. https://pubmed.ncbi.nlm.nih.gov/17301614/
- Tarlan B, Kiratli H. Subconjunctival hemorrhage: risk factors and potential indicators. Clin Ophthalmol. 2013. https://www.tandfonline.com/doi/full/10.2147/OPTH.S35062
- Not web verified this session, cited from known literature: AAO Conjunctivitis PPP 2024 and Bacterial Keratitis PPP 2024 (same citations as s10), White and Chodosh AAO HSV guideline 2014 (as s10), Flaxel et al AAO Retinal Vein Occlusions PPP and Diabetic Retinopathy PPP (Ophthalmology 2020), Beck et al Optic Neuritis Treatment Trial (N Engl J Med 1992), Jones and Rhee on steroid ocular hypertension (Curr Opin Ophthalmol 2006), Walton et al on traumatic hyphema (Surv Ophthalmol 2002), Wipperman and Dorsch on corneal abrasion (Am Fam Physician 2013), Loeys et al revised Ghent nosology (J Med Genet 2010), and Rosen 10th edition 2023 and Tintinalli 9th edition 2020.

No Canadian Ophthalmological Society or CAEP guideline covers most of these conditions, so AAO Preferred Practice Patterns and primary literature are used. CPS guidance is used for both paediatric infection cases.

## Points for reviewers

- Visual acuity in Snellen form (20/40) trips the stem blood pressure gate, so exact acuity sits in the first update. Stems give acuity only when it is hand motion or counting fingers.
- eye-16 q3. The CPS maximum of 125 mg is written for exposed newborns. The Red Book allows up to 250 mg for established disease. At 2.5 kg, 50 mg/kg is 125 mg, so the key holds under both. The 250 mg distractor is wrong under CPS but a reviewer may want it swapped.
- eye-19 q2 keys cyclopentolate for topiramate angle closure and leaves acetazolamide out on purpose because of the sulfonamide debate. Fraunfelder 2004 supports the drug link and timing. The cycloplegic and "no iridotomy" teaching is standard but I could not open the abstract to confirm its wording.
- eye-20 q4 says plasma exchange is for severe steroid resistant cases. That line does not come from the ONTT.
- eye-21 q2 keys stopping the steroid with ophthalmology review. Some ophthalmologists taper after 3 weeks because subepithelial infiltrates can rebound. The explanation leaves the taper decision to ophthalmology.
- eye-23 q2 does not key head elevation, because the Cochrane review found no reliable evidence for it.
- eye-25 q3 keys vancomycin with ceftazidime as an example of broad IV prophylaxis. Local regimens differ, for example oral or IV moxifloxacin.
- eye-27 q4 keys CBC, lipids and hemoglobin A1c. Please check this against the AAO RVO PPP systemic workup.
- eye-33 q3 is tagged key feature 1, not 4, because the infection is fungal rather than viral.
- Some treatment and disposition questions are mapped to the nearest key feature (usually 1 or 5), as s10 does.
