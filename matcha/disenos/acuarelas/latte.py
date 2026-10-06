import math
import numpy as np
from paintkit import Canvas, hex_rgb

W, H = 1200, 1500
PAPER = "#fdfdfb"
MATCHA = hex_rgb("#8fae4a")
MATCHA_D = hex_rgb("#5f7d2a")
FOAM = hex_rgb("#dfe8c2")
SHADOW = hex_rgb("#c9d0c4")
OLIVE = hex_rgb("#6f8456")
OLIVE_L = hex_rgb("#a3b38a")
STEM = hex_rgb("#7a6a4f")

def render():
    cv = Canvas(W, H, seed=7, paper=PAPER)
    cv.paper_texture(0.008)
    # sombra suave del plato y la taza (luz de ventana desde arriba a la izquierda)
    cv.watercolor_blob(cv.ellipse_points(660, 700, 440, 420, 60), SHADOW, layers=3, alpha=0.06, softness=40, edge=0.0, granulation=0.05, depth=2, variance=0.08)
    # plato
    cv.watercolor_blob(cv.ellipse_points(600, 640, 430, 420, 80), hex_rgb("#eef0ea"), layers=4, alpha=0.10, softness=6, edge=0.5, depth=2, variance=0.05, granulation=0.1)
    cv.outline(cv.ellipse_points(600, 640, 430, 420, 120), hex_rgb("#d8ddd2"), width=3, alpha=0.6)
    # taza
    cv.watercolor_blob(cv.ellipse_points(600, 640, 300, 295, 80), hex_rgb("#e9ece5"), layers=4, alpha=0.12, softness=4, edge=0.6, depth=2, variance=0.04, granulation=0.1)
    # asa
    th = np.linspace(-1.1, 1.1, 30); cv.stroke(np.stack([900 + 70 * np.cos(th), 640 + 70 * np.sin(th)], 1), hex_rgb("#dfe3da"), width=30, alpha=0.45, taper=(0.9, 1, 0.9), wobble=0.5)
    # latte
    cv.watercolor_blob(cv.ellipse_points(600, 640, 250, 246, 80), MATCHA, layers=7, alpha=0.13, softness=3, granulation=0.45, edge=0.6, depth=2, variance=0.04)
    cv.watercolor_blob(cv.ellipse_points(560, 600, 150, 140, 60), FOAM, layers=3, alpha=0.10, softness=14, depth=2, variance=0.1)
    # corazón de espuma (reservado con capas claras y contorno blanco)
    t = np.linspace(0, 2 * math.pi, 90)
    hx = 16 * np.sin(t) ** 3
    hy = -(13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t))
    heart = np.stack([600 + hx * 8.5, 650 + hy * 8.5], 1)
    cv.flat_shape(heart, hex_rgb("#f7f9ee"), alpha=0.9, softness=6, mode="over", granulation=0.15)
    cv.stroke(np.array([[600, 530], [600, 740]]), hex_rgb("#f7f9ee"), width=6, alpha=0.8, mode="over")
    # borde oscuro del líquido
    cv.outline(cv.ellipse_points(600, 640, 250, 246, 120), MATCHA_D, width=3, alpha=0.35)
    # ramita de olivo
    stem = np.array([[130, 1400], [330, 1250], [520, 1150], [700, 1100]])
    cv.stroke(stem, STEM, width=7, alpha=0.7, taper=(0.4, 1, 0.3))
    rng = cv.rng
    for i, u in enumerate(np.linspace(0.06, 0.97, 11)):
        x = np.interp(u, [0, .33, .66, 1], stem[:, 0]); y = np.interp(u, [0, .33, .66, 1], stem[:, 1])
        side = 1 if i % 2 else -1
        ang = -0.55 + side * rng.uniform(0.6, 1.0)
        L = rng.uniform(120, 170)
        cx, cy = x + math.cos(ang) * L * 0.55, y + math.sin(ang) * L * 0.55
        leaf = cv.ellipse_points(cx, cy, L * 0.55, L * 0.13, 30, angle=math.degrees(ang))
        cv.watercolor_blob(leaf, OLIVE if i % 3 else OLIVE_L, layers=4, alpha=0.2, softness=2, edge=0.55, granulation=0.3, depth=2, variance=0.06)
    return cv.to_uint8()
