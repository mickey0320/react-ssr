import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"

import { getClientStore } from "../store"
import routes from "../routes"

function App() {
  return (
    <Provider store={getClientStore(window.context)}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById("root"))
