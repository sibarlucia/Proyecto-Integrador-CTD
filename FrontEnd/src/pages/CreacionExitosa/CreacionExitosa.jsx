import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreacionExitosa = () => {  
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
        <h2 data-testid="confirmacion">Su propiedad se ha creado con éxito.</h2>
        <button onClick={handleClick}>OK</button>
      </div>
    </div>
  )
}

export default CreacionExitosa