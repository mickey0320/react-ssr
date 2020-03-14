import Koa from "koa"
import koaRouter from "koa-router"
import koaStatic from "koa-static"

import { render } from "./utils"

const app = new Koa()
const router = new koaRouter()

router.get("*", ctx => {
  ctx.body = render(ctx)
})
app.use(koaStatic("./dist"))
app.use(router.routes())

app.listen(8080)
