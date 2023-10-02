// Importing Config Type Of TailwindCSS
import type { Config } from 'tailwindcss'

// Defining Configs Of TailwindCSS
const config: Config = {
  content: [
      './app/page.tsx',
      './component/*.{tsx,jsx}',
      './component/**/*.{tsx,jsx}',
      './chunk/*.{tsx,jsx}',
      './chunk/**/*.{tsx,jsx}',
  ],
  theme: {},
  plugins: [],
}

// Exporting Configs Of TailwindCSS
export default config;