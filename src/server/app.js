import path from "path"
import Koa from "koa"
import koaRouter from "koa-router"
import koaStatic from "koa-static"
import { renderToString } from "react-dom/server"
import React from "react"

import Home from "../containers/Home"

const app = new Koa()
const router = new koaRouter()

router.get("/", ctx => {
  const content = renderToString(<Home />)
  ctx.body = `
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
})
app.use(koaStatic("./dist"))
app.use(router.routes())

app.listen(8080)
