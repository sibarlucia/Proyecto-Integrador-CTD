import React from 'react'
import '@scss/Producto/ProductDescription.scss'

const ProductDescription = ({ frase, descripcion }) => {
  return (
    frase && (
      <div className="p-description-container">
        <h2>{frase}</h2>
        <div className="p-description">
          <p>{descripcion}</p>
        </div>
      </div>
    )
  )
}

export default ProductDescription
