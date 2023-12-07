"use client";
import { IconCopy, IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../../../constants";

const Navbar = () => {
  const PathName = usePathname();
  const navbarRef = useRef(null);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
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
    <div>
      <nav
        ref={navbarRef}
        className={`${
          isScrolled
            ? "fixed -top-4 left-0 bg-black/80 backdrop-blur-md"
            : "block"
        } z-50 w-full px-8 py-4 lg:px-44 xl:flex xl:items-center xl:justify-between`}
      >
        <div className="header mt-4 flex w-full justify-between gap-3 xl:w-fit">
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
          <div className="mobile-menus absolute left-1/2 top-20 z-40 mt-8 w-[90%] -translate-x-1/2 rounded-md border-2 border-white/40 bg-black px-4 py-6 text-center md:px-12 xl:hidden">
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((menu, index) => (
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
            {NAV_LINKS.map((menu, index) => (
              <li
                key={index}
                className={`duration-500 hover:scale-110 ${
                  PathName === menu.url ? "scale-110 font-bold" : ""
                }`}
              >
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
