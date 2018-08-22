import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form, Checkbox } from 'antd'
const { Item } = Form

class MyInput extends React.Component {
  static defaultProps = {
    feedBack: true
  }

  state = { error: false, blurred: false, checked: undefined }

  changeValue = () => {
    this.setState(({ checked }) => {
      let check = typeof checked === 'undefined' ? true : undefined
      this.props.setValue(check)
      return { checked: check }
    })
  }

  onBlur = () => {
    this.setState({ blurred: true })
  }

  render() {
    const { label, name, placeholder, required } = this.props
    return (
      <div>
        <Checkbox
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={this.changeValue}
        >
          {`${required ? '*' : ''} ${label}`}
        </Checkbox>
      </div>
    )
  }
}

export default withFormsy(MyInput)
