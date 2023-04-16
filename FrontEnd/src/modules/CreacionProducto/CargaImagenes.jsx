import React, { useEffect, useState } from 'react'
import '../../pages/CreacionProducto/CreacionProducto.scss'

const CargaImagenes = ({ setPayload }) => {
  const [imagenes, setImagenes] = useState([])

  const cargarImagen = event => {
    event.preventDefault()
    const urlImagen = event.target.elements.urlImagen.value.trim()
    if (urlImagen) {
      setImagenes([...imagenes, { urlImagen, imagen: null }])
      event.target.elements.urlImagen.value = ''
    }
  }

  useEffect(() => {
    setPayload(prevState => ({ ...prevState, imagenes }))
  }, [imagenes])

  const eliminarImagen = urlImagen => {
    const nuevasImagenes = imagenes.filter(imagen => imagen.urlImagen !== urlImagen)
    setImagenes(nuevasImagenes)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ marginTop: '20px' }} data-testid="titulo">
        Cargar imágenes
      </h3>
      <form onSubmit={cargarImagen} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          name="urlImagen"
          placeholder="Ingresa la URL de la imagen"
          className="inputURL bordes"
          style={{ marginRight: '10px' }}
        />
        <button type="submit" className="boton" style={{ cursor: 'pointer' }}>
          <h1>+</h1>
        </button>
      </form>
      <div className="lista-imagenes">
        {imagenes.map((imagen, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <img src={imagen.urlImagen} alt="imagen" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <button onClick={() => eliminarImagen(imagen.urlImagen)} className="boton">
              <h1>X</h1>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CargaImagenes
