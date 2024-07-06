// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'isometric': 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
      },
      opacity: {
        '20': '0.2',
      },
    },
  },
  plugins: [],
};

