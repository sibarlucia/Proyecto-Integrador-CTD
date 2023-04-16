import React from 'react'
import { useEstadosGlobalesContext } from '../../context/global.context'
import './DatosUser.css'

const DatosUser = ({ setCiudadUsuario }) => {
  const { user } = useEstadosGlobalesContext()

  const handleChange = e => {
    setCiudadUsuario(e.target.value)
  }

  return (
    user.isLogged && (
      <div>
        <h2 className="titulo">Completá tus datos</h2>
        <div className="form-reserva">
          <form data-testid="formulario">
            <div className="form-field">
              <label className="form-label" data-testid="nombre">
                Nombre
              </label>
              <input className="inputNormal" type="text" name="nombre" id="nombre" data-testid="input" placeholder={user.nombre} disabled />
            </div>
            <div className="form-field">
              <label className="form-label" data-testid="apellido">
                Apellido
              </label>
              <input
                className="inputNormal"
                type="text"
                name="apellido"
                id="apellido"
                data-testid="input"
                placeholder={user.apellido}
                disabled
              />
            </div>
            <div className="form-field">
              <label className="form-label" data-testid="email">
                Correo Electrónico
              </label>
              <input className="inputNormal" type="email" name="email" id="email" data-testid="input" placeholder={user.email} disabled />
            </div>
            <div className="form-field">
              <label className="form-label" data-testid="ciudad">
                Ciudad
              </label>
              <input className="inputNormal" type="text" name="ciudad" id="ciudad" data-testid="input" autoFocus onChange={handleChange} />
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default DatosUser
