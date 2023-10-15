import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrAd - Tratamiento de Adicciones",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        <Whatsapp/>
        <div className="bg-fixed">
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
