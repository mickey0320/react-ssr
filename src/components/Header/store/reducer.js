import { CHANGE_LOGIN } from "./constants"

const defaultState = {
  logined: false
}

export default (state = defaultState, action) => {
  let newState = state
  switch (action.type) {
    case CHANGE_LOGIN:
      newState = {
        ...state,
        logined: action.data
      }
      break
  }
  return newState
}
