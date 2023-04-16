import React from 'react'
import TextRating from '../../components/Rating/TextRating'
import StarRating from '../../components/Rating/StarRating'

import { Link } from 'react-router-dom'
import { links } from '../../../Routes/links'
import './card2.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Card2 = ({ hotel }) => {
  const urlProducto = links.productoDetail.path.replace(':id', hotel.productoId)
  return (
    hotel && (
      <div className="card" data-testid="card">
        <div className="card-imagenes" data-testid="card-imagenes">
          <img className="card-imagen" src={hotel.imagen?.urlImagen} alt="" data-testid="imagen" />
          <div className="card-like" data-testid="card-like">
            <h4>
              <i className={`fa-sharp fa-solid fa-heart heart ${hotel.esFavorito ? 'active' : ''}`} />
            </h4>
          </div>
        </div>

        <div className="card-category-name">
          <div className="category-stars">
            <p className="card-category">{hotel.categoriaTitulo}</p>
            <StarRating totalStars={5} rating={hotel.puntajePromedio} />
          </div>
          <h3 className="card-title" data-testid="hotel-titulo">
            {hotel.titulo}
          </h3>
        </div>

        <div className="card-puntos" data-testid="card-puntos">
          <div className="puntaje" style={{ marginLeft: 'auto' }} data-testid="puntaje">
            <h2>{Math.round(hotel.puntajePromedio * 2)}</h2>
          </div>
          <div className="calificacion" data-testid="calificacion">
            <TextRating rating={hotel.puntajePromedio} />
          </div>
        </div>

        <div className="card-area-location" data-testid="card-area-location">
          <div className="location-info" data-testid="location-info">
            {hotel.latitud && hotel.longitud && (
              <h5 className="card-location" data-testid="hotel-location">
                <i className="fa-sharp fa-solid fa-location-dot" /> {hotel.ciudad.nombre} |
                {/* <h5 className="card-location-map">VER EN EL MAPA</h5> */}
                <a
                style={{marginLeft: '5px'}}
                  className="card-location-map"
                  href={`https://www.google.com/maps/@${hotel.latitud},${hotel.longitud},16.75z?hl=es`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER ZONA DEL HOTEL EN EL MAPA
                </a>
              </h5>
            )}
          </div>
          <div className="card-amenities">
            {hotel.caracteristicas.map(feature => (
              <FontAwesomeIcon key={feature.id} icon={['fas', feature.icono]} className="feature-icon" />
            ))}
          </div>
        </div>
        <div className="card-area-description">
          <p className="card-description" data-testid="descripcion">
            {hotel.descripcion}
          </p>
        </div>
        <div className="card-area-button" data-testid="boton-ver-mas" >
          <Link to={urlProducto} className="btnNormal" data-testid="ver-mas" style={{height: '40px'}}>
            Ver más
          </Link>
        </div>
      </div>
    )
  )
}

export default Card2
