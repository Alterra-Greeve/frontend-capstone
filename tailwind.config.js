/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      "transparent" : "transparent",
      "white" : "#ffffff",
      "black" : "#000000",
      "primary": {
        50: "#F0F5F4",
        100: "#D2E1DE",
        200: "#A4C2BC",
        300: "#77A49B",
        400: "#498579",
        500: "#1C6758",
        600: "#165246",
        700: "#113E35",
        800: "#0B2923",
        900: "#061512",
      },
      "secondary": {
        50: "#FCFBE8",
        100: "#FBFAE1",
        200: "#F8F6C3",
        300: "#F4F1A5",
        400: "#F1ED87",
        500: "#EDE869",
        600: "#BEBA54",
        700: "#8E8B3F",
        800: "#5F5D2A",
        900: "#2F2E15",
      },
      "neutral": {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EDEDED",
        300: "#E5E5E5",
        400: "#D4D4D4",
        500: "#A3A3A3",
        600: "#737373",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      "danger": {
        50: "#FBEAEA",
        100: "#F6D5D4",
        200: "#EDABA9",
        300: "#E5817E",
        400: "#DC5753",
        500: "#D32D28",
        600: "#A92420",
        700: "#7F1B18",
        800: "#541210",
        900: "#2A0908",
      },
      "warning": {
        50: "#FEF9E6",
        100: "#FDF3CC",
        200: "#FCE699",
        300: "#FADA66",
        400: "#F9CD33",
        500: "#F7C100",
        600: "#C69A00",
        700: "#947400",
        800: "#634D00",
        900: "#312700",
      },
      "success": {
        50: "#EDF8EF",
        100: "#D1EDD7",
        200: "#A3DBAF",
        300: "#76C986",
        400: "#48B75E",
        500: "#1AA536",
        600: "#15842B",
        700: "#106320",
        800: "#0A4216",
        900: "#05210B",
      },
      "info": {
        50: "#E8F2FC",
        100: "#CDE2F9",
        200: "#9BC5F3",
        300: "#68A8EC",
        400: "#368BE6",
        500: "#046EE0",
        600: "#0358B3",
        700: "#024286",
        800: "#022C5A",
        900: "#01162D",
      },
      
      
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom: '0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 4px 2px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
  plugins: [require("tailwindcss-animate")],
};
