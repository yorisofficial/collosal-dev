import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="relative flex w-full flex-col gap-32 px-4 py-8 md:px-16 xl:px-44">
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="dot-acc blue absolute bottom-[4%] right-1/4 h-8 w-8 rotate-45 rounded-full bg-indigo-600 blur-md"></div>
        <div className="dot-acc pink top1/2 absolute right-[10%] h-16 w-16 rotate-45 rounded-full bg-gradient-to-r from-pink-400 to-red-700 blur-md xl:top-8"></div>
        <div className="dot-acc green absolute bottom-1/4 left-[10%] h-16 w-16 rotate-45 rounded-full bg-gradient-to-r from-green-300 to-green-600 blur-md xl:bottom-8"></div>
      </div>
      <div className="content-quote flex w-full flex-col">
        <div className="tems-center flex w-full flex-col justify-between xl:flex-row">
          <h1 className="w-full text-center text-3xl font-bold xl:max-w-[589px] xl:text-start">
            We have prepared everything, it is time for you to tell the problem
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M23.75 13.75H6.25M23.75 13.75C24.413 13.75 25.0489 14.0134 25.5178 14.4822C25.9866 14.9511 26.25 15.587 26.25 16.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V16.25C3.75 15.587 4.01339 14.9511 4.48223 14.4822C4.95107 14.0134 5.58696 13.75 6.25 13.75M23.75 13.75V11.25C23.75 10.587 23.4866 9.95107 23.0178 9.48223C22.5489 9.01339 21.913 8.75 21.25 8.75M23.75 13.75L21.25 8.75M6.25 13.75V11.25C6.25 10.587 6.51339 9.95107 6.98223 9.48223C7.45107 9.01339 8.08696 8.75 8.75 8.75M6.25 13.75L8.75 8.75M21.25 8.75V6.25C21.25 5.58696 20.9866 4.95107 20.5178 4.48223C20.0489 4.01339 19.413 3.75 18.75 3.75H11.25C10.587 3.75 9.95107 4.01339 9.48223 4.48223C9.01339 4.95107 8.75 5.58696 8.75 6.25V8.75M21.25 8.75H8.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
            <Link href="" className="capitalize duration-500 hover:text-white">
              Web Development
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              App Development
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              UI Design
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              Consultation
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
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
            <Link href="" className="capitalize duration-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              Term of Service
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              Jobs
            </Link>
          </div>
        </div>
        <div className="content-footer resource-footer w-full">
          <div className="header-footer">
            <h1 className="text-xl uppercase text-white">resource</h1>
          </div>
          <div className="body-footer mt-4 flex flex-col items-start justify-center gap-2">
            <Link href="" className="capitalize duration-500 hover:text-white">
              Support
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              Documentation
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              License
            </Link>
            <Link href="" className="capitalize duration-500 hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
