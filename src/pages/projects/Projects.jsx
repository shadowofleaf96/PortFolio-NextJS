import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

const projectsData = [
  {
    id: 1,
    image: "/images/GreenVille.png",
    title: "GreenVille Bio-organic eCommerce store",
    description:
    "Welcome to GreenVille, an open-source MERN (MongoDB, Express.js, React.js, Node.js) stack ecommerce shop project. GreenVille is designed to provide a foundation for building a robust and scalable online bio Organic store.",
    liveDemoLink: "https://greenville-frontend.vercel.app/",
    sourceCodeLink: "https://github.com/shadowofleaf96/GreenVille",
  },
  {
    id: 2,
    image: "/images/tactiques_project.webp",
    title: "Tactiques Website",
    description:
    "Welcome to Tactiques, a dynamic Next.js-powered website showcasing Institut Tactiques Formation Privée (ITFP). Discover a premier private institute dedicated to providing expert coaching and training programs, empowering students with the skills and knowledge they need for a successful future.",
    liveDemoLink: "https://tactiques-next-js.vercel.app/",
    sourceCodeLink: "https://github.com/shadowofleaf96/Tactiques-NextJS",
   },
   {
    id: 3,
    image: "/images/JoTiYa Project.webp",
    title: "JoTiYa Shopify Admin Panel",
    description:
      "Welcome to JoTiYa, an open-source MERN (MongoDB, Express.js, React.js, Node.js) stack for a Shopify Admin Panel project. JoTiYa is designed to provide a foundation for building a robust and scalable Admin Panel for your Shopify Store.",
    liveDemoLink: "https://shopify-admin-panel.onrender.com/",
    sourceCodeLink: "https://github.com/shadowofleaf96/Shopify-Admin-Panel",
  },
  {
    id: 4,
    image: "/images/up2career.webp",
    title: "Up2Career Landing Page",
    description:
      "Working and Mantaining Up2Career Landing Page using MERN, a Website that provides SAP Training and Access Services, the website has Static Components, Contact Form, Payment Form using Paypal or Bank Transfer",
    liveDemoLink: "https://up2career.com/",
    sourceCodeLink: "https://up2career.com/",
  },
  {
    id: 5,
    image: "/images/imusic.webp",
    title: "IMusic Android App",
    description:
      "Welcome to the ultimate Android music player that is designed to enhance your listening experience, it is based on Timber Music Player, created using Java on Android Studio.",
    liveDemoLink:
      "https://play.google.com/store/apps/details?id=ma.mk.imusic&pli=1",
    sourceCodeLink:
      "https://xdaforums.com/t/4-2-imusic-a-elegant-music-player.4115007/",
  },
  {
    id: 6,
    image: "/images/OldPortfolio.webp",
    title: "My Old PortFolio",
    description:
      "Welcome to my portfolio, a simple and elegant showcase of my work and skills. This portfolio is created using only HTML, CSS, and JavaScript, highlighting my abilities in web development and design.",
    liveDemoLink: "https://shadowofleaf96.github.io/",
    sourceCodeLink: "https://github.com/shadowofleaf96/PortFolio",
  },
  {
    id: 7,
    image: "/images/pcpartproject.webp",
    title: "PC Parts Ecommerce Shop",
    description:
      "Welcome to the MRTech Ecommerce Shop, a simple and lightweight online store for purchasing PC components. This project is built using HTML, CSS, JavaScript, and Tailwind CSS, making it easy to understand and customize.",
    liveDemoLink: "https://shadowofleaf96.github.io/shoppingCart",
    sourceCodeLink: "https://github.com/shadowofleaf96/EcommerceWebsite",
  },
  {
    id: 8,
    image: "/images/Blog.webp",
    title: "TechBlog",
    description:
      "Welcome to TechBlog, an open-source gaming blog created with Tailwind CSS, EJS, and Express.js. TechBlog is designed to be a lightweight and customizable platform for gamers and enthusiasts.",
    liveDemoLink: "https://blog-website-7mkl.onrender.com/",
    sourceCodeLink: "https://github.com/shadowofleaf96/BlogWebsite",
  },
  {
    id: 9,
    image: "/images/tadkir.webp",
    title: "Tadkir WPF App",
    description:
      "Welcome to Tadkir, simple Windows Presentation Foundation (WPF) application designed to encourage and remind users about the importance of reading the Quran.",
    liveDemoLink: "https://github.com/shadowofleaf96/Tadkir",
    sourceCodeLink: "https://github.com/shadowofleaf96/Tadkir",
  },
];

function ProjectCard({ project }) {
  const [isHovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // Check if the screen size is mobile on mount and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint (768px)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const blurProps = useSpring({
    filter: isHovered ? "blur(5px)" : "blur(0px)",
    opacity: isHovered ? 0.9 : 1,
  });

  const overlayProps = useSpring({
    opacity: isHovered ? 1 : 0,
  });

  const handleButtonClick = (link) => {
    // Allow button click only if visible
    if (isHovered || isMobile) {
      window.open(link, "_blank");
    }
  };

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      color="white"
      className="w-full max-w-sm dark:bg-black relative mx-auto mb-8 md:max-w-screen-md"
    >
      <animated.div style={blurProps}>
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={project.image}
          alt={project.title}
          priority={true}
          className="rounded-t-lg object-cover w-full h-64 md:h-64"
        />
        <Typography className="text-lg text-black dark:text-white flex justify-center font-semibold mx-3 my-6 font-poppins">
          {project.title}
        </Typography>
      </animated.div>
      <animated.div
        style={{
          ...overlayProps,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white dark:bg-black"
      >
        <Typography className="text-xl text-center text-black dark:text-white font-semibold mb-2 font-poppins">
          {project.title}
        </Typography>

        <CardBody>
          <p className="text-xs sm:text-sm text-black dark:text-white">
            {project.description}
          </p>
        </CardBody>

        <div className="flex flex-wrap justify-center gap-2 md:flex-nowrap pb-2">
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.liveDemoLink)}
            className="flex items-center rounded-full text-second font-medium dark:hover:bg-gray-50"
          >
            <Icon
              icon="material-symbols-light:play-circle"
              height={24}
              width={24}
              className="mr-2 sm:w-8 sm:h-8 md:h-12 md:w-12"
            />
            <span className="text-xs sm:text-sm md:text-md hidden md:block">Live Demo</span>
          </Button>
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.sourceCodeLink)}
            className="flex items-center rounded-full text-second font-medium dark:hover:bg-gray-50"
          >
            <Icon
              icon="mdi:github"
              height={24}
              width={24}
              className="mr-2 sm:w-8 sm:h-8 md:h-12 md:w-12"
            />
            <span className="text-xs sm:text-sm md:text-md hidden md:block">Source Code</span>
          </Button>
        </div>
      </animated.div>
    </Card>
  );
}

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      id="projects"
      className="flex flex-col items-center p-4 md:p-5 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center dark:text-white font-medium text-4xl md:text-5xl font-poppins"
        >
          My Projects
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-center mt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} className="mb-4" />
        ))}
      </div>
    </div>
  );
}

export default Projects;
