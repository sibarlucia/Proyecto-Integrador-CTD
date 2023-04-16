import React, { useEffect, useState } from 'react'
import Calendar, { YearView } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import '../../pages/reservas/reservas.css'

import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import { useEstadosGlobalesContext } from '../../context/global.context'
registerLocale('es', es)

const CalendarioRes = ({ fechaInicio, fechaFin, reservas }) => {
  const [startDate, setStartDate] = useState(fechaInicio)
  const [endDate, setEndDate] = useState(fechaFin)
  const [monthsShown, setMonthsShown] = useState(1)

  const [initialDates, setInitialDates] = useState({ startDate: fechaInicio, endDate: fechaFin })
  const { setIniciateReserva } = useEstadosGlobalesContext()

  const excludeDateIntervals = reservas
    .filter(reserva => {
      return reserva.fechaIngreso < reserva.fechaEgreso
    })
    .map(reserva => ({
      start: new Date(reserva.fechaIngreso),
      end: new Date(reserva.fechaEgreso)
    }))

  const setDateRange = e => {
    const fInicio = e[0]
    const fFin = e[1]

    let isDateValid = true
    for (let d = new Date(fInicio); d <= new Date(fFin); d.setDate(d.getDate() + 1)) {
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
      setStartDate(initialDates.startDate)
      setEndDate(initialDates.endDate)
      setIniciateReserva(prev => {
        return { ...prev, fechaInicio: initialDates.startDate, fechaFin: initialDates.endDate }
      })
      return
    }

    setStartDate(fInicio)
    setEndDate(fFin)
    setIniciateReserva(prev => {
      return { ...prev, fechaInicio: fInicio, fechaFin: fFin }
    })
  }

  function handleResize() {
    const width = window.innerWidth
    setMonthsShown(width < 968 ? 1 : 2)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  }, [])

  return (
    <div className="contenedor-calendario">
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
    </div>
  )
}

export default CalendarioRes
