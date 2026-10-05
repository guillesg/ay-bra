import type { Metadata } from "next";
import "./globals.css";
import LegalLinks from "./components/legal/LegalLinks";

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
      <body>{children}<div className="bg-[#242424] text-white/80"><LegalLinks /></div></body>
    </html>
  );
}
