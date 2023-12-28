/*
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-11-28 15:17:33
 * @Descripttion: 
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
