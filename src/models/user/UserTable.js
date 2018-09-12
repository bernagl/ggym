import React, { Component } from 'react'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'
import { getDocumentsByModel } from '../../actions/firebaseActions'

export default class extends Component {
  state = { documents: [] }

  async componentDidMount() {
    const documents = await getDocumentsByModel('user')
    this.setState({ documents })
  }

  render() {
    const { documents } = this.state
    return (
      <Table
        data={documents}
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
