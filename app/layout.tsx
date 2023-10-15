import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrAd",
  description:
    "TrAd - Tratamientos en Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones. Descubre cómo podemos ayudarte a recuperar tu vida",
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
