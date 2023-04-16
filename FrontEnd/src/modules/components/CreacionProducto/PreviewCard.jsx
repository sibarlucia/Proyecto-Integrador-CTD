import React from 'react'

import '../../BloqueLista/Cardv2/card2.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRating from '../Rating/StarRating'

const PreviewCard = ({ payload }) => {
  return (
    <div>
      <div className="card" data-testid="card">
        <div className="card-imagenes" data-testid="card-imagenes">
          {!payload.imagenes.length ? (
            <img
              className="card-imagen"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
              alt=""
              data-testid="imagen"
            />
          ) : (
            <img className="card-imagen" src={payload.imagenes[0].urlImagen} alt="" data-testid="imagen" />
          )}

          <div className="card-like" data-testid="card-like">
            <h4>
              <i className="fa-sharp fa-solid fa-heart heart" />
            </h4>
          </div>
        </div>

        <div className="card-category-name">
          <div className="category-stars">
            <p className="card-category">{payload.categoria?.titulo}</p>
            <StarRating totalStars={5} rating={0} />
          </div>
          <h3 className="card-title" data-testid="hotel-titulo">
            {payload.titulo}
          </h3>
        </div>

        <div className="card-puntos" data-testid="card-puntos">
          <div className="puntaje" style={{ marginLeft: 'auto' }} data-testid="puntaje">
            <h2>{0}</h2>
          </div>
          <div className="calificacion" data-testid="calificacion">
            {/* <TextRating rating={hotel.puntajePromedio} /> */}
          </div>
        </div>

        <div className="card-area-location" data-testid="card-area-location">
          <div className="location-info" data-testid="location-info">
            {/* {hotel.latitud && hotel.longitud && ( */}
            <h5 className="card-location" data-testid="hotel-location">
              <i className="fa-sharp fa-solid fa-location-dot" />
              <a
                className="card-location-map"
                href={`https://www.google.com/maps/@${payload.latitud},${payload.longitud},16.75z?hl=es`}
                target="_blank"
                rel="noopener noreferrer"
              >
                VER ZONA DEL HOTEL EN EL MAPA
              </a>
            </h5>
            {/* )} */}
          </div>
          {payload.caracteristicas.length && (
            <div className="card-amenities">
              {payload.caracteristicas.map(feature => (
                <FontAwesomeIcon key={feature.icono} icon={['fas', feature.icono]} className="feature-icon" />
              ))}
            </div>
          )}
        </div>
        <div className="card-area-description">
          <p className="card-description" data-testid="descripcion">
            {payload.descripcion}
          </p>
        </div>
        <div className="card-area-button" data-testid="boton-ver-mas">
          <a className="btnNormal" data-testid="ver-mas">
            Ver más
          </a>
        </div>
      </div>
    </div>
  )
}

export default PreviewCard
