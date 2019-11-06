import { combineReducers } from 'redux'
import componentState from './reducers/component.js'
import cards from './reducers/cards'

export const rootReducer = combineReducers({
  componentState,
  cards,
})
