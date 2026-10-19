"""Plantilla del aviso de subida de tarifas (Pilates y estética). La usa generar.py."""
from urllib.parse import quote

BASE = 'https://saraillueca01-art.github.io/desktop-tutorial'
WA = 'https://wa.me/34648795983?text='
WA_RSVP = WA + quote('Hola, vengo del email y confirmo mi asistencia a la inauguración del lunes 26 😊')

MARCAS = {
    'pilates': dict(D='#4a4b48', A='#7db7a3', AT='#ffffff', TINT='#eef6f2', LINE='#dce9e3', K='#bfe0d4',
                    T='#2b2c2a', ETQ='#4f8a76',
                    logo=(BASE + '/campanas-octubre/media/logo-espai-pilates.png', 220, 94, 'Espai Pilates Reformer')),
    'espai': dict(D='#1f3458', A='#8fcdee', AT='#1f3458', TINT='#eef6fb', LINE='#d9e6f0', K='#8fcdee',
                  T='#1f3458', ETQ='#2f6f99',
                  logo=(BASE + '/campanas-octubre/media/logo-espai-vital.png', 220, 72, 'Espai Vital · Fisioteràpia i Estètica')),
}
SERIF = "Georgia,'Times New Roman',serif"
SANS = "'Helvetica Neue',Helvetica,Arial,sans-serif"
S = '#6b6f75'


def email_precios(marca, servicio, mensaje_wa, titulo, preheader, pie_nombre):
    m = MARCAS[marca]
    D, A, AT, TINT, LINE, K, T, ETQ = (m[k] for k in ('D', 'A', 'AT', 'TINT', 'LINE', 'K', 'T', 'ETQ'))
    logo = m['logo']
    url = WA + quote(mensaje_wa)

    def btn(texto, href, fondo=A, color=AT):
        return (f'<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>'
                f'<td align="center" bgcolor="{fondo}" style="background:{fondo};border-radius:3px;">'
                f'<a href="{href}" style="display:inline-block;padding:18px 38px;font-family:{SANS};font-size:13px;'
                f'font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{color};text-decoration:none;">{texto}</a>'
                f'</td></tr></table>')

    pasos = [('1', 'Pulsa el botón', 'Se abre WhatsApp con el mensaje ya escrito.'),
             ('2', 'Envíanos el mensaje', 'Solo tienes que darle a enviar.'),
             ('3', 'Listo', f'Te guardamos {servicio} al precio actual.')]
    pasos_html = ''.join(
        f'<tr><td width="46" valign="top" style="padding:14px 0;">'
        f'<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>'
        f'<td width="32" height="32" align="center" bgcolor="{A}" style="background:{A};border-radius:16px;'
        f'font-family:{SANS};font-size:14px;font-weight:bold;color:{AT};">{n}</td></tr></table></td>'
        f'<td valign="top" style="padding:14px 0;border-bottom:1px solid {LINE};font-family:{SANS};">'
        f'<strong style="font-size:16px;color:{T};">{t}</strong><br>'
        f'<span style="font-size:14px;line-height:1.5;color:{S};">{d}</span></td></tr>'
        for n, t, d in pasos)

    return f"""<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>{titulo}</title>
  <style>
    body {{ margin: 0; padding: 0; background: {TINT}; }}
    @media (max-width: 620px) {{
      .container {{ width: 100% !important; }}
      .px {{ padding-left: 26px !important; padding-right: 26px !important; }}
      .h1 {{ font-size: 32px !important; }}
      .day {{ font-size: 88px !important; }}
      .col {{ display: block !important; width: 100% !important; box-sizing: border-box; }}
      .gap {{ display: block !important; width: 100% !important; height: 12px !important; }}
    }}
  </style>
</head>
<body style="margin:0;padding:0;background:{TINT};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">{preheader}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:{TINT};">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;">
        <tr><td align="center" style="padding:0 0 10px;background:{TINT};font-family:{SANS};font-size:11px;color:{S};">¿No ves bien este email? <a href="*|ARCHIVE|*" style="color:{S};">Ábrelo en el navegador</a></td></tr>
        <tr><td align="center" style="padding:32px 24px 28px;">
          <img src="{logo[0]}" width="{logo[1]}" height="{logo[2]}" alt="{logo[3]}" style="display:block;border:0;width:{logo[1]}px;height:{logo[2]}px;">
        </td></tr>

        <tr><td class="px" align="center" bgcolor="{D}" style="background:{D};padding:52px 48px 50px;">
          <p style="margin:0;font-family:{SANS};font-size:11px;font-weight:bold;letter-spacing:5px;text-transform:uppercase;color:{K};">Aviso para nuestros clientes</p>
          <p class="h1" style="margin:16px 0 0;font-family:{SERIF};font-size:40px;line-height:1.15;color:#ffffff;">Tu precio actual,<br><em>solo hasta el domingo</em></p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:32px auto 0;"><tr><td align="center" style="border:1px solid {K};padding:18px 40px 20px;">
            <p style="margin:0;font-family:{SANS};font-size:11px;font-weight:bold;letter-spacing:5px;text-transform:uppercase;color:{K};">Último día</p>
            <p class="day" style="margin:4px 0 0;font-family:{SERIF};font-size:104px;line-height:1;color:#ffffff;">25</p>
            <p style="margin:6px 0 0;font-family:{SANS};font-size:12px;font-weight:bold;letter-spacing:6px;text-transform:uppercase;color:#ffffff;">Domingo · Octubre</p>
          </td></tr></table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:34px auto 0;"><tr><td>{btn('Mantener mi precio', url)}</td></tr></table>
          <p style="margin:14px 0 0;font-family:{SANS};font-size:13px;color:{K};">Te abrimos WhatsApp con el mensaje ya escrito</p>
        </td></tr>

        <tr><td class="px" align="center" style="padding:44px 56px 8px;">
          <p style="margin:0;font-family:{SERIF};font-size:22px;line-height:1.5;color:{T};">El <strong>lunes 26 de octubre</strong> abrimos nuestro nuevo centro y actualizamos nuestras tarifas.</p>
          <p style="margin:14px 0 0;font-family:{SANS};font-size:16px;line-height:1.7;color:{S};">Como gracias por confiar en nosotros, si reservas o renuevas {servicio} <strong style="color:{T};">esta semana</strong>, te mantenemos el precio de siempre.</p>
        </td></tr>

        <tr><td class="px" style="padding:30px 40px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            <td class="col" width="48%" valign="top" bgcolor="{A}" style="background:{A};padding:24px 18px;text-align:center;font-family:{SANS};">
              <p style="margin:0;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{AT};">Hasta el 25 de octubre</p>
              <p style="margin:10px 0 0;font-family:{SERIF};font-size:26px;color:{AT};">Precio actual</p>
              <p style="margin:6px 0 0;font-size:13px;color:{AT};">✓ Te lo guardamos</p>
            </td>
            <td class="gap" width="4%" style="font-size:0;line-height:0;">&nbsp;</td>
            <td class="col" width="48%" valign="top" bgcolor="#f3f4f4" style="background:#f3f4f4;padding:24px 18px;text-align:center;font-family:{SANS};">
              <p style="margin:0;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:{S};">Desde el 26 de octubre</p>
              <p style="margin:10px 0 0;font-family:{SERIF};font-size:26px;color:{S};">Nueva tarifa</p>
              <p style="margin:6px 0 0;font-size:13px;color:{S};">Precios actualizados</p>
            </td>
          </tr></table>
        </td></tr>

        <tr><td class="px" style="padding:40px 56px 0;">
          <p style="margin:0 0 4px;font-family:{SANS};font-size:11px;font-weight:bold;letter-spacing:4px;text-transform:uppercase;color:{ETQ};">Así de fácil, en 1 minuto</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">{pasos_html}</table>
        </td></tr>
        <tr><td align="center" style="padding:34px 24px 46px;">
          {btn('Quiero mi precio actual', url, D, '#ffffff')}
          <p style="margin:14px 0 0;font-family:{SANS};font-size:14px;color:{S};">¿Prefieres escribirnos tú? WhatsApp <a href="{url}" style="color:{T};font-weight:bold;white-space:nowrap;">648 79 59 83</a></p>
        </td></tr>

        <tr><td class="px" align="center" bgcolor="{TINT}" style="background:{TINT};padding:36px 40px;">
          <p style="margin:0;font-family:{SANS};font-size:11px;font-weight:bold;letter-spacing:4px;text-transform:uppercase;color:{ETQ};">Te invitamos a la inauguración</p>
          <p style="margin:10px 0 0;font-family:{SERIF};font-size:21px;line-height:1.4;color:{T};">Espai Pilates Reformer &amp; Chakra Wellness Center<br><strong>Lunes 26 de octubre · 18:00 h</strong></p>
          <p style="margin:8px 0 18px;font-family:{SANS};font-size:14px;color:{S};">C/ Benidoleig 31 · Benissa</p>
          <a href="{WA_RSVP}" style="font-family:{SANS};font-size:13px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:{T};">Confirmar asistencia →</a>
        </td></tr>

        <tr><td align="center" style="padding:28px 24px 32px;font-family:{SANS};font-size:12px;line-height:1.7;color:{S};">
          <strong style="color:{T};">{pie_nombre}</strong><br>
          Clínica Espai Vital SLP · C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)<br>
          <a href="{url}" style="color:{S};">WhatsApp 648 79 59 83</a> · <a href="mailto:info@espaivitalbenissa.com" style="color:{S};">info@espaivitalbenissa.com</a><br><br>
          Recibes este email porque eres cliente o aceptaste recibir novedades de nuestro centro.<br>
          <a href="*|UPDATE_PROFILE|*" style="color:{S};">Actualizar mis datos</a> · <a href="*|UNSUB|*" style="color:{S};">Darme de baja</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
"""
