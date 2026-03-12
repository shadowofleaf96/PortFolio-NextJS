"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react";
import { experienceData } from "../../data/experience";
import { slugify } from "../../utils/helpers";



const AboutMe = () => {
  return (
    <section id={slugify("About Me")} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
          >
            My Journey
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Image/Bio Side */}
          <div className="space-y-8">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
            >
              <div className="glass rounded-3xl p-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:bg-primary/20 transition-colors" />
                <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_10px_30px_rgba(99,102,241,0.3)]">
                  <Image
                    src="/images/Profile Skecth Art.webp"
                    alt="Mohammed Kotbi Sketch"
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Tilt>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-6 md:p-8 rounded-3xl relative"
            >
              <Icon icon="mdi:format-quote-open" className="absolute top-4 left-4 text-primary/20 text-4xl" />
              <p className="text-base text-foreground/80 leading-relaxed relative z-10 pt-2 pl-4">
                I&apos;m an enthusiastic{" "}
                <strong className="text-foreground font-bold">
                  Full Stack MERN Developer
                </strong>{" "}
                who loves building elegant digital solutions. My background in
                maintenance engineering has shaped my{" "}
                <span className="text-primary font-semibold">
                  meticulous attention to detail
                </span>{" "}
                and proactive problem-solving approach.
              </p>
            </motion.div>
          </div>

          {/* Timeline Side */}
          <div className="space-y-6 relative">
             <div className="absolute left-7 top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -z-10" />
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-6 flex gap-6 items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center border-2 border-primary/20 group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all overflow-hidden z-10">
                      {item.isImage ? (
                        <div className="relative w-10 h-10">
                          <Image
                            src={item.icon}
                            alt={item.company}
                            fill
                            className="object-contain p-1 dark:invert"
                            sizes="40px"
                          />
                        </div>
                      ) : (
                        <Icon
                          icon={item.icon}
                          width="28"
                          className="text-primary"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1 md:gap-0">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/50 whitespace-nowrap self-start md:self-auto">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-primary/80 font-semibold text-sm mb-2 uppercase tracking-wider">
                      {item.company}
                    </p>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default AboutMe;
