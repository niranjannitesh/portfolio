import type { Config } from "tailwindcss"
import defaultConfig from "tailwindcss/defaultConfig"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        x: {
          black: "#0C0C0F",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
}
export default config
