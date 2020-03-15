import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { homeReducer } from "../containers/Home/store"
import { headerReducer } from "../components/Header/store"
import clientAxios from "../client/axios"
import serverAxios from "../server/axios"

const reducer = {
  home: homeReducer,
  header: headerReducer
}

function getStore(ctx) {
  return createStore(
    combineReducers(reducer),
    applyMiddleware(thunk.withExtraArgument(serverAxios(ctx)))
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
