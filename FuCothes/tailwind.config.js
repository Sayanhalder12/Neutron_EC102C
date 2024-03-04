/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    // themes: ["light"],
  },
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx} ",
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
      colors: {
        // Colors inspired by "TikTok Marketing Partner"
        primary: {
          DEFAULT: "#FF005F", // Vibrant pink
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#333333", // Dark gray
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF2D55", // Coral red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F4F5F7", // Light gray
          foreground: "#1C1C1E", // Dark text for better contrast
        },
        accent: {
          DEFAULT: "#FFD700", // Gold
          foreground: "#1C1C1E",
        },
        popover: {
          DEFAULT: "#FFFFFF", // White
          foreground: "#1C1C1E",
        },
        card: {
          DEFAULT: "#FEFEFE", // Ivory white
          foreground: "#1C1C1E",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Your keyframes here
      },
      animation: {
        // Enhanced accordion animations
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
