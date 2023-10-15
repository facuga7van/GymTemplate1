import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrAd - Preguntas Frecuentes",
  description:
    "Tratamientos de Adicciones ofrece un tratamiento con laser para personas que luchan con adicciones, para dejar de fumar y de consumir todo tipo de sustancias.",
};
export default function FAQ() {
  const dividerStyle = {
    width: "40%",
    borderTop: "2px solid #ccc",
    padding: "1rem",
  };

  return (
    <>
      <div>
        <img src="faq.jpg" alt="Imagen para FAQ" />
      </div>
      <div className="flex justify-center items-center mx-auto mb-10">
        <div className="md:w-2/5 m-3">
          <h1 className="text-3xl font-bold my-2">Preguntas frecuentes</h1>
          <div>
            <hr className="border-t-2" style={dividerStyle} />
          </div>
          <h3 className="text-[1.5rem] font-bold my-2">¿El LÁSER duele?</h3>
          <p className='text-[1.3rem]'>
            No, el LÁSER es indoloro, inocuo, no genera efectos secundarios,
            no tiene contraindicaciones y puede aplicarse a pesar de estar
            haciendo otros tratamientos
          </p>
          <h3 className="text-[1.5rem] font-bold my-2">¿Me tiene que pinchar?</h3>
          <p className='text-[1.3rem]'>
            No, la aplicación es apoyando de manera suave un puntero en
            lugares determinados del rostro.
          </p>
          <h3 className="text-[1.5rem] font-bold my-2">¿Cuánto dura el efecto del LÁSER?</h3>
          <p className='text-[1.3rem]'>
            El efecto dura hasta que vuelve a ingresar la sustancia al
            organismo, en el caso del tabaquismo, no solo aplica al cigarrillo
            en sí, sino también, a los parches, chicles de nicotina,
            vapeadores, comprimidos y todo lo que contenga la droga. Si no hay
            consumo, el efecto continuará.
          </p>
          <h3 className="text-[1.5rem] font-bold my-2">¿Tengo que tomar algo?</h3>
          <p className='text-[1.3rem]'>No se ingiere nada, es todo externo e indoloro.</p>
          <h3 className="text-[1.5rem] font-bold my-2">¿Hay límite de edad para realizar el tratamiento con LÁSER?</h3>
          <p className='text-[1.3rem]'>
            No hay límite de edad, lo puede hacer cualquier persona que esté
            decidida a dejar de consumir.
          </p>
        </div>
        <div className="">
          <img src="faq.png" alt="Imagen de FAQ" className="hidden md:flex max-w-[35rem]" />
        </div>
      </div>
    </>
  );
}
