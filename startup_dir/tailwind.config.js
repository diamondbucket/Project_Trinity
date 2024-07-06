/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noise:
          "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 100 100%22 preserveAspectRatio=%22none%22%3E%3Crect x=%220%22 y=%220%22 width=%22100%22 height=%22100%22 fill=%22url(%23noise)%22 /%3E%3Cdefs%3E%3Cpattern id=%22noise%22 patternUnits=%22userSpaceOnUse%22 width=%224%22 height=%224%22 viewBox=%220 0 4 4%22%3E%3Ccircle cx=%221%22 cy=%221%22 r=%220.5%22 fill=%22currentColor%22 /%3E%3C/pattern%3E%3C/defs%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
