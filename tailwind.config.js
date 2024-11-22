import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ["var(--font-mono)"],
      },
      animation: {
        spin: 'spin 1.5s linear infinite', // Custom spin animation
      },
      
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
}
