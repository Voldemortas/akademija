import { combineReducers } from 'redux'
import componentState from './reducers/component.js'
import cards from './reducers/cards'
import logs from './reducers/logs'

export const rootReducer = combineReducers({
  componentState,
  cards,
  logs,
})
