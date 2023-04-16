import React from 'react'
import '@scss/Producto/ProductLocation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import Rating from '../Rating'
import StarRating from '../../../modules/components/Rating/StarRating'
import TextRating from '../../../modules/components/Rating/TextRating'

const ProductLocation = ({ ciudad, puntajePromedio }) => {
  const promedio = Math.round((puntajePromedio + Number.EPSILON) * 10) / 10
  return (
    ciudad &&
    puntajePromedio && (
      <div className="p-location-container">
        <div className="p-location-container-left">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" /> {ciudad.nombre},{ciudad.pais.nombre}
          </p>
        </div>
        <div className="p-location-container-right">
          <div className="p-location-container-right-text">
            <TextRating rating={promedio || 3.5} />
            <StarRating totalStars={5} rating={promedio || 3.5} />
          </div>
          <div className="p-location-container-right-score">
            <p>{promedio * 2 || 3.5 * 2}</p>
          </div>
        </div>
      </div>
    )
  )
}

export default ProductLocation
