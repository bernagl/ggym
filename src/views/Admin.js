import React, { Component } from 'react'
// import { logout } from '../actions/firebaseAuth'
import { Layout } from '../antd'
import Sidebar from '../components/Sidebar'
const { Content, Footer, Header } = Layout

class Admin extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <h1 className="admin-title">Admin</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ marginTop: 24, padding: 24, background: '#fff' }}>
              Hola
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Admin by Mobkii</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Admin
