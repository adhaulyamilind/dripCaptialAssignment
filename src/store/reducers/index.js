import { combineReducers } from 'redux'
import commonReducer from './commonReducer'
import { createStore } from 'redux'

const rootReducer = combineReducers({
  commonReducer
})

const store = createStore(rootReducer)

export default store

