import React from "react"
import { Route } from "react-router-dom"

import Home from "./containers/Home"
import Login from "./containers/Login"

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
    </React.Fragment>
  )
}
