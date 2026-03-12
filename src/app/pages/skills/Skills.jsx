"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";
import { skillCategories } from "../../data/skills";
import { slugify } from "../../utils/helpers";



const Skills = () => {
  return (
    <div
      id={slugify("Skills")}
      className="text-black dark:text-white rounded-5 p-4 md:p-5 scroll-mt-64 md:scroll-mt-28"
    >
      <section className="py-24 relative">
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
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 max-w-7xl mx-auto">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
                className="glass p-6 md:p-8 rounded-3xl flex flex-col items-center group hover:border-primary/30 transition-all border-white/5"
              >
                <h3 className="text-lg font-bold mb-6 text-foreground/50 uppercase tracking-widest text-center group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <div className="grid grid-cols-3 gap-4 md:gap-6 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 group/icon"
                    >
                      <motion.div
                        whileHover={{ scale: 1.25, y: -5 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }}
                        className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all bg-foreground/5 rounded-2xl group-hover/icon:bg-foreground/10 group-hover/icon:shadow-lg group-hover/icon:shadow-primary/20"
                      >
                        <Icon
                          icon={skill.icon}
                          className={`text-foreground/60 group-hover/icon:text-foreground transition-colors drop-shadow-lg ${
                            ["Next.js", "Express"].includes(skill.name)
                              ? "dark:invert"
                              : ""
                          }`}
                          width="36"
                        />
                      </motion.div>
                      <span className="text-xs uppercase font-bold text-foreground/50 tracking-tighter opacity-0 md:group-hover/icon:opacity-100 transition-opacity whitespace-nowrap mt-1">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Marquee Section */}
          <div className="glass rounded-full py-4 overflow-hidden border-black/5 dark:border-white/5 relative bg-white/10 dark:bg-transparent transition-all duration-500">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 transition-all duration-500" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 transition-all duration-500" />

            <Marquee speed={35} gradient={false}>
              {skillCategories
                .flatMap((c) => c.skills)
                .map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 mx-8 group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center group-hover:border-primary/50 transition-all bg-foreground/5 dark:bg-foreground/10 border border-black/5 dark:border-white/5">
                      <Icon
                        icon={skill.icon}
                        width="32"
                        className={`text-foreground/70 group-hover:text-foreground transition-colors ${
                          ["Next.js", "Express"].includes(skill.name)
                            ? "dark:invert"
                            : ""
                        }`}
                      />
                    </div>
                    <span className="text-foreground/60 dark:text-foreground/40 group-hover:text-foreground font-medium transition-colors text-sm md:text-base">
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
    </div>
  );
};

export default Skills;
