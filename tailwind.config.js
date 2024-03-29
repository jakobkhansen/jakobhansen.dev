/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        void: "#0E0B16",
        jewel: "#4717F6",
        jewellight: "#7f3af7",
        twitchdark: "#641fff",
        neutralgray: "#6e768166",
        stark: "#E7DFDD",
        textprimary: "#E7DFDD",
        textsecondary: "#99aab5",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
