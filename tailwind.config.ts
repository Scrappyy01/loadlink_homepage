import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'loadlink-orange': '#f36f21',
        'loadlink-navy': '#002d4b',
        'loadlink-dark': '#193d5a',
        'text-gray': '#4a4a4a',
        'light-bg': '#f4f7f9',
      },
    },
  },
  plugins: [],
};

export default config;
