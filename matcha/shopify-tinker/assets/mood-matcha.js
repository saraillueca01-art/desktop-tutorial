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

/* ---------- Pasos de preparación: se iluminan al llegar ---------- */
function pasos(root) {
  $$('[data-mm-steps]', root).forEach((list) => {
    const items = $$('.mm-prep__step', list);
    if (reduced) { items.forEach((s) => s.classList.add('is-on')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-on'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -20% 0px' });
    items.forEach((s) => io.observe(s));
    const line = list.querySelector('.mm-prep__line span');
    if (line) {
      const fn = () => {
        const r = list.getBoundingClientRect();
        const p = clamp((innerHeight * 0.7 - r.top) / Math.max(1, r.height), 0, 1);
        line.style.transform = `scaleY(${p})`;
      };
      scrollFns.add(fn); fn();
    }
  });
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
      try {
        const res = await fetch(url.replace(/\.js$/, ''), { method: 'POST', body: data, headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' } });
        const json = await res.json();
        if (!res.ok || json.status) throw new Error(json.description || json.message || 'error');
        const cart = await (await fetch((window.Shopify?.routes?.root || '/') + 'cart.js')).json();
        let opened = false;
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
  intro(root); roll(root); videos(root); moods(root); carousel(root); tins(root);
  momentos(root); counters(root); pasos(root); ship(root); freeBars(root); forms(root);
  runScroll();
}
init();
document.addEventListener('cart:update', (e) => {
  const c = e.detail?.resource;
  if (c && typeof c.total_price === 'number') freeBars(document, c); else freeBars(document);
});
document.addEventListener('shopify:section:load', (e) => init(e.target));
