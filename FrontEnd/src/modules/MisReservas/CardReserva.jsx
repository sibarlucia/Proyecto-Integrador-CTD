import React from 'react'
import './CardReserva.scss'
import { deleteData } from '../../utils/getData'
import { useEstadosGlobalesContext } from '../../context/global.context'
import { Navigate, useNavigate } from 'react-router-dom'
import { links } from '../../Routes/links'

const CardReserva = ({ reserva }) => {
  const { user } = useEstadosGlobalesContext()
  const navigate = useNavigate()

  const handleEliminar = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    }

    const response = await deleteData(undefined, `/reservas/${reserva.id}`, axiosConfig)

    if (response.status === 200) {
      navigate(links.misReservas.path)
    }
  }

  return (
    <article>
      <div className="img-container">
        <img className="card-imagen" src={reserva?.producto?.imagen?.urlImagen} alt="" data-testid="imagen" />
      </div>
      <div className="card-info">
        <h3 className="card-title" data-testid="hotel-titulo">
          {reserva?.producto?.titulo}
        </h3>
      </div>
      <div className="card-reserva-info" data-testid="card-reserva-info">
        <p className="eliminar-reserva" onClick={() => handleEliminar()}>
          Eliminar Reserva
        </p>
        <a
          className="card-location-map"
          href={`https://www.google.com/maps/@${reserva?.producto?.latitud},${reserva?.producto?.longitud},16.75z?hl=es`}
          target="_blank"
          rel="noopener noreferrer"
        >
          VER EN EL MAPA
        </a>
        <p className="info-io">
          Fecha Ingreso: <span className="bold">{`${reserva.fechaIngreso.slice(0, 10)}`}</span>
        </p>
        <p className="info-io">
          Fecha Salida: <span className="bold">{`${reserva.fechaEgreso.slice(0, 10)}`}</span>{' '}
        </p>
      </div>
    </article>
  )
}

export default CardReserva
