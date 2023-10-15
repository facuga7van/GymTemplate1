import React from "react";
import Carousel from "./components/Carousel";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrAd - Tratamiento de Adicciones",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};

export default function HomePage() {
  const dividerStyle = {
    width: "40%",
    borderTop: "2px solid #ccc",
    marginTop: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",
  };

  

  return (
    <>

      <Carousel />
      <div>
        <div className="my-10">
          <h1 className="title text-center text-[3rem] font-bold">
            TrAd - Tratamiento de Adicciones
          </h1>
          <h2 className="text-center text-2xl italic">
            Nuevos tratamientos con tecnología LÁSER para dejar de FUMAR y
            consumir todo tipo de sustancia.
          </h2>
        </div>
      </div>
      <div>
        <hr className="border-t-2" style={dividerStyle} />
      </div>
      <div className="flex  justify-center items-center flex-wrap mx-[auto] my-10">
        <div className="w-full max-w-[30rem] min-h-[35rem] md:w-1/2 lg:w-1/3 p-2">
          <div className="border rounded-lg shadow-lg bg-white">
            <img
              src="tabac.png"
              alt="Tabaquismo"
              className="w-full rounded-tl-lg rounded-tr-lg h-auto max-h-[15rem] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">Tabaquismo</h2>
              <p>
                Es una enfermedad crónica causada por la adicción a la nicotina
                que deteriora la calidad de vida y provoca problemas físicos
                como enfermedades cardiovasculares, pulmonares, cáncer y daño en
                la apariencia física.
              </p>
              <div className="flex justify-end mt-5">
                <a
                  href="tabaquismo"
                  className="text-lg p-3 border rounded-sm borderad hover:shadow-lg hover:scale-[1.05] transition duration-300 ease-in-out"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[30rem] min-h-[35rem] sm:w-1/2 md:w-1/3 p-2">
          <div className="border rounded-lg shadow-lg bg-white">
            <img
              src="alcoh.jpg"
              alt="Alcoholismo"
              className="w-full rounded-tl-lg rounded-tr-lg  h-auto max-h-[15rem]  object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">Alcoholismo</h2>
              <p>
                Es una adicción que causa dependencia física y emocional al
                alcohol, generando problemas de salud y sociales. A lo largo del
                tiempo, afecta tanto la salud física como las relaciones
                sociales y familiares de la persona.
              </p>
              <div className="flex justify-end mt-5">
                <a
                  href="alcoholismo"
                  className="text-lg p-3 border rounded-sm borderad hover:shadow-lg hover:scale-[1.05] transition duration-300 ease-in-out"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[30rem] min-h-[35rem] sm:w-1/2 md:w-1/3 p-2">
          <div className="border rounded-lg shadow-lg  bg-white">
            <img
              src="otheradct.jpg"
              alt="Otras adicciones"
              className="w-full rounded-tl-lg rounded-tr-lg h-auto max-h-[15rem] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">Otras adicciones</h2>
              <p>
                Existen adicciones de comportamiento y de consumo. Causan
                euforia pero también problemas mentales y sociales. El
                tratamiento incluye láser para las adicciones de consumo y apoyo
                psicológico personalizado para las de comportamiento.
              </p>
              <div className="flex justify-end mt-5">
                <a
                  href="otrasadicciones"
                  className="text-lg p-3 border rounded-sm borderad hover:shadow-lg hover:scale-[1.05] transition duration-300 ease-in-out"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 flex max-w-[70rem] items-center justify-center flex-col bg-white shadow-lg rounded-lg p-8 md:mx-auto mx-5">
        <div className="font-serif text-2xl font-bold">¿Quiénes somos?</div>
          <p className="text-xl">
            Somos TrAd, especialistas en el tratamiento de adicciones.
            Ofrecemos tratamientos vanguardistas que incorporan tecnología
            láser para ayudar a las personas a dejar de fumar y superar todo
            tipo de adicciones, incluyendo el consumo de drogas. Nuestros
            servicios abarcan tanto tratamientos láser como enfoques
            convencionales. La elección del método adecuado se determina
            mediante una evaluación realizada por nuestro equipo, adaptándose
            a las necesidades específicas de cada individuo y la naturaleza de
            su adicción.
          </p>
          <div className="flex justify-center mt-5 mx-[10rem] border rounded-lg borderad shadow-btn hover:scale-110  all duration-300 ease-in-out">
              <Link
                href="/contact"
                className="text-xl p-3"
              >
                Contactanos
              </Link>
            </div>
      </div>
    </>
  );
}
