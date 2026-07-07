"use client";

import { useMemo, useState } from "react";

import { propertyTypes } from "../../../lib/PropertyTypes";

import Button from "../ui/Button";

import SearchChip from "./heroSearch/SearchChip";
import SearchStats from "./heroSearch/SearchStats";

import ArrowRightIcon from "../heroComponents/icons/ArrowRightIcon";

const stats = [
  {
    value: "+150",
    label: "Propiedades",
  },
  {
    value: "25+",
    label: "Años",
  },
  {
    value: "3K+",
    label: "Clientes",
  },
];

export default function HeroSearch() {
  const [selectedType, setSelectedType] = useState("");

  const searchUrl = useMemo(() => {
    return selectedType
      ? `/properties?type=${selectedType}`
      : "/properties";
  }, [selectedType]);

  return (
    <div className="relative w-full">

      {/* Glow */}

      <div className="absolute -inset-16 rounded-[64px] bg-[#C9A14A]/12 blur-[120px]" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-[42px] border border-white/15 bg-white/[0.08] py-16 backdrop-blur-[36px]">

        {/* ======================================== */}
        {/* HEADER */}
        {/* ======================================== */}

        <div className="mx-auto w-full max-w-[520px]">

          <p className="text-center text-[11px] uppercase tracking-[5px] text-[#C9A14A]">
            Buscar propiedades
          </p>

          <h2 className="mt-8 text-center text-[42px] font-light leading-[1.08] text-[#FAFAF8]">
            ¿Qué tipo de vivienda buscas?
          </h2>

          <p className="mt-8 text-center text-[18px] leading-[1.9] text-white/65">
            Selecciona una categoría para descubrir todas las propiedades
            disponibles.
          </p>

        </div>

        {/* Divider */}

        <div className="mx-auto my-14 h-px w-[520px] bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

        {/* ======================================== */}
        {/* CHIPS */}
        {/* ======================================== */}

        <div className="px-12">

          <div className="grid grid-cols-2 gap-7">

            {propertyTypes.map((type) => (
              <SearchChip
                key={type.id}
                label={type.label}
                description={type.description}
                icon={type.icon}
                active={selectedType === type.id}
                onClick={() => setSelectedType(type.id)}
              />
            ))}

          </div>

        </div>

        {/* ======================================== */}
        {/* BUTTON */}
        {/* ======================================== */}

        <div className="mt-12 px-12">

          <Button
            href={searchUrl}
            fullWidth
            icon={<ArrowRightIcon />}
          >
            {selectedType
              ? "Buscar propiedades"
              : "Ver todas las propiedades"}
          </Button>

        </div>

        {/* ======================================== */}
        {/* STATS */}
        {/* ======================================== */}

        <div className="mt-12 px-12">

          <SearchStats stats={stats} />

        </div>

      </div>

    </div>
  );
}