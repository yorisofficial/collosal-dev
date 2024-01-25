import { IconFlag } from "@tabler/icons-react";
import React from "react";

type Props = {
  number: string;
  desk: string;
  children: React.ReactNode;
};

const CardContent = ({ number, desk, children }: Props) => {
  return (
    <div>
      <div className="card-item flex items-center justify-start gap-4">
        <div className="icon-card flex items-center justify-center rounded-md bg-white/40 p-4 text-white shadow-black drop-shadow-md">
          {children}
        </div>
        <div className="">
          <h1 className="xl:text-4xl">{number}</h1>
          <span className="font-bold uppercase text-slate-300">{desk}</span>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
