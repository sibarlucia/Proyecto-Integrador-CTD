import React from 'react'
import '@scss/Producto/Button.scss'

const Button = props => {
  return (
    <button {...props} className={`${props.variant} ${props.className}`}>
      {props.children}
    </button>
  )
}

export default Button
