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
        <h1 className="title text-center text-[3rem]">Contact</h1>
      </div>

      <div className="md:flex justify-center items-center py-8 mx-auto md:mx-[10rem]">
        <div className="mx-auto md:w-1/2 p-8 md:mx-5">
        <h2 className="text-3xl font-semibold">
  The only <span className="text-red-500">bad workout</span> is the one that doesn't happen.
</h2>
<h2 className="text-3xl font-semibold">
  The first step towards a <span className="text-red-500">stronger</span> you starts here.
</h2>
<h2 className="text-3xl font-semibold">
  The most important decision is to take the first step,{" "}
  <span className="text-red-500">contact us</span>.
</h2>

          <div>
            <hr className="border-t-2" style={dividerStyle} />
          </div>
          <div className="mt-8">
            <h2 className="text-xl">
              Teléfono:{" "}
              <a
                href="https://wa.me/message/xxxxxxxxxxxxx" // Here goes your link to wpp
                className="md:text-gray-800 text-[#01b774]  md:hover:text-[#01b774]"
              >
                (+54) 9 11 1234-1234
              </a>
            </h2>
            <h2 className="text-xl">
              Email:{" "}
              <a
                href="mailto:gmailgmail@gmail.com" // here goes your mail
                className="text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]"
              >
                gmailgmail@gmail.com
              </a>
            </h2>
          </div>
        </div>
        <div className="mx-auto md:w-1/2 p-8 md:mx-5 rounded-lg shadow-3xl bg-white" style={{ filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))" }}>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="mb-3">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                name="from_name"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700">
                E-mail address
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
                placeholder="Write your message."
                name="message"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
                style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))" }}
              >
                Send
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
        <h2 className="text-xl font-semibold mb-3 text-center">
          <a className="text-green-500">Success!</a>
        </h2>
        <div>
            <hr className="" style={dividerStyle} />
          </div>
        <p className="text-md my-3 text-center mt-5">
          Message sended.
        </p>
        <div className="flex justify-center mt-5 mx-[10rem] border rounded-lg borderad shadow-btn hover:scale-110  all duration-300 ease-in-out">
          <button
            className="  px-4 py-2 rounded-md  focus:outline-none focus:ring"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
};

