import React from "react";
interface Props {
  title: string;
  description: string;
}
const Header = ({ title, description }: Props) => {
  return (
    <div className="header-content flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="uppercase text-[#16FCD2]">{title}</h1>
        <h1 className="w-3/4 max-w-[420px] font-bold md:w-1/2 xl:w-full xl:text-3xl">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Header;
