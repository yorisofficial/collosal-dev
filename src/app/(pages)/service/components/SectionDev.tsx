import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import DetailsNavigation from "./DetailsNavigation";
import Header from "./Header";

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
                  className="h-[400px] w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="main-content flex h-full w-full flex-col gap-8 xl:order-first xl:gap-14">
            <Header
              tagline="Development"
              title="Don't let your idea get caught by others, design a prototype for your idea"
              description="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
            />
            <div className="card-group flex flex-col gap-4">
              <div className="card-item flex w-full cursor-pointer items-center justify-start rounded-md bg-white/10 px-8 py-3 duration-500 hover:bg-white/20">
                <span className="flex items-center gap-2">
                  <IconDeviceMobile size={30} /> Mobile App Development
                </span>
              </div>
              <div className="card-item flex w-full cursor-pointer items-center justify-start rounded-md bg-white/10 px-8 py-3 duration-500 hover:bg-white/20">
                <span className="flex items-center gap-2">
                  <IconDeviceDesktop size={30} /> Desktop App Development
                </span>
              </div>
              <div className="card-item flex w-full cursor-pointer items-center justify-start rounded-md bg-white/10 px-8 py-3 duration-500 hover:bg-white/20">
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
