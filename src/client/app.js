import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"

import routes from "../routes"
import Header from "../components/Header"
import { getClientStore } from "../store"

function App() {
  return (
    <div className="app">
      <Provider store={getClientStore(window.context)}>
        <Router>
          <Header></Header>
          {routes.map(route => (
            <Route {...route}></Route>
          ))}
        </Router>
      </Provider>
    </div>
  )
}

ReactDOM.hydrate(<App />, document.getElementById("root"))
