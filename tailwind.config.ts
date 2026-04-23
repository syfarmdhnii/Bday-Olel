/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#663a43",
        "inverse-primary": "#ffb4a8",
        "primary-fixed": "#ffdad4",
        "secondary-fixed": "#ffdad6",
        "on-secondary": "#ffffff",
        "tertiary": "#472029",
        "tertiary-container": "#61353e",
        "surface": "#fefccf",
        "on-tertiary": "#ffffff",
        "surface-tint": "#b52619",
        "primary-fixed-dim": "#ffb4a8",
        "tertiary-fixed": "#ffd9df",
        "on-surface-variant": "#5a403c",
        "outline-variant": "#e3beb8",
        "primary": "#610000",
        "on-background": "#1d1d03",
        "surface-container-low": "#f8f6c9",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "on-primary-container": "#ff907f",
        "surface-container-high": "#eceabe",
        "on-secondary-container": "#600006",
        "on-surface": "#1d1d03",
        "secondary-container": "#ff5a52",
        "surface-container-highest": "#e6e5b9",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#920703",
        "on-tertiary-container": "#da9faa",
        "tertiary-fixed-dim": "#f4b6c1",
        "inverse-surface": "#323214",
        "inverse-on-surface": "#f5f3c7",
        "on-primary-fixed": "#410000",
        "on-secondary-fixed-variant": "#92030f",
        "outline": "#8e706b",
        "on-primary": "#ffffff",
        "on-secondary-fixed": "#410003",
        "secondary-fixed-dim": "#ffb4ac",
        "on-error": "#ffffff",
        "secondary": "#b52424",
        "surface-bright": "#fefccf",
        "on-tertiary-fixed": "#330f19",
        "error-container": "#ffdad6",
        "primary-container": "#8b0000",
        "surface-container": "#f2f0c4",
        "background": "#fefccf",
        "surface-dim": "#dedcb1",
        "surface-variant": "#e6e5b9"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "8px",
        "stack-overlap": "-12px",
        "gutter-scrapbook": "16px",
        "margin-page": "24px"
      },
      fontFamily: {
        "body-standard": ["Be Vietnam Pro", "sans-serif"],
        "body-romantic": ["Epilogue", "sans-serif"],
        "label-caps": ["Be Vietnam Pro", "sans-serif"],
        "headline-lg": ["Noto Serif", "serif"],
        "headline-md": ["Noto Serif", "serif"],
        "handwriting": ["Homemade Apple", "cursive"],
        "retro-handwriting": ["Courier Prime", "Noto Serif", "serif"]
      },
      fontSize: {
        "body-standard": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-romantic": ["24px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
}
