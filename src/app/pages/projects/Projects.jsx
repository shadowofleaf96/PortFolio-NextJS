"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { projectsData } from "../../data/projects";
import { slugify } from "../../utils/helpers";



const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div className="glass group rounded-3xl p-5 h-full flex flex-col gap-5 hover:-translate-y-2 hover:shadow-neon hover:border-primary/30 transition-all duration-300 border-white/5 overflow-hidden relative">
        {/* Image Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden group/image z-10">
          <div className="absolute inset-0 bg-primary/20 blur-2xl scale-0 group-hover/image:scale-110 transition-transform duration-700 -z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover/image:scale-110 transition-transform duration-700 z-0 relative"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 shadow-neon">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-1 space-y-3 z-10 relative">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-foreground/50 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold text-foreground/50 bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2 z-10 relative mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-foreground hover:bg-foreground/5 transition-all group/btn overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-primary/10 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <Icon
              icon="mdi:eye"
              width="18"
              className="group-hover/btn:scale-125 transition-transform"
            />{" "}
            Demo
          </a>
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-xl flex items-center justify-center text-foreground/50 hover:text-primary hover:shadow-neon hover:-translate-y-1 transition-all group/git"
            >
              <Icon
                icon="mdi:github"
                width="22"
                className="group-hover/git:animate-bounce"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id={slugify("Projects")} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
          >
            Featured Works
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {[...projectsData].reverse().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/shadowofleaf96"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-10 py-4 rounded-full font-bold text-foreground/70 hover:text-foreground hover:border-primary/50 transition-all group flex items-center gap-3"
          >
            Explore All Projects
            <Icon
              icon="mdi:arrow-right"
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-secondary/5 blur-[150px] -z-10" />
    </section>
  );
};

export default Projects;
