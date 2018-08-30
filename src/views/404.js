import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CenterWrapper from '../components/Wrappers/CenterWrapper'

class E404 extends Component {
  render() {
    return (
      <CenterWrapper bordered>
        <div className="row center-text">
          <div className="col-12">
            <h2>Error 404: Not Found</h2>
          </div>
          <div className="col-12">
            <Link to="/">Volver</Link>
          </div>
        </div>
      </CenterWrapper>
    )
  }
}

export default E404
