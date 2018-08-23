import React, { Component } from 'react'
import Router from './router'
import './App.css'
import { authState } from './actions/firebaseAuth'
// import Loading from './components/Loader'
import LoadingWrapper from './components/Wrappers/LoadingWrapper'

class App extends Component {
  state = { loading: true, auth: false }
  componentDidMount() {
    authState(this)
  }

  render() {
    const { auth, loading } = this.state
    return (
      <div className="container">
        <LoadingWrapper loading={loading}>
          <Router auth={auth} />
        </LoadingWrapper>
      </div>
    )
  }
}

export default App
