# Held back from the release

Each JSON file here lists SAMPs that are authored but must not ship yet, as `{ "ids": { "<id>": "<reason>" } }`. One file per piece of work, so parallel work never edits the same file.

- The app leaves every id here out of `SAMPS`.
- If an id is also in a sign-off record (docs/signoff-*.json), its sign-off is treated as revoked: the text changed after the physician attested it. The tests then require `reviewed: false` for it.
- Remove an id once the physician has signed off its current text.
