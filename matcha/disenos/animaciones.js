/* ==========================================================================
   Mood Matcha · animaciones de portada hechas con matcha
   pincel · batido · polvo · enso · marea
   Todas dibujan en canvas, respetan "reducir movimiento" y se pausan fuera de pantalla.
   ========================================================================== */
window.MMA = (() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  /** Chasen (batidor de bambú) de perfil. La punta de las varillas queda en (60, 292) */
  const CHASEN = `<svg viewBox="0 0 120 300" aria-hidden="true">
    <defs>
      <linearGradient id="mmBamboo" x1="0" x2="1"><stop offset="0" stop-color="#b08a55"/><stop offset=".45" stop-color="#e2c794"/><stop offset="1" stop-color="#a47e4a"/></linearGradient>
      <linearGradient id="mmTine" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e8d4a6"/><stop offset="1" stop-color="#cfb27a"/></linearGradient>
    </defs>
    <rect x="50" y="4" width="20" height="150" rx="8" fill="url(#mmBamboo)"/>
    <path d="M50 60 h20" stroke="#8f6a3a" stroke-width="2" opacity=".6"/>
    <g fill="none" stroke="url(#mmTine)" stroke-width="2.2" stroke-linecap="round">
      ${Array.from({ length: 17 }, (_, i) => { const x = 14 + i * 5.75; return `<path d="M60 150 C ${60 + (x - 60) * .3} 190, ${x} 230, ${x} 286"/>`; }).join('')}
    </g>
    <g fill="none" stroke="#b9975f" stroke-width="1.6" stroke-linecap="round" opacity=".9">
      ${Array.from({ length: 8 }, (_, i) => { const x = 40 + i * 5.7; return `<path d="M60 162 C ${x} 200, ${x} 230, ${60 + (x - 60) * .3} 250 Q 60 262 ${60 - (x - 60) * .2} 248"/>`; }).join('')}
    </g>
    <ellipse cx="60" cy="286" rx="47" ry="8" fill="none" stroke="#d8bf8c" stroke-width="2"/>
  </svg>`;

  /** Chashaku (cucharilla de bambú). La punta queda en (8, 20) */
  const CHASHAKU = `<svg viewBox="0 0 300 60" aria-hidden="true">
    <defs><linearGradient id="mmSpoon" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e0c592"/><stop offset="1" stop-color="#a9824e"/></linearGradient></defs>
    <path d="M8 22 C 20 8, 44 10, 60 20 L 290 30 C 296 31, 296 37, 290 38 L 58 34 C 40 40, 16 38, 8 22 Z" fill="url(#mmSpoon)"/>
    <path d="M150 26 L 150 36" stroke="#8f6a3a" stroke-width="3" opacity=".55"/>
    <ellipse cx="30" cy="24" rx="18" ry="6" fill="#7c9a3d"/>
  </svg>`;

  /** Canvas que cubre el contenedor, con escala de retina y visibilidad */
  function stage(host) {
    const cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    Object.assign(cv.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
    host.prepend(cv);
    const st = { cv, c: cv.getContext('2d'), W: 0, H: 0, dpr: 1, visible: true, onResize: null };
    const size = () => {
      st.dpr = Math.min(devicePixelRatio || 1, 1.75);
      st.W = host.clientWidth; st.H = host.clientHeight;
      cv.width = Math.max(1, Math.round(st.W * st.dpr)); cv.height = Math.max(1, Math.round(st.H * st.dpr));
      st.c.setTransform(st.dpr, 0, 0, st.dpr, 0, 0);
      st.onResize?.();
    };
    new ResizeObserver(size).observe(host); size();
    new IntersectionObserver(([e]) => (st.visible = e.isIntersecting)).observe(host);
    return st;
  }
  function tool(host, svg, width) {
    const el = document.createElement('div');
    el.innerHTML = svg;
    Object.assign(el.style, { position: 'absolute', left: '0', top: '0', width: width + 'px', pointerEvents: 'none', zIndex: 3, willChange: 'transform', transformOrigin: '0 0', filter: 'drop-shadow(0 18px 18px rgba(30,40,20,.25))' });
    host.append(el);
    return el;
  }

  /* ---------------------------------------------------------------------
     1 · PINCEL: el chasen cruza en zigzag y pinta de verde una franja
     --------------------------------------------------------------------- */
  function pincel(host, { band = [.1, .62], rows = 3, dur = 4200, reveal = '', poster = '', onDone } = {}) {
    const st = stage(host), c0 = st.c;
    // con "reveal", la pintura hace de máscara y deja ver un vídeo debajo
    let c = c0, mask = null, video = null;
    if (reveal) {
      mask = document.createElement('canvas'); c = mask.getContext('2d');
      video = document.createElement('video');
      Object.assign(video, { muted: true, loop: true, playsInline: true, preload: 'auto' });
      (/\.mp4(\?|#|$)/i.test(reveal) ? [[reveal.replace(/\.mp4/i, '.webm'), 'video/webm'], [reveal, 'video/mp4']] : [[reveal, '']])
        .forEach(([u, type]) => { const so = document.createElement('source'); so.src = u; if (type) so.type = type; video.append(so); });
      if (poster) { video.poster = poster; }
      video.setAttribute('muted', ''); video.setAttribute('playsinline', '');
      Object.assign(video.style, { position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' });
      host.append(video);
      new IntersectionObserver(([e]) => (e.isIntersecting && !reduced ? video.play().catch(() => {}) : video.pause())).observe(host);
      video.lastElementChild.addEventListener('error', () => { video = null; }, { once: true });
    }
    const sizeMask = () => { if (!mask) return; mask.width = st.cv.width; mask.height = st.cv.height; c.setTransform(st.dpr, 0, 0, st.dpr, 0, 0); };
    sizeMask();
    const composite = () => {
      if (!mask) return;
      const W = st.W, H = st.H;
      c0.globalCompositeOperation = 'source-over';
      c0.clearRect(0, 0, W, H);
      if (video && video.readyState >= 2) {
        const vw = video.videoWidth, vh = video.videoHeight, k = Math.max(W / vw, H / vh);
        c0.drawImage(video, (W - vw * k) / 2, (H - vh * k) / 2, vw * k, vh * k);
        c0.fillStyle = 'rgba(40,58,18,.32)'; c0.fillRect(0, 0, W, H);
        c0.globalCompositeOperation = 'destination-in';
        c0.drawImage(mask, 0, 0, W, H);
        c0.globalCompositeOperation = 'source-over';
        c0.globalAlpha = .22; c0.drawImage(mask, 0, 0, W, H); c0.globalAlpha = 1;
      } else c0.drawImage(mask, 0, 0, W, H);
    };
    const W = () => st.W, H = () => st.H;
    const cw = clamp(innerWidth * .07, 56, 96);
    const ch = tool(host, CHASEN, cw), tipX = cw * .5, tipY = cw * 292 / 120;
    const path = s => {
      const r = Math.min(rows - 1, Math.floor(s * rows)), u = s * rows - r;
      const top = band[0] * H(), bot = band[1] * H(), rh = (bot - top) / rows;
      const x = (r % 2 ? lerp(1.08, -.08, u) : lerp(-.08, 1.08, u)) * W();
      const outer = r === 0 || r === rows - 1;
      const y = top + rh * (r + .5) + Math.sin(u * Math.PI * 9) * rh * (outer ? .07 : .42) + Math.sin(u * 4.3 + r * 2) * rh * (outer ? .16 : .05) + Math.sin(u * 31 + r) * rh * .03;
      return { x, y, rh };
    };
    let done = false, s = 0, last = null;
    function stamp(p, q, rad) {
      const ang = Math.atan2(q.y - p.y, q.x - p.x), nx = -Math.sin(ang), ny = Math.cos(ang);
      c.lineCap = 'round';
      c.strokeStyle = 'rgba(122,152,60,.55)'; c.lineWidth = rad * 2;
      c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(q.x, q.y); c.stroke();
      // cerdas: estrías más oscuras y más claras
      for (let k = 0; k < 14; k++) {
        const o = rnd(-1.18, 1.18) * rad;
        c.strokeStyle = Math.random() < .5 ? 'rgba(84,112,36,.22)' : 'rgba(170,196,104,.22)';
        c.lineWidth = rnd(1, 3.5);
        c.beginPath(); c.moveTo(p.x + nx * o, p.y + ny * o); c.lineTo(q.x + nx * o, q.y + ny * o); c.stroke();
      }
      // espuma
      if (Math.random() < .5) {
        c.fillStyle = 'rgba(236,244,204,.5)';
        c.beginPath(); c.arc(q.x + rnd(-rad, rad), q.y + rnd(-rad, rad) * .8, rnd(.6, 2.4), 0, 7); c.fill();
      }
    }
    function drawTo(target) {
      while (s < target) {
        const ns = Math.min(target, s + .0012), p = path(s), q = path(ns);
        stamp(p, q, p.rh * (.74 + Math.sin(ns * 60) * .05));
        s = ns; last = q;
      }
    }
    function repaint() { c.clearRect(0, 0, W(), H()); const t = s; s = 0; drawTo(t); }
    st.onResize = () => { sizeMask(); if (s > 0) repaint(); };
    if (reduced) { drawTo(1); done = true; ch.style.opacity = 0; onDone?.(); }
    let t0 = null, exitT = null;
    (function loop(t) {
      requestAnimationFrame(loop);
      if (!st.visible) return;
      composite();
      if (!done) {
        t0 ??= t;
        const k = clamp((t - t0) / dur, 0, 1);
        drawTo(easeInOut(k));
        const p = path(s), pr = path(Math.max(0, s - .004));
        const tilt = clamp((p.x - pr.x) * .6, -28, 28);
        ch.style.transform = `translate(${p.x - tipX}px, ${p.y - tipY}px) rotate(${tilt}deg)`;
        if (k >= 1) { done = true; exitT = t; onDone?.(); }
      } else if (exitT !== null) {
        const e = clamp((t - exitT) / 900, 0, 1), p = path(1);
        ch.style.transform = `translate(${p.x - tipX + e * 120}px, ${p.y - tipY - e * 220}px) rotate(${20 + e * 30}deg)`;
        ch.style.opacity = 1 - e;
        if (e >= 1) exitT = null;
      }
    })(0);
    // después, se puede seguir pintando con el ratón
    let prev = null;
    host.addEventListener('pointermove', e => {
      if (!done || e.pointerType !== 'mouse') return;
      const b = host.getBoundingClientRect(), q = { x: e.clientX - b.left, y: e.clientY - b.top };
      if (prev) stamp(prev, q, 14);
      prev = q;
    });
    host.addEventListener('pointerleave', () => (prev = null));
  }

  /* ---------------------------------------------------------------------
     2 · BATIDO: cuenco visto desde arriba; el chasen bate y sale la espuma
     --------------------------------------------------------------------- */
  function batido(host, { dur = 4600, onDone, rim = true, radius = (W, H) => Math.min(W, H) * .3, cyr = .5 } = {}) {
    const st = stage(host), { c } = st;
    const foam = document.createElement('canvas'), fc = foam.getContext('2d');
    let R = 0, cx = 0, cy = 0;
    const cw = clamp(innerWidth * .08, 60, 110);
    const ch = tool(host, CHASEN, cw), tipX = cw * .5, tipY = cw * 292 / 120;
    const bubbles = Array.from({ length: 260 }, () => ({ a: rnd(0, 6.3), r: Math.sqrt(Math.random()), s: rnd(.5, 2), z: Math.random() }));
    st.onResize = () => {
      R = radius(st.W, st.H); cx = st.W / 2; cy = st.H * cyr;
      const old = foam.width ? fc.getImageData(0, 0, foam.width, foam.height) : null;
      foam.width = foam.height = Math.max(2, Math.round(R * 2));
      if (old) fc.putImageData(old, 0, 0);
    };
    st.onResize();
    const whisk = t => ({ x: cx + Math.sin(t * .0021) * R * .55, y: cy + Math.sin(t * .0105) * R * .5 });
    const stampFoam = (x, y, amt) => {
      const g = fc.createRadialGradient(x - cx + R, y - cy + R, 0, x - cx + R, y - cy + R, R * .45);
      g.addColorStop(0, `rgba(214,230,160,${amt})`); g.addColorStop(1, 'rgba(214,230,160,0)');
      fc.fillStyle = g; fc.fillRect(0, 0, foam.width, foam.height);
    };
    let t0 = null, done = false, rot = 0, lift = null, px = null, py = null;
    if (reduced) { for (let i = 0; i < 90; i++) stampFoam(cx + rnd(-R, R) * .6, cy + rnd(-R, R) * .6, .1); done = true; ch.style.opacity = 0; onDone?.(); }
    (function loop(t) {
      requestAnimationFrame(loop);
      if (!st.visible) return;
      t0 ??= t;
      const k = clamp((t - t0) / dur, 0, 1);
      c.clearRect(0, 0, st.W, st.H);
      if (rim) {
        const rg = c.createRadialGradient(cx - R * .3, cy - R * .35, R * .2, cx, cy, R * 1.32);
        rg.addColorStop(0, '#ffffff'); rg.addColorStop(.7, '#f1f3ee'); rg.addColorStop(1, '#d9dfd2');
        c.fillStyle = 'rgba(30,45,20,.14)'; c.beginPath(); c.arc(cx + 12, cy + 26, R * 1.3, 0, 7); c.fill();
        c.fillStyle = rg; c.beginPath(); c.arc(cx, cy, R * 1.28, 0, 7); c.fill();
      }
      // líquido
      const lg = c.createRadialGradient(cx - R * .2, cy - R * .2, 0, cx, cy, R);
      lg.addColorStop(0, '#6f8f33'); lg.addColorStop(1, '#3f5a1f');
      c.save(); c.beginPath(); c.arc(cx, cy, R, 0, 7); c.clip();
      c.fillStyle = lg; c.fillRect(cx - R, cy - R, R * 2, R * 2);
      // espuma acumulada (gira despacio al terminar)
      if (!done) {
        const w = whisk(t);
        stampFoam(w.x, w.y, .035 + k * .02);
        ch.style.transform = `translate(${w.x - tipX}px, ${w.y - tipY}px) rotate(${Math.sin(t * .0105) * 14}deg)`;
        if (k >= 1) { done = true; lift = t; onDone?.(); }
      } else {
        rot += reduced ? 0 : .0008;
        if (lift !== null) {
          const e = clamp((t - lift) / 900, 0, 1), w = whisk(t);
          ch.style.transform = `translate(${w.x - tipX}px, ${w.y - tipY - e * 160}px) scale(${1 + e * .2})`;
          ch.style.opacity = 1 - e;
          if (e >= 1) lift = null;
        }
      }
      c.translate(cx, cy); c.rotate(rot); c.drawImage(foam, -R, -R, R * 2, R * 2);
      // microburbujas
      const cover = done ? 1 : k;
      for (const b of bubbles) {
        if (b.z > cover) continue;
        b.a += .002 * b.s;
        c.fillStyle = 'rgba(245,250,228,.55)';
        c.beginPath(); c.arc(Math.cos(b.a) * b.r * R * .95, Math.sin(b.a) * b.r * R * .95, b.s * .9, 0, 7); c.fill();
      }
      c.restore();
      const sh = c.createRadialGradient(cx, cy, R * .75, cx, cy, R);
      sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(20,30,10,.3)');
      c.fillStyle = sh; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill();
    })(0);
    // al terminar, el ratón sigue batiendo
    host.addEventListener('pointermove', e => {
      if (!done) return;
      const b = host.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
      if (Math.hypot(x - cx, y - cy) < R && px !== null) stampFoam(x, y, clamp(Math.hypot(x - px, y - py) * .002, 0, .05));
      px = x; py = y;
    });
  }

  /* ---------------------------------------------------------------------
     3 · POLVO: la cucharilla deja caer matcha que forma las letras
     --------------------------------------------------------------------- */
  function polvo(host, { text = 'mood matcha', font = 'Georgia, serif', weight = 400, y = .48, onDone } = {}) {
    const st = stage(host), { c } = st;
    const sw = clamp(innerWidth * .2, 150, 280);
    const spoon = tool(host, CHASHAKU, sw);
    spoon.style.transformOrigin = '100% 50%';
    let P = [], started = null, done = false;
    const mouse = { x: -1e4, y: -1e4 };
    const tip = () => ({ x: st.W * .5, y: st.H * .12 });
    function build() {
      const W = st.W, H = st.H, off = document.createElement('canvas'), o = off.getContext('2d');
      off.width = W; off.height = H;
      let size = Math.min(W * .16, H * .26);
      o.font = `${weight} ${size}px ${font}`;
      const mw = o.measureText(text).width; if (mw > W * .86) size *= W * .86 / mw;
      o.font = `${weight} ${size}px ${font}`; o.textAlign = 'center'; o.textBaseline = 'middle'; o.fillStyle = '#000';
      o.fillText(text, W / 2, H * y);
      const data = o.getImageData(0, 0, W, H).data, step = Math.max(2, Math.round(size / 30)), pts = [];
      for (let yy = 0; yy < H; yy += step) for (let xx = 0; xx < W; xx += step) if (data[(yy * W + xx) * 4 + 3] > 140) pts.push([xx, yy]);
      pts.sort(() => Math.random() - .5);
      const max = innerWidth < 700 ? 2600 : 5200;
      const T = tip();
      P = pts.slice(0, max).map(([tx, ty], i, a) => ({
        tx, ty, sx: T.x + rnd(-6, 6), sy: T.y + rnd(-3, 3), cx1: T.x + rnd(-W * .25, W * .25), cy1: T.y + (ty - T.y) * rnd(.1, .5),
        t0: (i / a.length) * 2600, d: rnd(900, 1600), r: rnd(.8, step * .62), g: Math.random(), ox: 0, oy: 0, vx: 0, vy: 0
      }));
    }
    let ready = false;
    st.onResize = () => { if (!ready) return; build(); if (done || reduced) started = -1e9; };
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { build(); ready = true; });
    if (reduced) { started = -1e9; done = true; spoon.style.opacity = 0; onDone?.(); }
    host.addEventListener('pointermove', e => { const b = host.getBoundingClientRect(); mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top; });
    host.addEventListener('pointerleave', () => { mouse.x = mouse.y = -1e4; });
    (function loop(t) {
      requestAnimationFrame(loop);
      if (!st.visible || !ready) return;
      started ??= t;
      const el = t - started;
      c.clearRect(0, 0, st.W, st.H);
      const T = tip();
      // cucharilla: inclina, espolvorea y se retira
      const out = clamp((el - 3400) / 900, 0, 1);
      spoon.style.transform = `translate(${T.x - sw * .03 + out * 80}px, ${T.y - sw * .07 - out * 120}px) rotate(${-8 + Math.sin(el * .012) * 3 * (1 - out) - out * 20}deg)`;
      spoon.style.opacity = 1 - out;
      let settled = 0;
      for (const p of P) {
        const k = clamp((el - p.t0) / p.d, 0, 1);
        if (k <= 0) continue;
        let x, y;
        if (k < 1) {
          const e = easeInOut(k), u = 1 - e;
          x = u * u * p.sx + 2 * u * e * p.cx1 + e * e * p.tx;
          y = u * u * p.sy + 2 * u * e * p.cy1 + e * e * p.ty;
        } else {
          settled++;
          const dx = p.tx + p.ox - mouse.x, dy = p.ty + p.oy - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 9000) { const f = (9000 - d2) / 9000 * 2.2, d = Math.sqrt(d2) || 1; p.vx += dx / d * f; p.vy += dy / d * f; }
          p.vx += -p.ox * .05; p.vy += -p.oy * .05; p.vx *= .82; p.vy *= .82; p.ox += p.vx; p.oy += p.vy;
          x = p.tx + p.ox; y = p.ty + p.oy;
        }
        c.fillStyle = p.g < .33 ? '#5f7d2a' : p.g < .66 ? '#7c9a3d' : '#9dba5c';
        c.fillRect(x - p.r, y - p.r, p.r * 2, p.r * 2);
      }
      if (!done && P.length && settled === P.length) { done = true; onDone?.(); }
    })(0);
  }

  /* ---------------------------------------------------------------------
     4 · ENSŌ: una pincelada de matcha dibuja el círculo
     --------------------------------------------------------------------- */
  function enso(host, { dur = 2600, delay = 300, radius = .36, onDone } = {}) {
    const st = stage(host), { c } = st;
    const bristles = Array.from({ length: 46 }, () => ({ o: rnd(-1, 1), ink: rnd(.55, 1), w: rnd(.6, 2.2), dry: rnd(.55, 1) }));
    let u = 0, done = false, t0 = null;
    const geo = () => ({ cx: st.W / 2, cy: st.H / 2, R: Math.min(st.W, st.H) * radius });
    const at = v => {
      const { cx, cy, R } = geo(), a = -Math.PI * .62 + v * Math.PI * 1.86;
      const r = R * (1 + .035 * Math.sin(v * 7) + .02 * Math.sin(v * 17));
      return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, a };
    };
    const width = v => geo().R * .2 * (v < .06 ? .45 + v / .06 * .55 : 1 - (v - .06) * .72);
    function drawTo(target) {
      while (u < target) {
        const nv = Math.min(target, u + .0015), p = at(u), q = at(nv), w = width(u);
        for (const b of bristles) {
          // hacia el final, las cerdas se quedan sin tinta (pincel seco)
          const inkLeft = b.ink - (u > .55 ? (u - .55) * 2.2 * (1 - b.dry) * 2 : 0);
          if (inkLeft <= 0 || Math.random() > inkLeft) continue;
          const nx = Math.cos(p.a), ny = Math.sin(p.a), o = b.o * w / 2;
          c.strokeStyle = `rgba(${Math.round(lerp(92, 128, (b.o + 1) / 2))},${Math.round(lerp(122, 160, (b.o + 1) / 2))},${Math.round(lerp(38, 64, (b.o + 1) / 2))},${.5 * inkLeft})`;
          c.lineWidth = b.w * (w / 26);
          c.beginPath(); c.moveTo(p.x + nx * o, p.y + ny * o); c.lineTo(q.x + nx * o, q.y + ny * o); c.stroke();
        }
        u = nv;
      }
    }
    st.onResize = () => { const t = u; c.clearRect(0, 0, st.W, st.H); u = 0; drawTo(t); };
    if (reduced) { drawTo(1); done = true; onDone?.(); return; }
    (function loop(t) {
      if (done) return;
      requestAnimationFrame(loop);
      if (!st.visible) return;
      t0 ??= t + delay;
      const k = clamp((t - t0) / dur, 0, 1);
      c.lineCap = 'round';
      drawTo(easeOut(k));
      if (k >= 1) { done = true; onDone?.(); }
    })(0);
  }

  /* ---------------------------------------------------------------------
     5 · MAREA: el matcha sube con olas y el titular cambia de color
     --------------------------------------------------------------------- */
  function marea(host, { lines = ['Un matcha', 'para tu calma'], font = 'Georgia, serif', level = .56, dur = 3200, above = '#3f5a2c', below = '#ffffff', getExtra = () => 0, onDone } = {}) {
    const st = stage(host), { c } = st;
    const bubbles = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: rnd(1, 4), v: rnd(.0006, .0018) }));
    let t0 = null, done = false, ripple = { x: -1, a: 0 };
    host.addEventListener('pointermove', e => { const b = host.getBoundingClientRect(); ripple.x = e.clientX - b.left; ripple.a = Math.min(26, ripple.a + Math.abs(e.movementX || 0) * .5 + 1); });
    const surface = (x, t, L) => {
      let y = st.H * (1 - L);
      y += Math.sin(x * .006 + t * .0012) * 10 + Math.sin(x * .013 - t * .0017) * 6 + Math.sin(x * .002 + t * .0006) * 14;
      if (ripple.x >= 0) y += Math.sin((x - ripple.x) * .05 - t * .01) * ripple.a * Math.exp(-Math.abs(x - ripple.x) / 160);
      return y;
    };
    function text(color) {
      const size = Math.min(st.W * .1, st.H * .14);
      c.font = `400 ${size}px ${font}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = color;
      lines.forEach((l, i) => c.fillText(l, st.W / 2, st.H * .42 + (i - (lines.length - 1) / 2) * size * 1.08));
    }
    (function loop(t) {
      requestAnimationFrame(loop);
      if (!st.visible) return;
      t0 ??= t;
      const k = reduced ? 1 : clamp((t - t0) / dur, 0, 1);
      if (k >= 1 && !done) { done = true; onDone?.(); }
      ripple.a *= .96;
      const L = clamp(level * easeOut(k) + getExtra(), 0, 1.1), W = st.W, H = st.H, tt = reduced ? 0 : t;
      c.clearRect(0, 0, W, H);
      text(above);
      c.save();
      c.beginPath(); c.moveTo(0, H);
      for (let x = 0; x <= W + 8; x += 8) c.lineTo(x, surface(x, tt, L));
      c.lineTo(W, H); c.closePath();
      const g = c.createLinearGradient(0, H * (1 - L), 0, H);
      g.addColorStop(0, '#93b24c'); g.addColorStop(1, '#4d6b22');
      c.fillStyle = g; c.fill();
      c.clip();
      for (const b of bubbles) {
        b.y -= b.v; if (b.y < 0) { b.y = 1; b.x = Math.random(); }
        c.fillStyle = 'rgba(236,246,204,.35)'; c.beginPath(); c.arc(b.x * W, b.y * H, b.r, 0, 7); c.fill();
      }
      text(below);
      c.restore();
      // espuma en la superficie
      c.strokeStyle = 'rgba(226,238,190,.85)'; c.lineWidth = 5; c.beginPath();
      for (let x = 0; x <= W + 8; x += 8) { const y = surface(x, tt, L); x ? c.lineTo(x, y) : c.moveTo(x, y); }
      c.stroke();
    })(0);
  }

  return { pincel, batido, polvo, enso, marea, CHASEN, CHASHAKU };
})();
