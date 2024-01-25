import Image from "next/image";
import Header from "../service/components/Header";
import { IconCurrencyDollar, IconFlag, IconUser } from "@tabler/icons-react";
import CardContent from "./components/CardContent";
import HeaderTitle from "./components/Header";
import { IMAGES_SPONSORS } from "../../../../constants";
import CardTeamList from "./components/CardTeamList";

const page = () => {
  const imgSponsor = IMAGES_SPONSORS;
  return (
    <div className="container z-0 mx-auto mt-16 min-h-screen w-full max-w-7xl px-[5%] py-8 xl:mt-32 xl:space-y-40 xl:px-0">
      <div className="grid min-h-screen w-full grid-cols-1 sm:relative sm:h-full md:min-h-full md:space-y-16 xl:grid-cols-2 xl:space-y-0">
        <div className="absolute left-0 top-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-yellow-500/20 blur-3xl xl:h-[400px] xl:w-[400px]"></div>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl xl:h-[400px] xl:w-[400px] xl:-translate-x-1/2"></div>
        <div className="absolute right-0 top-0 -z-10 h-[250px] w-[250px] rounded-full bg-pink-500/20 blur-3xl xl:h-[400px] xl:w-[400px]"></div>
        <div className="relative flex h-full w-full items-center justify-center md:h-fit xl:w-fit">
          <Image
            src={"/image/about/relative-img.png"}
            height={320}
            width={420}
            className="h-[400px] w-3/4 rounded-lg object-cover xl:h-[400px] xl:w-[420px]"
            alt="about bottom hero section illustration"
          />
          <Image
            src={"/image/about/bottom-img.png"}
            height={280}
            width={320}
            className="absolute -right-2 bottom-8 h-[200px] w-[140px] rounded-lg object-cover md:-bottom-16 md:right-8 xl:-bottom-16 xl:-right-16 xl:h-[240px] xl:w-[200px]"
            alt="about hero section illustration"
          />
        </div>
        <div className="body-content flex items-center justify-start">
          <Header
            title="We are creative, smart and hardworking people"
            tagline="ABOUT"
            description="Several creative people gather in the same place - that's Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields."
          />
        </div>
      </div>
      <hr className="my-8 xl:my-16" />
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center md:min-h-fit md:py-16">
        <div className={`header-content flex items-center justify-center`}>
          <div className="flex w-full flex-col items-center justify-center gap-1">
            <span className="text-center font-semibold uppercase text-[#16FCD2]">
              STATISTICS
            </span>
            <h1 className="text-center text-2xl font-bold md:w-1/2 md:text-4xl">
              In 3 years we reached 8 countries, 193 clients and earning $100k
              USD
            </h1>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center space-y-8 xl:space-y-14">
          <div className="flex w-3/4 flex-wrap items-center justify-between gap-8 rounded-lg bg-white/10 px-5 py-8 md:w-fit md:flex-nowrap xl:gap-12 xl:px-16">
            <CardContent number="8" desk="countries">
              <IconFlag size={24} className="xl:w-8" />
            </CardContent>
            <CardContent number="193" desk="clients">
              <IconUser size={24} className="xl:w-8" />
            </CardContent>
            <CardContent number="$100k" desk="EARNING">
              <IconCurrencyDollar size={24} className="xl:w-8" />
            </CardContent>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-8 md:w-3/4">
            {imgSponsor.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.tittle}
                width={100}
                height={100}
                className="h-fit w-fit"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center space-y-8 xl:space-y-0">
        <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-12 md:px-16 xl:gap-16 xl:px-44 xl:py-16">
          <div className="relative w-full">
            <div className="dot-acc absolute left-0 top-0 h-8 w-8 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-pink-400 to-red-700 blur-sm duration-500 md:h-16 md:w-16 xl:top-0"></div>
            <div className="dot-acc absolute bottom-2/3 right-8 h-8 w-8 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-green-300 to-green-600 blur-sm duration-500 md:h-16 md:w-16 xl:-top-16 xl:right-1/4 xl:translate-x-32"></div>
            <div className="dot-acc absolute bottom-0 right-0 h-6 w-6 rotate-45 animate-pulse rounded-full bg-gradient-to-r from-indigo-300 to-indigo-600 blur-sm duration-500 xl:-bottom-3 xl:-right-3"></div>
            <HeaderTitle
              title="OUR TEAM"
              description="Meet the team! All creative people are here"
            />
          </div>
          <hr className="w-3/4 text-white opacity-20" />
        </div>
        <CardTeamList />
      </div>
    </div>
  );
};

export default page;
