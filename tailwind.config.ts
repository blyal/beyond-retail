import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        ipadPortrait: {
          raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)",
        },
        mobileLandscape: {
          raw: "(max-width: 932px) and (orientation: landscape)",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        robotoLight: ["Roboto-Light", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoBold: ["Roboto-Bold", "sans-serif"],
        robotoBlack: ["Roboto-Black", "sans-serif"],
      },
      letterSpacing: {
        "extra-widest": "0.4em",
      },
    },
  },
  plugins: [],
};
export default config;
