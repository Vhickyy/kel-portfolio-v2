import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "var(--yellow)", //wont change in light and dark
        textgray: "var(--textgray)",
        accent: "#100918", //wont change in light and dark
        // accent: "#fff333", //bgColor
        textColor: "var(--textColor)", //will change in light and dark
        // textlight: "#ffffff",
        bgColor: "var(--bgColor)",
        blur: "var(--blur)",
        inverse: "var(--inverse)",
        bgGray: "var(--bgGray)",
        navBlur: "var(--navBlur)",
        bgColorDim: "var(--bgColorDim)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
