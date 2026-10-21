# Genera el email de bienvenida a la lista de espera (Shopify Messaging) y una vista previa
import sys
OUT = sys.argv[1]
LATA = sys.argv[2] if len(sys.argv) > 2 else "lata-misterio.jpg"
G = "#1f6b2e"; LIME = "#c9dc5c"; SOFT = "#f3f5ef"; INK = "#1b2a1f"; MUTED = "#5f6a5f"; LINE = "#e3e7dd"
DEEP = "#1e3322"; SERIF = "'Cormorant Garamond',Garamond,Georgia,'Times New Roman',serif"
F = "'Jost','Futura','Century Gothic','Helvetica Neue',Arial,sans-serif"

def email(saludo, unsub, direccion, preheader, tracking=""):
    # Lista de tareas: nada tachado todavía, porque el proyecto está empezando
    tareas = [
        ("Encontrar nuestro matcha", "Vamos a probar muchos hasta dar con el que nos enamore."),
        ("Darle forma", "La lata, las recetas de cada mood y hasta el último detalle."),
        ("Abrir las puertas", "Y que tú te enteres antes que nadie."),
    ]
    filas = "".join(f"""
          <tr><td style="padding:0 0 18px 0;font-family:{F};">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
              <td valign="top" style="padding:4px 16px 0 0;"><div style="width:16px;height:16px;border:1.5px solid {G};border-radius:4px;font-size:0;line-height:0;">&nbsp;</div></td>
              <td valign="top" style="font-family:{F};">
                <div style="font-size:18px;line-height:24px;color:{INK};">{t}</div>
                <div style="font-size:15px;line-height:22px;color:{MUTED};">{d}</div>
              </td>
            </tr></table>
          </td></tr>""" for t, d in tareas)
    return f"""<!doctype html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Ya estás dentro</title>
<style>
  body {{ margin:0; padding:0; background:#ffffff; -webkit-text-size-adjust:100%; }}
  a {{ color:{G}; }}
  @media (max-width:620px) {{
    .wrap {{ width:100% !important; }}
    .px {{ padding-left:22px !important; padding-right:22px !important; }}
    .h1 {{ font-size:34px !important; line-height:38px !important; }}
    .num {{ font-size:104px !important; line-height:100px !important; }}
  }}
</style>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">{preheader}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;">
<tr><td align="center" style="padding:24px 0 40px;">
  <table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

    <!-- Logo -->
    <tr><td align="center" class="px" style="padding:12px 40px 10px;font-family:{F};font-size:22px;letter-spacing:4px;color:{G};font-weight:300;">MOODMATCHA</td></tr>

    <!-- Lote 001, tachado: todavía no existe -->
    <tr><td align="center" class="px" style="padding:26px 40px 0;font-family:{F};">
      <div style="font-size:12px;line-height:18px;letter-spacing:5px;color:{MUTED};">LOTE</div>
      <div class="num" style="font-family:{SERIF};font-style:italic;font-weight:300;font-size:140px;line-height:130px;color:{DEEP};text-decoration:line-through;text-decoration-thickness:4px;letter-spacing:-2px;">001</div>
      <div style="font-size:24px;line-height:32px;color:{INK};font-weight:300;padding-top:8px;">Todavía <span style="text-decoration:line-through;">no existe</span> <span style="font-family:{SERIF};font-style:italic;color:{G};font-size:27px;">se está preparando</span>.</div>
    </td></tr>

    <!-- Bienvenida -->
    <tr><td class="px" style="padding:40px 48px 0;font-family:{F};">
      <div class="h1" style="font-size:40px;line-height:44px;color:{INK};font-weight:300;letter-spacing:-0.4px;">Ya estás dentro.</div>
      <p style="margin:18px 0 0;font-size:17px;line-height:27px;color:{INK};">{saludo}</p>
      <p style="margin:12px 0 0;font-size:17px;line-height:27px;color:{MUTED};">Te lo decimos tal cual: Mood Matcha acaba de empezar. Ahora mismo es una idea, unas ganas enormes y una lista de tareas. Nada más. Y nos hace mucha ilusión que te apuntes justo ahora, porque vas a verlo nacer desde dentro.</p>
    </td></tr>

    <!-- La lista de tareas -->
    <tr><td class="px" style="padding:38px 48px 0;font-family:{F};">
      <div style="font-size:26px;line-height:32px;color:{INK};font-weight:300;">Nuestra lista de tareas</div>
      <p style="margin:10px 0 24px;font-size:16px;line-height:25px;color:{MUTED};">Está entera por hacer. Cada vez que tachemos algo, te lo contaremos por aquí.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">{filas}
      </table>
    </td></tr>

    <!-- Que nos ayude a decidir -->
    <tr><td class="px" style="padding:20px 24px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:20px;background:{SOFT};">
        <tr><td style="padding:28px 30px 30px;font-family:{F};">
          <div style="font-size:24px;line-height:30px;color:{INK};font-weight:300;">Ayúdanos a decidir</div>
          <p style="margin:10px 0 0;font-size:16px;line-height:25px;color:{MUTED};">Queremos hacer un matcha para cada mood, y nadie mejor que tú para decirnos cómo. Responde a este email y cuéntanos:</p>
          <p style="margin:14px 0 0;font-size:16px;line-height:26px;color:{INK};">¿Cuál es tu mood de hoy: <span style="font-family:{SERIF};font-style:italic;font-size:19px;color:{G};">focus, calma, energía</span> o <span style="font-family:{SERIF};font-style:italic;font-size:19px;color:{G};">antojo</span>?<br>¿Y cómo te gusta el matcha: solo, en latte o con hielo?</p>
          <p style="margin:14px 0 0;font-size:15px;line-height:23px;color:{MUTED};">Leemos todas las respuestas.</p>
        </td></tr>
      </table>
    </td></tr>

    <!-- El reto -->
    <tr><td class="px" style="padding:20px 24px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:20px;background:{G};">
        <tr><td style="padding:28px 30px 30px;font-family:{F};color:#ffffff;">
          <div style="font-family:{SERIF};font-style:italic;font-size:30px;line-height:34px;color:#ffffff;">1 seguidor = 1 céntimo</div>
          <p style="margin:12px 0 0;font-size:16px;line-height:25px;color:#e7efd9;">Por cada persona que nos siga en Instagram, invertimos 1 céntimo en Mood Matcha. Allí también verás todo el proceso: las catas, las pruebas y los fallos. Ayúdanos a que exista.</p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;"><tr>
            <td style="border-radius:999px;background:#ffffff;">
              <a href="https://www.instagram.com/bymoodmatcha/" target="_blank" style="display:inline-block;padding:13px 26px;font-family:{F};font-size:15px;color:{G};text-decoration:none;border-radius:999px;">Seguir a @bymoodmatcha</a>
            </td>
          </tr></table>
          <p style="margin:14px 0 0;font-size:14px;line-height:22px;color:#e7efd9;">También estamos en <a href="https://www.tiktok.com/@bymoodmatcha" target="_blank" style="color:#ffffff;">TikTok</a>.</p>
        </td></tr>
      </table>
    </td></tr>

    <!-- Firma -->
    <tr><td class="px" style="padding:38px 48px 0;font-family:{F};">
      <p style="margin:0;font-size:16px;line-height:25px;color:{INK};">Un abrazo verde,<br>El equipo de Mood Matcha</p>
      <p style="margin:18px 0 0;font-size:14px;line-height:22px;color:{MUTED};">P. D. Solo te escribiremos cuando haya algo que contar. Prometido.</p>
    </td></tr>

    <!-- Pie -->
    <tr><td class="px" style="padding:40px 48px 0;">
      <div style="height:1px;background:{LINE};line-height:1px;font-size:0;">&nbsp;</div>
    </td></tr>
    <tr><td class="px" align="center" style="padding:20px 48px 0;font-family:{F};font-size:12px;line-height:19px;color:{MUTED};">
      Recibes este email porque te apuntaste en moodmatcha.es.{('<br>' + direccion) if direccion else ''}{('<br>' + unsub) if unsub else ''}
    </td></tr>

  </table>
</td></tr>
</table>
{tracking}
</body>
</html>
"""

PRE = "Mood Matcha todavía no existe. Y vas a verlo nacer desde dentro."
# Versión para Shopify Messaging: Shopify añade solo el pie legal con el enlace de baja
k = email("Hola, gracias por estar aquí desde el principio.",
          '<span style="color:#5f6a5f;">¿Ya no quieres recibir nuestros emails? {{ unsubscribe_link }}</span>', "", PRE,
          tracking="{{ open_tracking_block }}")
open(OUT + "/bienvenida-lista-espera.shopify.html", "w").write(k)
# Vista previa con datos de ejemplo
p = email("Hola, gracias por estar aquí desde el principio.",
          '<a href="#" style="color:#5f6a5f;">Darme de baja</a>',
          "Mood Matcha · Dirección de la empresa", PRE)
open(OUT + "/bienvenida-lista-espera.preview.html", "w").write(p)
print("ok")
