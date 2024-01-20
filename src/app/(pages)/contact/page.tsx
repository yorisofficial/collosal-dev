import Button from "@/app/components/Button";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative grid gap-8 p-[5%] xl:grid-cols-2 xl:px-44">
        <div className="absolute right-32 top-32 -z-20 h-48 w-48 -translate-y-1/2 rounded-full bg-[#FC165B]/20 blur-3xl xl:h-[700px] xl:w-[700px]"></div>
        <div className="absolute -left-40 top-1/2 -z-20 h-48 w-48 -translate-y-1/2 rounded-full bg-[#FCA016]/20 blur-3xl xl:h-[700px] xl:w-[700px]"></div>
        <div className="absolute left-1/2 top-1/2 -z-30 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16FCD2]/20 blur-3xl xl:h-[500px] xl:w-[500px]"></div>
        <div className="main-content flex flex-col items-center justify-center gap-4 xl:items-start">
          <div className="title flex flex-col text-center xl:text-start">
            <h1 className="text-xl font-semibold uppercase text-[#16FCD2]">
              SEND QUOTE
            </h1>
            <h1 className="text-4xl font-semibold xl:max-w-[502px]">
              We love receiving messages from you, we are waiting for it.
            </h1>
          </div>
          <div className="cta-group flex flex-col items-start justify-center gap-6 md:flex-row xl:flex-col">
            <div className="cta-item-1 flex items-center justify-center gap-7">
              <div className="flex h-20 w-20 items-center justify-center bg-white/20">
                <IconPhoneCall size={40} />
              </div>
              <div className="">
                <h1 className="text-base text-white/50">Phone</h1>
                <h2 className="text-xl text-white">+62 1234 8921</h2>
              </div>
            </div>
            <div className="cta-item-1 flex items-center justify-center gap-7">
              <div className="flex h-20 w-20 items-center justify-center bg-white/20">
                <IconMail size={40} />
              </div>
              <div className="">
                <h1 className="text-base text-white/50">Email</h1>
                <h2 className="text-xl text-white">support@collosal.tld</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="form-content mt-0 flex h-full w-full items-start justify-center xl:mt-6">
          <div className="h-fit w-full rounded-md bg-white/20 p-6 backdrop-blur-md xl:p-9">
            <form
              action=""
              className="form-input grid w-full grid-cols-1 gap-4 xl:grid-cols-2"
            >
              <div className="col-span-2 flex flex-col gap-1.5 xl:col-span-1">
                <label className="capitalize" htmlFor="name">
                  name
                </label>
                <input
                  className="rounded-md border border-white/30 bg-transparent p-2"
                  name="name"
                  required
                  type="text"
                  placeholder="input your name"
                ></input>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5 xl:col-span-1">
                <label className="capitalize" htmlFor="email">
                  email
                </label>
                <input
                  className="rounded-md border border-white/30 bg-transparent p-2"
                  name="email"
                  required
                  type="email"
                  placeholder="input your email"
                ></input>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="capitalize" htmlFor="compay">
                  subject
                </label>
                <input
                  className="rounded-md border border-white/30 bg-transparent p-2"
                  name="compay"
                  required
                  type="text"
                  placeholder="input subject"
                ></input>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label htmlFor="message">Tell Us Your Problem</label>
                <textarea
                  required
                  rows={4}
                  placeholder="input your problem"
                  className="w-full rounded-md border border-white/30 bg-transparent p-2"
                ></textarea>
              </div>
              <div className="col-span-2 w-full">
                <button
                  type="submit"
                  className="w-full rounded-md border-2 border-[#6016FC] bg-[#6016FC] px-8 py-3 font-semibold capitalize"
                >
                  Send QUOTE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="my-8 opacity-20" />
    </>
  );
};

export default page;
