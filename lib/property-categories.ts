export const propertyCategories = [
  { id: "chalet", label: "Chalet" },
  { id: "piso", label: "Piso" },
  { id: "duplex", label: "Dúplex" },
  { id: "triplex", label: "Tríplex" },
  { id: "casa-terrera", label: "Casa terrera" },
  { id: "solar", label: "Solar" },
  { id: "terreno", label: "Terreno" },
  { id: "local", label: "Local" },
] as const;

export type PropertyCategory = (typeof propertyCategories)[number]["id"];

export function getPropertyTypeLabel(type: PropertyCategory) {
  return propertyCategories.find((category) => category.id === type)!.label;
}
