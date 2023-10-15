import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrAd - Tabaquismo",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};
const Tabaquismo = () => {
  return (
    <>

      <div className="mb-10">
        <div className="relative shadow-md">
          <img
            src="smoking.jpg"
            alt="Imagen de Tabaquismo"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
          <div className="hidden md:block mt-8">
            <img
              src="cigDraw.png"
              alt="Imagen de Tabaquismo"
              className="max-h-[30rem]"
              style={{
                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div>
          <div className="md:w-2/5 m-3">
            <div className="font-serif md:text-[3rem] text-3xl font-bold my-7">
              Tabaquismo
            </div>
            <p className="text-xl">
              Es una enfermedad crónica causada por la adicción a la nicotina.
              Durante el consumo, el cigarrillo va deteriorando la calidad de
              vida y desmejorando el aspecto físico de las personas. Esta
              adicción acarrea problemas físicos como los cardiovasculares,
              problemas pulmonares y respiratorios, insuficiencia sexual,
              problemas circulatorios, cáncer y otras enfermedades. En el
              aspecto físico se ve el deterioro de la piel, que puede lucir un
              aspecto deshidratado, debilidad en el pelo y uñas, entre otros.
            </p>
            <div className="font-serif text-3xl font-bold my-5">
              Tratamiento
            </div>
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
        <div className="my-8 flex items-center justify-center bg-white flex-col shadow-lg rounded-lg p-8 md:mx-[10rem] mx-[2rem]">
          <div className="font-serif text-2xl font-bold">¿Sabías qué?</div>
          <span className="text-lg">
            En muchas personas predomina la idea de que se puede dejar de fumar
            simplemente con fuerza de voluntad, desconociendo que la adicción es
            una enfermedad crónica. Al menos tres tipos de prueba conducen a
            esta conclusión:
            <ul className="list-disc list-inside">
              <li>
                Refuerzo: En la terminología psicológica, el refuerzo se refiere
                a un estímulo que motiva a una persona a esforzarse por obtener
                más. Es ampliamente reconocido que la nicotina estimula la
                liberación del neurotransmisor dopamina en las áreas del cerebro
                que están involucradas en la estimulación.
              </li>
              <li>
                Tolerancia: Investigaciones han revelado que se produce un
                desarrollo rápido de tolerancia a los efectos de la nicotina.
                Cuando alguien comienza a fumar, suele experimentar una serie de
                efectos desagradables, como mareos o náuseas, pero con el
                tiempo, estos síntomas desaparecen en cuestión de días o semanas
                a medida que la persona continúa fumando.
              </li>
              <li>
                Abstinencia: Se trata de un conjunto de reacciones físicas que
                la persona no puede evitar ni controlar debido a la falta de
                nicotina. Estas reacciones incluyen irritabilidad,
                intranquilidad, depresión, trastornos del sueño y sudoración
                fría. La nicotina es una droga altamente adictiva, y dejarla sin
                efecto requiere tratamiento. Nuestro enfoque terapéutico se
                dirige al centro de la adicción, eliminando la dependencia
                orgánica. Esto significa que la persona puede dejar de fumar sin
                experimentar el síndrome de abstinencia y se encuentra en
                condiciones de superar el hábito.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Tabaquismo;
