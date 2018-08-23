import React, { Component } from 'react'
import { logout } from '../actions/firebaseAuth'

class Admin extends Component {
  render() {
    return (
      <div>
        Esta es la vista del admin <button onClick={logout} />
      </div>
    )
  }
}

export default Admin
