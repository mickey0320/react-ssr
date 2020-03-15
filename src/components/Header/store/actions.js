import { CHANGE_LOGIN } from "./constants"

function changeLogin(isLogin) {
  return {
    type: CHANGE_LOGIN,
    data: isLogin
  }
}

export function login() {
  return (dispatch, state, axios) => {
    axios.get("/api/login.json").then(res => {
      dispatch(changeLogin(true))
    })
  }
}

export function logout() {
  return (dispatch, state, axios) => {
    axios.get("/api/logout.json").then(res => {
      dispatch(changeLogin(false))
    })
  }
}

export function isLogin() {
  return (dispatch, state, axios) => {
    return axios.get("/api/isLogin.json").then(res => {
      dispatch(changeLogin(res.data.data.login))
    })
  }
}
