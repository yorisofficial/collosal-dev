import React from "react";

interface Props {
  items: any;
  className?: string;
}

const CardPricing = ({ items, className }: Props) => {
  return (
    <>
      <div
        className={`h-full w-full space-y-6 rounded-lg border border-black p-8 xl:min-w-[320px] ${className}`}
      >
        <div className="heading-title flex flex-col items-center justify-center xl:flex-row xl:items-start xl:justify-between">
          <h1 className="text-xl font-semibold">{items.title}</h1>
          <div className="">
            <small>Starting from</small>
            <h1 className="text-2xl font-semibold">{items.price}$</h1>
          </div>
        </div>
        <hr />
        <div className="list-product">
          <div className="">
            {items.service.map((item: any, index: number) => (
              <ul key={index} className="space-y-4">
                <li>{item.list1}</li>
                <li>{item.list2}</li>
                <li>{item.list3}</li>
                <li>{item.list4}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="cta-action">
          <button className="rounded-lg bg-black px-6 py-2 text-white">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPricing;
