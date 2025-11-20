import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        primary: {
          DEFAULT: "#6C5CE7",
          50: "#F4F2FF",
          100: "#E9E6FF",
          200: "#CFC6FF",
          300: "#B5A6FF",
          400: "#9B86FF",
          500: "#8166FF",
          600: "#6C5CE7",
          700: "#5246B3",
          800: "#3A3280",
          900: "#251F4D"
        }
      }
    }
  },
  plugins: []
};
export default config;
