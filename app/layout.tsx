import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AY&BRA Inmobiliaria",
  description: "Asesores inmobiliarios en Gran Canaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}