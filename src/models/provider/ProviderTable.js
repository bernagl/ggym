import React, { Component, Fragment } from 'react'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'
import { getDocumentsByModel } from '../../actions/firebaseActions'
import Icon from 'antd/lib/icon'
import Tooltip from 'antd/lib/tooltip'

const iconStyle = { fontSize: 18 }

export default class extends Component {
  state = { documents: [] }

  async componentDidMount() {
    const documents = await getDocumentsByModel('provider')
    this.setState({ documents })
  }

  render() {
    const { documents } = this.state
    console.log(documents)
    return (
      <Table
        model="provider"
        modelName="Proveedores"
        data={documents}
        columns={[
          { key: 'name', label: 'Nombre' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Celular' },
          {
            key: 'actions',
            label: 'Acciones',
            Render: ({ id, email, phone }) => (
              <Fragment>
                <Tooltip title="Editar">
                  <Link to={`/provider/${id}`}>
                    <Icon type="form" theme="outlined" style={iconStyle} />
                  </Link>
                </Tooltip>
                <Tooltip title="Enviar email">
                  <a href={`mailto:${email}`}>
                    {'     '}
                    <Icon type="mail" theme="outlined" style={iconStyle} />
                  </a>
                </Tooltip>
                <Tooltip title="Llamar">
                  <a href={`tel:+${phone}`}>
                    {'     '}
                    <Icon type="phone" theme="outlined" style={iconStyle} />
                  </a>
                </Tooltip>
              </Fragment>
            )
          }
        ]}
      />
    )
  }
}
