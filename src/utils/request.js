/*
 * @Author: actions
 * @Date: 2022-02-14 18:15:18
 * @LastEditTime: 2022-02-14 18:16:30
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\src\utils\request.js
 */

import axios from 'axios'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const { baseURL, timeout } = window.$config.api || {}
const api = axios.create({
  withCredentials: true,
  baseURL,
  timeout,
})

api.interceptors.request.use(
  (config) => {
    const token = userStore.token
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.code == 200) {
      return data
    } else {
      return Promise.reject(new Error(data.message))
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
