"use client";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Carousel from "../components/Carousel";
import ReactModal from "react-modal";

export default function ContactForm() {
  const form = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const serviceId = process.env.NEXT_PUBLIC_SERVICEID || "";
  const templateId = process.env.NEXT_PUBLIC_TEMPLATEID || "";
  const userId = process.env.NEXT_PUBLIC_USERID || "";

  const dividerStyle = {
    width: "40%",
    borderTop: "2px solid #ccc",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setShowModal(true);
          setTimeout(() => {
            (form.current as HTMLFormElement | null)?.reset();
          }, 100);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <>
      <Carousel />
      <div className="my-10">
        <h1 className="title text-center text-[3rem]">Contacto</h1>
      </div>

      <div className="md:flex justify-center items-center py-8 mx-auto md:mx-[10rem]">
        <div className="mx-auto md:w-1/2 p-8 md:mx-5">
          <h2 className="text-3xl font-semibold">
            Recupera tu <span className="text-green-500">libertad</span>,
            déjanos ayudarte.
          </h2>
          <h2 className="text-3xl font-semibold">
            Transforma tu <span className="text-green-500">vida</span>,
            contáctanos hoy mismo.
          </h2>
          <h2 className="text-3xl font-semibold">
            Tu futuro sin adicciones comienza con un{" "}
            <span className="text-green-500">mensaje</span>.
          </h2>
          <div>
            <hr className="border-t-2" style={dividerStyle} />
          </div>
          <div className="mt-8">
            <h2 className="text-xl">
              Teléfono:{" "}
              <a
                href="https://wa.me/message/72HUXVW3IQHYC1"
                className="md:text-gray-800 text-[#01b774]  md:hover:text-[#01b774]"
              >
                (+54) 9 11 3004-6330
              </a>
            </h2>
            <h2 className="text-xl">
              Email:{" "}
              <a
                href="mailto:Tradlaser@gmail.com"
                className="text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]"
              >
                Tradlaser@gmail.com
              </a>
            </h2>
          </div>
        </div>
        <div className="mx-auto md:w-1/2 p-8 md:mx-5 rounded-lg shadow-3xl bg-white">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="mb-3">
              <label htmlFor="name" className="block text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                name="from_name"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700">
                Dirección de mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                name="from_email"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block text-gray-700">
                Mensaje
              </label>
              <textarea
                rows={6}
                id="message"
                placeholder="Escribe tu mensaje."
                name="message"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ReactModal
        isOpen={showModal}
        contentLabel="Example Modal"
        onRequestClose={() => setShowModal(false)}
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-start justify-center"
        className="bg-white max-w-10 p-8 rounded-md mt-[10rem] shadow-3xl"
      >
        {/* Modal content here */}
        <h2 className="text-xl font-semibold mb-3 text-center">
          ¡Correo enviado con <a className="text-green-500">éxito!</a>
        </h2>
        <div>
            <hr className="" style={dividerStyle} />
          </div>
        <p className="text-md my-3 text-center mt-5">
          Tu mensaje ha sido enviado correctamente.
        </p>
        <div className="flex justify-center mt-5 mx-[10rem] border rounded-lg borderad shadow-btn hover:scale-110  all duration-300 ease-in-out">
          <button
            className="  px-4 py-2 rounded-md  focus:outline-none focus:ring"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </button>
        </div>
      </ReactModal>
    </>
  );
};

