/**
 *  Created by daiwenjuan on 2018/6/20 下午2:57.
 */
import types from '../constants/actionTypes'

function clearUserInfo() {
  return { type: types.CLEAR_USER_INFO }
}

export default {
  clearUserInfo
}