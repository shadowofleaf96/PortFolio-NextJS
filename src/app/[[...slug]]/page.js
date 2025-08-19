"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "../components/Navbar";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/about/AboutMe";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import ContactMe from "../pages/contact/ContactMe";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Page() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = () => {};

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#7393B3" },
        links: {
          color: "#7393B3",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: "bounce" },
          speed: 1,
        },
        number: { value: 80, density: { enable: true } },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    []
  );

  const Separator = () => (
    <div className="border-t border-gray-300 my-8 w-full"></div>
  );

  return (
    <ThemeProvider>
      <div className="bg-[#F5F5F5] dark:bg-[#111827] m-0 mx-auto px-6 md:px-12 relative">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
        <NavBar />
        <Hero />
        <Separator />
        <AboutMe />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <ContactMe />
        <Footer />
        <ScrollUpButton />
      </div>
    </ThemeProvider>
  );
}
