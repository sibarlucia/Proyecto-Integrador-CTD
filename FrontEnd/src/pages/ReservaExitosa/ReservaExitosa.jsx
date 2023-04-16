import React from 'react'
import './reservaexitosa.css'
import { useNavigate } from 'react-router-dom'

const ReservaExitosa = () => {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }

  return (
    <div className="reserva-exitosa" data-testid="reserva-exitosa">
      <div className="cuadro-reserva">
        <h1>
        <i className="fa-solid fa-circle-check" style={{ color: '#1DBEB4', margin: '20px', fontSize: '120px' }} />
        </h1>
        <h1 data-testid="agradecimiento">¡Muchas gracias!</h1>
        <h2 data-testid="confirmacion">Su reserva se ha realizado con éxito</h2>
        <button onClick={handleClick}>OK</button>
      </div>
    </div>
  )
}

export default ReservaExitosa
