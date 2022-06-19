/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      noto: ['Noto Sans', 'sans-serif'],
      segoe: ['Segoe UI', 'sans-serif'],
      logo: ['Nosifer', 'cursive'],
    },
    extend: {
      boxShadow: {
        shadow1: '4.1px -5px 0 0 rgb(17,24,39)',
        shadow2: '-4.1px -5px 0 0 rgb(17,24,39)',
      },
      animation: {
        ping: 'ping 0.7s cubic-bezier(0, 0, 0.2, 1) infinite',
        pingStrong: 'pingStrong 0.7s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.09)',
            opacity: 0.5,
          },
        },
        pingStrong: {
          '75%, 100%': {
            transform: 'scale(1.09)',
            opacity: 0.9,
          },
        },
      },
    },
  },
  plugins: [],
};

// @keyframes ping {
//   75%, 100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// }
