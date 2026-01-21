/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hub: {
          background: "#FAFAFA",
          card: "#FFFFFF",
          border: "#E5E5E5",
          html: "#E76F51",
          css: "#2A9D8F",
          js: "#F4A261",
          react: "#264653",
          design: "#E9C46A"
        }
      },
      boxShadow: {
        tab: "0 6px 12px rgba(0,0,0,0.08)",
        soft: "0 10px 30px rgba(38,70,83,0.08)"
      }
    }
  },
  plugins: []
};
