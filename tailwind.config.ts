import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image':"url('/Background Foto.png')",
        'team-image':"url('/Group 44.svg')",
      },
      fontFamily: {
        'jakarta': ['Plus-Jakarta-Sans']
      },
      colors: {
        secondary: '#E9B824',
        tertiary: '#AEAEAE',
      }
    },
  },
  plugins: [],
}
export default config
