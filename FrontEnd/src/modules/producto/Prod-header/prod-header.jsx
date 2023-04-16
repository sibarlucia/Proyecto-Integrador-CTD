import React from 'react'
import { useNavigate } from 'react-router'

import '@scss/Producto/prod-header.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { links } from '../../../Routes/links'

const ProductHeader = ({ categoria, titulo }) => {
  const history = useNavigate()

  return (
    categoria &&
    titulo && (
      <div className="p-header-container">
        <div className="left-container">
          <h5 className="left-container-subtitle">{categoria.titulo}</h5>
          <h3 className="left-container-title">{titulo}</h3>
        </div>
        <div className="right-container">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon-arrow"
            onClick={() => history(links.home.path)}
            style={{ color: '#FFF' }}
          />
        </div>
      </div>
    )
  )
}

export default ProductHeader
