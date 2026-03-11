"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react";

const experienceData = [
  {
    id: 1,
    role: "Full-Stack Web Developer",
    company: "Freelance",
    date: "Nov 2024 - Present",
    desc: "Crafting modern, scalable web applications for global clients.",
    icon: "/images/freelance-icon.webp",
    isImage: true,
  },
  {
    id: 2,
    role: "Full Stack Intern",
    company: "Up2Career",
    date: "Jan 2024 - Jul 2024",
    desc: "Contributed to internal tools and enhanced user experience.",
    icon: "/images/small_logo.webp",
    isImage: true,
  },
  {
    id: 3,
    role: "MERN Stack Intern",
    company: "ARK-X Talent Factory",
    date: "Aug 2023 - Dec 2023",
    desc: "Developed robust features using the MERN stack ecosystem.",
    icon: "/images/arkx_logo.webp",
    isImage: true,
  },
  {
    id: 4,
    role: "Mobile and Windows Junior Developer",
    company: "Freelance",
    date: "Jan 2020 - May 2022",
    desc: "Started my journey in mobile and desktop app development.",
    icon: "/images/freelance-icon.webp",
    isImage: true,
  },
  {
    id: 5,
    role: "Crimping Maintenance Tech",
    company: "LEONI BOUZNIKA",
    date: "May 2019 - May 2021",
    desc: "Ensured precision and reliability in mission-critical hardware.",
    icon: "/images/leoni-ag-logo.webp",
    isImage: true,
  },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="py-24 relative overflow-hidden">
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
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Bio Side */}
          <div className="space-y-8">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
            >
              <div className="glass rounded-[2.5rem] p-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent group-hover:bg-primary/20 transition-colors" />
                <div className="relative aspect-square rounded-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/images/Profile Skecth Art.webp"
                    alt="Mohammed Kotbi Sketch"
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </div>
            </Tilt>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-4xl"
            >
              <p className="text-lg text-foreground/70 leading-relaxed font-light">
                I'm an entusiastic{" "}
                <span className="text-foreground font-medium">
                  Full Stack MERN Developer
                </span>{" "}
                with a passion for building elegant digital solutions. My
                background in maintenance engineering has instilled in me a
                <span className="text-primary font-medium">
                  {" "}
                  meticulous attention to detail
                </span>{" "}
                and a proactive problem-solving mindset that I bring to every
                line of code I write.
              </p>
            </motion.div>
          </div>

          {/* Timeline Side */}
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-primary transition-all duration-300 rounded-full" />
                <div className="glass-card p-6 flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform shadow-neon overflow-hidden">
                    {item.isImage ? (
                      <div className="relative w-10 h-10">
                        <Image
                          src={item.icon}
                          alt={item.company}
                          fill
                          className="object-contain p-1 dark:invert"
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
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/50 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-primary/70 font-medium text-sm mb-2 uppercase tracking-wider">
                      {item.company}
                    </p>
                    <p className="text-foreground/40 text-sm italic">
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
