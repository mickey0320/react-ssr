import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { login, logout } from "./store"

function Header(props) {
  return (
    <div className="head">
      <Link to="/">首页&nbsp;&nbsp;</Link>
      {props.logined ? (
        <Fragment>
          <span onClick={props.logout}>退出&nbsp;&nbsp;</span>
          <Link to="/translation">翻译列表</Link>
        </Fragment>
      ) : (
        <span onClick={props.login}>登录</span>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  logined: state.header.logined
})

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(login())
  },
  logout() {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
