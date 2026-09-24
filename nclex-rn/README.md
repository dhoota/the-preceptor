# Preceptor: NCLEX-RN Prep

An offline NCLEX-RN study app for iOS and Android. Vite, React 18, Capacitor 7 and RevenueCat. No runtime AI and no network except store purchases.

- `src/engine/`: the test plan blueprint, item types, deterministic scoring, the Rasch adaptive mock, analytics and the quality gates.
- `src/bank/`: 2,000 original items in 48 batches. `docs/bank-plan.json` sets each batch.
- `docs/ITEM_SPEC.md`: the item contract. `docs/WRITER_BRIEF.md`, `docs/REVIEW_BRIEF.md` and `docs/CANADA_BRIEF.md`: the batch pipeline.
- `docs/reviews/`: writer, review and Canada reports for every batch.
- `LAUNCH.md`: owner steps to TestFlight and the Play internal track.

```
npm install
npm test
npm run dev
```

Not affiliated with, sponsored or endorsed by NCSBN. NCLEX, NCLEX-RN and NCLEX-PN are registered trademarks of NCSBN.
