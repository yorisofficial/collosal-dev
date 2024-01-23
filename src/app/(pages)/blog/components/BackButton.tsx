import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div className="mb-8 w-full rounded-lg p-4">
      <Link
        href="/blog"
        className="rounded-lg bg-black px-8 py-2 font-bold text-white hover:bg-slate-600"
      >
        Back Button
      </Link>
    </div>
  );
};

export default BackButton;
