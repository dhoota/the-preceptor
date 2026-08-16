#!/usr/bin/env python3
"""Resize real device screenshots to the exact pixel sizes App Store Connect wants.

App Store Connect rejects a screenshot whose dimensions are not *exactly* one of
the sizes it lists for that slot. Your phone almost certainly does not shoot at
one of them. This fixes that without you touching an image editor.

    python3 scripts/fit-screenshots.py shots/ --preset iphone65
    python3 scripts/fit-screenshots.py shots/ --preset ipad13

Output lands in `screenshots-out/<preset>/` numbered in filename order, which is
the order App Store Connect will show them in.

It scales to fill and centre-crops, so nothing is letterboxed and nothing is
stretched -- a screenshot with black bars looks broken on the product page, and
Apple has rejected submissions for it.

It also flattens transparency (App Store screenshots must be fully opaque) and
strips metadata.

⚠️  It will NOT invent an iPad screenshot from an iPhone one. The aspect ratios
are 0.46 vs 0.75 -- filling one from the other throws away 38% of the image and
the result plainly shows a phone layout. Apple rejects that under guideline
2.3.10. Capture iPad shots on an iPad.
"""

import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  pip3 install Pillow")

# Every size App Store Connect accepts for the slots this app needs.
# The first entry of each preset is what we render to.
PRESETS = {
    "iphone65": [(1284, 2778), (1242, 2688)],   # 6.5" display  -- required
    "iphone67": [(1290, 2796)],                 # 6.7"/6.9" display
    "ipad13":   [(2064, 2752)],                 # 13" iPad      -- required
    "ipad129":  [(2048, 2732)],                 # 12.9" iPad
}

# How far a source aspect ratio may drift from the target before we refuse.
# 6.7" -> 6.5" is a 0.2% drift. iPhone -> iPad is 62%.
MAX_ASPECT_DRIFT = 0.08

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".heic"}


def collect(paths):
    files = []
    for p in paths:
        if os.path.isdir(p):
            for name in sorted(os.listdir(p)):
                if os.path.splitext(name)[1].lower() in IMAGE_EXTS:
                    files.append(os.path.join(p, name))
        elif os.path.isfile(p):
            files.append(p)
        else:
            sys.exit("not found: %s" % p)
    return files


def fit(img, target):
    """Scale to fill `target` then centre-crop. No bars, no distortion."""
    tw, th = target
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = max(tw, round(sw * scale)), max(th, round(sh * scale))
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return img.crop((left, top, left + tw, top + th))


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("inputs", nargs="+", help="screenshot files, or a folder of them")
    ap.add_argument("--preset", required=True, choices=sorted(PRESETS),
                    help="which App Store slot to render for")
    ap.add_argument("--out", default="screenshots-out", help="output directory")
    ap.add_argument("--force", action="store_true",
                    help="convert even when the aspect ratio is wrong for this device")
    args = ap.parse_args()

    target = PRESETS[args.preset][0]
    tw, th = target
    target_aspect = tw / th

    files = collect(args.inputs)
    if not files:
        sys.exit("no images found")
    if len(files) > 10:
        print("note: App Store Connect accepts at most 10 screenshots per slot; "
              "you gave %d" % len(files))

    outdir = os.path.join(args.out, args.preset)
    os.makedirs(outdir, exist_ok=True)

    written = 0
    for i, path in enumerate(files, 1):
        with Image.open(path) as im:
            im.load()
            sw, sh = im.size

            if (sw, sh) in PRESETS[args.preset]:
                verdict = "already an accepted size"
            else:
                drift = abs((sw / sh) - target_aspect) / target_aspect
                if drift > MAX_ASPECT_DRIFT and not args.force:
                    print("SKIP  %s  (%dx%d)" % (os.path.basename(path), sw, sh))
                    print("      aspect %.3f vs %.3f for %s -- %.0f%% off."
                          % (sw / sh, target_aspect, args.preset, drift * 100))
                    print("      This looks like a screenshot from a different "
                          "class of device. Capture it on the right one, or pass "
                          "--force if you're sure.")
                    continue
                verdict = "scaled + centre-cropped from %dx%d" % (sw, sh)

            out = fit(im.convert("RGB"), target)

        name = "%02d-%s.png" % (i, os.path.splitext(os.path.basename(path))[0])
        dest = os.path.join(outdir, name)
        out.save(dest, "PNG", optimize=True)
        print("OK    %s  (%dx%d, %s)" % (name, tw, th, verdict))
        written += 1

    if not written:
        sys.exit("\nNothing written. See the SKIP notes above.")
    print("\n%d screenshot(s) at exactly %dx%d in %s/" % (written, tw, th, outdir))
    print("Upload them to the '%s' slot in App Store Connect." % args.preset)


if __name__ == "__main__":
    main()
