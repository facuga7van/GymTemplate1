import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrAd - Otras Adicciones",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};

const OtrasAdicciones = () => {
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
      <div className="mb-10">
        <div className="relative shadow-md">
          <img
            src="sobredosis.jpg"
            alt="Imagen de Adicciones"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
          <div className="hidden md:block mt-8">
            <img
              src="cocDraw.png"
              alt="Imagen de Cocaina"
              className="max-h-[30rem]"
              style={{
                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div>
          <div className="md:w-2/5 m-3">
            <div className="font-serif md:text-[3rem] text-3xl font-bold my-7">
              Cocainomanía
            </div>
            <p className="text-xl">
              No hay una causa exacta por el cual una persona se inicia en el
              consumo de sustancias psicoactivas, el factor es multicausal,
              puede ser por sus genes, la acción de la droga, el sufrimiento
              emocional, la ansiedad, la depresión etc. Cuando se genera un
              consumo problemático la persona sufre un deterioro biopsicosocial,
              llevándolo a un estado de pérdida total y absoluta. En el consumo
              de cocaína es notorio como se desarrollan cambios consecuentes
              como: Irritabilidad, hipervigilancia, pensamientos paranoide,
              deterioro de las relaciones, alteraciones en la alimentación y
              sueño.
              <b>
                La adicción es la única enfermedad que te quita la vida antes de
                morir.
              </b>
              El tratamiento consiste en aplicar en distintos puntos de la cara
              un LÁSER para adormecer el centro de adicción y quitarle a la
              persona la dependencia física de la sustancia. Al desaparecer la
              dependencia orgánica podrá realizar el periodo de deshabituación
              sin el llamado físico al consumo.
            </p>
            <div>
              <hr className="border-t-2" style={dividerStyle} />
            </div>
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
        <div className="mt-10">
          <hr style={dividerStyle} />
        </div>
        <div className="flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
          <div className="md:w-2/5 m-3">
            <div className="font-serif md:text-[3rem] text-3xl font-bold my-7">
              Ludopatía
            </div>
            <p className="text-xl">
              Toda persona atravesada por esta problemática (juegos de azar),
              tiene su vida afectada y también la de su entorno. El único
              propósito es el de conseguir dinero para volver a jugar a
              cualquier costo. Dejando de lado sus responsabilidades,
              obligaciones y convirtiéndose en personas mentirosas,
              manipuladoras y desafectivizadas. La base del tratamiento es
              lograr la remisión completa del juego para poder obtener cambios
              de pensamientos, auto exposición, conductas alternativas,
              entrenamiento en solución de problemas y prevención de recaídas.
            </p>
            <div>
              <hr className="border-t-2" style={dividerStyle} />
            </div>
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
          </div>
          <div className="hidden md:block mt-8">
            <img
              src="ludoDraw.png"
              alt="Imagen de Ludopatia"
              className="max-h-[30rem]"
              style={{
                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div>
        </div>
        <div className="mt-10">
          <hr style={dividerStyle} />
        </div>
        <div className="flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
          <div className="hidden md:block mt-8">
            <img
              src="pilDraw.png"
              alt="Imagen de Cocaina"
              className="max-h-[30rem]"
              style={{
                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div>
          <div className="md:w-2/5 m-3">
            <div className="font-serif md:text-[3rem] text-3xl font-bold my-7">
              Otras Adicciones
            </div>
            <p className="text-xl">
              Existen varias adicciones, pueden ser de conducta (juego, sexo,
              tecnología) y de ingestión (nicotina, alcohol, cocaína, marihuana,
              opio, sedantes e hipnóticos, anfetaminas, éxtasis, heroína). En su
              mayoría causan efectos de euforia, sensación de aumento de
              energía, disminución de apetito, estado de alerta, agudeza mental,
              aumento de la presión arterial y del ritmo cardíaco. Como
              consecuencia de esta problemática, se deteriora la capacidad de
              pensar con claridad, hay perdida de la atención y malas conductas
              sociales. Esto va generando un deterioro significativo en todas
              sus relaciones sociales y dándole comienzo a una vida de pérdidas,
              donde reina el maltrato emocional y la negligente, el aislamiento
              de grupos de amigos y perdida familiar. También se manifiesta
              debilidad en los vínculos afectivos como padres e hijos y una
              pobre comunicación.
            </p>
            <div>
              <hr className="border-t-2" style={dividerStyle} />
            </div>
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
      </div>
    </>
  );
};

export default OtrasAdicciones;
