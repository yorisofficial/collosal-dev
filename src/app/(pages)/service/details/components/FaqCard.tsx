import React from "react";
interface Props {
  content: {
    title: string;
    description: string;
  };
}

const FaqCard = ({ content }: Props) => {
  return (
    <div className="card-item h-full w-full min-w-[300px] cursor-pointer select-none space-y-3 rounded-lg p-8 transition-colors duration-500 ease-linear hover:bg-white/5">
      <h1 className="text-xl font-bold">{content.title}</h1>
      <p className="w-full">{content.description}</p>
    </div>
  );
};

export default FaqCard;
