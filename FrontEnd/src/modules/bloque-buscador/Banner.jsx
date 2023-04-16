import React, { useEffect, useState } from 'react'
import { useEstadosGlobalesContext } from '../../context/global.context'
import DatePicker, { registerLocale } from 'react-datepicker'
import CustomSelect from '../components/buscador/CustomSelect'

import './banner.css'

import './react-datepicker.css'
import es from 'date-fns/locale/es'
import { getData } from '../../utils/getData'
registerLocale('es', es)

function Banner() {
  const { iniciateBusqueda, setIniciateBusqueda, NoIniciateBusqueda, setIsLoading, setHoteles } =
    useEstadosGlobalesContext()
  const [ciudades, setCiudades] = useState([])
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const [monthsShown, setMonthsShown] = useState(1)

  const setDateRange = e => {
    setStartDate(e[0])
    setEndDate(e[1])
  }

  useEffect(() => {
    if (startDate) {
      setIniciateBusqueda({
        ...iniciateBusqueda,
        fechaInicio: startDate,
        fechaFin: endDate
      })
    }
  }, [startDate, endDate])

  const getCiudades = async () => {
    getData(undefined, '/ciudades', undefined, undefined, setCiudades)
  }

  const handleBuscar = () => {
    setIniciateBusqueda({ ...iniciateBusqueda, iniciate: false })

    getData(undefined, '/productos/buscar', setIsLoading, undefined, setHoteles, {
      ciudadId: iniciateBusqueda.ciudadID,
      categoriaId: iniciateBusqueda.categoriaID,
      fechaInicio:
        iniciateBusqueda.fechaInicio && `${iniciateBusqueda.fechaInicio.toISOString().slice(0, 10)}T00:00:00`,
      fechaFin:
        iniciateBusqueda.fechaFin &&
        iniciateBusqueda.fechaFin > iniciateBusqueda.fechaInicio &&
        `${iniciateBusqueda.fechaFin?.toISOString().slice(0, 10)}T00:00:00`
    })
  }

  function handleResize() {
    const width = window.innerWidth
    setMonthsShown(width < 483 ? 1 : 2)
  }

  useEffect(() => {
    setIniciateBusqueda(NoIniciateBusqueda)

    getCiudades()
    window.addEventListener('resize', handleResize)
    handleResize()
  }, []);


  return (
    <div className="banner">
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className="banner_content">
        <CustomSelect options={ciudades} setSelectedOption={setIniciateBusqueda} />
        

        <DatePicker
          minDate={new Date()}
          showPopperArrow={false}
          //showIcon
          locale="es"
          placeholderText="Checkin - Checkout"
          focusSelectedMonth={false}
          startDate={startDate}
          endDate={endDate}
          monthsShown={monthsShown}
          selectsRange
          onChange={e => {
            setDateRange(e)
          }}
          shouldCloseOnSelect
          className="datePicker"
        />

        <button className="btn" type="button" onClick={handleBuscar}>
          Buscar
        </button>
      </div>
    </div>
  )
}

export default Banner
