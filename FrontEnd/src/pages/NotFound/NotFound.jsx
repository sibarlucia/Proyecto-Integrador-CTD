import React from 'react'
import { links } from '../../Routes/links'

import '@scss/NotFound/NotFound.scss'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="NotFound" style={{ overflow: 'hidden' }}>
      <h1>Lo siento, esta página encontró una muy buena oferta y ya no se encuentra disponible</h1>
      {/* <button className="button"> */}
      <Link to={links.home.path} className="button">
        {' '}
        Volver{' '}
      </Link>
      {/* </button> */}
    </div>
  )
}

export default NotFound
