/**
 *  Created by daiwenjuan on 2018/6/20 下午2:46.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Common')
} else {
  module.exports = require('./Root.dev.js')
}
