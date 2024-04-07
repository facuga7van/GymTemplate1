import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gimnasio - Gimnasio",
  description:
    "descripcion de gimnasio.",
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
        <div className="bg-fixed"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
