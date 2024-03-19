import type { Config } from "tailwindcss"

// @ts-ignore
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
const addVariablesForColors = ({ addBase, theme }: any) =>
  addBase({
    ":root": Object.fromEntries(
      Object.entries(flattenColorPalette(theme("colors"))).map(([key, val]) => [
        `--${key}`,
        val
      ])
    )
  })

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: { sans: ["var(--font-geist-sans)"] },
      animation: { aurora: "aurora 60s linear infinite" },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" }
        }
      }
    }
  },
  plugins: [addVariablesForColors]
}

export default config
