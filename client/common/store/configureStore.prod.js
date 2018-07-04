/**
 *  Created by daiwenjuan on 2018/6/20 下午2:49.
 */
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
debugger
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}