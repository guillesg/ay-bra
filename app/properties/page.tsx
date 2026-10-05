import type { Metadata } from "next";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { propertyCategories } from "@/lib/property-categories";
import PropertyFilters from "../components/properties/PropertyFilters";
import PropertyGrid from "../components/properties/PropertyGrid";

export const metadata: Metadata = { title: "Buscar propiedades | AY&BRA" };

export default async function PropertiesPage({ searchParams }: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const { type } = await searchParams;
  const selected = typeof type === "string" ? type : "";
  const category = propertyCategories.find((item) => item.id === selected);
  const invalid = Array.isArray(type) || (!!selected && !category);
  const results = properties.filter((property) =>
    !invalid && property.status === "available" && (!selected || property.type === selected)
  );
  return (
    <main className="min-h-svh bg-[#F8F8F8] px-6 py-12 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <Link href="/" className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3">← Volver al inicio</Link>
        <h1 className="mt-10 text-4xl font-light leading-tight sm:text-5xl">Encuentra tu próxima propiedad</h1>
        <p className="mb-8 mt-4 text-lg leading-8 text-neutral-600">Elige un tipo de inmueble para ver las opciones disponibles.</p>
        <PropertyFilters selected={invalid ? "invalid" : selected} />
        <p role="status" className="my-8 text-neutral-600">{results.length} {results.length === 1 ? "propiedad disponible" : "propiedades disponibles"}{category ? ` · ${category.label}` : ""}</p>
        {results.length ? <PropertyGrid properties={results} /> : (
          <section className="rounded-3xl border border-black/5 bg-white px-6 py-12 text-center sm:p-16">
            <h2 className="text-2xl font-semibold">{invalid ? "No reconocemos ese tipo de inmueble" : `Ahora mismo no hay propiedades de tipo ${category?.label ?? "seleccionado"}`}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-8 text-neutral-600">Prueba otra categoría o contacta con nosotros para contarnos qué estás buscando.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/properties" className="rounded-full bg-[#C9A14A] px-7 py-4 font-medium">Ver todas las propiedades</Link>
              <Link href="/contacto" className="rounded-full border border-black/15 px-7 py-4 font-medium">Contactar</Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
