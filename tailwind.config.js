/** @type {import('tailwindcss').Config} */
// Custom flattenColorPalette function
const flattenColorPalette = (colors) => {
  return Object.assign({}, ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values]) => {
    if (typeof values === "object") {
      return Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
        [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
      }));
    } else {
      return [{ [`${color}`]: values }];
    }
  }));
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/src/assets/Images/bg/footer.jpg')",
      },
      rotate: {
        '-30': '-30deg',
      },
      screens: {
        'sxl' : '1441px',
        'ssxl' : '1380px',
        'ssxxl' : '950px',
        'sssxxxl' : '680px',
        'sssxxl' : '644px',
        'sssxl' : '500px',
        'ssssxl' : '360px',
      },
      maxWidth: {
        '7xl-custom': 'calc(80rem + 50px)' // Adjust the value as needed
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        meteor: "meteoreffect 5s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        meteoreffect: { // Define "meteor-effect" keyframes separately
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [
    // Plugin to add Tailwind colors as CSS variables
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    }
  ],
};
