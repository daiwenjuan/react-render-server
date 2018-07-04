/**
 *  Created by daiwenjuan on 2018/2/5 下午1:06.
 */
class Singleton {
  constructor() {
    this.instance = null
    this.plugins = []
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance
  }

  setPlugin(plugin) {
    this.plugins.push(plugin)
  }

  getPlugins() {
    return this.plugins
  }

}

module.exports = Singleton

