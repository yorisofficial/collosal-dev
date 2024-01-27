"use client";
import Button from "@/app/components/Button";
import DesktopMock from "@/app/components/mockup/DesktopMock";
import PhoneMock from "@/app/components/mockup/PhoneMock";
import React, { useState } from "react";

const ListProject = () => {
  const [more, setMore] = useState(1);
  const patternProject = [1, 2, 3, 4, 5];
  function handleIncrease() {
    setMore(more + 1);
  }
  function handleDecrease() {
    setMore(more - 1);
  }

  return (
    <>
      {patternProject.slice(0, more).map((index) => (
        <div
          className="mt-4 flex flex-col gap-4 md:flex-row xl:gap-8"
          key={index}
        >
          <div className="h-full h-full w-full">
            <DesktopMock />
          </div>
          <div
            className={`h-full h-full w-full ${
              index % 2 === 0 ? "order-first" : ""
            }`}
          >
            <PhoneMock />
          </div>
        </div>
      ))}

      <div className="mt-16 flex items-center justify-center gap-8 xl:mt-8">
        <Button
          disable={more == 1}
          variant={more == patternProject.length ? "primary" : "primaryWhite"}
          onClick={handleDecrease}
        >
          Show Less
        </Button>
        <span>{more + "/" + patternProject.length}</span>
        <Button
          disable={more >= patternProject.length}
          variant={more >= patternProject.length ? "primaryWhite" : "primary"}
          onClick={handleIncrease}
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default ListProject;
