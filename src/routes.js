import App from "./App"
import Home from "./containers/Home"
import Login from "./containers/Login"
import Translation from "./containers/Translation"
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
        key: "/translation",
        path: "/translation",
        component: Translation,
        exact: true,
        loadData: Translation.loadData
      },
      {
        key: "notfound",
        component: NotFound
      }
    ]
  }
]
