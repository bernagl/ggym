import React, { Component } from 'react'
import Datatable from 'react-xtable'
import 'react-xtable/dist/styles.css'

export default class Table extends Component {
  render() {
    const { data, columns } = this.props
    return (
      <Datatable
        data={data}
        columns={columns}
        searchPlaceholder="Buscar"
        emptyText={() => 'Ningún registro para mostrar'}
      />
    )
  }
}
