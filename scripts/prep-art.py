#!/usr/bin/env python3
"""Prepare the downloaded art for shipping.

Two jobs, both of which the raw generated PNGs need before they belong in a UI:

1. **Knock out the flat background.** Every portrait and item icon was rendered
   on a solid pale backdrop. Placed on a card, that backdrop reads as a hard
   rectangle sitting on top of the surface — the single loudest "assembled
   rather than designed" tell in the whole game. This derives a real alpha matte
   by flood-filling inward from the border, so the dog's actual contour survives
   instead of being approximated by a circle or a rounded mask.

2. **Downscale.** The sources are 2048x2048 (331 MB total). The Dogdex alone
   decodes 34 of them at once, which is hundreds of megabytes of bitmap in a
   WebView and a real jetsam risk on an older phone. Nothing is ever displayed
   above ~460 device pixels.

Backgrounds are resized but never knocked out — they are supposed to be opaque.

Run:  python3 scripts/prep-art.py [--dir www/assets]
Idempotent: a file already at or below its target size with alpha is skipped.
"""
import argparse
import math
import os
import re
import sys
from collections import deque

try:
    from PIL import Image, ImageChops, ImageFilter
except ImportError:
    sys.exit("Pillow is required: python3 -m pip install Pillow")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAME = os.path.join(HERE, "www", "index.html")

# Art keys whose asset is a full-bleed scene. These keep their opaque
# background; knocking one out would erase the picture.
SCENE_KEYS = {"bgKitchen", "bgPark", "bgNight", "bgHouse"}
# Character portraits and the mascot: displayed largest, so they keep more
# pixels than an item icon does.
PORTRAIT_MAX = 640
ICON_MAX = 320
SCENE_MAX = (1080, 1920)


def art_map():
    """filename -> art key, read from the ART object in the game file."""
    src = open(GAME, encoding="utf-8").read()
    m = re.search(r"var ART = \{(.*?)\n\};", src, re.S)
    if not m:
        sys.exit("could not locate the ART object in " + GAME)
    out = {}
    for key, url in re.findall(r'^\s*([A-Za-z0-9_]+):\s*"([^"]+)"', m.group(1), re.M):
        out[url.rsplit("/", 1)[-1]] = key
    return out


def near(a, b, tol):
    return abs(a[0] - b[0]) <= tol and abs(a[1] - b[1]) <= tol and abs(a[2] - b[2]) <= tol


_TO255 = bytes([0] + [255] * 255)


def _mask_image(solid, w, h):
    """The 0/1 mask as an 8-bit image, without a Python-level loop."""
    return Image.frombytes("L", (w, h), bytes(bytearray(solid).translate(_TO255)))


def _edges(im, thr):
    """Pixels sitting on a strong colour boundary.

    A colour-distance flood cannot tell a cream backdrop from a Samoyed
    standing on it: they are within a few values of each other, so the flood
    walks through the dog's flank and eats the subject. But the dog has an
    OUTLINE and the backdrop does not. These renders always put a defined,
    shaded, usually furry silhouette between subject and plate, so gating the
    flood on edges as well as on colour makes white-on-white unambiguous.

    A convolution in C, because the same test as a Python loop is four million
    iterations per image."""
    e = im.convert("RGB").filter(ImageFilter.FIND_EDGES).convert("L")
    b = bytearray(e.point(lambda v: 255 if v >= thr else 0).tobytes())
    # FIND_EDGES has no data outside the image, so it reports the outermost
    # ring as one long edge. That ring is where every seed lives, so leaving
    # it marked blocks the flood before it starts.
    w, h = im.size
    for x in range(w):
        b[x] = 0; b[(h - 1) * w + x] = 0
        if h > 2: b[w + x] = 0; b[(h - 2) * w + x] = 0
    for y in range(h):
        r = y * w
        b[r] = 0; b[r + w - 1] = 0
        if w > 2: b[r + 1] = 0; b[r + w - 2] = 0
    return b


def _flood(px, w, h, solid, seeds, ref, tol, blocked=None, tight=8, step=None):
    """Flood the backdrop, refusing to cross an edge.

    An edge pixel is still let through when its own colour is within `tight`
    of the backdrop. That band is the soft pixel or two where the plate meets
    the subject; leaving it behind draws a pale outline around every
    character. Anything further from the backdrop than that is the subject,
    and the flood stops there."""
    q = deque()

    def ok(x, y, i, frm):
        if solid[i]:
            return False
        p = px[x, y]
        if step is None:
            # Fixed reference: every backdrop pixel must resemble the corner.
            if not near(p, ref, tol):
                return False
            if blocked is not None and blocked[i] and not near(p, ref, tight):
                return False
        else:
            # Gradient-following: compare against the neighbour we arrived
            # from, not against the corner. Several of these renders put the
            # dog on a dark backdrop that ramps across the frame, and a fixed
            # reference cannot walk down a ramp — it stops a few pixels in and
            # the whole plate survives. A bound against the corner keeps the
            # walk from drifting all the way into the subject.
            if frm is not None and not near(p, px[frm[0], frm[1]], step):
                return False
            if frm is None and not near(p, ref, step):
                return False
            if not near(p, ref, tol):
                return False
            if blocked is not None and blocked[i] and frm is not None \
               and not near(p, px[frm[0], frm[1]], 5):
                return False
        return True

    for x, y in seeds:
        i = y * w + x
        if ok(x, y, i, None):
            solid[i] = 1
            q.append((x, y))
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h:
                i = ny * w + nx
                if ok(nx, ny, i, (x, y)):
                    solid[i] = 1
                    q.append((nx, ny))


def _bbox(solid, w, h):
    xs0, ys0, xs1, ys1 = w, h, -1, -1
    for y in range(h):
        row = y * w
        for x in range(w):
            if not solid[row + x]:
                if x < xs0: xs0 = x
                if x > xs1: xs1 = x
                if y < ys0: ys0 = y
                if y > ys1: ys1 = y
    return xs0, ys0, xs1, ys1


def _repair(solid, w, h):
    """Delete small islands of "background" that are really bites out of the
    subject.

    An opening on the background mask — erode, then dilate by the same amount
    — removes any background structure thinner than the kernel and leaves the
    real backdrop untouched, because the backdrop is enormous. Run at quarter
    scale so a 7px kernel reaches roughly 28px at full resolution, which is
    the size of the chunks the flood takes out of a pale coat.

    This can only ever turn background back into subject, never the reverse,
    so it cannot eat an ear or trim a tail. The worst it can do is leave a few
    pixels of backdrop attached to the silhouette, which the blur and the
    feather then soften."""
    sc = 4
    sw, sh = max(8, w // sc), max(8, h // sc)
    keep = _mask_image(solid, w, h) \
        .resize((sw, sh), Image.NEAREST) \
        .filter(ImageFilter.MinFilter(7)) \
        .filter(ImageFilter.MaxFilter(7)) \
        .resize((w, h), Image.NEAREST)
    kept = ImageChops.multiply(_mask_image(solid, w, h), keep)
    return bytearray(kept.point(lambda v: 1 if v else 0).tobytes())


def _drop_islands(solid, w, h, im=None):
    """Delete small detached survivors.

    Nearly every icon in this set was rendered with a cast shadow floating
    below the object — a separate grey ellipse on the backdrop. The flood
    walks around it and leaves it behind, so a coin arrives with a smudge
    under it, which at 22px in a collar tag reads as dirt rather than as
    lighting. Anything that survived, is detached from the main subject, and
    is both small next to it and small in the frame, is one of these.

    Deliberately conservative: a piece has to be under an eighth of the main
    subject AND under 3% of the frame before it goes, so a genuinely separate
    element — a ball beside a dog, a second slice of turkey — survives."""
    sc = 4
    sw, sh = max(8, w // sc), max(8, h // sc)
    m = _mask_image(solid, w, h).resize((sw, sh), Image.NEAREST).load()
    im_small = im.convert("RGB").resize((sw, sh), Image.NEAREST)
    lab = [0] * (sw * sh)
    sizes = [0]
    cur = 0
    for y0 in range(sh):
        for x0 in range(sw):
            if m[x0, y0] or lab[y0 * sw + x0]:
                continue
            cur += 1
            n = 0
            q = deque([(x0, y0)])
            lab[y0 * sw + x0] = cur
            while q:
                x, y = q.popleft()
                n += 1
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < sw and 0 <= ny < sh:
                        j = ny * sw + nx
                        if not lab[j] and not m[nx, ny]:
                            lab[j] = cur
                            q.append((nx, ny))
            sizes.append(n)
    if cur < 2:
        return solid
    biggest = max(sizes)
    # A cast shadow is grey. A genuinely separate element — a ball beside a
    # dog, a second slice of turkey — is not. Size alone could not separate
    # them, because the bone's shadow is a long streak with more area than
    # some real parts, so ask about colour as well.
    chroma_sum = [0] * (cur + 1)
    sp = im_small.load()
    for y in range(sh):
        for x in range(sw):
            k = lab[y * sw + x]
            if k:
                r, g, b = sp[x, y]
                chroma_sum[k] += max(r, g, b) - min(r, g, b)
    doomed = set(i for i in range(1, cur + 1)
                 if sizes[i] < biggest / 3.0
                 and sizes[i] < 0.06 * sw * sh
                 and chroma_sum[i] / float(sizes[i]) < 55)
    if not doomed:
        return solid
    drop = Image.new("L", (sw, sh), 0)
    dp = drop.load()
    for y in range(sh):
        for x in range(sw):
            if lab[y * sw + x] in doomed:
                dp[x, y] = 255
    full = drop.resize((w, h), Image.NEAREST)
    return bytearray(ImageChops.lighter(_mask_image(solid, w, h), full)
                     .point(lambda v: 1 if v else 0).tobytes())


def _subject_health(solid, w, h):
    """How intact is whatever survived the flood?

    Returns the largest surviving region as a fraction of the frame, and that
    region's share of everything that survived.

    This replaces a test that sampled a disc at the centre of the frame and
    called the matte damaged if the disc had been cleared. That is only valid
    for a centre-filling pose. The standing mascot holds his arms up, so the
    middle of his frame is legitimately background between them, and he was
    refused for "eating the subject" when nothing had been eaten. Connectivity
    asks the question directly and does not care how the subject is posed: a
    matte that walked into the dog leaves fragments, and fragments show up as
    a small largest-region or a low share.

    Also returns RAGGEDNESS, perimeter over root-area, which is the number
    that actually catches the failure the other two miss. When the flood walks
    into a Samoyed it does not detach the dog, it shreds it: the survivor is
    still one connected piece covering a plausible area, so both of the first
    two numbers look healthy while the coat has holes punched through it. A
    clean silhouette measures 6 to 10 here. A shredded one measures 14 to 25,
    and there is nothing in between.

    Measured on a quarter-scale copy, because the answer does not need
    full resolution and the labelling is the expensive part."""
    sc = 4
    sw, sh = max(1, w // sc), max(1, h // sc)
    small = _mask_image(solid, w, h).resize((sw, sh), Image.NEAREST)
    m = small.load()
    seen = bytearray(sw * sh)
    best = total = 0
    area = per = 0
    for y in range(sh):
        for x in range(sw):
            if m[x, y]:
                continue
            area += 1
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nx, ny = x + dx, y + dy
                if not (0 <= nx < sw and 0 <= ny < sh) or m[nx, ny]:
                    per += 1
                    break
    for y0 in range(sh):
        for x0 in range(sw):
            if m[x0, y0] or seen[y0 * sw + x0]:
                continue
            n = 0
            q = deque([(x0, y0)])
            seen[y0 * sw + x0] = 1
            while q:
                x, y = q.popleft()
                n += 1
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < sw and 0 <= ny < sh:
                        j = ny * sw + nx
                        if not seen[j] and not m[nx, ny]:
                            seen[j] = 1
                            q.append((nx, ny))
            total += n
            if n > best:
                best = n
    return (best / float(sw * sh), best / float(total or 1),
            per / math.sqrt(area or 1))


def _matte_once(px, w, h, border, tol, allow_card, blocked=None, step=None):
    """One full knockout attempt at a given tolerance. Returns the solid mask."""
    solid = bytearray(w * h)

    # Phase 1 — the backdrop, seeded from the actual corner colour.
    _flood(px, w, h, solid, border, px[0, 0], tol, blocked, step=step)

    # Phase 2 — a differently-coloured frame drawn around that backdrop.
    exposed = [(x, y) for x, y in border if not solid[y * w + x]]
    if exposed:
        sx, sy = exposed[len(exposed) // 2]
        if not near(px[sx, sy], px[0, 0], tol):
            _flood(px, w, h, solid, exposed, px[sx, sy], tol, blocked, step=step)

    # Phase 3 — the sticker card. Some icons were drawn as a subject on a white
    # rounded card, on the pale backdrop; phase 1 removes the backdrop and
    # leaves the card, which is the same hard rectangle this step exists to
    # delete. Never attempted on a character portrait.
    if allow_card:
        x0, y0, x1, y1 = _bbox(solid, w, h)
        if x1 > x0 and y1 > y0:
            inset = max(2, (x1 - x0) // 60)
            rx0, ry0 = min(x0 + inset, w - 1), min(y0 + inset, h - 1)
            rx1, ry1 = max(x1 - inset, 0), max(y1 - inset, 0)
            if rx1 > rx0 and ry1 > ry0:
                ring = [(x, ry0) for x in range(rx0, rx1 + 1)] + [(x, ry1) for x in range(rx0, rx1 + 1)] \
                     + [(rx0, y) for y in range(ry0, ry1 + 1)] + [(rx1, y) for y in range(ry0, ry1 + 1)]
                card = px[rx0, ry0]
                flat = sum(1 for (x, y) in ring if near(px[x, y], card, 14)) / float(len(ring))
                if flat > 0.90 and min(card) > 214:
                    trial = bytearray(solid)
                    _flood(px, w, h, trial, ring, card, 15)
                    gained = (sum(trial) - sum(solid)) / float(max(1, (x1 - x0) * (y1 - y0)))
                    if gained < 0.42:
                        solid = trial
    return solid


def knockout(im, tol=34, allow_card=True):
    """Derive an alpha matte by flooding inward from the border.

    Three phases, because these renders come in two shapes. Most sit on a plain
    pale backdrop. Others were drawn as a "sticker": the subject on a white
    rounded card, that card on the pale backdrop. Flooding once removes the
    backdrop and leaves the card, which on a cream UI surface reads as exactly
    the hard rectangle this whole step exists to remove.
    """
    im = im.convert("RGB")
    w, h = im.size
    px = im.load()

    border = [(x, 0) for x in range(w)] + [(x, h - 1) for x in range(w)] \
           + [(0, y) for y in range(h)] + [(w - 1, y) for y in range(h)]

    # A single fixed tolerance cannot serve both a chocolate Labrador on cream
    # and a Samoyed, whose white coat sits within 20 of the cream backdrop on
    # every channel: at tol 34 the flood walks straight through the dog.
    #
    # The test that matters is not how much was cleared overall — a tight
    # tolerance leaves most of the background and still looks "reasonable" by
    # area. It is whether the SUBJECT SURVIVED. Two sides, both have to hold:
    #
    #   the BORDER must come out cleared — otherwise the plate is still there
    #   and the matte achieved nothing;
    #
    #   whatever survived must still be ONE INTACT THING — see
    #   _subject_health. A flood that walked into a pale coat leaves the dog
    #   in pieces, and pieces are what that test detects.
    border_n = float(max(1, len(border)))

    # Try the edge-gated flood first and at the loosest tolerances, because
    # that is the combination that finally clears a white dog off a cream
    # plate: the gate holds the flood at the silhouette, so tolerance no
    # longer has to be tight enough to tell coat from backdrop by colour
    # alone. Ungated passes stay at the end as the fallback for the few
    # renders whose subject has no defined outline.
    edge_map = _edges(im, 20)
    best, frac = None, 0.0
    attempts = [(t, edge_map, None) for t in (44, 38, 34, 28)] + \
               [(t, None, None) for t in (tol, 28, 23, 19, 15, 12, 9)] + \
               [(120, edge_map, 10), (90, edge_map, 7), (70, edge_map, 6)]
    for t, blocked, step in attempts:
        solid = _matte_once(px, w, h, border, t, allow_card, blocked, step)
        frac = sum(solid) / float(w * h)
        edge = sum(1 for (x, y) in border if solid[y * w + x])
        # Cheap test first: if the plate is still there the matte achieved
        # nothing, and there is no point labelling anything.
        if edge / border_n < 0.95 or frac > 0.93:
            continue
        solid = _repair(_drop_islands(solid, w, h, im), w, h)
        area, share, rag = _subject_health(solid, w, h)
        if area >= 0.05 and share >= 0.75 and rag <= 11.0:
            best = (solid, frac)
            break
    if best is None:
        return None, frac
    solid, frac = best

    alpha = ImageChops.invert(_mask_image(solid, w, h))
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=max(1, w // 400)))
    out = im.convert("RGBA")
    out.putalpha(_feather(alpha, w, h))
    return out, frac


def _vignette(alpha, w, h):
    """Fade a kept backdrop radially instead of leaving a rectangle.

    Used only where the matte was refused. Every one of these renders is
    centre-composed, so a ramp that is solid inside the middle and gone by the
    corners cannot touch the subject, but it turns the leftover plate from a
    hard cream rectangle — which on a dark ground is the most conspicuous
    object on the screen — into a soft halo you have to look for."""
    g = Image.radial_gradient("L").resize((w, h), Image.BILINEAR)
    ramp = g.point(lambda v: 255 if v < 150 else
                   (0 if v > 242 else int(255 * (242 - v) / 92.0)))
    return ImageChops.multiply(alpha, ramp)


def _feather(alpha, w, h):
    """Ramp the outermost band of the alpha channel to zero.

    A leftover backdrop or sticker plate always reaches the image border; the
    subject is centre-composed and never does. So fading the outer band cannot
    touch the dog, but it dissolves the hard rectangle edge that survives a
    partial or refused matte. On an already-clean cutout it is a no-op, because
    that alpha is zero out there anyway.
    """
    band = max(2, int(min(w, h) * 0.045))
    env = Image.new("L", (w, h), 0)
    env.paste(255, (band, band, w - band, h - band))
    env = env.filter(ImageFilter.GaussianBlur(radius=band * 0.55))
    return ImageChops.multiply(alpha, env)


def main():
    ap = argparse.ArgumentParser()
    # Read from the pristine download, write to the shipped folder. An earlier
    # version did both in place, so every run fed on its own output: the second
    # run saw an already-feathered image whose fully-transparent border had had
    # its RGB zeroed by the PNG encoder, could no longer find the backdrop
    # colour, and refused everything. Any tuning pass was unrepeatable.
    ap.add_argument("--src", default=os.path.join(HERE, "www", "assets-src"))
    ap.add_argument("--dir", default=os.path.join(HERE, "www", "assets"))
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()

    keys = art_map()
    src = a.src if os.path.isdir(a.src) and any(
        f.lower().endswith(".png") for f in os.listdir(a.src)) else a.dir
    files = sorted(f for f in os.listdir(src) if f.lower().endswith(".png"))
    if not files:
        sys.exit("no PNGs in " + src)
    os.makedirs(a.dir, exist_ok=True)

    before = after = 0
    done = skipped = refused = 0
    for f in files:
        sys.stderr.write("  ... %s\n" % (keys.get(f) or f[:14])); sys.stderr.flush()
        sp = os.path.join(src, f)
        p = os.path.join(a.dir, f)
        before += os.path.getsize(sp)
        key = keys.get(f)
        im = Image.open(sp)
        is_scene = key in SCENE_KEYS

        target = SCENE_MAX if is_scene else \
                 (PORTRAIT_MAX, PORTRAIT_MAX) if (key or "").startswith("dutch") or _is_portrait(key) else \
                 (ICON_MAX, ICON_MAX)

        already = im.size[0] <= target[0] and im.size[1] <= target[1]
        if src == a.dir and already and not a.force and (is_scene or im.mode == "RGBA"):
            after += os.path.getsize(p)
            skipped += 1
            continue

        if is_scene:
            out = im.convert("RGB")
            out.thumbnail(target, Image.LANCZOS)
            out.save(p, "PNG", optimize=True)
        else:
            # Knock out at full resolution, then downscale — the matte is much
            # cleaner derived from the original pixels than from a resized copy.
            cut, frac = knockout(im, allow_card=not _is_portrait(key))
            if cut is None:
                refused += 1
                # Keep the plate rather than damage the subject, but still feather
                # its edge so it stops reading as a hard rectangle on the card.
                out = im.convert("RGBA")
                out.putalpha(_feather(
                    _vignette(Image.new("L", im.size, 255), im.size[0], im.size[1]),
                    im.size[0], im.size[1]))
                out.thumbnail(target, Image.LANCZOS)
                out.save(p, "PNG", optimize=True)
                print("  ~ %-14s matte refused (%.0f%%), plate feathered" % (key or f[:14], frac * 100))
            else:
                cut.thumbnail(target, Image.LANCZOS)
                cut.save(p, "PNG", optimize=True)
                done += 1
        after += os.path.getsize(p)

    print("processed %d, skipped %d, kept-opaque %d" % (done, skipped, refused))
    print("%.1f MB -> %.1f MB (%.0f%% smaller)" %
          (before / 1e6, after / 1e6, 100 * (1 - after / float(before or 1))))


def _is_portrait(key):
    if not key:
        return False
    # Every breed portrait is referenced by BREEDS' img: field.
    src = open(GAME, encoding="utf-8").read()
    global _PORTRAITS
    try:
        _PORTRAITS
    except NameError:
        m = re.search(r"var BREEDS = \[(.*?)\n\];", src, re.S)
        _PORTRAITS = set(re.findall(r'img:"(\w+)"', m.group(1))) if m else set()
        _PORTRAITS |= {"dutch", "dutch_h", "dutch_a", "dutchFull"}
    return key in _PORTRAITS


if __name__ == "__main__":
    main()
