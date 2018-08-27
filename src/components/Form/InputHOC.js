import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form } from 'antd'
const { Item } = Form

class MyInput extends React.Component {
  static defaultProps = {
    defaultValue: null,
    defaultValueNumber: 1,
    feedBack: true,
    label: '',
    max: 100,
    min: 0,
    type: 'text'
  }

  state = { error: false, blurred: false }

  changeValue = value => {
    this.setState({ value }, () => this.props.setValue(value))
  }

  onBlur = () => {
    this.setState({ blurred: true })
  }

  componentDidMount() {
    const { defaultValue, setValue } = this.props
    this.setState(
      ({ blurred }) =>
        defaultValue ? { value: defaultValue, blurred: !blurred } : { blurred },
      () => defaultValue && setValue(defaultValue)
    )
  }

  setRenderProps = () => ({
    onChange: this.changeValue,
    onBlur: this.onBlur,
    value: this.state.value
  })

  render() {
    const errorMessage = this.props.getErrorMessage()
    // const value = this.props.getValue() || null
    const { defaultValue, feedBack } = this.props
    const { blurred, value } = this.state
    return (
      <Item
        layout="vertical"
        label={this.props.label}
        validateStatus={errorMessage ? 'error' : value ? 'success' : null}
        help={blurred ? (errorMessage ? errorMessage : null) : null}
        hasFeedback={feedBack && blurred}
      >
        {this.props.children({ ...this.setRenderProps() })}
      </Item>
    )
  }
}

export default withFormsy(MyInput)
