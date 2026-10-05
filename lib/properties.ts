import type { Property } from "./types";

export const properties: Property[] = [

 
  {
    id: 1,

    reference: "AYB-003",

    slug: "casa-piscina-fagajesto",

    title: "Casa con piscina y vistas en Fagajesto",

    city: "Gáldar",

    address: "Fagajesto",

    type: "chalet",

    operation: "sale",

    featured: true,

    status: "available",

    price: 320000,

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
    id: 2,

    reference: "AYB-004",

    slug: "edificio-comercial-el-pagador",

    title: "Edificio comercial en El Pagador",

    city: "Moya",

    address: "El Pagador",

    type: "local",

    operation: "sale",

    featured: true,

    status: "available",

    price: 1000000,

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
  
];
