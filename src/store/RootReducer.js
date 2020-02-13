import { combineReducers } from 'redux'
import eventReducer from './Event/eventReducer'
const rootReducer = combineReducers({
  events: eventReducer
})

export default rootReducer
