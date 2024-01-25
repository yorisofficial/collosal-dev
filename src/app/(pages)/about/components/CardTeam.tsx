import Image from "next/image";
import React from "react";

interface Props {
  content: {
    name: string;
    position: string;
    img: string;
  };
}

const CardTeam = ({ content }: Props) => {
  return (
    <div className="h-full rounded-lg bg-white/20 xl:min-w-[200px]">
      <Image
        src={content.img}
        alt={content.name}
        width={2500}
        height={2500}
        className="h-[400px] w-full rounded-t-lg object-cover xl:h-[400px] xl:w-[400px]"
      />
      <div className="body-card p-10">
        <h1 className="text-xl font-semibold">{content.name}</h1>
        <p>{content.position}</p>
      </div>
    </div>
  );
};

export default CardTeam;
