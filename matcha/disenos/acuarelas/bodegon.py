import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *
W, H = 1600, 1000
def render():
    cv = Canvas(W, H, seed=41, paper=PAPER)
    cv.paper_texture(.008)
    # luz de ventana: sombras de hojas en la pared
    # mesa
    # sombras de los objetos
    blob(cv, ell(cv, 900, 800, 330, 50), C["shadow"], layers=3, alpha=.1, softness=24, edge=0, gran=.05)
    # cuenco blanco (chawan)
    t = np.linspace(0, math.pi, 50)
    bowl = np.vstack([np.stack([780 - 250 * np.cos(t), 560 + 210 * np.sin(t)], 1)])
    blob(cv, bowl, hex_rgb("#e8ebe4"), layers=4, alpha=.16, gran=.15, edge=.7)
    blob(cv, bowl + [70, 0], C["shadow"], layers=2, alpha=.08, gran=.1, edge=.1)
    blob(cv, ell(cv, 780, 560, 250, 52), hex_rgb("#f3f5f0"), layers=2, alpha=.4, mode="over", gran=.05)
    blob(cv, ell(cv, 780, 566, 222, 40), C["matcha"], layers=6, alpha=.17, gran=.5)
    cv.spray(760, 562, 150, 22, C["foam"], count=5000, dot=1.6, alpha=.5)
    cv.outline(ell(cv, 780, 560, 250, 52, 90), hex_rgb("#d6dbd0"), width=3, alpha=.6)
    # chasen de pie
    cx = 1210
    cv.stroke(np.array([[cx, 470], [cx, 600]]), C["bamboo"], width=40, alpha=.85, taper=(1, 1, 1))
    cv.stroke(np.array([[cx - 8, 470], [cx - 8, 600]]), hex_rgb("#e8d6ad"), width=8, alpha=.5)
    for k in np.linspace(-1, 1, 23):
        cv.stroke(np.array([[cx + k * 14, 600], [cx + k * 70, 680], [cx + k * 78, 740], [cx + k * 40, 778]]), C["bamboo"], width=3.5, alpha=.65, taper=(1, 1, .7), wobble=.3)
    for k in np.linspace(-.6, .6, 9):
        cv.stroke(np.array([[cx + k * 10, 610], [cx + k * 40, 690], [cx, 740]]), C["bamboo_d"], width=2.5, alpha=.5, wobble=.3)
    blob(cv, ell(cv, cx, 782, 70, 12), C["shadow"], alpha=.15, softness=8, edge=0)
    # chashaku apoyado
    cv.stroke(np.array([[300, 820], [470, 760], [600, 735]]), C["bamboo"], width=20, alpha=.75, taper=(.6, 1, .9))
    blob(cv, ell(cv, 610, 733, 26, 12, 30, -10), C["matcha"], alpha=.3, gran=.7)
    # rama de olivo
    branch(cv, [[0, 700], [140, 640], [280, 620], [420, 630]], n=12, leaf=(110, 160), up=-.4)
    return cv.to_uint8()
