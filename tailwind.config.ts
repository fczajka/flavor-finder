import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAF9F6',
        seafoam: '##9BE5BE',
        sunset: '##9BE5BE',
        lavender: '#BA9CD6',
        night: '#1C1C1C',
      },
      fontFamily: {
        headline: ['Josefin Sans', 'ui-sans-serif', 'system-ui'],
        default: ['Literata', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
} satisfies Config;
