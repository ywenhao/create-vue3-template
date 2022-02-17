/*
 * @Author: actions
 * @Date: 2022-02-14 18:15:42
 * @LastEditTime: 2022-02-17 09:38:20
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\src\stores\user.js
 */

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
  }),
  getters: {},
  actions: {
    setToken(payload) {
      this.token = payload
    },
  },
  persist: {
    enabled: true,
  },
})
