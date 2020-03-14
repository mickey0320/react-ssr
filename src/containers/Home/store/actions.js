import axios from "axios"
import { CHANGE_NEWS_LIST } from "./contants"

function changeNewList(newList) {
  return {
    type: CHANGE_NEWS_LIST,
    data: newList
  }
}
export function getHomeList() {
  return (dispatch, state, axios) => {
    return axios
      .get("/api/news.json?secret=PP87ANTIPIRATE")
      .then(res => {
        return dispatch(changeNewList(res.data.data))
      })
      .catch(res => {
        console.log(res)
      })
  }
}
