# App Store creative assets: Preceptor: CCFP-EM

Apple's Asset Library (live 5 October 2026) holds the image at the top of a
product page and the one beside the app in search results. One 16:9 image
serves both. Assets are set per localization and reviewed WITHOUT a new app
version, so this needs no build and does not touch 1.0.2 (Waiting for Review)
or 1.0.3 (queued).

The recipe was proven on HALO (dhoota/halo-app @ 4e74ee5) and ported here.
App Store Connect app id: **6815475888**.

## Runbook

| Step | Codemagic workflow | Does |
|---|---|---|
| 0 | (local) `node tools/asset-header.mjs` | Renders `store/asset-library/header-16x9.png` from the real app, plus crop previews in `store/asset-library/preview/`. Commit the PNG. |
| 1 | `asset-library` | Probe, read only: ref data, the library, its images, the app's review submissions. |
| 2 | `asset-library-write` | Upload, wait for post-processing, submit the image in its own review submission. |
| 3 | `asset-library-place` | After the image is APPROVED: header and search placements on every localization of the live (READY_FOR_SALE) version. |

All three are manual only (`triggering: events: []`), run on the release
branch `next-release-ccfpem`, use the existing `preceptor_appstore`
integration and set `APP_APPLE_ID=6815475888`. The key is normalised by
`tools/asc-key.sh`; the API work is `tools/asset-library.mjs`.

Safety rails added for this app, on top of the HALO script:

- **Category.** `CREATIVE_ASSETS` is used directly (verified on HALO); no
  discovery request is sent. `ASSET_LIBRARY_CATEGORY` overrides it.
- **Its own submission only.** Write opens a new review submission, checks it
  is empty, attaches only the image, reads the items back and submits only if
  the image is the single item. Otherwise it stops before submitting. It never
  touches an existing submission.
- **Upload is the deliverable.** If Apple refuses a new submission while a
  version is in review, the run reports the asset id and exits 0. Submit by
  hand in App Store Connect under Creative Assets.
- **Re-runs do not duplicate.** If `header-16x9.png` is already in the
  library, write stops without uploading.
- **Placement targets the live version only**, never one waiting, in review or
  being prepared. `ASSET_PLACE_VERSION_ID` overrides deliberately. Placement is
  NOT verified on any app yet; the first failure body is dumped in full.

## Status of each API step (from the HALO runs)

| Step | Verified |
|---|---|
| Auth, ref data, library read | yes |
| List images via the library link | yes |
| Create image with `category` | yes |
| PUT the bytes, mark uploaded, poll | yes |
| Review submission, item, submit | yes |
| Placement on localizations | NO. Not yet run anywhere. |

## 1. Auth

Standard App Store Connect JWT. One detail breaks it silently:

**The ES256 signature must be the raw `r||s` pair, not DER.** Node's default
for EC keys is DER and Apple rejects it as malformed.

```js
crypto.sign("sha256", Buffer.from(head + "." + body),
  { key: pem, dsaEncoding: "ieee-p1363" });   // <- this option is the whole trick
```

Payload: `{ iss: issuerId, iat, exp: iat + 900, aud: "appstoreconnect-v1" }`.
Header: `{ alg: "ES256", kid: keyId, typ: "JWT" }`. Base URL
`https://api.appstoreconnect.apple.com`.

The key needs a role with Marketing access. This app reuses the key of its existing
`preceptor_appstore` integration. Nothing new is minted.

## 2. Reference data and the library

```
GET /v1/appAssetLibraryRefData            -> 200
GET /v1/apps/{APP_APPLE_ID}/assetLibrary  -> 200
```

Ref data carries `features[].placementPolicies[].placementType`, which is
where the placement names come from, plus `featureId` values such as
`CUSTOM_PRODUCT_PAGES` and `groupLimits{groupIds,maxCount}`. It does NOT carry
a category enum. Dump the whole body rather than reading one field out of it:
the shape is not documented and picking a key is a guess dressed as a read.

The library id came back equal to the app id. Do not rely on that. Read it
from the response.

## 3. Listing images: there is no collection

```
GET /v1/appAssetLibraryImages?filter[assetLibrary]={id}   -> 403
```

> FORBIDDEN_ERROR: 'appAssetLibraryImages' does not allow GET_COLLECTION.
> Allowed: CREATE, DELETE, GET_INSTANCE, UPDATE

Follow the link the library hands out instead, read from its own body:

```js
const imagesUrl = library.data.relationships.images.links.related;
// https://api.appstoreconnect.apple.com/v1/appAssetLibraries/{id}/images
GET ${imagesUrl}?limit=200
```

Do this before creating anything, so a re-run after a later failure does not
add a second copy of the same file.

## 4. Create the image record

The attribute is **`category`**, not `assetCategory`. Sending the wrong name
gets you two errors at once:

> ENTITY_ERROR.ATTRIBUTE.UNKNOWN: 'assetCategory' is not an attribute
> ENTITY_ERROR.ATTRIBUTE.REQUIRED: you must provide 'category'

The value is **`CREATIVE_ASSETS`** (plural). Do not send `specId`: it is
rejected on create.

```http
POST /v1/appAssetLibraryImages
{
  "data": {
    "type": "appAssetLibraryImages",
    "attributes": {
      "fileName": "header-16x9.png",
      "fileSize": 3742395,
      "category": "CREATIVE_ASSETS"
    },
    "relationships": {
      "assetLibrary": { "data": { "type": "appAssetLibraries", "id": "{libraryId}" } }
    }
  }
}
```

**If an enum value is ever unknown, discover it rather than guess.** Send one
create with a value that cannot be valid and print the rejection: an invalid
enum is normally answered with the accepted list, and an invalid value creates
nothing, so it costs one request and risks no state. That is how
`CREATIVE_ASSETS` was found here.

The response carries `attributes.uploadOperations`.

## 5. Upload the bytes

For each operation, send the slice to the temporary address.

**Do NOT send the Authorization header to the upload URL.** Apply only the
`requestHeaders` Apple hands back. Sending the token there fails unhelpfully.

```js
for (const op of uploadOperations) {
  const headers = {};
  for (const h of op.requestHeaders || []) headers[h.name] = h.value;
  await fetch(op.url, {
    method: op.method || "PUT",
    headers,                                   // no Authorization
    body: bytes.subarray(op.offset || 0, (op.offset || 0) + op.length),
  });
}
```

Then mark it and wait for post processing:

```http
PATCH /v1/appAssetLibraryImages/{id}
{ "data": { "type": "appAssetLibraryImages", "id": "{id}",
            "attributes": { "uploaded": true } } }
```

```
GET /v1/appAssetLibraryImages/{id}     poll
```

State goes `UPLOAD_COMPLETE` then `PREPARE_FOR_SUBMISSION`. Referencing the
asset before it leaves `UPLOAD_COMPLETE` gives
`STATE_ERROR.ASSET_IN_POST_PROCESSING`. Poll every 15 seconds. It took well
under a minute.

## 6. Submit for review

Three calls. All returned 201, 201, 200.

```http
POST /v1/reviewSubmissions
{ "data": { "type": "reviewSubmissions", "attributes": { "platform": "IOS" },
            "relationships": { "app": { "data": { "type": "apps", "id": "{appId}" } } } } }

POST /v1/reviewSubmissionItems
{ "data": { "type": "reviewSubmissionItems", "relationships": {
    "reviewSubmission":      { "data": { "type": "reviewSubmissions", "id": "{subId}" } },
    "appAssetLibraryImage":  { "data": { "type": "appAssetLibraryImages", "id": "{imgId}" } } } } }

PATCH /v1/reviewSubmissions/{subId}
{ "data": { "type": "reviewSubmissions", "id": "{subId}",
            "attributes": { "submitted": true } } }
```

**An app version already in review did not block this.** The app was Waiting
for Review and the asset submission went through anyway. Expect
`MAX_IN_REVIEW_SUBMISSIONS_PER_PLATFORM_LIMIT_REACHED` as a possibility rather
than a certainty, and when it happens treat the upload as the deliverable:
report the asset id and exit 0, because the asset is sitting in the library
and can be submitted by hand with one click.

## 7. Placement, after APPROVED (NOT YET VERIFIED)

A placement is refused until the asset is APPROVED, and approval is a review
that takes hours or days. Upload and placement therefore cannot be one run.

```http
POST /v1/appAssetLibraryPlacements
{ "data": { "type": "appAssetLibraryPlacements",
    "attributes": { "placement": "PRODUCT_PAGE_HEADER_ASSET" },
    "relationships": {
      "appAssetLibraryImage":        { "data": { "type": "appAssetLibraryImages", "id": "{imgId}" } },
      "appStoreVersionLocalization": { "data": { "type": "appStoreVersionLocalizations", "id": "{locId}" } } } } }
```

Placement types, taken from ref data rather than from memory:
`PRODUCT_PAGE_HEADER_ASSET` and `APP_STORE_SEARCH_RESULTS_ASSET`. Post one of
each per localization to get the header and the search image from a single
asset.

Localizations:

```
GET /v1/apps/{appId}/appStoreVersions?limit=1
GET /v1/appStoreVersions/{verId}/appStoreVersionLocalizations?limit=200
```

This body is untested. The `groupLimits{groupIds,maxCount}` and `featureId`
in ref data suggest a placement may need a group or feature reference that
this body does not send. Dump the first failure in full rather than retrying.

## 8. The image: sizes and the safe area

| Shape | Pixels | Used for |
|---|---|---|
| 16:9 | 5244 x 2950 | both placements, one file |
| 21:9 | 3840 x 1646 | header only |
| 3:2 | 1920 x 1280 | search only |

PNG, **no transparency**. An alpha channel is rejected, so check colour type
before uploading rather than after: PNG colour type 4 or 6 carries alpha, 2 is
plain RGB.

**Apple crops the 16:9 master for the other two shapes, and that is the whole
layout problem.**

- 21:9 keeps the middle **76.2% of the height**: y 351 to 2599.
- 3:2 keeps the middle **84.4% of the width**: x 410 to 4834.

The safe area is the intersection: **x 410 to 4834, y 351 to 2599**, which is
4424 x 2248. Keep every meaningful thing inside that with a further margin of
about 110 units. Placing content exactly on the safe edge is not safe: the
first version here put the brand mark on that line and the 3:2 crop sliced
through it.

Compute both crops and look at them before uploading. The arithmetic:

```js
const ch = Math.round(W / (3840 / 1646)); const top  = (H - ch) / 2;  // 21:9
const cw = Math.round(H * 1.5);           const left = (W - cw) / 2;  // 3:2
```

## 9. The image for this app

`tools/asset-header.mjs` builds the app with the screenshot flag
(`VITE_SEED=1`, the same build the store screenshots use: sample progress,
nothing else), serves it, unlocks it with the local simulated purchase,
freezes animation and shoots three real screens at 402 x 874,
`deviceScaleFactor: 4`:

- **Written**: the SAMP bank and mock exams.
- **An oral station at the stem**: the examiner card, the vitals and the
  12 minute clock ("Clearing out the shed", told in text, nothing graphic).
- **Progress**: where you stand.

The composition page renders at 2622 x 1475 with `deviceScaleFactor: 2`
(exactly 5244 x 2950), reuses the app's own bundled Barlow Semi Condensed and
Atkinson Hyperlegible Next faces straight out of the bundle's CSS, waits for
`document.fonts.ready`, and is re-encoded as 8-bit RGB (Chromium writes RGBA,
which Apple rejects). The script fails if the wordmark wraps or any content
box leaves the safe area (x 520..4724, y 461..2489 of the master).

**Look.** This app's own identity, not HALO's: the resuscitation record
sheet. Cool bond-white paper with a printed grid, double rules in form green,
the Preceptor mark (form-green ring, ink ring, pen-blue centre), the wordmark
in form type, and one line in ballpoint blue. Stamp red stays reserved for
alarms and is not used. No gradients, no glow.

**Words.** Only shipped copy: the Oral home hero line "Run the case out
loud." and the store short description's "SAMPs and 12 minute oral stations.
Fully offline." No counts, prices, outcome claims, personal names or
third-party brands. The chosen screens show no citation rows (those name other
organizations).

Re-render whenever the UI moves, check the two crop previews by eye, commit,
then run `asset-library-write`. Delete the old library image first if one
with the same file name is already there.

## 10. Content rules worth keeping

- **No claim you cannot verify.** Nothing on the asset the build cannot back.
- **Nobody else's brand.** Check screenshots for third-party names.
- **Mind what the screenshot shows.** The image also appears in search
  results to a general audience; keep clinical imagery out.
- **Respect the palette's meanings.** A colour reserved for a meaning in the
  product does not become decoration.
