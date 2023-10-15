import Head from 'next/head';
import Link  from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>TrAd - Nosotros</title>
      </Head>
      <div className="mb-10">
        <div className="relative shadow-md">
          <img
            src="AboutUs.jpg"
            alt="Imagen para Nosotros"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center mx-auto mt-12">
          <div className="w-2/5 m-3">
            <h1 className="text-3xl font-bold my-5">¿Quiénes somos?</h1>
            <p className="text-xl">
              Somos un equipo interdisciplinario altamente calificado que
              trabaja de manera coordinada en el proceso de recuperación de
              adicciones. Nuestra firme dedicación se centra en la
              rehabilitación de aquellos que desean dejar de consumir, y estamos
              equipados con las herramientas necesarias para guiarlos en esta
              transformadora travesía.
            </p>
            <h1 className="text-3xl font-bold my-5">¿Cómo trabajamos?</h1>
            <p className="text-xl">
              En nuestro enfoque terapéutico, ofrecemos una amplia gama de
              opciones que incluyen tratamientos <b>LÁSER</b> de última generación, así
              como enfoques convencionales probados y efectivos. La elección
              entre estos métodos se determina cuidadosamente mediante una
              evaluación exhaustiva realizada por nuestro equipo de expertos, y
              depende directamente de la problemática específica que cada
              persona presenta en relación a su consumo. Esta selección
              meticulosa asegura que cada individuo reciba un tratamiento
              personalizado y adaptado a sus necesidades únicas, maximizando así
              sus posibilidades de éxito en el camino hacia la recuperación.
            </p>
            <h1 className="text-3xl font-bold my-5">¿Qué hace el láser?</h1>
            <p className="text-xl">
              Nuestro tratamiento con <b>LÁSER</b> se enfoca directamente en el centro
              de la adicción, reduciendo eficazmente el síndrome de abstinencia.
              Es una opción segura y sin contraindicaciones, siendo indoloro,
              inocuo y libre de efectos secundarios.
            </p>
            <div className="mt-12">
              <Link href="/contact" className="bg-blue-600 border border-blue-900 text-white rounded-md shadow-md py-2 px-4 text-2xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="hidden md:block mt-8">
            <img
              src="nurse.png"
              alt="Imagen de Enfermero"
              className="max-h-[30rem]"
              style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
