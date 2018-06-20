/**
 *  Created by daiwenjuan on 2018/6/20 下午2:48.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}