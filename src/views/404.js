import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class E404 extends Component {
  render() {
    return (
      <div className="row full-height justify-content-center align-items-center">
        <div className="col-12">
          <div className="row center-text">
            <div className="col-12">
              <h2>Error 404: Not Found</h2>
            </div>
            <div className="col-12">
              <Link to="/">Volver</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default E404
