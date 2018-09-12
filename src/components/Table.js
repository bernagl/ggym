import React, { Component, Fragment } from 'react'
import Datatable from 'react-xtable'
import ExportToCsv from './ExportToCsv'
import 'react-xtable/dist/styles.css'
import Divider from 'antd/lib/divider'
import Button from 'antd/lib/button'
import { Link } from 'react-router-dom'

export default class Table extends Component {
  state = { dataCallback: [] }

  callback = dataCallback => {
    this.setState({ dataCallback })
  }

  render() {
    const { columns, headers, data, model, modelName } = this.props
    return (
      <Fragment>
        <div>
          <h2 className="m-0" style={{ display: 'inline' }}>
            {modelName}
          </h2>
          <Link to={`/${model}`}>
            <Button type="primary" className="float-right">
              Agregar
            </Button>
          </Link>
        </div>
        <div>
          <ExportToCsv
            data={this.state.dataCallback}
            headers={headers}
            model={model}
          />
        </div>
        <Divider />
        <Datatable
          data={data}
          callback={this.callback}
          columns={columns}
          searchPlaceholder="Buscar"
          emptyText={() => 'Ningún registro para mostrar'}
        />
      </Fragment>
    )
  }
}
