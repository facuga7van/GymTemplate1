import type { Metadata } from "next";
import ContactForm from "../components/Contact";


export const metadata: Metadata = {
  title: "Gimnasio - Contacto",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
};

export default function Contact() {
  return (
    <>
  <ContactForm/>
  </>
  )
};

