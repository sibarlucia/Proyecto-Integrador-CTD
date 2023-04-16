import React from 'react'
import { useNavigate } from 'react-router-dom'
import { links } from '../../Routes/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderCreacionProducto = () => {
  const navigate = useNavigate()

  function volver() {
    navigate(links.home.path)
  }

  return (
    <div
      style={{
        backgroundColor: '#545776',
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      data-testid="header"
    >
      <div>
        <h2 style={{ color: '#F3F1ED', marginLeft: '20px' }} data-testid="titulo">
          Administración
        </h2>
      </div>
      <button onClick={volver} data-testid="boton" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <h1>
          <i className="fa-solid fa-chevron-left" style={{ color: '#F3F1ED', marginRight: '20px' }} />
        </h1>
      </button>
    </div>
  )
}

export default HeaderCreacionProducto
