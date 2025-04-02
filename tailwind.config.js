/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#AF0707", // Основной цвет
          secondary: "#FF4081", // Второстепенный
          background: "#F5F5F5", // Фон
          text: "#212121", // Основной текст
        },
      },
    },
    plugins: [],
  };
  