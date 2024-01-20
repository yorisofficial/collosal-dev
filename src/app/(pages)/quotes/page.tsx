import Button from "@/app/components/Button";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative mt-24 grid min-h-screen w-full grid-cols-1 items-center justify-center gap-16 xl:mt-0 xl:grid-cols-2 xl:px-44">
        <div className="absolute -z-10 h-full w-full opacity-10 blur-2xl filter xl:block">
          <div className="-translate-y-1/5 -left-1/5 -top-1/5 absolute z-10 h-[120px] w-[120px] rounded-full bg-yellow-500 xl:h-[240px] xl:w-[240px]"></div>
          <div className="absolute -top-1/4 right-0 z-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-teal-500 xl:h-[700px] xl:w-[700px]"></div>
          <div className="absolute right-0 top-1/4 z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-pink-600 xl:h-[700px] xl:w-[700px]"></div>
        </div>
        <div className="main-content flex flex-col items-center justify-center gap-4 xl:items-start xl:justify-center">
          <div className="title flex flex-col text-center xl:text-start">
            <h1 className="text-xl font-semibold uppercase text-[#16FCD2]">
              SEND QUOTE
            </h1>
            <h1 className="max-w-[502px] text-4xl font-semibold">
              Tell us about your problem and how we can help
            </h1>
          </div>
          <p className="w-full max-w-[502px] text-center xl:text-start">
            We are happy to help you, tell us what is the problem with your
            company, and we are ready to answer these problems. It usually takes
            a few minutes for us to respond.
          </p>
          <Button variant="secondary" size="large">
            Ask Us
          </Button>
        </div>
        <div className="form-content mt-0 flex h-full w-full items-start justify-center xl:mt-32 xl:items-center xl:justify-center">
          <div className="h-fit w-full rounded-md bg-white/10 p-6 backdrop-blur-md xl:p-9">
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
              <div className="col-span-2 flex flex-col gap-1.5 xl:col-span-1">
                <label className="capitalize" htmlFor="compay">
                  company
                </label>
                <input
                  className="rounded-md border border-white/30 bg-transparent p-2"
                  name="compay"
                  required
                  type="text"
                  placeholder="input your company"
                ></input>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5 xl:col-span-1">
                <label className="capitalize" htmlFor="company size">
                  company size
                </label>
                <select
                  name="company size"
                  id=""
                  required
                  className="h-full rounded-md border border-white/30 bg-transparent p-2"
                >
                  <option value="" disabled className="text-black">
                    Select company size
                  </option>
                  <option value="" className="text-black">
                    PT
                  </option>
                  <option value="" className="text-black">
                    CV
                  </option>
                </select>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label htmlFor="message">Tell Us Your Problem</label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                  required
                  placeholder="let's solve your problem"
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
