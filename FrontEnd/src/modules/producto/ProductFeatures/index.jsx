import React from 'react'
import '@scss/Producto/ProductFeatures.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
// This exports the whole icon packs for Brand and Solid.
library.add(fas)

const ProductFeatures = ({ caracteristicas, showDesc = true }) => {
  return (
    caracteristicas && (
      <div className="features-container">
        <h2>¿Qué ofrece este lugar?</h2>
        <div className="features-container-description">
          {caracteristicas.length &&
            caracteristicas.map(feature => (
              <div className="features-description" key={feature.id}>
                <FontAwesomeIcon icon={['fas', feature.icono]} className="feature-icon" />
                {showDesc && <p>{feature.nombre}</p>}
              </div>
            ))}
        </div>
      </div>
    )
  )
}

export default ProductFeatures
