import React from 'react'
import { useNavigate } from 'react-router-dom'
import { links } from '../../Routes/links'

import './DetalleRes.scss'

import { useEstadosGlobalesContext } from '../../context/global.context'
import { postData } from '../../utils/getData'
import StarRating from '../components/Rating/StarRating'

const DetalleRes = ({ producto, ciudad, fechaInicio, fechaFin, horaLlegada }) => {
  const navigate = useNavigate()
  const { user } = useEstadosGlobalesContext()

  async function handleClick() {
    if (!ciudad) {
      alert('Debe completar el campo ciudad')
      return
    }

    const fInicio = new Date(fechaInicio)
    const fFin = new Date(fechaFin)
    const offsetHoras = parseInt(horaLlegada)

    fInicio.setHours(offsetHoras)
    fFin.setHours(offsetHoras)

    // console.table({
    //   fechaIngreso: fInicio,
    //   fechaEgreso: fFin,
    //   productoId: producto.productoId,
    //   usuarioId: user.id,
    //   ciudadUsuario: ciudad
    // })
    // return

    const data = {
      fechaIngreso: fInicio,
      fechaEgreso: fFin,
      productoId: producto.productoId,
      usuarioId: user.id,
      ciudadUsuario: ciudad
    }

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    }

    const respuesta = await postData(undefined, '/reservas', data, axiosConfig)

    if (!respuesta) {
      alert('No se pudo realizar la reserva, revise los datos ingresados')
      return
    }

    navigate(links.reservaExitosa.path)
  }
  return (
    <div className="detalle-cajita">
      <div className="area-titulo">
        <h2 className="titulo">Detalle de la reserva</h2>
      </div>
      <div className="area-contenidos">
        <div className="area-imagen">
          <img className="imagen-producto" src={producto?.imagenes[0]?.urlImagen} alt="imagen producto" />
        </div>
        <div className="info-producto">
          <h5>{producto.categoria.titulo}</h5>
          <h2>{producto.titulo}</h2>
          <StarRating totalStars={5} rating={producto.puntajePromedio} />
          <div className="producto-ubicacion">
            <i className="fa-solid fa-location-dot" />
            <p>{producto.ubicacion}</p>
            <p>{producto.ciudad.nombre}</p>
          </div>
          <div className="checks-boton" />
          <div className="checks">
            <hr />
            <div className="check">
              <h3>Check-in</h3>
              <h3>{fechaInicio?.toLocaleDateString('en-GB')}</h3>
            </div>
            <hr />
            <div className="check">
              <h3>Check-out</h3>
              <h3>{fechaFin?.toLocaleDateString('en-GB')}</h3>
            </div>
            <hr />
          </div>
          <button className="btnNormal" onClick={handleClick}>
            Confirmar reserva
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleRes
