import React from "react";
import Button from "./Button";
import Link from "next/link";
import Footer from "./Footer";

type UndercontructionProps = {
  pageName: string;
};

const Undercontruction: React.FC<UndercontructionProps> = ({ pageName }) => {
  return (
    <div className="mt-32 px-4 xl:px-44">
      <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-4">
        <div className="rounded-full bg-white/10 px-8 py-2">
          <h1 className="text-center text-3xl font-semibold">
            Page <q className="font-bold text-teal-500">{pageName}</q>{" "}
            Undercontruction
          </h1>
        </div>
        <p className="text-center xl:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          omnis sit qui doloribus quo sequi alias fugiat id accusamus earum enim
          dolorum ipsam ipsa beatae similique ex ducimus neque eveniet officia
          labore.
        </p>
        <Link href="/" className="group relative">
          <Button variant="secondary" size="large">
            Back to Home
          </Button>
          <div className="absolute -right-2 -top-2 h-5 w-5 animate-bounce rounded-full bg-teal-500 duration-700 group-hover:right-0 group-hover:top-0 group-hover:scale-90 group-hover:animate-none"></div>
        </Link>
      </div>
    </div>
  );
};

export default Undercontruction;
