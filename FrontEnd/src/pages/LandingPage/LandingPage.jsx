import React, { useEffect, useState } from 'react'
// import { getData } from '../../utils/getData'
import Banner from '../../modules/bloque-buscador/Banner'
import BloqueCategorias from '../../modules/bloque-categorias/BloqueCategorias'
import BloqueLista from '../../modules/BloqueLista/BloqueLista/BloqueLista'
import { useEstadosGlobalesContext } from '../../context/global.context'

import './landing-page.css'

const LandingPage = () => {
  const { setIsLoading } = useEstadosGlobalesContext()
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    // getData(null, '/data', setIsLoading, setError, setState)
    // getData(undefined, undefined, setIsLoading, setError, setData)
  }, [])

  return (
    <main style={{ marginTop: '93px' }}>
      <Banner />
      <BloqueCategorias />
      <BloqueLista />
    </main>
  )
}

export default LandingPage
