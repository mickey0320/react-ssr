import axios from "axios"

import conf from "../config"

const createInstance = ctx => {
  const isLogin = (ctx.cookies && ctx.cookies.get("login")) || ""
  const instance = axios.create({
    baseURL: "http://47.95.113.63/ssr",
    headers: {
      cookie: `login=${isLogin}`
    }
  })
  instance.interceptors.request.use(config => {
    if (config.url.includes("?")) {
      config.url += `&secret=${conf.secret}`
    } else {
      config.url += `?secret=${conf.secret}`
    }
    return config
  })

  return instance
}

export default createInstance
