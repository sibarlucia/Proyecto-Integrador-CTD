import React from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import '@scss/Producto/GeoLocation.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>
const key = 'AIzaSyB6S5DrxefA8IVhKohdXWMcxYKKKkRRZbM'
const GeoLocation = ({ latitud, longitud, ciudad, zoom }) => {
  return (
    latitud &&
    longitud &&
    key && (
      <div className="geolocalizacion">
        <h2>¿Dónde vas a estar?</h2>
        <p>{ciudad}</p>
        <div style={{ height: '100vh', width: '100%', padding: '10px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            defaultCenter={{ lat: latitud, lng: longitud }}
            defaultZoom={zoom}
          >
            <AnyReactComponent lat={latitud} lng={longitud} text="📍" />
          </GoogleMapReact>
        </div>
      </div>
    )
  )
}

GeoLocation.propTypes = {
  latitud: PropTypes.number.isRequired,
  longitud: PropTypes.number.isRequired,
  ciudad: PropTypes.string.isRequired,
  zoom: PropTypes.number
}

GeoLocation.defaultProps = {
  zoom: 17
}

export default GeoLocation
