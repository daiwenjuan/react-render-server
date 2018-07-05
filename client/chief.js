/**
 *  Created by daiwenjuan on 2018/7/5 上午10:57.
 */
import Singleton from './common/Singleton'
export function start() {
  let instance = Singleton.getInstance()
  instance.setPlugin(require('./home'))
  return instance
}

export function getComponent(key) {
  let obj = Singleton.getInstance()
  return getPluginByKey(key, obj.getPlugins())
}

export function getReducers() {
  let obj = start()
  let reducers = {}
  obj.getPlugins().map(plugin => {
    let reducerArr = plugin.getReducers()
    reducerArr.map(line => {
      reducers[plugin.key] = line
    })
  })
  return reducers
}

function getPluginByKey(key, plugins = []) {
  return plugins.find(line => line.key === key).indexComp
}