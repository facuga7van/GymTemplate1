import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gimnasio - Spinning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
};

const Spinning = () => {
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
        <div
          className="relative shadow-md"
          style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))" }}
        >
          <img
            src="carousel1.jpg"
            alt="Imagen de Tabaquismo"
            className="max-h-[30rem] w-full object-cover"
          />
        </div>

        <div className="md:flex justify-center items-center md:mx-auto md:mt-12 mx-[2rem]">
          <div className="hidden md:block mt-8">
            <img
              src="instr.png"
              alt="Imagen de Tabaquismo"
              className="max-h-[30rem]"
              style={{
                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div>
          <div className="md:w-2/5 m-3">
            <div className="font-serif md:text-[3rem] text-3xl font-bold my-7">
              Lorem ipsum
            </div>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
              feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
              bibendum lorem non ligula aliquet porttitor. Quisque eget blandit
              augue, eget iaculis arcu. Aliquam imperdiet hendrerit lorem, in
              pharetra enim vestibulum quis. Maecenas ornare vulputate nisl, ut
              sagittis felis iaculis vel. Fusce nec diam sit amet
            </p>
            <div className="font-serif text-3xl font-bold my-5">
              Lorem ipsum
            </div>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
              feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
              bibendum lorem non ligula aliquet porttitor. Quisque eget blandit
              augue, eget iaculis arcu. Aliquam imperdiet hendrerit lorem, in
              pharetra enim vestibulum quis. Maecenas ornare vulputate nisl, ut
              sagittis felis iaculis vel. Fusce nec diam sit amet
            </p>
            <div
              className="flex bg-blue-600 text-white min-w-[10rem] px-3 justify-center mt-5 mx-[10rem] border rounded-lg borderad shadow-btn hover:scale-110  all duration-300 ease-in-out"
              style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))" }}
            >
              <Link href="/contact" className="text-xl p-3">
                Contactanos
              </Link>
            </div>
          </div>
        </div>
        <div
          className="my-8 flex items-center justify-center bg-white flex-col shadow-lg rounded-lg p-8 md:mx-[10rem] mx-[2rem]"
          style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))" }}
        >
          <div className="font-serif text-2xl font-bold">Lorem ipsum?</div>
          <span className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
            feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi bibendum
            lorem non ligula aliquet porttitor. Quisque eget blandit augue, eget
            iaculis arcu. Aliquam imperdiet hendrerit lorem, in pharetra enim
            vestibulum quis. Maecenas ornare vulputate nisl, ut sagittis felis
            iaculis vel. Fusce nec diam sit amet
            <ul className="list-disc list-inside">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
                feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
                bibendum lorem non ligula aliquet porttitor. Quisque eget
                blandit augue, eget iaculis arcu. Aliquam imperdiet hendrerit
                lorem, in pharetra enim vestibulum quis. Maecenas ornare
                vulputate nisl, ut sagittis felis iaculis vel. Fusce nec diam
                sit amet
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
                feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
                bibendum lorem non ligula aliquet porttitor. Quisque eget
                blandit augue, eget iaculis arcu. Aliquam imperdiet hendrerit
                lorem, in pharetra enim vestibulum quis. Maecenas ornare
                vulputate nisl, ut sagittis felis iaculis vel. Fusce nec diam
                sit amet
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend condimentum neque, ac fringilla ante bibendum ac. Ut
                feugiat ullamcorper dolor, a tempor augue aliquam eu. Morbi
                bibendum lorem non ligula aliquet porttitor. Quisque eget
                blandit augue, eget iaculis arcu. Aliquam imperdiet hendrerit
                lorem, in pharetra enim vestibulum quis. Maecenas ornare
                vulputate nisl, ut sagittis felis iaculis vel. Fusce nec diam
                sit amet
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Spinning;
