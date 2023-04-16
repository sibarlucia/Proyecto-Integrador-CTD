import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './MisReservas.scss'

import { useEstadosGlobalesContext } from '../../context/global.context'
import { getData } from '../../utils/getData'

import CardReserva from '../../modules/MisReservas/CardReserva'

const MisReservas = () => {
  const [reservas, setReservas] = useState([])
  const { id } = useParams()
  const { user } = useEstadosGlobalesContext()

  useEffect(() => {
    const path = '/reservas/usuario/:id'.replace(':id', id)

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    }

    getData(undefined, path, undefined, undefined, setReservas, undefined, axiosConfig)
  }, [])

  return reservas?.length ? (
    <div className="reservas-container" style={{ margin: '180px 0' }}>
      {reservas.map(reserva => (
        <CardReserva key={reserva.id} reserva={reserva} />
      ))}
    </div>
  ) : (
    <h2>No hay reservas</h2>
  )
}

export default MisReservas
