/**
 *  Created by daiwenjuan on 2018/6/20 下午2:48.
 */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
debugger
import rootReducer from '../reducers'
import DevTools from '../../layout/DevTools'
export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )
  )
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}