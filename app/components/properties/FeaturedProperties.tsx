"use client";

import { useState } from "react";

import { properties } from "@/lib/properties";

import PropertyGrid from "./PropertyGrid";
import PropertiesModal from "./PropertiesModal";

export default function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 3);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="properties"
        className="bg-[#F8F8F8] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1700px] px-6 lg:px-10 xl:px-14">

          {/* Header */}

          <div className="flex flex-col items-center text-center">

            <span className="text-[12px] font-medium uppercase tracking-[0.45em] text-[#C9A14A]">
              Propiedades
            </span>

            <h2 className="mt-6 max-w-[700px] text-5xl font-light leading-tight tracking-[-0.04em] text-[#111111] lg:text-6xl">
              Las mejores oportunidades seleccionadas por AY&BRA
            </h2>

            <p className="mt-8 max-w-[720px] text-lg leading-9 text-neutral-600">
              Descubre una selección exclusiva de viviendas y oportunidades
              inmobiliarias en Gran Canaria cuidadosamente elegidas por nuestro
              equipo.
            </p>

          </div>

          {/* Grid */}

          <div className="mt-20">

            <PropertyGrid properties={featuredProperties} />

          </div>

          {/* Button */}

          <div className="mt-16 flex justify-center">

            <button
              onClick={() => setModalOpen(true)}
              className="
                group
                inline-flex
                h-[72px]
                items-center
                gap-5
                rounded-full
                bg-[#111111]
                px-10
                text-lg
                font-semibold
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#C9A14A]
              "
            >
              Ver todas las propiedades

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-1">

                →

              </span>

            </button>

          </div>

        </div>

      </section>

      <PropertiesModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

    </>
  );
}