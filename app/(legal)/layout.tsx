import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

// Remove noindex only after the owner has completed and validated the legal texts.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-svh bg-[#F8F8F8] px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-sm">← Volver al inicio</Link>
        <article className="mt-8 space-y-8 rounded-3xl border border-black/5 bg-white p-6 leading-8 text-neutral-700 sm:p-12 [&_h1]:text-4xl [&_h1]:leading-tight [&_h1]:text-[#111111] [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#111111] [&_a]:underline [&_a]:underline-offset-4">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            Borrador pendiente de completar y validar por el titular antes de publicar el sitio.
          </p>
          {children}
        </article>
      </div>
    </main>
  );
}
