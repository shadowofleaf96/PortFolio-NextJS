import React, { useState, useEffect, useMemo } from "react";
import { Button, Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Confetti from "react-confetti";
import Tilt from "react-parallax-tilt";

function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const esterOnClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 4) {
      setShowEasterEgg(true);
    }
  };

  useEffect(() => {
    if (showEasterEgg) {
      const timeoutId = setTimeout(() => {
        setClickCount(0);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [showEasterEgg]);

  const handleButtonClick = (link) => {
    if (link.startsWith("#")) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center h-screen -mt-16 md:-mt-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex w-full mr:0 md:mr-16 sm:w-1/2 md:w-2/3 lg:w-4/12 xl:w-1/3 items-center justify-center mx-auto">
          <Tilt tiltMaxAngleY={3} tiltMaxAngleX={3} gyroscope={true}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              src="/images/profile-pic.webp"
              alt="MK"
              priority={true}
              className="mb-8 w-full h-auto object-cover rounded-full"
              onClick={esterOnClick}
            />
          </Tilt>

          {showEasterEgg && (
            <div>
              <Confetti numberOfPieces={1000} recycle={false} />
            </div>
          )}
        </div>
        <div className="md:w-2/4 flex md:flex flex-col items-start justify-center">
          <Typography
            variant="h1"
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold xl:text-8xl text-blue-gray-900 dark:text-gray-200 font-poppins"
          >
            Hi, I'm Mohammed Kotbi
          </Typography>

          <div className="mb-8 text-second text-md md:text-lg font-poppins">
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Web Developer",
                  "An Android Developer",
                  "A PC Gamer",
                  "A PC Builder",
                  "A PC Repair Technician",
                  "A YouTuber",
                ],
                autoStart: true,
                delay: 50,
                loop: true,
              }}
            />
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-start mb-4 md:mb-8 mx-auto md:mx-0">
            <Button
              onClick={() =>
                handleButtonClick(
                  "https://drive.google.com/file/d/1smlwves95h5btpE0L5xuM5PNK2cU4S1i/view?usp=sharing"
                )
              }
              ripple={true}
              className="font-poppins bg-second text-white border-2 border-second hover:bg-green-500 hover:border-green-500 transition duration-300 mb-4 md:mr-2 dark:bg-second dark:hover:bg-green-500 dark:text-gray-200 dark:hover:border-green-500"
            >
              View My Resume
            </Button>

            <Button
              ripple={true}
              onClick={() => handleButtonClick("#contact-me")}
              className="font-poppins bg-transparent dark:bg-black text-black border-2 border-second hover:border-green-500 hover:text-green-500 transition duration-300 mb-4 md:mr-2 dark:text-white dark:hover:border-green-500 dark:hover:text-green-500"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <p className="text-black mb-2 dark:text-white">Scroll Down</p>
      <div className="mouse">
        <div className="roll"></div>
        <div className="rollshadow"></div>
      </div>
    </div>
  );
}

export default Hero;
