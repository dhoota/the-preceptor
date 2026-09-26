# Open items for Arjan

Decisions only you can make. Nothing here has been acted on.

## 1. The repository is public

**Found on 26 September 2026:** GitHub reports `dhoota/the-preceptor` as **public**, not private. Anyone can read it now, including its full history.

**Decision on 26 September 2026: make it private.** Arjan asked for "no public repo, private only". The build session has no tool that can change repository settings, so this has to be done by the account owner:
1. Open https://github.com/dhoota/the-preceptor while signed in as `dhoota`.
2. Settings > General > scroll to Danger Zone > Change repository visibility > Make private. Confirm.
3. In Codemagic, check the app "Preceptor: CCFP-EM" still has access to the repository. A private repository needs the Codemagic GitHub App to have access to it.

**Attempts so far, all still public:**
- A browser session got through Danger Zone, Change visibility, Make private and both confirmations. GitHub then asked for the account password (sudo mode). The session does not enter passwords, so it stopped there and left the tab on that screen for Arjan.
- The build session sent `PATCH /repos/dhoota/the-preceptor` with `private: true`. The session's GitHub proxy refused it: "Repository settings writes are not permitted through this proxy."
- A read straight after still showed `private: false`, `visibility: public`.

**What changes when it goes private:** GitHub Pages is off for this repository, so no site breaks. It has 0 forks, 0 stars and 0 watchers, so no public fork survives. Anything already cloned, forked or cached by anyone who looked stays out regardless.

Status: **not yet done** at the time of writing. Going private stops new public reads. Anything already cloned, forked, cached or archived while it was public stays out of reach whatever is done later. History rewrite and a fresh repository (options 2 and 3 below) remain open for Arjan to choose later.

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

## 3. Items held for Arjan, not written into the text

- **D1 now covers 19 questions, not 3.** D1 lets a rebuilt or new SAMP repeat one signed decision where that decision is the literal wording of a key feature. It was the product owner's call, not Arjan's. It started as a waiver for 3 repeats. As rebuild groups landed, it grew to 19. Each is defensible alone, but the total is a different decision from the one first made. Reversing D1 sends all 19 back for rebuild. The full list and the running total are at the top of the D1 table in docs/DECISIONS.md. The product owner has frozen D1 at 20. Past that, any rebuild that needs a repeat fails and waits for you.
- **cva-27, the PICA fact from Lee 2006.** It was cut when cva-27's sourcing was fixed. Say if you want it back, and it will be restored with its source. It was not put back on anyone's judgement but yours.
- **airway-09 stays on its signed text.** Its rebuild failed review in g09 because it retold tox-20's overdose arc. Two later attempts at a new story were each stopped by an automated safety filter before any text was written. airway-09 is therefore still the signed version, a member of its signed-duplicate cluster, and released. Choose one: keep it as it is, rebuild it by hand, or hold it back. Holding it back costs nothing at the gate.
