import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { homeReducer } from "../containers/Home/store"
import clientAxios from "../client/axios"
import serverAxios from "../server/axios"

const reducer = {
  home: homeReducer
}

function getStore() {
  return createStore(
    combineReducers(reducer),
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  )
}
function getClientStore(defaultState) {
  return createStore(
    combineReducers(reducer),
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  )
}

export { getStore, getClientStore }
