import React from 'react'
import Wrapper from './InputHOC'

export default ({ required, validations, validationError, ...rest }) => {
  const getValues = () => {
    required,
      validations,
      validationError ? validationError : 'El campo no es válido',
      rest
  }
  return <Wrapper>{children(getValues())}</Wrapper>
}
