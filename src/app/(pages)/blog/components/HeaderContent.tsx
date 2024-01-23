import React from "react";

const HeaderContent = () => {
  return (
    <>
      <div className="">
        <div className="section-design flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-8 md:px-16 md:py-12 xl:gap-32 xl:px-44">
          <div className="header-content flex h-full w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center text-center">
              <h1 className="uppercase text-[#16FCD2]">BLOG</h1>
              <h1 className="w-3/4 max-w-[420px] font-bold md:w-1/2 xl:w-full xl:text-3xl">
                Get precise knowledge wherever you are
              </h1>
            </div>
          </div>
          <hr className="w-3/4 opacity-50" />
          <div className="body-content grid h-full w-full grid-cols-1 items-center justify-center gap-8 xl:grid-cols-2 xl:gap-14"></div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
