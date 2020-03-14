import Koa from "koa"
import koaRouter from "koa-router"
import koaStatic from "koa-static"
import { matchRoutes } from "react-router-config"

import { render } from "./utils"
import routes from "../routes"
import { getStore } from "../store"

const store = getStore()
const app = new Koa()
const router = new koaRouter()

router.get("*", async ctx => {
  const matchedRoutes = matchRoutes(routes, ctx.path)
  const promises = []
  matchedRoutes.forEach(item => {
    promises.push(item.route.loadData(store))
  })
  await Promise.all(promises)
  ctx.body = render(ctx, store)
})
app.use(koaStatic("./dist"))
app.use(router.routes())

app.listen(8080)
