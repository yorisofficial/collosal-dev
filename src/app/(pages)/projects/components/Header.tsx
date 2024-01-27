import React from "react";
interface Props {
  tagline: string;
  title: string;
}
const Header = ({ tagline, title }: Props) => {
  return (
    <div className="header-content flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center text-center md:items-start md:justify-start">
        <span className="uppercase text-[#16FCD2]">{tagline}</span>
        <h1 className="text-center text-2xl font-bold md:w-3/4 md:text-start xl:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
