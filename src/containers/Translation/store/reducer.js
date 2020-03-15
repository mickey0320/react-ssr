import { CHANGE_LIST } from "./constants"

const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  let newState = state
  switch (action.type) {
    case CHANGE_LIST:
      newState = {
        ...state,
        list: action.data
      }
      break
  }
  return newState
}
