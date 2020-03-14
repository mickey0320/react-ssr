import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import routes from "../routes"
import Header from "../components/Header"

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        {routes()}
      </Router>
    </div>
  )
}

ReactDOM.hydrate(<App />, document.getElementById("root"))
