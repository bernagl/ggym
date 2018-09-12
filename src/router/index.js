import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SplitImport from './SplitImport'

// RoutesHOCs
import PR from './ProtectedRoute'
import NRP from './NoProtectedRoute'

const Admin = SplitImport('views/Admin')
const Login = SplitImport('views/Login')
const Recover = SplitImport('views/Recover')
const Register = SplitImport('views/Register')
const E404 = SplitImport('views/404')
const Users = SplitImport('models/user/UserTable')
const User = SplitImport('models/user/UserForm')
const Provider = SplitImport('models/provider/ProviderForm')
const Providers = SplitImport('models/provider/ProviderTable')

export default ({ auth }) => {
  const NoProtectedRoute = NRP(auth)
  const ProtectedRoute = PR(auth)
  return (
    <Switch>
      <NoProtectedRoute path="/login" component={Login} />
      <NoProtectedRoute path="/recover" component={Recover} />
      <NoProtectedRoute path="/register" component={Register} />
      {/* <ProtectedRoute path="/" component={Admin} exact auth={auth} /> */}
      <ProtectedRoute path="/users" component={Users} auth={auth} />
      <ProtectedRoute path="/user/:id?" component={User} auth={auth} />
      <ProtectedRoute path="/providers" component={Providers} auth={auth} />
      <ProtectedRoute path="/provider/:id?" component={Provider} auth={auth} />
      <Route component={E404} />
    </Switch>
  )
}
