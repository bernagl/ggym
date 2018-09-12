import React, { Component, Fragment } from 'react'
import {
  addDocument,
  getDocument,
  updateDocument
} from '../../actions/firebaseActions'
import Form from '../../components/Form/Form'
import Notification from '../../components/Notification'
import moment from 'moment'
import Input from '../../components/F/Input'
import { Link } from 'react-router-dom'
import Icon from 'antd/lib/icon'

export default class ProductForm extends Component {
  state = { service: {}, provider: {}, loadingData: true }

  async componentDidMount() {
    const { service_id, provider_id } = this.props.match.params
    const service = service_id ? await getDocument('service')(service_id) : {}
    const provider = await getDocument('provider')(provider_id)
    this.setState({ service, provider, loadingData: false })
  }

  submit = async model => {
    const { service_id, provider_id } = this.props.match.params
    const { provider } = this.state
    const response = (await service_id)
      ? await updateDocument('service')({
          ...model,
          id: service_id,
          modified_at: moment().format()
        })
      : await addDocument('service')({
          ...model,
          created_at: moment().format()
        })

    if (!service_id) {
      await updateDocument('provider')({
        ...provider,
        id: provider_id,
        services: { ...provider['services'], [response.params.id]: true }
      })
    }

    Notification(response)

    return true
  }

  render() {
    const { service_id } = this.props.match.params
    const {
      loadingData,
      provider: { id },
      service: { name }
    } = this.state

    return (
      <Fragment>
        <Link to={`/provider/${id}`}>
          <Icon type="left" theme="outlined" /> Regresar
        </Link>
        <Form
          submitText="Guardar"
          submit={this.submit}
          fullSubmitButton
          loadingData={loadingData}
          title={`${service_id ? 'Actualizar servicio' : 'Agregar servicio'}`}
        >
          <Input
            name="name"
            placeholder="Nombre del servicio"
            label="Servicio"
            validations="minLength:3"
            validationError="Ingresa un nombre válido"
            required
            defaultValue={name}
          />
        </Form>
      </Fragment>
    )
  }
}