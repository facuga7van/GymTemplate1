"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Carousel() {
  const slides = [
    {
      url: "Carrousel1.jpg",
    },
    {
      url: "Carrousel2.jpg",
    },
    {
      url: "Carrousel3.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const GoToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[100%] h-[450px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {/* left arrow */}
        <div
          className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] pl-5 pr-3 left-0 text-white hover:text-[#00bf72] hover:-translate-x-0.5 hover:scale-110 transition duration-300 ease-in-out cursor-pointer ${
            showArrows ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))" }}
        >
          <ChevronLeftIcon onClick={prevSlide} width={50} />
        </div>
        {/* right arrow */}
        <div
          className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] pr-5 pl-3 right-0 text-white hover:text-[#00bf72] hover:translate-x-0.5 hover:scale-110 transition duration-300 ease-in-out cursor-pointer ${
            showArrows ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "drop-shadow(2px 0px 5px rgba(0, 0, 0, 1))" }}
        >
          <ChevronRightIcon onClick={nextSlide} width={50} />
        </div>
        <div className="flex absolute bottom-4 left-0 right-0 justify-center py-2 cursor-pointer ">
        {slides.map((slide, slideIndex: number) => (
          <div
            key={slideIndex}
            onClick={() => GoToSlide(slideIndex)}
            className={`h-[0.5rem] mx-[3px] transition-all duration-500 ease-out rounded-md ${
              slideIndex === currentIndex
                ? "bg-[#00bf72] w-[3rem]"
                : "bg-gray-300 w-[1.8rem] "
            }`}
            style={{ filter: "drop-shadow(2px 5px 8px rgba(0, 0, 0, 0.7))" }}
            
          ></div>
        ))}
      </div>
      </div>
      
    </div>
  );
}
