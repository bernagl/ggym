import React, { Component } from 'react'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'
import { getDocument } from '../../actions/firebaseActions'

export default class extends Component {
  state = { document: {} }

  async componentDidMount() {
    const { id } = this.props.match.params
    console.log(this.props)
    const document = await getDocument('provider')(id)
    console.log(document)
    this.setState({ document })
  }

  render() {
    const { document } = this.state
    return (
      <Table
        model={`product/${document.id}`}
        modelName={`Productos de ${document.name}`}
        data={[]}
        columns={[
          { key: 'name', label: 'Nombre' },
          { key: 'email', label: 'Email' },
          {
            key: 'actions',
            label: 'Acciones',
            Render: snap => (
              <Link to={`/user/${snap.id}`}>
                <span>Editar</span>
              </Link>
            )
          }
        ]}
      />
    )
  }
}
