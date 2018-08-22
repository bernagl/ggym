import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form } from 'antd'
const { Item } = Form

class MyInput extends React.Component {
  static defaultProps = {
    checkedText: '',
    uncheckedText: '',
    feedBack: true
  }

  state = { error: false, blurred: false, checked: undefined }

  componentDidMount() {
    const { defaultValue } = this.props
  }

  changeValue = e => {
    console.log(e)
    this.setState(({ checked }) => {
      let check = typeof checked === 'undefined' ? true : undefined
      this.props.setValue(check)
      return { checked: check }
    })
  }

  onBlur = () => {
    this.setState({ blurred: true })
  }

  setRenderProps = () => ({
    changeValue: this.changeValue,
    onBlur: this.onBlur,
    ...this.props
  })

  render() {
    // const { feedBack, label } = this.props
    // const errorMessage = this.props.getErrorMessage()
    // const value = this.props.getValue()
    // const { blurred } = this.state
    // console.log({ ...this.props, ...this.setRenderProps() })
    // return (
    //   <Item
    //     layout="vertical"
    //     label={this.props.label}
    // validateStatus={errorMessage ? 'error' : value ? 'success' : null}
    // help={blurred ? (errorMessage ? errorMessage : null) : null}
    // hasFeedback={feedBack && blurred}
    //   >
    // return this.props.children({ ...this.props, ...this.setRenderProps() })
    console.log(this.props.children)
    // return React.Children.map(this.props.children, child => {
    return React.cloneElement(this.props.children, { ...this.setRenderProps() })
    // })
    //   </Item>
    // )
  }
}

export default withFormsy(MyInput)
