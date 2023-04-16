import React, { useState, useEffect } from 'react'
import { useEstadosGlobalesContext } from '../../context/global.context'

import './reservas.css'

import CalendarioRes from '../../modules/Reserva/CalendarioRes'
import DatosUser from '../../modules/Reserva/DatosUser'
import DetalleRes from '../../modules/Reserva/DetalleRes'
import HeaderRes from '../../modules/Reserva/HeaderRes'
import HorarioRes from '../../modules/Reserva/HorarioRes'
import Politicas from '../../modules/Reserva/Politicas'

const ReservaTemplate = () => {
  const { iniciateReserva } = useEstadosGlobalesContext()
  const [producto, setProducto] = useState()
  const [ciudadUsuario, setCiudadUsuario] = useState()
  const [horaLlegada, setHoraLlegada] = useState()

  useEffect(() => {
    setProducto(iniciateReserva.producto)
  }, [])

  return (
    producto && (
      <div className="reserva-contenido">
        <HeaderRes titulo={producto.titulo} categoria={producto.categoria.titulo} />
        <div className="componentes-reservas">
          <div className="left-components">
            <DatosUser className="elemento" setCiudadUsuario={setCiudadUsuario} />
            <CalendarioRes
              className="elemento"
              fechaInicio={iniciateReserva.fechaInicio}
              fechaFin={iniciateReserva.fechaFin}
              reservas={producto.reservas}
            />
            <HorarioRes className="elemento" setHoraLlegada={setHoraLlegada} />
          </div>
          <div className="right-components">
            <DetalleRes
              className="elemento"
              producto={producto}
              ciudad={ciudadUsuario}
              fechaInicio={iniciateReserva.fechaInicio}
              fechaFin={iniciateReserva.fechaFin}
              horaLlegada={horaLlegada}
            />
          </div>
        </div>
        <Politicas politicas={producto.politicasAgrupadasPorTipo} />
      </div>
    )
  )
}

export default ReservaTemplate
