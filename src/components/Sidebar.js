import React, { Component } from 'react'
import { Layout, Menu, Icon } from '../antd'
import { NavLink, withRouter } from 'react-router-dom'
import { logout } from '../actions/firebaseAuth'
// import logo from '../assets/.png'

const { SubMenu } = Menu
const { Sider } = Layout

class Sidebar extends Component {
  state = { collapsed: false }
  render() {
    const path = this.props.location.pathname.replace('/', '')
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={() =>
          this.setState(({ collapsed }) => ({
            collapsed: !collapsed
          }))
        }
      >
        {/* <div className="logo p-4">
          <img alt="" src={logo} />
        </div> */}
        <Menu theme="dark" defaultSelectedKeys={[path]} mode="inline">
          <Menu.Item key="dashboard">
            <NavLink activeClassName="active" to="/dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="noticia">
            <NavLink activeClassName="active" to="/noticia">
              <Icon type="exception" />
              <span>Noticias</span>
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="clases"
            title={
              <span>
                <Icon type="schedule" />
                <span>Happenings</span>
              </span>
            }
          >
            {/* <Menu.Item key="categoria">
              <NavLink activeClassName="active" to="/categoria">
                <Icon type="tags-o" />
                <span>Categorías</span>
              </NavLink>
            </Menu.Item> */}
            <Menu.Item key="evento">
              <NavLink activeClassName="active" to="/evento">
                <Icon type="calendar" />
                <span>Eventos</span>
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="votaciones"
            title={
              <span>
                <Icon type="schedule" />
                <span>Votación</span>
              </span>
            }
          >
            <Menu.Item key="equipo">
              <NavLink activeClassName="active" to="/equipo">
                <Icon type="usergroup-add" />
                <span>Equipos</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="resultado">
              <NavLink activeClassName="active" to="/resultado">
                <Icon type="area-chart" />
                <span>Resultados</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="ajuste">
              <NavLink activeClassName="active" to="/ajuste">
                <Icon type="setting" />
                <span>Ajustes</span>
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="notificacion">
            <NavLink activeClassName="active" to="/notificacion">
              <Icon type="notification" />
              <span>Notificaciones</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="review">
            <NavLink activeClassName="active" to="/review">
              <Icon type="message" />
              <span>Reviews</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="user">
            <NavLink activeClassName="active" to="/users">
              <Icon type="user" />
              <span>Usuarios</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="logout" onClick={logout}>
            <Icon type="logout" />
            <span>Salir</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(Sidebar)
