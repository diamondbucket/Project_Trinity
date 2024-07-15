// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    fontFamily: { sans: ["Helvetica", "Arial", "sans-serif"] },
    extend: {
      boxShadow: {
        glow: "0 0 15px 5px rgba(255, 255, 255, 0.5)",
      },
      backgroundImage: {
        isometric:
          'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
        "purple-radial":
          "radial-gradient(circle at center, rgba(95,13,128,1) 0%, rgba(95,13,128,0) 100%)",
      },
      opacity: {
        20: "0.2",
      },
    },
  },
  plugins: [],
};
