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

  // ---- Juego: Elige tu mood ----
  const game = document.querySelector('[data-ch-game]');
  if (game) {
    const winBox = game.querySelector('[data-ch-gwin]');
    game.querySelectorAll('.ch-card').forEach((card) => card.addEventListener('click', () => {
      if (game.classList.contains('is-played')) return;
      card.classList.add('open'); game.classList.add('is-played');
      game.querySelector('[data-ch-gmood]').textContent = 'Mood ' + card.querySelector('.ch-card__back small').textContent;
      game.querySelector('[data-ch-gprize]').textContent = card.dataset.prize;
      game.querySelector('[data-ch-gsub]').textContent = card.dataset.sub;
      const tags = game.querySelector('[data-ch-gtags]'); tags.value = `newsletter, juego-mood, mood-${card.dataset.mood}`;
      setTimeout(() => { winBox.hidden = false; game.querySelector('#ch-game-email').focus({ preventScroll: true }); }, 900);
    }));
    game.querySelector('[data-ch-gform]').addEventListener('submit', (e) => { e.preventDefault(); winBox.hidden = true; game.querySelector('[data-ch-gdone]').hidden = false; });
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
