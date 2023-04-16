import React, { useState, useEffect } from 'react'
import { getData } from '../../utils/getData'
import '../../pages/CreacionProducto/CreacionProducto.scss'
import './Atributos.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
// This exports the whole icon packs for Brand and Solid.
library.add(fas)

const Atributos = ({ setPayload }) => {
  const [categorias, setCategorias] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    getData(undefined, '/caracteristicas', undefined, undefined, setCategorias)
  }, [])

  const handleCheckboxes = e => {
    const category = JSON.parse(e.target.value)
    const isChecked = e.target.checked

    if (isChecked) {
      setSelectedCategories(prevState => [...prevState, category])
    } else {
      setSelectedCategories(prevState => prevState.filter(prevCategory => prevCategory.id !== category.id))
    }
  }

  useEffect(() => {
    setPayload(prevState => ({
      ...prevState,
      caracteristicas: selectedCategories
    }))
  }, [selectedCategories])

  const handleCheckContainerClick = e => {
    if (e.target.type !== 'checkbox') {
      const checkbox = e.currentTarget.querySelector('input[type="checkbox"]')
      checkbox.checked = !checkbox.checked
      handleCheckboxes({ target: checkbox })
    }
  }

  return (
    <div>
      <h3 data-testid="titulo">Agregar atributos</h3>
      <div className="atributos-container">
        {categorias &&
          categorias.map(categoria => (
            <div
              key={categoria.id}
              className={`check-container ${selectedCategories.some(c => c.id === categoria.id) ? 'selected' : ''}`}
              onClick={handleCheckContainerClick}
            >
              <input
                type="checkbox"
                className="checkboxAtributos"
                id={categoria.id}
                name={categoria.nombre}
                value={JSON.stringify(categoria)}
                onChange={handleCheckboxes}
              />
              <label htmlFor={categoria.nombre}>
                <FontAwesomeIcon icon={['fas', categoria.icono]} className="feature-icon" />
                {categoria.nombre}
              </label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Atributos
