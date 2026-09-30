/* ==========================================================================
   Mood Matcha · piezas comunes de las propuestas de diseño
   --------------------------------------------------------------------------
   FOTOS: pega aquí el enlace de cada foto (Shopify → Contenido → Archivos).
   Mientras esté vacío se muestra una escena animada provisional con su nombre.
   ========================================================================== */
window.MM_FOTOS = {
  fabrica: '',   // la fábrica / molinos de piedra
  chasen: '',    // matcha batiéndose con el chasen
  campo: '',     // campo de té a la sombra
  polvo: '',     // matcha en polvo, cuchara
  latte: '',     // matcha latte desde arriba
  lata: '',      // la lata de Mood Matcha
  casa: ''       // ambiente: casa blanca, madera, luz tranquila
};

window.MM = (() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const money = n => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(n);

  const PRODUCTO = { nombre: 'Mood Matcha Ceremonial', formato: '30 g', precio: 22.9, tazas: 15, envioGratis: 35 };

  const LABELS = {
    fabrica: 'Foto · fábrica de matcha', chasen: 'Foto · batiendo con chasen', campo: 'Foto · campo de té',
    polvo: 'Foto · matcha en polvo', latte: 'Foto · matcha latte', lata: 'Foto · la lata', casa: 'Foto · ambiente casa'
  };

  /* ---------- Estilos compartidos ---------- */
  const css = `
  .mm-media{position:relative;overflow:hidden;background:#2f4527}
  .mm-media>canvas,.mm-media>img,.mm-media>video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  .mm-chip{position:absolute;left:14px;bottom:14px;z-index:3;padding:5px 10px;border-radius:999px;background:rgba(255,255,255,.82);color:#1f3527;
    font:500 10px/1.2 system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);pointer-events:none}
  .mm-slides{position:relative;overflow:hidden}
  .mm-slide{position:absolute;inset:0;opacity:0;transition:opacity 1.6s cubic-bezier(.4,0,.2,1)}
  .mm-slide.is-on{opacity:1;z-index:1}
  .mm-slide>.mm-media{position:absolute;inset:0;transform:scale(1.14);transition:transform 7s linear}
  .mm-slide.is-on>.mm-media{transform:scale(1.02)}
  .mm-switch{position:fixed;left:50%;bottom:calc(14px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:200;display:flex;align-items:center;gap:4px;
    padding:6px;border-radius:999px;background:rgba(20,32,22,.86);color:#fff;font:500 12px/1 system-ui,sans-serif;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    box-shadow:0 12px 30px -10px rgba(0,0,0,.4)}
  .mm-switch a{display:grid;place-items:center;min-width:32px;height:32px;padding:0 10px;border-radius:999px;color:#fff;text-decoration:none;transition:background .3s}
  .mm-switch a:hover{background:rgba(255,255,255,.14)}
  .mm-switch a.on{background:#fff;color:#1f3527}
  .mm-switch span{padding:0 8px 0 10px;opacity:.7;white-space:nowrap}
  .mm-toast{position:fixed;left:50%;bottom:calc(70px + env(safe-area-inset-bottom,0px));z-index:201;transform:translate(-50%,20px);opacity:0;visibility:hidden;
    padding:12px 20px;border-radius:12px;background:#1f3527;color:#fff;font:400 14px/1.3 system-ui,sans-serif;transition:transform .6s cubic-bezier(.16,1,.3,1),opacity .4s,visibility 0s .6s;max-width:calc(100% - 32px);text-align:center}
  .mm-toast.show{transform:translate(-50%,0);opacity:1;visibility:visible;transition:transform .6s cubic-bezier(.16,1,.3,1),opacity .4s}
  [data-rv]{transition:transform 1.2s cubic-bezier(.16,1,.3,1),opacity 1.2s;transition-delay:var(--d,0s)}
  .mm-js [data-rv]:not(.in){transform:translateY(34px);opacity:.25}
  @media (prefers-reduced-motion:reduce){.mm-slide>.mm-media{transition:none}.mm-js [data-rv]:not(.in){transform:none;opacity:1}}
  `;
  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);
  document.documentElement.classList.add('mm-js');

  /* ---------- Escenas animadas provisionales (canvas) ---------- */
  const rnd = (a, b) => a + Math.random() * (b - a);
  const SCENES = {
    fabrica: {
      init(s) {
        s.dust = Array.from({ length: 220 }, () => ({ x: Math.random(), y: Math.random(), r: rnd(.4, 2), v: rnd(.0003, .0012), ph: rnd(0, 6) }));
        s.pipes = Array.from({ length: 7 }, (_, i) => ({ x: .06 + i * .145 + rnd(-.02, .02), w: rnd(.018, .05), top: rnd(-.1, .3) }));
      },
      draw(c, W, H, t, s) {
        const g = c.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, '#3c4a26'); g.addColorStop(.55, '#2a371c'); g.addColorStop(1, '#1b2512');
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        // tuberías y tolvas
        for (const p of s.pipes) {
          const x = p.x * W, w = p.w * W;
          const pg = c.createLinearGradient(x, 0, x + w, 0);
          pg.addColorStop(0, '#5a6b34'); pg.addColorStop(.4, '#7c8c4a'); pg.addColorStop(1, '#3e4b22');
          c.fillStyle = pg; c.fillRect(x, p.top * H, w, H);
        }
        c.fillStyle = '#4b5a2a';
        c.fillRect(0, H * .22, W, H * .03); c.fillRect(0, H * .58, W, H * .025);
        c.beginPath(); c.moveTo(W * .42, H * .18); c.lineTo(W * .62, H * .18); c.lineTo(W * .55, H * .42); c.lineTo(W * .49, H * .42); c.closePath();
        const hg = c.createLinearGradient(W * .42, 0, W * .62, 0); hg.addColorStop(0, '#6f7f40'); hg.addColorStop(1, '#4a5828');
        c.fillStyle = hg; c.fill();
        // haces de luz
        for (let i = 0; i < 3; i++) {
          const a = .06 + .04 * Math.sin(t * .0006 + i * 2);
          c.fillStyle = `rgba(236,244,196,${a})`;
          const x0 = W * (.25 + i * .25) + Math.sin(t * .0002 + i) * 20;
          c.beginPath(); c.moveTo(x0, 0); c.lineTo(x0 + W * .1, 0); c.lineTo(x0 + W * .32, H); c.lineTo(x0 + W * .12, H); c.closePath(); c.fill();
        }
        // polvo de matcha en suspensión
        for (const d of s.dust) {
          d.y += d.v; if (d.y > 1.02) { d.y = -.02; d.x = Math.random(); }
          const x = (d.x + Math.sin(t * .0008 + d.ph) * .01) * W;
          c.fillStyle = `rgba(200,222,130,${.35 + .3 * Math.sin(t * .002 + d.ph)})`;
          c.beginPath(); c.arc(x, d.y * H, d.r, 0, 7); c.fill();
        }
        const v = c.createRadialGradient(W / 2, H / 2, Math.min(W, H) * .3, W / 2, H / 2, Math.max(W, H) * .75);
        v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(8,14,6,.55)');
        c.fillStyle = v; c.fillRect(0, 0, W, H);
      }
    },
    chasen: {
      init(s) { s.p = Array.from({ length: 1400 }, () => ({ x: Math.random(), y: Math.random(), s: rnd(.4, 1.3), r: rnd(.4, 2.1), h: Math.random() })); },
      draw(c, W, H, t, s) {
        const cx = W * (.55 + Math.cos(t * .0005) * .08), cy = H * (.48 + Math.sin(t * .0007) * .08), R = Math.min(W, H) * .45;
        const g = c.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * .8);
        g.addColorStop(0, 'rgba(190,214,120,.2)'); g.addColorStop(.45, 'rgba(124,156,60,.2)'); g.addColorStop(1, 'rgba(58,86,30,.2)');
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        for (const p of s.p) {
          const x = p.x * W, y = p.y * H, dx = x - cx, dy = y - cy;
          const f = Math.exp(-(dx * dx + dy * dy) / (R * R) * 1.4), a = Math.atan2(dy, dx), sw = (.6 + f * 2.6) * p.s;
          p.x += (-Math.sin(a) * sw * f * 1.8 + Math.cos(p.y * 9 + t * .001) * .15) / W;
          p.y += (Math.cos(a) * sw * f * 1.8 + Math.sin(p.x * 9 - t * .001) * .15) / H;
          if (p.x < 0) p.x += 1; if (p.x > 1) p.x -= 1; if (p.y < 0) p.y += 1; if (p.y > 1) p.y -= 1;
          c.fillStyle = p.h > .55 ? 'rgba(240,248,206,.42)' : 'rgba(44,74,24,.3)';
          c.beginPath(); c.arc(x, y, p.r, 0, 7); c.fill();
        }
      },
      clear: false
    },
    campo: {
      draw(c, W, H, t) {
        const hz = H * .36;
        const sky = c.createLinearGradient(0, 0, 0, hz);
        sky.addColorStop(0, '#eef3e6'); sky.addColorStop(1, '#d4e0bf');
        c.fillStyle = sky; c.fillRect(0, 0, W, hz + 2);
        c.fillStyle = '#9fb484'; c.beginPath(); c.moveTo(0, hz);
        for (let x = 0; x <= W; x += 20) c.lineTo(x, hz - 18 - Math.sin(x * .01) * 14 - Math.sin(x * .031) * 6);
        c.lineTo(W, hz + 4); c.lineTo(0, hz + 4); c.fill();
        const rows = 16;
        for (let i = 0; i < rows; i++) {
          const k = i / (rows - 1), y = hz + Math.pow(k, 1.7) * (H - hz) * 1.05, th = 6 + k * 70;
          const col = [Math.round(lerp(150, 58, k)), Math.round(lerp(176, 104, k)), Math.round(lerp(110, 40, k))];
          c.fillStyle = `rgb(${col})`;
          c.beginPath(); c.moveTo(0, y + th);
          for (let x = 0; x <= W; x += 14) {
            const sway = Math.sin(x * (.02 - k * .012) + t * .0012 + i) * (1 + k * 4);
            c.lineTo(x, y - th * .5 + sway + Math.sin(x * .05 + i) * th * .12);
          }
          c.lineTo(W, y + th); c.closePath(); c.fill();
          c.fillStyle = `rgba(255,255,240,${.08 * (1 - k)})`; c.fillRect(0, y - th * .5, W, 2);
        }
        const haze = c.createLinearGradient(0, hz - 40, 0, hz + H * .2);
        haze.addColorStop(0, 'rgba(240,245,228,.5)'); haze.addColorStop(1, 'rgba(240,245,228,0)');
        c.fillStyle = haze; c.fillRect(0, hz - 40, W, H * .25);
      }
    },
    polvo: {
      init(s) { s.p = Array.from({ length: 500 }, () => ({ x: rnd(.44, .56), y: Math.random(), v: rnd(.001, .004), r: rnd(.5, 1.8) })); },
      draw(c, W, H, t, s) {
        c.fillStyle = '#eef2e6'; c.fillRect(0, 0, W, H);
        const base = H * .82, mw = W * .34, mh = H * .2;
        const mg = c.createLinearGradient(0, base - mh, 0, base);
        mg.addColorStop(0, '#9dbb4f'); mg.addColorStop(1, '#6f8f33');
        c.fillStyle = 'rgba(31,53,39,.12)'; c.beginPath(); c.ellipse(W / 2, base + 6, mw * .7, 10, 0, 0, 7); c.fill();
        c.fillStyle = mg; c.beginPath(); c.moveTo(W / 2 - mw / 2, base);
        c.bezierCurveTo(W / 2 - mw * .2, base - mh * 1.2, W / 2 + mw * .2, base - mh * 1.2, W / 2 + mw / 2, base); c.fill();
        for (const p of s.p) {
          p.y += p.v; if (p.y > .8) { p.y = 0; p.x = rnd(.46, .54); }
          c.fillStyle = 'rgba(124,154,61,.7)';
          c.beginPath(); c.arc((p.x + Math.sin(p.y * 12 + t * .002) * .006) * W, p.y * H, p.r, 0, 7); c.fill();
        }
        c.strokeStyle = 'rgba(31,53,39,.35)'; c.lineWidth = 3;
        c.beginPath(); c.moveTo(W * .5, H * .06); c.lineTo(W * .5, H * .12); c.stroke();
        c.beginPath(); c.ellipse(W * .5, H * .13, W * .12, H * .018, 0, 0, 7); c.stroke();
      }
    },
    latte: {
      draw(c, W, H, t) {
        c.fillStyle = '#dfe8d3'; c.fillRect(0, 0, W, H);
        const cx = W / 2, cy = H / 2, R = Math.min(W, H) * .36;
        c.fillStyle = 'rgba(31,53,39,.14)'; c.beginPath(); c.arc(cx + 10, cy + 16, R * 1.08, 0, 7); c.fill();
        c.fillStyle = '#ffffff'; c.beginPath(); c.arc(cx, cy, R * 1.08, 0, 7); c.fill();
        c.fillStyle = '#b8cb86'; c.beginPath(); c.arc(cx, cy, R * .9, 0, 7); c.fill();
        c.save(); c.translate(cx, cy); c.rotate(t * .00025);
        c.fillStyle = 'rgba(250,252,240,.92)';
        for (let i = 0; i < 5; i++) {
          const rr = R * (.62 - i * .1);
          c.beginPath(); c.ellipse(0, -R * .08 + i * R * .06, rr, rr * .5, 0, Math.PI, 0); c.ellipse(0, -R * .08 + i * R * .06 + 4, rr * .8, rr * .36, 0, 0, Math.PI, true); c.fill();
        }
        c.restore();
      }
    },
    casa: {
      draw(c, W, H, t) {
        // pared encalada con un arco abierto al jardín
        const wall = c.createLinearGradient(0, 0, W, H);
        wall.addColorStop(0, '#ffffff'); wall.addColorStop(1, '#eeeee9');
        c.fillStyle = wall; c.fillRect(0, 0, W, H);
        const aw = Math.min(W * .34, H * .42), ah = aw * 1.9, ax = W / 2 - aw / 2, ay = H * .86 - ah;
        const garden = c.createLinearGradient(0, ay, 0, ay + ah);
        garden.addColorStop(0, '#dfe8cf'); garden.addColorStop(.45, '#9fb37f'); garden.addColorStop(.62, '#e9e6de'); garden.addColorStop(1, '#f4f2ee');
        const arch = (x, y, w, h) => { c.beginPath(); c.moveTo(x, y + h); c.lineTo(x, y + w / 2); c.arc(x + w / 2, y + w / 2, w / 2, Math.PI, 0); c.lineTo(x + w, y + h); c.closePath(); };
        c.fillStyle = '#b98a58'; arch(ax - 8, ay - 8, aw + 16, ah + 8); c.fill();
        c.fillStyle = garden; arch(ax, ay, aw, ah); c.fill();
        c.fillStyle = 'rgba(122,146,82,.55)';
        for (let i = 0; i < 18; i++) { c.beginPath(); c.ellipse(ax + aw * (i % 6) / 5, ay + aw * .35 + Math.floor(i / 6) * 14 + Math.sin(t * .001 + i) * 3, 22, 12, i, 0, 7); c.fill(); }
        c.fillStyle = '#e7e1d6'; c.fillRect(0, H * .86, W, H * .14);
        c.fillStyle = 'rgba(80,70,50,.06)';
        for (let x = 0; x < W; x += 90) c.fillRect(x, H * .86, 1, H * .14);
        c.fillStyle = '#c9a877'; c.fillRect(W * .5 - aw * .4, H * .9, aw * .8, H * .06);
      }
    },
    lata: {
      draw(c, W, H, t) {
        const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#f1f5ec'); g.addColorStop(1, '#dde7d2');
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        const h = Math.min(H * .66, W * 1.1), w = h * .5, x = W / 2 - w / 2, y = H / 2 - h / 2 + Math.sin(t * .0012) * 6;
        c.fillStyle = 'rgba(31,53,39,.14)'; c.beginPath(); c.ellipse(W / 2, H / 2 + h / 2 + 14, w * .7, 10, 0, 0, 7); c.fill();
        c.fillStyle = '#fff'; c.fillRect(x, y + h * .1, w, h * .9);
        c.fillStyle = '#1f3527'; c.fillRect(x - 4, y, w + 8, h * .14);
        c.fillStyle = '#1f3527'; c.textAlign = 'center';
        c.font = `400 ${w * .26}px "Cormorant Garamond", Georgia, serif`; c.fillText('mood', W / 2, y + h * .5);
        c.fillStyle = '#7c9a3d'; c.font = `italic 300 ${w * .26}px "Cormorant Garamond", Georgia, serif`; c.fillText('matcha', W / 2, y + h * .64);
      }
    }
  };

  const live = new Set();
  function mountScene(el, kind) {
    const canvas = document.createElement('canvas');
    el.prepend(canvas);
    const scene = SCENES[kind] || SCENES.chasen;
    const st = { c: canvas.getContext('2d'), W: 0, H: 0, scene, s: {}, visible: false, el };
    scene.init?.(st.s);
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      st.W = el.clientWidth; st.H = el.clientHeight;
      canvas.width = Math.max(1, st.W * dpr); canvas.height = Math.max(1, st.H * dpr);
      st.c.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (scene.clear === false) { st.c.fillStyle = '#6f8f33'; st.c.fillRect(0, 0, st.W, st.H); }
    };
    new ResizeObserver(size).observe(el); size();
    new IntersectionObserver(([e]) => (st.visible = e.isIntersecting)).observe(el);
    scene.draw(st.c, st.W, st.H, 0, st.s);
    live.add(st);
  }
  (function loop(t) {
    requestAnimationFrame(loop);
    for (const st of live) {
      if (!st.visible || !st.W) continue;
      const slide = st.el.closest('.mm-slide');
      if (slide && !slide.classList.contains('is-on') && !slide.classList.contains('was-on')) continue;
      st.scene.draw(st.c, st.W, st.H, reduced ? 0 : t, st.s);
    }
  })(0);

  /** Rellena cada [data-media="clave"] con su foto o con la escena provisional */
  function media(root = document) {
    $$('[data-media]', root).forEach(el => {
      if (el.dataset.mmDone) return;
      el.dataset.mmDone = 1;
      el.classList.add('mm-media');
      const kind = el.dataset.media, src = window.MM_FOTOS[kind];
      if (src) {
        const img = new Image(); img.src = src; img.alt = el.dataset.alt || ''; img.loading = 'lazy'; img.decoding = 'async';
        el.prepend(img);
      } else {
        mountScene(el, kind);
        if (!('nolabel' in el.dataset)) el.insertAdjacentHTML('beforeend', `<span class="mm-chip">${LABELS[kind] || 'Foto'}</span>`);
      }
    });
  }

  /** Pase de diapositivas con fundido y zoom lento */
  function slides(root, { every = 5200, onChange } = {}) {
    const items = $$(':scope > .mm-slide', root);
    let i = 0, timer;
    const go = n => {
      items[i].classList.remove('is-on'); items[i].classList.add('was-on');
      const prev = items[i]; setTimeout(() => prev.classList.remove('was-on'), 1700);
      i = (n + items.length) % items.length;
      items[i].classList.add('is-on');
      onChange?.(i);
      restart();
    };
    const restart = () => { clearTimeout(timer); if (!reduced) timer = setTimeout(() => go(i + 1), every); };
    items[0]?.classList.add('is-on'); onChange?.(0); restart();
    return { go, get index() { return i; }, count: items.length };
  }

  /** Aparición suave al hacer scroll (visible siempre, solo se desplaza) */
  function reveal() {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    $$('[data-rv]').forEach(el => io.observe(el));
  }

  /** Contadores que suben al verse */
  function counters() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      const el = e.target, end = parseFloat(el.dataset.to), dec = (el.dataset.to.split('.')[1] || '').length, t0 = performance.now();
      const suf = el.dataset.suf || '';
      (function step(t) {
        const k = clamp((t - t0) / 1600, 0, 1), v = end * (1 - Math.pow(1 - k, 4));
        el.textContent = v.toFixed(dec).replace('.', ',') + suf;
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    }), { threshold: .5 });
    $$('[data-to]').forEach(el => io.observe(el));
  }

  /** Envío: "pide hoy y sale mañana" y fechas de entrega (24–72 h laborables) */
  function ship() {
    const work = d => d.getDay() % 6 !== 0;
    const add = (d, n) => { d = new Date(d); while (n > 0) { d.setDate(d.getDate() + 1); if (work(d)) n--; } return d; };
    const now = new Date(); let day = new Date(now);
    while (!work(day)) day.setDate(day.getDate() + 1);
    const sale = add(day, 1), de = add(sale, 1), a = add(sale, 3);
    const tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1);
    const saleTxt = sale.toDateString() === tomorrow.toDateString() ? 'mañana' : 'el ' + sale.toLocaleDateString('es-ES', { weekday: 'long' });
    const f = d => d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
    const end = new Date(now); end.setHours(24, 0, 0, 0);
    const ms = end - now, h = Math.floor(ms / 3.6e6), m = Math.floor(ms % 3.6e6 / 6e4);
    $$('[data-ship="sale"]').forEach(el => (el.textContent = saleTxt));
    $$('[data-ship="rango"]').forEach(el => (el.textContent = `${f(de)} – ${f(a)}`));
    $$('[data-ship="cuenta"]').forEach(el => (el.textContent = work(now) ? `${h} h ${String(m).padStart(2, '0')} min` : ''));
  }

  /** Cesta de demostración: contador, barra de envío gratis y aviso */
  let total = 0;
  function cart() {
    const upd = () => {
      $$('[data-count]').forEach(el => (el.textContent = Math.round(total / PRODUCTO.precio)));
      const left = PRODUCTO.envioGratis - total, pct = clamp(total / PRODUCTO.envioGratis, 0, 1) * 100;
      $$('[data-freebar]').forEach(el => el.style.setProperty('--p', pct + '%'));
      $$('[data-freetxt]').forEach(el => (el.innerHTML = total === 0 ? `Envío <b>gratis</b> a partir de ${money(PRODUCTO.envioGratis)}` : left > 0 ? `Te faltan <b>${money(left)}</b> para el envío gratis` : '¡Tu envío es <b>gratis</b>!'));
    };
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-add]'); if (!b) return;
      total += PRODUCTO.precio; upd();
      toast('Añadido a la cesta · ' + (total >= PRODUCTO.envioGratis ? 'envío gratis' : 'te faltan ' + money(PRODUCTO.envioGratis - total) + ' para el envío gratis'));
    });
    $$('[data-price]').forEach(el => (el.textContent = money(PRODUCTO.precio)));
    upd();
  }
  let toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'mm-toast'; toastEl.setAttribute('role', 'status'); document.body.append(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 3000);
  }

  /** Menú flotante: se oculta al bajar y cambia de color sobre secciones oscuras */
  function nav(sel = '.nav') {
    const n = $(sel); if (!n) return;
    const darks = $$('[data-dark]');
    let last = scrollY;
    const tick = () => {
      const y = scrollY, dy = y - last; last = y;
      if (y > 200 && dy > 3) n.classList.add('is-hidden'); else if (dy < -3 || y < 200) n.classList.remove('is-hidden');
      const mid = n.getBoundingClientRect().top + n.offsetHeight / 2;
      n.classList.toggle('is-dark', darks.some(s => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom >= mid; }));
      n.classList.toggle('is-scrolled', y > 30);
    };
    addEventListener('scroll', tick, { passive: true }); tick();
  }

  /** Progreso 0→1 de un elemento al atravesar la pantalla */
  const progress = el => { const r = el.getBoundingClientRect(); return clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1); };
  /** Progreso 0→1 de una sección fijada (sticky) */
  const pinned = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / Math.max(1, el.offsetHeight - innerHeight), 0, 1); };
  function onScroll(fn) {
    let queued = false;
    const run = () => { queued = false; fn(scrollY); };
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(run); } }, { passive: true });
    addEventListener('resize', run); run();
  }

  /** Carrusel arrastrable con flechas */
  function carousel(track, prev, next) {
    const step = () => (track.firstElementChild?.offsetWidth || 300) + parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 16);
    prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }));
    let d = null;
    track.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') d = { x: e.clientX, l: track.scrollLeft }; });
    addEventListener('pointermove', e => { if (d) { track.scrollLeft = d.l - (e.clientX - d.x); track.style.scrollSnapType = 'none'; } });
    addEventListener('pointerup', () => { if (!d) return; d = null; track.style.scrollSnapType = ''; });
    const upd = () => { if (prev) prev.disabled = track.scrollLeft < 4; if (next) next.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 4; };
    track.addEventListener('scroll', upd, { passive: true }); upd();
  }

  /** Selector flotante para saltar entre propuestas */
  function switcher(n) {
    const bar = document.createElement('nav');
    bar.className = 'mm-switch'; bar.setAttribute('aria-label', 'Propuestas de diseño');
    bar.innerHTML = `<a href="index.html" aria-label="Ver todas las propuestas">☰</a><span>Diseño</span>` +
      [1, 2, 3, 4, 5].map(i => `<a href="d${i}.html" class="${i === n ? 'on' : ''}" aria-label="Diseño ${i}">${i}</a>`).join('');
    document.body.append(bar);
  }

  /** Lata en SVG (sustituible por la foto real).
      deco: 'lineas' | 'rama' (ramita de olivo) | 'lino' (rayas) | 'enso' (círculo) · lid: color o 'madera' */
  let tinN = 0;
  function tin({ lid = '#1f3527', body = '#ffffff', ink = '#1f3527', accent = '#7c9a3d', deco = 'lineas', label = 'CEREMONIAL · 30 G', font = 'Cormorant Garamond, Georgia, serif' } = {}) {
    const id = 't' + (++tinN);
    const lidFill = lid === 'madera' ? `url(#${id}w)` : lid;
    const decos = {
      lineas: `<line x1="62" y1="112" x2="138" y2="112" stroke="${accent}" stroke-width=".8"/><line x1="62" y1="204" x2="138" y2="204" stroke="${accent}" stroke-width=".8"/>`,
      rama: `<g fill="none" stroke="${accent}" stroke-width="1.1" stroke-linecap="round"><path d="M70 110 C 90 96, 112 92, 134 98"/></g>
        <g fill="${accent}">${[[78, 104, -30], [90, 98, 25], [100, 96, -25], [112, 94, 30], [122, 95, -20], [131, 97, 35]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="2.6" transform="rotate(${r} ${x} ${y})"/>`).join('')}</g>`,
      lino: `<g fill="${accent}">${[0, 1, 2, 3, 4].map(i => `<rect x="36" y="${214 + i * 7}" width="128" height="${i % 2 ? 1.2 : 3.2}"/>`).join('')}</g>`,
      enso: `<path d="M128 128 C 118 104, 82 104, 72 128 C 62 156, 86 182, 110 178 C 136 172, 142 146, 132 132" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" opacity=".28"/>`
    };
    return `<svg viewBox="0 0 200 300" role="img" aria-label="Lata de Mood Matcha">
      <defs>
        <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".08"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".14"/></linearGradient>
        <linearGradient id="${id}w" x1="0" x2="1"><stop offset="0" stop-color="#a97b4a"/><stop offset=".45" stop-color="#cfa06a"/><stop offset="1" stop-color="#9a6d3f"/></linearGradient>
      </defs>
      <ellipse cx="100" cy="292" rx="64" ry="7" fill="#000" opacity=".1"/>
      <rect x="36" y="34" width="128" height="254" rx="6" fill="${body}"/>
      ${decos[deco] || ''}
      <rect x="36" y="34" width="128" height="254" rx="6" fill="url(#${id}s)"/>
      <rect x="30" y="12" width="140" height="38" rx="5" fill="${lidFill}"/>
      ${lid === 'madera' ? '<g stroke="#8a5f35" stroke-width=".5" opacity=".5"><path d="M34 22 C 80 18, 120 26, 166 20"/><path d="M34 34 C 70 30, 130 38, 166 32"/><path d="M34 42 C 90 40, 110 46, 166 42"/></g>' : ''}
      <text x="100" y="152" text-anchor="middle" font-family="${font}" font-size="32" fill="${ink}">mood</text>
      <text x="100" y="184" text-anchor="middle" font-family="${font}" font-style="italic" font-weight="300" font-size="32" fill="${accent}">matcha</text>
      <text x="100" y="${deco === 'lino' ? 200 : 250}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="6.5" letter-spacing="2.4" fill="${ink}">${label}</text>
    </svg>`;
  }

  /** Sombras de ramas de olivo que se mecen (como luz entrando por una ventana) */
  function shadows(el, { opacity = .22, color = '58,70,40', blur = 7, branches = 4, blend = 'multiply' } = {}) {
    const cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    Object.assign(cv.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', mixBlendMode: blend, filter: `blur(${blur}px)`, opacity, zIndex: 1 });
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.append(cv);
    const c = cv.getContext('2d');
    let W = 0, H = 0, vis = false;
    const B = Array.from({ length: branches }, (_, i) => ({
      x: (i + .5) / branches + rnd(-.1, .1), y: rnd(-.15, .1), len: rnd(.5, .9), ang: rnd(.6, 1.3) * (i % 2 ? 1 : -1) + Math.PI / 2, ph: rnd(0, 6),
      leaves: Array.from({ length: 16 }, () => ({ at: Math.random(), side: Math.random() < .5 ? -1 : 1, s: rnd(.7, 1.3), a: rnd(.3, .9) }))
    }));
    const size = () => { W = el.clientWidth; H = el.clientHeight; cv.width = Math.max(1, W * .5); cv.height = Math.max(1, H * .5); c.setTransform(.5, 0, 0, .5, 0, 0); };
    new ResizeObserver(size).observe(el); size();
    new IntersectionObserver(([e]) => (vis = e.isIntersecting)).observe(el);
    (function loop(t) {
      requestAnimationFrame(loop);
      if (!vis || !W) return;
      c.clearRect(0, 0, W, H);
      c.fillStyle = c.strokeStyle = `rgb(${color})`;
      const L = Math.max(W, H);
      for (const b of B) {
        const sway = reduced ? 0 : Math.sin(t * .00045 + b.ph) * .05 + Math.sin(t * .0013 + b.ph) * .012;
        const a = b.ang + sway, x0 = b.x * W, y0 = b.y * H, x1 = x0 + Math.cos(a) * b.len * L * .5, y1 = y0 + Math.sin(a) * b.len * L * .5;
        c.lineWidth = 3; c.beginPath(); c.moveTo(x0, y0); c.quadraticCurveTo((x0 + x1) / 2 + 30, (y0 + y1) / 2, x1, y1); c.stroke();
        for (const l of b.leaves) {
          const lx = lerp(x0, x1, l.at), ly = lerp(y0, y1, l.at), la = a + l.side * l.a + (reduced ? 0 : Math.sin(t * .002 + l.at * 9) * .08);
          c.save(); c.translate(lx, ly); c.rotate(la);
          c.beginPath(); c.ellipse(24 * l.s, 0, 26 * l.s, 6 * l.s, 0, 0, 7); c.fill();
          c.restore();
        }
      }
    })(0);
  }

  function start(n) {
    media(); reveal(); counters(); ship(); cart(); switcher(n);
    setInterval(ship, 30000);
  }

  return { $, $$, clamp, lerp, money, reduced, PRODUCTO, media, slides, reveal, counters, ship, cart, toast, nav, progress, pinned, onScroll, carousel, switcher, tin, shadows, start };
})();
