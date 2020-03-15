import axios from "axios"

import conf from "../config"

const instance = axios.create({
  baseURL: "/"
})
instance.interceptors.request.use(config => {
  if (config.url.includes("?")) {
    config.url += `&secret=${conf.secret}`
  } else {
    config.url += `?secret=${conf.secret}`
  }

  return config
})

export default instance
