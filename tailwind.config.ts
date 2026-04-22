import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        foreground: "#FFFFFF",
        muted: "#A3A3A3",
        card: "#1A1A1A",
        accent: "#C084FC",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 0.75s step-end infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
