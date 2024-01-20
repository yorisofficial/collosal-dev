import PerStep from "./components/PerStep";
import { HOWWEWORK } from "../../../../constants";

const page = () => {
  const stepItem = HOWWEWORK;

  return (
    <>
      <div className="container-pages mt-16 flex h-full w-full flex-col items-center justify-start gap-16 px-[5%] py-16 md:px-24 xl:mt-32 xl:px-32">
        <div className="header-content flex w-full flex-col items-center justify-center text-center">
          <span className="font-bold uppercase text-teal-500">HOW WE WORK</span>
          <h1 className="h-fit text-4xl font-bold xl:w-[500px]">
            We have a workflow that allows the job to be delivered well
          </h1>
        </div>
        <hr className="w-1/2 opacity-20" />
        <div className="body-content flex flex-col gap-8">
          {stepItem.map((item, index) => (
            <PerStep
              class={item.class}
              key={index}
              title={item.title}
              desk1={item.desk1}
              desk2={item.desk2}
              step={item.step}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
