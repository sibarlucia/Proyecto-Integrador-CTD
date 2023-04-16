import React, { useState, useEffect } from 'react'
import '../../pages/CreacionProducto/CreacionProducto.scss'
// import axios from 'axios'
import { getData } from '../../utils/getData'
import ReactInputMask from 'react-input-mask'

const FormularioCreacion = ({ setPayload }) => {
  const [categorias, setCategorias] = useState([])
  const [ciudades, setCiudades] = useState([])

  useEffect(() => {
    getData(undefined, '/categorias', undefined, undefined, setCategorias)
    getData(undefined, '/ciudades', undefined, undefined, setCiudades)
  }, [])

  const handleInputChange = e => {
    const { id, value } = e.target
    setPayload(prevState => ({ ...prevState, [id]: value }))
  }

  const handleCategoria = e => {
    const categoria = JSON.parse(e.target.value)
    delete categoria.cantidadProductos
    setPayload(prevState => ({ ...prevState, categoria }))
  }

  const handleCiudad = e => {
    const ciudad = JSON.parse(e.target.value)
    setPayload(prevState => ({ ...prevState, ciudad }))
  }

  return (
    <div>
      <form data-testid="formulario">
        <div className="doble-columna">
          <div className="form-field">
            <label className="form-label" data-testid="nombre-propiedad">
              Nombre de la propiedad
            </label>
            <input
              className="bordes inputNormal"
              type="text"
              name="nombre"
              id="titulo"
              data-testid="input"
              onChange={handleInputChange}
            />
          </div>
          {categorias && (
            <div className="form-field">
              <label className="form-label" data-testid="categoria">
                Categoría
              </label>
              <select
                className="bordes inputNormal"
                type="text"
                name="ciudad"
                id="ciudad"
                data-testid="input"
                onChange={handleCategoria}
                defaultValue={'-1'}
              >
                <option value="-1" disabled>
                  Seleccione Categoria
                </option>
                {categorias.map(category => (
                  <option key={category.idCategoria} value={JSON.stringify(category)}>
                    {category.titulo}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-field">
            <label className="form-label" data-testid="direccion">
              Dirección
            </label>
            <input
              className="bordes inputNormal"
              type="text"
              name="direccion"
              id="ubicacion"
              data-testid="input"
              onChange={handleInputChange}
            />
          </div>
          {ciudades && (
            <div className="form-field">
              <label className="form-label" data-testid="ciudad">
                Ciudad
              </label>
              <select
                className="bordes inputNormal"
                type="text"
                name="ciudad"
                id="ciudad"
                data-testid="input"
                onChange={handleCiudad}
                defaultValue={'-1'}
              >
                <option value="-1" disabled>
                  Seleccione Ciudad
                </option>
                {ciudades.map(city => (
                  <option
                    key={city.ciudadID}
                    value={JSON.stringify(city)}
                  >{`${city.nombre}, ${city.pais.nombre}`}</option>
                ))}
              </select>
            </div>
          )}
          <div className="form-field">
            <label className="form-label" data-testid="direccion">
              Latitud
            </label>
            <ReactInputMask
              mask="-99.999999"
              id="latitud"
              className="bordes inputNormal"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label" data-testid="ciudad">
              Longitud
            </label>
            <ReactInputMask
              mask="-99.999999"
              id="longitud"
              className="bordes inputNormal"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-field">
            <label className="form-label" data-testid="ciudad">
              Descripcion
            </label>
            <input
              className="bordes inputNormal"
              type="text"
              name="descripcion"
              id="descripcion"
              data-testid="input"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label" data-testid="frase">
              Una frase que describa tu propiedad
            </label>
            <input
              className="bordes inputNormal"
              type="text"
              name="frase"
              id="frase"
              data-testid="input"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormularioCreacion
