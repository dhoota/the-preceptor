# App Store creative assets

Apple's Asset Library holds the image at the top of the product page and the one beside the app in search results. One 16:9 image serves both. Assets are reviewed without a new app version, so this never needs a build.

The recipe was proven live on the HALO app (dhoota/halo-app, commit 4e74ee5, docs/ASSET-LIBRARY.md). Every step up to SUBMITTED worked there. Placement on localizations is not yet verified anywhere.

## Files

- `store/asset-library/header-16x9.png` is the asset. It is 5244 x 2950, PNG, no alpha.
- `store/asset-library/check-21x9.png` and `check-3x2.png` show the two crops Apple takes. They are for checking by eye and are never uploaded.
- `store/tools/asset-header.mjs` renders the asset from the real app.
- `tools/asset-library.mjs` talks to the App Store Connect API.
- `tools/asc-key.sh` turns the key from the Codemagic integration into a .p8 file.

## Workflows

All three run by hand in the Codemagic app Preceptor: CCFP-EM, on branch claude/nclex. None has a push trigger. None builds or releases the app. All reuse the integration `preceptor_appstore`. No new key is created.

1. `nclex-asset-library`: read only. Prints the reference data and the library.
2. `nclex-asset-library-write`: uploads the asset, waits for processing and submits it for review. The upload is the deliverable. If Apple refuses the submission, the asset stays in the library and can be submitted by hand.
3. `nclex-asset-library-place`: run after the asset is APPROVED. It places it on every localization as the product page header and the search results image.

## The image

- Apple crops the master. The 21:9 header keeps y 351 to 2599. The 3:2 search image keeps x 410 to 4834.
- Everything that matters sits inside that area with a further margin of about 110 px.
- The phones are the real app at device scale 4. The type is the app's own Archivo and Atkinson Hyperlegible Next.
- The words come from the store listing, which already ships. No counts and no claims the build cannot back.
- No answer screens, because their Sources block names publishers. Other brands do not belong in our marketing.

## Regenerate

From `nclex-rn/`:

```
VITE_SEED=1 npx vite build --outDir /tmp/seeded
npx vite preview --outDir /tmp/seeded --port 5174
npx -y -p playwright@1 node store/tools/asset-header.mjs http://localhost:5174
```

Then look at both crops before running the write workflow.

## API facts from the HALO runs

- The JWT signature is ES256 with a raw r||s pair, not DER.
- The library id is read from `GET /v1/apps/{id}/assetLibrary`. It came back equal to the app id.
- `GET /v1/appAssetLibraryImages` is refused. List images through the library's own images link.
- Create with `category: CREATIVE_ASSETS`, plus `fileName`, `fileSize` and the library relationship.
- The byte upload sends only Apple's request headers, never the Authorization header.
- Mark the image uploaded, then poll until it reaches PREPARE_FOR_SUBMISSION.
- Submit with a review submission, one review submission item for the image, then mark it submitted.
- Placement is refused until the asset is APPROVED.
