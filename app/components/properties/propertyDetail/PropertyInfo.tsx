"use client";

import type { Property } from "@/lib/types";

interface PropertyInfoProps {
  property: Property;
}

export default function PropertyInfo({
  property,
}: PropertyInfoProps) {

  return (

    <section className="mt-20">

      <div className="mx-auto flex w-full justify-center">

        <div className="w-full max-w-[920px]">

          {/* ====================================================== */}
          {/* TITLE */}
          {/* ====================================================== */}

          <div className="mb-14 text-center">

            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#C9A14A]
              "
            >
              INFORMACIÓN
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-light
                tracking-[-0.04em]
                text-[#111111]

                lg:text-5xl
              "
            >
              Características de la propiedad
            </h2>

          </div>

          {/* ====================================================== */}
          {/* DATOS */}
          {/* ====================================================== */}

          <div
            className="
              rounded-[30px]
              border
              border-black/5
              bg-white
              p-8

              shadow-[0_20px_60px_rgba(0,0,0,.05)]
            "
          >

            <div
              className="
                grid

                gap-x-10
                gap-y-8

                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-3
              "
            >
                              {/* Dormitorios */}

              <div className="flex items-center gap-4">

                <span className="text-xl">🛏</span>

                <div>

                  <p className="text-2xl font-semibold text-[#111111]">

                    {property.bedrooms ?? "-"}

                  </p>

                  <span className="text-sm uppercase tracking-[0.22em] text-neutral-500">

                    Dormitorios

                  </span>

                </div>

              </div>

              {/* Baños */}

              <div className="flex items-center gap-4">

                <span className="text-xl">🚿</span>

                <div>

                  <p className="text-2xl font-semibold text-[#111111]">

                    {property.bathrooms ?? "-"}

                  </p>

                  <span className="text-sm uppercase tracking-[0.22em] text-neutral-500">

                    Baños

                  </span>

                </div>

              </div>

              {/* Superficie */}

              <div className="flex items-center gap-4">

                <span className="text-xl">📐</span>

                <div>

                  <p className="text-2xl font-semibold text-[#111111]">

                    {property.area} m²

                  </p>

                  <span className="text-sm uppercase tracking-[0.22em] text-neutral-500">

                    Construidos

                  </span>

                </div>

              </div>

              {/* Garaje */}

              <div className="flex items-center gap-4">

                <span className="text-xl">🚗</span>

                <div>

                  <p className="text-2xl font-semibold text-[#111111]">

                    {property.garage ?? "-"}

                  </p>

                  <span className="text-sm uppercase tracking-[0.22em] text-neutral-500">

                    Garaje

                  </span>

                </div>

              </div>

              {/* Tipo */}

              <div className="flex items-center gap-4">

                <span className="text-xl">🏡</span>

                <div>

                  <p className="text-2xl font-semibold capitalize text-[#111111]">

                    {property.type}

                  </p>

                  <span className="text-sm uppercase tracking-[0.22em] text-neutral-500">

                    Tipo de vivienda

                  </span>

                </div>

              </div>

              {/* Estado */}

              <div className="flex items-center gap-4">

                <span className="text-xl">✅</span>

                <div>

                  <p className="text-2xl font-semibold capitalize text-[#111111]">

                    {property.status === "available"
                      ? "Disponible"
                      : property.status === "reserved"
                      ? "Reservado"
                      : "Vendido"}

                  </p>

                  <span className="text-sm uppercase tracking-[0.22em] text-neutral-500">

                    Estado

                  </span>

                </div>

              </div>
                          </div>

          </div>

          {/* ====================================================== */}
          {/* DESCRIPCIÓN */}
          {/* ====================================================== */}

          <div
            className="
              mt-16
              rounded-[30px]
              border
              border-black/5
              bg-white
              p-8

              shadow-[0_20px_60px_rgba(0,0,0,.05)]

              lg:p-12
            "
          >

            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#C9A14A]
              "
            >
              DESCRIPCIÓN
            </span>

            <h3
              className="
                mt-5
                text-3xl
                font-light
                tracking-[-0.04em]
                text-[#111111]

                lg:text-4xl
              "
            >
              Sobre esta propiedad
            </h3>

            <p
              className="
                mt-8
                text-base
                leading-8
                text-neutral-600

                lg:text-lg
                lg:leading-9
              "
            >

              {property.description}

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}