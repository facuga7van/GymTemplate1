import type { Metadata } from "next";
import ContactForm from "../components/Contact";


export const metadata: Metadata = {
  title: "TrAd - Contacto",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};

export default function Contact() {
  return (
    <>
  <ContactForm/>
  </>
  )
};

