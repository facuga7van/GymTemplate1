import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gimnasio - Nosotros",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mb-10">
        <div
          className="relative shadow-md"
          style={{ filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))" }}
        >
          <img
            src="carousel1.jpg"
            alt="Imagen para Nosotros"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center mx-auto mt-12">
          <div className="w-2/5 m-3">
            <h1 className="text-3xl font-bold my-5">Lorem ipsum dolor?</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
              feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
              bibendum lorem non ligula aliquet porttitor. Quisque eget blandit
              augue, eget iaculis arcu. Aliquam imperdiet hendrerit lorem, in
              pharetra enim vestibulum quis. Maecenas ornare vulputate nisl, ut
              sagittis felis iaculis vel. Fusce nec diam sit amet neque placerat
              porta. Fusce sagittis sagittis diam, in dictum risus tristique
              nec.
            </p>
            <h1 className="text-3xl font-bold my-5">Lorem ipsum dolor?</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
              feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
              bibendum lorem non ligula aliquet porttitor. Quisque eget blandit
              augue, eget iaculis arcu. Aliquam imperdiet hendrerit lorem, in
              pharetra enim vestibulum quis.
            </p>
            <h1 className="text-3xl font-bold my-5">Lorem ipsum dolor?</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
              feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
              bibendum lorem non ligula aliquet porttitor.
            </p>
            <div
              className="flex bg-blue-600 text-white min-w-[10rem] px-3 justify-center mt-5 mx-[10rem] border rounded-lg borderad shadow-btn hover:scale-110  all duration-300 ease-in-out"
              style={{ filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))" }}
            >
              <Link href="/contact" className="text-xl p-3">
                Contactanos
              </Link>
            </div>
          </div>
          <div className="hidden md:block mt-8">
            <img
              src="instr.png"
              alt="Imagen"
              className="max-h-[30rem]"
              style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
