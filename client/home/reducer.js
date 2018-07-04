/**
 *  Created by daiwenjuan on 2018/7/4 下午7:00.
 */
import key from './key'
function userInfo(state = null, action) {
  switch (action.type) {
    case key.TEST:
      return { ...state, text: 'sdfdsf' }
    default:
      return state
  }
}

export default {
  userInfo
}
