/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "surface-container": "#1f1f24",
              "on-secondary": "#003737",
              "primary": "#ffabf3",
              "primary-fixed-dim": "#ffabf3",
              "secondary-container": "#00fbfb",
              "secondary-fixed-dim": "#00dddd",
              "on-secondary-fixed": "#002020",
              "on-tertiary": "#323200",
              "surface": "#131318",
              "tertiary-fixed-dim": "#cdcd00",
              "on-tertiary-fixed": "#1d1d00",
              "on-primary-fixed": "#380038",
              "surface-dim": "#131318",
              "background": "#131318",
              "tertiary-fixed": "#eaea00",
              "on-error": "#690005",
              "surface-container-high": "#2a292f",
              "tertiary": "#cdcd00",
              "surface-container-lowest": "#0e0e13",
              "on-tertiary-fixed-variant": "#494900",
              "on-secondary-fixed-variant": "#004f4f",
              "inverse-on-surface": "#303035",
              "on-primary-container": "#510051",
              "surface-container-low": "#1b1b20",
              "on-tertiary-container": "#424200",
              "error-container": "#93000a",
              "surface-container-highest": "#35343a",
              "primary-fixed": "#ffd7f5",
              "surface-tint": "#ffabf3",
              "on-surface-variant": "#dcbed4",
              "secondary-fixed": "#00fbfb",
              "surface-variant": "#35343a",
              "outline-variant": "#564052",
              "on-surface": "#e4e1e9",
              "on-background": "#e4e1e9",
              "on-error-container": "#ffdad6",
              "on-primary-fixed-variant": "#810081",
              "secondary": "#ffffff",
              "surface-bright": "#39393e",
              "inverse-surface": "#e4e1e9",
              "tertiary-container": "#b1b100",
              "on-secondary-container": "#007070",
              "primary-container": "#ff00ff",
              "error": "#ffb4ab",
              "on-primary": "#5b005b",
              "inverse-primary": "#a900a9",
              "outline": "#a4899d"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "panel-gap": "2rem",
              "gutter": "1.5rem",
              "margin-desktop": "4rem",
              "margin-mobile": "1rem"
      },
      "fontFamily": {
              "body-md": ["Geist"],
              "label-sm": ["Space Mono"],
              "headline-lg": ["Anton"],
              "headline-md": ["Anton"],
              "body-lg": ["Geist"],
              "display-xl": ["Anton"],
              "headline-lg-mobile": ["Anton"]
      },
      "fontSize": {
              "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
              "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "700"}],
              "headline-lg": ["48px", {"lineHeight": "44px", "letterSpacing": "0.01em", "fontWeight": "400"}],
              "headline-md": ["32px", {"lineHeight": "36px", "fontWeight": "400"}],
              "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
              "display-xl": ["84px", {"lineHeight": "80px", "letterSpacing": "-0.02em", "fontWeight": "400"}],
              "headline-lg-mobile": ["36px", {"lineHeight": "32px", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
