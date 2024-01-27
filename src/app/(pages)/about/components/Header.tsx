import React from "react";
interface Props {
  title: string;
  description: string;
}
const Header = ({ title, description }: Props) => {
  return (
    <div className="header-content flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <span className="uppercase text-[#16FCD2]">{title}</span>
        <h1 className="text-center text-2xl font-bold md:w-3/4 md:text-4xl xl:w-1/2">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Header;
