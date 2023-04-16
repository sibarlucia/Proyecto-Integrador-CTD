import React from 'react'
import PreviewCard from '../components/CreacionProducto/PreviewCard'
import './Preview.scss'

const Preview = ({ payload }) => {
  return (
    <div className="container">
      <h3>Previsualización de la tarjeta de tu hotel</h3>
      <div className="preview-container">
        <PreviewCard payload={payload} />
      </div>
    </div>
  )
}

export default Preview
