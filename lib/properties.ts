import type { Property } from "./types";

export const properties: Property[] = [
  {
    id: 1,

    reference: "AYB-001",

    slug: "casa-la-dehesa",

    title: "Casa en La Dehesa",

    city: "Santa María de Guía",

    address: "La Dehesa",

    type: "chalet",

    operation: "sale",

    featured: true,

    status: "available",

    price: 380000,

    bedrooms: 4,
    bathrooms: 3,
    area: 480,
    garage: 6,

    image: "/images/home1/home1-1.jpg",

    images: [
      "/images/home1/home1-1.jpg",
      "/images/home1/home1-2.jpg",
      "/images/home1/home1-3.jpg",
      "/images/home1/home1-4.jpg",
      "/images/home1/home1-5.jpg",
      "/images/home1/home1-6.jpg",
      "/images/home1/home1-7.jpg",
      "/images/home1/home1-8.jpg",
      "/images/home1/home1-9.jpg",
      "/images/home1/home1-10.jpg",
      "/images/home1/home1-11.jpg",
      "/images/home1/home1-12.jpg",
    ],

    description:
      "Espectacular casa unifamiliar situada en La Dehesa, Santa María de Guía. Dispone de un amplio garaje para seis vehículos, cuatro dormitorios, tres baños, gran cocina independiente, salón muy luminoso, azotea con vistas panorámicas, nave anexa y apartamento independiente con gran potencial de rentabilidad.",
  },

 
  {
    id: 2,

    reference: "AYB-003",

    slug: "casa-piscina-fagajesto",

    title: "Casa con piscina y vistas en Fagajesto",

    city: "Gáldar",

    address: "Fagajesto",

    type: "chalet",

    operation: "sale",

    featured: true,

    status: "available",

    price: 365000,

    bedrooms: 3,
    bathrooms: 1,
    area: 131,
    garage: 1,

    image: "/images/home3/home3-1.jpg",

    images: [
      "/images/home3/home3-1.jpg",
      "/images/home3/home3-2.jpg",
      "/images/home3/home3-3.jpg",
      "/images/home3/home3-4.jpg",
      "/images/home3/home3-5.jpg",
      "/images/home3/home3-6.jpg",
    ],

    description:
      "Vivienda con piscina privada situada en Fagajesto, Gáldar, sobre una parcela de aproximadamente 3.400 m². Dispone de tres dormitorios, cocina equipada, salón-comedor, jardín, zona de barbacoa y aparcamiento. Ideal como residencia o inversión vacacional.",
  },

  {
    id: 3,

    reference: "AYB-004",

    slug: "edificio-comercial-el-pagador",

    title: "Edificio comercial en El Pagador",

    city: "Moya",

    address: "El Pagador",

    type: "local",

    operation: "sale",

    featured: true,

    status: "available",

    price: 1190000,

    bedrooms: 0,
    bathrooms: 0,
    area: 759,

    image: "/images/home4/home4-1.jpg",

    images: [
      "/images/home4/home4-1.jpg",
      "/images/home4/home4-2.jpg",
      "/images/home4/home4-3.jpg",
    ],

    description:
      "Edificio comercial en estructura situado en El Pagador, Moya. Consta de tres plantas de 253 m² cada una (759 m² construidos) sobre una parcela de 1.940 m². Excelente visibilidad en primera línea de la Carretera General de San Andrés y gran potencial para desarrollar un proyecto comercial o residencial, con vistas al mar y magnífica conexión con el norte de Gran Canaria.",
  },
  {
    id: 4,
    reference: "AYB-005",

    slug: "solar-angel-guimera",

    title: "Solar en Ángel Guimerá",

    city: "Las Palmas de Gran Canaria",

    address: "Calle Ángel Guimerá",

    type: "terreno",

    operation: "sale",

    featured: true,

    status: "available",

    price: 210000,
    area: 150,

    image: "/images/home5/home5-1.jpg",

    images: [
    "/images/home5/home5-1.jpg",
    "/images/home5/home5-2.jpg",
    "/images/home5/home5-3.jpg",
    ],

    description:
  "Solar urbano de 150 m² situado en la calle Ángel Guimerá, una de las zonas con mayor proyección de Las Palmas de Gran Canaria. Ideal para construir una vivienda o desarrollar una promoción residencial en altura. Excelente conexión con el centro de la ciudad, León y Castillo, la zona Puerto y la Playa de Las Canteras. Una magnífica oportunidad para promotores e inversores.",
  }

];