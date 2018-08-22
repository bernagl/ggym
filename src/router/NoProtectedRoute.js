import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default auth => ({ path, exact, component, ...rest }) => {
  return auth ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact component={component} {...rest} />
  )
}
