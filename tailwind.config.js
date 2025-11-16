/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.75rem", // sağ və sol boşluq
      screens: {
        sm: "540px", // ≥576px üçün max-width
        md: "720px", // ≥768px üçün
        lg: "960px", // ≥992px üçün
        xl: "1140px", // ≥1200px üçün
        "2xl": "1400px", // ≥1400px üçün
      },
    },
    extend: {
      maxWidth: {
        "screen-sm": "540px",
        "screen-md": "720px",
        "screen-lg": "960px",
        "screen-xl": "1140px",
        "screen-2xl": "1400px",
      },
    },
    
  },
  plugins: [],
};
