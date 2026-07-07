import type { ComponentType } from "react";

import {
  ChaletIcon,
  DuplexIcon,
  LocalIcon,
  PisoIcon,
  TerrenoIcon,
} from "../app/components/heroComponents/icons";

export interface PropertyType {
  id: string;
  label: string;
  description: string;
  icon: ComponentType<{
    className?: string;
  }>;
}

export const propertyTypes: PropertyType[] = [
  {
    id: "chalet",
    label: "Chalet",
    description: "Viviendas independientes",
    icon: ChaletIcon,
  },
  {
    id: "piso",
    label: "Piso",
    description: "Apartamentos y pisos",
    icon: PisoIcon,
  },
  {
    id: "duplex",
    label: "Dúplex",
    description: "Dos plantas",
    icon: DuplexIcon,
  },
  {
    id: "local",
    label: "Local",
    description: "Locales comerciales",
    icon: LocalIcon,
  },
  {
    id: "terreno",
    label: "Terreno",
    description: "Parcelas y solares",
    icon: TerrenoIcon,
  },
];