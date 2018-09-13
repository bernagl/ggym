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
      model="user"
      modelName="usuario"
      modelLabel="Usuarios"
      redirect="/users"
    >
      {({ name, email, phone }) => {
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
          </Fragment>
        )
      }}
    </ModelWrapper>
  )
}
