import type { ComponentType } from "react";

export interface PropertyType {
  id: string;
  label: string;
  description: string;
  icon: ComponentType<{
    className?: string;
  }>;
}