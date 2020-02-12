import { combineReducers } from 'redux'
import testReducer from './Test/testReducer'

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer