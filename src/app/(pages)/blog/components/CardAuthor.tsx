import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  authorname: string;
  authormastery: string;
  authorquotes: string;
  authorImage: string;
}

const CardAuthor = ({
  authorname,
  authormastery,
  authorquotes,
  authorImage,
}: Props) => {
  const medsosList = [
    { title: "facebook", url: "http://facebook.com" },
    { title: "linkedin", url: "http://linkedin.com" },
    { title: "instagram", url: "http://instagram.com" },
  ];
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex gap-4 rounded-lg  bg-slate-900 p-8 xl:w-3/4">
        <div className="header-profile h-full w-fit px-4 xl:w-1/2">
          <Image
            src={authorImage}
            height={300}
            width={300}
            alt="author"
            className="rounded-full"
          />
        </div>
        <div className="content-profile h-full gap-0">
          <div className="flex justify-between">
            <div className="header">
              <h1 className="text-2xl font-bold">{authorname}</h1>
              <h2 className="text-sm">{authormastery}</h2>
            </div>
            <div className="flex gap-2">
              {medsosList.map((medsos, index) => (
                <div
                  key={index}
                  className="flex h-fit w-fit items-center justify-center rounded-full border border-black/40 bg-slate-800 p-3"
                >
                  <Link target="_blank" href={medsos.url}>
                    {medsos.title === "facebook" ? (
                      <IconBrandFacebook className="h-6 w-6" />
                    ) : medsos.title === "instagram" ? (
                      <IconBrandInstagram className="h-6 w-6" />
                    ) : medsos.title === "linkedin" ? (
                      <IconBrandLinkedin className="h-6 w-6" />
                    ) : null}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8">{authorquotes}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAuthor;
