"use client";
import { IconCopy, IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../../../constants";

const Navbar = () => {
  const PathName = usePathname();
  const navbarRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isScrolled") === "true") {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        localStorage.setItem("isScrolled", "true");
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !(navbarRef.current as any).contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled ? "bg-white/10 backdrop-blur-md" : ""
      } fixed left-0 top-0 z-40 flex h-fit w-full items-center justify-center transition-colors duration-1000 ease-in-out`}
    >
      <nav
        ref={navbarRef}
        className={`container flex w-full items-center justify-between px-4 py-4 xl:px-44`}
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
              variant="primary"
              size="small"
              ariaLabel="Open Menu"
            >
              {!mobileMenu ? <IconMenu /> : <IconX />}
            </Button>
          </div>
        </div>
        {mobileMenu && (
          <div className="mobile-menus absolute left-1/2 top-20 z-40 mt-8 w-[90%] -translate-x-1/2 rounded-md border-2 border-white/40 bg-[#0b0b22] px-4 py-6 text-center md:px-12 xl:hidden">
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((menu, index) => (
                <Link
                  href={menu.url}
                  onClick={() => {
                    setMobileMenu(false), setIsScrolled(false);
                  }}
                  key={index}
                  className={`rounded-md py-4 font-semibold duration-500 hover:bg-white hover:text-black ${
                    PathName === menu.url || PathName.includes(`${menu.url}/`)
                      ? "bg-white text-black"
                      : ""
                  }`}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="desktop-menus hidden xl:block ">
          <ul className="flex gap-14">
            {NAV_LINKS.map((menu, index) => (
              <li
                key={index}
                className={`duration-500 hover:scale-110 ${
                  PathName === menu.url || PathName.includes(`${menu.url}/`)
                    ? "scale-125 font-bold"
                    : ""
                }`}
              >
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-button hidden xl:block">
          <Link href={"/contact"}>
            <Button variant="secondary" size="large">
              Contact
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
