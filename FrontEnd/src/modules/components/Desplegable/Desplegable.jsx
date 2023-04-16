import React from 'react'
import '../Header.scss'
import { Link } from 'react-router-dom'
import { links } from '../../../Routes/links'

const Desplegable = ({ showDesplegable, setShowDesplegable, user }) => {
  const handleClick = () => {
    setShowDesplegable(false)
  }
  const reservaLink = links.misReservas.path.replace(':id', user.id)
  return (
    <div className={showDesplegable ? 'desplegable' : 'invisible'}>
      
      <Link to={reservaLink}><h2>Mis Reservas</h2></Link>
      <hr />
      {/* <h2>Mis reservas</h2>
        <hr />
        <h2>Mis favoritos</h2> */}
        <h3 onClick={handleClick}>
        <i className="fa-solid fa-square-xmark"></i>
      </h3>
    </div>
  )
}

export default Desplegable
