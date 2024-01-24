import Image from "next/image";
import React from "react";
interface Props {
  content: {
    img: string;
    title: string;
    description: string;
  };
}

const DetailCard = ({ content }: Props) => {
  return (
    <div className="card-item cursor-pointer space-y-4 rounded-lg border bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-colors duration-500 ease-linear hover:bg-opacity-40">
      <Image
        src={content.img}
        alt={content.title}
        height={50}
        width={50}
        className=""
      />
      <h1 className="text-xl font-semibold">{content.title}</h1>
      <p className="w-3/4">{content.description}</p>
    </div>
  );
};

export default DetailCard;
