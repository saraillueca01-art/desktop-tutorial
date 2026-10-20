(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  // ---- Caja de mood: cambia de color solo ella ----
  const MOODS = {
    focus:   { a: '#5f8f12', b: '#eef5d6', t: '#1b2a1f', w: 'focus',   line: 'Para concentrarte: solo con agua, 2 g y 70 ml a 80 °C.' },
    calma:   { a: '#3f8f86', b: '#e3f1ee', t: '#16302c', w: 'calma',   line: 'Para bajar el ritmo: latte templado con bebida de avena.' },
    energia: { a: '#d29a00', b: '#fff3c4', t: '#2a2400', w: 'energía', line: 'Para arrancar: con hielo y tónica, el matcha por encima.' },
    antojo:  { a: '#d65f80', b: '#fde6ed', t: '#3a1220', w: 'antojo',  line: 'Para darte un capricho: matcha affogato con helado de vainilla.' },
  };
  const box = document.querySelector('[data-ch-moodbox]');
  const setMood = (k) => {
    const m = MOODS[k]; if (!m || !box) return;
    box.style.setProperty('--a', m.a); box.style.setProperty('--b', m.b); box.style.setProperty('--t', m.t);
    box.querySelectorAll('[data-ch-mood]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.chMood === k)));
    const w = box.querySelector('[data-ch-word]'); w.textContent = m.w; w.classList.remove('ch-flash'); void w.offsetWidth; w.classList.add('ch-flash');
    box.querySelector('[data-ch-line]').textContent = m.line;
  };
  box?.querySelectorAll('[data-ch-mood]').forEach((b) => b.addEventListener('click', () => setMood(b.dataset.chMood)));

  // Canvas al tamaño de su caja
  const fit = (cv) => { const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); cv.width = r.width * d; cv.height = r.height * d; const c = cv.getContext('2d'); c.setTransform(d, 0, 0, d, 0, 0); return { c, w: r.width, h: r.height }; };

  // ---- Cintas que se aceleran al bajar ----
  const rows = [...document.querySelectorAll('.ch-tape__row')];
  rows.forEach((r) => { const s = r.textContent.split('·').filter((x) => x.trim()).map((x) => `<span>${x.trim()}</span>`).join(''); r.innerHTML = s + s + s + s; });
  let boost = 0, x = 0, lastY = scrollY, last = performance.now();
  addEventListener('scroll', () => { boost = Math.min(boost + Math.abs(scrollY - lastY) * 0.02, 5); lastY = scrollY; }, { passive: true });
  const tapeLoop = (now) => {
    const dt = Math.min(now - last, 50); last = now;
    if (!reduced) {
      x += dt * 0.025 * (1 + boost); boost *= 0.93;
      rows.forEach((r) => { const w = r.scrollWidth / 4; const off = x % w; r.style.transform = `translateX(${r.dataset.dir === '-1' ? -off : off - w}px)`; });
    }
    requestAnimationFrame(tapeLoop);
  };
  requestAnimationFrame(tapeLoop);

  // ---- Manifiesto que se tiñe al bajar ----
  const ink = document.querySelector('[data-ch-ink]');
  if (ink) {
    const wrap = (node) => { [...node.childNodes].forEach((n) => { if (n.nodeType === 3) { const f = document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach((p) => { if (!p) return; if (/^\s+$/.test(p)) f.append(p); else { const i = document.createElement('i'); i.textContent = p; f.append(i); } }); n.replaceWith(f); } else wrap(n); }); };
    wrap(ink);
    const words = [...ink.querySelectorAll('i')];
    const paint = () => {
      const r = ink.getBoundingClientRect(), vh = innerHeight;
      const p = reduced ? 1 : Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    };
    addEventListener('scroll', paint, { passive: true }); paint();
  }

  // ---- Bate y gana ----
  const wc = document.querySelector('[data-ch-whisk]');
  if (wc) {
    const meter = document.querySelector('[data-ch-meter]'), prize = document.querySelector('[data-ch-prize]');
    let W = fit(wc), foam = 0, bubbles = [], lastP = null, dirX = 0, won = false, swirl = 0;
    const draw = () => {
      const { c, w, h } = W; c.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.4;
      c.fillStyle = 'rgba(15,36,20,0.12)'; c.beginPath(); c.ellipse(cx, cy + R + 18, R * 0.9, 14, 0, 0, 7); c.fill();
      c.fillStyle = '#ffffff'; c.beginPath(); c.arc(cx, cy, R + 16, 0, 7); c.fill();
      c.strokeStyle = '#e3e8db'; c.lineWidth = 2; c.stroke();
      const g = c.createRadialGradient(cx - R * 0.2, cy - R * 0.2, R * 0.1, cx, cy, R);
      g.addColorStop(0, '#6aa83a'); g.addColorStop(1, '#2c6a1a');
      c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill();
      const f = foam / 100;
      if (f > 0) {
        c.save(); c.beginPath(); c.arc(cx, cy, R, 0, 7); c.clip();
        c.globalAlpha = Math.min(1, f * 1.2);
        const fg = c.createRadialGradient(cx, cy, 0, cx, cy, R); fg.addColorStop(0, '#d6eb8c'); fg.addColorStop(0.8, '#b3d463'); fg.addColorStop(1, 'rgba(179,212,99,0.2)');
        c.fillStyle = fg; c.beginPath(); c.arc(cx, cy, R * (0.25 + 0.75 * f), 0, 7); c.fill();
        c.globalAlpha = 0.5 * f; c.strokeStyle = '#f2f8d8'; c.lineWidth = 1.5;
        for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(cx, cy, R * (0.2 + i * 0.18) * f, swirl + i, swirl + i + 2.4); c.stroke(); }
        c.restore();
      }
      bubbles.forEach((b) => { c.globalAlpha = b.a; c.fillStyle = '#f4fadf'; c.beginPath(); c.arc(b.x, b.y, b.r, 0, 7); c.fill(); });
      c.globalAlpha = 1;
    };
    const move = (e) => {
      if (won) return;
      const r = wc.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      if (lastP) {
        const s = Math.sign(x - lastP.x);
        if (s && s !== dirX && Math.abs(x - lastP.x) > 1) { foam = Math.min(100, foam + 3); dirX = s; swirl += 0.4; }
        const R = Math.min(W.w, W.h) * 0.4;
        if (Math.hypot(x - W.w / 2, y - W.h / 2) < R) for (let i = 0; i < 3; i++) bubbles.push({ x: x + (Math.random() - 0.5) * 34, y: y + (Math.random() - 0.5) * 34, r: Math.random() * 3 + 1, a: 0.9 });
      }
      lastP = { x, y }; meter.style.width = foam + '%';
      if (foam >= 100) { won = true; prize.classList.add('on'); }
    };
    wc.addEventListener('pointermove', move);
    wc.addEventListener('pointerdown', (e) => wc.setPointerCapture?.(e.pointerId));
    wc.addEventListener('pointerleave', () => (lastP = null));
    document.querySelector('[data-ch-again]').addEventListener('click', () => { foam = 0; won = false; bubbles = []; prize.classList.remove('on'); meter.style.width = '0'; });
    const loop = () => { bubbles.forEach((b) => (b.a *= 0.95)); bubbles = bubbles.filter((b) => b.a > 0.05).slice(-300); draw(); requestAnimationFrame(loop); };
    loop();
    addEventListener('resize', () => (W = fit(wc)));
  }

  // ---- Textos con chispa: aviso al añadir a la cesta ----
  const toast = document.querySelector('[data-ch-toast]');
  const lines = ['Buena elección. Tu yo de mañana te lo agradece.', 'Hecho. Ya huele a matcha.', 'A la cesta. Tu mood te lo pedía.'];
  let li = 0, tt;
  document.addEventListener('submit', (e) => {
    if (!e.target.matches('[data-mm-form]')) return;
    setTimeout(() => { toast.textContent = lines[li++ % lines.length]; toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('on'), 2600); }, 500);
  }, true);
})();
