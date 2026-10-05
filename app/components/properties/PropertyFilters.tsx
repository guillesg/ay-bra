import Link from "next/link";
import { propertyCategories } from "@/lib/property-categories";
import { properties } from "@/lib/properties";

export default function PropertyFilters({ selected = "", dark = false }: { selected?: string; dark?: boolean }) {
  const available = properties.filter((property) => property.status === "available");
  const categories = [{ id: "", label: "Todas" }, ...propertyCategories];
  return (
    <nav aria-label="Filtrar por tipo de inmueble" className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const count = available.filter((property) => !category.id || property.type === category.id).length;
        return (
          <Link key={category.id}
            href={category.id ? `/properties?type=${category.id}` : "/properties"}
            aria-current={selected === category.id ? "page" : undefined}
            className={`inline-flex min-h-12 items-center gap-3 rounded-2xl border px-5 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A14A] ${selected === category.id ? "border-[#C9A14A] bg-[#C9A14A] text-[#111111]" : dark ? "border-white/20 bg-white/5 text-white hover:bg-white/15" : "border-black/10 bg-white text-neutral-700 hover:border-[#C9A14A]"}`}
          >
            {category.label}<span className="rounded-full bg-black/10 px-2 py-0.5 text-xs" aria-label={`${count} disponibles`}>{count}</span>
          </Link>
        );
      })}
    </nav>
  );
}
