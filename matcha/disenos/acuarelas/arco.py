import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *
W, H = 1200, 1500
def arch(cx, top, w, h, n=60):
    r = w / 2
    t = np.linspace(math.pi, 0, n)
    curve = np.stack([cx + np.cos(t) * r, top + r - np.sin(t) * r], 1)
    return np.vstack([[[cx - r, top + h]], curve, [[cx + r, top + h]]])
def render():
    cv = Canvas(W, H, seed=21, paper=PAPER)
    cv.paper_texture(.008)
    a = arch(600, 280, 520, 900)
    # 1) lo que se ve a través del arco: cielo, olivos y camino
    cv.wash(280, 900, hex_rgb("#eef3e6"), hex_rgb("#dfe8d2"), alpha=.6, x0=320, x1=880, mottling=.3, softness=20)
    # olivos al fondo: troncos y copas hechas de muchas manchas
    for tx, top, w in [(470, 640, 1.0), (720, 610, 1.15)]:
        cv.stroke(np.array([[tx, top + 230], [tx - 10, top + 140], [tx + 8, top + 60]]), hex_rgb("#8a7a60"), width=14 * w, alpha=.55, taper=(1, .8, .5))
        for k in range(22):
            ang, rad = cv.rng.uniform(0, 6.28), cv.rng.uniform(0, 1) ** .6
            x, y = tx + math.cos(ang) * rad * 170 * w, top + math.sin(ang) * rad * 90 * w
            col = C["olive"] if y > top + 20 else C["olive_l"]
            blob(cv, ell(cv, x, y, cv.rng.uniform(40, 75) * w, cv.rng.uniform(22, 40) * w, 30, cv.rng.uniform(-20, 20)), col,
                 layers=3, alpha=.12, gran=.5, edge=.35, var=.1, softness=4)
    blob(cv, [[330, 840], [870, 830], [870, 880], [330, 890]], C["garden"], layers=3, alpha=.14, gran=.5, var=.05)
    blob(cv, [[560, 860], [640, 860], [820, 1180], [380, 1180]], hex_rgb("#e9e8e2"), layers=3, alpha=.35, gran=.25, var=.02)
    # 2) la pared encalada tapa todo lo que queda fuera del arco
    outer = np.array([[-10, -10], [1210, -10], [1210, 1180], [870, 1180]], np.float32)
    keyhole = np.vstack([outer, a[::-1][:-1] if False else a[::-1], [[330, 1180], [-10, 1180]]])
    cv.flat_shape(keyhole, hex_rgb("#ffffff"), alpha=1, softness=1.2, granulation=0, edge=0, mode="over")
    cv.paper_texture(.012)
    # 3) suelo de piedra y alfombra de fibra
    cv.wash(1180, 1500, C["floor"], hex_rgb("#d9d8d1"), alpha=.8, mottling=.4)
    for x in range(0, 1300, 230):
        cv.stroke(np.array([[x, 1180], [x - 120, 1500]]), hex_rgb("#cfcdc5"), width=3, alpha=.4)
    blob(cv, [[470, 1240], [730, 1240], [760, 1480], [440, 1480]], hex_rgb("#d8c9a8"), layers=4, alpha=.16, gran=.7)
    # 4) marco y puerta de madera
    cv.outline(a, C["wood"], width=16, alpha=.8, closed=False)
    door = np.array([[868, 600], [960, 560], [960, 1215], [868, 1182]])
    blob(cv, door, C["wood"], layers=5, alpha=.17, gran=.55, edge=.45, var=.02)
    for x in (898, 930):
        cv.stroke(np.array([[x, 600], [x, 1195]]), C["wood_d"], width=2.5, alpha=.35, wobble=.4)
    blob(cv, [[960, 600], [1040, 640], [1040, 1230], [960, 1215]], C["shadow"], layers=2, alpha=.1, softness=12, edge=0, gran=.05)
    # 5) ramas de olivo y sus sombras en la pared
    return cv.to_uint8()
