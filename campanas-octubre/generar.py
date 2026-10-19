"""Genera los emails de octubre (inauguración, Pilates y estética) para Mailchimp.

Uso: python3 generar.py  (crea los .html en esta carpeta y vistas previas en vista-previa/)
"""
import base64, os

BASE = 'https://saraillueca01-art.github.io/desktop-tutorial'
LANDING = BASE + '/facial-luminus/'
from urllib.parse import quote
WA = 'https://wa.me/34648795983?text='
def wa(msg): return WA + quote(msg)
WA_LUMINUS = wa('Hola, vengo del email y quiero mi LUMINUS 😊')

TEMAS = {
    'chakra': dict(fondo='#f4f1ea', tinta='#1d1d1b', suave='#6b6760', linea='#ece5d6', acento='#bf9628',
                   acento_texto='#8f6d14', claro='#faf6ea', boton_texto='#1d1d1b', barra='#1d1d1b', barra_texto='#e2be4a',
                   logo=BASE + '/facial-luminus/media/logo-chakra.png', logo_w=107, logo_h=120,
                   logo_alt='Chakra Wellness Center by Espai Vital'),
    'pilates': dict(fondo='#f1f6f4', tinta='#575855', suave='#6f716d', linea='#dde9e4', acento='#7db7a3',
                    acento_texto='#4f8a76', claro='#eaf4f0', boton_texto='#ffffff', barra='#575855', barra_texto='#bfe0d4',
                    logo=BASE + '/campanas-octubre/media/logo-espai-pilates.png', logo_w=220, logo_h=94,
                    logo_alt='Espai Pilates Reformer'),
    'espai': dict(fondo='#eef5fa', tinta='#1f3458', suave='#5d6b80', linea='#d9e6f0', acento='#8fcdee',
                  acento_texto='#2f6f99', claro='#eaf6fc', boton_texto='#1f3458', barra='#1f3458', barra_texto='#8fcdee',
                  logo=BASE + '/campanas-octubre/media/logo-espai-vital.png', logo_w=220, logo_h=72,
                  logo_alt='Espai Vital · Fisioteràpia i Estètica'),
}


def boton(t, texto, url):
    return f'''<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
                  <td align="center" bgcolor="{t['acento']}" style="border-radius:4px;background:{t['acento']};">
                    <a href="{url}" style="display:inline-block;padding:18px 34px;font-size:13px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{t['boton_texto']};text-decoration:none;">{texto}</a>
                  </td></tr></table>'''


def caja(t, filas):
    celdas = ''.join(f'<p style="margin:0;padding:10px 0;border-bottom:1px solid {t["linea"]};font-size:16px;line-height:1.5;color:{t["tinta"]};">{f}</p>' for f in filas)
    return f'''<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:{t['claro']};border:1px solid {t['linea']};border-radius:12px;">
                <tr><td style="padding:14px 24px 18px;">{celdas}</td></tr></table>'''


def email(tema, titulo, preheader, barra, kicker, h1, intro, cuerpo, pie_nombre, pie_dir, pie_tel, pie_mail):
    t = TEMAS[tema]
    return f'''<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>{titulo}</title>
  <style>
    body {{ margin: 0; padding: 0; background: {t['fondo']}; }}
    a {{ color: {t['acento_texto']}; }}
    @media (max-width: 620px) {{
      .container {{ width: 100% !important; }}
      .px {{ padding-left: 24px !important; padding-right: 24px !important; }}
      .h1 {{ font-size: 36px !important; }}
      .price {{ font-size: 60px !important; }}
    }}
  </style>
</head>
<body style="margin:0;padding:0;background:{t['fondo']};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">{preheader}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:{t['fondo']};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:{t['tinta']};">
          <tr>
            <td align="center" style="background:{t['fondo']};padding:0 0 10px;font-size:11px;color:{t['suave']};">
              ¿No ves bien este email? <a href="*|ARCHIVE|*" style="color:{t['suave']};">Ábrelo en el navegador</a>
            </td>
          </tr>
          <tr>
            <td align="center" style="background:{t['barra']};color:{t['barra_texto']};font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;padding:12px 16px;">{barra}</td>
          </tr>
          <tr>
            <td align="center" style="padding:32px 24px 8px;">
              <img src="{t['logo']}" width="{t['logo_w']}" height="{t['logo_h']}" alt="{t['logo_alt']}" style="display:block;border:0;width:{t['logo_w']}px;height:{t['logo_h']}px;">
            </td>
          </tr>
          <tr>
            <td class="px" align="center" style="padding:28px 48px 8px;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{t['acento_texto']};">{kicker}</p>
              <h1 class="h1" style="margin:0;font-size:44px;line-height:1.1;font-weight:normal;letter-spacing:-1px;color:{t['tinta']};">{h1}</h1>
              <p style="margin:18px 0 0;font-size:17px;line-height:1.6;color:{t['suave']};">{intro}</p>
            </td>
          </tr>
{cuerpo(t)}
          <tr>
            <td align="center" style="padding:28px 24px 32px;font-size:12px;line-height:1.7;color:{t['suave']};border-top:1px solid {t['linea']};">
              <strong style="color:{t['tinta']};">{pie_nombre}</strong><br>
              {pie_dir}<br>
              <a href="tel:{pie_tel.replace(' ', '')}" style="color:{t['suave']};">{pie_tel}</a> · <a href="mailto:{pie_mail}" style="color:{t['suave']};">{pie_mail}</a><br><br>
              Recibes este email porque eres cliente o aceptaste recibir novedades de nuestro centro.<br>
              <a href="*|UPDATE_PROFILE|*" style="color:{t['suave']};">Actualizar mis datos</a> · <a href="*|UNSUB|*" style="color:{t['suave']};">Darme de baja</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
'''


# ---------- 1. Inauguración (Chakra) ----------
CAL = ('https://calendar.google.com/calendar/render?action=TEMPLATE'
       '&text=Inauguraci%C3%B3n%20Pilates%20Reformer%20%2B%20Chakra%20Wellness%20Center'
       '&dates=20261026T180000/20261026T210000&ctz=Europe/Madrid'
       '&location=C%2F%20Benidoleig%2031%2C%20Benissa')


def cuerpo_inauguracion(t):
    luminus = ['✦&nbsp; Diagnóstico facial con escáner', '✦&nbsp; Limpieza coreana y Lemon Gommage',
               '✦&nbsp; Masaje lifting Kobido', '✦&nbsp; Vitamina C liposomada',
               '✦&nbsp; Oxígeno Repair + ultrasonidos', '✦&nbsp; Mascarilla despigmentante', '✦&nbsp; Masaje de manos']
    return f'''          <tr>
            <td class="px" style="padding:28px 40px 0;">
              {caja(t, ['🗓️&nbsp; <strong>Lunes, 26 de octubre</strong>', '⏰&nbsp; A partir de las <strong>18:00 h</strong>', '📍&nbsp; <strong>C/ Benidoleig 31, Benissa</strong> · junto a Espai Vital'])}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 24px 8px;">
              {boton(t, 'Añadir a mi calendario', CAL)}
              <p style="margin:12px 0 0;font-size:13px;color:{t['suave']};">Una tarde llena de experiencias y sorpresas</p>
            </td>
          </tr>
          <tr>
            <td class="px" style="padding:44px 40px 0;">
              <a href="{WA_LUMINUS}" style="text-decoration:none;">
                <img src="{BASE}/facial-luminus/media/email-mascarilla.jpg" width="520" alt="Tratamiento facial Luminus" style="display:block;border:0;width:100%;max-width:520px;height:auto;border-radius:12px;">
              </a>
            </td>
          </tr>
          <tr>
            <td class="px" align="center" style="padding:28px 48px 0;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{t['acento_texto']};">Para celebrarlo</p>
              <p style="margin:0;font-size:30px;line-height:1.2;color:{t['tinta']};">Presentamos LUMINUS, nuestro nuevo facial</p>
              <p style="margin:14px 0 0;font-size:16px;line-height:1.6;color:{t['suave']};">Después del verano la piel puede verse apagada, con manchas y sin luz. LUMINUS es un ritual facial de 75 minutos para devolverle a tu rostro luz, frescura y vitalidad.</p>
            </td>
          </tr>
          <tr>
            <td class="px" style="padding:24px 48px 0;">
              {''.join(f'<p style="margin:0;padding:9px 0;border-bottom:1px solid {t["linea"]};font-size:15px;line-height:1.5;color:{t["tinta"]};">{x}</p>' for x in luminus)}
            </td>
          </tr>
          <tr>
            <td class="px" align="center" style="padding:28px 40px 0;">
              <p style="margin:0;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{t['acento_texto']};">Precio especial de lanzamiento</p>
              <p class="price" style="margin:8px 0 6px;font-size:72px;line-height:1;color:{t['acento']};">59&nbsp;€</p>
              <p style="margin:0;font-size:15px;color:{t['suave']};">75 minutos de cuidado para ti · Plazas limitadas</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:24px 24px 8px;">
              {boton(t, 'Reservar mi LUMINUS', WA_LUMINUS)}
              <p style="margin:12px 0 0;font-size:13px;color:{t['suave']};">Te abrimos WhatsApp con el mensaje ya escrito</p>
            </td>
          </tr>
          <tr>
            <td class="px" align="center" style="padding:24px 48px 36px;">
              <p style="margin:0;font-size:14px;line-height:1.6;color:{t['suave']};">Y este año, para las manchas más rebeldes, también tenemos <strong style="color:{t['tinta']};">tecnología láser DPL</strong>.</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="background:{t['barra']};padding:34px 24px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{t['barra_texto']};">Lunes 26 de octubre · 18:00 h</p>
              <p style="margin:0;font-size:20px;color:#ffffff;">Un espacio para volver a ti. ¡Te esperamos!</p>
            </td>
          </tr>'''


# ---------- 2 y 3. Subida de precios (Espai Vital) ----------
def cuerpo_precios(servicio, mensaje_wa):
    def f(t):
        mail = wa(mensaje_wa)
        return f'''          <tr>
            <td class="px" style="padding:28px 40px 0;">
              {caja(t, ['✓&nbsp; Mantienes el <strong>precio actual</strong>', '✓&nbsp; Válido para quien reserve o contrate <strong>hasta el domingo 25 de octubre</strong>', '✓&nbsp; A partir del lunes 26 se aplican las nuevas tarifas'])}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 24px 8px;">
              {boton(t, 'Quiero mantener mi precio', mail)}
              <p style="margin:14px 0 0;font-size:14px;line-height:1.6;color:{t['suave']};">Te abrimos WhatsApp con el mensaje ya escrito. También puedes escribirnos al <a href="{mail}" style="color:{t['tinta']};font-weight:bold;">648 79 59 83</a>.</p>
            </td>
          </tr>
          <tr>
            <td class="px" align="center" style="padding:32px 48px 36px;">
              <p style="margin:0;font-size:16px;line-height:1.6;color:{t['suave']};">Gracias por confiar en nosotros. Queremos que sigas disfrutando de {servicio} con las mejores condiciones.</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="background:{t['claro']};padding:30px 24px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{t['acento_texto']};">Y no te pierdas</p>
              <p style="margin:0;font-size:17px;line-height:1.5;color:{t['tinta']};">La inauguración del nuevo centro de Pilates Reformer y Chakra Wellness Center<br><strong>Lunes 26 de octubre · 18:00 h · C/ Benidoleig 31</strong></p>
            </td>
          </tr>'''
    return f


def email_invitacion():
    """Invitación a la inauguración: estilo elegante negro y dorado."""
    G = '#c9a43a'; GL = '#e2be4a'; N = '#141413'; C = '#f7f2e8'; T = '#1d1d1b'; S = '#6b6760'
    serif = "Georgia,'Times New Roman',serif"
    sans = "'Helvetica Neue',Helvetica,Arial,sans-serif"
    luminus = ['Diagnóstico facial con escáner', 'Limpieza coreana y Lemon Gommage', 'Masaje lifting Kobido',
               'Vitamina C liposomada', 'Oxígeno Repair + ultrasonidos', 'Mascarilla despigmentante', 'Masaje de manos']
    lista = ''.join(f'<tr><td style="padding:9px 0;border-bottom:1px solid #e8dfcc;font-family:{sans};font-size:15px;color:{T};"><span style="color:{G};">—</span>&nbsp;&nbsp;{x}</td></tr>' for x in luminus)
    def btn(texto, url, fondo=G, color=N):
        return f'<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td align="center" bgcolor="{fondo}" style="background:{fondo};"><a href="{url}" style="display:inline-block;padding:17px 36px;font-family:{sans};font-size:12px;font-weight:bold;letter-spacing:4px;text-transform:uppercase;color:{color};text-decoration:none;">{texto}</a></td></tr></table>'
    return f"""<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>Te invitamos a nuestra inauguración</title>
  <style>
    body {{ margin: 0; padding: 0; background: #e9e4da; }}
    @media (max-width: 620px) {{
      .container {{ width: 100% !important; }}
      .px {{ padding-left: 28px !important; padding-right: 28px !important; }}
      .big {{ font-size: 30px !important; letter-spacing: 3px !important; }}
      .wide {{ letter-spacing: 4px !important; }}
      .day {{ font-size: 96px !important; }}
      .price {{ font-size: 60px !important; }}
    }}
  </style>
</head>
<body style="margin:0;padding:0;background:#e9e4da;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Lunes 26 de octubre a las 18:00 h. Te esperamos para celebrarlo juntos.&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#e9e4da;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;">

        <tr><td align="center" style="padding:0 0 10px;background:#e9e4da;font-family:{sans};font-size:11px;color:{S};">¿No ves bien este email? <a href="*|ARCHIVE|*" style="color:{S};">Ábrelo en el navegador</a></td></tr>

        <tr><td align="center" style="padding:36px 24px 30px;background:#ffffff;">
          <img src="{BASE}/facial-luminus/media/logo-chakra.png" width="98" height="110" alt="Chakra Wellness Center by Espai Vital" style="display:block;border:0;width:98px;height:110px;">
        </td></tr>

        <!-- Invitación -->
        <tr><td class="px" align="center" bgcolor="{N}" style="background:{N};padding:56px 48px 52px;">
          <p style="margin:0;font-family:{sans};font-size:11px;font-weight:bold;letter-spacing:6px;text-transform:uppercase;color:{GL};">Te invitamos a la</p>
          <p class="big" style="margin:18px 0 0;font-family:{serif};font-size:46px;line-height:1.05;letter-spacing:6px;text-transform:uppercase;color:#ffffff;">Inauguración</p>
          <p style="margin:16px 0 0;font-family:{serif};font-style:italic;font-size:19px;line-height:1.5;color:#d8d2c6;">de nuestro nuevo centro<br>Pilates Reformer &amp; Chakra Wellness Center</p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:34px auto 0;"><tr><td width="64" style="border-top:1px solid {G};font-size:0;line-height:0;">&nbsp;</td></tr></table>
          <p style="margin:30px 0 0;font-family:{sans};font-size:12px;font-weight:bold;letter-spacing:6px;text-transform:uppercase;color:{GL};">Lunes</p>
          <p class="day" style="margin:4px 0 0;font-family:{serif};font-size:120px;line-height:1;color:{G};">26</p>
          <p class="wide" style="margin:6px 0 0;font-family:{sans};font-size:13px;font-weight:bold;letter-spacing:8px;text-transform:uppercase;color:#ffffff;">Octubre · 18:00 h</p>
          <p style="margin:26px 0 0;font-family:{sans};font-size:15px;line-height:1.6;color:#d8d2c6;">C/ Benidoleig 31 · Benissa<br><span style="color:#9c968b;">junto a Espai Vital</span></p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:36px auto 0;"><tr><td>{btn('Añadir a mi calendario', CAL)}</td></tr></table>
        </td></tr>

        <tr><td class="px" align="center" style="padding:44px 56px 46px;background:#ffffff;">
          <p style="margin:0;font-family:{serif};font-size:24px;line-height:1.45;color:{T};">Ven a conocer <em>un espacio para volver a ti</em> y comparte con nosotros una tarde llena de experiencias y sorpresas.</p>
        </td></tr>

        <!-- LUMINUS -->
        <tr><td bgcolor="{C}" style="background:{C};padding:0;">
          <a href="{WA_LUMINUS}" style="text-decoration:none;"><img src="{BASE}/facial-luminus/media/email-mascarilla.jpg" width="600" alt="Tratamiento facial LUMINUS" style="display:block;border:0;width:100%;max-width:600px;height:auto;"></a>
        </td></tr>
        <tr><td class="px" align="center" bgcolor="{C}" style="background:{C};padding:40px 56px 8px;">
          <p style="margin:0;font-family:{sans};font-size:11px;font-weight:bold;letter-spacing:6px;text-transform:uppercase;color:#8f6d14;">Para celebrarlo presentamos</p>
          <p class="big" style="margin:14px 0 0;font-family:{serif};font-size:50px;line-height:1;letter-spacing:10px;color:{T};">LUMINUS</p>
          <p style="margin:10px 0 0;font-family:{serif};font-style:italic;font-size:18px;color:{S};">Nuestro nuevo ritual facial de 75 minutos</p>
          <p style="margin:20px 0 0;font-family:{sans};font-size:16px;line-height:1.7;color:{S};">Para devolver a tu rostro la luz, la frescura y la vitalidad que el verano se llevó.</p>
        </td></tr>
        <tr><td class="px" bgcolor="{C}" style="background:{C};padding:22px 80px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">{lista}</table>
        </td></tr>
        <tr><td class="px" align="center" bgcolor="{C}" style="background:{C};padding:36px 48px 44px;">
          <p style="margin:0;font-family:{sans};font-size:11px;font-weight:bold;letter-spacing:5px;text-transform:uppercase;color:#8f6d14;">Precio especial de lanzamiento</p>
          <p class="price" style="margin:10px 0 4px;font-family:{serif};font-size:72px;line-height:1;color:{G};">59&nbsp;€</p>
          <p style="margin:0 0 26px;font-family:{sans};font-size:14px;color:{S};">Plazas limitadas</p>
          {btn('Reservar mi LUMINUS', WA_LUMINUS, N, GL)}
          <p style="margin:14px 0 0;font-family:{sans};font-size:13px;color:{S};">Te abrimos WhatsApp con el mensaje ya escrito</p>
          <p style="margin:28px 0 0;font-family:{sans};font-size:14px;line-height:1.6;color:{S};">Y para las manchas más rebeldes, este año contamos con <strong style="color:{T};">láser DPL</strong>.</p>
        </td></tr>

        <tr><td align="center" bgcolor="{N}" style="background:{N};padding:30px 24px;">
          <p style="margin:0;font-family:{serif};font-style:italic;font-size:20px;color:#ffffff;">Nos encantará verte allí</p>
          <p style="margin:8px 0 0;font-family:{sans};font-size:11px;font-weight:bold;letter-spacing:5px;text-transform:uppercase;color:{GL};">Lunes 26 de octubre · 18:00 h</p>
        </td></tr>

        <tr><td align="center" style="padding:28px 24px 32px;font-family:{sans};font-size:12px;line-height:1.7;color:{S};">
          <strong style="color:{T};">Chakra Wellness Center by Espai Vital</strong><br>
          C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)<br>
          <a href="tel:+34633388152" style="color:{S};">+34 633 38 81 52</a> · <a href="mailto:info@chakracenterbenissa.com" style="color:{S};">info@chakracenterbenissa.com</a><br><br>
          Recibes este email porque eres cliente o aceptaste recibir novedades de nuestro centro.<br>
          <a href="*|UPDATE_PROFILE|*" style="color:{S};">Actualizar mis datos</a> · <a href="*|UNSUB|*" style="color:{S};">Darme de baja</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
"""


EMAILS = {
    'email-inauguracion': email_invitacion(),
    'email-pilates-precios': email(
        'pilates', 'Última semana con el precio actual · Espai Pilates Reformer', 'Hasta el domingo 25 de octubre mantienes el precio de ahora.',
        'Última semana · Precio actual hasta el domingo 25', 'Espai Pilates Reformer',
        'Última semana con tu precio actual',
        'Con la apertura de nuestro nuevo centro de Pilates Reformer, el <strong style="color:#575855;">lunes 26 de octubre</strong> actualizamos nuestras tarifas. Si reservas o renuevas tu plan esta semana, mantienes el precio de ahora.',
        cuerpo_precios('tus clases de Pilates', 'Hola, vengo del email y quiero mantener mi tarifa actual de Pilates 😊'),
        'Espai Pilates Reformer · by Espai Vital', 'Clínica Espai Vital SLP · C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)',
        '+34 648 79 59 83', 'info@espaivitalbenissa.com'),
    'email-estetica-precios': email(
        'espai', 'Última semana con el precio actual · Estética Espai Vital', 'Hasta el domingo 25 de octubre mantienes el precio de ahora en tus tratamientos.',
        'Última semana · Precio actual hasta el domingo 25', 'Estética Espai Vital',
        'Última semana con el precio actual',
        'A partir del <strong style="color:#1f3458;">lunes 26 de octubre</strong> actualizamos las tarifas de nuestros tratamientos de estética. Si reservas tu tratamiento o tu bono esta semana, te lo dejamos al precio de ahora.',
        cuerpo_precios('tus tratamientos de estética', 'Hola, vengo del email y quiero mantener mi tarifa actual de estética 😊'),
        'Espai Vital · Fisioteràpia i Estètica', 'Clínica Espai Vital SLP · C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)',
        '+34 648 79 59 83', 'info@espaivitalbenissa.com'),
}

if __name__ == '__main__':
    here = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(here)
    os.makedirs(os.path.join(here, 'vista-previa'), exist_ok=True)
    local = {
        BASE + '/facial-luminus/media/logo-chakra.png': ('facial-luminus/media/logo-chakra.png', 'image/png'),
        BASE + '/facial-luminus/media/email-mascarilla.jpg': ('facial-luminus/media/email-mascarilla.jpg', 'image/jpeg'),
        BASE + '/campanas-octubre/media/logo-espai-vital.png': ('campanas-octubre/media/logo-espai-vital.png', 'image/png'),
        BASE + '/campanas-octubre/media/logo-espai-pilates.png': ('campanas-octubre/media/logo-espai-pilates.png', 'image/png'),
    }
    for nombre, html in EMAILS.items():
        open(os.path.join(here, nombre + '.html'), 'w').write(html)
        prev = html
        for url, (ruta, mime) in local.items():
            prev = prev.replace(url, f'data:{mime};base64,' + base64.b64encode(open(os.path.join(root, ruta), 'rb').read()).decode())
        open(os.path.join(here, 'vista-previa', nombre + '.html'), 'w').write(prev)
        print('ok', nombre)
