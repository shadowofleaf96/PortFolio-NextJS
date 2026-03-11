"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

const projectsData = [
  {
    id: 1,
    image: "/images/imusic.webp",
    title: "IMusic Android App",
    category: "Mobile App",
    description:
      "A premium Android music player designed with Java on Android Studio, focused on high-fidelity audio and elegant UX.",
    tech: ["Java", "Android Studio", "XML"],
    live: "https://play.google.com/store/apps/details?id=ma.mk.imusic&pli=1",
    github:
      "https://xdaforums.com/t/4-2-imusic-a-elegant-music-player.4115007/",
  },
  {
    id: 2,
    image: "/images/tactiques_project.webp",
    title: "Tactiques Website",
    category: "Next.js App",
    description:
      "Dynamic educational platform for a private institute with modern UI and smooth navigation.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://tactiques-next-js.vercel.app/",
    github: "https://github.com/shadowofleaf96/Tactiques-NextJS",
  },
  {
    id: 3,
    image: "/images/OldPortfolio.webp",
    title: "My Old Portfolio",
    category: "Web Design",
    description:
      "A simple and elegant showcase of my early work and skills, created using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://shadowofleaf96.github.io/",
    github: "https://github.com/shadowofleaf96/PortFolio",
  },
  {
    id: 4,
    image: "/images/pcpartproject.webp",
    title: "PC Parts Ecommerce",
    category: "E-commerce",
    description:
      "MRTech Ecommerce Shop, a lightweight online store for purchasing PC components built with Tailwind CSS.",
    tech: ["HTML", "JavaScript", "Tailwind"],
    live: "https://shadowofleaf96.github.io/shoppingCart",
    github: "https://github.com/shadowofleaf96/EcommerceWebsite",
  },
  {
    id: 5,
    image: "/images/Blog.webp",
    title: "TechBlog Gaming",
    category: "Web App",
    description:
      "An open-source gaming blog platform created with Tailwind CSS, EJS, and Express.js for enthusiasts.",
    tech: ["Express", "Tailwind", "EJS"],
    live: "https://blog-website-7mkl.onrender.com/",
    github: "https://github.com/shadowofleaf96/BlogWebsite",
  },
  {
    id: 6,
    image: "/images/GreenVille.webp",
    title: "GreenVille eCommerce",
    category: "Fullstack MERN",
    description:
      "A robust bio-organic eCommerce platform featuring secure payments and scalable inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://greenville-frontend.vercel.app/",
    github: "https://github.com/shadowofleaf96/GreenVille",
  },
  {
    id: 7,
    image: "/images/tadkir.webp",
    title: "Tadkir WPF App",
    category: "Desktop App",
    description:
      "A Windows Presentation Foundation application designed to encourage and remind users about Quran reading.",
    tech: ["C#", "WPF", ".NET"],
    live: "https://github.com/shadowofleaf96/Tadkir",
    github: "https://github.com/shadowofleaf96/Tadkir",
  },
  {
    id: 8,
    image: "/images/1001candles.webp",
    title: "1001 Candles",
    category: "WordPress",
    description:
      "An elegant e-commerce platform for premium candles built with WordPress.",
    tech: ["WordPress", "WooCommerce", "PHP"],
    live: "https://1001candles.com/",
    github: "#",
  },
  {
    id: 9,
    image: "/images/plazatoro.webp",
    title: "Labo Plaza Toro",
    category: "WordPress",
    description:
      "A professional contact and presentation site for a medical laboratory.",
    tech: ["WordPress", "Elementor", "CSS"],
    live: "https://laboplazatoro.com/contact/",
    github: "#",
  },
  {
    id: 10,
    image: "/images/jciame.webp",
    title: "JCI AME Leadership Academy",
    category: "WordPress",
    description:
      "Online presence for the JCI AME Leadership Academy, featuring robust event and membership capabilities.",
    tech: ["WordPress", "PHP", "JavaScript"],
    live: "https://jciame-leadership-academy.com/",
    github: "#",
  },
  {
    id: 11,
    image: "/images/JoTiYa Project.webp",
    title: "Shopify Admin Panel",
    category: "Web App",
    description:
      "A custom admin panel built from scratch to enhance Shopify store management and analytics.",
    tech: ["React", "Node.js", "Tailwind"],
    live: "https://github.com/shadowofleaf96/Shopify-Admin-Panel",
    github: "https://github.com/shadowofleaf96/Shopify-Admin-Panel",
  },
  {
    id: 12,
    image: "/images/placeholder.webp",
    title: "JSNxt Boilerplate",
    category: "Open Source",
    description:
      "A comprehensive Next.js boilerplate designed to accelerate full-stack application development.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://github.com/shadowofleaf96/JSNxt-Boilerplate",
    github: "https://github.com/shadowofleaf96/JSNxt-Boilerplate",
  },
  {
    id: 13,
    image: "/images/xmb-portfolio.webp",
    title: "XMB Portfolio",
    category: "Web Design",
    description:
      "A creative and highly interactive web portfolio styled inspired by the PlayStation XMB interface.",
    tech: ["React", "Framer Motion", "CSS"],
    live: "https://xmb-portfolio.vercel.app",
    github: "https://github.com/shadowofleaf96/XMB-Portfolio",
  },
  {
    id: 14,
    image: "/images/placeholder.webp",
    title: "GitDocufy",
    category: "Tooling",
    description:
      "A utility tool designed to automatically generate documentation from Git repositories.",
    tech: [
      "Next.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "Markdown",
    ],
    live: "https://github.com/shadowofleaf96/GitDocufy",
    github: "https://github.com/shadowofleaf96/GitDocufy",
  },
  {
    id: 15,
    image: "/images/gofleet.webp",
    title: "GoFleet Enhancer",
    category: "Web App",
    description:
      "Chrome extension To enhance fleet management and tracking capabilities on Marjane Mall TMS",
    tech: ["chrome extension", "javascript", "html", "css"],
    live: "https://github.com/shadowofleaf96/GoFleet-Enhancer",
    github: "https://github.com/shadowofleaf96/GoFleet-Enhancer",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div className="glass group rounded-[2.5rem] p-4 h-full flex flex-col gap-6 hover:-translate-y-2 hover:shadow-neon hover:border-primary/30 transition-all duration-300 border-white/5 overflow-hidden relative">
        {/* Image Container */}
        <div className="relative aspect-video rounded-[1.8rem] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-60" />

          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-2 space-y-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-medium text-foreground/30 border border-foreground/5 px-2 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass py-3 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-foreground hover:bg-foreground/5 transition-all"
          >
            <Icon icon="mdi:eye" width="18" /> Demo
          </a>
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-foreground/50 hover:text-primary hover:shadow-neon transition-all"
            >
              <Icon icon="mdi:github" width="22" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[...projectsData].reverse().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
