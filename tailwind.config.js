/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1152px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'image18': "url('./src/assets/image18.png')",
        'image19': "url('./src/assets/image19.png')",
        'image20': "url('./src/assets/image20.png')",
      },
    },
  },
  plugins: [],
};
