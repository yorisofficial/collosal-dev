import { IconCopy } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  const menus = [
    { title: "Services", url: "/" },
    { title: "How We Work", url: "/" },
    { title: "Projects", url: "/" },
    { title: "About", url: "/" },
  ];
  return (
    <div className="">
      <nav className="fixed left-0 top-0 z-50 hidden w-full items-center justify-between bg-white/0 npm ru py-4 backdrop-blur-xl xl:flex">
        <div className="header flex gap-3">
          <Link href={"/"} className="flex gap-4 text-3xl">
            <IconCopy size={32} />
            Collosal.
          </Link>
        </div>
        <div className="body">
          <ul className="flex gap-14">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-button">
          <Button variant="secondary" size="large">
            Contact
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
