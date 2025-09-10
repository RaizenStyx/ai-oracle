// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#2E2B59', 
        'accentColor': '#B8860B',
        'buttonColor1': '#356859',
        'buttonColor2': '#8a91ac',
        'textColor': '#FDF5E6',
      },
    },
  },
  plugins: [],
};

export default config;