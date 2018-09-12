import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SplitImport from './SplitImport'

// RoutesHOCs
import PR from './ProtectedRoute'
import NRP from './NoProtectedRoute'

// const Admin = SplitImport('views/Admin')
const Login = SplitImport('views/Login')
const Recover = SplitImport('views/Recover')
const Register = SplitImport('views/Register')
const E404 = SplitImport('views/404')
const Users = SplitImport('models/user/UserTable')
const User = SplitImport('models/user/UserForm')
const Provider = SplitImport('models/provider/Provider')
const Providers = SplitImport('models/provider/ProviderTable')
const Service = SplitImport('models/service/ServiceForm')
const Product = SplitImport('models/product/ProductForm')
const Products = SplitImport('models/product/ProductTable')
const Notifications = SplitImport('models/notification/NotificationTable')
const Notification = SplitImport('models/notification/NotificationForm')
const Categories = SplitImport('models/category/CategoryTable')
const Category = SplitImport('models/category/CategoryForm')

export default ({ auth }) => {
  const NoProtectedRoute = NRP(auth)
  const ProtectedRoute = PR(auth)
  return (
    <Switch>
      <NoProtectedRoute path="/login" component={Login} />
      <NoProtectedRoute path="/recover" component={Recover} />
      <NoProtectedRoute path="/register" component={Register} />
      {/* <ProtectedRoute path="/" component={Admin} exact auth={auth} /> */}
      <ProtectedRoute
        path="/product/:id_provider/:id_product?"
        component={Product}
        auth={auth}
      />
      <ProtectedRoute
        path="/service/:provider_id/:service_id?"
        component={Service}
        auth={auth}
      />
      <ProtectedRoute path="/categories" component={Categories} auth={auth} />
      <ProtectedRoute path="/category/:id?" component={Category} auth={auth} />
      <ProtectedRoute
        path="/notifications"
        component={Notifications}
        auth={auth}
      />
      <ProtectedRoute
        path="/notification/:id?"
        component={Notification}
        auth={auth}
      />
      <ProtectedRoute path="/products/:id" component={Products} auth={auth} />
      <ProtectedRoute path="/providers" component={Providers} auth={auth} />
      <ProtectedRoute path="/provider/:id?" component={Provider} auth={auth} />
      <ProtectedRoute path="/users" component={Users} auth={auth} />
      <ProtectedRoute path="/user/:id?" component={User} auth={auth} />
      <Route component={E404} />
    </Switch>
  )
}
