/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: {
          DEFAULT: "#0a1020",
          secondary: "#0f172a",
          card: "rgba(10, 16, 32, 0.75)",
          hover: "rgba(20, 30, 58, 0.85)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(56, 189, 248, 0.4)",
          accent: "rgba(129, 140, 248, 0.35)",
        },
        primary: {
          DEFAULT: "#38bdf8", // Electric cyan/blue
          light: "#7dd3fc",
          dark: "#0284c7",
        },
        secondary: {
          DEFAULT: "#818cf8", // Electric purple/indigo
          light: "#a78bfa",
          dark: "#6366f1",
        },
        accent: {
          blue: "#38bdf8",
          cyan: "#06b6d4",
          indigo: "#6366f1",
          purple: "#a855f7",
          violet: "#c084fc",
        },
        muted: {
          DEFAULT: "#94a3b8",
          foreground: "#cbd5e1",
          dark: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.12), rgba(129, 140, 248, 0.08) 35%, rgba(5, 8, 22, 0) 70%)",
        "card-glow": "radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 70%)",
        "accent-gradient": "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(56, 189, 248, 0.25)",
        "glow-md": "0 0 25px -4px rgba(56, 189, 248, 0.35)",
        "glow-purple": "0 0 25px -4px rgba(168, 85, 247, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};
