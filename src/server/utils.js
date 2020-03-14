import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import routes from "../routes"
import Header from "../components/Header"
import { getStore } from "../store"

export function render(ctx) {
  function App() {
    return (
      <div className="app">
        <Provider store={getStore()}>
          <Router location={ctx.url} context={{}}>
            <Header></Header>
            {routes()}
          </Router>
        </Provider>
      </div>
    )
  }
  const content = renderToString(<App />)

  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
  <div id="root">${content}</div>
  <script src="/app.client.bundle.js"></script></body>
  </html> 
  `
}
