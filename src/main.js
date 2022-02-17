/*
 * @Author: actions
 * @Date: 2022-02-14 17:57:42
 * @LastEditTime: 2022-02-17 09:37:38
 * @LastEditors: actions
 * @Description: main 文件
 * @FilePath: \vue-template\src\main.js
 */
import { createApp } from 'vue'

import 'virtual:windi.css'
// import 'virtual:windi-devtools'
import store from './stores'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
