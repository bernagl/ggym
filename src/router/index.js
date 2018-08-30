import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SplitImport from './SplitImport'

// ProtectedRoute
import PR from './ProtectedRoute'
import NRP from './NoProtectedRoute'


const Admin = SplitImport('views/Admin')
const Login = SplitImport('views/Login')
const Recover = SplitImport('views/Recover')
const Register = SplitImport('views/Register')
const E404 = SplitImport('views/404')

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
