import { IconChevronRight } from "@tabler/icons-react";
import { IconChevronLeft } from "@tabler/icons-react";
import React from "react";
import { useSwiper } from "swiper/react";
const ButtonSwiper = () => {
  const swiper = useSwiper();

  return (
    <div className="flex w-full items-center justify-center gap-4 xl:justify-end">
      <button
        title="button prev"
        aria-label="button prev"
        className="rounded-md bg-white p-4 font-semibold text-black duration-500 focus:bg-zinc-600"
        onClick={() => swiper.slidePrev()}
      >
        <IconChevronLeft />
      </button>
      <button
        title="button next"
        aria-label="button next"
        className="rounded-md bg-white p-4 font-semibold text-black duration-500 hover:bg-zinc-600"
        onClick={() => swiper.slideNext()}
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default ButtonSwiper;
