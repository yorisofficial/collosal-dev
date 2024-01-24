import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div className="fixed left-32 top-32">
      <Link href="/blog" className="">
        <button className="group flex gap-2 rounded-lg bg-white px-4 py-2 font-bold text-black hover:bg-slate-600 hover:text-white">
          <IconArrowLeft className="duration-500 group-hover:-translate-x-2" />
          Back
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
