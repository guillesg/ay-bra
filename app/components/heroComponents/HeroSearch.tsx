import PropertyFilters from "../properties/PropertyFilters";

export default function HeroSearch() {
  return (
    <div className="w-full rounded-[32px] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-xl sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-[#C9A14A]">Buscar propiedades</p>
      <h2 className="mt-4 text-3xl font-light leading-tight text-white">¿Qué tipo de inmueble buscas?</h2>
      <p className="mb-6 mt-4 leading-7 text-white/70">Pulsa una categoría para ver sus propiedades disponibles.</p>
      <PropertyFilters dark />
    </div>
  );
}
