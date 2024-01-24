import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import DetailCard from "../components/DetailCard";
import { LISTSERVICE } from "../../../../../constants";
import { FAQSERVICE } from "../../../../../constants";
import FaqCard from "../components/FaqCard";
import Link from "next/link";

const page = () => {
  const cardDetail = LISTSERVICE;
  const faqDetail = FAQSERVICE;
  return (
    <div className="mt-24">
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-12 md:px-16 xl:gap-16 xl:px-44 xl:py-16">
        <Header
          title="Devlopment"
          description="Solve your company's repetitive problems by designing apps"
        />
        <hr className="w-3/4 text-white opacity-20" />
        <div className="body-content">
          <div className="grid w-full gap-8 xl:grid-cols-2">
            <div className="">
              <Image
                src={"/image/Service/Development Illustration.svg"}
                height={500}
                width={500}
                alt="devlopment ilustration"
                className="h-[400px] w-full"
              />
            </div>
            <div className="space-y-16">
              <div className="space-y-8">
                <p className="w-3/4">
                  Just tell us your repetitive problem or the primitive method
                  used today, and we will create a digital solution.
                </p>
                <p className="w-3/4">
                  We can build you a website, a mobile app and a desktop app.
                  All types of applications have a good security system, are
                  easy to maintain, and are high speed.
                </p>
              </div>
              <div className="w-full">
                <ul className="list-inside list-disc space-y-4">
                  <li>Avoid potential bugs with unit testing</li>
                  <li>Removing unused code will speed up the application</li>
                  <li>The modern design pleases the users</li>
                  <li>A good UX will not disappoint users</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-12 md:px-16 xl:gap-16 xl:px-44 xl:py-16">
        <Header
          title="FEATURES"
          description="Here's what you will get when purchasing this service"
        />

        <hr className="w-3/4 text-white opacity-20" />
        <div className="body-content relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="object-tinker absolute left-0 top-0 h-60 w-60 rounded-full bg-pink-600/20 blur-3xl xl:right-1/4 xl:top-8 xl:h-[550px] xl:w-[550px] xl:-translate-x-1/2"></div>
          <div className="object-tinker absolute right-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl xl:-top-16 xl:left-1/2 xl:h-[550px] xl:w-[550px] xl:-translate-x-1/4"></div>
          {cardDetail.map((item, index) => (
            <DetailCard key={index} content={{ ...item }} />
          ))}
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-12 md:px-16 xl:gap-16 xl:px-44 xl:py-16">
        <div className="relative w-full">
          <div className="dot-acc absolute left-0 top-0 h-8 w-8 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-pink-400 to-red-700 blur-sm duration-500 md:h-16 md:w-16 xl:top-0"></div>
          <div className="dot-acc absolute bottom-2/3 right-8 h-8 w-8 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-green-300 to-green-600 blur-sm duration-500 md:h-16 md:w-16 xl:-top-16 xl:right-1/4 xl:translate-x-32"></div>
          <div className="dot-acc absolute bottom-0 right-0 h-6 w-6 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-indigo-300 to-indigo-600 blur-sm duration-500 xl:-bottom-3 xl:-right-3"></div>
          <Header
            title="FAQ"
            description="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <hr className="w-3/4 text-white opacity-20" />
        <div className="body-content grid xl:grid-cols-2 xl:gap-8">
          {faqDetail.map((item, index) => (
            <FaqCard key={index} content={{ ...item }} />
          ))}
        </div>
      </div>
      <div className="footer-page flex w-full items-center justify-center xl:py-16">
        <p>
          Didn&apos;t find an answer?{" "}
          <Link
            href="/quotes"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 underline underline-offset-8"
          >
            Do not hesitate to ask!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
