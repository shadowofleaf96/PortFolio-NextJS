"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { slugify } from "../utils/helpers";

const NAV_PAGES = ["Home", "About Me", "Skills", "Projects", "Contact Me"];

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Sync theme on mount without hydration flash
    const timer = setTimeout(() => {
      const savedTheme = localStorage.getItem("theme") || "dark";
      const isDark = savedTheme !== "light";
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const active = NAV_PAGES.find(p => slugify(p) === entry.target.id);
          if (active) setActiveNavItem(active);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
    });

    // Short delay to ensure sections are in the DOM
    setTimeout(() => {
      NAV_PAGES.forEach((page) => {
        const section = document.getElementById(slugify(page));
        if (section) observer.observe(section);
      });
    }, 500);

    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [setOpenNav]);

  const handleNavClick = (page) => {
    setActiveNavItem(page);
    setOpenNav(false);

    const section = document.getElementById(slugify(page));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = NAV_PAGES.map((page) => (
    <div key={page} className="relative">
      <button
        onClick={() => handleNavClick(page)}
        className={`relative z-10 px-4 py-2 text-sm font-bold transition-colors duration-300 ${
          activeNavItem === page
            ? "text-white dark:text-foreground"
            : "text-foreground/70 hover:text-primary"
        }`}
      >
        {page}
      </button>
      {activeNavItem === page && (
        <motion.div
          layoutId="navPill"
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-0"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      )}
    </div>
  ));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? "mt-0" : "mt-6 md:mt-8"
      }`}
    >
      <div className="container mx-auto relative flex justify-center w-full">
        {/* Animated Background layer */}
        <div
          className={`absolute transition-all duration-500 ease-in-out bg-background/20 backdrop-blur-md pointer-events-none -z-10 ${
            isScrolled
              ? "w-[100vw] left-1/2 -translate-x-1/2 top-0 bottom-0 rounded-none shadow-neon border border-transparent"
              : "w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] left-1/2 -translate-x-1/2 top-0 bottom-0 rounded-full border border-white/10 shadow-lg"
          }`}
        />

        {/* Navbar Content */}
        <div
          className={`w-[calc(100%-2rem)] md:w-full flex items-center justify-between px-4 sm:px-8 md:px-12 transition-all duration-500 ${
            isScrolled ? "py-3" : "py-2"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden"
            >
              <Image
                src="/images/mrtech_white.webp"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-xl scale-110"
              />
            </motion.div>
            <span className="text-xl font-black tracking-tight text-gradient-neon hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">{navLinks}</div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handleToggle}
              className="p-2 rounded-xl glass hover:border-primary/50 transition-all text-yellow-600 dark:text-yellow-500 hover:shadow-neon"
              aria-label="Toggle Theme"
            >
              <Icon
                icon={
                  darkMode
                    ? "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                    : "line-md:sun-rising-filled-loop"
                }
                width="24"
                height="24"
              />
            </button>

            <button
              onClick={() => setOpenNav(!openNav)}
              className="lg:hidden p-2 rounded-xl glass text-foreground/70 hover:text-primary"
            >
              <Icon
                icon={openNav ? "mdi:close" : "mdi:menu"}
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 p-6"
          >
            <div className="glass rounded-2xl flex flex-col gap-4 p-6 shadow-neon border-primary/20">
              {NAV_PAGES.map((page) => (
                <a
                  key={page}
                  href={`#${slugify(page)}`}
                  className={`text-lg font-medium py-2 px-4 rounded-xl transition-all ${
                    activeNavItem === page
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-foreground/70 hover:bg-foreground/5"
                  }`}
                  onClick={() => handleNavClick(page)}
                >
                  {page}
                </a>
              ))}

              <div className="flex gap-4 pt-4 border-t border-foreground/10">
                <a
                  href="#"
                  className="p-3 rounded-xl glass text-foreground/70 hover:text-primary grow flex justify-center"
                >
                  <Icon icon="mdi:youtube" width="24" height="24" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl glass text-foreground/70 hover:text-primary grow flex justify-center"
                >
                  <Icon icon="mdi:github" width="24" height="24" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl glass text-foreground/70 hover:text-primary grow flex justify-center"
                >
                  <Icon icon="mdi:linkedin" width="24" height="24" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
