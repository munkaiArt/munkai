import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
      },
      maxWidth: {
        custom: "1274px",
      },

      width: {
        custom: "90%",
        custom_2: "944px",
      },
      fontFamily: {
        sans: ['"Nunito"', "sans-serif"],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        hover: "var(--hoverbg)",
        opac: "var(--opac)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        text_dark_1: "rgb(5, 5, 5)",
        text_grey_1: "#A1A1A8",
        text_grey_2: "#E0E1E4",
        text_grey_3: "#333",

        text_blue_1: "#0a85d1",
        text_dark_2: "rgb(18, 18, 18)",
        custom_1: "#0C0A09",
        header: {
          DEFAULT: "var(--header)",
        },
        textAlt: {
          DEFAULT: "var(--text-alt)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
