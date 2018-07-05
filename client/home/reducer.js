/**
 *  Created by daiwenjuan on 2018/7/4 下午7:00.
 */
import key from './key'
let map = {}
export default function (state = {}, action) {
  if (!map[action.type] || typeof map[action.type] !== 'function') {
    return state
  }
  return map[action.type](state, action)
}
map[key.TEST] = function (state, action) {
  return { ...state, text: action.payload }
}

