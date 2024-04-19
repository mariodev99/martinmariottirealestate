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
        contactImage: "url('/images/ContactPage.avif')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        header: "url('/public/images/martinheader.jpg')",
      },
      colors: {
        // ddf247 otro verde clarito
        greenprimary: "#A5F83B",
        greensecondary: "#BFDE00",
        orangeprimary: "#FF7A00",
        secondary: "#757575",
        blacksecondary: "#151515",
        grayprimary: "#A4A4A4",
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
