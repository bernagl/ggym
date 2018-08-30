import React from 'react'
import Loadable from 'react-loadable'
import CenterWrapper from '../components/Wrappers/CenterWrapper'

const Loading = () => <CenterWrapper>Cargando</CenterWrapper>

export default path => {
  console.log(typeof path)
  return Loadable({
    loader: () => import('../' + path),
    loading: Loading
  })
}
