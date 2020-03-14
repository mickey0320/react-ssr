import React from "react"
import { Link } from "react-router-dom"

export default () => {
  return (
    <div className="head">
      <Link to="/">首页&nbsp;&nbsp;</Link>
      <Link to="/login">登录</Link>
    </div>
  )
}
