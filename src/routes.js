import App from "./App"
import Home from "./containers/Home"
import Login from "./containers/Login"
import NotFound from "./containers/NotFound"

export default [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        key: "/",
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        key: "/login",
        path: "/login",
        component: Login,
        exact: true,
        loadData: Home.loadData
      },
      {
        key: "notfound",
        component: NotFound
      }
    ]
  }
]
