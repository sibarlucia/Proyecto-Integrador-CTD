import React from 'react'
import '@scss/Producto/ProductPolicies.scss'

const ProductPolicies = ({ politicas }) => {
  const crearElementosPolitica = ([tipo, politicasTipo]) => {
    const crearTitulo = () => <h3>{politicasTipo[0].tipo.descripcion}</h3>
    const crearElementos = () => politicasTipo.map(({ id, descripcion }) => <li key={id}>{descripcion}</li>)

    return (
      <div className="policies-container" key={tipo}>
        {crearTitulo()}
        <ul>{crearElementos()}</ul>
      </div>
    )
  }

  return (
    politicas && (
      <div className="policies">
        <h2>Qué tenés que saber</h2>
        <div className="container">{Object.entries(politicas).map(crearElementosPolitica)}</div>
      </div>
    )
  )
}

export default ProductPolicies
