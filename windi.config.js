/*
 * @Author: actions
 * @Date: 2022-02-14 18:13:02
 * @LastEditTime: 2022-02-14 18:13:02
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\windi.config.js
 */

import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    include: ['src/**/*.{html,vue,jsx,tsx,svelte}'],
  },
})
