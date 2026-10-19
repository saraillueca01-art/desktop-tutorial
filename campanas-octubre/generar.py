"""Genera los emails de octubre (inauguración, Pilates y estética) para Mailchimp.

Uso: python3 generar.py  (crea los .html en esta carpeta y vistas previas en vista-previa/)
"""
import base64, os

BASE = 'https://saraillueca01-art.github.io/desktop-tutorial'
LANDING = BASE + '/facial-luminus/'

TEMAS = {
    'chakra': dict(fondo='#f4f1ea', tinta='#1d1d1b', suave='#6b6760', linea='#ece5d6', acento='#bf9628',
                   acento_texto='#8f6d14', claro='#faf6ea', boton_texto='#1d1d1b', barra='#1d1d1b', barra_texto='#e2be4a',
                   logo=BASE + '/facial-luminus/media/logo-chakra.png', logo_w=107, logo_h=120,
                   logo_alt='Chakra Wellness Center by Espai Vital'),
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
       '&location=C%2F%20Calpe%2C%205%2C%20Benissa')


def cuerpo_inauguracion(t):
    luminus = ['✦&nbsp; Diagnóstico facial con escáner', '✦&nbsp; Limpieza coreana y Lemon Gommage',
               '✦&nbsp; Masaje lifting Kobido', '✦&nbsp; Vitamina C liposomada',
               '✦&nbsp; Oxígeno Repair + ultrasonidos', '✦&nbsp; Mascarilla despigmentante', '✦&nbsp; Masaje de manos']
    return f'''          <tr>
            <td class="px" style="padding:28px 40px 0;">
              {caja(t, ['🗓️&nbsp; <strong>Lunes, 26 de octubre</strong>', '⏰&nbsp; A partir de las <strong>18:00 h</strong>', '📍&nbsp; <strong>C/ Calpe, 5, Benissa</strong> · junto a Espai Vital'])}
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
              <a href="{LANDING}?utm_source=email-inauguracion" style="text-decoration:none;">
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
              {boton(t, 'Reservar mi LUMINUS', LANDING + '?utm_source=email-inauguracion')}
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
def cuerpo_precios(servicio, cta_asunto):
    def f(t):
        mail = 'mailto:info@espaivitalbenissa.com?subject=' + cta_asunto.replace(' ', '%20')
        return f'''          <tr>
            <td class="px" style="padding:28px 40px 0;">
              {caja(t, ['✓&nbsp; Mantienes el <strong>precio actual</strong>', '✓&nbsp; Válido para quien reserve o contrate <strong>hasta el domingo 25 de octubre</strong>', '✓&nbsp; A partir del lunes 26 se aplican las nuevas tarifas'])}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 24px 8px;">
              {boton(t, 'Quiero mantener mi precio', mail)}
              <p style="margin:14px 0 0;font-size:14px;line-height:1.6;color:{t['suave']};">O llámanos al <a href="tel:+34965730697" style="color:{t['tinta']};font-weight:bold;">965 73 06 97</a> y te lo dejamos reservado.</p>
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
              <p style="margin:0;font-size:17px;line-height:1.5;color:{t['tinta']};">La inauguración del nuevo centro de Pilates Reformer y Chakra Wellness Center<br><strong>Lunes 26 de octubre · 18:00 h · C/ Calpe, 5</strong></p>
            </td>
          </tr>'''
    return f


EMAILS = {
    'email-inauguracion': email(
        'chakra', 'Te invitamos a nuestra inauguración', 'Lunes 26 de octubre a las 18:00 h. Y te presentamos LUMINUS, nuestro nuevo facial.',
        'Inauguración · Lunes 26 de octubre · 18:00 h', 'Estamos de enhorabuena',
        'Te invitamos a nuestra inauguración',
        'Abrimos nuestro nuevo centro, que une <strong style="color:#1d1d1b;">Pilates Reformer y Chakra Wellness Center</strong>. Ven a conocer un espacio para volver a ti y comparte con nosotros una tarde muy especial.',
        cuerpo_inauguracion, 'Chakra Wellness Center by Espai Vital', 'C/ Calpe, 5 · 03720 Benissa (Alicante) · junto a Espai Vital',
        '+34 633 38 81 52', 'info@chakracenterbenissa.com'),
    'email-pilates-precios': email(
        'espai', 'Última semana con el precio actual · Espai Pilates', 'Hasta el domingo 25 de octubre mantienes el precio de ahora.',
        'Última semana · Precio actual hasta el domingo 25', 'Espai Pilates',
        'Última semana con tu precio actual',
        'Con la apertura de nuestro nuevo centro de Pilates Reformer, el <strong style="color:#1f3458;">lunes 26 de octubre</strong> actualizamos nuestras tarifas. Si reservas o renuevas tu plan esta semana, mantienes el precio de ahora.',
        cuerpo_precios('tus clases de Pilates', 'Quiero mantener mi precio de Pilates'),
        'Espai Vital · Fisioteràpia i Estètica', 'Clínica Espai Vital SLP · C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)',
        '+34 965 73 06 97', 'info@espaivitalbenissa.com'),
    'email-estetica-precios': email(
        'espai', 'Última semana con el precio actual · Estética Espai Vital', 'Hasta el domingo 25 de octubre mantienes el precio de ahora en tus tratamientos.',
        'Última semana · Precio actual hasta el domingo 25', 'Estética Espai Vital',
        'Última semana con el precio actual',
        'A partir del <strong style="color:#1f3458;">lunes 26 de octubre</strong> actualizamos las tarifas de nuestros tratamientos de estética. Si reservas tu tratamiento o tu bono esta semana, te lo dejamos al precio de ahora.',
        cuerpo_precios('tus tratamientos de estética', 'Quiero mantener mi precio de estética'),
        'Espai Vital · Fisioteràpia i Estètica', 'Clínica Espai Vital SLP · C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)',
        '+34 965 73 06 97', 'info@espaivitalbenissa.com'),
}

if __name__ == '__main__':
    here = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(here)
    os.makedirs(os.path.join(here, 'vista-previa'), exist_ok=True)
    local = {
        BASE + '/facial-luminus/media/logo-chakra.png': ('facial-luminus/media/logo-chakra.png', 'image/png'),
        BASE + '/facial-luminus/media/email-mascarilla.jpg': ('facial-luminus/media/email-mascarilla.jpg', 'image/jpeg'),
        BASE + '/campanas-octubre/media/logo-espai-vital.png': ('campanas-octubre/media/logo-espai-vital.png', 'image/png'),
    }
    for nombre, html in EMAILS.items():
        open(os.path.join(here, nombre + '.html'), 'w').write(html)
        prev = html
        for url, (ruta, mime) in local.items():
            prev = prev.replace(url, f'data:{mime};base64,' + base64.b64encode(open(os.path.join(root, ruta), 'rb').read()).decode())
        open(os.path.join(here, 'vista-previa', nombre + '.html'), 'w').write(prev)
        print('ok', nombre)
