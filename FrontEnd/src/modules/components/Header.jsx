import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import * as icons from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import { useEstadosGlobalesContext } from '../../context/global.context'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../../Routes/links'
import MobileMenu from './MobileMenu/MobileMenu'
import Desplegable from './Desplegable/Desplegable'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [showDesplegable, setShowDesplegable] = useState(false)
  const { user, logout } = useEstadosGlobalesContext()

  const location = useLocation()

  const { login, register, home } = links

  const esPaginaCrearCuenta = !location.pathname.includes(register.path)
  const esPaginaLogin = !location.pathname.includes(login.path)

  const onLogout = () => {
    logout()
  }

  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  const handleDesplegable = () => {
    setShowDesplegable(!showDesplegable)
  }

  return (
    <header
      data-testid="header"
      style={{
        width: '100vw',
        height: '93px',
        position: 'fixed',
        backgroundColor: '#fff',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '10',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Link
        reloadDocument
        to={home.path}
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-end' }}
        data-testid="link"
      >
        <img src="/DB Logo.png" alt="Logo Db" style={{ minWidth: '72px' }} data-testid="logo" />
        <p
          className="xl-visible"
          data-testid="mensaje"
          style={{
            color: '#545776',
            margin: '0 0 5px 12px',
            fontStyle: 'Italic'
          }}
        >
          Sentite como en tu hogar
        </p>
      </Link>
      <div className="md-visible" style={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }}>
        {user.isLogged ? (
          <>
            {user &&
              (user.role === 'ROLE_ADMIN' ? (
                <div
                  style={{
                    margin: '0 15px 0 0',
                    borderRight: '3px solid #1DBEB4',
                    padding: '0 15px 0 0',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  className="md-visible"
                >
                  <Link to={links.creacionProducto.path}>Administración</Link>
                </div>
              ) : null)}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#383B58',
                marginRight: '16px'
              }}
            >
              <span style={{ color: '#FFFFFF' }} onClick={handleDesplegable}>
                {user.nombre.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div style={{ position: 'relative' }}>
              <button
                onClick={onLogout}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#777777',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  lineHeight: '16px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  textAlign: 'right',
                  position: 'absolute',
                  top: '0',
                  right: '0'
                }}
                data-testid="boton"
              >
                X
              </button>
              <div style={{ marginRight: '16px', color: '#777777' }}>¡Hola, </div>
              <div style={{ marginRight: '16px' }}>
                <span style={{ color: '#1DBEB4' }}>
                  {user.nombre} {user.apellido}
                </span>
                <span style={{ color: '#777777' }}>!</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {esPaginaCrearCuenta && (
              <a
                href="/register"
                style={{
                  marginRight: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #1DBEB4',
                  borderRadius: '5px',
                  width: '164px',
                  height: '40px',
                  color: '#1DBEB4',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                data-testid="crear-cuenta"
              >
                Crear Cuenta
              </a>
            )}
            {esPaginaLogin && (
              <a
                href="/login"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #1DBEB4',
                  borderRadius: '5px',
                  width: '164px',
                  height: '40px',
                  color: '#1DBEB4',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Iniciar sesión
              </a>
            )}
          </>
        )}
      </div>
      <div className="xs-visible">
        <button onClick={handleClick} style={{ border: 'none', background: 'transparent' }}>
          <FontAwesomeIcon icon={icons.faBars} style={{ color: '#545776', fontSize: '30px' }} />
        </button>
      </div>
      <MobileMenu
        showMenu={showMenu}
        handleClick={handleClick}
        onLogout={onLogout}
        user={user}
        esPaginaCrearCuenta={esPaginaCrearCuenta}
        esPaginaLogin={esPaginaLogin}
      />
      <Desplegable showDesplegable={showDesplegable} setShowDesplegable={setShowDesplegable} user={user} />
    </header>
  )
}

export default Header
