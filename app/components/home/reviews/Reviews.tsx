"use client";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews";

export default function Reviews() {
  return (
    <section className="py-32">
      <div className="mx-auto flex w-full justify-center">
        <div className="w-full max-w-[1500px]">
          {/* ====================================================== */}
          {/* HEADER */}
          {/* ====================================================== */}

          <div className="text-center">
            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#C9A14A]
              "
            >
              OPINIONES REALES
            </span>

            <h2
              className="
                mx-auto
                mt-8
                max-w-[900px]

                text-5xl
                font-light
                tracking-[-0.05em]
                text-[#111111]

                lg:text-7xl
              "
            >
              Lo que dicen nuestros clientes
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-[850px]

                text-lg
                leading-9
                text-neutral-500
              "
            >
              Más de 25 años ayudando a comprar, vender y alquilar propiedades
              en Gran Canaria.
            </p>
          </div>

          {/* ====================================================== */}
          {/* RATING */}
          {/* ====================================================== */}

          <div className="mt-24 text-center">
            <h3
              className="
                text-8xl
                font-semibold
                text-[#C9A14A]
              "
            >
              4.1
            </h3>

            <div
              className="
                mt-5

                text-4xl
                tracking-[0.25em]
                text-[#C9A14A]
              "
            >
              ★★★★★
            </div>

            <p
              className="
                mt-8
                text-xl
                text-neutral-500
              "
            >
              Basado en reseñas reales de nuestros clientes
            </p>
          </div>
          {/* ====================================================== */}
          {/* GRID */}
          {/* ====================================================== */}

          <div
            className="
              mt-24

              grid
              gap-8

              md:grid-cols-2

              xl:grid-cols-4
            "
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          {/* ====================================================== */}
          {/* BOTÓN */}
          {/* ====================================================== */}

          <div className="mt-20 flex justify-center">
            <a
              href="https://www.google.com/search?q=AY%26BRA+Inmobiliaria+rese%C3%B1as"
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex
    items-center
    justify-center
    gap-6

    rounded-full
    border
    border-[#C9A14A]

    bg-white

    px-12
    py-5

    text-lg
    font-semibold

    text-[#111111]

    shadow-[0_12px_35px_rgba(0,0,0,.05)]

    transition-all
    duration-300

    hover:-translate-y-1
    hover:bg-[#C9A14A]
    hover:text-white
    hover:shadow-[0_20px_45px_rgba(0,0,0,.10)]
  "
            >
              <span>Ver todas las reseñas</span>

              <span
                className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      border
      border-current
      text-base
    "
              >
                →
              </span>
            </a>
          </div>
          {/* ====================================================== */}
          {/* FOOTER */}
          {/* ====================================================== */}
        </div>
      </div>
    </section>
  );
}
