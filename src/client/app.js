import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import routes from "../routes"
import Header from "../components/Header"
import { getStore } from "../store"

function App() {
  return (
    <div className="app">
      <Provider store={getStore()}>
        <Router>
          <Header></Header>
          {routes()}
        </Router>
      </Provider>
    </div>
  )
}

ReactDOM.hydrate(<App />, document.getElementById("root"))
