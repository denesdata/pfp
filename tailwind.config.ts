import { theme } from './src/lib/config/general'
// @ts-ignore Could not find a declaration file for module '@tailwindcss/typography'.
import typography from '@tailwindcss/typography'
// @ts-ignore Could not find a declaration file for module 'daisyui'.
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  theme: { extend: {} },
  plugins: [typography, daisyui],
  // daisyui: { themes: themes }
  daisyui: {
    themes: [
      {
        pfp_dark: {

          "primary": "#3F9378",

          "secondary": "#263E3F",

          "accent": "#10576D",

          "neutral": "#120C12",

          "base-100": "#2E3855",

          "info": "#8DCAC1",

          "success": "#9DB787",

          "warning": "#FFD25F",

          "error": "#FC9581",
        },
      },
      {
        pfp_light: {

          "primary": "#2E3855",

          "secondary": "#263E3F",

          "accent": "#10576D",

          "base-100": "#E7F5F5",
        },
      }, "dracula", "night", "winter"
    ],
  },
}
