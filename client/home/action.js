/**
 *  Created by daiwenjuan on 2018/7/4 下午7:00.
 */
import key from './key'

function test() {
  return { type: key.TEST, payload: 'hello redux' }
}
export default {
  test
}