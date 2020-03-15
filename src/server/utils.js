import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"

import routes from "../routes"

export function render(ctx, store) {
  function App() {
    return (
      <Provider store={store}>
        <Router location={ctx.url} context={{}}>
          {renderRoutes(routes)}
        </Router>
      </Provider>
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
  <script>
    window.context = ${JSON.stringify(store.getState())} 
  </script>
  <script src="/app.client.bundle.js"></script></body>
  </html> 
  `
}
