"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon:react", color: "#61DAFB" },
      { name: "Next.js", icon: "devicon:nextjs-wordmark", color: "#ffffff" },
      { name: "Tailwind", icon: "devicon:tailwindcss", color: "#06B6D4" },
      { name: "JavaScript", icon: "devicon:javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "devicon:html5", color: "#E34F26" },
      { name: "CSS3", icon: "devicon:css3", color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon:nodejs", color: "#339933" },
      { name: "Express", icon: "devicon:express", color: "#ffffff" },
      { name: "MongoDB", icon: "devicon:mongodb", color: "#47A248" },
      { name: "Java", icon: "devicon:java", color: "#007396" },
      { name: "Android", icon: "devicon:android", color: "#3DDC84" },
    ],
  },
  {
    title: "Tools & Languages",
    skills: [
      { name: "Git", icon: "devicon:git", color: "#F05032" },
      { name: "Linux", icon: "devicon:linux", color: "#FCC624" },
      { name: "WordPress", icon: "devicon:wordpress", color: "#21759B" },
      { name: "C++", icon: "devicon:cplusplus", color: "#00599C" },
      { name: "C#", icon: "devicon:csharp", color: "#239120" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
          >
            Technical Arsenal
          </motion.h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass p-8 rounded-4xl flex flex-col items-center group hover:border-primary/30 transition-all border-white/5"
            >
              <h3 className="text-xl font-bold mb-8 text-foreground/50 uppercase tracking-widest text-center group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-6 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 group/icon"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 flex items-center justify-center transition-all"
                    >
                      <Icon
                        icon={skill.icon}
                        className="text-foreground/60 group-hover/icon:text-foreground transition-colors drop-shadow-lg"
                        width="32"
                      />
                    </motion.div>
                    <span className="text-[10px] uppercase font-bold text-foreground/30 tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Section */}
        <div className="glass rounded-full py-6 overflow-hidden border-white/5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

          <Marquee speed={40} gradient={false}>
            {skillCategories
              .flatMap((c) => c.skills)
              .map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 mx-10 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <Icon icon={skill.icon} width="20" />
                  </div>
                  <span className="text-foreground/40 group-hover:text-foreground font-medium transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
          </Marquee>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -z-10 top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
    </section>
  );
};

export default Skills;
