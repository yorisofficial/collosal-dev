import React from "react";

interface ButtonProps {
  disable?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "borderless"
    | "primaryRounded"
    | "secondaryRounded"
    | "borderlessRounded"
    | "primaryWhite"
    | "secondaryWhite"
    | "borderlessWhite"
    | "primaryRoundedWhite"
    | "secondaryRoundedWhite"
    | "borderlessRoundedWhite"
    | "primaryQuote";
  size?: "small" | "large";
  onClick?: () => void;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  ariaLabel,
  variant = "primary",
  size = "large",
  disable,
}) => {
  const getButtonVariant = {
    primary: "rounded border-[#6016FC] bg-[#6016FC]",
    primaryQuote: "w-full rounded border-[#6016FC] bg-[#6016FC]",
    secondary:
      "rounded border-zinc-500 border-opacity-10 bg-zinc-500 bg-opacity-40",
    borderless: "rounded border-[#6016FC] bg-transparent text-[#6016FC]",
    primaryRounded: "rounded-full border-[#6016FC] bg-[#6016FC]",
    secondaryRounded:
      "rounded-full border-zinc-500 border-opacity-10 bg-zinc-500 bg-opacity-40",
    borderlessRounded:
      "rounded-full border border-[#6016FC] bg-transparent text-[#6016FC]",
    primaryWhite: "rounded border-white bg-white text-zinc-900",
    secondaryWhite:
      "rounded border-zinc-500 border-opacity-10 bg-zinc-500 bg-opacity-40 text-white",
    borderlessWhite: "rounded border-white bg-transparent text-white",
    primaryRoundedWhite: "rounded-full border-white bg-white text-zinc-900",
    secondaryRoundedWhite:
      "rounded-full border-zinc-500 border-opacity-10 bg-zinc-500 bg-opacity-40 text-white",
    borderlessRoundedWhite:
      "rounded-full border border-white bg-transparent text-white",
  };

  const buttonSize = {
    small: "px-6 py-3 text-[14px]",
    large: "xl:px-14 xl:py-4 px-6 py-4 xl:text-[16px]",
  };

  const buttonVariant = `${getButtonVariant[variant]} ${buttonSize[size]} ${className}`;

  return (
    <div>
      <button
        disabled={disable}
        aria-label={ariaLabel}
        onClick={onClick}
        className={`${buttonVariant} whitespace-nowrap border font-semibold capitalize duration-500 hover:scale-95 focus:ring focus:ring-white`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
