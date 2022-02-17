/*
 * @Author: actions
 * @Date: 2022-02-14 18:17:17
 * @LastEditTime: 2022-02-14 18:17:18
 * @LastEditors: actions
 * @Description:
 * @FilePath: \vue-template\src\api\index.js
 */

import api from '@/utils/request'

export function test(data) {
  return api.post('/aaa', data, { params: { isHide: 0 } })
}
