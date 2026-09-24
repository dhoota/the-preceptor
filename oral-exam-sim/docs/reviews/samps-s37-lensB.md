# SAMP review: batch s37, Eye: red eye and loss of vision. Lens B

Reviewer lens: B, internal consistency and numbers. Scope: `src/samps/s37/eye.ts` (eye-16 to eye-38) and `src/samps/s37/review-extra.ts` (eye-39 and eye-40). Every stem, update, option and explanation was read against the others, SAMP by SAMP. The Lens A report was not relied on. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after the fixes: `npx tsc --noEmit -p . 2>&1 | grep samps/s37` prints nothing. `SAMP_BATCH=s37 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 496 of 496. review-extra.ts is not loaded by the test suite, so its checks rest on this review.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| eye-39 (review-extra) | q1 | correct | Keyed index 1 "Dilated fundus examination" while the explanation argues for the slit lamp and calls dilation premature. The Lens A report says this was fixed, but the file still held index 1. Key set to index 4 "Slit lamp examination". | high |
| eye-40 (review-extra) | q2 | explanation | Closing sentence cited "serum lactate of 7.8 mmol/L seen on the first blood gas". No blood gas exists in the case and lactate cannot identify an organism. The Lens A report says it was removed, but it was still in the file. Sentence removed. | high |
| eye-38 | q4 | option, explanation | Distractor "Mild blur improving with pinhole" described as already present, but his acuity is 20/200, improving only to 20/60 with a pinhole. That is not mild. Option now "Partial improvement with a pinhole". The explanation matches. The key position is unchanged. | high |
| eye-19 | q1 | stem | Option "Migraine with aura since age 15" gave an age of onset the stem never stated. Stem now reads "She has had migraine with aura since age 15." | medium |
| eye-33 | q4 | update (q2) | Explanation relied on "a central infiltrate", but the q2 update gave no location. "central" added to the update. | medium |
| eye-16 | q3 | explanation | "Hyperbilirubinemia ... would favour cefotaxime" is not in the cited CPS 2015 statement, which names only IV calcium and says biliary stasis is not a risk with a single dose. The sentence now names only IV calcium. The dose arithmetic was checked and holds: 50 mg/kg x 2.5 kg = 125 mg, the CPS maximum. 250 mg = 100 mg/kg. Azithromycin 20 mg/kg x 2.5 kg = 50 mg, which matches the option. | medium |
| eye-30 | q1 | stem | Zoster uveitis was rejected because it "follows a rash", but the stem never said whether she had a rash. "and no rash" added to the stem. | medium |
| eye-24 | q1 | explanation | Called the eye "a white eye" when the stem gives a subconjunctival hemorrhage and mild lid swelling. Now "a nearly white eye". | low |
| eye-20 | q2 | explanation | "her white, quiet eye". A quiet anterior chamber is first reported in the q3 update, after q2. Now "her white eye". | low |
| eye-18 | q2 | explanation | "a child who does not wear contact lenses". The stem does not say this. Now "from a particle, with no contact lens involved", which traces to the sand mechanism. | low |
| eye-28 | q4 | explanation | "3 months is too long with proliferative disease". Proliferative retinopathy is inferred, not shown, because the fundus could not be seen. Now "likely proliferative disease". | low |

## Key changes

- eye-39 q1 (review-extra): before index 1 "Dilated fundus examination". After index 4 "Slit lamp examination". The explanation already argued for the slit lamp, and eye-23 q1, its twin, keys the slit lamp.

No key was changed in eye.ts.

## Numbers and timelines checked and found consistent

- Acuity: every Snellen value in an explanation matches its update (for example eye-19 20/200, eye-21 20/25 and 20/50, eye-25 hand motion in the stem and update, eye-28 counting fingers at 1 metre, eye-33 20/200). No question needed acuity before its first update, so none was moved into a stem.
- Intraocular pressure: eye-19 48 and 46, eye-21 31 and 38 (worse eye matches the aching left eye), eye-23 24 then 38 on day 3, eye-24 17, eye-26 16 and 15, eye-27 24 and 21, eye-29 32 and 15, eye-30 22 and 16, eye-35 12 and 16 ("slightly low" holds), eye-36 15 and 14, eye-37 56 and 18, eye-38 18 and 16. Each explanation uses the right value.
- Timelines: eye-16 day 4 onset fits the gonococcal window and "Chlamydia days 5 to 14". eye-17 onset at about 00:30 after skiing the day before fits "6 to 12 hours". eye-19 topiramate started 9 days earlier fits "within 2 weeks", and the 50 mg dose fits the "50 mg or less" point. eye-21 three weeks of dexamethasone fits "2 to 6 weeks". eye-23 rebleed on day 3 fits "days 2 to 5". eye-29 crash 6 weeks ago and symptoms for 3 weeks fit "weeks later". eye-33 injury 6 days ago and steroid for 3 days fit the options. eye-35 day 2 fits "1 to 3 days". eye-36 INR 2.6 lies in the 2.0 to 3.0 mechanical aortic valve range.
- Slit lamp: eye-32 "no giant papillae, no limbal nodules, no staining" matches the vernal rejection. eye-35 "no red cells" matches the q2 rejection of hyphema. eye-38 "edge displaced up and out" matches the Marfan explanation.
- Menu counts: every `select` equals the length of `correct`. Each keyed menu answer is argued in its explanation.

## Duplicate content in review-extra.ts

- eye-39 is eye-23 word for word, apart from the wrong key.
- eye-40 is eye-31 word for word, apart from the invented lactate sentence.
- Neither should enter the bank. Both would fail the duplicate stem test.

## Sources verified

- Moore DL, MacDonald NE, CPS 2015, Preventing ophthalmia neonatorum: https://academic.oup.com/pch/article/20/2/93/2647267. Confirms ceftriaxone 50 mg/kg to a maximum of 125 mg IV or IM once, and cefotaxime 100 mg/kg once with IV calcium. It does not mention hyperbilirubinemia.
- The other citations were checked for internal use only: each question cites a source listed in its SAMP. Clinical verification of the other sources is Lens A's task.

## Needs physician decision

- Key feature tags that fit loosely: eye-18 q2 (abrasion treatment tagged KF 3), eye-35 q3 (sterile traumatic iritis tagged KF 4), eye-37 q3 (timolol in COPD tagged KF 1) and eye-37 q4 (ipratropium delivery tagged KF 2). None was retagged, to keep key feature coverage stable. Low.
- eye-38 q4: with acuity of 20/200 in a subluxated lens, "prompt outpatient follow-up" for the existing findings is plausible but worth confirming. Low.

## Summary

- 25 SAMPs reviewed (23 in eye.ts, 2 in review-extra.ts). 11 fixes.
- By category: wrong key 1 (eye-39). Invented fact in an explanation 1 (eye-40). Option contradicting the case 1 (eye-38). Stem or update missing a fact the question or explanation relies on 3 (eye-19, eye-30, eye-33). Claim not supported by the cited source 1 (eye-16). Explanation overstating the case 4 (eye-18, eye-20, eye-24, eye-28).
- Most serious: eye-39 q1 wrong key and eye-40 q2 invented lactate, both still present after Lens A reported them fixed. eye-38 q4 "mild blur" at 20/200.
- SAMP ids with a defect: eye-16, eye-18, eye-19, eye-20, eye-24, eye-28, eye-30, eye-33, eye-38, eye-39, eye-40.
