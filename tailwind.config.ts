import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false, // Disable base reset styles to avoid conflicts with Ant Design
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FFA726",
        primaryBg: "#D4EED1",
        text: "#2D2D2D",
        accentDark: "#e69622"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
export default config;
