/**
 *  Created by daiwenjuan on 2018/7/4 下午7:19.
 */

import Plugin from '../common/Plugin'
import App from './App'
import key from './key'
import reducer from './reducer'
import action from './action'
let plugin = new Plugin(key.ID)
plugin.setReducer(reducer)
plugin.setAction(action)
plugin.registComponent(App)
export default plugin