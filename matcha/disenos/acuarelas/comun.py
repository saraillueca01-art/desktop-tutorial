import math
import numpy as np
from paintkit import Canvas, hex_rgb

PAPER = "#ffffff"
C = {k: hex_rgb(v) for k, v in dict(
    matcha="#8fae4a", matcha_d="#5f7d2a", matcha_l="#b9cf7e", foam="#e3ebc8",
    shadow="#c9cfc6", olive="#6f8456", olive_l="#a3b38a", stem="#7a6a4f",
    bamboo="#cdb07a", bamboo_d="#9c7c48", wood="#b98a58", wood_d="#8a6236",
    stone="#a4a7a0", stone_d="#787c74", wall="#eceeea", floor="#e4e3dd", garden="#8fa56a",
).items()}

def blob(cv, pts, col, layers=4, alpha=.14, softness=3, edge=.55, gran=.3, depth=2, var=.06, mode="glaze"):
    cv.watercolor_blob(np.asarray(pts, np.float32), col, layers=layers, alpha=alpha, softness=softness, edge=edge,
                       granulation=gran, depth=depth, variance=var, mode=mode)

def ell(cv, cx, cy, rx, ry, n=60, angle=0):
    return cv.ellipse_points(cx, cy, rx, ry, n, angle=angle)

def branch(cv, stem, n=11, leaf=(120, 170), alpha=.2, up=-0.55):
    cv.stroke(np.asarray(stem, np.float32), C["stem"], width=6, alpha=.7, taper=(.4, 1, .3))
    xs, ys = np.asarray(stem)[:, 0], np.asarray(stem)[:, 1]
    knots = np.linspace(0, 1, len(stem))
    for i, u in enumerate(np.linspace(.06, .97, n)):
        x, y = np.interp(u, knots, xs), np.interp(u, knots, ys)
        side = 1 if i % 2 else -1
        a = up + side * cv.rng.uniform(.6, 1.0)
        L = cv.rng.uniform(*leaf)
        blob(cv, ell(cv, x + math.cos(a) * L * .5, y + math.sin(a) * L * .5, L * .55, L * .13, 30, math.degrees(a)),
             C["olive"] if i % 3 else C["olive_l"], alpha=alpha)
