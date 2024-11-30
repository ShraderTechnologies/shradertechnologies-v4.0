import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: "var(--charcoal)",
        matteblack: "var(--black)",
      },
      fontFamily: {
        poppins: ["var(--poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
