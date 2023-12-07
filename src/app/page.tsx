"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ButtonSwiper from "./components/ButtonSwiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { USERS_REVIEW, IMAGES_SPONSORS, PRICELIST } from "../../constants";
import {
  IconBox,
  IconBrandFigma,
  IconCode,
  IconQuotes,
} from "@tabler/icons-react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };
  const cardItems = [
    {
      title: "Design",
      icon: <IconBrandFigma size={32} />,
      deskription:
        "The project interface will be designed first, our favorite tool is Figma.",
    },
    {
      title: "Develop",
      icon: <IconCode size={32} />,
      deskription:
        "Transform design and write business logic here. Choose the technology you want.",
    },
    {
      title: "Ship",
      icon: <IconBox size={32} />,
      deskription:
        "After the work is complete, we will send the project and all its assets to you.",
    },
  ];
  const users = USERS_REVIEW;
  const imgSponsor = IMAGES_SPONSORS;
  const pristList = PRICELIST;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 py-4 xl:gap-32">
      <div className="hero-section relative mt-24 flex h-full w-full items-center justify-center px-4 md:px-16 xl:px-44">
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-4">
          <span className="font-semibold text-[#16FCD2]">
            CLIENT-DEVELOPMENT DRIVEN
          </span>
          <h1 className="mt-3 max-w-[600px] text-center text-4xl font-semibold capitalize">
            We Design. We Develop. We Ship. In The Same Day.
          </h1>
          <p className="max-w-[539px] text-center">
            We are committed to not making clients wait. We will deliver the
            work as quickly as possible. Even on the same day. Even so, we do
            not reduce the quality of our work.
          </p>
          <div className="mt-10 flex gap-6">
            <Link href="/quotes">
              <Button variant="primary" size="large">
                Send Quote
              </Button>
            </Link>
            <Button variant="secondary" size="large">
              Learn More
            </Button>
          </div>
        </div>
        <div className="absolute -z-10 h-full w-full opacity-10 blur-2xl filter xl:block">
          <div className="-translate-y-1/5 -left-1/5 -top-1/5 absolute z-10 h-32 w-32 rounded-full bg-yellow-500 xl:h-[700px] xl:w-[700px]"></div>
          <div className="absolute -top-1/4 right-0 z-0 h-32 w-32 -translate-x-1/2 rounded-full bg-teal-500 xl:h-[700px] xl:w-[700px]"></div>
          <div className="-top-1/5 absolute right-0 z-10 h-32 w-32 -translate-y-1/4 rounded-full bg-pink-600 xl:h-[700px] xl:w-[700px]"></div>
        </div>
      </div>
      <div className="feature-card-section relative grid h-full w-full grid-cols-1 items-center justify-center gap-4 px-4 md:grid-cols-3 md:px-16 xl:gap-8 xl:px-44">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="card-item flex h-full w-full flex-col items-center justify-center rounded-md bg-white/10 p-8 backdrop-blur-xl xl:min-w-[300px]  xl:items-start xl:justify-start"
          >
            <div className="head-card">
              <div className="h-full w-fit rounded-md bg-white/10 p-2">
                {item.icon}
              </div>
            </div>
            <div className="body-card mt-4 flex flex-col items-center justify-center gap-4 xl:items-start xl:justify-start">
              <h1 className="text-xl font-semibold capitalize">{item.title}</h1>
              <p className="text-center xl:text-start">{item.deskription}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="logo-group-section relative flex h-full w-full items-center justify-center gap-8 px-4 md:px-16 xl:px-44">
        <div className=" flex w-full flex-wrap items-center justify-center gap-8">
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
      <div className="how-work-section relative grid h-full w-full grid-cols-1 items-center justify-center px-4 md:px-16 xl:grid-cols-2 xl:px-44">
        <div className="header-content relative">
          <div className="z-10 flex h-full w-full items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">
              <Image
                src={"/image/how-work/Work_Illustration.svg"}
                alt="How we work"
                width={500}
                height={500}
                className="h-full w-full"
              />
            </h1>
          </div>
          <div className="absolute z-0 h-full w-full opacity-10 blur-3xl filter">
            <div className="absolute -top-1/2 right-8 z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-yellow-500"></div>
            <div className="absolute -top-1/4 left-8 z-0 h-80 w-80 -translate-y-1/2 rounded-full bg-teal-500"></div>
          </div>
        </div>
        <div className="body-content flex flex-col items-center justify-center">
          <p className="w-full text-center font-semibold text-[#16FCD2] xl:text-start">
            HOW WE WORK?
          </p>
          <h1 className="mt-3 max-w-[600px] text-center text-4xl font-semibold capitalize xl:text-start">
            Everything is well planned, well designed and developed
            wholeheartedly
          </h1>
          <p className="mt-7 max-w-[539px] text-center font-light xl:text-start">
            Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped.
          </p>
        </div>
      </div>
      <div className="project-section flex h-full w-full flex-col gap-20 px-4 md:px-16 xl:px-44">
        <div className="header-content relative flex h-full w-full flex-col items-center justify-center">
          <p className="w-full text-center font-semibold text-[#16FCD2]">
            PROJECTS
          </p>
          <h1 className="mt-3 max-w-[600px] text-center text-4xl font-semibold capitalize">
            We have completed many amazing projects that you will not believe
          </h1>
          <div className="absolute -z-10 h-full w-full">
            <div className="dot-acc absolute bottom-0 right-0 h-8 w-8 rotate-45 rounded-full bg-indigo-600 blur-sm"></div>
            <div className="dot-acc absolute -left-0 right-0 top-1/2 h-16 w-16 -translate-y-1/2 rotate-45 rounded-full bg-gradient-to-r from-pink-400 to-red-700 blur-md"></div>
            <div className="dot-acc absolute right-12 h-16 w-16 rotate-45 rounded-full bg-gradient-to-r from-green-300 to-green-600 blur-sm xl:-top-1/2 xl:right-1/4"></div>
          </div>
        </div>
        <div className="body-content flex w-full flex-col items-center justify-center gap-8 md:flex-row xl:items-start">
          <div className="phone-mode w-full xl:min-w-[500px]">
            <div className="phone-mockup flex w-full flex-col items-center justify-center gap-6 rounded-t-md bg-white/10 p-8 pb-0">
              <div className="h-6 w-44 rounded-full bg-white/10"></div>
              <div className="h-6 w-32 rounded-full bg-white/10"></div>
              <div className="min-h-[240px] w-44 rounded-t-xl bg-white/10"></div>
            </div>
            <div className="deskscription flex w-full flex-col items-center justify-center gap-6 px-0 py-8">
              <h1 className="text-center text-xl font-semibold">
                The Mobile App Landing Page
              </h1>
              <p className="flex flex-nowrap text-base font-light">
                A landing page for mobile app
              </p>
              <Button variant="borderlessRoundedWhite" size="small">
                Detail
              </Button>
            </div>
          </div>
          <div className="desktop-mode w-full xl:min-w-[500px]">
            <div className="phone-mockup flex w-full flex-col items-center justify-center gap-6 rounded-t-md bg-white/10 p-8 pb-0">
              <div className="h-6 w-44 rounded-full bg-white/10"></div>
              <div className="h-6 w-32 rounded-full bg-white/10"></div>
              <div className="min-h-[240px] w-3/4 rounded-t-xl bg-white/10"></div>
            </div>
            <div className="deskscription flex w-full flex-col items-center justify-center gap-6 px-0 py-8">
              <h1 className="text-center text-xl font-semibold">
                The Desktop App Landing Page
              </h1>
              <p className="text-base font-light">
                A landing page for desktop app
              </p>
              <Button variant="borderlessRoundedWhite" size="small">
                Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-section  flex h-full w-full flex-col items-center justify-center gap-16 rounded-xl bg-[#221048] px-4 py-8 md:px-16 xl:h-[900px] xl:gap-20 xl:px-8">
        <div className="header-content w-ful flex flex-col items-center justify-center">
          <p className="uppercase text-[#16FCD2]">GET STARTED</p>
          <h1 className="w-full text-center text-4xl font-semibold xl:w-[500px]">
            What do you need? Choose a service that can help you
          </h1>
        </div>
        <div className="body-content grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:w-full">
          {pristList.map((item, index) => (
            <div
              key={item.id}
              className={`card-item h-full w-full rounded-xl p-8 xl:min-w-[380px] ${
                item.id === 1
                  ? "bg-[#3F2379]"
                  : item.id === 2
                    ? "bg-[#233679]"
                    : item.id === 3
                      ? "bg-[#792366]"
                      : null
              }`}
            >
              <div className="header flex justify-between md:flex-col xl:flex-row">
                <div className="right-side">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                </div>
                <div className="left-side">
                  <span>Starting from</span>
                  <h1 className="text-xl font-semibold">{item.price}$</h1>
                </div>
              </div>
              <hr className="my-8" />
              <div className="service my-12">
                {item.service.map((service, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-col items-center justify-center gap-4"
                  >
                    <p className="text-center">{service.list1}</p>
                    <p className="text-center">{service.list2}</p>
                    <p className="text-center">{service.list3}</p>
                    <p className="text-center">{service.list4}</p>
                  </div>
                ))}
              </div>
              <div className="cta-button flex w-full items-center justify-center">
                <Button variant="primaryWhite" size="large">
                  Detail
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="our-reviews-section relative h-full w-full px-4 md:px-16 xl:px-44">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-between opacity-10 blur-3xl filter">
          <div className="h-[500px] w-[700px] rounded-full bg-yellow-500"></div>
          <div className="h-[500px] w-[700px] rounded-full bg-teal-500"></div>
          <div className="h-[500px] w-[700px] rounded-full bg-pink-500"></div>
        </div>

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={false}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <ButtonSwiper />

          {users.map((item) => (
            <SwiperSlide key={item.id} className="py-12">
              <div
                className={`flex h-[450px] w-full flex-col items-center justify-center gap-4 rounded-md bg-white/10 bg-opacity-40 backdrop-blur-md ${
                  activeSlide === item.id
                    ? "xl:-translate-y-6 xl:scale-100"
                    : "xl:translate-y-4 xl:scale-90"
                }`}
              >
                <div className="relative">
                  <Image
                    className="rounded-full"
                    src={item.img}
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div className="quotes absolute -bottom-2 -right-2 h-fit w-fit rounded-full border-4 border-black bg-[#6016FC] p-1">
                    <IconQuotes size={20} />
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-8 px-2">
                  <div className="w-full text-center">
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <p className="">{item.title}</p>
                  </div>
                  <p className="text-center">{item.quotes}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
