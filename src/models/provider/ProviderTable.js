import React, { Component, Fragment } from 'react'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'
import { getDocumentsByModel } from '../../actions/firebaseActions'
import Popover from 'antd/lib/popover'

export default class extends Component {
  state = { documents: [] }

  async componentDidMount() {
    const documents = await getDocumentsByModel('provider')
    this.setState({ documents })
  }

  content = (snap) => (
    <Fragment>
      <div>
        <Link to={`/provider/${snap.id}`}>Editar</Link>
      </div>
      <div>
        <Link to={`/products/${snap.id}`}>Productos</Link>
      </div>
      <div>
        <Link to={`/reviews/${snap.id}`}>Reseñas</Link>
      </div>
    </Fragment>
  )

  render() {
    const { documents } = this.state
    return (
      <Table
        model="provider"
        modelName="Proveedores"
        data={documents}
        columns={[
          { key: 'name', label: 'Nombre' },
          { key: 'email', label: 'Email' },
          {
            key: 'actions',
            label: 'Acciones',
            Render: snap => (
              <Popover content={this.content(snap)} title="Opciones">
                Opciones
              </Popover>
            )
          }
        ]}
      />
    )
  }
}
