import React from 'react'
import './HorarioRes.css'

const HorarioRes = ({ setHoraLlegada }) => {
  const options = []

  function handleSelect(event) {
    setHoraLlegada(event.target.value)
  }

  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0') // convierte a formato de dos dígitos (por ejemplo, "02" en lugar de "2")
    options.push(
      <option key={i} value={hour}>
        {hour}:00
      </option>
    )
  }

  return (
    <div className="horario-llegada-container" data-testid="container">
      <h2 className="titulo">Tu horario de llegada</h2>
      <div>
        <p style={{ padding: '10px' }}>
          <i className="fa-regular fa-circle-check" /> Tu habitación va a estar lista para el check-in entre las 10:00
          AM y las 11:00 PM
        </p>
        <div>
          <form>
            <div className="form-field">
              <label className="form-label" htmlFor="nombre">
                Indicá tu horario de llegada
              </label>
              <select className="inputNormal" name="horario-llegada" id="horario-llegada" data-testid="select-horario" onChange={handleSelect}>
                {options}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HorarioRes
