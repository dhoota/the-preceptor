# Rules for reviewing rebuilt SAMPs

These rules govern every review of a rebuilt or new SAMP. They are deliberate. Do not relax them for convenience.

## 1. Reviewers do not edit

A reviewer reads, reasons, probes the scorer and writes a verdict. A reviewer does not change any SAMP, source or held-back file. Every fix goes back to a writer, and the writer's revision gets a fresh independent review.

**Why.** A question a reviewer re-keys has an author and no reviewer. That is how delirium-agitation-14 q3 reached the branch in 168e262 with a key that gave the keeper's own answer full marks. It had to be reverted after a second look. If reviewers cannot edit, that hole cannot reopen. The cost is one extra round trip per fix. The product owner chose that trade on 26 September 2026.

**Keep it even if permission returns.** During this run the permission system happened to block reviewer edits. That was not a limitation to work around. It is the rule. If a future session finds reviewers able to edit, it must still not let them. It must not ask for reviewer edit permission to be restored, and must not ask the physician to loosen it.

## 2. Reviewer-side test runs are not what makes a landing safe

A reviewer may run the tests if it can. Nothing depends on it. Every landing runs its own checks in a clean git worktree that holds exactly the commit being landed:
- the type check
- the full test suite
- the launch gate

That is what makes a landing safe.

## 3. Keeper rule

A D1 repeat that echoes the keeper of the SAMP's own duplicate cluster fails. A rebuild must not retell its keeper. Accept lists that let the keeper's answers score full marks also fail.

## 4. Unrequested writer changes

If a writer changes something the review did not ask for, the reviewer judges it on its merits and says so in the review file. If the reviewer is unsure, the SAMP fails and goes back.

## 5. D1 is frozen at 20

See docs/DECISIONS.md. Past 20, a rebuild that needs a repeat fails, keeps its signed text and goes on Arjan's list.
