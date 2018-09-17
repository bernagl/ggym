import React, { Component } from 'react'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'
import { getDocumentsByModel } from '../../actions/firebaseActions'
import Icon from 'antd/lib/icon'

export default class extends Component {
  state = { documents: [] }

  async componentDidMount() {
    const documents = await getDocumentsByModel('category')
    this.setState({ documents })
  }

  render() {
    const { documents } = this.state
    return (
      <Table
        model="category"
        modelName="Categorías"
        data={documents}
        columns={[
          { key: 'name', label: 'Nombre' },
          {
            key: 'actions',
            label: 'Acciones',
            Render: snap => (
              <Link to={`/category/${snap.id}`}>
                <Icon type="form" theme="outlined" />
              </Link>
            )
          }
        ]}
      />
    )
  }
}
