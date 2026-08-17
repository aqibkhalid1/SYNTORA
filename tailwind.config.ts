import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F5F3EF",       // primary text (warm off-white, not pure white)
        bg: "#0A0A09",        // near-black base
        surface: "#141312",   // elevated panels / cards
        surface2: "#1B1A18",  // hover / secondary panels
        line: "#2A2825",      // hairline borders on dark
        muted: "#8C8880",     // secondary / body-on-dark text
        faint: "#57544E",     // tertiary text, disabled
        brass: "#C9A15C",     // primary accent — brushed brass
        brassDeep: "#8A6B33", // accent shadow / gradient partner
        brassSoft: "#EAD9B0", // accent tint for hover states
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
