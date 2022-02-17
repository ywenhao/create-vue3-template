/*
 * @Author: actions
 * @Date: 2022-02-16 09:46:09
 * @LastEditTime: 2022-02-16 10:21:35
 * @LastEditors: actions
 * @Description: 全局
 * @FilePath: \vue-template\src\stores\app.js
 */

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: '',
  }),
})

/**
 * @description: appStore订阅
 * @param {*}
 * @return {*}
 */
export const app$ = () => {
  const appStore = useAppStore()
  appStore.$subscribe((mutation) => {
    const key = mutation.events.key
    if (key === 'theme') {
      const oldValue = mutation.events.oldValue
      const newValue = mutation.events.newValue
      oldValue && document.documentElement.classList.remove(oldValue)
      newValue && document.documentElement.classList.add(newValue)
    }
  })
}
