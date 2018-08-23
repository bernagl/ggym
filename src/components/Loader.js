import React from 'react'
import {} from 'antd'

export default ({ auth, children, loading }) => {
  return (
    <div
      className={`${loading ? 'loading-indicator' : ''} ${
        auth ? 'container' : 'container'
      }`}
    >
      {children}
    </div>
  )
}
