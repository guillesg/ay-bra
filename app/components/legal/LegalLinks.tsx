import Link from "next/link";

export default function LegalLinks() {
  return (
    <nav aria-label="Información legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-6 text-sm">
      <Link className="px-2 py-2 underline underline-offset-4" href="/aviso-legal">Aviso legal</Link>
      <Link className="px-2 py-2 underline underline-offset-4" href="/politica-de-privacidad">Política de privacidad</Link>
      <Link className="px-2 py-2 underline underline-offset-4" href="/politica-de-cookies">Política de cookies</Link>
    </nav>
  );
}
