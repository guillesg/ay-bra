"use client";

import Image from "next/image";

export default function Footer() {

  return (

    <footer
      className="
        mt-32
        bg-[#242424]
        text-white
      "
    >

      <div className="mx-auto flex w-full justify-center">

        <div
          className="
            w-full
            max-w-[1500px]
            px-6
            py-20

            lg:px-10
          "
        >

          {/* ========================================== */}
          {/* TOP */}
          {/* ========================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-12

              lg:flex-row
              lg:items-start
              lg:justify-between
            "
          >

            {/* Logo */}

            <Image
              src="/images/logo.png"
              alt="AY&BRA"
              width={180}
              height={60}
              className="object-contain"
            />

            {/* Contacto */}

            <div
              className="
                space-y-5
                text-center

                lg:text-right
              "
            >

              <p>

                <span className="font-semibold">

                  Email:

                </span>{" "}

                <a
                  href="mailto:info@ay-bra.com"
                  className="transition hover:text-[#C9A14A]"
                >
                  info@ay-bra.com
                </a>

              </p>

              <p>

                <span className="font-semibold">

                  Tel:

                </span>{" "}

                <a
                  href="tel:+34828917481"
                  className="transition hover:text-[#C9A14A]"
                >
                  828 91 74 81
                </a>

              </p>

              <p>

                <span className="font-semibold">

                  Móvil:

                </span>{" "}

                <a
                  href="https://wa.me/34615227309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9A14A]"
                >
                  +34 615 22 73 09
                </a>

              </p>

            </div>

          </div>

          {/* Línea */}

          <div
            className="
              my-14
              h-px
              bg-white/10
            "
          />
                    {/* ========================================== */}
          {/* BOTTOM */}
          {/* ========================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-4

              text-center
            "
          >

            <p
              className="
                text-lg
                font-medium
                text-white/90
              "
            >
              © {new Date().getFullYear()} AY&BRA Inmobiliaria
            </p>

            <p
              className="
                max-w-[700px]
                text-base
                leading-8
                text-white/60
              "
            >
              Especialistas en compra, venta y alquiler de
              propiedades en Gran Canaria, ofreciendo un
              servicio cercano, profesional y personalizado.
            </p>

          </div>

        </div>

      </div>

    </footer>

  );

}