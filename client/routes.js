/**
 *  Created by daiwenjuan on 2018/6/20 下午2:43.
 */
if (typeof require.ensure !== 'function') {
  require.ensure = function (dependencies, callback) {
    callback(require)
  }
}

const routes = {
  childRoutes: [{
    path: '/',
    component: require('./layout/Root'),
    indexRoute: {
      getComponent(nextState, callback) {
        require.ensure([], require => {
          callback(null, require('./home'))
        }, 'home')
      }
    },
    childRoutes: []
  }]
}

export default routes