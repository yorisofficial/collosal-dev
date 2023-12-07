import { IconArrowRight, IconLayout2, IconPointer } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionDesign = () => {
  return (
    <div>
      <div className="section-design flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-8 md:px-16 md:py-12 xl:gap-32 xl:px-44">
        <div className="header-content flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <h1 className="uppercase text-[#16FCD2]">SERVICES</h1>
            <h1 className="w-3/4 max-w-[420px] font-bold md:w-1/2 xl:w-full xl:text-3xl">
              We are here to help solve your company&rsquo;s problems
            </h1>
          </div>
        </div>
        <hr className="w-3/4 opacity-50" />
        <div className="body-content grid h-full w-full grid-cols-1 items-center justify-center gap-8 xl:grid-cols-2 xl:gap-14">
          <div className="image-content relative flex h-full w-full items-center justify-center xl:mt-0">
            <div className="absolute left-0 top-0 -z-10 h-full w-full">
              <div className="dot-acc absolute right-0 top-0 -z-10 h-8 w-8 rotate-45 animate-pulse rounded-full bg-indigo-600 blur-sm delay-0 duration-1000 xl:-top-16 xl:right-1/4"></div>
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
                />
              </div>
            </div>
          </div>
          <div className="main-content flex h-full w-full flex-col justify-center gap-8 xl:order-2 xl:gap-14">
            <div className="header-content flex flex-col gap-7">
              <div className="flex w-full flex-col items-center justify-center gap-1 xl:items-start">
                <h1 className="text-center font-semibold uppercase text-[#16FCD2] md:text-start">
                  UI DESIGN
                </h1>
                <h1 className="text-center text-3xl font-bold xl:w-3/4 xl:text-start">
                  Don&rsquo;t let your idea get caught by others, design a
                  prototype for your idea
                </h1>
              </div>
              <p className="text-center font-light text-white/70 xl:w-3/4 xl:text-start">
                Delegate your ideas as quickly as possible, create beautiful
                designs and vivid prototypes.
              </p>
            </div>
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
            <div className="flex w-full items-center justify-end">
              <Link
                href="/service"
                className="flex items-center gap-2 duration-500"
              >
                Service Detail <IconArrowRight size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDesign;
