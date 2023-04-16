import React, { useState, useEffect } from 'react'
import Categoria from '../components/categorias/Categoria'
import { useEstadosGlobalesContext } from '../../context/global.context'

import './bloque-categorias.css'
import { getData } from '../../utils/getData'

const BloqueCategorias = () => {
  const { setIniciateBusqueda } = useEstadosGlobalesContext()
  const [category, setCategory] = useState([])

  useEffect(() => {
    getData(undefined, '/categorias', undefined, undefined, setCategory)
  }, [])

  return (
    <div className="bloque-categoria" data-testid="bloque-categoria">
      <h2 className="categoria-h2" data-testid="titulo">
        Buscar por tipo de alojamiento
      </h2>
      <div className="lista-categorias" data-testid="lista-categorias">
        {category?.length
          ? category.map(categoria => (
              <Categoria categoria={categoria} key={categoria.idCategoria} setIniciateBusqueda={setIniciateBusqueda} />
            ))
          : null}
      </div>
    </div>
  )
}

export default BloqueCategorias
