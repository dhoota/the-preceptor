// Preceptor: NCLEX. App Store creative assets (App Asset Library) over the
// App Store Connect API. Ported from the HALO app (dhoota/halo-app 4e74ee5),
// where every step up to SUBMITTED ran against the live API. Placement is not
// yet verified anywhere. See docs/ASSET-LIBRARY.md for the recipe.
//
// One 16:9 image, store/asset-library/header-16x9.png, serves both the product
// page header and the search results. Assets are reviewed without a new app
// version, so this never needs a build.
//
// Three stages, three Codemagic workflows, because they cannot be one run:
//   probe   default                 read only
//   upload  ASSET_LIBRARY_WRITE=1   reserve, PUT the bytes, mark uploaded,
//                                   wait for post-processing, then submit
//   place   ASSET_LIBRARY_PLACE=1   assign an APPROVED asset to every
//                                   localization, header and search results
//
// Facts learned live on HALO and kept here:
//   - ES256 JWT signature must be raw r||s (dsaEncoding "ieee-p1363"), not DER.
//   - GET /v1/appAssetLibraryImages is 403 GET_COLLECTION. List through the
//     library's own images link.
//   - The create attribute is "category" and the value is CREATIVE_ASSETS.
//   - The upload PUT carries only Apple's requestHeaders, no Authorization.
//   - Poll until the image leaves UPLOAD_COMPLETE before submitting.
//   - An app version already in review did not block the asset submission.
//     If it ever does, the upload stands and is submitted by hand.
//
// Run (from nclex-rn/):
//   node tools/asset-library.mjs                 probe only
//   ASSET_LIBRARY_WRITE=1 node tools/asset-library.mjs
//   ASSET_LIBRARY_PLACE=1 node tools/asset-library.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSET = path.join(ROOT, "store", "asset-library", "header-16x9.png");
const API = "https://api.appstoreconnect.apple.com";
const FILENAME = "header-16x9.png";

const WRITE = process.env.ASSET_LIBRARY_WRITE === "1";
const PLACE = process.env.ASSET_LIBRARY_PLACE === "1";

const KEY_PATH = process.env.APP_STORE_CONNECT_KEY_PATH || "";
const KEY_ID = process.env.APP_STORE_CONNECT_KEY_IDENTIFIER || process.env.ASC_KEY_ID || "";
const ISSUER = process.env.APP_STORE_CONNECT_ISSUER_ID || process.env.ASC_ISSUER_ID || "";
const APP_ID = process.env.APP_APPLE_ID || "";

const die = (m) => { console.error("\nasset-library: " + m + "\n"); process.exit(1); };

for (const [k, v] of Object.entries({
  APP_STORE_CONNECT_KEY_PATH: KEY_PATH, APP_STORE_CONNECT_KEY_IDENTIFIER: KEY_ID,
  APP_STORE_CONNECT_ISSUER_ID: ISSUER, APP_APPLE_ID: APP_ID,
})) if (!v) die(`${k} is not set. This reuses the key the release workflows already resolve. Nothing new is created here.`);
if (!fs.existsSync(KEY_PATH)) die(`no key file at ${KEY_PATH}`);

// ---------------------------------------------------------------------------
// The token. ES256 over a P-256 key, and the signature must be the raw r||s
// pair: node's default for EC is DER, which Apple rejects as malformed.
const b64u = (b) => Buffer.from(b).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64u(JSON.stringify({ alg: "ES256", kid: KEY_ID, typ: "JWT" }));
  const body = b64u(JSON.stringify({ iss: ISSUER, iat: now, exp: now + 900, aud: "appstoreconnect-v1" }));
  let sig;
  try {
    sig = crypto.sign("sha256", Buffer.from(head + "." + body),
      { key: fs.readFileSync(KEY_PATH, "utf8"), dsaEncoding: "ieee-p1363" });
  } catch (e) {
    // A readable sentence beats a crypto stack trace: every time this has
    // failed it was the key arriving damaged, not the signing.
    die(`could not sign with the key at ${KEY_PATH}: ${e.message}. ` +
        `tools/asc-key.sh normalises the .p8 and says so when OpenSSL cannot parse it.`);
  }
  return `${head}.${body}.${b64u(sig)}`;
}

// Print the body. Not a chosen field of it: the point of these runs is to
// learn the real shape, and a reader who can see the JSON can correct this
// script, while a reader shown one guessed key cannot.
const dump = (label, json, max = 4000) => {
  if (!json) return console.log(`  ${label}: (no body)`);
  const s = JSON.stringify(json, null, 2);
  console.log(`  ${label}:`);
  console.log(s.length > max
    ? s.slice(0, max) + `\n  … ${s.length - max} more characters`
    : s);
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
  try { json = text ? JSON.parse(text) : null; } catch (e) { /* not json */ }
  console.log(`  ${method} ${url.replace(API, "")} -> ${res.status}${label ? "  (" + label + ")" : ""}`);
  if (!res.ok) {
    if (json && json.errors) for (const e of json.errors)
      console.log(`      ${e.code || "?"}: ${e.title || ""} ${e.detail || ""}`.trim());
    else if (text) console.log("      " + text.slice(0, 600));
  }
  return { ok: res.ok, status: res.status, json, text };
}

// data may be an object or a collection depending on the resource.
const one = (j) => (Array.isArray(j?.data) ? j.data[0] : j?.data) || null;
// The state has been seen under more than one key across these resources, so
// look in all of them rather than pick one and be silently wrong.
const stateOf = (d) => d?.attributes?.state || d?.attributes?.assetDeliveryState?.state
  || d?.attributes?.uploadState || "";

// ---------------------------------------------------------------------------
// STAGE 1: probe. Read only, always runs.
console.log(`\nasset-library: app ${APP_ID}, key ${KEY_ID.slice(0, 4)}…, write=${WRITE} place=${PLACE}\n`);
console.log("probe (read only):");

const refData = await api("GET", "/v1/appAssetLibraryRefData", null, "allowed sizes, placements, limits");
const library = await api("GET", `/v1/apps/${APP_ID}/assetLibrary`, null, "this app's library");

if (!refData.ok || !library.ok) {
  console.log("\nA read endpoint did not answer as expected. These paths are not in");
  console.log("Apple's published reference, so a 404 may mean the resource was renamed,");
  console.log("and a 401 or 403 means the key's role lacks Marketing access. The asset");
  console.log("is committed at store/asset-library/header-16x9.png and uploads by hand");
  console.log("in App Store Connect under Creative Assets with nothing lost.");
  process.exit(refData.status >= 401 && refData.status <= 403 ? 1 : 0);
}

dump("appAssetLibraryRefData", refData.json, 6000);
dump("assetLibrary", library.json, 2000);

const libData = one(library.json);
const libId = libData?.id;
if (!libId) die("the library responded 200 but carried no id, so there is nothing to attach an image to.");

// LIST THROUGH THE RELATIONSHIP, NOT A FILTER. Run #1 of asset-library-write
// answered this with a 403: "appAssetLibraryImages does not allow
// GET_COLLECTION. Allowed: CREATE, DELETE, GET_INSTANCE, UPDATE". So the only
// way to see what is in the library is the link the library itself hands out,
// and that link is read from the body rather than built from a pattern.
const imagesUrl = libData?.relationships?.images?.links?.related
  || `${API}/v1/appAssetLibraries/${libId}/images`;
console.log(`\n  library id: ${libId}`);
console.log(`  images:     ${imagesUrl}`);

if (!WRITE && !PLACE) {
  console.log("\nProbe only. Nothing was written.");
  console.log("Run the asset-library-write workflow to upload, then asset-library-place");
  console.log("once the asset is APPROVED.");
  console.log(`\nasset-library: ${calls} request(s), no writes`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// STAGE 2: upload, then try to submit.
if (WRITE) {
  if (!fs.existsSync(ASSET)) die(`no asset at ${ASSET}`);
  const bytes = fs.readFileSync(ASSET);
  console.log(`\nupload: ${FILENAME}, ${bytes.length} bytes`);

  // Already there? Uploading a second copy of the same asset is not harmful
  // but it is noise in the library, and a re-run after a submission failure
  // is the expected case rather than a rare one.
  const existing = await api("GET", imagesUrl + "?limit=200", null, "what is already in the library");
  const already = (existing.json?.data || []).filter((d) => (d.attributes?.fileName || "") === FILENAME);
  if (already.length) {
    console.log(`\n  ${already.length} image(s) already named ${FILENAME}:`);
    for (const d of already) console.log(`    ${d.id}  state ${stateOf(d) || "(unknown)"}`);
    dump("first existing image", already[0], 1500);
    console.log("\n  Not uploading again. Delete the old one in App Store Connect if this");
    console.log("  is meant to replace it, then re-run.");
    console.log(`\nasset-library: ${calls} request(s)`);
    process.exit(0);
  }

  // THE ATTRIBUTE IS "category", NOT "assetCategory". Run #1 said so in two
  // errors at once: ENTITY_ERROR.ATTRIBUTE.UNKNOWN for assetCategory, and
  // ENTITY_ERROR.ATTRIBUTE.REQUIRED for category. The name came from a blog
  // and the blog was wrong, which is the whole argument for asking Apple
  // rather than reading someone's recollection.
  //
  // THE VALUE IS STILL UNKNOWN, and the reference data does not carry the
  // enum: it describes features, placementPolicies and groupLimits, not
  // categories. So it is discovered rather than guessed. One create is sent
  // with a category that cannot possibly be valid, and Apple's rejection is
  // printed in full, because an invalid enum is normally answered with the
  // list of accepted ones. An invalid value creates nothing, so this costs a
  // request and risks no state.
  //
  // ASSET_LIBRARY_CATEGORY overrides the whole dance, so a known-good value
  // can be used without touching this file.
  const createImage = (category, label) => api("POST", "/v1/appAssetLibraryImages", {
    data: {
      type: "appAssetLibraryImages",
      // specId is deliberately absent: sending it is rejected on create.
      attributes: { fileName: FILENAME, fileSize: bytes.length, category },
      relationships: { assetLibrary: { data: { type: "appAssetLibraries", id: libId } } },
    },
  }, label);

  // CREATIVE_ASSETS was established live on HALO. Override with ASSET_LIBRARY_CATEGORY.
  let category = process.env.ASSET_LIBRARY_CATEGORY || "CREATIVE_ASSETS";
  if (category) {
    console.log(`\n  category: ${category}`);
  } else {
    console.log("\ndiscovering the category enum:");
    const probe = await createImage("NCLEX_INVALID_CATEGORY_PROBE", "deliberately invalid, to read the allowed list");
    if (probe.ok) {
      // Vanishingly unlikely, and it would mean an image now exists under a
      // nonsense category. Say so loudly rather than carry on.
      dump("the invalid probe was ACCEPTED", probe.json);
      die("Apple accepted a nonsense category. An image may have been created: check the library and delete it.");
    }
    dump("rejection", probe.json, 3000);

    // Enum-shaped tokens out of the whole error body, minus the vocabulary
    // Apple uses to describe errors rather than values.
    const NOISE = new Set(["ENTITY_ERROR", "ATTRIBUTE", "ATTRIBUTES", "INVALID", "REQUIRED", "UNKNOWN",
      "FORBIDDEN_ERROR", "STATE_ERROR", "NOT_FOUND", "PARAMETER_ERROR", "JSON", "POST", "GET", "PATCH",
      "DELETE", "CREATE", "UPDATE", "GET_COLLECTION", "GET_INSTANCE", "NCLEX_INVALID_CATEGORY_PROBE"]);
    const found = [...new Set((JSON.stringify(probe.json || {}).match(/\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b/g) || [])
      .filter((t) => !NOISE.has(t)))];
    console.log(`\n  enum-shaped tokens in the rejection: ${found.length ? found.join(", ") : "(none)"}`);

    const prefer = [/CREATIVE/, /HEADER/, /MARKETING/, /PRODUCT_PAGE/];
    category = prefer.map((re) => found.find((t) => re.test(t))).find(Boolean)
      || (found.length === 1 ? found[0] : "");

    if (!category) {
      console.log("\nCould not read a single category out of that rejection.");
      console.log("Nothing was uploaded and nothing was created. Re-run the");
      console.log("asset-library-write workflow with ASSET_LIBRARY_CATEGORY set to the");
      console.log("right value from the list above, or paste the rejection back and the");
      console.log("script can be taught it.");
      console.log(`\nasset-library: ${calls} request(s)`);
      process.exit(1);
    }
    console.log(`  using category: ${category}`);
  }

  const reserve = await createImage(category, "reserve");
  if (!reserve.ok) {
    dump("reserve response", reserve.json);
    die(`the reserve call failed with category ${category}. Nothing was uploaded. If the error above names the allowed values, re-run with ASSET_LIBRARY_CATEGORY set to one of them.`);
  }

  const img = one(reserve.json);
  dump("reserved image", img, 3000);
  const ops = img?.attributes?.uploadOperations || [];
  if (!ops.length) die("no uploadOperations came back, so there is nowhere to send the bytes. The dump above shows what did come back.");

  for (const [i, op] of ops.entries()) {
    const headers = {};
    for (const h of op.requestHeaders || []) headers[h.name] = h.value;
    // No Authorization here on purpose: the token does not belong on the
    // temporary address, and sending it is what breaks this step.
    const off = op.offset || 0, len = op.length ?? (bytes.length - off);
    const res = await fetch(op.url, { method: op.method || "PUT", headers, body: bytes.subarray(off, off + len) });
    console.log(`  ${op.method || "PUT"} part ${i + 1}/${ops.length} (${len} bytes) -> ${res.status}`);
    if (!res.ok) die(`the byte upload failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
  }

  const done = await api("PATCH", `/v1/appAssetLibraryImages/${img.id}`, {
    data: { type: "appAssetLibraryImages", id: img.id, attributes: { uploaded: true } },
  }, "mark uploaded");
  if (!done.ok) die("the bytes went up but the image could not be marked uploaded.");

  // Post-processing. Nothing may reference the asset until it leaves
  // UPLOAD_COMPLETE, and a submission raised too early comes back
  // STATE_ERROR.ASSET_IN_POST_PROCESSING.
  let state = "";
  for (let i = 0; i < 40; i++) {
    const got = await api("GET", `/v1/appAssetLibraryImages/${img.id}`, null, `poll ${i + 1}`);
    const d = one(got.json);
    if (i === 0) dump("image after upload", d, 2500);
    state = stateOf(d);
    console.log(`      state: ${state || "(not reported)"}`);
    if (state && state !== "UPLOAD_COMPLETE" && !/PROCESS/i.test(state)) break;
    await new Promise((r) => setTimeout(r, 15000));
  }

  const ready = () => {
    console.log(`\nUPLOADED. image ${img.id}, state ${state || "(not reported)"}.`);
    console.log("It is in the Asset Library and can be submitted from App Store Connect");
    console.log("under Creative Assets. Run asset-library-place once it is APPROVED.");
    console.log(`\nasset-library: ${calls} request(s)`);
    process.exit(0);
  };

  const sub = await api("POST", "/v1/reviewSubmissions", {
    data: { type: "reviewSubmissions", attributes: { platform: "IOS" },
      relationships: { app: { data: { type: "apps", id: APP_ID } } } },
  }, "open a review submission");

  if (!sub.ok) {
    console.log("\nNo review submission was opened, and that does not undo the upload.");
    console.log("MAX_IN_REVIEW_SUBMISSIONS_PER_PLATFORM_LIMIT_REACHED above means a");
    console.log("version is already in review and Apple allows one at a time, which is");
    console.log("a possible answer while a version is Waiting for Review.");
    ready();
  }

  const item = await api("POST", "/v1/reviewSubmissionItems", {
    data: { type: "reviewSubmissionItems",
      relationships: {
        reviewSubmission: { data: { type: "reviewSubmissions", id: one(sub.json).id } },
        appAssetLibraryImage: { data: { type: "appAssetLibraryImages", id: img.id } },
      } },
  }, "attach the image");
  if (!item.ok) { console.log("\nThe submission exists but the image would not attach to it."); ready(); }

  const sent = await api("PATCH", `/v1/reviewSubmissions/${one(sub.json).id}`, {
    data: { type: "reviewSubmissions", id: one(sub.json).id, attributes: { submitted: true } },
  }, "submit");
  console.log(sent.ok
    ? `\nSUBMITTED. Asset ${img.id} is with review. Run asset-library-place once it is APPROVED.`
    : "\nCreated but not submitted. It is in App Store Connect, ready to send by hand.");
  console.log(`\nasset-library: ${calls} request(s)`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// STAGE 3: placement, every localization, header plus search results.
if (PLACE) {
  const imgs = await api("GET", imagesUrl + "?limit=200", null, "the library's images");
  const mine = (imgs.json?.data || []).filter((d) => (d.attributes?.fileName || "").startsWith("header-16x9"));
  if (!mine.length) { dump("library images", imgs.json, 2500); die(`no image named ${FILENAME} in the library. Run asset-library-write first.`); }
  for (const d of mine) console.log(`  ${d.id}  ${d.attributes?.fileName}  state ${stateOf(d) || "(unknown)"}`);

  const approved = mine.filter((d) => stateOf(d) === "APPROVED");
  if (!approved.length) {
    dump("first candidate", mine[0], 1500);
    console.log("\nNothing is APPROVED yet. A placement is refused before approval, so");
    console.log("this is a wait rather than a failure. Re-run when review is through.");
    console.log(`\nasset-library: ${calls} request(s)`);
    process.exit(0);
  }
  const imageId = approved[0].id;
  console.log(`\nplacing image ${imageId}`);

  const vers = await api("GET", `/v1/apps/${APP_ID}/appStoreVersions?limit=1`, null, "current version");
  const verId = one(vers.json)?.id;
  if (!verId) die("could not read an app store version, so its localizations cannot be listed.");
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
      if (r.ok) placed++; else { failed++; if (failed === 1) dump("first placement failure", r.json, 1500); }
    }
  }
  console.log(`\nplaced ${placed} of ${list.length * 2}${failed ? `, ${failed} refused` : ""}`);
  console.log(`\nasset-library: ${calls} request(s)`);
  process.exit(failed && !placed ? 1 : 0);
}
