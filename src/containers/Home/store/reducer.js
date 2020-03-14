import { CHANGE_NEWS_LIST } from "./contants"

const defaultState = {
  name: "yanjian",
  newsList: []
}

export default (state = defaultState, action) => {
  let newState = state
  switch (action.type) {
    case CHANGE_NEWS_LIST:
      newState = {
        ...state,
        newList: action.data
      }
      break
  }
  return newState
}
