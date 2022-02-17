/*
 * @Author: actions
 * @Date: 2022-02-14 17:57:42
 * @LastEditTime: 2022-02-14 18:11:26
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\.eslintrc.cjs
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false, // 不加分号
        singleQuote: true, // 使用单引号
      },
    ],
  },
}
