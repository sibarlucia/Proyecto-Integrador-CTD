import React, { useState, useEffect } from 'react'
import { getData } from '../../../utils/getData'
import { useEstadosGlobalesContext } from '../../../context/global.context'
import Card2 from '../Cardv2/Card2'
import './BloqueLista.scss'

// const getHoteles = async () => {
//   getData(undefined, '/productos/random', setIsLoading, undefined, setHoteles)
// }
const BloqueLista = () => {
  const ITEMS_PER_PAGE = 10
  const { setIsLoading, hoteles, setHoteles, user } = useEstadosGlobalesContext()

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getHoteles = async () => {
      const path = user.isLogged ? '/productos' : '/productos/random'
      getData(undefined, path, setIsLoading, undefined, setHoteles)
    }
    getHoteles()
  }, [])

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const cardsToShow = hoteles?.length ? hoteles.slice(startIndex, endIndex) : []
    setCardsToShow(cardsToShow)
  }, [currentPage, hoteles])

  const [cardsToShow, setCardsToShow] = useState([])

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="bloque-lista">
      <h2 className="title-list" data-testid="titulo">
        Recomendaciones
      </h2>
      {cardsToShow.length ? (
        <>
          <div className="contenedor" data-testid="lista-hoteles">
            {cardsToShow.map(item => (
              <Card2 hotel={item} key={item.productoId} />
            ))}
          </div>
          <div className="botonera" data-testid="botonera">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span>
              {currentPage} de {Math.ceil(hoteles?.length / ITEMS_PER_PAGE)}
            </span>
            <button
              onClick={nextPage}
              disabled={cardsToShow.length < ITEMS_PER_PAGE || hoteles?.length <= ITEMS_PER_PAGE}
            >
              Siguiente
            </button>
          </div>
        </>
      ) : (
        <h3> No hay hoteles disponibles </h3>
      )}
    </div>
  )
}

export default BloqueLista
