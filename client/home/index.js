/**
 *  Created by daiwenjuan on 2018/7/4 下午7:19.
 */
import singleton from '../common/Singleton'
import Plugin from '../common/Plugin'
import App from './App'
debugger
import reducer from './reducer'
import action from './action'
let instance = singleton.getInstance()
let plugin = new Plugin()
plugin.setReducer(reducer)
plugin.setAction(action)
instance.setPlugin(plugin)

export default App