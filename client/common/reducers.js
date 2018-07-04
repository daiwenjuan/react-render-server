/**
 *  Created by daiwenjuan on 2018/7/4 下午7:08.
 */
import { combineReducers } from 'redux'
import singleton from './Singleton'
let plugin = singleton.getInstance().getPlugins()
import  userInfo  from '../home/reducer'
const rootReducer = combineReducers({ userInfo })
export default rootReducer