import React, { useEffect } from "react"
import { connect } from "react-redux"

import { getHomeList } from "./store"

function Home(props) {
  useEffect(() => {
    props.getHomeList()
  }, [])
  return (
    <div className="home">
      <ul>
        {(props.newList || []).map(newItem => (
          <li key={newItem.id}>{newItem.title}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  newList: state.home.newList,
  name: state.home.name
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

Home.loadData = function(store) {
  return store.dispatch(getHomeList())
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
