import React, { Component, Fragment } from 'react'
import Input from '../../components/F/Input'
import TextArea from '../../components/F/Textarea'
import Uploader from '../../components/F/Uploader'
import ModelWrapper from '../ModelWrapper'
import { Link, withRouter } from 'react-router-dom'
import Icon from 'antd/lib/icon'
import Tooltip from 'antd/lib/tooltip'
import Divider from 'antd/lib/divider'
// import I from 'antd/lib/input'

// const { TextArea } = I

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
      {({
        picture,
        name,
        email,
        facebook,
        instagram,
        phone,
        webpage,
        description,
        tags
      }) => {
        return (
          <Fragment>
            <Uploader model="provider" url={picture} />
            <Divider />
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
              label={
                <Tooltip title="https://ejemplo.com" placement="right">
                  Página web (?)
                </Tooltip>
              }
              validations="isUrl"
              validationError="Ingresa una url válida"
              required
              defaultValue={webpage}
            />
            <Input
              name="facebook"
              placeholder="Usuario de Facebook"
              label={
                <Tooltip title="Nombre de la cuenta" placement="right">
                  Facebook (?)
                </Tooltip>
              }
              validations="minLength:1"
              validationError="Ingresa un usuario válido"
              required
              defaultValue={facebook}
            />
            <Input
              name="instagram"
              placeholder="Usuario de Instagram"
              label={
                <Tooltip title="Nombre de la cuenta" placement="right">
                  Instagram (?)
                </Tooltip>
              }
              validations="minLength:1"
              validationError="Ingresa un usuario válido"
              required
              defaultValue={instagram}
            />
            <TextArea
              placeholder="Descripción"
              label="Descripción"
              name="description"
              autosize
              defaultValue={description}
              rows={4}
            />
            <TextArea
              placeholder="Tags"
              label="Tags"
              name="tags"
              autosize
              defaultValue={tags}
              rows={4}
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
