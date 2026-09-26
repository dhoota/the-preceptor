# Open items for Arjan

Decisions only you can make. Nothing here has been acted on.

## 1. The repository is public

**Found on 26 September 2026:** GitHub reports `dhoota/the-preceptor` as **public**, not private. Anyone can read it now, including its full history.

What the public history contains:
- Your name and the old website bio ("founded by Arjan Dhoot, MD", with your training details), in earlier versions of `index.html`.
- Your personal email address, `dhoota@hotmail.com`, in earlier versions of `index.html`.
- The author string "Draft for review by Arjan Dhoot, MD" on every SAMP and oral case, in commits before 7439cfe.
- Your name in the sign-off records and internal docs. These are still in the current files, listed at the end of this section.
- The commit metadata on the branch, which carries the account email.
- The GitHub username `dhoota`, which is part of the repository address itself.

Editing files now does not remove any of this from history. Anything already public may also sit in forks, caches or archive services that no later change can reach.

The options, all yours to decide:
1. **Make the repository private now.** This stops further public reads. It does not recall copies already made. It can be done in a minute from GitHub > Settings > General > Danger Zone > Change visibility. Codemagic keeps working if its GitHub access is kept.
2. **Rewrite history** (for example with `git filter-repo`) to strip the name, the email and the author strings from every commit, then force-push every branch. Every clone, including Codemagic's, must be re-cloned. Open pull requests and commit links break. It does not reach copies already made while public.
3. **Start a fresh private repository** from the current files only, with a clean history, and archive or delete this one. This is the cleanest break. Codemagic, RevenueCat notes and any links must be pointed at the new repository.

Options 2 and 3 are usually combined with option 1 first. Nothing has been changed. Visibility was not touched.

Files in the current tree that still name you (none ship in the app): the sign-off records `docs/signoff-2026-09.json` and `docs/signoff-2026-10.json`, and the internal docs `LAUNCH.md`, `docs/PHYSICIAN_REVIEW.md`, `docs/SIGNED-DUPLICATES.md`, `docs/SAMP-TRIAGE.md`, `docs/SUBMISSION-CHECKLIST.md`, `docs/DECISIONS.md`, `docs/SAMP_SPEC.md`, `docs/CASE_SPEC.md`, `docs/CONFORMANCE_BRIEF.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/hold-proposals/`, `docs/reviews/conformance-s16.md` and `docs/triage/s22.json`.

## 2. Answer length in signed-off SAMPs

In these 26 questions from the SAMPs you signed off in the first round (s01 to s18), a keyed option is more than 1.5 times as long as the average distractor. A long key can hint at the answer. They were not changed, because that would change text you attested. Say which to fix, and each fixed SAMP will come back to you for a fresh sign-off.

dvt-pe-02 q3 was briefly shortened on 26 September 2026 without your fresh sign-off. That edit has been reverted, so the text is again exactly what you attested.

| SAMP | Question | Type | Key vs mean distractor |
|---|---|---|---|
| abdominal-pain-05 | q2 | menu | 1.88 |
| abdominal-pain-12 | q3 | menu | 1.68 |
| anaphylaxis-08 | q1 | menu | 1.57 |
| chest-pain-02 | q3 | menu | 1.67 |
| chest-pain-15 | q3 | menu | 1.79 |
| msk-02 | q1 | menu | 1.75 |
| loc-05 | q3 | menu | 1.77 |
| loc-09 | q2 | menu | 1.69 |
| loc-15 | q3 | menu | 1.78 |
| dvt-pe-02 | q3 | single | 1.90 |
| ems-08 | q3 | menu | 1.66 |
| environmental-02 | q2 | menu | 1.65 |
| environmental-03 | q3 | menu | 1.76 |
| environmental-04 | q3 | menu | 1.57 |
| eye-06 | q3 | menu | 1.66 |
| gi-bleed-08 | q3 | menu | 1.81 |
| gi-bleed-15 | q1 | menu | 1.56 |
| ischemic-heart-disease-11 | q2 | menu | 1.70 |
| multiple-trauma-09 | q2 | menu | 1.53 |
| pre-eclampsia-06 | q3 | menu | 1.68 |
| pre-eclampsia-14 | q1 | menu | 1.80 |
| seizures-09 | q1 | menu | 1.69 |
| seizures-10 | q1 | menu | 1.62 |
| sob-02 | q2 | menu | 1.95 |
| sob-04 | q4 | menu | 1.53 |
| tox-09 | q3 | menu | 1.96 |
