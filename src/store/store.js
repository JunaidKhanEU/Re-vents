import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './RootReducer'

const middlewares = []
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
