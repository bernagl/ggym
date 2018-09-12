import React, { Component, Fragment } from 'react'
import Input from '../../components/F/Input'
import ModelWrapper from '../ModelWrapper'
import { Link, withRouter } from 'react-router-dom'

export const ProviderForm = ({
  match: {
    params: { id }
  }
}) => {
  return (
    <ModelWrapper
      id={id}
      model="provider"
      modelName="proveedor"
      modelLabel="Proveedores"
      redirect="/providers"
      // RenderRightSide={RenderRightSide}
    >
      {({ name, email, password }) => {
        return (
          <Fragment>
            <Input
              name="name"
              placeholder="Nombre completo"
              label="Nombre"
              validations="minLength:3"
              validationError="Ingresa un nombre válido"
              required
              defaultValue={name}
            />
            <Input
              name="email"
              placeholder="Email"
              label="Email"
              validations="isEmail"
              validationError="Ingresa un email válido"
              required
              defaultValue={email}
            />
          </Fragment>
        )
      }}
    </ModelWrapper>
  )
}

export default withRouter(ProviderForm)

// class RenderRightSide extends Component {
//   render() {
//     const { id } = this.props.snap
//     return (
//       <Fragment>
//         <div className="col-12 col-md-6 col-lg-8">
//           <div>
//             <Link to={`/products/${id}`}>Ver productos</Link>
//           </div>
//           <div>
//             <Link to={`/reviews/${id}`}>Ver reseñas</Link>
//           </div>
//         </div>
//       </Fragment>
//     )
//   }
// }
