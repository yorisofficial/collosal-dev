import React from "react";
import Button from "../Button";
import Link from "next/link";

const DesktopMock = ({ className }: { className: string }) => {
  return (
    <div
      className={`desktop-mode w-full md:min-w-[300px] xl:min-w-[500px] ${className}`}
    >
      <div className="phone-mockup flex w-full flex-col items-center justify-center gap-6 rounded-t-md bg-white/10 p-8 pb-0">
        <div className="h-6 w-44 rounded-full bg-white/10"></div>
        <div className="h-6 w-32 rounded-full bg-white/10"></div>
        <div className="min-h-[240px] w-[95%] rounded-t-xl bg-white/10 xl:w-3/4"></div>
      </div>
      <div className="deskscription flex w-full flex-col items-center justify-center gap-6 px-0 py-8">
        <h1 className="text-center text-xl font-semibold">
          The Desktop App Landing Page
        </h1>
        <p className="text-base font-light">A landing page for desktop app</p>
        <Link href={"/"}>
          <Button variant="borderlessRoundedWhite" size="small">
            Detail
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopMock;
