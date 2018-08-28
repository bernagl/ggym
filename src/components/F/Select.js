import React from 'react'
import Parent from './Wrapper'
import { Select as AntdSelect } from 'antd'
import PropTypes from 'prop-types'

export const { Option } = AntdSelect

export const Select = ({
  children,
  required,
  validations,
  validationError,
  placeholder,
  ...rest
}) => {
  return (
    <Parent
      required={required}
      validations={validations}
      validationError={validationError}
      {...rest}
    >
      {({ onChange, onBlur, value }) => {
        return (
          <AntdSelect
            defaultValue={rest.defaultValue}
            id={rest.name}
            name={rest.name}
            onChange={value => onChange(value)}
            onBlur={value => onBlur(value)}
            placeholder={placeholder}
            value={value}
          >
            {children}
          </AntdSelect>
        )
      }}
    </Parent>
  )
}

Select.defaultProps = {
  label: '',
  placeholder: 'Selecciona una opción',
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  step: PropTypes.number
}
