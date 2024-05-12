import React, { useState, useEffect, useMemo } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  Card,
  Avatar,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const pages = useMemo(
    () => ["Home", "About Me", "Skills", "Projects", "Contact Me"],
    []
  );
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggle = () => {
    toggleDarkMode();
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    const navbarHeight = document.getElementById("navbar").offsetHeight;

    const handleScroll = () => {
      let foundActive = false;

      for (const page of pages) {
        const section = document.getElementById(
          page.toLowerCase().replace(/\s+/g, "-")
        );
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight / 2.5 - navbarHeight / 2.5 &&
            rect.bottom >= window.innerHeight / 2.5 - navbarHeight / 2.5;

          if (isVisible && !foundActive) {
            setActiveNavItem(page);
            foundActive = true;
          }
        }
      }

      if (!foundActive) {
        setActiveNavItem("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pages]);

  const handleNavClick = (page) => {
    setActiveNavItem(page);
    setOpenNav(false);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((page) => (
        <a
          key={page}
          href={`#${page.toLowerCase().replace(/\s+/g, "-")}`}
          className={`flex items-center transition-colors ${
            activeNavItem === page ? "text-second" : ""
          }`}
          onClick={() => handleNavClick(page)}
        >
          {page}
        </a>
      ))}
    </ul>
  );

  return (
    <Navbar
      id="navbar"
      className="sticky top-0 z-10 h-max max-w-full mx-auto bg-white dark:bg-black dark:border-black"
    >
      <div className="flex items-center justify-between text-black dark:text-white">
        <a href="#" className="cursor-pointer">
          <div className="flex items-center">
            <Avatar
              alt="MK"
              withBorder={true}
              src="../../../images/mrtech_white.webp"
              className="p-0.5"
              style={{ objectFit: "cover" }}
            />
            <span className="ml-2 text-2xl font-semibold">MK</span>
          </div>
        </a>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4 justify-center">
          <div className="flex items-center gap-m-1">
            <div className="flex items-center justify-center w-full">
              {darkMode ? (
                <Icon
                  key="dark-icon"
                  className="text-yellow-600 text-3xl mr-2"
                  icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                  height={36}
                  width={36}
                />
              ) : (
                <Icon
                  key="light-icon"
                  className="text-yellow-600 text-3xl mr-2"
                  icon="line-md:moon-filled-to-sunny-filled-loop-transition"
                  height={36}
                  width={36}
                />
              )}
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={handleToggle}
                />
                <div
                  className={`block relative bg-gray-300 w-14 h-8 p-1 rounded-full before:absolute before:bg-white before:w-6 before:h-6 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 ${
                    darkMode ? "peer-checked:before:bg-black" : ""
                  }`}
                ></div>
              </label>
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <Icon icon="mdi:close" height={32} width={32} />
            ) : (
              <Icon icon="mdi:menu" height={32} width={32} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UC9_eEbHsL_1TL1O67Fwe7Yw",
                "_blank"
              );
              setOpenNav(false);
            }}
            variant="text"
            size="sm"
            className="dark:text-white"
          >
            <Icon
              icon="mdi:youtube"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/shadowofleaf96", "_blank");
              setOpenNav(false);
            }}
            variant="text"
            size="sm"
            className="dark:text-white"
          >
            <Icon
              icon="mdi:github"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/mkotbi/", "_blank");
              setOpenNav(false);
            }}
            variant="text"
            size="sm"
            className="dark:text-white"
          >
            <Icon
              icon="mdi:linkedin"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
