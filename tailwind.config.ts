import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Josefin Sans', 'ui-sans-serif', 'system-ui'],
        default: ['Literata', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
} satisfies Config;
