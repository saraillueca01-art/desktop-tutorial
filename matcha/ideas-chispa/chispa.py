import sys
d = sys.argv[1]
w = open(d + '/web.html').read()

def section_bounds(cls):
    i = w.index(f'<section class="mm {cls}"')
    j = w.rfind('<div class="shopify-section', 0, i)
    k = w.find('<div class="shopify-section', i)
    return j, k

def before_section(cls, html):
    global w
    j, _ = section_bounds(cls)
    w = w[:j] + html + '\n' + w[j:]

def replace_section(cls, html):
    global w
    j, k = section_bounds(cls)
    w = w[:j] + html + '\n' + w[k:]

tape = lambda words, mod: f'''<div class="ch-tape ch-tape--{mod}" aria-hidden="true"><div class="ch-tape__row" data-dir="{'-1' if mod == 'deep' else '1'}">{words}</div></div>'''

# Cinta elegante tras la portada
before_section('mm-lata', tape('Focus · Calma · Energía · Antojo · Mood', 'deep'))

# Juego «Elige tu mood», justo debajo de la portada
before_section('mm-lata', '''<section class="ch-game" aria-labelledby="ch-game-t" data-ch-game>
  <div class="ch-game__head">
    <p class="ch-eyebrow">Juega y gana</p>
    <h2 id="ch-game-t">Elige tu <em>mood</em></h2>
    <p>Cada mood esconde un premio distinto. Elige el tuyo.</p>
  </div>
  <div class="ch-game__cards">
      <button type="button" class="ch-card ch-card--focus" data-mood="focus" data-prize="10 %" data-sub="en tu primera lata" aria-label="Elegir Focus">
        <span class="ch-card__in">
          <span class="ch-card__face"><em>Focus</em><small>Toca para descubrir</small></span>
          <span class="ch-card__back"><small>Focus</small><b>10 %</b><span>en tu primera lata</span></span>
        </span>
      </button>
      <button type="button" class="ch-card ch-card--calma" data-mood="calma" data-prize="Envío gratis" data-sub="en tu primer pedido" aria-label="Elegir Calma">
        <span class="ch-card__in">
          <span class="ch-card__face"><em>Calma</em><small>Toca para descubrir</small></span>
          <span class="ch-card__back"><small>Calma</small><b>Envío gratis</b><span>en tu primer pedido</span></span>
        </span>
      </button>
      <button type="button" class="ch-card ch-card--energia" data-mood="energia" data-prize="15 %" data-sub="en el pack de 2 latas" aria-label="Elegir Energía">
        <span class="ch-card__in">
          <span class="ch-card__face"><em>Energía</em><small>Toca para descubrir</small></span>
          <span class="ch-card__back"><small>Energía</small><b>15 %</b><span>en el pack de 2 latas</span></span>
        </span>
      </button>
      <button type="button" class="ch-card ch-card--antojo" data-mood="antojo" data-prize="12 %" data-sub="en tu primera lata" aria-label="Elegir Antojo">
        <span class="ch-card__in">
          <span class="ch-card__face"><em>Antojo</em><small>Toca para descubrir</small></span>
          <span class="ch-card__back"><small>Antojo</small><b>12 %</b><span>en tu primera lata</span></span>
        </span>
      </button>
  </div>
  <div class="ch-game__win" data-ch-gwin hidden>
    <p class="ch-game__prize"><span data-ch-gmood></span>: <b data-ch-gprize></b> <span data-ch-gsub></span></p>
    <form class="ch-game__form" data-ch-gform>
      <input type="hidden" name="contact[tags]" value="newsletter, juego-mood" data-ch-gtags>
      <label for="ch-game-email" class="ch-vh">Tu email</label>
      <input id="ch-game-email" type="email" name="contact[email]" placeholder="Tu email" autocomplete="email" required>
      <button type="submit">Enviarme el código</button>
    </form>
    <p class="ch-game__legal">Te llega el código al email y te suscribes a la newsletter. Puedes darte de baja cuando quieras.</p>
  </div>
  <p class="ch-game__done" data-ch-gdone hidden>Listo. Revisa tu email: tu código va de camino.</p>
</section>''')

# Manifiesto que se tiñe, tras la lata, sobre banda oscura
before_section('mm-moods', '''<section class="ch-ink" aria-label="Nuestra idea">
  <p class="ch-eyebrow">Nuestra idea</p>
  <p class="ch-ink__p" data-ch-ink>Un <em>matcha</em> de primera cosecha para cada <em>mood</em> del día: el que te centra, el que te calma, el que te enciende y el que te mima.</p>
</section>''')

# Caja de mood que cambia de color (solo ella), antes de «¿Cómo te sientes hoy?»
before_section('mm-moods', '''<section class="ch-moodbox-wrap" aria-label="Elige tu mood">
  <div class="ch-moodbox" data-ch-moodbox>
    <span class="ch-blob"></span><span class="ch-blob"></span>
    <p class="ch-moodbox__big">Hoy estoy en modo <span data-ch-word>focus</span></p>
    <div class="ch-moodbox__chips" role="group" aria-label="Elige tu mood">
      <button type="button" aria-pressed="true" data-ch-mood="focus">Focus</button>
      <button type="button" aria-pressed="false" data-ch-mood="calma">Calma</button>
      <button type="button" aria-pressed="false" data-ch-mood="energia">Energía</button>
      <button type="button" aria-pressed="false" data-ch-mood="antojo">Antojo</button>
    </div>
    <p class="ch-moodbox__line" data-ch-line>Para concentrarte: solo con agua, 2 g y 70 ml a 80 °C.</p>
  </div>
</section>''')

# Fuera «¿Cómo te sientes hoy?»: la caja de mood la sustituye
replace_section('mm-moods', '')

# Segunda cinta, clara, tras los moods
before_section('mm-prep', tape('Primera cosecha · Molido en piedra · Uji, Japón · Sin amargor', 'soft'))

# Sellos que giran en lugar de «Cifras clave»
n = [0]
def seal(ring, big, small, mod, rot):
    n[0] += 1
    return f'''<div class="ch-seal ch-seal--{mod}" style="--r: {rot}deg">
      <svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="chs{n[0]}" d="M50,50 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0"/></defs><text><textPath href="#chs{n[0]}">{ring}</textPath></text></svg>
      <b>{big}<small>{small}</small></b>
    </div>'''
replace_section('mm-cifras', f'''<section class="ch-seals" aria-labelledby="ch-seals-t">
  <div class="ch-seals__head">
    <p class="ch-eyebrow">Lo que hay en la lata</p>
    <h2 id="ch-seals-t">Lo que hay detrás de <em>cada taza</em></h2>
  </div>
  <div class="ch-seals__row">
    {seal('HOJAS NUEVAS DE PRIMAVERA · MOLIDO EN PIEDRA · ', '1ª', 'COSECHA', 'deep', -6)}
    {seal('SIN NADA DE AMARGOR · CULTIVADO A LA SOMBRA · ', '20', 'DÍAS A LA SOMBRA', 'line', 4)}
    {seal('VERDE VIVO · TEXTURA CREMOSA · FINAL DULCE · ', 'Verde', 'INTENSO', 'accent', -3)}
    {seal('AGUA CALIENTE · NUNCA HIRVIENDO · 70 ML · ', '80 °C', 'EL AGUA', 'line', 7)}
    {seal('DE NUESTRA CASA A LA TUYA · ENVÍO RÁPIDO · ', '24–72 h', 'A TU CASA', 'deep', -4)}
  </div>
</section>''')

# Textos con chispa
w = w.replace('Añadir a la cesta', 'Lo quiero ya')

css = open(d + '/chispa.css').read()
js = open(d + '/chispa.js').read()
fonts = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400&display=swap" rel="stylesheet">'
w = w.replace('</header>', '</header>\n' + fonts + '\n<style>\n' + css + '\n</style>', 1)
w = w + '\n<div class="ch-toast" data-ch-toast role="status"></div>\n<script>\n' + js + '\n</script>\n'
open(d + '/web.html', 'w').write(w)
open(d + '/webtest.html', 'w').write('<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + w)
print('ok', len(w))
