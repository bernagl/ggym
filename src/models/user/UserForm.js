import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form/Form'
import Input from '../../components/F/Input'
import {
  addDocument,
  getDocument,
  updateDocument
} from '../../actions/firebaseActions'
import Notification from '../../components/Notification'

export default class extends Component {
  state = { snap: {}, loadingData: true }
  async componentDidMount() {
    const { id } = this.props.match.params
    const snap = id ? await getDocument('usuario')(id) : {}
    this.setState({ loadingData: false, snap })
  }

  submit = async model => {
    const { id } = this.props.match.params
    const response = (await id)
      ? updateDocument('usuario')({ ...model, id })
      : addDocument('usuario')(model)
    Notification(response)
    return true
  }

  render() {
    const { id } = this.props.match.params
    const { loadingData, snap } = this.state
    return (
      <Form
        submitText="Guardar"
        submit={this.submit}
        fullSubmitButton
        title={`${id ? 'Actualizar' : 'Agregar'} usuario`}
        loadingData={loadingData}
        // subtitle="Ingresa tu correo y contraseña"
        // centeredTitle
      >
        <Input
          name="nombre"
          placeholder="Nombre completo"
          validations="minLength:3"
          validationError="Ingresa un nombre válido"
          required
          defaultValue={snap.nombre}
        />
      </Form>
    )
  }
}
