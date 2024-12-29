/** @type {import('tailwindcss').Config} */
import { theme } from './src/tailwind-theme';
module.exports = {
  content: [
    './src/*/.{js,jsx,ts,tsx,mdx}',
    './src/*/.stories.{js,jsx,ts,tsx,mdx}',
    './.storybook/*.{js,jsx,ts,tsx,mdx}',
    './public/index.html',
  ],
  theme,
  plugins: [],
};