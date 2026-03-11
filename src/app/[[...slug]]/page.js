"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  return (
    <div className="m-0 mx-auto px-6 md:px-12 relative min-h-screen transition-colors duration-300">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
