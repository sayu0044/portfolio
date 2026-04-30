import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Mobile-first breakpoints
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        // Primary palette — identical to original
        black: "#000000",
        "off-black": "#0a0a0a",
        "soft-bg": "#f2f2f2",
        accent: "#FF9800",
        "accent-dark": "#e68900",
        // Text hierarchy
        "white-90": "rgba(255,255,255,0.9)",
        "white-40": "rgba(255,255,255,0.4)",
        "black-50": "rgba(0,0,0,0.5)",
        "black-10": "rgba(0,0,0,0.1)",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      fontSize: {
        // Mobile-first scale
        "hero-sm": ["clamp(2.5rem, 10vw, 5.4rem)", { lineHeight: "1.1" }],
        "hero-md": ["clamp(3rem, 8vw, 6.8rem)", { lineHeight: "1.05" }],
        "section-title": ["clamp(1.8rem, 6vw, 3.2rem)", { lineHeight: "1.2" }],
        "card-title": ["clamp(1rem, 3vw, 1.25rem)", { lineHeight: "1.3" }],
      },
      spacing: {
        "section-sm": "4rem",   // mobile section padding
        "section-md": "6rem",   // tablet
        "section-lg": "8rem",   // desktop
      },
      animation: {
        "orb-1": "orb1 12s ease-in-out infinite",
        "orb-2": "orb2 16s ease-in-out infinite",
        "orb-3": "orb3 20s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "progress": "progressBar 0.3s ease",
        "menu-in": "menuIn 0.4s ease forwards",
        "line-draw": "lineDraw 0.6s ease forwards",
      },
      keyframes: {
        orb1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(60px, -40px) scale(1.2)" },
          "66%": { transform: "translate(-30px, 50px) scale(0.9)" },
        },
        orb2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-50px, 30px) scale(1.1)" },
          "75%": { transform: "translate(40px, -60px) scale(0.8)" },
        },
        orb3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1.2)" },
          "50%": { transform: "translate(20px, 40px) scale(0.7)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        progressBar: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        menuIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineDraw: {
          "0%": { "stroke-dashoffset": "1000" },
          "100%": { "stroke-dashoffset": "0" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
