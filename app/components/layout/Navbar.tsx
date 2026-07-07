"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Inicio",
    href: "#hero",
  },
  {
    name: "Propiedades",
    href: "#properties",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50">

        <div className="mx-auto max-w-[1700px] px-6 pt-6 lg:px-10 xl:px-14">

          <div
            className={`flex items-center rounded-full border transition-all duration-500 ${
              scrolled
                ? "border-white/10 bg-white/85 px-8 py-4 shadow-[0_20px_60px_rgba(0,0,0,.12)] backdrop-blur-3xl"
                : "border-white/10 bg-white/[0.05] px-8 py-5 backdrop-blur-3xl"
            }`}
          >

            {/* ===================================================== */}
            {/* LEFT */}
            {/* ===================================================== */}

            <div className="flex w-[260px] justify-start">

              <Link href="#hero">

                <Image
                  src="/images/logo.png"
                  alt="AY&BRA"
                  width={230}
                  height={72}
                  priority
                  className="h-[58px] w-auto object-contain transition-all duration-500"
                />

              </Link>

            </div>

            {/* ===================================================== */}
            {/* CENTER */}
            {/* ===================================================== */}

            <nav className="hidden flex-1 justify-center lg:flex">

              <ul className="flex items-center gap-14">

                {links.map((link) => (

                  <li key={link.name}>

                    <Link
                      href={link.href}
                      className={`group relative text-[15px] tracking-[0.08em] transition-colors duration-300 ${
                        scrolled
                          ? "text-[#111111]"
                          : "text-white"
                      }`}
                    >

                      {link.name}

                      <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#C9A14A] transition-all duration-300 group-hover:w-full" />

                    </Link>

                  </li>

                ))}

              </ul>

            </nav>

            {/* ===================================================== */}
            {/* RIGHT */}
            {/* ===================================================== */}

            <div className="hidden w-[260px] justify-end lg:flex">

              <Link
                href="/contacto"
                className="group inline-flex h-[60px] items-center gap-5 rounded-full border border-[#C9A14A]/35 bg-white/[0.04] pl-8 pr-3 text-[15px] font-medium text-white backdrop-blur-2xl transition-all duration-500 hover:border-[#C9A14A] hover:bg-white/[0.08] hover:shadow-[0_15px_40px_rgba(201,161,74,.18)]"
              >

                <span
                  className={`transition-colors duration-500 ${
                    scrolled
                      ? "text-[#111111]"
                      : "text-white"
                  }`}
                >

                  Hablar con nosotros

                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A14A] text-lg text-white transition-all duration-500 group-hover:translate-x-1">

                  →

                </span>

              </Link>

            </div>
                        {/* ===================================================== */}
            {/* MOBILE BUTTON */}
            {/* ===================================================== */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`ml-auto flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 lg:hidden ${
                scrolled
                  ? "border-black/10 bg-white text-[#111111] shadow-lg"
                  : "border-white/10 bg-white/10 text-white backdrop-blur-xl"
              }`}
            >

              <div className="relative h-5 w-7">

                <span
                  className={`absolute left-0 top-0 h-0.5 w-7 rounded-full transition-all duration-500 ${
                    scrolled ? "bg-[#111111]" : "bg-white"
                  } ${
                    mobileOpen
                      ? "top-2 rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-2 h-0.5 w-7 rounded-full transition-all duration-300 ${
                    scrolled ? "bg-[#111111]" : "bg-white"
                  } ${
                    mobileOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-4 h-0.5 w-7 rounded-full transition-all duration-500 ${
                    scrolled ? "bg-[#111111]" : "bg-white"
                  } ${
                    mobileOpen
                      ? "top-2 -rotate-45"
                      : ""
                  }`}
                />

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        {/* BACKDROP */}

        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-xl"
        />

        {/* PANEL */}

        <aside
          className={`absolute right-0 top-0 flex h-screen w-[90vw] max-w-[420px] flex-col overflow-hidden border-l border-white/10 bg-[#111111]/95 backdrop-blur-3xl transition-all duration-700 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* GOLD GLOW */}

          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#C9A14A]/20 blur-[120px]" />

          {/* HEADER */}

          <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-8 py-8">

            <Image
              src="/images/logo.png"
              alt="AY&BRA"
              width={190}
              height={60}
              className="h-12 w-auto"
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A]/10"
            >
              ×
            </button>

          </div>

          {/* SECTION TITLE */}

          <div className="relative z-10 px-8 pt-8">

            <p className="text-[11px] uppercase tracking-[5px] text-[#C9A14A]">
              Navegación
            </p>

          </div>
                    {/* LINKS */}

          <nav className="relative z-10 mt-8 flex flex-col px-8">

            {links.map((link, index) => (

              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-7 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >

                <div>

                  <span className="block text-[30px] font-light tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#C9A14A]">

                    {link.name}

                  </span>

                  <span className="mt-2 block text-[11px] uppercase tracking-[4px] text-white/35">

                    {link.name === "Inicio" && "Página principal"}
                    {link.name === "Propiedades" && "Comprar y vender"}
                    {link.name === "Nosotros" && "Conoce la empresa"}
                    {link.name === "Contacto" && "Habla con nosotros"}

                  </span>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:bg-[#C9A14A]/10 group-hover:translate-x-1">

                  <span className="text-lg text-[#C9A14A]">

                    →

                  </span>

                </div>

              </Link>

            ))}

          </nav>

          {/* Spacer */}

          <div className="flex-1" />

          {/* INFO */}

          <div className="relative z-10 px-8">

            <div className="mb-8 h-px bg-gradient-to-r from-[#C9A14A]/60 via-white/10 to-transparent" />

            <p className="text-[11px] uppercase tracking-[5px] text-[#C9A14A]">

              AY&BRA

            </p>

            <p className="mt-5 text-[17px] leading-8 text-white/60">

              Más de 25 años ayudando a nuestros clientes a encontrar su vivienda ideal en Gran Canaria.

            </p>

          </div>
                    {/* CTA */}

          <div className="relative z-10 px-8 pt-8">

            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center justify-between rounded-[24px] border border-[#C9A14A]/30 bg-[#C9A14A]/10 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#C9A14A] hover:bg-[#C9A14A]/20"
            >

              <div>

                <p className="text-[11px] uppercase tracking-[4px] text-[#C9A14A]">
                  Contacto
                </p>

                <h3 className="mt-2 text-[22px] font-semibold text-white">
                  Hablemos
                </h3>

                <p className="mt-2 text-[15px] leading-7 text-white/60">
                  Estaremos encantados de ayudarte a encontrar la propiedad perfecta.
                </p>

              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C9A14A] text-xl text-white transition-all duration-500 group-hover:translate-x-1">

                →

              </div>

            </Link>

          </div>

          {/* FOOTER */}

          <div className="relative z-10 mt-10 border-t border-white/10 px-8 py-8">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[11px] uppercase tracking-[4px] text-white/35">
                  Desde
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  1997
                </p>

              </div>

              <div className="text-right">

                <p className="text-[11px] uppercase tracking-[4px] text-white/35">
                  Ubicación
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  Gran Canaria
                </p>

              </div>

            </div>

          </div>
                  </aside>

      </div>

    </>
  );
}