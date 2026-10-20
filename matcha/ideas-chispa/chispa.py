import sys
d = sys.argv[1]
w = open(d + '/web.html').read()

def before_section(cls, html):
    global w
    i = w.index(f'<section class="mm {cls}"')
    j = w.rfind('<div class="shopify-section', 0, i)
    w = w[:j] + html + '\n' + w[j:]

tape = lambda words, dark: f'''<div class="ch-tapewrap"><div class="ch-tape{' ch-tape--light' if not dark else ''}" aria-hidden="true">
  <div class="ch-tape__row" data-dir="-1">{words}</div>
  <div class="ch-tape__row ch-tape__row--line" data-dir="1">{words}</div>
</div></div>'''
moods = 'Focus ✦ Calma ✦ Energía ✦ Antojo ✦ Mood ✦ '
datos = 'Primera cosecha ✦ Molido en piedra ✦ Uji, Japón ✦ 0 % amargo ✦ '

# Cinta tras la portada
before_section('mm-lata', tape(moods, True))

# Manifiesto que se tiñe, tras la lata
before_section('mm-moods', '''<section class="ch-ink" aria-label="Lo que es Mood Matcha">
  <p class="ch-ink__eyebrow">Nuestra idea</p>
  <p class="ch-ink__p" data-ch-ink>Un <em>matcha</em> de primera cosecha para cada <em>mood</em> del día: el que te centra, el que te calma, el que te enciende y el que te mima.</p>
</section>''')

# Segunda cinta, clara, tras los moods
before_section('mm-prep', tape(datos, False))

# Bate y gana, tras la preparación
before_section('mm-cifras', '''<section class="ch-whisk" aria-labelledby="ch-whisk-t">
  <div class="ch-whisk__copy">
    <p class="ch-ink__eyebrow">Minijuego</p>
    <h2 id="ch-whisk-t">Bate y gana</h2>
    <p>Mueve el ratón o el dedo en zigzag sobre el cuenco, como con el chasen. Cuando salga la espuma, el descuento es tuyo.</p>
    <div class="ch-meter" aria-hidden="true"><i data-ch-meter></i></div>
  </div>
  <div class="ch-whisk__bowl">
    <canvas data-ch-whisk aria-label="Cuenco de matcha: arrastra en zigzag para batir"></canvas>
    <div class="ch-prize" data-ch-prize aria-live="polite">
      <b>BIENVENIDA10</b>
      <span>¡Espuma perfecta! 10 % en tu primera lata.</span>
      <button type="button" data-ch-again>Batir otra vez</button>
    </div>
  </div>
</section>''')

# Pegatinas en la galería de la lata
k = '<div class="mm-lata__stage mm-lata__stage--fotos">'
w = w.replace(k, k + '''
    <div class="ch-stickers" aria-hidden="true">
      <div class="ch-stk ch-stk--a"><svg viewBox="0 0 100 100"><defs><path id="chc1" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"/></defs><text font-size="9" letter-spacing="2" fill="#0f2414"><textPath href="#chc1">PRIMERA COSECHA · MOLIDO EN PIEDRA ·</textPath></text></svg><b>Uji<small>JAPÓN</small></b></div>
      <div class="ch-stk ch-stk--b"><svg viewBox="0 0 100 100"><defs><path id="chc2" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"/></defs><text font-size="9" letter-spacing="2" fill="#fff"><textPath href="#chc2">SIN AMARGOR · SOMBREADO 20 DÍAS ·</textPath></text></svg><b>0 %<small>AMARGO</small></b></div>
    </div>''', 1)

# Textos con chispa
w = w.replace('Añadir a la cesta', 'Lo quiero ya')

css = open(d + '/chispa.css').read()
js = open(d + '/chispa.js').read()
w = w.replace('</header>', '</header>\n<style>\n' + css + '\n</style>', 1)
w = w + '\n<div class="ch-toast" data-ch-toast role="status"></div>\n<script>\n' + js + '\n</script>\n'
open(d + '/web.html', 'w').write(w)
open(d + '/webtest.html', 'w').write('<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + w)
print('ok', len(w))
