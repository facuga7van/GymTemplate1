"use client";
import React, { useState, useRef, useEffect, RefObject } from "react";
import Carousel from "./Carousel";
import Link from "next/link";
import Card from "./Card";
import CardInstr from "./CardInstr";
import useIntersection from "../hooks/useIntersection";
import SheetsImages from '../hooks/drive'
import SheetsData from "../hooks/Excel";

export default function Home() {
  const dividerStyle = {
    width: "40%",
    borderTop: "2px solid #ccc",
    marginTop: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",
  };

  const [isIntersecting, ref] = useIntersection({
    treshold:1,
  })
  
  const [isIntersecting2, ref2] = useIntersection({
    treshold:1,
  })

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Carousel />
      <div>
        <div className="my-10">
          <h1 className="title text-center text-[3rem] font-bold">
            Gimnasio Gimnasio
          </h1>
          <h2 className="text-center text-2xl italic">
            Musculación - Crossfit - Spinning
          </h2>
        </div>
      </div>
      <div className="skew-y-3 py-[3rem] ">
        <div className={classNames(
          isIntersecting
          ? "opacity-100 transition-all duration-700 ease-in-out"
          : "opacity-0 transition-all duration-700 ease-in-out",
          "flex justify-center items-center flex-wrap mx-[auto] -skew-y-3"
        )} ref={ref as RefObject<HTMLDivElement> }>
          <Card
            title="Musculacion"
            imageSrc="musc.jpg"
            alt="musculacion"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nibh mollis, accumsan justo at, dapibus erat."
          />
          <Card
            title="Crossfit"
            imageSrc="cross.jpg"
            alt="crossfit"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nibh mollis, accumsan justo at, dapibus erat."
          />
          <Card
            title="Spinning"
            imageSrc="spin.jpg"
            alt="spinning"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nibh mollis, accumsan justo at, dapibus erat."
          />
        </div>
      </div>
      <div className="instructors" id="instructors">
        <div className="my-10">
          <h2 className="text-center title text-[2.5rem] ">Nuestros instructores</h2>
          <hr
            style={{
              width: "40%",
              borderTop: "2px solid #ccc",
              marginTop: "0.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "1rem",
            }}
          />
        </div>
      </div>
      <div className="-skew-y-3 py-10 ">
      <div className={classNames(
          isIntersecting2
          ? "opacity-100 transition-all duration-700 ease-in-out"
          : "opacity-0 transition-all duration-700 ease-in-out",
          "flex flex-wrap justify-center align-center mx-auto md:space-x-[5rem] my-5 skew-y-3")}style={{
            filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))",
          }} ref={ref2 as RefObject<HTMLDivElement> }
          >
            <CardInstr
              title="Maria Rodriguez"
              imageSrc="woman.jpg"
              alt="Instructora"
            />
            <CardInstr title="Juan Perez" imageSrc="man.jpg" alt="Instructor" />
          </div>
      </div>
      <div>
      <SheetsData />
      </div>
      <div className="flex flex-col gap-12 items-center">
      <h2 className="text-center title text-[2.5rem] ">Galeria</h2>
      <div className="flex flex-col gap-6 max-w-[55%] items-center">
          <SheetsImages />
        </div>
      </div>
      
      
    </>
  );
}
