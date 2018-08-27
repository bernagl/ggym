import React from 'react'
import Parent from './InputHOC'
import { InputNumber } from 'antd'

export default ({ required, validations, validationError, ...rest }) => {
  return (
    <Parent
      required={required}
      validations="isNumeric"
      validationError={validationError}
      {...rest}
    >
      {({ onChange, onBlur, value }) => {
        return (
          <InputNumber
            name={rest.name}
            value={value}
            min={rest.min}
            max={rest.max}
            formatter={rest.formatter}
            defaultValue={rest.defaultValue}
            id={rest.name}
            onChange={value => onChange(value)}
            onBlur={value => onBlur(value)}
          />
        )
      }}
    </Parent>
  )
}
