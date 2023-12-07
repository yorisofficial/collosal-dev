import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative flex w-full max-w-screen-2xl flex-col gap-32 px-4 py-8 md:px-16 xl:px-44">
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="dot-acc absolute right-4 top-0 h-8 w-8 rotate-45 rounded-full bg-gradient-to-r from-pink-400 to-red-700 blur-sm md:right-16 md:h-16 md:w-16 xl:top-0"></div>
          <div className="dot-acc absolute bottom-2/3 left-4 h-8 w-8 rotate-45 rounded-full bg-gradient-to-r from-green-300 to-green-600 blur-sm md:left-16 md:h-16 md:w-16 xl:top-32"></div>
        </div>
        <div className="content-quote flex w-full flex-col">
          <div className="tems-center flex w-full flex-col justify-between xl:flex-row">
            <h1 className="w-full text-center text-3xl font-bold xl:max-w-[589px] xl:text-start">
              We have prepared everything, it is time for you to tell the
              problem
            </h1>
            <div className="mt-8 flex w-full items-center justify-center gap-2 xl:mt-0 xl:w-1/2">
              <Link href="/quotes">
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
        <div className="grid h-full w-full grid-cols-2 gap-6 text-white/50 md:grid-cols-3 xl:grid-cols-4 xl:gap-3">
          <div className="content-footer brand-footer col-span-2 flex w-full flex-col items-start justify-start md:col-span-3 xl:col-span-1">
            <div className="flex gap-2">
              <Image
                src="/image/footer/CollectionOutline.svg"
                width={40}
                height={40}
                className=""
                alt="logo"
              />
              <h1 className="text-2xl font-semibold text-white">Collosal.</h1>
            </div>
            <p className="mt-4 font-semibold">
              Copyright © 2021 Design By Collosal LLC
            </p>
          </div>
          <div className="content-footer service-footer w-full">
            <div className="header-footer">
              <h1 className="text-xl uppercase text-white">service</h1>
            </div>
            <div className="body-footer mt-4 flex flex-col items-start justify-center gap-2">
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Web Development
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                App Development
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                UI Design
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Consultation
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Maintenance
              </Link>
            </div>
          </div>
          <div className="content-footer company-footer w-full">
            <div className="header-footer">
              <h1 className="text-xl uppercase text-white">company</h1>
            </div>
            <div className="body-footer mt-4 flex flex-col items-start justify-center gap-2">
              <Link
                href="/about"
                className="capitalize duration-500 hover:text-white"
              >
                about
              </Link>
              <Link
                href="/contact"
                className="capitalize duration-500 hover:text-white"
              >
                contact
              </Link>
              <Link
                href="/quotes"
                className="capitalize duration-500 hover:text-white"
              >
                Send Quote
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Term of Service
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Jobs
              </Link>
            </div>
          </div>
          <div className="content-footer resource-footer w-full">
            <div className="header-footer">
              <h1 className="text-xl uppercase text-white">resource</h1>
            </div>
            <div className="body-footer mt-4 flex flex-col items-start justify-center gap-2">
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Support
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Documentation
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                License
              </Link>
              <Link
                href=""
                className="capitalize duration-500 hover:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
