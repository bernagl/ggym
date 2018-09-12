import React, { Component } from 'react'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    const { reviews, provider } = this.props
    return (
      <Table
        canAdd={false}
        model="Reseñas"
        // model={`product/${provider.id}`}
        modelName="Reseñas"
        data={reviews}
        columns={[
          { key: 'name', label: 'Nombre' },
          { key: 'email', label: 'Email' }
        ]}
      />
    )
  }
}
