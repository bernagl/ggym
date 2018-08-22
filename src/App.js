import React, { Component } from 'react'
import Router from './router'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router auth={true} />
      </div>
    )
  }
}

export default App
