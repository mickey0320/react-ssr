import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { homeReducer } from "../containers/Home/store"

const reducer = {
  home: homeReducer
}

function getStore() {
  return createStore(combineReducers(reducer), applyMiddleware(thunk))
}

export { getStore }
