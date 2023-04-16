import React from 'react'

import './Loading.css'

const loadingFrases = [
  'Arreglando camas...',
  'Preparando la bienvenida...',
  // 'Espera un momento, estamos encontrando el mejor alojamiento para ti...',
  '¿Quieres un café mientras esperas?',
  // 'Estamos buscando el alojamiento perfecto para ti...',
  'Preparando la piscina...',
  '¡Tu próximo destino de ensueño se está cargando!',
  // '¿Quieres saber un chiste de hotel?',
  'Limpiando baños...',
  // 'Estamos encontrando las mejores ofertas para ti...',
  '¡Aguanta un poquito más, ya casi está listo!',
  'Espera, ¡encontramos una oferta increíble para ti!',
  'Buscando la mejor vista...',
  'Encontrando las mejores comodidades para ti...',
  // '¿Quieres conocer los mejores lugares cercanos a tu alojamiento?',
  'Encontrando el mejor lugar para relajarte...',
  // '¡Sigue esperando, estamos a punto de sorprenderte con una oferta increíble!',
  // 'Encontrando el lugar perfecto para tus próximas vacaciones...',
  '¡Estamos casi listos, no te muevas!',
  // 'Buscando el lugar ideal para hacer tus próximas memorias de viaje...',
]

const Loading = ({ cargando }) => {
  return (
    <>
      {cargando && (
        <div className="loading">
          <div className="loader"> </div>
          <div className="loading-text">{loadingFrases[Math.floor(Math.random() * loadingFrases.length)]}</div>
        </div>
      )}
    </>
  )
}

export default Loading
