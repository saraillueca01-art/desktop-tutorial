import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import *
W, H = 1200, 1500
def render():
    cv = Canvas(W, H, seed=11, paper=PAPER)
    cv.paper_texture(.008)
    # sombra del montón
    blob(cv, ell(cv, 640, 1080, 420, 70), C["shadow"], layers=3, alpha=.08, softness=30, edge=0, gran=.05)
    # montón de matcha
    xs = np.linspace(-1, 1, 60)
    mound = np.stack([600 + xs * 380, 1060 - (1 - xs ** 2) ** 1.4 * 330], 1)
    mound = np.vstack([mound, [[980, 1075], [220, 1075]]])
    blob(cv, mound, C["matcha"], layers=7, alpha=.15, gran=.75, edge=.5)
    blob(cv, mound * [1, 1] + [-30, 30], C["matcha_d"], layers=3, alpha=.08, gran=.8, edge=.3)
    cv.spray(560, 820, 200, 120, C["matcha_l"], count=9000, dot=1.6, alpha=.45)
    # polvo cayendo de la cucharilla
    cv.spray(700, 620, 40, 190, C["matcha"], count=5000, dot=1.4, alpha=.5, falloff=2.2)
    cv.spray(600, 1080, 520, 50, C["matcha"], count=4000, dot=1.3, alpha=.35)
    # cucharilla de bambú (chashaku)
    spoon = np.array([[1150, 260], [960, 360], [800, 440], [710, 470]])
    cv.stroke(spoon, C["bamboo"], width=34, alpha=.75, taper=(.7, 1, .9))
    cv.stroke(spoon + [0, 8], C["bamboo_d"], width=10, alpha=.35, taper=(.5, 1, .8))
    blob(cv, ell(cv, 700, 470, 52, 26, 40, -20), C["bamboo"], alpha=.3)
    blob(cv, ell(cv, 698, 462, 40, 16, 40, -20), C["matcha"], alpha=.3, gran=.7)
    cv.stroke(np.array([[905, 375], [912, 395]]), C["bamboo_d"], width=6, alpha=.5)
    # hoja de olivo suelta
    branch(cv, [[150, 1350], [280, 1290], [400, 1260]], n=5, leaf=(110, 150), up=-0.4)
    return cv.to_uint8()
