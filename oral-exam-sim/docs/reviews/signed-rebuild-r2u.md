# Signed rebuild r2u (writer pass after the r2p review)

Requested fixes: docs/reviews/signed-rebuild-r2p-review.md. Rules: docs/reviews/REVIEW-RULES.md. This pass needs a fresh independent review (rule 1).

Probes and pre-edit copies are in the scratchpad at `r2u/`:
- `probe.ts`: calls markQuestion on the live SAMP objects. Run it with `npx vite-node`.
- `probe-out.md`: its output.
- `pediatric-fever.pre.ts` and `multiple-trauma.pre.ts`: copies of the two files taken before editing.

## Changes

Only match phrases changed, on exactly two lines. Both fixes are the lists the reviewer tested.

| File | Line | SAMP / question / item | Change |
|---|---|---|---|
| pediatric-fever.ts | 1012 | pediatric-fever-11 q2, accept `fever` | Removed "over 38", "above 38", "more than 38" and "at least 38". Added "fever over 38", "fever above 38", "fever more than 38", "fever at least 38", "still over 38" and "still above 38". |
| multiple-trauma.ts | 583 | multiple-trauma-06 q3, dangerous "Epinephrine 1 mg IV push" | Removed "epinephrine 1 mg iv", "adrenaline 1 mg iv" and "epi 1 mg iv". Kept the four 1:10,000 forms, "1 mg iv push", "iv push 1 mg", "code dose" and "cardiac arrest dose". |

I did not narrow "overdressed". The review offered that as optional, and the brief limited this pass to the fever item.

## Scope check

I diffed each file against its pre-edit copy. Each diff shows exactly one changed line: pediatric-fever.ts line 1012 and multiple-trauma.ts line 583.
- multiple-trauma-08 lines 703, 704, 706 and 714 are byte-identical to the pre-edit copy.
- s14/index.ts is unchanged, going by its sha256.
- No item text, id, keyed decision, story, prompt, explanation, `required` count, source or other SAMP changed.

## Probe results (markQuestion)

### pediatric-fever-11 q2
- **All 12 wrong lines from the review now score 0/2.** Examples: "Over 38, overheating", "At least 38, overheating", "Over 38 secondary to overheating", "Above 38 because she was too warm", "Over 38 from being bundled", "More than 38 from the warm clothing" and "At least 38 from the snowsuit".
- **Correct wordings still earn the fever point (1/2).** Examples: "True fever", "Still febrile", "Fever is 38 or above", "Temp 38 or higher", "Temperature over 38 is a fever", "Rectal temp over 38 is a fever at this age", "Over 38 is a fever in an infant", "Fever over 38", "Still over 38 after undressing", "Removed from the snowsuit, still over 38", "Fever over 38, not from overheating" and "True fever, not due to overheating".
- **Full answers score 2/2.** Examples: "True fever, rectal 39.4" / "Persistent after 20 minutes undressed" / …
- **Costs the reviewer predicted, confirmed:**
  - "Rectal temp above 38 despite undressing" loses the fever point but keeps rectal (1/2).
  - "Not due to heat, over 38" and "Temp over 38 not caused by overheating" score 0/2.
  - "Still over 38 from being bundled" still earns the fever point. This is narrower than before.

### multiple-trauma-06 q3
- **The reviewer's false positives are no longer dangerous.**
  - These score 1/3 (epi): "Epinephrine 0.5 mg IM, 1 L NS IV bolus", "Epinephrine 0.5 mg IM and 1 L IV fluid", "IM epinephrine 0.5 mg, IV fluids 1 L", "Adrenaline 0.5 mg IM, 1 L crystalloid IV", "Epinephrine 0.5 mg IM, IV access, 1 L bolus", "Epinephrine 0.5 mg IM x 1, IV fluids", and the three infusion lines.
  - "Epi 0.5 mg IM, IV 1 L RL" is no longer dangerous. It scores 0/3 because the `epi` item has no bare "epi" phrase. That gap already existed and is outside this pass.
- **The combined answers score 3/3.** They are "Anaphylaxis" / "Epinephrine 0.5 mg IM, IV access, 1 L bolus" / "Oxygen", and "Epinephrine 0.5 mg IM thigh" / "IV access, 1 L NS bolus" / "Oxygen".
- **These stay dangerous (0/3):** "Epinephrine 1:10000 IV", "Epinephrine 10 mL of 1:10,000 IV", "Adrenaline 1:10,000 1 mg IV", "Epinephrine 1 mg IV push", "IV push 1 mg epinephrine" and "Give the code dose of epinephrine".
- **Negated lines are not flagged.** "Epinephrine 1:1000 0.5 mg IM, not 1:10,000" scores 1/3. "Use 1:1000 IM, not epinephrine 1:10000" scores 0/3, not dangerous.
- **Known costs, as the review recorded:**
  - "Epinephrine 0.1 mg IV slowly (1:10,000) if refractory" is dangerous.
  - "Epinephrine 1 mg IV", "Adrenaline 1mg IV", "Epinephrine 1 mg IV slowly" and "IV epinephrine 1 mg" earn 1/3 (epi), as they did at HEAD.

## Checks

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `npx tsc --noEmit -p .`: clean (exit 0).
- No command was refused. No git write commands were run and nothing was committed.

## For the physician

- **pediatric-fever-11 q2.**
  - Bare "over 38" style lines no longer earn the fever point. That applies to wrong ones like "Over 38 from being bundled", and also to some correct negated ones like "Not due to heat, over 38".
  - "Still over 38 from being bundled" still earns it.
- **multiple-trauma-06 q3.**
  - "Epinephrine 1 mg IV" (without "push") earns 1 of 3, as at HEAD.
  - The 1:10,000 forms are dangerous, including "Epinephrine 0.1 mg IV slowly (1:10,000) if refractory".
  - Found in passing, not changed: the `epi` item does not match a bare "epi", so "Epi 0.5 mg IM, …" earns nothing.
