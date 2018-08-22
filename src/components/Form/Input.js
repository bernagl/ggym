import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form, Input, InputNumber } from 'antd'
const { Item } = Form

class MyInput extends React.Component {
  static defaultProps = {
    defaultValue: '',
    defaultValueNumber: 1,
    feedBack: true,
    type: 'text',
    max: 100,
    min: 0
  }

  state = { error: false, blurred: false }

  changeValue = value => {
    this.props.setValue(value)
  }

  onBlur = () => {
    this.setState({ blurred: true })
  }

  componentDidMount() {
    const { defaultValue, setValue } = this.props
    this.setState(
      ({ blurred }) => (defaultValue ? { blurred: !blurred } : { blurred }),
      () => defaultValue && setValue(defaultValue)
    )
  }

  render() {
    const errorMessage = this.props.getErrorMessage()
    const value = this.props.getValue() || ''
    const {
      defaultValue,
      feedBack,
      label,
      max,
      min,
      name,
      placeholder,
      required,
      type
    } = this.props
    const { blurred } = this.state
    return (
      <div>
        <Item
          layout="vertical"
          label={`${required ? '*' : ''} ${label}`}
          validateStatus={errorMessage ? 'error' : value ? 'success' : null}
          help={blurred ? (errorMessage ? errorMessage : null) : null}
          hasFeedback={feedBack && blurred}
        >
          {type === 'number' ? (
            <InputNumber
              placeholder={placeholder}
              id={name}
              defaultValue={defaultValue}
              name={name}
              max={max}
              min={min}
              type={type}
              onChange={this.changeValue}
              onBlur={this.onBlur}
            />
          ) : (
            <Input
              defaultValue={defaultValue}
              placeholder={placeholder}
              id={name}
              name={name}
              type={type}
              onChange={({ target: { value } }) => this.changeValue(value)}
              onBlur={this.onBlur}
            />
          )}
        </Item>
      </div>
    )
  }
}

export default withFormsy(MyInput)
