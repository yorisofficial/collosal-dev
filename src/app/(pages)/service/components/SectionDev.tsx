import {
  IconArrowRight,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DetailsNavigation from "./DetailsNavigation";

const SectionDev = () => {
  return (
    <div>
      <div className="section-devlopment flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-8 md:px-16 md:py-12 xl:gap-32 xl:px-44">
        <div className="body-content grid h-full w-full grid-cols-1 items-center justify-center gap-8 xl:grid-cols-2 xl:gap-14">
          <div className="image-content relative mt-8 h-full w-full xl:mt-0">
            <div className="absolute left-0 top-0 -z-10 h-full w-full">
              <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-teal-500/10 blur-3xl"></div>
              <div className="absolute right-0 top-0 -z-10 h-[150px] w-[150px] rounded-full bg-pink-500/20 blur-3xl"></div>
            </div>
            <div className="image-design z-20 h-full w-full p-4">
              <div className="ilustrastion flex h-full w-full items-center justify-center rounded-md">
                <Image
                  src="/image/Service/Development Illustration.svg"
                  width={500}
                  height={500}
                  alt="UI Design Illustration"
                />
              </div>
            </div>
          </div>
          <div className="main-content flex h-full w-full flex-col gap-8 xl:order-first xl:gap-14">
            <div className="header-content flex flex-col gap-7">
              <div className="flex w-full flex-col items-center justify-center gap-1 xl:items-start">
                <h1 className="text-center font-semibold uppercase text-[#16FCD2] md:text-start">
                  DEVELOPMENT
                </h1>
                <h1 className="text-center text-3xl font-bold xl:w-3/4 xl:text-start">
                  Create solutions to repetitive problems, design applications
                  and access anywhere!
                </h1>
              </div>
              <p className="text-center font-light text-white/70 xl:w-3/4 xl:text-start">
                Just tell us your repetitive problem or the primitive method
                used today, and we will create a digital solution.
              </p>
            </div>
            <div className="card-group flex flex-col gap-4">
              <div className="card-item flex w-full items-center justify-start rounded-md bg-white/10 p-3">
                <span className="flex items-center gap-2">
                  <IconDeviceMobile size={30} /> Mobile App Development
                </span>
              </div>
              <div className="card-item flex w-full items-center justify-start rounded-md bg-white/10 p-3">
                <span className="flex items-center gap-2">
                  <IconDeviceDesktop size={30} /> Desktop App Development
                </span>
              </div>
              <div className="card-item flex w-full items-center justify-start rounded-md bg-white/10 p-3">
                <span className="flex items-center gap-2">
                  <IconWorld size={30} /> Web Development
                </span>
              </div>
              <DetailsNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDev;
