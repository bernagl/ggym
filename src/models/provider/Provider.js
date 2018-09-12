import React, { Component } from 'react'
import { getDocument } from '../../actions/firebaseActions'
import Tabs from 'antd/lib/tabs'
import ProviderForm from '../provider/ProviderForm'
import Service from '../service/ServiceTable'
import Review from '../review/ReviewTable'

const { TabPane } = Tabs

export default class Provider extends Component {
  state = { provider: {}, services: [], reviews: [] }

  async componentDidMount() {
    const { id } = this.props.match.params
    if (!id) return

    const provider = await getDocument('provider')(id)
    const services = await this.getDocumentByModel(
      provider['services'],
      'service'
    )
    const reviews = await this.getDocumentByModel(provider['reviews'], 'review')
    this.setState({ provider, reviews, services })
  }

  getDocumentByModel = async (snaps, model) => {
    const _getDocument = getDocument(model)
    if (!snaps) return []

    const snapsPromise = Object.keys(snaps).map(service =>
      _getDocument(service)
    )
    const snapshots = await Promise.all(snapsPromise)
    return snapshots
  }

  render() {
    const { reviews, services, provider } = this.state
    console.log(this.state)
    return (
      <Tabs defaultActiveKey="2" onChange={e => console.log(e)}>
        <TabPane tab="Información general" key="1">
          <ProviderForm />
        </TabPane>
        <TabPane tab="Servicios" key="2">
          <Service services={services} provider={provider} />
        </TabPane>
        <TabPane tab="Reseñas" key="3">
          <Review reviews={reviews} provider={provider} />
        </TabPane>
      </Tabs>
    )
  }
}
