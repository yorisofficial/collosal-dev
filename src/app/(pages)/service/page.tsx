import SectionDev from "@/app/components/services/SectionDev";
import SectionDesign from "@/app/components/services/SectionDesign";
import SectionMaintenence from "@/app/components/services/SectionMaintenence";
import React from "react";

const page = () => {
  const elements = Array.from({ length: 4 }, (_, index) => (
    <div key={index} className="h-5 w-5 rounded-md bg-white/10"></div>
  ));

  return (
    <div className="mt-24 xl:mt-32">
      <SectionDesign />
      <SectionDev />
      <SectionMaintenence />
    </div>
  );
};

export default page;
