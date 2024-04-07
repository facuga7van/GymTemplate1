import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gimnasio - Preguntas Frecuentes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
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
        <img src="carousel1.jpg" alt="Imagen para FAQ" className="max-h-[30rem] w-full object-cover" />
      </div>
      <div className="flex justify-center items-center mx-auto mb-10 my-10">
        <div className="md:w-2/5 m-3">
          <h1 className="text-3xl font-bold my-2">Lorem ipsum</h1>
          <div>
            <hr className="border-t-2" style={dividerStyle} />
          </div>
          <h3 className="text-[1.5rem] font-bold my-2">Lorem ipsum?</h3>
          <p className='text-[1.3rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.
          </p>
          <h3 className="text-[1.5rem] font-bold my-2">Lorem ipsum?</h3>
          <p className='text-[1.3rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.
          </p>
          <h3 className="text-[1.5rem] font-bold my-2">Lorem ipsum?</h3>
          <p className='text-[1.3rem]'>
            ELorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.
          </p>
          <h3 className="text-[1.5rem] font-bold my-2">Lorem ipsum?</h3>
          <p className='text-[1.3rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.</p>
          <h3 className="text-[1.5rem] font-bold my-2">Lorem ipsum?</h3>
          <p className='text-[1.3rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a nibh mollis, accumsan justo at, dapibus erat.
          </p>
        </div>
        <div className="">
          <img src="instr.png" alt="Imagen de FAQ" className="hidden md:flex max-w-[35rem]" />
        </div>
      </div>
    </>
  );
}
