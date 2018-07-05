/**
 *  Created by daiwenjuan on 2018/7/4 下午7:08.
 */
import { getReducers } from '../chief'
import { combineReducers } from 'redux'
let reducers = getReducers()
const rootReducer = combineReducers({ ...reducers })
export default rootReducer