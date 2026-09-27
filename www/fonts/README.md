# Bundled typefaces

Both faces are self-hosted rather than linked, because the store build has to
run with no network at all — a Google Fonts `<link>` would leave the game
typeset in a fallback in airplane mode, which is how a lot of this game gets
played.

Latin subsets only, variable, 166 KB for the pair.

| File | Family | Axes | Licence |
|---|---|---|---|
| `bricolage-var.woff2` | Bricolage Grotesque | `opsz` 12–96, `wdth` 75–100, `wght` 200–800 | SIL OFL 1.1 |
| `hanken-var.woff2` | Hanken Grotesk | `wght` 400–800 | SIL OFL 1.1 |

Full licence text sits beside each file. The OFL requires it to ship with the
software, so these two `.txt` files are part of the build, not documentation.

Sources — Bricolage Grotesque by Atelier Triay, Hanken Grotesk by Alfredo Marco
Pradil, both via the Google Fonts repository.
