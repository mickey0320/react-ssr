import React from "react"
import { renderRoutes } from "react-router-config"

import Header from "./components/Header"
import { isLogin } from "./components/Header/store"

function App(props) {
  return (
    <div className="app">
      <Header></Header>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = function(store) {
  return store.dispatch(isLogin())
}

export default App
