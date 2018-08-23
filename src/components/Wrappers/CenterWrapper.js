import React from 'react'

export default ({ bordered, className, children }) => (
  <div
    id="auth-wrapper"
    className="row full-height justify-content-center align-items-center m-2"
  >
    {bordered ? (
      <div
        className={`${
          className ? className : 'col-12 col-md-5 bordered-box p-4'
        }`}
      >
        {children}
      </div>
    ) : (
      children
    )}
  </div>
)
