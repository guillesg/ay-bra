"use client";

import { useEffect } from "react";

import { properties } from "@/lib/properties";

import PropertyGrid from "./PropertyGrid";

interface PropertiesModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PropertiesModal({
  open,
  onClose,
}: PropertiesModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* BACKDROP */}

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
      />

      {/* PANEL */}

      <div
        className={`absolute left-1/2 top-1/2 flex h-[92vh] w-[94vw] max-w-[1700px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden bg-[#F8F8F8] shadow-[0_60px_120px_rgba(0,0,0,.35)] transition-all duration-500 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* HEADER */}

      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/5 bg-white/80 py-8 pl-14 pr-14 backdrop-blur-xl lg:py-9 lg:pl-16 lg:pr-16">

  <div className="max-w-[70%]">

    <h2 className="mt-3 text-[42px] font-light leading-none tracking-[-0.05em] text-[#111111]">

      Todas las propiedades

    </h2>

  </div>

  <button
    onClick={onClose}
    className="
      flex
      h-14
      w-14
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-black/10
      bg-white
      text-2xl
      shadow-sm
      transition-all
      duration-300
      hover:rotate-90
      hover:border-[#C9A14A]
      hover:text-[#C9A14A]
    "
  >

    ×

  </button>

</div>

        {/* CONTENT */}

        <div className="flex-1 overflow-y-auto px-6 py-10 lg:px-12">
          <div className="mx-auto w-full max-w-[1700px]">
            <PropertyGrid properties={properties} />
          </div>
        </div>

        {/* FOOTER */}

        <div className="border-t border-black/5 bg-white px-8 py-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-sm text-neutral-500">
              Mostrando <strong>{properties.length}</strong> propiedades
              disponibles.
            </p>

            <button
              onClick={onClose}
              className="
                inline-flex
                h-[56px]
                items-center
                gap-4
                rounded-full
                bg-[#111111]
                px-8
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:bg-[#C9A14A]
              "
            >
              Cerrar
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
