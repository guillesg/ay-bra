import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de cookies | AY&BRA" };

export default function CookiesPolicy() {
  return (
    <>
      <h1>Política de cookies</h1>
      <section><h2>1. Qué son las cookies</h2><p>Son pequeños archivos que los sitios pueden almacenar en tu dispositivo para recordar información. Otras tecnologías, como el almacenamiento local del navegador, pueden cumplir funciones similares.</p></section>
      <section><h2>2. Uso en este sitio</h2><p>La versión actual de esta web no incorpora cookies propias ni almacenamiento local para analítica, publicidad o seguimiento. Tampoco incluye herramientas de medición de visitas ni contenido de terceros que se cargue automáticamente. No se utiliza un banner de aceptación porque no hay cookies opcionales configuradas que aceptar o rechazar.</p></section>
      <section><h2>3. Servicios externos</h2><p>Google Maps, WhatsApp y las reseñas de Google se abren únicamente al pulsar sus enlaces. Al salir de esta web, esos servicios pueden tratar datos y utilizar cookies conforme a sus propias políticas. Abrir un enlace no implica aceptar las cookies del servicio de destino.</p><p>Más información en la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">política de cookies de Google</a> y la <a href="https://www.whatsapp.com/legal/cookies" target="_blank" rel="noopener noreferrer">política de cookies de WhatsApp</a>.</p></section>
      <section><h2>4. Control desde el navegador</h2><p>Puedes consultar, bloquear o eliminar las cookies desde los ajustes de privacidad de tu navegador. Esta web no guarda una preferencia de consentimiento porque no instala cookies opcionales.</p></section>
      <section><h2>5. Cambios en esta política</h2><p>Si se incorporan servicios que necesiten cookies opcionales, se actualizará esta información y se solicitará el consentimiento antes de activarlos, con opciones para aceptar, rechazar y retirar la elección.</p></section>
      <section><h2>6. Contacto</h2><p>Para consultas, escribe a <a href="mailto:info@ay-bra.com">info@ay-bra.com</a>. La identificación del titular figura en el <a href="/aviso-legal">aviso legal</a>.</p></section>
    </>
  );
}
