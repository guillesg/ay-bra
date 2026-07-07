export interface Property {
  id: number;

  reference: string;

  slug: string;

  title: string;

  city: string;

  address: string;

  type: "chalet" | "piso" | "duplex" | "local" | "terreno";

  operation: "sale" | "rent";

  featured: boolean;

  status: "available" | "reserved" | "sold";

  price: number;

  bedrooms?: number;

  bathrooms?: number;

  area: number;

  garage?: number;

  image: string;

  images: string[];

  description?: string;
}