import axios from "axios"

const createInstance = ctx => {
  const isLogin = (ctx.cookies && ctx.cookies.get("login")) || ""
  return axios.create({
    baseURL: "http://47.95.113.63/ssr",
    headers: {
      cookie: `login=${isLogin}`
    }
  })
}

export default createInstance
