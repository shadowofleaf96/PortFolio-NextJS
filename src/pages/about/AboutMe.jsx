import React, { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  const timelineData = [
    {
      id: 1,
      companyName: "FREELANCE - Web Developer using WordPress",
      logoSrc: "/images/freelance-icon.webp",
      date: "11/2024 - Current",
    },
    {
      id: 2,
      companyName: "Up2Career - Full Stack Intern Developer",
      logoSrc: "/images/small_logo.webp",
      date: "01/2024 - 07/2024",
    },
    {
      id: 3,
      companyName: "ARK-X TALENT FACTORY - Full Stack MERN Intern Developer",
      logoSrc: "/images/arkx_logo.webp",
      date: "08/2023 - 12/2023",
    },
    {
      id: 4,
      companyName: "FREELANCE - Mobile and Windows Junior Developer",
      logoSrc: "/images/freelance-icon.webp",
      date: "01/2020 - 05/2022",
    },
    {
      id: 5,
      companyName: "LEONI BOUZNIKA - Crimping Maintenance Technician",
      logoSrc: "/images/leoni-ag-logo.webp",
      date: "05/2019 - 05/2021",
    },
  ];

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      id="about-me"
      className="text-black p-4 md:p-8 rounded-lg flex items-center justify-center scroll-mt-64 md:scroll-mt-28"
    >
      <div className="max-w-screen-lg text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline font-medium text-4xl md:text-5xl font-poppins dark:text-white"
        >
          About Me
        </Typography>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center mt-6">
          <Tilt
            className="flex justify-center"
            tiltMaxAngleY={10}
            tiltMaxAngleX={10}
          >
            <Image
              width="0"
              height="0"
              sizes="100vw"
              alt="MK"
              src="/images/Profile Skecth Art.webp"
              priority={true}
              className="w-full md:w-1/3 md:hidden h-auto object-cover rounded-full mb-4"
            />
          </Tilt>

          <div className="mx-auto text-center md:text-left max-w-full md:max-w-sm md:min-h-full flex-grow mb-4">
            <Typography
              color="black"
              className="mb-4 mt-4 p-2 font-normal text-sm md:text-base font-poppins dark:text-white"
            >
              Enthusiastic IT and Full Stack MERN developer, eager to know more,
              passionate about web and IT development, seeking hands-on
              experience to grow as a skilled developer.
            </Typography>
            <div className="w-[20rem] md:w-[22rem] mx-auto md:mx-0">
              <Timeline>
                {timelineData.map((item, index) => {
                  const isLastItem = index === timelineData.length - 1;
                  return (
                    <TimelineItem
                      key={item.id}
                      className="h-28 hover:scale-105 transition-transform"
                    >
                      {!isLastItem && (
                        <TimelineConnector className="!w-[78px] cursor-pointer" />
                      )}
                      <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white dark:bg-black py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon
                          className="p-3 dark:bg-blue-gray-200"
                          variant="ghost"
                        >
                          <Avatar
                            src={item.logoSrc}
                            alt={item.companyName}
                            style={{ objectFit: "contain" }}
                            size="md"
                          />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-base text-xs md:text-sm font-poppins cursor-pointer dark:text-white"
                          >
                            {item.companyName}
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal font-poppins cursor-pointer dark:text-white"
                          >
                            {item.date}
                          </Typography>
                        </div>
                      </TimelineHeader>
                    </TimelineItem>
                  );
                })}
              </Timeline>
            </div>
          </div>

          <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10} gyroscope={true}>
            <div>
              <Image
                priority={true}
                alt="MK"
                width="0"
                height="0"
                sizes="100vw"
                src="/images/Profile Skecth Art.webp"
                className="relative h-full w-full object-cover hidden md:block"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
