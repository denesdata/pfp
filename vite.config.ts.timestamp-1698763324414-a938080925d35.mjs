// vite.config.ts
import { defineConfig } from "file:///E:/NoSync/pfp/node_modules/.pnpm/vite@4.4.9_@types+node@18.17.4/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///E:/NoSync/pfp/node_modules/.pnpm/unocss@0.50.8_postcss@8.4.27_rollup@2.79.1_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import { presetTagify, presetIcons, extractorSvelte } from "file:///E:/NoSync/pfp/node_modules/.pnpm/unocss@0.50.8_postcss@8.4.27_rollup@2.79.1_vite@4.4.9/node_modules/unocss/dist/index.mjs";
import { imagetools } from "file:///E:/NoSync/pfp/node_modules/.pnpm/vite-imagetools@4.0.19_rollup@2.79.1/node_modules/vite-imagetools/dist/index.mjs";
import { sveltekit as SvelteKit } from "file:///E:/NoSync/pfp/node_modules/.pnpm/@sveltejs+kit@1.22.4_svelte@3.59.2_vite@4.4.9/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA } from "file:///E:/NoSync/pfp/node_modules/.pnpm/@vite-pwa+sveltekit@0.1.3_@sveltejs+kit@1.22.4_vite-plugin-pwa@0.14.7/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import TailwindCSS from "file:///E:/NoSync/pfp/node_modules/.pnpm/tailwindcss@3.3.3/node_modules/tailwindcss/lib/index.js";

// src/lib/config/general.ts
var theme = [
  {
    name: "winter",
    text: "\u26AA Light"
  }
];

// tailwind.config.ts
import typography from "file:///E:/NoSync/pfp/node_modules/.pnpm/@tailwindcss+typography@0.5.9_tailwindcss@3.3.3/node_modules/@tailwindcss/typography/src/index.js";
import daisyui from "file:///E:/NoSync/pfp/node_modules/.pnpm/daisyui@2.52.0_autoprefixer@10.4.14_postcss@8.4.27/node_modules/daisyui/src/index.js";
var tailwind_config_default = {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  // theme: { extend: {} },
  theme: {
    extend: {
      colors: {
        primary: "#3F9378",
        secondary: "#2E3855",
        "base-100": "#E5EBEB",
        "base-200": "#E5EBEB",
        "pfp-navy": "#2E3855",
        "light-blue": "#E7F5F5",
        "light-green": "#DDF3EA",
        white: "#FFFFFF",
        "baby-blue": "#D0E6F2",
        "pfp-green": "#3F9378",
        "pfp-orange": "#EC8B5A"
      },
      letterSpacing: {
        menu: "0.15em"
      },
      fontFamily: {
        sans: ["Public Sans", "Roboto", "sans-serif"],
        PublicSans: ["Public Sans", "Roboto", "sans-serif"],
        Poppins: ["Poppins", "Roboto", "sans-serif"]
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: { themes: theme.map(({ name }) => name) }
};

// vite.config.ts
import autoprefixer from "file:///E:/NoSync/pfp/node_modules/.pnpm/autoprefixer@10.4.14_postcss@8.4.27/node_modules/autoprefixer/lib/autoprefixer.js";
import cssnano from "file:///E:/NoSync/pfp/node_modules/.pnpm/cssnano@5.1.15_postcss@8.4.27/node_modules/cssnano/src/index.js";
var vite_config_default = defineConfig({
  envPrefix: "URARA_",
  build: {
    sourcemap: false,
    rollupOptions: {
      cache: false
    }
  },
  css: {
    postcss: {
      plugins: [
        TailwindCSS(tailwind_config_default),
        autoprefixer(),
        ...process.env.NODE_ENV === "production" ? [
          cssnano({
            preset: ["default", { discardComments: { removeAll: true } }]
          })
        ] : []
      ]
    }
  },
  plugins: [
    UnoCSS({
      include: [/\.svelte$/, /\.md?$/, /\.ts$/],
      extractors: [extractorSvelte],
      presets: [
        presetTagify({
          extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
        }),
        presetIcons({ scale: 1.5 })
      ]
    }),
    imagetools(),
    SvelteKit(),
    SvelteKitPWA({
      registerType: "autoUpdate",
      manifest: false,
      scope: "/",
      workbox: {
        globPatterns: ["posts.json", "**/*.{js,css,html,svg,ico,png,webp,avif}"],
        globIgnores: ["**/sw*", "**/workbox-*"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2xpYi9jb25maWcvZ2VuZXJhbC50cyIsICJ0YWlsd2luZC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxOb1N5bmNcXFxccGZwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxOb1N5bmNcXFxccGZwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Ob1N5bmMvcGZwL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZSBkZWZpbmUgY29uZmlnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gdml0ZSBwbHVnaW5cbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBwcmVzZXRUYWdpZnksIHByZXNldEljb25zLCBleHRyYWN0b3JTdmVsdGUgfSBmcm9tICd1bm9jc3MnXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJ1xuaW1wb3J0IHsgc3ZlbHRla2l0IGFzIFN2ZWx0ZUtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSdcbmltcG9ydCB7IFN2ZWx0ZUtpdFBXQSB9IGZyb20gJ0B2aXRlLXB3YS9zdmVsdGVraXQnXG4vLyBwb3N0Y3NzICYgdGFpbHdpbmRjc3NcbmltcG9ydCBUYWlsd2luZENTUyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCB0YWlsd2luZENvbmZpZyBmcm9tICcuL3RhaWx3aW5kLmNvbmZpZydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW52UHJlZml4OiAnVVJBUkFfJyxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGNhY2hlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBUYWlsd2luZENTUyh0YWlsd2luZENvbmZpZyksXG4gICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgICAuLi4ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBjc3NuYW5vKHtcbiAgICAgICAgICAgICAgICBwcmVzZXQ6IFsnZGVmYXVsdCcsIHsgZGlzY2FyZENvbW1lbnRzOiB7IHJlbW92ZUFsbDogdHJ1ZSB9IH1dXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXSlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBVbm9DU1Moe1xuICAgICAgaW5jbHVkZTogWy9cXC5zdmVsdGUkLywgL1xcLm1kPyQvLCAvXFwudHMkL10sXG4gICAgICBleHRyYWN0b3JzOiBbZXh0cmFjdG9yU3ZlbHRlXSxcbiAgICAgIHByZXNldHM6IFtcbiAgICAgICAgcHJlc2V0VGFnaWZ5KHtcbiAgICAgICAgICBleHRyYVByb3BlcnRpZXM6IChtYXRjaGVkOiBzdHJpbmcpID0+IChtYXRjaGVkLnN0YXJ0c1dpdGgoJ2ktJykgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gOiB7fSlcbiAgICAgICAgfSksXG4gICAgICAgIHByZXNldEljb25zKHsgc2NhbGU6IDEuNSB9KVxuICAgICAgXVxuICAgIH0pLFxuICAgIGltYWdldG9vbHMoKSxcbiAgICBTdmVsdGVLaXQoKSxcbiAgICBTdmVsdGVLaXRQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBtYW5pZmVzdDogZmFsc2UsXG4gICAgICBzY29wZTogJy8nLFxuICAgICAgd29ya2JveDoge1xuICAgICAgICBnbG9iUGF0dGVybnM6IFsncG9zdHMuanNvbicsICcqKi8qLntqcyxjc3MsaHRtbCxzdmcsaWNvLHBuZyx3ZWJwLGF2aWZ9J10sXG4gICAgICAgIGdsb2JJZ25vcmVzOiBbJyoqL3N3KicsICcqKi93b3JrYm94LSonXVxuICAgICAgfVxuICAgIH0pXG4gIF1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXE5vU3luY1xcXFxwZnBcXFxcc3JjXFxcXGxpYlxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXE5vU3luY1xcXFxwZnBcXFxcc3JjXFxcXGxpYlxcXFxjb25maWdcXFxcZ2VuZXJhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovTm9TeW5jL3BmcC9zcmMvbGliL2NvbmZpZy9nZW5lcmFsLnRzXCI7aW1wb3J0IHR5cGUgeyBUaGVtZUNvbmZpZywgSGVhZENvbmZpZywgSGVhZGVyQ29uZmlnLCBGb290ZXJDb25maWcsIERhdGVDb25maWcsIEZlZWRDb25maWcgfSBmcm9tICckbGliL3R5cGVzL2dlbmVyYWwnXG5cbmV4cG9ydCBjb25zdCB0aGVtZTogVGhlbWVDb25maWcgPSBbXG4gIHtcbiAgICBuYW1lOiAnd2ludGVyJyxcbiAgICB0ZXh0OiAnXHUyNkFBIExpZ2h0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnID0ge31cblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogSGVhZGVyQ29uZmlnID0ge1xuICBzZWFyY2g6IHtcbiAgICBwcm92aWRlcjogJ2dvb2dsZSdcbiAgfSxcbiAgbmF2OiBbXG4gICAge1xuICAgICAgdGV4dDogJ0hvbWUnLFxuICAgICAgbGluazogJy8nXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRXhwbG9yZScsXG4gICAgICBsaW5rOiAnL2V4cGxvcmUnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQWJvdXQgdXMnLFxuICAgICAgbGluazogJy9hYm91dCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdHcmVlbiBlbmVyZ3knLFxuICAgICAgbGluazogJy9ncmVlbi1lbmVyZ3knXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnUmVzb3VyY2VzJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRmluYW5jaWFsIG9wdGlvbnMnLFxuICAgICAgICAgIGxpbms6ICcvcmVzb3VyY2VzL2ZpbmFuY2lhbC1vcHRpb25zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0ZBUScsXG4gICAgICAgICAgbGluazogJy9yZXNvdXJjZXMvYXJ0aWNsZXMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOZXdzJyxcbiAgICAgIGxpbms6ICcvbmV3cydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb250YWN0IFVzJyxcbiAgICAgIGxpbms6ICcvY29udGFjdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogRm9vdGVyQ29uZmlnID0ge1xuICBuYXY6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnRmVlZCcsXG4gICAgICBsaW5rOiAnL2F0b20ueG1sJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NpdGVtYXAnLFxuICAgICAgbGluazogJy9zaXRlbWFwLnhtbCdcbiAgICB9XG4gIF0sXG4gIGltZzogJy9hc3NldHMvcGZwLnBuZydcbn1cblxuZXhwb3J0IGNvbnN0IGRhdGU6IERhdGVDb25maWcgPSB7XG4gIGxvY2FsZXM6ICdlbi1VUycsXG4gIG9wdGlvbnM6IHtcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYydcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmVlZDogRmVlZENvbmZpZyA9IHt9XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXE5vU3luY1xcXFxwZnBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXE5vU3luY1xcXFxwZnBcXFxcdGFpbHdpbmQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Ob1N5bmMvcGZwL3RhaWx3aW5kLmNvbmZpZy50c1wiO2ltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9zcmMvbGliL2NvbmZpZy9nZW5lcmFsJ1xuLy8gQHRzLWlnbm9yZSBDb3VsZCBub3QgZmluZCBhIGRlY2xhcmF0aW9uIGZpbGUgZm9yIG1vZHVsZSAnQHRhaWx3aW5kY3NzL3R5cG9ncmFwaHknLlxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnQHRhaWx3aW5kY3NzL3R5cG9ncmFwaHknXG4vLyBAdHMtaWdub3JlIENvdWxkIG5vdCBmaW5kIGEgZGVjbGFyYXRpb24gZmlsZSBmb3IgbW9kdWxlICdkYWlzeXVpJy5cbmltcG9ydCBkYWlzeXVpIGZyb20gJ2RhaXN5dWknXG4vLyBAdHMtaWdub3JlIENvdWxkIG5vdCBmaW5kIGEgZGVjbGFyYXRpb24gZmlsZSBmb3IgbW9kdWxlICdAdGFpbHdpbmRjc3MvZm9ybXMnLlxuLy8gaW1wb3J0IGZvcm1zIGZyb20gJ0B0YWlsd2luZGNzcy9mb3JtcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250ZW50OiBbJy4vc3JjLyoqLyoue2h0bWwsbWQsanMsc3ZlbHRlLHRzfSddLFxuICAvLyB0aGVtZTogeyBleHRlbmQ6IHt9IH0sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeTogJyMzRjkzNzgnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMkUzODU1JyxcbiAgICAgICAgJ2Jhc2UtMTAwJzogJyNFNUVCRUInLFxuICAgICAgICAnYmFzZS0yMDAnOiAnI0U1RUJFQicsXG4gICAgICAgICdwZnAtbmF2eSc6ICcjMkUzODU1JyxcbiAgICAgICAgJ2xpZ2h0LWJsdWUnOiAnI0U3RjVGNScsXG4gICAgICAgICdsaWdodC1ncmVlbic6ICcjRERGM0VBJyxcbiAgICAgICAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgICAgICAgJ2JhYnktYmx1ZSc6ICcjRDBFNkYyJyxcbiAgICAgICAgJ3BmcC1ncmVlbic6ICcjM0Y5Mzc4JyxcbiAgICAgICAgJ3BmcC1vcmFuZ2UnOiAnI0VDOEI1QScsXG4gICAgICB9LFxuICAgICAgbGV0dGVyU3BhY2luZzoge1xuICAgICAgICBtZW51OiAnMC4xNWVtJyxcbiAgICAgIH0sXG4gICAgICBmb250RmFtaWx5OiB7XG4gICAgICAgIHNhbnM6IFsnUHVibGljIFNhbnMnLCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnXSxcbiAgICAgICAgUHVibGljU2FuczogWydQdWJsaWMgU2FucycsICdSb2JvdG8nLCAnc2Fucy1zZXJpZiddLFxuICAgICAgICBQb3BwaW5zOiBbJ1BvcHBpbnMnLCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnXSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbdHlwb2dyYXBoeSwgZGFpc3l1aV0sXG4gIGRhaXN5dWk6IHsgdGhlbWVzOiB0aGVtZS5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKSB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxZQUFZO0FBQ25CLFNBQVMsY0FBYyxhQUFhLHVCQUF1QjtBQUMzRCxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGFBQWEsaUJBQWlC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
