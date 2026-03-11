"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const pages = useMemo(
    () => ["Home", "About Me", "Skills", "Projects", "Contact Me"],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for tracking active sections efficiently
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activePage = pages.find(
            (page) =>
              page.toLowerCase().replace(/\s+/g, "-") === entry.target.id,
          );
          if (activePage) setActiveNavItem(activePage);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
    });

    setTimeout(() => {
      pages.forEach((page) => {
        const section = document.getElementById(
          page.toLowerCase().replace(/\s+/g, "-"),
        );
        if (section) observer.observe(section);
      });
    }, 500); // Give DOM time to render children fully

    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [pages]);

  const handleNavClick = (page) => {
    setActiveNavItem(page);
    setOpenNav(false);
  };

  const navLinks = pages.map((page) => (
    <a
      key={page}
      href={`#${page.toLowerCase().replace(/\s+/g, "-")}`}
      className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium hover:text-primary ${
        activeNavItem === page ? "text-primary" : "text-foreground/70"
      }`}
      onClick={() => handleNavClick(page)}
    >
      {page}
      {activeNavItem === page && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  ));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`glass rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-500 ${
            isScrolled
              ? "shadow-neon border-primary/20"
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Image
                src="/images/mrtech_white.webp"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <span className="text-xl font-bold text-gradient-neon hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">{navLinks}</div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
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
              {pages.map((page) => (
                <a
                  key={page}
                  href={`#${page.toLowerCase().replace(/\s+/g, "-")}`}
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
