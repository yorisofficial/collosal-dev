import Header from "./components/Header";
import { IconChevronDown } from "@tabler/icons-react";
import ListProject from "./components/ListProject";

const page = () => {
  return (
    <div className="container mx-auto my-24 h-full max-w-5xl px-[5%]">
      <div className="content grid h-full min-h-screen w-full grid-cols-1 items-center justify-center md:min-h-full md:grid-cols-2">
        <div className="flex h-full w-full items-center justify-center md:items-start md:justify-start">
          <Header
            tagline="PROJECTS"
            title="We have completed many amazing projects that you will not believe"
          />
        </div>
        <div className="flex h-full w-full items-start justify-center md:items-center md:justify-end">
          <button className="flex gap-4 rounded-lg border-2 bg-transparent px-4 py-2 text-base font-semibold text-white">
            Technology{" "}
            <span>
              <IconChevronDown />
            </span>
          </button>
        </div>
      </div>
      <hr className="mx-auto my-4 w-3/4 space-y-4 opacity-30 xl:my-8 xl:space-y-8" />
      <div className="content">
        <ListProject />
      </div>
    </div>
  );
};

export default page;
