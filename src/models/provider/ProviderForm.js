import React, { Component, Fragment } from 'react'
import Input from '../../components/F/Input'
import ModelWrapper from '../ModelWrapper'
import { Link, withRouter } from 'react-router-dom'
import Icon from 'antd/lib/icon'

const RenderRightSide = provider => <RightSideClass {...provider} />

export const ProviderForm = ({
  match: {
    params: { id }
  },
  provider
}) => {
  return (
    <ModelWrapper
      id={id}
      model="provider"
      modelName="proveedor"
      modelLabel="Proveedores"
      redirect="/providers"
      RenderRightSide={() => RenderRightSide(provider)}
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

class RightSideClass extends Component {
  render() {
    const { email, phone } = this.props
    return (
      <Fragment>
        <div className="col-12 col-md-6 col-lg-8">
          <a href={`mailto:${email}`}>
            <Icon type="mail" theme="outlined" /> Enviar correo
          </a>
          <br />
          <a href={`tel:+${phone}`}>
            <Icon type="phone" theme="outlined" /> Llamar
          </a>
        </div>
      </Fragment>
    )
  }
}
