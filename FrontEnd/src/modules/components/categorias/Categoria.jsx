import React from 'react'
import { getData } from '../../../utils/getData'
import { useEstadosGlobalesContext } from '../../../context/global.context'
import '@scss/LandingPage/categorias.scss'

const Categoria = React.memo(({ categoria, setIniciateBusqueda }) => {
  const { iniciateBusqueda, setIsLoading, setHoteles } = useEstadosGlobalesContext()

  const handleCategoria = () => {
    setIniciateBusqueda(prev => {
      const nuevaCategoriaID = prev.categoriaID === categoria.idCategoria ? null : categoria.idCategoria
      const nuevaCategoriaNombre = prev.categoriaNombre === categoria.titulo ? null : categoria.titulo

      const payload = {
        ciudadId: iniciateBusqueda.ciudadID,
        categoriaId: nuevaCategoriaID,
        fechaInicio:
          iniciateBusqueda.fechaInicio && `${iniciateBusqueda.fechaInicio.toISOString().slice(0, 10)}T00:00:00`,
        fechaFin: iniciateBusqueda.fechaFin && `${iniciateBusqueda.fechaFin?.toISOString().slice(0, 10)}T00:00:00`
      }

      buscar(payload)

      return {
        ...prev,
        iniciate: true,
        categoriaID: nuevaCategoriaID,
        categoriaNombre: nuevaCategoriaNombre
      }
    })
  }

  const buscar = payload => {
    getData(undefined, '/productos/buscar', setIsLoading, undefined, setHoteles, payload)
  }

  const isActive = iniciateBusqueda.categoriaID === categoria.idCategoria

  return (
    categoria && (
      <div className={`categoria ${isActive ? 'active' : ''}`} onClick={handleCategoria} data-testid="categoria">
        <div className="img-container" data-testid="img-container">
          <img src={categoria.urlImagen} className="categoria-img" alt={categoria.titulo} data-testid="imagen" />
        </div>
        <h2 className="categoria-titulo" data-testid="titulo">
          {categoria.titulo}
        </h2>
        <p className="categoria-descripcion" data-testid="descripcion">
          {categoria.cantidadProductos} disponibles
        </p>
      </div>
    )
  )
})

export default Categoria
