import React, { Component, Fragment } from 'react'
import Datatable from 'react-xtable'
import 'react-xtable/dist/styles.css'
import Divider from 'antd/lib/divider'
import Button from 'antd/lib/button'
import { Link } from 'react-router-dom'

export default class Table extends Component {
  render() {
    const { columns, data, model, modelName } = this.props
    return (
      <Fragment>
        <h2 className="m-0" style={{ display: 'inline' }}>
          {modelName}
        </h2>
        <Link to={`/${model}`}>
          <Button type="primary" className="float-right">
            Agregar
          </Button>
        </Link>
        <Divider />
        <Datatable
          data={data}
          columns={columns}
          searchPlaceholder="Buscar"
          emptyText={() => 'Ningún registro para mostrar'}
        />
      </Fragment>
    )
  }
}
