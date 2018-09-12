import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Form from '../components/Form/Form'
import {
  addDocument,
  getDocument,
  updateDocument
} from '../actions/firebaseActions'
import Notification from '../components/Notification'
import Icon from 'antd/lib/icon'

class ModelWrapper extends Component {
  state = { snap: {}, loadingData: true }

  async componentDidMount() {
    const { id, model } = this.props
    const snap = id ? await getDocument(model)(id) : {}
    this.setState({ loadingData: false, snap })
  }

  submit = async modelForm => {
    const { id, model } = this.props
    const response = (await id)
      ? await updateDocument(model)({ ...modelForm, id })
      : await addDocument(model)(modelForm)

    Notification(response)
    if (!id) this.props.history.push(`/user/${response}`)
    return response
  }

  render() {
    const { className, id, model, modelLabel, redirect } = this.props
    const { loadingData, snap } = this.state
    return (
      <div className={className ? className : 'col-md-6 col-lg-4 col-12'}>
        <Link to={redirect}>
          <Icon type="left" theme="outlined" />
          {modelLabel}
        </Link>
        <Form
          submitText="Guardar"
          submit={this.submit}
          fullSubmitButton
          title={`${id ? 'Actualizar' : 'Agregar'} ${model}`}
          loadingData={loadingData}
          shouldUpdate={id ? true : false}
        >
          {this.props.children(snap)}
        </Form>
      </div>
    )
  }
}

export default withRouter(ModelWrapper)
