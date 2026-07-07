"use client";

import type { Property } from "@/lib/types";

import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({
  properties,
}: PropertyGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-8

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}