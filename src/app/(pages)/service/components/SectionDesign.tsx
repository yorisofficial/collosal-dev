import { IconArrowRight, IconLayout2, IconPointer } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DetailsNavigation from "./DetailsNavigation";
import Header from "./Header";

const SectionDesign = () => {
  return (
    <>
      <div className="section-design flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-8 md:gap-8 md:px-16 md:py-12 xl:gap-16 xl:px-44">
        <div className="header-content flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <span className="uppercase text-[#16FCD2]">SERVICES</span>
            <h1 className="w-3/4 max-w-[420px] text-2xl font-bold md:w-1/2 xl:w-full xl:text-3xl">
              We are here to help solve your company&rsquo;s problems
            </h1>
          </div>
        </div>
        <hr className="w-3/4 opacity-50" />
        <div className="body-content grid h-full w-full grid-cols-1 items-center justify-center gap-8 xl:grid-cols-2 xl:gap-14">
          <div className="image-content relative flex h-full w-full items-center justify-center xl:mt-0">
            <div className="absolute left-0 top-0 -z-10 h-full w-full">
              <div className="dot-acc absolute right-0 top-0 -z-10 h-8 w-8 rotate-45 animate-pulse rounded-full bg-indigo-600 blur-sm delay-0 duration-1000 xl:-top-8 xl:right-1/4"></div>
              <div className="dot-acc absolute top-1/2 -z-10 h-16 w-16 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-pink-400 to-red-700 blur-sm delay-75 duration-200 xl:-left-16 xl:top-1/2"></div>
              <div className="dot-acc absolute bottom-0 right-0 -z-10 h-16 w-16 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-green-300 to-green-600 blur-sm delay-150 duration-500 xl:-bottom-16 xl:right-1/4"></div>
            </div>
            <div className="image-design relative z-20 h-full w-full p-4">
              <div className="ilustrastion flex h-full w-full items-center justify-center rounded-md">
                <Image
                  src="/image/Service/designillustration.svg"
                  width={500}
                  height={500}
                  alt="UI Design Illustration"
                  className="h-[400px] w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="main-content flex h-full w-full flex-col justify-center gap-8 xl:order-2 xl:gap-14">
            <Header
              tagline="UI DESIGN"
              title="Don&rsquo;t let your idea get caught by others, design a prototype for your idea"
              description="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
            />
            <div className="card-group grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="card-item -white/10 flex h-full w-full cursor-pointer flex-col gap-4 rounded-md bg-white/5 p-6 backdrop-blur-md duration-500 hover:bg-white/20">
                <div className="heading flex items-center gap-4">
                  <div className="icon w-fit">
                    <IconLayout2 size={30} />
                  </div>
                  <h4 className="font-semibold">Beautiful Design</h4>
                </div>
                <p>Create a modern design for your idea.</p>
              </div>
              <div className="card-item -white/10 flex h-full w-full cursor-pointer flex-col gap-4 rounded-md bg-white/5 p-6 backdrop-blur-md duration-500 hover:bg-white/20">
                <div className="heading flex items-center gap-4">
                  <div className="icon w-fit">
                    <IconPointer size={30} />
                  </div>
                  <h4 className="font-semibold">Beautiful Design</h4>
                </div>
                <p>Create a modern design for your idea.</p>
              </div>
            </div>
            <DetailsNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDesign;
