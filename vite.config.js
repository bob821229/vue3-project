import { fileURLToPath, URL } from 'node:url';
import VitePluginSass from 'vite-plugin-sass';
import VitePluginString from 'vite-plugin-string';
import ViteFontsPlugin from 'vite-plugin-fonts';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginString(), // 添加 VitePluginString 插件
    ViteFontsPlugin({
      google: {
        families: [
          {
            name: 'Noto Sans TC',
            styles: '400,500,700',
          },
        ],
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      additionalData: '@import "@/assets/scss/globalVar.scss";@import "@/assets/scss/globalMixin.scss";',
    },
  },
});
