import Link from "next/link";
import { notFound } from "next/navigation";

import { properties } from "@/lib/properties";

import PropertyGallery from "../../components/properties/propertyDetail/PropertyGallery";

import PropertyInfo from "../../components/properties/propertyDetail/PropertyInfo";
import PropertyCTA from "../../components/properties/propertyDetail/PropertyCTA";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F8F8] pt-36 pb-24">

      <section className="mx-auto max-w-[1700px] px-6 lg:px-10 xl:px-14">

        {/* Volver */}

        <Link
          href="/#properties"
          className="mb-10 inline-flex items-center gap-3 text-sm font-medium text-neutral-500 transition-all duration-300 hover:text-[#C9A14A]"
        >
          ← Volver
        </Link>

        {/* Header */}

        <div className="mb-14">

          <span className="rounded-full bg-[#C9A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">

            {property.reference}

          </span>

          <h1 className="mt-8 max-w-[900px] text-5xl font-light leading-tight tracking-[-0.05em] text-[#111111] lg:text-7xl">

            {property.title}

          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-8">

            <h2 className="text-5xl font-semibold text-[#C9A14A]">

              {new Intl.NumberFormat("es-ES").format(property.price)} €

            </h2>

            <p className="text-lg text-neutral-500">

              📍 {property.address}, {property.city}

            </p>

          </div>

        </div>

        {/* Galería */}

        <PropertyGallery property={property} />

        <PropertyInfo property={property} />
        <PropertyCTA property={property} />

      </section>

    </main>
  );
}