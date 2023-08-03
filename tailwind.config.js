/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        header: "url('/public/images/martinheader.jpg')",
      },
      colors: {
        primary: "#0A283D",
        dark: "#020202",
        secondary: "#545454",
        gold: "#D6BA4A",
      },
      borderRadius: {
        "4xl": "35px",
      },
      height: {
        blogsection: "100vh",
      },
    },
  },
  plugins: [],
};
