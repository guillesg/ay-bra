"use client";

import type { Property } from "@/lib/types";

interface PropertyCTAProps {
  property: Property;
}

export default function PropertyCTA({
  property,
}: PropertyCTAProps) {

  return (

    <section className="mt-24">

      <div className="mx-auto flex w-full justify-center">

        <div
          className="
            w-full
            max-w-[920px]
            overflow-hidden
            rounded-[34px]
            bg-[#222222]
            px-8
            py-14
            text-center
            text-white

            shadow-[0_30px_80px_rgba(0,0,0,.18)]

            lg:px-20
            lg:py-20
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
            CONTACTO
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-light
              tracking-[-0.04em]

              lg:text-5xl
            "
          >

            ¿Te interesa esta propiedad?

          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[620px]
              text-lg
              leading-8
              text-white/70
            "
          >

            Nuestro equipo puede resolver cualquier duda,
            organizar una visita y acompañarte durante
            todo el proceso de compra.

          </p>
                    <div
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-5

              lg:flex-row
            "
          >

            {/* WhatsApp */}

            <a
              href="https://wa.me/34615227309"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#C9A14A]
                px-10
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#b78f39]

                lg:w-auto
              "
            >
              WhatsApp
            </a>

            {/* Llamar */}

            <a
              href="tel:+34828917481"
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                px-10
                text-base
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                hover:text-[#111111]

                lg:w-auto
              "
            >
              Llamar
            </a>

            {/* Email */}

            <a
              href="mailto:info@ay-bra.com"
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                px-10
                text-base
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                hover:text-[#111111]

                lg:w-auto
              "
            >
              Enviar email
            </a>

          </div>
                    {/* ====================================================== */}
          {/* INFORMACIÓN DE CONTACTO */}
          {/* ====================================================== */}

          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-3

              text-sm
              text-white/60

              lg:flex-row
              lg:gap-8
            "
          >

            <span>

              📞 +34 828 91 74 81

            </span>

            <span className="hidden lg:block">

              •

            </span>

            <span>

              💬 +34 615 22 73 09

            </span>

            <span className="hidden lg:block">

              •

            </span>

            <span>

              ✉️ info@ay-bra.com

            </span>

          </div>

        </div>

      </div>

    </section>

  );

}