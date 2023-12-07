import React from "react";
import Button from "../Button";
import Link from "next/link";
import Footer from "../Footer";

const Undercontruction = () => {
  return (
    <div className="mt-32 flex items-center justify-center px-4 xl:px-44">
      <div className="flex h-[60vh] w-full max-w-screen-2xl flex-col items-center justify-center gap-4">
        <div className="rounded-full bg-white/10 px-8 py-2">
          <h1 className="text-center text-3xl font-semibold">
            Page Undercontruction
          </h1>
        </div>
        <p className="text-center xl:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          omnis sit qui doloribus quo sequi alias fugiat id accusamus earum enim
          dolorum ipsam ipsa beatae similique ex ducimus neque eveniet officia
          labore.
        </p>
        <Link href="/">
          <Button variant="secondary" size="large">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Undercontruction;
