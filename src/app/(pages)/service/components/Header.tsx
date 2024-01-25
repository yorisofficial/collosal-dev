import React from "react";

interface Props {
  tagline: string;
  title: string;
  description?: string;
  className?: string;
}

const Header = ({ tagline, title, description, className }: Props) => {
  return (
    <div
      className={`header-content flex flex-col items-center justify-center gap-7 xl:items-start xl:justify-start ${className}`}
    >
      <div className="flex w-full flex-col items-center justify-center gap-1 xl:items-start">
        <span className="text-center font-semibold uppercase text-[#16FCD2] md:text-start">
          {tagline}
        </span>
        <h1 className="text-center text-2xl font-bold md:w-3/4 md:text-3xl xl:text-start">
          {title}
        </h1>
      </div>
      <p className="text-center font-light text-white/70 md:w-3/4 xl:text-start">
        {description}
      </p>
    </div>
  );
};

export default Header;
