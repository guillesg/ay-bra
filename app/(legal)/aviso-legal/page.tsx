import type { Metadata } from "next";

export const metadata: Metadata = { title: "Aviso legal | AY&BRA" };

export default function LegalNotice() {
  return (
    <>
      <h1>Aviso legal</h1>
      <section>
        <h2>1. Identificación del titular</h2>
        <dl className="space-y-3">
          <div><dt className="font-semibold">Nombre comercial</dt><dd>AY&BRA Inmobiliaria</dd></div>
          <div><dt className="font-semibold">Titular o razón social</dt><dd>Pendiente de facilitar por el titular.</dd></div>
          <div><dt className="font-semibold">NIF / CIF</dt><dd>Pendiente de facilitar por el titular.</dd></div>
          <div><dt className="font-semibold">Domicilio legal</dt><dd>Pendiente de confirmar por el titular.</dd></div>
          <div><dt className="font-semibold">Datos registrales y profesionales, si proceden</dt><dd>Pendiente de confirmar por el titular.</dd></div>
          <div><dt className="font-semibold">Contacto</dt><dd><a href="mailto:info@ay-bra.com">info@ay-bra.com</a> · <a href="tel:+34828917481">828 91 74 81</a></dd></div>
        </dl>
      </section>
      <section><h2>2. Objeto del sitio</h2><p>Este sitio presenta servicios de intermediación inmobiliaria e información sobre inmuebles. La disponibilidad y las condiciones de cada operación deben confirmarse con la agencia. La información publicada no sustituye la documentación contractual ni limita los derechos que correspondan a las personas consumidoras.</p></section>
      <section><h2>3. Uso del sitio</h2><p>El sitio debe utilizarse de forma lícita y respetuosa con los derechos de terceros. No se permite dañar sus sistemas, introducir contenido malicioso ni utilizar sus contenidos con fines ilícitos.</p></section>
      <section><h2>4. Propiedad intelectual</h2><p>Los textos, fotografías, marcas y demás contenidos pertenecen a sus respectivos titulares. Su reproducción o explotación requiere autorización cuando así lo exija la legislación aplicable, sin perjuicio de los usos legalmente permitidos.</p></section>
      <section><h2>5. Información y enlaces externos</h2><p>Si detectas un error en un anuncio, comunícalo a la agencia para su revisión. Los enlaces externos conducen a servicios gestionados por terceros y sujetos a sus propias condiciones. Se mantienen las responsabilidades y garantías que establece la legislación aplicable.</p></section>
      <section><h2>6. Privacidad y cookies</h2><p>Puedes consultar la <a href="/politica-de-privacidad">política de privacidad</a> y la <a href="/politica-de-cookies">política de cookies</a>.</p></section>
      <section><h2>7. Legislación aplicable</h2><p>Se aplica la legislación española, sin perjuicio de las disposiciones imperativas y de los derechos de las personas consumidoras. La competencia judicial será la que corresponda conforme a la normativa aplicable.</p></section>
    </>
  );
}
