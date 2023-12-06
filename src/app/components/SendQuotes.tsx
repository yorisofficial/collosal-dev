import React from "react";
import Button from "./Button";
import Link from "next/link";

const SendQuotes = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center gap-4 py-6 md:px-16 xl:flex-row">
        <h1 className="w-full text-center text-3xl font-bold xl:max-w-[589px] xl:text-start">
          We have prepared everything, it is time for you to tell the problem
        </h1>
        <div className="mt-8 flex w-full items-center justify-center gap-2 xl:mt-0 xl:w-1/2">
          <Link href="/">
            <Button variant="primary" size="large">
              Send Quote
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="large">
              Ask Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendQuotes;
