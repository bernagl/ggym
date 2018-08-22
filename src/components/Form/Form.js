import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Button } from 'antd'

class Form extends Component {
  static defaultProps = {
    loading: false,
    submitText: 'Guardar'
  }

  state = { canSubmit: false }

  disableButton = () => {
    this.setState({ canSubmit: false })
  }

  enableButton = () => {
    this.setState({ canSubmit: true })
  }

  submit = model => {
    this.props.submit(model)
  }

  render() {
    const { loading, submitText } = this.props
    const { canSubmit } = this.state
    return (
      <Formsy
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        {this.props.children}
        <Button
          disabled={!canSubmit}
          htmlType="submit"
          loading={loading}
          type="primary"
        >
          {submitText}
        </Button>
      </Formsy>
    )
  }
}

export default Form
