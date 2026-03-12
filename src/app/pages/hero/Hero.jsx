"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react";

function Hero() {
  const handleNavigation = (link) => {
    if (link.startsWith("#")) {
      const target = document.getElementById(link.substring(1));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Card (Bento Large) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 glass rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 group-hover:bg-primary/20 transition-colors" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
                Fullstack Developer
              </h2>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-gradient">
                Mohammed <br />
                <span className="text-gradient-neon">Kotbi</span>
              </h1>

              <div className="text-xl md:text-2xl text-foreground/60 mb-8 h-12">
                <Typewriter
                  options={{
                    strings: [
                      "Crafting Scalable Web Solutions",
                      "Turning Coffee into Modern Apps",
                      "MERN Stack Specialist",
                      "Passionate Problem Solver",
                    ],
                    autoStart: true,
                    delay: 50,
                    loop: true,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={() => handleNavigation("#contact-me")}
                  className="px-8 py-4 rounded-xl relative group overflow-hidden bg-gradient-to-r from-primary to-secondary text-slate-50 font-bold shadow-neon hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
                    Let&apos;s Talk
                  </span>
                  <div className="absolute -inset-1 bg-primary/20 blur-xl group-hover:bg-primary/40 animate-pulse-slow -z-10" />
                </button>
                <button
                  onClick={() =>
                    handleNavigation("https://github.com/shadowofleaf96")
                  }
                  className="px-8 py-4 rounded-xl glass font-bold text-foreground group relative overflow-hidden transition-all flex items-center gap-2 hover:border-primary/50"
                >
                  <div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon icon="mdi:github" width="24" className="group-hover:text-primary transition-colors" />{" "}
                    Projects
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Card (Bento Small) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              className="flex-1"
            >
              <div className="glass rounded-3xl p-4 h-full flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile-pic.webp"
                    alt="Mohammed Kotbi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </Tilt>

            <div className="glass rounded-3xl p-6 flex items-center justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient-neon">3+</p>
                <p className="text-xs text-foreground/50 uppercase">
                  Years Exp.
                </p>
              </div>
              <div className="h-10 w-px bg-foreground/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient-neon">20+</p>
                <p className="text-xs text-foreground/50 uppercase">Projects</p>
              </div>
              <div className="h-10 w-px bg-foreground/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient-neon">15+</p>
                <p className="text-xs text-foreground/50 uppercase">Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-widest text-foreground/30 font-medium">
            Explore
          </span>
          <div className="mouse shadow-neon/50">
            <div className="roll !animation-duration-[1s]"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
    </section>
  );
}

export default Hero;
