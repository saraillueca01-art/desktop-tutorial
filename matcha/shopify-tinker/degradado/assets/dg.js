/* Mood Matcha · Degradado. Comportamiento de las secciones dg-*. */
(() => {
  if (window.__dg) return; window.__dg = true;
  const COLORES = { good:'#f4e278', chill:'#89b3d8', focus:'#72927f', monday:'#d8d8c8', social:'#edab57', slow:'#beadd4' };
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const guarda = { get(k){ try { return localStorage.getItem(k) } catch(e){ return null } }, set(k,v){ try { localStorage.setItem(k,v) } catch(e){} } };
  const dinero = (c, f) => { const v = (c/100).toFixed(2).replace('.', ','); return f ? f.replace(/\{\{\s*\w+\s*\}\}/, v) : v + ' €'; };

  function portada(el){
    const g = el.querySelector('[data-dg-giro]'); if (!g) return;
    const ws = (g.dataset.palabras || '').split(',').map(s => s.trim()).filter(Boolean);
    if (ws.length < 2) return;
    let i = 0; g.style.setProperty('--c', COLORES[ws[0].replace('.','').toLowerCase()] || '#fff');
    setInterval(() => { g.style.opacity = 0; setTimeout(() => {
      i = (i + 1) % ws.length; const w = ws[i]; g.textContent = w.endsWith('.') ? w : w + '.';
      g.style.setProperty('--c', COLORES[w.replace('.','').toLowerCase()] || '#fff'); g.style.opacity = 1; }, 400); }, 2600);
  }

  function cinta(el){
    const p = el.querySelector('.dg-cinta__pista'); if (!p || p.dataset.listo) return;
    p.innerHTML += p.innerHTML; p.dataset.listo = 1;
  }

  function juego(el){
    const orbes = el.querySelector('.dg-orbes'), premio = el.querySelector('[data-dg-premio]');
    if (!orbes || !premio) return;
    const clave = 'dg-mood-' + (el.dataset.clave || 'juego');
    const tags = el.querySelector('[data-dg-tags]'), aviso = el.querySelector('[data-dg-aviso]');
    const base = tags ? tags.value : '';
    const botones = $$('.dg-orbe', orbes);
    let elegido = null;
    function mostrar(b, anim){
      elegido = b.dataset.mood;
      orbes.classList.remove('is-esperando'); orbes.classList.add('is-cerrado');
      botones.forEach(o => { const yo = o === b; o.setAttribute('aria-pressed', yo); o.disabled = !yo; o.classList.toggle('is-bloqueado', !yo); });
      premio.style.setProperty('--c', b.style.getPropertyValue('--c'));
      premio.querySelector('[data-dg-ey]').textContent = premio.dataset.ey.replace('[mood]', b.dataset.nombre);
      premio.querySelector('[data-dg-t]').textContent = b.dataset.frase;
      premio.querySelector('[data-dg-d]').textContent = b.dataset.premio;
      if (tags) tags.value = base + ', mood-' + elegido;
      premio.hidden = false; if (aviso) aviso.hidden = false;
      if (anim) { premio.classList.remove('is-sale'); void premio.offsetWidth; premio.classList.add('is-sale'); premio.scrollIntoView({ behavior:'smooth', block:'center' }); }
    }
    botones.forEach(b => b.addEventListener('click', () => { if (elegido) return; guarda.set(clave, b.dataset.mood); mostrar(b, true); }));
    const previo = guarda.get(clave), b = botones.find(x => x.dataset.mood === previo);
    if (b) mostrar(b, false); else orbes.classList.add('is-esperando');
  }

  function compra(el){
    const form = el.querySelector('form[data-dg-form]'); if (!form) return;
    const precio = +form.dataset.price, formato = form.dataset.formato, btn = form.querySelector('[data-dg-total]');
    const upd = () => {
      const r = form.querySelector('input[name="quantity"]:checked'); if (!r || !btn) return;
      const n = +r.value, pct = +r.dataset.pct || 0;
      btn.textContent = dinero(Math.round(precio * n * (100 - pct) / 100), formato);
    };
    $$('input[name="quantity"]', form).forEach(r => r.addEventListener('change', upd));
  }

  const frases = [];
  function frase(el){ const p = el.querySelector('p'); if (!p || p.dataset.listo) return;
    p.dataset.listo = 1; p.innerHTML = p.textContent.trim().split(/\s+/).map(w => `<span class="t">${w}</span>`).join(' ');
    frases.push(p); colocar(p); }
  function colocar(p){ const w = p.getBoundingClientRect().width;
    $$('.t', p).forEach(t => { t.style.backgroundSize = w + 'px 100%'; t.style.backgroundPosition = (-t.offsetLeft) + 'px 0'; }); }
  function tinta(){ const vh = innerHeight; frases.forEach(p => { const r = p.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35))); const ts = $$('.t', p), n = Math.round(k * ts.length);
    ts.forEach((t, i) => t.classList.toggle('on', i < n)); }); }

  function modo(el){
    const caja = el.querySelector('.dg-modo__caja'), tabs = $$('.dg-tabs button', el);
    tabs.forEach(b => b.addEventListener('click', () => {
      tabs.forEach(o => o.setAttribute('aria-pressed', o === b));
      caja.style.setProperty('--c', b.style.getPropertyValue('--c'));
      el.querySelector('[data-dg-p]').textContent = b.dataset.nombre;
      el.querySelector('[data-dg-r]').textContent = b.dataset.receta;
      el.querySelector('[data-dg-x]').textContent = b.dataset.texto;
    }));
  }

  function blog(el){
    const fil = $$('.dg-filtros button', el), posts = $$('[data-dg-tags]', el), vacio = el.querySelector('[data-dg-vacio]');
    fil.forEach(b => b.addEventListener('click', () => {
      fil.forEach(o => o.setAttribute('aria-pressed', o === b));
      const f = b.dataset.f; let n = 0;
      posts.forEach(p => { const ok = f === 'todo' || p.dataset.dgTags.split('|').includes(f); p.hidden = !ok; if (ok) n++; });
      if (vacio) vacio.hidden = n > 0;
    }));
  }

  function iniciar(root = document){
    $$('.dg-portada', root).forEach(portada);
    $$('.dg-cinta', root).forEach(cinta);
    $$('.dg-juego', root).forEach(juego);
    $$('.dg-compra', root).forEach(compra);
    $$('.dg-frase', root).forEach(frase);
    $$('.dg-modo', root).forEach(modo);
    $$('.dg-blog', root).forEach(blog);
    tinta();
  }
  /* Tinker desplaza .page-wrapper en escritorio, no la ventana: escuchamos en captura. */
  document.addEventListener('scroll', tinta, { capture:true, passive:true });
  addEventListener('resize', () => { frases.forEach(colocar); tinta(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => iniciar()); else iniciar();
  document.addEventListener('shopify:section:load', e => iniciar(e.target));
})();
