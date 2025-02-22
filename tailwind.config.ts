import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Michroma"],
        primary: ["Montserrat"],
      },
      colors: {
        background: "#273B67",
        yellow: {
          500: "#FF9000",
          600: "#FFAC5E",
        },
      },
      rotate: {
        "135": "135deg",
      },
    },
  },
  plugins: [],
} satisfies Config;
