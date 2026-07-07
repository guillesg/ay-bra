import Link from "next/link";

export default function HeroText() {
  return (
    <div className="mx-auto w-full max-w-[640px]">
      {/* ======================================== */}
      {/* Badge (Solo Desktop) */}
      {/* ======================================== */}

      <div className="hidden lg:inline-flex items-center gap-3 rounded-full border border-[#C9A14A]/30 bg-white/10 px-7 py-4 backdrop-blur-2xl">
        <span className="h-2.5 w-2.5 rounded-full bg-[#C9A14A]" />

        <span className="text-[11px] uppercase tracking-[5px] text-[#C9A14A]">
          Desde 1997 · Gran Canaria
        </span>
      </div>

      {/* ======================================== */}
      {/* Title */}
      {/* ======================================== */}

      <h1 className="mt-0 text-[52px] font-light leading-[1.12] tracking-[-0.04em] text-[#FAFAF8] sm:mt-4 sm:text-[64px] md:text-[84px] xl:mt-12 xl:max-w-[620px] xl:text-[96px]">
        Encuentra la

        <br />

        <span className="font-semibold">
          vivienda perfecta
        </span>

        <br />

        para ti.
      </h1>

      {/* ======================================== */}
      {/* Description */}
      {/* ======================================== */}

      <p className="mt-12 max-w-[560px] text-[18px] leading-[1.8] text-white/72 sm:text-[20px] xl:mt-20 xl:text-[21px] xl:leading-[1.9]">
        Propiedades cuidadosamente seleccionadas en Gran Canaria.

        <br />

        Acompañamos a cada cliente con un servicio cercano,
        transparente y más de 25 años de experiencia.
      </p>

      {/* ======================================== */}
      {/* Buttons */}
      {/* ======================================== */}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 xl:mt-16">

        <Link
          href="/properties"
          className="group inline-flex h-[68px] items-center justify-center gap-5 rounded-full bg-[#C9A14A] px-10 text-lg font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(201,161,74,.35)] xl:h-[72px]"
        >
          Explorar propiedades

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-all duration-500 group-hover:translate-x-1 xl:h-12 xl:w-12">
            →
          </span>
        </Link>

        <Link
          href="/contacto"
          className="inline-flex h-[68px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-12 text-lg font-medium text-white backdrop-blur-xl transition-all duration-500 hover:border-white hover:bg-white hover:text-[#111111] xl:h-[72px]"
        >
          Contactar
        </Link>

      </div>

      {/* ======================================== */}
      {/* Bottom (Solo Desktop) */}
      {/* ======================================== */}

      <div className="hidden xl:flex mt-16 items-center gap-5">
        <span className="h-px w-20 bg-[#C9A14A]" />

        <span className="text-xs uppercase tracking-[4px] text-white/60">
          Especialistas en viviendas premium
        </span>
      </div>
    </div>
  );
}