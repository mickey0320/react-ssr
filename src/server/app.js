import Koa from "koa"
import koaRouter from "koa-router"
import koaStatic from "koa-static"
import proxy from "koa2-proxy-middleware"
import { matchRoutes } from "react-router-config"

import { render } from "./render"
import routes from "../routes"
import { getStore } from "../store"

const app = new Koa()
const router = new koaRouter()

router.get("*", async ctx => {
  const store = getStore(ctx)
  const matchedRoutes = matchRoutes(routes, ctx.path)
  const promises = []
  const context = {}
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
    if (item.route.key === "notfound") {
      ctx.status = 404
    }
  })
  await Promise.all(promises)
  const html = render(ctx, store, context)
  if (context.action === "REPLACE") {
    ctx.redirect(context.url)
    return
  }
  ctx.body = html
})

app.use(
  proxy({
    targets: {
      "/api/(.*)": {
        target: "http://47.95.113.63/ssr",
        changeOrigin: true
      }
    }
  })
)
app.use(koaStatic("./dist"))
app.use(router.routes())

app.listen(8080)
