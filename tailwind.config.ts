import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16201f",
        mist: "#f5f8f7",
        clinic: {
          teal: "#0f8f8c",
          green: "#37a66a",
          lime: "#d6ed6b",
          blue: "#2f6f9f"
        }
      },
      boxShadow: {
        soft: "0 20px 70px rgba(22, 32, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
