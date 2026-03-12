import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        second: "rgb(var(--color-second) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        neon: "0 0 20px rgba(99, 102, 241, 0.4)",
        "ring-glow": "0 0 4px 2px #00FFAB",
        "white-glow": "0 0 4px 2px white",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
