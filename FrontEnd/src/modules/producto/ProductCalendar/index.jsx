import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEstadosGlobalesContext } from '../../../context/global.context'

import '@scss/Producto/ProductCalendar.scss'

import Button from '../Button'
import { links } from '../../../Routes/links'

import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
registerLocale('es', es)

const ProductCalendar = ({ reservas }) => {
  const ubicacion = useNavigate()
  const { user, iniciateReserva, setIniciateReserva } = useEstadosGlobalesContext()
  const { id } = useParams()

  const handleReservation = () => {
    const url = links.productoReserva.path.replace(':id', id)

    if (!iniciateReserva?.fechaInicio || !iniciateReserva?.fechaFin) {
      alert('Debes seleccionar una fecha de inicio y una fecha de fin')
      return
    }

    if (!user.isLogged) {
      ubicacion('/login', { state: { fromProduct: true, dataReservacion: {}, reservaUrl: url } })
      return
    }

    if (user.isLogged) {
      ubicacion(url, { state: { dataReservacion: {} } })
    }
  }

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [monthsShown, setMonthsShown] = useState(1)

  const setDateRange = e => {
    const fechaInicio = e[0]
    const fechaFin = e[1]

    let isDateValid = true
    for (let d = new Date(fechaInicio); d <= new Date(fechaFin); d.setDate(d.getDate() + 1)) {
      if (
        reservas.some(reserva => {
          const resIngreso = new Date(reserva.fechaIngreso)
          const resEgreso = new Date(reserva.fechaEgreso)
          return d >= resIngreso && d <= resEgreso
        })
      ) {
        isDateValid = false
        break
      }
    }

    if (!isDateValid) {
      // alert('Las fechas seleccionadas no están disponibles')
      setStartDate(null)
      setEndDate(null)
      setIniciateReserva(prev => {
        return { ...prev, fechaInicio: null, fechaFin: null }
      })
      return
    }

    setStartDate(fechaInicio)
    setEndDate(fechaFin)

    setIniciateReserva(prev => {
      return { ...prev, fechaInicio: fechaInicio, fechaFin: fechaFin }
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  }, [])

  function handleResize() {
    const width = window.innerWidth
    setMonthsShown(width < 968 ? 1 : 2)
  }

  const excludeDateIntervals = reservas
    .filter(reserva => {
      return reserva.fechaIngreso < reserva.fechaEgreso
    })
    .map(reserva => ({
      start: new Date(reserva.fechaIngreso),
      end: new Date(reserva.fechaEgreso)
    }))

  return (
    <div className="p-calendar">
      <h2>Fechas disponibles</h2>
      <div className="p-calendar-container row">
        {/* <ReactDatePicker /> */}
        <DatePicker
          monthsShown={monthsShown}
          inline
          locale="es"
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={e => {
            setDateRange(e)
          }}
          excludeDateIntervals={excludeDateIntervals}
          minDate={new Date()}
        />
        <div className="p-calendar-container-cta">
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <Button
            variant="button-full"
            onClick={() => {
              handleReservation()
            }}
          >
            Iniciar reserva
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCalendar
