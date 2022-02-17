/*
 * @Author: actions
 * @Date: 2022-02-14 17:57:42
 * @LastEditTime: 2022-02-16 11:35:32
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\vite.config.js
 */
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // build: {
  //   assetsDir: 'static/assets',
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'static/js/[name].[hash].js',
  //       entryFileNames: 'static/js/[name].[hash].js',
  //       assetFileNames: 'static/[ext]/[name].[hash].[ext]',
  //     },
  //   },
  // },
})
