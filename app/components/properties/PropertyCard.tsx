"use client";

import Image from "next/image";
import Link from "next/link";

import type { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  const price = new Intl.NumberFormat("es-ES").format(
    property.price
  );

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block h-full"
    >
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[34px]
          border
          border-black/5
          bg-white
          shadow-[0_18px_60px_rgba(0,0,0,.06)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_35px_90px_rgba(0,0,0,.14)]
        "
      >

        {/* ====================================================== */}
        {/* IMAGE */}
        {/* ====================================================== */}

        <div className="relative aspect-[4/3] overflow-hidden">

          <Image
            src={property.image}
            alt={property.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Status */}

          <div className="absolute left-5 top-5">

            <span
              className="
                rounded-full
                bg-[#C9A14A]
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              EN VENTA
            </span>

          </div>

          {/* Reference */}

          <div className="absolute right-5 top-5">

            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/15
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white
                backdrop-blur-xl
              "
            >
              {property.reference}
            </span>

          </div>

          {/* Bottom Info */}

          <div className="absolute inset-x-0 bottom-0 p-6">

            <div className="flex items-end justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.18em] text-white/70">

                  {property.type}

                </p>

                <h3 className="mt-2 text-[40px] font-semibold tracking-[-0.04em] text-white">

                  {price} €

                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* ====================================================== */}
        {/* CONTENT */}
        {/* ====================================================== */}

        <div className="flex flex-1 flex-col p-8">
                      {/* Title */}

          <h2
            className="
              text-[30px]
              font-semibold
              leading-tight
              tracking-[-0.03em]
              text-[#111111]
            "
          >
            {property.title}
          </h2>

          {/* Location */}

          <p className="mt-3 text-[16px] text-neutral-500">

            📍 {property.address}, {property.city}

          </p>

          {/* Features */}

          <div className="mt-8 grid grid-cols-3 rounded-3xl bg-[#F8F8F8] p-5">

            <div className="text-center">

              <p className="text-2xl font-semibold text-[#111111]">

                {property.bedrooms ?? "-"}

              </p>

              <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-neutral-500">

                Dorm.

              </span>

            </div>

            <div className="border-x border-neutral-200 text-center">

              <p className="text-2xl font-semibold text-[#111111]">

                {property.bathrooms ?? "-"}

              </p>

              <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-neutral-500">

                Baños

              </span>

            </div>

            <div className="text-center">

              <p className="text-2xl font-semibold text-[#111111]">

                {property.area}

              </p>

              <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-neutral-500">

                m²

              </span>

            </div>

          </div>
        </div>

      </article>

    </Link>

  );
}