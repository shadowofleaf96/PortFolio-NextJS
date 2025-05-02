import React, { useState, useEffect, useMemo } from "react";
import { Button, Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Confetti from "react-confetti";

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
    <div id="home" className="relative flex flex-col items-center justify-center h-screen -mt-16 md:-mt-8">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="relative flex items-center justify-center w-full mb-8 sm:w-1/2 md:w-2/3 lg:w-4/12 xl:w-1/3 mx-auto md:pr-4 md:mb-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[600px]">
            <div className="absolute inset-0 flex items-center justify-center scale-[1.01]">
              <div className="absolute inset-0 rounded-full border-4 border-second z-10" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin-slow z-20" />
            </div>



            <div className="relative z-10 w-full">
              <Image
                width="400"
                height="400"
                src="/images/profile-pic.webp"
                alt="MK"
                priority
                className="w-full h-auto object-cover rounded-full p-1 bg-gray-900 mx-auto"
                onClick={esterOnClick}
              />
            </div>
          </div>

          {showEasterEgg && (
            <div className="fixed inset-0 z-50 pointer-events-none">
              <Confetti
                numberOfPieces={1000}
                recycle={false}
                width={window.innerWidth}
                height={window.innerHeight}
              />
            </div>
          )}
        </div>

        <div className="md:w-2/4 flex flex-col items-center md:items-start justify-center">
          <Typography
            variant="h1"
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-start xl:text-8xl text-blue-gray-900 dark:text-gray-200 font-poppins"
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

          <div className="flex flex-col items-center md:items-start md:flex-row mb-4 md:mb-8">
            <Button
              onClick={() =>
                handleButtonClick(
                  "https://drive.google.com/file/d/1WYJ_m1NQFMRyr6sO11eIsY5XlID8ia9h/view?usp=sharing"
                )
              }
              ripple
              className="font-poppins bg-second text-white border-2 border-second hover:bg-green-500 hover:border-green-500 transition duration-300 mb-4 md:mr-2 dark:bg-second dark:hover:bg-green-500 dark:text-gray-200 dark:hover:border-green-500"
            >
              View My Resume
            </Button>

            <Button
              ripple
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
