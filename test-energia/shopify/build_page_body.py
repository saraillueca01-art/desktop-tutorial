"""Convierte index.html en un bloque para el contenido de una página de Shopify.

Todo queda dentro de <div id="th-app">, que tapa el tema a pantalla completa,
con el CSS limitado a ese contenedor para no chocar con los estilos del tema.
Uso: python3 build_page_body.py  -> genera page-body.html
"""
import re, pathlib

here = pathlib.Path(__file__).resolve().parent
src = (here.parent / "index.html").read_text()
# En la tienda, la foto del antes y después se sirve desde los Archivos de Shopify
SHOPIFY_BA_IMG = "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/test-hormonal-antes-despues.webp?v=1790866244"
src = re.sub(r'var BEFORE_AFTER_IMG = "data:image/webp;base64,[^"]+";', 'var BEFORE_AFTER_IMG = "' + SHOPIFY_BA_IMG + '";', src)

head = src[src.index("<head>"):src.index("</head>")]
style = re.search(r"<style>(.*?)</style>", head, re.S).group(1)
fonts = re.findall(r'<link[^>]+fonts[^>]+>', head)
body = src[src.index("<body>") + 6:src.rindex("</body>")]

def split_rules(css):
    """Devuelve una lista de (prelude, block) de nivel superior."""
    out, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j < 0: break
        prelude = css[i:j].strip()
        depth, k = 1, j + 1
        while depth and k < n:
            if css[k] == "{": depth += 1
            elif css[k] == "}": depth -= 1
            k += 1
        out.append((prelude, css[j + 1:k - 1]))
        i = k
    return out

def scope_selector(sel):
    sel = sel.strip()
    if not sel: return sel
    if sel in (":root", "html", "body"): return "#th-app"
    if sel == "*" : return "#th-app, #th-app *"
    if sel.startswith("*,"): return "#th-app *, #th-app *::before, #th-app *::after"
    for root in ("html ", "body "):
        if sel.startswith(root): sel = sel[len(root):]
    return "#th-app " + sel

def scope(css):
    res = []
    for prelude, block in split_rules(css):
        prelude = re.sub(r"/\*.*?\*/", "", prelude, flags=re.S).strip()
        if prelude.startswith("@keyframes"):
            res.append(prelude + " {" + block + "}")
        elif prelude.startswith("@media") or prelude.startswith("@supports"):
            res.append(prelude + " {\n" + scope(block) + "\n}")
        elif prelude.startswith("@"):
            res.append(prelude + " {" + block + "}")
        else:
            sels = ", ".join(scope_selector(s) for s in prelude.split(","))
            res.append(sels + " {" + block + "}")
    return "\n".join(res)

scoped = scope(style)
shell = """
#th-app { position: fixed; inset: 0; z-index: 2147483000; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; scroll-behavior: smooth; }
#th-app h1, #th-app h2, #th-app h3, #th-app h4, #th-app h5 { text-transform: none; font-weight: 400; }
#th-app button, #th-app input, #th-app textarea { font-family: inherit; text-transform: none; letter-spacing: normal; min-height: 0; line-height: normal; }
#th-app a { text-decoration-thickness: auto; }
#th-app ul, #th-app ol { margin: 0; padding: 0; }
#th-app [hidden] { display: none !important; }
html { font-size: 16px !important; }
#th-app header, #th-app section, #th-app footer, #th-app main, #th-app aside, #th-app nav, #th-app form, #th-app div { height: auto; min-height: 0; max-height: none; float: none; line-height: inherit; }
#th-app header, #th-app footer { background: none; color: inherit; position: static; box-shadow: none; border: 0; }
#th-app p, #th-app li, #th-app label, #th-app summary, #th-app span, #th-app a { font-size: 1rem; letter-spacing: normal; text-transform: none; line-height: inherit; }
#th-app span, #th-app a, #th-app strong, #th-app em, #th-app b { font-size: inherit; }
#th-app button { padding: 0; background: none; border: 0; box-shadow: none; border-radius: 0; color: inherit; width: auto; height: auto; }
#th-app img, #th-app svg { max-width: 100%; height: auto; }
#th-app input[type="checkbox"] { -webkit-appearance: auto; appearance: auto; position: static; opacity: 1; }
"""
out = ("<!-- Test de energía · generado desde index.html con build_page_body.py -->\n"
       + "\n".join(fonts) + "\n<style>\n" + scoped + "\n" + shell + "</style>\n"
       + '<div id="th-app">\n' + body.strip() + "\n</div>\n"
       + "<script>document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';</script>\n")
(here / "page-body.html").write_text(out)
compact = "\n".join(l.strip() for l in out.split("\n") if l.strip())
(here / "page-body.min.html").write_text(compact)
# Versión que se carga desde un <script>: la página de Shopify solo necesita
# <div id="th-app"></div><script src=".../th-app.js"></script>
import json
scripts = re.findall(r"<script>(.*?)</script>", body, re.S)
markup = re.sub(r"<script>.*?</script>", "", body, flags=re.S).strip()
js = ("(function(){\n"
      "var root=document.getElementById('th-app');if(!root){root=document.createElement('div');root.id='th-app';document.body.appendChild(root);}\n"
      "document.head.insertAdjacentHTML('beforeend'," + json.dumps("\n".join(fonts) + "<style>" + scoped + shell + "</style>") + ");\n"
      "root.innerHTML=" + json.dumps(markup) + ";\n"
      "document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';\n"
      "})();\n" + "\n".join(scripts))
(here / "th-app.js").write_text(js)
print("ok", len(out), len(compact), "js", len(js))
