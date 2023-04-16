import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HeaderRes.css'
import { useNavigate, useParams } from 'react-router-dom'
import { links } from '../../Routes/links'

const HeaderRes = ({ titulo, categoria }) => {
  const navigate = useNavigate()
  //get id from url
  const { id } = useParams()

  function volver() {
    const url = links.productoDetail.path.replace(':id', id)
    navigate(url)
  }

  return (
    <div className="header-reserva" style={{ backgroundColor: '#545776' }} data-testid="header-reserva">
      <div className="header-reserva-texto">
        <h3 style={{ color: '#F3F1ED' }}>{categoria}</h3>
        <h1 style={{ color: '#F3F1ED' }}>{titulo}</h1>
      </div>
      <button onClick={volver}>
        <i className="fa-solid fa-chevron-left" style={{ color: '#F3F1ED' }} />
      </button>
    </div>
  )
}

export default HeaderRes
