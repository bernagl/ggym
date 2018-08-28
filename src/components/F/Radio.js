import React from 'react'
import Parent from './Wrapper'
import { Radio } from 'antd'
import PropTypes from 'prop-types'

const { Group } = Radio

export const Field = props => {
  return (
    <Parent {...props}>
      {({ onChange, onBlur, value }) => {
        return (
          <Group
            placeholder={props.placeholder}
            id={props.name}
            name={props.name}
            onChange={({ target: { value } }) => onChange(value)}
            onBlur={onBlur}
          >
            <Radio value="1">Hola</Radio>
            <Radio value="2">Hola</Radio>
            <Radio value="3">Hola</Radio>
          </Group>
        )
      }}
    </Parent>
  )
}

export default Field

Field.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text'
}

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
}
