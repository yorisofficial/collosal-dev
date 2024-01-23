import React from "react";

const TagButton = ({ title }: { title: string }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-full border border-black px-4 py-2"
      >
        {title}
      </button>
    </>
  );
};

export default TagButton;
