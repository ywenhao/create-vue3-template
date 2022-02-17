/*
 * @Author: actions
 * @Date: 2022-02-17 09:36:34
 * @LastEditTime: 2022-02-17 09:36:35
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\src\stores\index.js
 */

import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()

store.use(piniaPluginPersist)

export default store
