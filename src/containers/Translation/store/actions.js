import { CHANGE_LIST } from "./constants"

function changeList(list) {
  return {
    type: CHANGE_LIST,
    data: list
  }
}
export function getTranslationList() {
  return (dispatch, state, axios) => {
    return axios.get("/api/translations.json").then(res => {
      return dispatch(changeList(res.data.data))
    })
  }
}
