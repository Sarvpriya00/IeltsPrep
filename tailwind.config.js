/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        idp: {
          red: "#E31837",
          darkRed: "#B9122C",
          navy: "#0F172A",
          slate: "#1E293B",
          header: "#1E2433",
          gold: "#F59E0B",
          lightGray: "#F8FAFC",
          testBg: "#FAFBFD"
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace']
      }
    },
  },
  plugins: [],
}
