import React from 'react'
import { Link } from 'react-router-dom'
import CenterWrapper from './CenterWrapper'

export default ({ children, type, recover }) => (
  <CenterWrapper bordered>
    <div id="auth-wrapper" className="col-12 center-text">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png"
        alt=""
        className="logo"
      />
    </div>
    {children}
    {type === 'login' ? (
      <div>
        <Link to="/register">Registrarme</Link>
      </div>
    ) : type === 'register' ? (
      <div>
        <Link to="/login">Iniciar sesión</Link>
      </div>
    ) : null}
    {recover && (
      <div>
        <Link to="recover">Recuperar contraseña</Link>
      </div>
    )}
  </CenterWrapper>
)
