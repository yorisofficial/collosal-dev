import React from "react";

interface ButtonProps {
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
}) => {
  const getButtonVariant = {
    primary:
      "rounded border-2 border-[#6016FC] bg-[#6016FC] font-semibold whitespace-nowrap",
    primaryQuote:
      "w-full rounded border-2 border-[#6016FC] bg-[#6016FC] font-semibold whitespace-nowrap",
    secondary:
      "rounded border-2 border-zinc-500 bg-zinc-500 font-semibold whitespace-nowrap bg-opacity-40 border-opacity-10",
    borderless:
      "rounded border-2 border-[#6016FC] bg-transparent text-[#6016FC] font-semibold whitespace-nowrap",
    primaryRounded:
      "rounded-full border-2 border-[#6016FC] bg-[#6016FC] font-semibold whitespace-nowrap",
    secondaryRounded:
      "rounded-full border-2 border-zinc-500 bg-zinc-500 font-semibold whitespace-nowrap bg-opacity-40 border-opacity-10",
    borderlessRounded:
      "rounded-full border border-[#6016FC] bg-transparent text-[#6016FC] font-semibold whitespace-nowrap",
    primaryWhite:
      "rounded border-2 border-white bg-white text-zinc-900 font-semibold whitespace-nowrap",
    secondaryWhite:
      "rounded border-2 border-zinc-500 border-opacity-10 bg-zinc-500 bg-opacity-40 font-semibold whitespace-nowrap text-white",
    borderlessWhite:
      "rounded border border-white text-white bg-transparent text-white font-semibold whitespace-nowrap",
    primaryRoundedWhite:
      "rounded-full border-2 border-white text-zinc-900 bg-white font-semibold whitespace-nowrap",
    secondaryRoundedWhite:
      "rounded-full border-2 border-zinc-500 text-white bg-zinc-500 font-semibold whitespace-nowrap bg-opacity-40 border-opacity-10",
    borderlessRoundedWhite:
      "rounded-full border border-white bg-transparent text-white font-semibold whitespace-nowrap",
  };

  const buttonSize = {
    small: "px-6 py-3 text-[14px]",
    large: "xl:px-14 xl:py-4 px-6 py-4 xl:text-[16px]",
  };

  const buttonVariant = `${getButtonVariant[variant]} ${buttonSize[size]} ${className}`;

  return (
    <div>
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={`${buttonVariant} capitalize duration-500 hover:scale-95 focus:ring focus:ring-white`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
