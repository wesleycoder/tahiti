import type { Config } from "tailwindcss";

const colors = {
  primary: "#ff0000",
  secondary: "#00ff00",
  tertiary: "#0000ff",
} as const;

export type Colors = typeof colors;

const config = {
  content: [""],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config;

export default config;
