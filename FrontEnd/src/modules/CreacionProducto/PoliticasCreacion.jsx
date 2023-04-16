import React, { useEffect, useState } from 'react'
import '../../pages/CreacionProducto/CreacionProducto.scss'

const PoliticasCreacion = ({ setPayload }) => {
  const [normas, setNormas] = useState({
    tipo: {
      id: 1,
      descripcion: 'Normas de la casa'
    },
    descripcion: undefined
  })
  const [salud, setSalud] = useState({
    tipo: {
      id: 2,
      descripcion: 'Salud y seguridad'
    },
    descripcion: undefined
  })
  const [cancelacion, setCancelacion] = useState({
    tipo: {
      id: 3,
      descripcion: 'Política de cancelación'
    },
    descripcion: undefined
  })

  const handlePoliticas = e => {
    const { id, value } = e.target
    switch (id) {
      case 'normas':
        setNormas({
          ...normas,
          descripcion: value
        })
        break
      case 'salud':
        setSalud({
          ...salud,
          descripcion: value
        })
        break
      case 'cancelacion':
        setCancelacion({
          ...cancelacion,
          descripcion: value
        })
        break
    }
  }

  useEffect(() => {
    const filteredPoliticas = [normas, salud, cancelacion].filter(politica => politica.descripcion)

    setPayload(prevState => ({
      ...prevState,
      politicas: filteredPoliticas
    }))
  }, [normas, salud, cancelacion])

  return (
    <div>
      <h3 data-testid="titulo" style={{ marginTop: '20px', marginBottom: '20px' }}>
        Politicas del producto
      </h3>
      <div className="formulario-politicas bordes">
        <form className="formulario-p">
          <div className="form-field">
            <h4>Normas de la casa</h4>
            <label className="form-label" data-testid="nombre-propiedad">
              Descripción
            </label>
            <input className="bordes inputNormal" type="text" data-testid="input" id="normas" onChange={handlePoliticas} />
          </div>
          <div className="form-field">
            <h4>Salud y seguridad</h4>
            <label className="form-label" data-testid="categoria">
              Descripción
            </label>
            <input type="text" className="bordes inputNormal" data-testid="input" id="salud" onChange={handlePoliticas} />
          </div>
          <div className="form-field">
            <h4>Política de cancelación</h4>
            <label className="form-label" data-testid="direccion">
              Descripción
            </label>
            <input
              className="bordes inputNormal"
              type="text"
              data-testid="input"
              id="cancelacion"
              onChange={handlePoliticas}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PoliticasCreacion
