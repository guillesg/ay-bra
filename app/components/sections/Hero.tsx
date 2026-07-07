"use client";

import Image from "next/image";

import HeroText from "../heroComponents/HeroText";
import HeroSearch from "../heroComponents/HeroSearch";
import HeroScroll from "../heroComponents/HeroScroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-[#111111]"
    >
      {/* ======================================== */}
      {/* Background */}
      {/* ======================================== */}

      <Image
        src="/images/hero.jpg"
        alt="AY&BRA"
        fill
        priority
        className="hero-image object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

      {/* Glow */}

      <div className="absolute -left-56 top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full bg-[#C9A14A]/20 blur-[180px]" />

      <div className="absolute right-[-180px] top-24 h-[460px] w-[460px] rounded-full bg-[#C9A14A]/10 blur-[140px]" />

      {/* Bottom */}

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-transparent" />

      {/* ======================================== */}
      {/* CONTENT */}
      {/* ======================================== */}

      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-28 lg:h-screen lg:min-h-[900px] lg:px-20 lg:py-0">

        <div className="mx-auto flex w-full max-w-[1700px] items-center justify-center">

          {/* MOBILE */}

          <div className="w-full max-w-[620px] lg:hidden">

            <HeroText />

          </div>

          {/* DESKTOP */}

          <div className="hidden w-full items-center justify-center gap-16 lg:flex">

            {/* LEFT */}

            <div className="w-full max-w-[560px]">

              <HeroText />

            </div>

            {/* RIGHT */}
{/* 
            <div className="w-full max-w-[680px]">

              <HeroSearch />

            </div> */}

          </div>

        </div>

      </div>

      {/* Hero Scroll solo Desktop */}

      <div className="hidden lg:block">

        <HeroScroll />

      </div>

      {/* Bottom line */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">

        <div className="mx-auto w-full max-w-[1700px] px-6 lg:px-20 2xl:px-24">

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>

      </div>

      <style jsx>{`
        .hero-image {
          animation: heroKenBurns 28s ease-in-out infinite alternate;
          transform-origin: center;
          will-change: transform;
        }

        @keyframes heroKenBurns {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.12);
          }
        }

        @media (max-width: 1536px) {
          #hero {
            min-height: 980px;
          }
        }

        @media (max-width: 1280px) {
          #hero {
            min-height: 980px;
          }
        }

        @media (max-width: 768px) {
          #hero {
            min-height: 100svh;
          }
        }
      `}</style>
    </section>
  );
}