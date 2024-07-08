// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-200': '#cfe8ff',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'red-200': '#fecaca',
      },
      customDarkGrey: {
        DEFAULT: '#2F4F4F'
      },
      customLightGrey: {
        DEFAULT: '#CDCDCD'
      }
    },
  },
  plugins: [],
};
