import axios from "axios"
import { CHANGE_NEWS_LIST } from "./contants"

function changeNewList(newList) {
  return {
    type: CHANGE_NEWS_LIST,
    data: newList
  }
}

export function getHomeList() {
  return dispatch => {
    return axios
      .get("http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE")
      .then(res => {
        dispatch(changeNewList(res.data.data))
      })
      .catch(res => {
        console.log(res)
      })
  }
}
