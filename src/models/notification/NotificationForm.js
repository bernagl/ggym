import React, { Fragment } from 'react'
import Input from '../../components/F/Input'
import ModelWrapper from '../ModelWrapper'

export default ({
  match: {
    params: { id }
  }
}) => {
  return (
    <ModelWrapper
      id={id}
      model="notification"
      modelName="notificación"
      modelLabel="Notificaciones"
      redirect="/notifications"
    >
      {({ name }) => {
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
              name="body"
              placeholder="Cuerpo de la notificación"
              label="Cuerpo"
            //   validations="minLength:3"
              validationError="Ingresa un cuerpo válido"
              defaultValue={name}
            />
          </Fragment>
        )
      }}
    </ModelWrapper>
  )
}
