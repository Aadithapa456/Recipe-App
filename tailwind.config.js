/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4B6E",
        "primary-dark": "#E63F61",
        secondary: "#4A90E2",
        bg: "#F8FAFC",
        text: "#1E293B",
        "gray-light": "#F1F5F9",
        gray: "#94A3B8",
        "border-light": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
