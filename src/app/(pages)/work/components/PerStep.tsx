import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  desk1: string;
  desk2: string;
  step: string;
  image: string;
  imageAlt: string;
  class: string;
};

const PerStep = (props: Props) => {
  return (
    <>
      <div className="step__1 grid grid-cols-1 items-center justify-center gap-8 xl:grid-cols-2 xl:items-start">
        <Image
          src={props.image}
          alt={`Illustration step ${props.imageAlt}`}
          height={500}
          width={500}
          className=""
        />
        <div
          className={`description ${
            props.class !== "" ? "xl:order-first" : ""
          } flex flex-col gap-8 py-8 text-center xl:py-0 xl:text-start`}
        >
          <div className="title-step">
            <span className="font-bold uppercase text-teal-500">
              {props.step}
            </span>
            <h1 className="h-fit w-full text-4xl font-bold">{props.title}</h1>
          </div>
          <p className="">
            {props.desk1}
            <br />
            <br />
            {props.desk2}
          </p>
        </div>
      </div>
    </>
  );
};

export default PerStep;
