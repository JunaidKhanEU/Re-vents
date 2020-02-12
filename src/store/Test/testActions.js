import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

const incrementAction = () => {
  return {
    type: INCREMENT_COUNTER
  }
}
const decrementAction = () => {
  return {
    type: DECREMENT_COUNTER
  }
}

export {
  incrementAction,
  decrementAction
}