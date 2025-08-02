import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
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
        // Modern AI Healthcare theme - Purple/Pink gradient
        brand: {
          purple: {
            50: "hsl(270, 100%, 98%)",
            100: "hsl(269, 100%, 95%)",
            200: "hsl(269, 100%, 92%)",
            300: "hsl(269, 97%, 85%)",
            400: "hsl(270, 95%, 75%)",
            500: "hsl(270, 91%, 65%)",
            600: "hsl(270, 83%, 54%)",
            700: "hsl(270, 76%, 42%)",
            800: "hsl(270, 72%, 32%)",
            900: "hsl(270, 69%, 23%)",
          },
          pink: {
            50: "hsl(322, 100%, 98%)",
            100: "hsl(322, 86%, 95%)",
            200: "hsl(322, 84%, 90%)",
            300: "hsl(322, 84%, 82%)",
            400: "hsl(322, 81%, 71%)",
            500: "hsl(322, 81%, 60%)",
            600: "hsl(322, 78%, 48%)",
            700: "hsl(322, 77%, 37%)",
            800: "hsl(322, 75%, 28%)",
            900: "hsl(322, 73%, 20%)",
          },
          violet: {
            50: "hsl(295, 100%, 98%)",
            100: "hsl(295, 92%, 95%)",
            200: "hsl(295, 84%, 90%)",
            300: "hsl(295, 77%, 82%)",
            400: "hsl(295, 75%, 69%)",
            500: "hsl(295, 72%, 56%)",
            600: "hsl(295, 69%, 44%)",
            700: "hsl(295, 70%, 34%)",
            800: "hsl(295, 71%, 26%)",
            900: "hsl(295, 72%, 19%)",
          },
          cyan: {
            50: "hsl(194, 100%, 97%)",
            100: "hsl(194, 93%, 94%)",
            200: "hsl(194, 96%, 86%)",
            300: "hsl(194, 93%, 73%)",
            400: "hsl(194, 89%, 56%)",
            500: "hsl(194, 82%, 43%)",
            600: "hsl(194, 83%, 35%)",
            700: "hsl(194, 85%, 28%)",
            800: "hsl(194, 84%, 23%)",
            900: "hsl(194, 82%, 19%)",
          },
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
