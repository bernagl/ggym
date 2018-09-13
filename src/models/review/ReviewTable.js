import React, { Component } from 'react'
import Table from '../../components/Table'
import Rate from 'antd/lib/rate'
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
          { key: 'review', label: 'Reseña' },
          {
            key: 'rate',
            label: 'Calificación',
            Render: ({ rate }) => <Rate disabled defaultValue={rate} />
          }
        ]}
      />
    )
  }
}
