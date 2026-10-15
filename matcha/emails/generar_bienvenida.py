# Genera el email de bienvenida (versión Klaviyo con etiquetas) y una versión de vista previa
import sys
OUT = sys.argv[1]
LATA = sys.argv[2] if len(sys.argv) > 2 else "lata-misterio.jpg"
G = "#1f6b2e"; LIME = "#c9dc5c"; SOFT = "#f3f5ef"; INK = "#1b2a1f"; MUTED = "#5f6a5f"; LINE = "#e3e7dd"
F = "'Jost','Futura','Century Gothic','Helvetica Neue',Arial,sans-serif"

def email(saludo, unsub, direccion, preheader):
    moods = [("Focus", "Solo, con agua a 80 °C"), ("Calma", "Latte templado de avena"),
             ("Energía", "Con hielo y tónica"), ("Antojo", "Affogato con vainilla")]
    mood_cells = "".join(f'''
              <td class="m-col" width="25%" valign="top" style="padding:0 5px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:{SOFT};border-radius:14px;">
                  <tr><td style="padding:16px 14px;font-family:{F};">
                    <div style="font-size:18px;line-height:22px;color:{G};font-weight:400;">{n}</div>
                    <div style="font-size:13px;line-height:18px;color:{MUTED};padding-top:4px;">{r}</div>
                  </td></tr>
                </table>
              </td>''' for n, r in moods)
    detalles = [
        ("Primera cosecha", "Las hojas nuevas de la primavera, molidas en molino de piedra."),
        ("Sombreado al menos 20 días", "Así la hoja gana color, dulzor y ese toque umami."),
        ("Verde intenso, textura cremosa", "Notas vegetales que combinan de maravilla con leche o bebida vegetal."),
        ("30 g, unas 15 tazas", "2 g por taza. Caliente o con hielo, solo o en latte."),
    ]
    det_rows = "".join(f'''
          <tr><td style="padding:0 0 16px 0;font-family:{F};">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
              <td valign="top" style="padding:7px 14px 0 0;"><div style="width:8px;height:8px;border-radius:8px;background:{LIME};font-size:0;line-height:0;">&nbsp;</div></td>
              <td valign="top" style="font-family:{F};">
                <div style="font-size:17px;line-height:24px;color:{INK};">{t}</div>
                <div style="font-size:15px;line-height:22px;color:{MUTED};">{d}</div>
              </td>
            </tr></table>
          </td></tr>''' for t, d in detalles)
    return f'''<!doctype html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Ya estás en la lista</title>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap" rel="stylesheet">
<style>
  body {{ margin:0; padding:0; background:#ffffff; -webkit-text-size-adjust:100%; }}
  a {{ color:{G}; }}
  @media (max-width:620px) {{
    .wrap {{ width:100% !important; }}
    .px {{ padding-left:22px !important; padding-right:22px !important; }}
    .h1 {{ font-size:34px !important; line-height:38px !important; }}
    .hero-img {{ width:100% !important; }}
    .m-col {{ display:block !important; width:100% !important; padding:0 0 10px 0 !important; }}
  }}
</style>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">{preheader}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;">
<tr><td align="center" style="padding:24px 0 40px;">
  <table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

    <!-- Logo -->
    <tr><td align="center" class="px" style="padding:12px 40px 26px;font-family:{F};font-size:22px;letter-spacing:4px;color:{G};font-weight:300;">MOODMATCHA</td></tr>

    <!-- La lata en penumbra: todavía no se enseña -->
    <tr><td class="px" style="padding:0 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:24px;background:#0b140c;">
        <tr><td align="center" style="padding:0;">
          <img class="hero-img" src="{LATA}" width="552" alt="La lata de Mood Matcha en penumbra, todavía en secreto" style="display:block;width:552px;max-width:100%;height:auto;border:0;border-radius:24px 24px 0 0;">
        </td></tr>
        <tr><td align="center" style="padding:4px 30px 30px;font-family:{F};">
          <div style="font-size:13px;line-height:20px;letter-spacing:3px;color:#c9dc5c;">TODAVÍA EN SECRETO</div>
          <div style="font-size:16px;line-height:24px;color:#cfd8c6;padding-top:6px;">Aún no podemos enseñártela. Pero ya puedes ir eligiendo tu mood.</div>
        </td></tr>
      </table>
    </td></tr>

    <!-- Bienvenida -->
    <tr><td class="px" style="padding:38px 48px 0;font-family:{F};">
      <div class="h1" style="font-size:42px;line-height:46px;color:{INK};font-weight:300;letter-spacing:-0.4px;">Ya estás en la lista.</div>
      <p style="margin:18px 0 0;font-size:17px;line-height:27px;color:{INK};">{saludo}</p>
      <p style="margin:12px 0 0;font-size:17px;line-height:27px;color:{MUTED};">Te apuntaste cuando la web todavía estaba cerrada, y eso te pone delante de la cola. El día que abramos, serás de las primeras personas en enterarte y en poder pedir tu lata, antes de que lo anunciemos en ningún otro sitio.</p>
    </td></tr>

    <!-- Qué es -->
    <tr><td class="px" style="padding:40px 48px 0;font-family:{F};">
      <div style="font-size:26px;line-height:32px;color:{INK};font-weight:300;">Lo que estamos preparando</div>
      <p style="margin:10px 0 24px;font-size:16px;line-height:25px;color:{MUTED};">Una sola lata, <strong style="color:{INK};font-weight:400;">Matcha Uji</strong>. Te adelantamos lo que hay dentro:</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">{det_rows}
      </table>
    </td></tr>

    <!-- Moods -->
    <tr><td class="px" style="padding:22px 43px 0;font-family:{F};">
      <div style="font-size:26px;line-height:32px;color:{INK};font-weight:300;padding:0 5px 16px;">Un matcha para cada mood</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>{mood_cells}
      </tr></table>
    </td></tr>

    <!-- Lanzamiento -->
    <tr><td class="px" style="padding:34px 24px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:20px;background:{G};">
        <tr><td style="padding:30px 30px 32px;font-family:{F};color:#ffffff;">
          <div style="font-size:24px;line-height:30px;font-weight:300;">Cuando abramos</div>
          <p style="margin:12px 0 0;font-size:16px;line-height:25px;color:#e7efd9;">Envío en 24–72 h, gratis a partir de 35 €, y packs de dos y tres latas para ahorrar. Te lo contaremos todo a ti primero, desde este mismo email.</p>
        </td></tr>
      </table>
    </td></tr>

    <!-- Respuesta -->
    <tr><td class="px" style="padding:38px 48px 0;font-family:{F};">
      <div style="font-size:24px;line-height:30px;color:{INK};font-weight:300;">Mientras tanto, cuéntanos</div>
      <p style="margin:10px 0 0;font-size:16px;line-height:25px;color:{MUTED};">¿Cuál es tu mood de hoy: focus, calma, energía o antojo? Responde a este email con una palabra y te mandamos tu receta para estrenarlo.</p>
    </td></tr>
    <tr><td class="px" align="left" style="padding:24px 48px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td style="border-radius:999px;background:{G};">
          <a href="https://www.instagram.com/bymoodmatcha/" target="_blank" style="display:inline-block;padding:14px 28px;font-family:{F};font-size:15px;color:#ffffff;text-decoration:none;border-radius:999px;">Síguenos en Instagram</a>
        </td>
      </tr></table>
      <p style="margin:14px 0 0;font-family:{F};font-size:14px;line-height:22px;color:{MUTED};">Nos encontrarás como <a href="https://www.instagram.com/bymoodmatcha/" target="_blank" style="color:{G};">@bymoodmatcha</a> en Instagram y en <a href="https://www.tiktok.com/@bymoodmatcha" target="_blank" style="color:{G};">TikTok</a>.</p>
    </td></tr>

    <!-- Firma -->
    <tr><td class="px" style="padding:38px 48px 0;font-family:{F};">
      <p style="margin:0;font-size:16px;line-height:25px;color:{INK};">Un abrazo verde,<br>El equipo de Mood Matcha</p>
      <p style="margin:18px 0 0;font-size:14px;line-height:22px;color:{MUTED};">P. D. Guarda este email. El día de la apertura te escribiremos desde aquí.</p>
    </td></tr>

    <!-- Pie -->
    <tr><td class="px" style="padding:40px 48px 0;">
      <div style="height:1px;background:{LINE};line-height:1px;font-size:0;">&nbsp;</div>
    </td></tr>
    <tr><td class="px" align="center" style="padding:20px 48px 0;font-family:{F};font-size:12px;line-height:19px;color:{MUTED};">
      Recibes este email porque te apuntaste en moodmatcha.es.<br>
      {direccion}<br>
      {unsub}
    </td></tr>

  </table>
</td></tr>
</table>
</body>
</html>
'''

PRE = "Todavía no podemos enseñártela, pero tú vas a ser de los primeros en verla."
# Versión para Klaviyo (etiquetas de Klaviyo)
k = email("Hola{% if first_name %} {{ first_name }}{% endif %}, gracias por estar aquí desde el principio.",
          '<span style="color:#5f6a5f;">{% unsubscribe \'Darme de baja\' %}</span>',
          "{{ organization.name }} · {{ organization.full_address }}", PRE)
open(OUT + "/bienvenida-lista-espera.klaviyo.html", "w").write(k)
# Vista previa con datos de ejemplo
p = email("Hola, gracias por estar aquí desde el principio.",
          '<a href="#" style="color:#5f6a5f;">Darme de baja</a>',
          "Mood Matcha · Dirección de la empresa", PRE)
open(OUT + "/bienvenida-lista-espera.preview.html", "w").write(p)
print("ok")
