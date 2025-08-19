"use client";

import React, { useState, useEffect } from "react";
import "../index.css"; 

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="Hello this is my portfolio" />
      </head>
      <body>
        {isLoading ? (
          <img
            src="/images/loader.gif"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              width: "40vw",
              height: "auto",
              maxWidth: "200px",
              maxHeight: "200px",
            }}
            alt="Loading..."
          />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
