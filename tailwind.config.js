/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FFFFFF',
          100: '#C0C0C0',
          200: '#9CA3AF',
          300: '#7B7B7B',
        },
        dark: {
          10: '#454545',
          50: '#3E3E3E',
          100: '#363636',
          200: '#2C2C2C',
          300: '#212121',
          400: '#161616',
        },
        auxiliary: {
          green_light: '#07A158',
          green_dark: '#263A2F',
        },
      },
    },
  },
  plugins: [],
};
