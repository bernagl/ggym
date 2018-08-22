import React from 'react'
import { Switch, Route } from 'react-router-dom'

// ProtectedRoute
import PR from './ProtectedRoute'
import NRP from './NoProtectedRoute'

// Views
import Login from '../views/Login'
import Recover from '../views/Recover'
import Register from '../views/Register'
import Admin from '../views/Admin'
import E404 from '../views/404'

export default ({ auth }) => {
  const NoProtectedRoute = NRP(auth)
  const ProtectedRoute = PR(auth)
  return (
    <Switch>
      <NoProtectedRoute path="/login" component={Login} />
      <NoProtectedRoute path="/recover" component={Recover} />
      <NoProtectedRoute path="/register" component={Register} />
      <ProtectedRoute path="/" component={Admin} exact auth={auth} />
      <Route component={E404} />
    </Switch>
  )
}
