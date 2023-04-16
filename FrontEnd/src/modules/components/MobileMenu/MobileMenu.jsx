import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { links } from '../../../Routes/links'
import './MobileMenu.scss'

const MobileMenu = ({ showMenu, handleClick, onLogout, user, esPaginaCrearCuenta, esPaginaLogin }) => {
  const { login, register, misReservas } = links
  const reservaLink = links.misReservas.path.replace(':id', user.id)
  return (
    <div className={`hamburguesa ${showMenu ? 'show' : ''}`}>
      <div className="top">
        <button className="close" onClick={handleClick}>
          X
        </button>
        {user.isLogged ? (
          <div className="user-container">
            <div className="avatar">
              <span>{user.nombre.slice(0, 2).toUpperCase()}</span>
            </div>
            <div className="hola-container">
              <div className="hola">¡Hola, </div>
              <div className="user-container">
                <span className="user">
                  {user.nombre} {user.apellido}
                </span>
                <span className="admiracion">!</span>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="menu">MENÚ</h2>
        )}
      </div>
      <div className="acciones-container">
        <div className="acciones">
          {esPaginaCrearCuenta && !user.isLogged && (
            <>
              <Link to={register.path} onClick={handleClick}>
                <h2>Crear cuenta</h2>
              </Link>
              <hr />
            </>
          )}
          {esPaginaLogin && !user.isLogged && (
            <>
              <Link to={login.path} onClick={handleClick}>
                <h2>Iniciar sesión</h2>
              </Link>
              <hr />
            </>
          )}
          {user && user.role === 'ROLE_ADMIN' && (
            <>
              <Link to={links.creacionProducto.path} onClick={handleClick}>
                <h2>Admininistración</h2>
              </Link>
            </>
          )}
          {user.isLogged && (
            <>
              <Link to={reservaLink}>
                <h2>Mis reservas</h2>
              </Link>
              <hr style={{ width: '70%', marginLeft: 'auto' }} />
              {/* <Link><h2>Mis favoritos</h2></Link> */}
            </>
          )}
        </div>
        {user.isLogged && (
          <div className="cerrar-sesion-container">
            <div className="cerrar-sesion">
              ¿Deseas <span onClick={onLogout}>cerrar sesión</span>?
            </div>
            <hr />
          </div>
        )}
      </div>
      <div className="redes-sociales">
        <FontAwesomeIcon className="fa-icon" icon={faFacebook} />
        <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
        <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
        <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
      </div>
    </div>
  )
}

export default MobileMenu
