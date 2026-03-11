"use client";

import React, { useState, useEffect } from "react";
import "../app/globals.css";
import ParticlesComponent from "./components/ParticlesComponent";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>MK Portfolio | Fullstack Developer</title>
        <meta name="description" content="MK Portfolio" />
      </head>
      <body
        className={`${outfit.className} text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-300`}
      >
        {isLoading ? (
          <div className="fixed inset-0 z-100 flex items-center justify-center">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
              <div className="absolute inset-4 rounded-full border-4 border-secondary/20"></div>
              <div className="absolute inset-4 rounded-full border-4 border-t-secondary animate-spin-reverse"></div>
            </div>
          </div>
        ) : (
          <>
            <ParticlesComponent />
            <main className="relative z-10">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
