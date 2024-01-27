import React from "react";
import Button from "../Button";
import Link from "next/link";

interface Props {
  className?: string;
}

const PhoneMock = ({ className }: Props) => {
  return (
    <div className={`phone-mode w-full xl:min-w-[300px]`}>
      <div className="phone-mockup flex w-full flex-col items-center justify-center gap-6 rounded-t-md bg-white/10 p-8 pb-0">
        <div className="h-6 w-44 rounded-full bg-white/10"></div>
        <div className="h-6 w-32 rounded-full bg-white/10"></div>
        <div className="min-h-[240px] w-44 rounded-t-xl bg-white/10"></div>
      </div>
      <div className="deskscription flex w-full flex-col items-center justify-center gap-6 px-0 py-8">
        <h1 className="text-center text-xl font-semibold">
          The Mobile App Landing Page
        </h1>
        <p className="flex flex-nowrap text-base font-light">
          A landing page for mobile app
        </p>
        <Button variant="borderlessRoundedWhite" size="small">
          Detail
        </Button>
      </div>
    </div>
  );
};

export default PhoneMock;
