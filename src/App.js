import React, { Component } from 'react'
import Router from './router'
import './App.css'
import Admin from './views/Admin'
import { authState } from './actions/firebaseAuth'
// import Loading from './components/Loader'
import LoadingWrapper from './components/Wrappers/LoadingWrapper'

class App extends Component {
  state = { loading: false, auth: true }
  componentDidMount() {
    // authState(this)
  }

  render() {
    const { auth, loading } = this.state
    return (
      <LoadingWrapper loading={loading}>
        {auth ? (
          <Admin>
            <Router auth={auth} />
          </Admin>
        ) : (
          <Router auth={auth} />
        )}
      </LoadingWrapper>
    )
  }
}

export default App
