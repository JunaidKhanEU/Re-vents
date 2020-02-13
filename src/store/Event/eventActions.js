import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstant'

const createEventAction = (event) => {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  }
}

const updateEventAction = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  }
}

const deleteEventAction = (id) => {
  return {
    type: DELETE_EVENT,
    payload: {
      id
    }
  }
}

export {
  createEventAction,
  updateEventAction,
  deleteEventAction
}
