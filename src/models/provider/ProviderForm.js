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
      {({ name, email, facebook, instagram, phone, webpage }) => {
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
            <Input
              name="phone"
              placeholder="Celular"
              label="Celular"
              validations={{ isNumeric: true, minLength: 10, maxLength: 10 }}
              validationError="Ingresa un número de celular válido"
              required
              defaultValue={phone}
            />
            <Input
              name="webpage"
              placeholder="Url de la página"
              label="Página web"
              validations="isUrl"
              validationError="Ingresa una url válida"
              required
              defaultValue={webpage}
            />
            <Input
              name="facebook"
              placeholder="Usuario de Facebook"
              label="Facebook"
              validations="minLength:1"
              validationError="Ingresa un usuario válido"
              required
              defaultValue={facebook}
            />
            <Input
              name="instagram"
              placeholder="Usuario de Instagram"
              label="Instagram"
              validations="minLength:1"
              validationError="Ingresa un usuario válido"
              required
              defaultValue={instagram}
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
    const { email, facebook, instagram, phone, webpage } = this.props
    return (
      <Fragment>
        <div className="col-12 col-md-6 col-lg-8">
          <a target="_blank" href={`mailto:${email}`}>
            <Icon type="mail" theme="outlined" /> Enviar correo
          </a>
          <br />
          <a target="_blank" href={`tel:+${phone}`}>
            <Icon type="phone" theme="outlined" /> Llamar
          </a>
          <br />
          <a target="_blank" href={`${webpage}`}>
            <Icon type="global" theme="outlined" /> Página web
          </a>
          <br />
          <a target="_blank" href={`https://facebook.com/${facebook}`}>
            <Icon type="facebook" theme="outlined" /> Facebook
          </a>
          <br />
          <a target="_blank" href={`https://instagram.com/${instagram}`}>
            <Icon type="instagram" theme="outlined" /> Instagram
          </a>
        </div>
      </Fragment>
    )
  }
}
