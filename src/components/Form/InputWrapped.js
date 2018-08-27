import React from 'react'
import Parent from './InputHOC'
import { Input } from 'antd'

export default ({ required, validations, validationError, ...rest }) => {
  return (
    <Parent
      required={required}
      validations={validations}
      validationError={validationError}
      {...rest}
    >
      {({ onChange, onBlur, value }) => {
        return (
          <Input
            name={rest.name}
            value={value}
            id={rest.name}
            onChange={({ target: { value } }) => onChange(value)}
            onBlur={({ target: { value } }) => onBlur(value)}
            type={rest.type}
          />
        )
      }}
    </Parent>
  )
}
