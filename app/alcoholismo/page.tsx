import Link from "next/link";
import Head from "next/head";

const Alcoholismo = () => {
  return (
    <>
      <Head>
        <title>TrAd - Alcoholismo</title>
      </Head>
      <div className="mb-10">
        <div className="relative shadow-md">
          <img
            src="alcoholism.jpg"
            alt="Imagen de Alcoholismo"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
        <div className="hidden md:block mt-8">
              <img
                src="alcDraw.png"
                alt="Imagen de Alcoholismo"
                className="max-h-[30rem]"
                style={{
                  filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
                }}
              />
            </div>
          <div className="md:w-2/5 m-3">
            <div className="font-serif md:text-[3rem] text-3xl font-bold my-7">Alcoholismo</div>
            <p className="text-xl">
              El consumo excesivo de alcohol se traduce en una enfermedad de por
              vida, es una adicción de dependencia física y emocional. El
              alcohol es una droga socialmente aceptada y permitida donde en los
              últimos años se ha incrementado el nivel de consumo desde temprana
              edad, generando una problemática social y en salud pública. El
              deterioro de la persona a lo largo de una vida de consumo es
              significativo, no solamente el físico y psíquico, si no también,
              el desmembramiento y ruptura de su entorno social y familiar.
            </p>
            <div className="font-serif text-3xl font-bold my-5">Tratamiento</div>
            <p className="text-xl">
              El tratamiento consiste en aplicar en distintos puntos de la cara
              un <b>LÁSER</b> para adormecer el centro de adicción y quitarle a
              la persona la dependencia física de la sustancia. Al desaparecer
              la dependencia orgánica podrá realizar el periodo de
              deshabituación sin el llamado físico al consumo.
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
          
        </div>
        <div className="my-8 flex items-center justify-center flex-col bg-white shadow-lg rounded-lg p-8 md:mx-[10rem] mx-[2rem]">
          <div className="font-serif text-2xl font-bold">¿Sabías qué?</div>
          <p className="text-lg">
            El alcoholismo aumenta significativamente el riesgo de enfermedades
            hepáticas, daño cerebral irreversible y problemas mentales como la
            depresión. Además, el abuso de alcohol puede afectar negativamente
            las relaciones personales, llevar a problemas financieros, debilitar
            el sistema inmunológico y perturbar el sueño. Conducir bajo los
            efectos del alcohol es peligroso y puede resultar en accidentes
            mortales, y el costo financiero de mantener esta adicción puede ser
            abrumador. El alcoholismo no solo afecta la salud física, sino que
            también tiene un impacto significativo en la calidad de vida y las
            relaciones personales. Es importante buscar ayuda y tratamiento para
            superar esta adicción y evitar sus graves consecuencias.
          </p>
        </div>
      </div>
    </>
  );
};

export default Alcoholismo;
