import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { getTranslationList } from "./store/actions"

function renderList(list) {
  return list.map(item => {
    return <div key={item.id}>{item.title}</div>
  })
}

function Translation(props) {
  useEffect(() => {
    props.getTranslationList()
  }, [])
  return (
    <div className="translation">
      {props.logined ? renderList(props.list) : <Redirect to="/" />}
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.translation.list,
  logined: state.header.logined
})
const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

Translation.loadData = function(store) {
  return store.dispatch(getTranslationList())
}

export default connect(mapStateToProps, mapDispatchToProps)(Translation)
