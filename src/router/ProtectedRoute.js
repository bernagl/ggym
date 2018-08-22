import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default auth => ({ path, exact, component, ...rest }) => {
  console.log(auth)
  return auth ? (
    <Route path={path} exact component={component} {...rest} />
  ) : (
    <Redirect to="/login" />
  )
}
