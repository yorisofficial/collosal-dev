"use client";
import { IconCopy, IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const PathName = usePathname();
  const navbarRef = useRef(null);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !(navbarRef.current as any).contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const menus = [
    { title: "Home", url: "/" },
    { title: "Services", url: "/service" },
    { title: "How We Work", url: "/work" },
    { title: "Projects", url: "/projects" },
    { title: "About", url: "/about" },
  ];
  return (
    <div>
      <nav
        ref={navbarRef}
        className="fixed left-0 top-0 z-50 w-full bg-white/10 px-4 py-4 backdrop-blur-xl xl:flex xl:items-center xl:justify-between xl:px-44"
      >
        <div className="header flex w-full justify-between gap-3 xl:w-fit">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-xl font-bold xl:text-3xl"
          >
            <IconCopy size={32} />
            Collosal.
          </Link>
          <div className="flex text-white xl:hidden">
            <Button
              onClick={() => setMobileMenu(!mobileMenu)}
              variant="secondary"
              size="small"
              ariaLabel="Open Menu"
            >
              {!mobileMenu ? <IconMenu /> : <IconX />}
            </Button>
          </div>
        </div>
        {mobileMenu && (
          <div className="mobile-menus mt-8 text-center xl:hidden">
            <div className="flex flex-col gap-8">
              {menus.map((menu, index) => (
                <Link
                  href={menu.url}
                  onClick={() => setMobileMenu(false)}
                  key={index}
                  className={`rounded-md py-4 font-semibold duration-500 hover:bg-white hover:text-black ${
                    PathName === menu.url ? "bg-white text-black" : ""
                  }`}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="desktop-menus hidden xl:block">
          <ul className="flex gap-14">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-button hidden xl:block">
          <Button variant="secondary" size="large">
            Contact
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
