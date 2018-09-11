import React, { Component } from 'react'
import Input from '../../components/F/Input'
import ModelWrapper from '../ModelWrapper'

export default ({
  match: {
    params: { id }
  }
}) => {
  return (
    <ModelWrapper id={id} model="usuario" modelLabel="Usuarios" redirect="/users">
      {({ nombre }) => {
        return (
          <Input
            name="nombre"
            placeholder="Nombre completo"
            validations="minLength:3"
            validationError="Ingresa un nombre válido"
            required
            defaultValue={nombre}
          />
        )
      }}
    </ModelWrapper>
  )
}
