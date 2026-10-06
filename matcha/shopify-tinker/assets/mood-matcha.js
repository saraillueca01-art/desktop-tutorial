/* Mood Matcha · comportamiento de las secciones mm-*
   Cada parte se activa sola si su sección está en la página.
   También se vuelve a activar cuando editas en el personalizador de Shopify. */

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const progress = (el) => {
  const r = el.getBoundingClientRect();
  return clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1);
};
const money = (cents) =>
  (cents / 100).toLocaleString('es-ES', { style: 'currency', currency: window.Shopify?.currency?.active || 'EUR' });

const scrollFns = new Set();
let queued = false;
const runScroll = () => { queued = false; scrollFns.forEach((fn) => fn()); };
addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(runScroll); } }, { passive: true });
addEventListener('resize', runScroll);

/* ---------- Entrada con el logo ---------- */
function intro(root) {
  const el = root.querySelector('.mm-intro');
  if (!el) return;
  if (window.Shopify?.designMode || sessionStorageGet('mm-intro')) { el.remove(); return; }
  sessionStorageSet('mm-intro', '1');
  setTimeout(() => el.classList.add('is-out'), reduced ? 0 : 1700);
  setTimeout(() => el.remove(), reduced ? 0 : 2900);
}
function sessionStorageGet(k) { try { return sessionStorage.getItem(k); } catch { return null; } }
function sessionStorageSet(k, v) { try { sessionStorage.setItem(k, v); } catch {} }

/* ---------- Palabra del mood que cambia sola ---------- */
function roll(root) {
  $$('[data-mm-roll]', root).forEach((el) => {
    const spans = [...el.children];
    if (spans.length < 2 || reduced || el.dataset.mmOn) return;
    el.dataset.mmOn = '1';
    let i = 0;
    const timer = setInterval(() => {
      if (!el.isConnected) return clearInterval(timer);
      const prev = spans[i];
      prev.classList.replace('is-on', 'is-off');
      setTimeout(() => prev.classList.remove('is-off'), 1000);
      i = (i + 1) % spans.length;
      spans[i].classList.add('is-on');
    }, 2600);
  });
}

/* ---------- Vídeos: se pausan fuera de pantalla ---------- */
const videoIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target;
  if (e.isIntersecting && !reduced) v.play?.().catch(() => {});
  else v.pause?.();
}), { threshold: 0.05 });
function videos(root) {
  $$('.mm-media video', root).forEach((v) => { v.muted = true; v.playsInline = true; videoIO.observe(v); });
}

/* ---------- Moods: pestañas con imagen ---------- */
function moods(root) {
  $$('[data-mm-moods]', root).forEach((box) => {
    const tabs = $$('[role="tab"]', box), pics = $$('[data-mm-pic]', box);
    const go = (i) => {
      tabs.forEach((t, k) => { t.setAttribute('aria-selected', k === i); t.tabIndex = k === i ? 0 : -1; });
      pics.forEach((p, k) => p.classList.toggle('is-on', k === i));
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => go(i));
      t.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        const n = (i + d + tabs.length) % tabs.length;
        go(n); tabs[n].focus();
      });
    });
    go(0);
  });
}

/* ---------- Carrusel arrastrable (cifras clave) ---------- */
function carousel(root) {
  $$('[data-mm-track]', root).forEach((track) => {
    const box = track.closest('.mm-cifras');
    const prev = box?.querySelector('[data-mm-prev]'), next = box?.querySelector('[data-mm-next]');
    const step = () => (track.firstElementChild?.offsetWidth || 300) + 16;
    prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }));
    let d = null;
    track.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse') d = { x: e.clientX, l: track.scrollLeft }; });
    addEventListener('pointermove', (e) => { if (d) { track.scrollLeft = d.l - (e.clientX - d.x); track.style.scrollSnapType = 'none'; } });
    addEventListener('pointerup', () => { if (d) { d = null; track.style.scrollSnapType = ''; } });
    const upd = () => {
      if (prev) prev.disabled = track.scrollLeft < 4;
      if (next) next.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 4;
    };
    track.addEventListener('scroll', upd, { passive: true });
    upd();
  });
}

/* ---------- La lata: brillo que sigue al ratón y sube al hacer scroll ---------- */
function tins(root) {
  $$('[data-mm-stage]', root).forEach((stage) => {
    const tin = stage.querySelector('.mm-tin');
    if (!tin) return;
    let gx = 28, target = null;
    stage.addEventListener('pointermove', (e) => {
      const b = stage.getBoundingClientRect();
      target = clamp(((e.clientX - b.left) / b.width) * 100 - 8, 6, 74);
    });
    stage.addEventListener('pointerleave', () => (target = null));
    (function gloss(t) {
      if (!stage.isConnected) return;
      requestAnimationFrame(gloss);
      const goal = target ?? (reduced ? 28 : 30 + Math.sin(t / 1800) * 18);
      gx = lerp(gx, goal, 0.06);
      tin.style.setProperty('--mm-gx', gx + '%');
    })(0);
    if (!reduced) {
      const fn = () => { tin.style.transform = `translateY(${(progress(stage) - 0.5) * -60}px)`; };
      scrollFns.add(fn); fn();
    }
  });
}

/* ---------- Galería de la lata: las miniaturas cambian la foto grande ---------- */
function galeria(root) {
  $$('[data-mm-gal]', root).forEach((gal) => {
    const imgs = $$('.mm-gal__img', gal), thumbs = $$('.mm-gal__thumbs button', gal);
    if (imgs.length < 2) return;
    let cur = 0;
    const go = (i) => {
      cur = (i + imgs.length) % imgs.length;
      imgs.forEach((im, k) => { im.classList.toggle('is-on', k === cur); if (k === cur) im.loading = 'eager'; });
      thumbs.forEach((t, k) => t.setAttribute('aria-current', String(k === cur)));
      thumbs[cur]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
    };
    gal.classList.add('is-ready');
    go(0);
    thumbs.forEach((t, k) => t.addEventListener('click', () => go(k)));
    // Tocar la foto grande pasa a la siguiente; deslizar con el dedo va hacia un lado u otro
    const main = gal.querySelector('.mm-gal__main');
    let x0 = null, swiped = false;
    main?.addEventListener('click', () => { if (!swiped) go(cur + 1); swiped = false; });
    main?.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; swiped = false; }, { passive: true });
    main?.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { swiped = true; go(cur + (dx < 0 ? 1 : -1)); }
    });
  });
}

/* ---------- Momentos en calma: columnas a distinta velocidad ---------- */
function momentos(root) {
  $$('[data-mm-wall]', root).forEach((wall) => {
    const cols = $$('.mm-momentos__col', wall), SP = [0, -70, 40, -110];
    if (reduced) return;
    const fn = () => {
      const q = progress(wall) - 0.5, wide = innerWidth > 860;
      cols.forEach((c, i) => (c.style.transform = wide ? `translate3d(0, ${q * SP[i % 4]}px, 0)` : ''));
    };
    scrollFns.add(fn); fn();
  });
}

/* ---------- Contadores (15 tazas, 2 g...) ---------- */
const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  countIO.unobserve(e.target);
  const el = e.target, to = parseFloat(el.dataset.mmTo), suf = el.dataset.mmSuf || '';
  if (reduced || !isFinite(to)) return;
  const t0 = performance.now();
  (function step(t) {
    const k = clamp((t - t0) / 1400, 0, 1), v = to * (1 - Math.pow(1 - k, 3));
    el.textContent = Math.round(v) + suf;
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}), { threshold: 0.5 });
function counters(root) { $$('[data-mm-to]', root).forEach((el) => countIO.observe(el)); }

/* ---------- Cómo se prepara: tarjetas que entran en cadena ---------- */
function preparacion(root) {
  $$('.mm-prep__row', root).forEach((row) => {
    // Las tarjetas entran una detrás de otra al llegar a la sección
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { row.classList.add('is-in'); io.disconnect(); } }, { threshold: 0.2 });
    if (reduced) row.classList.add('is-in'); else io.observe(row);
    // Sin foto: un cuenco animado que hace su paso, y lo repite al pasar el ratón
    $$('[data-mm-bowl]', row).forEach((cv) => {
      const scene = bowlScene(cv), i = parseInt(cv.dataset.step, 10) || 0;
      if (reduced) scene.go(i); else scene.replay(i);
      cv.closest('.mm-prep__card')?.addEventListener('pointerenter', () => scene.replay(i));
    });
  });
}

/* Cuenco de matcha dibujado en canvas.
   Paso 0: el colador suelta el polvo. 1: entra el agua. 2: el chasen bate y sale espuma. 3: listo, con vapor. */
function bowlScene(cv) {
  const ctx = cv.getContext('2d');
  const T = [
    { sieve: 1, powder: 1, level: 0, stream: 0, whisk: 0, foam: 0, steam: 0 },
    { sieve: 0, powder: 1, level: 1, stream: 1, whisk: 0, foam: 0, steam: 0.35 },
    { sieve: 0, powder: 1, level: 1, stream: 0, whisk: 1, foam: 1, steam: 0.35 },
    { sieve: 0, powder: 1, level: 1, stream: 0, whisk: 0, foam: 1, steam: 1 },
  ];
  const s = { sieve: 0, powder: 0, level: 0, stream: 0, whisk: 0, foam: 0, steam: 0 };
  let goal = T[0], W = 0, H = 0, visible = false, raf = 0, last = 0, time = 0;
  const parts = [], ripples = [];
  // Burbujas fijas en un disco unidad, para que la espuma no parpadee
  const bubbles = Array.from({ length: 420 }, (_, i) => {
    const a = i * 2.39996, r = Math.sqrt((i + 0.5) / 420);
    return { a, r, s: 0.5 + ((i * 7919) % 100) / 60 };
  });
  const resize = () => {
    const r = cv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    W = r.width; H = r.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  };
  new ResizeObserver(resize).observe(cv);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf) loop(performance.now()); }).observe(cv);

  const ell = (x, y, rx, ry) => { ctx.beginPath(); ctx.ellipse(x, y, Math.max(rx, 0.1), Math.max(ry, 0.1), 0, 0, Math.PI * 2); };

  function geo() {
    const rx = Math.min(W * 0.36, H * 0.4), ry = rx * 0.3, cx = W / 2, rimY = H * 0.56;
    const t = rx * 0.07, irx = rx - t, iry = ry - t * 0.3;
    const sy = rimY + iry * 0.62 - s.level * iry * 0.5;
    const srx = irx * (0.5 + 0.42 * s.level), sry = srx * 0.3;
    return { rx, ry, cx, rimY, t, irx, iry, sy, srx, sry, depth: rx * 0.8 };
  }

  function draw() {
    if (!W) return;
    const g = geo(), { cx, rimY, rx, ry, irx, iry, depth } = g;
    ctx.clearRect(0, 0, W, H);

    // Sombra y pie
    ctx.fillStyle = 'rgba(27,42,31,0.12)'; ell(cx, rimY + depth + ry * 0.15, rx * 0.62, ry * 0.32); ctx.fill();
    ctx.fillStyle = '#cfd3c9'; ell(cx, rimY + depth - ry * 0.05, rx * 0.36, ry * 0.26); ctx.fill();

    // Cuerpo de cerámica
    const body = ctx.createLinearGradient(cx - rx, 0, cx + rx, 0);
    body.addColorStop(0, '#c9cdc3'); body.addColorStop(0.3, '#ffffff'); body.addColorStop(0.55, '#eef0ea'); body.addColorStop(1, '#b9beb3');
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.moveTo(cx - rx, rimY);
    ctx.bezierCurveTo(cx - rx, rimY + depth * 0.85, cx - rx * 0.5, rimY + depth, cx, rimY + depth);
    ctx.bezierCurveTo(cx + rx * 0.5, rimY + depth, cx + rx, rimY + depth * 0.85, cx + rx, rimY);
    ctx.closePath(); ctx.fill();

    // Borde e interior
    ctx.fillStyle = '#f6f7f3'; ell(cx, rimY, rx, ry); ctx.fill();
    const inner = ctx.createRadialGradient(cx, rimY + iry * 0.5, irx * 0.1, cx, rimY, irx);
    inner.addColorStop(0, '#dfe3d8'); inner.addColorStop(1, '#c4c9bd');
    ctx.fillStyle = inner; ell(cx, rimY, irx, iry); ctx.fill();

    ctx.save(); ell(cx, rimY, irx, iry); ctx.clip();
    // Polvo en el fondo
    if (s.powder > 0.01 && s.level < 0.98) {
      const pr = irx * 0.3 * s.powder, py = rimY + iry * 0.55;
      const pg = ctx.createRadialGradient(cx, py - pr * 0.2, 0, cx, py, pr);
      pg.addColorStop(0, '#9cc24a'); pg.addColorStop(1, '#5f8f2a');
      ctx.globalAlpha = 1 - s.level; ctx.fillStyle = pg; ell(cx, py, pr, pr * 0.42); ctx.fill(); ctx.globalAlpha = 1;
    }
    // Líquido con espuma
    if (s.level > 0.02) {
      const { sy, srx, sry } = g;
      ctx.globalAlpha = Math.min(1, s.level * 1.6);
      const liq = ctx.createRadialGradient(cx - srx * 0.2, sy - sry * 0.3, srx * 0.05, cx, sy, srx);
      const f = s.foam;
      liq.addColorStop(0, mix('#6f9e2e', '#c4dc6c', f)); liq.addColorStop(1, mix('#3f6a1c', '#93b845', f));
      ctx.fillStyle = liq; ell(cx, sy, srx, sry); ctx.fill();
      // Espuma: burbujas que giran mientras se bate
      const n = Math.floor(f * bubbles.length), spin = time * 0.0009 * (0.3 + s.whisk);
      ctx.fillStyle = 'rgba(250,252,235,0.55)';
      for (let i = 0; i < n; i++) {
        const b = bubbles[i], a = b.a + spin * (1.4 - b.r);
        const x = cx + Math.cos(a) * b.r * srx * 0.94, y = sy + Math.sin(a) * b.r * sry * 0.94;
        ctx.beginPath(); ctx.arc(x, y, b.s * (0.6 + f * 0.5), 0, Math.PI * 2); ctx.fill();
      }
      // Ondas donde cae el agua
      ripples.forEach((r) => {
        ctx.strokeStyle = `rgba(255,255,255,${0.5 * (1 - r.k)})`; ctx.lineWidth = 1.2;
        ell(cx + srx * 0.18, sy, srx * 0.08 + r.k * srx * 0.6, (srx * 0.08 + r.k * srx * 0.6) * 0.3); ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    // Brillo del borde
    ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.ellipse(cx, rimY, rx - 1, ry - 1, 0, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
    ctx.strokeStyle = 'rgba(27,42,31,0.08)'; ctx.lineWidth = 1;
    ell(cx, rimY, rx, ry); ctx.stroke();

    // Partículas de polvo
    ctx.fillStyle = '#7aa834';
    parts.forEach((p) => { ctx.globalAlpha = p.a; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); });
    ctx.globalAlpha = 1;

    // Colador
    if (s.sieve > 0.01) {
      const y = rimY - rx * 0.85 - (1 - s.sieve) * rx * 0.4, r = rx * 0.42;
      ctx.globalAlpha = s.sieve;
      ctx.strokeStyle = '#8f958b'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx + r, y); ctx.lineTo(cx + r + rx * 0.55, y - rx * 0.12); ctx.stroke();
      ctx.save(); ell(cx, y, r, r * 0.3); ctx.clip();
      ctx.fillStyle = 'rgba(160,190,90,0.35)'; ctx.fillRect(cx - r, y - r, r * 2, r * 2);
      ctx.strokeStyle = 'rgba(120,126,116,0.45)'; ctx.lineWidth = 0.7;
      for (let i = -r; i < r; i += 5) { ctx.beginPath(); ctx.moveTo(cx + i, y - r); ctx.lineTo(cx + i + r * 0.3, y + r); ctx.stroke(); }
      ctx.restore();
      ctx.strokeStyle = '#8f958b'; ctx.lineWidth = 2; ell(cx, y, r, r * 0.3); ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Chorro de agua desde la tetera
    if (s.stream > 0.01) {
      const { sy, srx } = g, x0 = cx + rx * 1.05, y0 = rimY - rx * 1.05, x1 = cx + srx * 0.18;
      ctx.globalAlpha = s.stream;
      ctx.strokeStyle = '#3d423b'; ctx.lineWidth = rx * 0.07; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x0 + rx * 0.35, y0 - rx * 0.2); ctx.lineTo(x0, y0); ctx.stroke();
      const wg = ctx.createLinearGradient(x0, y0, x1, sy);
      wg.addColorStop(0, 'rgba(205,228,236,0.95)'); wg.addColorStop(1, 'rgba(225,240,245,0.6)');
      ctx.strokeStyle = wg; ctx.lineWidth = 4 * s.stream;
      ctx.setLineDash([14, 6]); ctx.lineDashOffset = -time * 0.12;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo(x1 + rx * 0.05, y0 + rx * 0.1, x1, sy); ctx.stroke();
      ctx.setLineDash([]); ctx.globalAlpha = 1;
    }

    // Chasen batiendo en zigzag
    if (s.whisk > 0.01) {
      const { sy, srx } = g;
      const x = cx + Math.sin(time * 0.014) * srx * 0.42 * s.whisk, yb = sy - 2 - (1 - s.whisk) * rx * 1.2;
      const neck = yb - rx * 0.4, top = yb - rx * 1.25, hw = rx * 0.065, spread = rx * 0.17;
      ctx.globalAlpha = Math.min(1, s.whisk * 1.5);
      ctx.strokeStyle = '#cdb27a'; ctx.lineWidth = 1;
      for (let i = -8; i <= 8; i++) {
        const k = i / 8;
        ctx.beginPath(); ctx.moveTo(x + k * hw * 0.8, neck);
        ctx.quadraticCurveTo(x + k * spread * 1.25, yb - rx * 0.18, x + k * spread * 0.55, yb); ctx.stroke();
      }
      const hg = ctx.createLinearGradient(x - hw, 0, x + hw, 0);
      hg.addColorStop(0, '#c9ad6e'); hg.addColorStop(0.5, '#ead8a8'); hg.addColorStop(1, '#b8995a');
      ctx.fillStyle = hg; ctx.beginPath(); ctx.roundRect(x - hw, top, hw * 2, neck - top + 2, hw * 0.6); ctx.fill();
      ctx.strokeStyle = 'rgba(120,95,50,0.35)'; ctx.beginPath(); ctx.moveTo(x - hw, top + (neck - top) * 0.35); ctx.lineTo(x + hw, top + (neck - top) * 0.35); ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Vapor
    if (s.steam > 0.01) {
      const { sy } = g;
      ctx.strokeStyle = `rgba(140,150,135,${0.35 * s.steam})`; ctx.lineWidth = 1.6; ctx.lineCap = 'round';
      for (let j = -1; j <= 1; j++) {
        ctx.beginPath();
        for (let k = 0; k <= 24; k++) {
          const yy = sy - ry * 0.4 - k * rx * 0.03, phase = time * 0.0016 + j * 2 + k * 0.28;
          const xx = cx + j * rx * 0.28 + Math.sin(phase) * rx * 0.05 * (k / 24 + 0.3);
          k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy);
        }
        ctx.stroke();
      }
    }
  }

  function step(dt) {
    for (const k in s) s[k] = lerp(s[k], goal[k], Math.min(1, dt * (k === 'foam' ? 0.0016 : k === 'level' ? 0.0022 : 0.004)));
    const g = geo();
    if (s.sieve > 0.6 && !reduced && Math.random() < 0.7) {
      const r = g.rx * 0.36;
      for (let i = 0; i < 2; i++) parts.push({ x: g.cx + (Math.random() * 2 - 1) * r, y: g.rimY - g.rx * 0.85, vy: 0.02 + Math.random() * 0.04, r: 0.8 + Math.random() * 1.4, a: 0.9 });
    }
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.vy += 0.0004 * dt; p.y += p.vy * dt;
      if (p.y > g.rimY + g.iry * 0.45) { p.a -= 0.08; if (p.a <= 0) parts.splice(i, 1); }
    }
    if (s.stream > 0.5 && !reduced && Math.random() < 0.05) ripples.push({ k: 0 });
    for (let i = ripples.length - 1; i >= 0; i--) { ripples[i].k += dt * 0.0012; if (ripples[i].k >= 1) ripples.splice(i, 1); }
  }

  function loop(now) {
    raf = 0;
    if (!visible || !cv.isConnected) return;
    const dt = Math.min(50, now - (last || now)); last = now; time += reduced ? 0 : dt;
    step(dt); draw();
    raf = requestAnimationFrame(loop);
  }

  return {
    go(i) {
      goal = T[clamp(i, 0, T.length - 1)];
      if (reduced) { Object.assign(s, goal); draw(); }
    },
    replay(i) {
      if (reduced) return;
      // Vuelve al estado del paso anterior y repite la transición
      Object.assign(s, i > 0 ? T[i - 1] : { sieve: 0, powder: 0, level: 0, stream: 0, whisk: 0, foam: 0, steam: 0 });
      if (i === 0) s.powder = 0;
      goal = T[i];
    },
  };
}
function mix(a, b, t) {
  const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const x = p(a), y = p(b);
  return `rgb(${x.map((v, i) => Math.round(v + (y[i] - v) * t)).join(',')})`;
}

/* ---------- Envío: pide hoy y sale mañana, y fechas de entrega ---------- */
function ship(root) {
  $$('[data-mm-ship]', root).forEach((box) => {
    const cut = parseInt(box.dataset.cutoff || '24', 10);
    const min = parseInt(box.dataset.min || '1', 10), max = parseInt(box.dataset.max || '3', 10);
    const work = (d) => d.getDay() % 6 !== 0;
    const add = (d, n) => { d = new Date(d); while (n > 0) { d.setDate(d.getDate() + 1); if (work(d)) n--; } return d; };
    const render = () => {
      const now = new Date();
      const late = now.getHours() >= cut;
      let day = new Date(now);
      if (late || !work(day)) { day.setDate(day.getDate() + 1); while (!work(day)) day.setDate(day.getDate() + 1); }
      // Se prepara el día "day" y sale al siguiente día laborable
      const sale = add(day, 1), de = add(sale, min), a = add(sale, max);
      const tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1);
      const saleTxt = sale.toDateString() === tomorrow.toDateString() ? 'mañana' : 'el ' + sale.toLocaleDateString('es-ES', { weekday: 'long' });
      const f = (d) => d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
      const end = new Date(now); end.setHours(cut, 0, 0, 0);
      const ms = end - now, h = Math.floor(ms / 3.6e6), m = Math.floor((ms % 3.6e6) / 6e4);
      box.querySelectorAll('[data-mm-ship-sale]').forEach((el) => (el.textContent = saleTxt));
      box.querySelectorAll('[data-mm-ship-range]').forEach((el) => (el.textContent = `${f(de)} y el ${f(a)}`));
      const cuenta = box.querySelector('[data-mm-ship-count]');
      if (cuenta) {
        const show = work(now) && !late && ms > 0;
        cuenta.closest('[data-mm-ship-countwrap]')?.toggleAttribute('hidden', !show);
        cuenta.textContent = `${h} h ${String(m).padStart(2, '0')} min`;
      }
    };
    render();
    setInterval(render, 60000);
  });
}

/* ---------- Barra de envío gratis ---------- */
async function freeBars(root, cart) {
  const bars = $$('[data-mm-free]', root);
  if (!bars.length) return;
  if (!cart) {
    try { cart = await (await fetch((window.Shopify?.routes?.root || '/') + 'cart.js')).json(); } catch { return; }
  }
  bars.forEach((box) => {
    const goal = Math.round(parseFloat(box.dataset.goal || '35') * 100 * (window.Shopify?.currency?.rate || 1));
    const total = cart.total_price || 0, left = goal - total;
    box.style.setProperty('--mm-p', clamp(total / goal, 0, 1) * 100 + '%');
    const txt = box.querySelector('[data-mm-free-text]');
    if (txt) txt.innerHTML = total === 0
      ? `Envío <b>gratis</b> a partir de ${money(goal)}`
      : left > 0 ? `Te faltan <b>${money(left)}</b> para el envío gratis` : 'Tu envío es <b>gratis</b>';
  });
}

/* ---------- Aviso ---------- */
let toastEl, toastT;
function toast(msg) {
  if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'mm-toast'; toastEl.setAttribute('role', 'status'); document.body.append(toastEl); }
  toastEl.textContent = msg;
  toastEl.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('is-on'), 3200);
}

/* ---------- Añadir a la cesta con el carrito de Tinker ---------- */
function forms(root) {
  $$('form[data-mm-form]', root).forEach((form) => {
    if (form.dataset.mmBound) return;
    form.dataset.mmBound = '1';
    const qty = form.querySelector('[data-mm-qty]');
    form.querySelectorAll('[data-mm-step]').forEach((b) => b.addEventListener('click', () => {
      if (!qty) return;
      const max = parseInt(qty.max || '99', 10);
      qty.value = clamp((parseInt(qty.value, 10) || 1) + parseInt(b.dataset.mmStep, 10), 1, max);
    }));
    const select = form.querySelector('[data-mm-variant]');
    const packBox = form.querySelector('[data-mm-packs]');
    const sticky = document.querySelector(`[data-mm-sticky] [form="${form.getAttribute('id')}"]`)?.closest('[data-mm-sticky]');
    const unitCents = () => parseInt(select?.selectedOptions[0]?.dataset.cents || form.dataset.price || '0', 10);
    // Packs: precio total, por lata, ahorro y si llega al envío gratis
    const updPacks = () => {
      if (!packBox) return;
      const unit = unitCents(), goal = parseInt(packBox.dataset.goal || '0', 10);
      let chosen = 0;
      packBox.querySelectorAll('input[type="radio"]').forEach((r) => {
        const n = parseInt(r.dataset.n, 10), pct = parseInt(r.dataset.pct, 10) || 0;
        const full = unit * n, total = Math.floor((full * (100 - pct)) / 100);
        const card = r.closest('.mm-pack');
        const set = (sel, v) => card.querySelectorAll(sel).forEach((el) => (el.textContent = money(v)));
        set('[data-mm-pack-total]', total); set('[data-mm-pack-full]', full);
        set('[data-mm-pack-unit]', Math.floor(total / n)); set('[data-mm-pack-save]', full - total);
        card.querySelector('[data-mm-pack-free]')?.toggleAttribute('hidden', !goal || total < goal);
        if (r.checked) chosen = total;
      });
      document.querySelectorAll(`[data-mm-btn-total]`).forEach((el) => {
        if (form.contains(el) || sticky?.contains(el)) el.textContent = money(chosen);
      });
    };
    packBox?.addEventListener('change', updPacks);
    select?.addEventListener('change', () => {
      const opt = select.selectedOptions[0];
      const sec = form.closest('.mm-lata');
      sec?.querySelectorAll('[data-mm-price]').forEach((el) => (el.textContent = opt.dataset.price));
      const btn = form.querySelector('[type="submit"]');
      if (btn) { btn.disabled = opt.dataset.available !== 'true'; btn.querySelector('span').textContent = btn.disabled ? btn.dataset.soldout : btn.dataset.add; }
      updPacks();
    });

    // Barra de compra fija: aparece cuando el botón principal ya no se ve
    if (sticky) {
      const mainBtn = form.querySelector('[type="submit"]');
      let btnVisible = true;
      const show = () => {
        const on = !btnVisible && scrollY > innerHeight * 0.6;
        sticky.classList.toggle('is-on', on);
        sticky.querySelector('button')?.setAttribute('tabindex', on ? '0' : '-1');
        sticky.setAttribute('aria-hidden', String(!on));
      };
      new IntersectionObserver(([e]) => { btnVisible = e.isIntersecting; show(); }).observe(mainBtn);
      scrollFns.add(show);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = e.submitter || form.querySelector('[type="submit"]');
      btn?.setAttribute('aria-busy', 'true');
      if (btn) btn.disabled = true;
      const data = new FormData(form);
      const sectionIds = $$('cart-items-component[data-section-id]').map((el) => el.dataset.sectionId);
      if (sectionIds.length) {
        data.append('sections', sectionIds.join(','));
        data.append('sections_url', location.pathname);
      }
      const url = window.Theme?.routes?.cart_add_url || '/cart/add';
      const itemCount = Number(data.get('quantity')) || 1;
      const cartUrl = (window.Shopify?.routes?.root || '/') + 'cart.js';
      // Horizon reciente: evento estándar de Shopify con promesa. Tinker y versiones anteriores: CartAddEvent.
      const std = await import('@shopify/events').then((m) => (m.CartLinesUpdateEvent?.createPromise ? m : null), () => null);
      const deferred = std?.CartLinesUpdateEvent.createPromise();
      if (std) {
        document.dispatchEvent(new std.CartLinesUpdateEvent({
          action: 'add',
          context: 'product',
          lines: [{ merchandiseId: String(data.get('id')), quantity: itemCount }],
          promise: deferred.promise,
        }));
      }
      const settle = (cart, extra) => deferred?.resolve({
        cart: std.CartLinesUpdateEvent.createCartFromAjaxResponse(cart),
        detail: { items: cart.items, source: 'product-form-component', sourceId: form.getAttribute('id'), itemCount, productId: String(form.dataset.productId), ...extra },
      });
      try {
        const res = await fetch(url.replace(/\.js$/, ''), { method: 'POST', body: data, headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' } });
        const json = await res.json();
        if (!res.ok || json.status) {
          if (deferred) await fetch(cartUrl).then((r) => r.json()).then((c) => settle(c, { didError: true }), (er) => deferred.reject(er));
          throw new Error(json.description || json.message || 'error');
        }
        const cart = await (await fetch(cartUrl)).json();
        let opened = false;
        if (std) {
          settle(cart, { sections: json.sections, didError: false });
          opened = !!document.querySelector('cart-drawer-component, cart-drawer');
        } else {
          try {
            const { CartAddEvent } = await import('@theme/events');
            document.dispatchEvent(new CartAddEvent({}, String(json.variant_id ?? data.get('id')), {
              source: 'product-form-component',
              itemCount: cart.item_count,
              productId: String(json.product_id ?? form.dataset.productId),
              sections: json.sections,
            }));
            opened = !!document.querySelector('cart-drawer-component, cart-drawer');
          } catch {}
        }
        freeBars(document, cart);
        $$('[data-mm-count]').forEach((el) => (el.textContent = cart.item_count));
        const goal = Math.round(parseFloat(form.closest('.mm-lata')?.querySelector('[data-mm-free]')?.dataset.goal || '35') * 100);
        const left = goal - cart.total_price;
        if (!opened) toast('Añadido a la cesta. ' + (left > 0 ? `Te faltan ${money(left)} para el envío gratis` : 'Tu envío es gratis'));
      } catch (err) {
        toast(err.message && err.message !== 'error' ? err.message : 'No se ha podido añadir. Inténtalo otra vez.');
      } finally {
        btn?.removeAttribute('aria-busy');
        if (btn) btn.disabled = false;
      }
    });
  });
}

/* ---------- Arranque ---------- */
function init(root = document) {
  intro(root); roll(root); videos(root); moods(root); carousel(root); tins(root); galeria(root);
  momentos(root); counters(root); preparacion(root); ship(root); freeBars(root); forms(root);
  runScroll();
}
init();
document.addEventListener('cart:update', (e) => {
  const c = e.detail?.resource;
  if (c && typeof c.total_price === 'number') freeBars(document, c); else freeBars(document);
});
// Horizon reciente: cualquier cambio en la cesta (también desde el carrito lateral)
document.addEventListener('shopify:cart:lines-update', (e) => {
  e.promise?.then(() => freeBars(document), () => {});
});
document.addEventListener('shopify:section:load', (e) => init(e.target));
