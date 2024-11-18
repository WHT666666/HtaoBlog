/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography";

module.exports = {
  content: ["./docs/.vitepress/theme/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
}
