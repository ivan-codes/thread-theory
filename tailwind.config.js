module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#4575FA",
        background: "#FAFBFF",
        link: "#1B95E0",
        "font-color": "#111827",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
