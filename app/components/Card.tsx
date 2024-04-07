import React, { useState } from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  alt: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, alt, desc }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const constrain = 100;
  const maxRot = 0.5;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const calcX = (e.clientY - box.y - box.height / 2) / constrain;
    const calcY = -(e.clientX - box.x - box.width / 2) / constrain;

    const limitedX = Math.min(Math.max(calcX, -maxRot), maxRot);
    const limitedY = Math.min(Math.max(calcY, -maxRot), maxRot);

    const transform = `perspective(100px) rotateX(${limitedX}deg) rotateY(${limitedY}deg)`;
    setTransformStyle(transform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className="w-full max-w-[30rem]  md:w-1/2 lg:w-1/3 p-2 mx-5 hover:skew-y-2 transition duration-300 ease-in-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      <div className="border rounded-lg shadow-lg bg-white">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full rounded-tl-lg rounded-tr-lg h-auto max-h-[15rem] object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-3">{title}</h2>
          <p>{desc}</p>
          <div className="flex justify-end mt-5">
            <a
              href={alt}
              className="text-lg p-3 border rounded-sm borderad hover:shadow-lg hover:scale-[1.05] transition duration-300 ease-in-out"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
