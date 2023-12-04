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
    | "borderlessRoundedWhite";
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
    primary: "rounded border-2 border-[#6016FC] bg-[#6016FC] font-semibold",
    secondary:
      "rounded border-2 border-zinc-500 bg-zinc-500 font-semibold bg-opacity-40 border-opacity-10",
    borderless:
      "rounded border-2 border-[#6016FC] bg-transparent text-[#6016FC] font-semibold",
    primaryRounded:
      "rounded-full border-2 border-[#6016FC] bg-[#6016FC] font-semibold",
    secondaryRounded:
      "rounded-full border-2 border-zinc-500 bg-zinc-500 font-semibold bg-opacity-40 border-opacity-10",
    borderlessRounded:
      "rounded-full border-2 border-[#6016FC] bg-transparent text-[#6016FC] font-semibold",
    primaryWhite:
      "rounded border-2 border-white bg-white text-zinc-900 font-semibold",
    secondaryWhite:
      "rounded border-2 border-zinc-500 border-opacity-10 bg-zinc-500 bg-opacity-40 font-semibold text-white",
    borderlessWhite:
      "rounded border-2 border-white text-white bg-transparent text-white font-semibold",
    primaryRoundedWhite:
      "rounded-full border-2 border-white text-zinc-900 bg-white font-semibold",
    secondaryRoundedWhite:
      "rounded-full border-2 border-zinc-500 text-white bg-zinc-500 font-semibold bg-opacity-40 border-opacity-10",
    borderlessRoundedWhite:
      "rounded-full border-2 border-white bg-transparent text-white font-semibold",
  };

  const buttonSize = {
    small: "px-6 py-3 text-[14px]",
    large: "px-14 py-4 text-[16px]",
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
