import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens para Light Mode
        "background-light": "#F8FAFC",
        "text-light": "#1F2937",
        "button-bg-light": "#2563EB",
        "button-text-light": "#FFFFFF",
        "button-hover-light": "#1D4ED8",
        "counter-text-light": "#111827",

        // Tokens para Dark Mode
        "background-dark": "#1F2937",
        "text-dark": "#F9FAFB",
        "button-bg-dark": "#3B82F6",
        "button-text-dark": "#FFFFFF",
        "button-hover-dark": "#2563EB",
        "counter-text-dark": "#E5E7EB",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
