// Preceptor: CCFP-EM — App Store creative assets (App Asset Library) over the
// App Store Connect API. Ported from the recipe proven on HALO; see
// docs/ASSET-LIBRARY.md for the full write-up and what is and is not verified.
//
// One 16:9 PNG (store/asset-library/header-16x9.png, rendered by
// tools/asset-header.mjs) serves both the product page header and the search
// results image. Assets are reviewed WITHOUT a new app version, so nothing
// here touches a build, a version or its review.
//
// THREE STAGES, THREE WORKFLOWS (they cannot be one run: placement is refused
// until the asset is APPROVED, and approval is a review of hours or days):
//
//   probe   default                    read only. Ref data, the library, its
//                                      images and the open review submissions.
//   write   ASSET_LIBRARY_WRITE=1      reserve, PUT the bytes, mark uploaded,
//                                      wait for post-processing, then submit
//                                      the image in its OWN review submission.
//                                      Idempotent: a re-run reuses the image
//                                      and its unsubmitted submission and only
//                                      retries the submit.
//   place   ASSET_LIBRARY_PLACE=1      assign an APPROVED asset to every
//                                      localization of the live version.
//
// WHAT THIS APP MUST NOT DISTURB. 1.0.2 is Waiting for Review and 1.0.3 is
// queued behind it. So:
//   - write opens a NEW review submission, attaches only the image, reads the
//     submission's items back and submits only if the image is the one and
//     only item. Anything else and it stops before submitting.
//   - before the app has an approved iOS version, the submit is refused with
//     409 RELATIONSHIP.REQUIRED (seen on NCLEX). That is reported as waiting
//     for the first approved version and exits 0. The app version is never
//     added to the asset's submission.
//   - if Apple refuses a new submission (for example
//     MAX_IN_REVIEW_SUBMISSIONS_PER_PLATFORM_LIMIT_REACHED), the upload is the
//     deliverable: it reports the asset id and exits 0. Submitting by hand in
//     App Store Connect is then one click.
//   - place only ever targets a version in READY_FOR_SALE, never one that is
//     waiting, in review or being prepared. ASSET_PLACE_VERSION_ID overrides.
//
// Verified on HALO: auth (ES256 with a raw r||s signature), ref data, library
// read, listing via the library's images link, create with category
// CREATIVE_ASSETS, PUT, mark uploaded, poll, submit. NOT verified anywhere:
// placement. Every response is dumped rather than picked at, because Apple has
// not published a reference for these resources.
//
// Run:
//   node tools/asset-library.mjs
//   ASSET_LIBRARY_WRITE=1 node tools/asset-library.mjs
//   ASSET_LIBRARY_PLACE=1 node tools/asset-library.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FILENAME = "header-16x9.png";
const ASSET = path.join(ROOT, "store", "asset-library", FILENAME);
const API = "https://api.appstoreconnect.apple.com";

const WRITE = process.env.ASSET_LIBRARY_WRITE === "1";
const PLACE = process.env.ASSET_LIBRARY_PLACE === "1";
// Known from the HALO runs; overridable without editing this file.
const CATEGORY = process.env.ASSET_LIBRARY_CATEGORY || "CREATIVE_ASSETS";

const KEY_PATH = process.env.APP_STORE_CONNECT_KEY_PATH || "";
const KEY_ID = process.env.APP_STORE_CONNECT_KEY_IDENTIFIER || "";
const ISSUER = process.env.APP_STORE_CONNECT_ISSUER_ID || "";
const APP_ID = process.env.APP_APPLE_ID || "";

const die = (m) => { console.error("\nasset-library: " + m + "\n"); process.exit(1); };

for (const [k, v] of Object.entries({
  APP_STORE_CONNECT_KEY_PATH: KEY_PATH, APP_STORE_CONNECT_KEY_IDENTIFIER: KEY_ID,
  APP_STORE_CONNECT_ISSUER_ID: ISSUER, APP_APPLE_ID: APP_ID,
})) if (!v) die(`${k} is not set. This reuses the key the existing app_store_connect integration provides. Nothing new is created.`);
if (!fs.existsSync(KEY_PATH)) die(`no key file at ${KEY_PATH}`);

// ES256 over P-256. The signature must be the raw r||s pair: node's default
// for EC keys is DER, which Apple rejects as malformed.
const b64u = (b) => Buffer.from(b).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64u(JSON.stringify({ alg: "ES256", kid: KEY_ID, typ: "JWT" }));
  const body = b64u(JSON.stringify({ iss: ISSUER, iat: now, exp: now + 900, aud: "appstoreconnect-v1" }));
  let sig;
  try {
    sig = crypto.sign("sha256", Buffer.from(head + "." + body), { key: fs.readFileSync(KEY_PATH, "utf8"), dsaEncoding: "ieee-p1363" });
  } catch (e) {
    die(`could not sign with the key at ${KEY_PATH}: ${e.message}. tools/asc-key.sh normalises the .p8 and says when OpenSSL cannot parse it.`);
  }
  return `${head}.${body}.${b64u(sig)}`;
}

const dump = (label, json, max = 4000) => {
  if (!json) return console.log(`  ${label}: (no body)`);
  const s = JSON.stringify(json, null, 2);
  console.log(`  ${label}:`);
  console.log(s.length > max ? s.slice(0, max) + `\n  … ${s.length - max} more characters` : s);
};

let calls = 0;
async function api(method, url, body, label) {
  calls++;
  const full = url.startsWith("http") ? url : API + url;
  const res = await fetch(full, {
    method,
    headers: { Authorization: "Bearer " + token(), ...(body ? { "Content-Type": "application/json" } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* not json */ }
  console.log(`  ${method} ${full.replace(API, "")} -> ${res.status}${label ? "  (" + label + ")" : ""}`);
  if (!res.ok) {
    if (json && json.errors) for (const e of json.errors) console.log(`      ${e.code || "?"}: ${e.title || ""} ${e.detail || ""}`.trim());
    else if (text) console.log("      " + text.slice(0, 600));
  }
  return { ok: res.ok, status: res.status, json, text };
}

const one = (j) => (Array.isArray(j?.data) ? j.data[0] : j?.data) || null;
const stateOf = (d) => d?.attributes?.state || d?.attributes?.assetDeliveryState?.state || d?.attributes?.uploadState || "";

// ---------------------------------------------------------------------------
// STAGE 1: probe. Read only, always runs.
console.log(`\nasset-library: app ${APP_ID}, key ${KEY_ID.slice(0, 4)}…, write=${WRITE} place=${PLACE}\n`);
console.log("probe (read only):");

const refData = await api("GET", "/v1/appAssetLibraryRefData", null, "sizes, placements, limits");
const library = await api("GET", `/v1/apps/${APP_ID}/assetLibrary`, null, "this app's library");
if (!refData.ok || !library.ok) {
  console.log("\nA read endpoint did not answer as expected. A 401 or 403 means the key's role");
  console.log("lacks Marketing access; a 404 may mean Apple renamed the resource. The asset is");
  console.log("committed at store/asset-library/header-16x9.png and can be uploaded by hand in");
  console.log("App Store Connect under Creative Assets.");
  process.exit(refData.status >= 401 && refData.status <= 403 ? 1 : 0);
}
dump("appAssetLibraryRefData", refData.json, 6000);
dump("assetLibrary", library.json, 2000);

const libData = one(library.json);
const libId = libData?.id;
if (!libId) die("the library answered 200 but carried no id.");
// There is no image collection (GET_COLLECTION is 403). The library's own
// images link is the only way to list what is in it.
const imagesUrl = libData?.relationships?.images?.links?.related || `${API}/v1/appAssetLibraries/${libId}/images`;
console.log(`\n  library id: ${libId}`);
console.log(`  images:     ${imagesUrl}`);
const existing = await api("GET", imagesUrl + "?limit=200", null, "images already in the library");
for (const d of existing.json?.data || []) console.log(`    ${d.id}  ${d.attributes?.fileName || "?"}  state ${stateOf(d) || "(unknown)"}`);

// The app's review submissions, for the record. Read only: nothing below
// ever touches a submission this script did not create.
const subs = await api("GET", `/v1/reviewSubmissions?filter[app]=${APP_ID}&filter[platform]=IOS&limit=20`, null, "existing review submissions (read only)");
for (const s of subs.json?.data || []) console.log(`    ${s.id}  state ${s.attributes?.state || "?"}  submitted ${s.attributes?.submittedDate || "-"}`);

if (!WRITE && !PLACE) {
  console.log("\nProbe only. Nothing was written.");
  console.log("Next: the asset-library-write workflow, then asset-library-place once APPROVED.");
  console.log(`\nasset-library: ${calls} request(s), no writes`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// STAGE 2: upload, then submit in a separate review submission.
if (WRITE) {
  if (!fs.existsSync(ASSET)) die(`no asset at ${ASSET}`);
  const bytes = fs.readFileSync(ASSET);
  console.log(`\nupload: ${FILENAME}, ${bytes.length} bytes, category ${CATEGORY}`);

  // IDEMPOTENT. A re-run reuses the image already in the library and any
  // unsubmitted review submission that holds only that image, and just
  // retries the submit. It never uploads a second copy.
  const already = (existing.json?.data || []).filter((d) => (d.attributes?.fileName || "") === FILENAME);
  let img;
  if (already.length) {
    img = already[0];
    const st = stateOf(img);
    console.log(`\n  reusing image ${img.id} already in the library (state ${st || "(unknown)"})`);
    if (/APPROVED|WAITING_FOR_REVIEW|IN_REVIEW/.test(st)) {
      console.log(`\nNothing to do: the image is ${st}. Run asset-library-place once it is APPROVED.`);
      console.log(`\nasset-library: ${calls} request(s)`);
      process.exit(0);
    }
    if (/AWAITING_UPLOAD|FAILED|REJECTED/.test(st)) {
      dump("existing image", img, 1500);
      die(`the existing image is ${st}, so it cannot be submitted. Delete it in App Store Connect and re-run.`);
    }
  } else {
    // The attribute is `category` (not `assetCategory`); specId is rejected.
    const reserve = await api("POST", "/v1/appAssetLibraryImages", {
      data: {
        type: "appAssetLibraryImages",
        attributes: { fileName: FILENAME, fileSize: bytes.length, category: CATEGORY },
        relationships: { assetLibrary: { data: { type: "appAssetLibraries", id: libId } } },
      },
    }, "reserve");
    if (!reserve.ok) { dump("reserve response", reserve.json); die("the reserve call failed. Nothing was uploaded. If the error names the allowed category values, set ASSET_LIBRARY_CATEGORY."); }
    img = one(reserve.json);
    dump("reserved image", img, 3000);
    const ops = img?.attributes?.uploadOperations || [];
    if (!ops.length) die("no uploadOperations came back.");
    for (const [i, op] of ops.entries()) {
      // Only Apple's requestHeaders. No Authorization on the upload address.
      const headers = {};
      for (const h of op.requestHeaders || []) headers[h.name] = h.value;
      const off = op.offset || 0, len = op.length ?? (bytes.length - off);
      const res = await fetch(op.url, { method: op.method || "PUT", headers, body: bytes.subarray(off, off + len) });
      console.log(`  ${op.method || "PUT"} part ${i + 1}/${ops.length} (${len} bytes) -> ${res.status}`);
      if (!res.ok) die(`the byte upload failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
    }
    const done = await api("PATCH", `/v1/appAssetLibraryImages/${img.id}`, {
      data: { type: "appAssetLibraryImages", id: img.id, attributes: { uploaded: true } },
    }, "mark uploaded");
    if (!done.ok) die("the bytes went up but the image could not be marked uploaded.");
  }

  // Nothing may reference the asset until it leaves post-processing.
  let state = stateOf(img);
  for (let i = 0; i < 40; i++) {
    const got = await api("GET", `/v1/appAssetLibraryImages/${img.id}`, null, `poll ${i + 1}`);
    const d = one(got.json);
    if (i === 0) dump("image", d, 2500);
    state = stateOf(d) || state;
    console.log(`      state: ${state || "(not reported)"}`);
    if (state && state !== "UPLOAD_COMPLETE" && !/PROCESS/i.test(state)) break;
    await new Promise((r) => setTimeout(r, 15000));
  }

  const finish = (why) => {
    if (why) console.log(`\n${why}`);
    console.log(`\nUPLOADED. image ${img.id}, state ${state || "(not reported)"}.`);
    console.log("It is in the Asset Library. Re-running asset-library-write reuses it and only");
    console.log("retries the submit. Run asset-library-place once it is APPROVED.");
    console.log(`\nasset-library: ${calls} request(s)`);
    process.exit(0);
  };

  // A submission's items, with what each one points at. An item that points
  // at an app version (or any other image) makes the submission not ours.
  async function itemsOf(subId) {
    let r = await api("GET", `/v1/reviewSubmissions/${subId}/items?include=appAssetLibraryImage,appStoreVersion&limit=50`, null, "items");
    if (!r.ok) r = await api("GET", `/v1/reviewSubmissions/${subId}/items?limit=50`, null, "items (no include)");
    return (r.json?.data || []).map((d) => ({
      id: d.id,
      image: d.relationships?.appAssetLibraryImage?.data?.id || null,
      version: d.relationships?.appStoreVersion?.data?.id || null,
    }));
  }
  const onlyOurImage = (items) => items.length === 1 && items[0].image === img.id && !items[0].version;

  // Reuse an unsubmitted submission that holds exactly this image and nothing
  // else. Any other open submission (for example one holding 1.0.3) is left
  // alone, never added to and never submitted.
  let subId = null;
  const open = await api("GET", `/v1/reviewSubmissions?filter[app]=${APP_ID}&filter[platform]=IOS&filter[state]=READY_FOR_REVIEW&limit=20`, null, "unsubmitted submissions");
  for (const s of open.json?.data || []) {
    const items = await itemsOf(s.id);
    console.log(`    ${s.id}: ${items.length} item(s)${onlyOurImage(items) ? ", only this image: reusing it" : ", not ours: left alone"}`);
    if (onlyOurImage(items)) { subId = s.id; break; }
  }

  if (!subId) {
    const sub = await api("POST", "/v1/reviewSubmissions", {
      data: { type: "reviewSubmissions", attributes: { platform: "IOS" },
        relationships: { app: { data: { type: "apps", id: APP_ID } } } },
    }, "open a NEW review submission for the image only");
    if (!sub.ok) finish("No review submission was opened; that does not undo the upload. A submission already open or in review can cap new ones per platform.");
    subId = one(sub.json)?.id;
    const before = await itemsOf(subId);
    if (before.length) finish(`The new submission ${subId} already held ${before.length} item(s), so it is left untouched and NOT submitted.`);
    const item = await api("POST", "/v1/reviewSubmissionItems", {
      data: { type: "reviewSubmissionItems",
        relationships: {
          reviewSubmission: { data: { type: "reviewSubmissions", id: subId } },
          appAssetLibraryImage: { data: { type: "appAssetLibraryImages", id: img.id } },
        } },
    }, "attach the image");
    if (!item.ok) finish("The submission exists but the image would not attach to it.");
  }

  // Submit only if the image is the one and only item. No app version is
  // ever added to this submission.
  const items = await itemsOf(subId);
  const known = items.length === 1 && (items[0].image === img.id || (!items[0].image && !items[0].version));
  if (!known || items.some((i) => i.version)) {
    console.log(`  items: ${JSON.stringify(items)}`);
    finish(`Submission ${subId} does not hold just this image, so it is NOT submitted.`);
  }

  const sent = await api("PATCH", `/v1/reviewSubmissions/${subId}`, {
    data: { type: "reviewSubmissions", id: subId, attributes: { submitted: true } },
  }, "submit");
  if (sent.ok) {
    console.log(`\nSUBMITTED. Asset ${img.id} is with review in submission ${subId}. Run asset-library-place once it is APPROVED.`);
    console.log(`\nasset-library: ${calls} request(s)`);
    process.exit(0);
  }
  // Seen on NCLEX: 409 ENTITY_ERROR.RELATIONSHIP.REQUIRED, "App must have an
  // approved appStoreVersions for platform IOS, or an appStoreVersions must be
  // included in this review submission." An asset cannot go to review before
  // the app has an approved iOS version. That is a wait, not a failure, and
  // the app version is deliberately NOT added here.
  const body = JSON.stringify(sent.json || {}) + sent.text;
  if (sent.status === 409 && /approved appStoreVersions|RELATIONSHIP\.REQUIRED/.test(body)) {
    finish(`WAITING FOR THE FIRST APPROVED iOS VERSION. Submission ${subId} holds only image ${img.id} and stays unsubmitted. Re-run asset-library-write after an iOS version is approved; it reuses both and only retries the submit.`);
  }
  finish(`Submission ${subId} was created but not submitted (HTTP ${sent.status}). It holds only the image and can be sent by hand, or re-run this workflow.`);
}

// ---------------------------------------------------------------------------
// STAGE 3: placement (NOT YET VERIFIED). Header and search, every localization
// of the live version only.
if (PLACE) {
  const mine = (existing.json?.data || []).filter((d) => (d.attributes?.fileName || "") === FILENAME);
  if (!mine.length) die(`no image named ${FILENAME} in the library. Run asset-library-write first.`);
  const approved = mine.filter((d) => stateOf(d) === "APPROVED");
  if (!approved.length) {
    dump("first candidate", mine[0], 1500);
    console.log("\nNothing is APPROVED yet. A placement is refused before approval, so this is a");
    console.log("wait rather than a failure. Re-run when review is through.");
    console.log(`\nasset-library: ${calls} request(s)`);
    process.exit(0);
  }
  const imageId = approved[0].id;
  console.log(`\nplacing image ${imageId}`);

  let verId = process.env.ASSET_PLACE_VERSION_ID || "";
  if (!verId) {
    const vers = await api("GET", `/v1/apps/${APP_ID}/appStoreVersions?filter[platform]=IOS&limit=20`, null, "versions");
    for (const v of vers.json?.data || []) console.log(`    ${v.id}  ${v.attributes?.versionString}  ${v.attributes?.appStoreState || v.attributes?.appVersionState}`);
    const live = (vers.json?.data || []).find((v) => (v.attributes?.appStoreState || v.attributes?.appVersionState) === "READY_FOR_SALE");
    if (!live) {
      console.log("\nNo version is READY_FOR_SALE. Placement only targets the live version, so the");
      console.log("versions waiting or in review are left alone. Re-run once one is live, or set");
      console.log("ASSET_PLACE_VERSION_ID deliberately.");
      console.log(`\nasset-library: ${calls} request(s)`);
      process.exit(0);
    }
    verId = live.id;
  }
  const locs = await api("GET", `/v1/appStoreVersions/${verId}/appStoreVersionLocalizations?limit=200`, null, "localizations");
  const list = locs.json?.data || [];
  if (!list.length) { dump("localizations", locs.json, 2000); die("no localizations came back."); }
  console.log(`  ${list.length} localization(s): ${list.map((l) => l.attributes?.locale).join(", ")}`);

  let placed = 0, failed = 0;
  for (const loc of list) {
    for (const placement of ["PRODUCT_PAGE_HEADER_ASSET", "APP_STORE_SEARCH_RESULTS_ASSET"]) {
      const r = await api("POST", "/v1/appAssetLibraryPlacements", {
        data: { type: "appAssetLibraryPlacements",
          attributes: { placement },
          relationships: {
            appAssetLibraryImage: { data: { type: "appAssetLibraryImages", id: imageId } },
            appStoreVersionLocalization: { data: { type: "appStoreVersionLocalizations", id: loc.id } },
          } },
      }, `${loc.attributes?.locale} ${placement}`);
      if (r.ok) placed++; else { failed++; if (failed === 1) dump("first placement failure (body untested, dumped in full)", r.json, 2500); }
    }
  }
  console.log(`\nplaced ${placed} of ${list.length * 2}${failed ? `, ${failed} refused` : ""}`);
  console.log(`\nasset-library: ${calls} request(s)`);
  process.exit(failed && !placed ? 1 : 0);
}
