//import ReservaTemplate from '../src/pages/reservas/ReservaTemplate'
import HeaderRes from '../src/modules/Reserva/HeaderRes'
import DatosUser from '../src/modules/Reserva/DatosUser'
import HorarioRes from '../src/modules/Reserva/HorarioRes'
import Politicas from '../src/modules/Reserva/Politicas'
import EstadosGlobalesProvider, { useEstadosGlobalesContext } from '../src/context/global.context'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('../src/context/global.context', () => ({
  __esModule: true,
  default: jest.fn(),
  useEstadosGlobalesContext: jest.fn()
}))

describe('Reserva Template', () => {
  const mockSetUser = jest.fn()
const mockUser = {
  id: 1,
  nombre: 'John',
  apellido: 'Doe',
  email: 'johndoe@example.com',
  token: 'abc123',
  role: 'admin',
  isLogged: true
}
  test('Header reserva tiene contenido', () => {
    render(
      <Router>
        <HeaderRes titulo={'titulo'} categoria={'categoria'} />
      </Router>
    )
    const headerReserva = screen.getByTestId('header-reserva')
    expect(headerReserva).not.toBeEmptyDOMElement()
  })

  test('Header reserva tiene un botón', () => {
    render(
      <Router>
        <HeaderRes titulo={'titulo'} categoria={'categoria'} />
      </Router>
    )
    const headerReserva = screen.getByTestId('header-reserva')
    const boton = headerReserva.querySelector('button')
    expect(boton).not.toBeNull()
  })

  test('Datos User tiene el título correcto', () => {
    render(
      <Router>
        <DatosUser user={mockUser} />
      </Router>
    )
    const titulo = screen.queryByText(/Completá tus datos/i)
    expect(titulo).toBeInTheDocument()
  })

  test('El formulario es de tipo form', () => {
    render(
      <Router>
        <DatosUser setUser={jest.fn()} user={mockUser} />
      </Router>
    )
    expect(screen.getByTestId('formulario').tagName).toBe('FORM')
  })

  test('El formulario de datosUser debe tener 4 inputs', () => {
    render(
      <Router>
        <DatosUser user={mockUser} />
      </Router>
    )
    const listaInputs = screen.getAllByTestId('input')
    expect(listaInputs.length).toBeMoreThan(3)
  })

  test('Los input del formulario de datosUser deben ser los nombre, apellido, ciudad y correo electrónico', () => {
    render(
      <Router>
        <DatosUser user={mockUser} setUser={mockSetUser} />
      </Router>
    )
    const listaInputs = []
    listaInputs.push(screen.getByTestId('nombre'))
    listaInputs.push(screen.getByTestId('apellido'))
    listaInputs.push(screen.getByTestId('email'))
    listaInputs.push(screen.getByTestId('ciudad'))
    expect(listaInputs.length).toBeMoreThan(4)
  })

  test('HorarioRes tiene un contenedor no vacío', () => {
    render(
      <Router>
        <HorarioRes />
      </Router>
    )
    const contenedorHorario = screen.getByTestId('container')
    expect(contenedorHorario).not.toBeEmptyDOMElement()
  })

  test('HorarioRes tiene un input', () => {
    render(
      <Router>
        <HorarioRes />
      </Router>
    )
    expect(screen.getByTestId('container')).toBeInTheDocument()
  })

  test('Debe haber un select para elegir el horario de llegada', () => {
    //const horariosPosibles = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    render(
      <Router>
        <HorarioRes />
      </Router>
    )
    //const options = getAllByTestId('select-horario');
    expect(screen.getByTestId('select-horario').tagName).toBe('SELECT')
  })

  test('Políticas debe tener el título correpondiente', () => {
    render(
      <Router>
        <Politicas />
      </Router>
    )
    expect(screen.getByText(/Qué tenés que saber/i)).toBeInTheDocument()
  })

  test('Debe existir la columna "normas" con el título correcto', () => {
    render(
      <Router>
        <Politicas />
      </Router>
    )
    expect(screen.getByTestId('normas')).toContainElement(screen.getByText(/Normas de la casa/i))
  })

  test('Debe existir la columna "seguridad" con el título correcto', () => {
    render(
      <Router>
        <Politicas />
      </Router>
    )
    const titulo = screen.getByText(/Salud y Seguridad/i)
    expect(screen.getByTestId('seguridad')).toContainElement(titulo)
  })

  test('Debe existir la columna "cancelaciones" con el título correcto', () => {
    render(
      <Router>
        <Politicas />
      </Router>
    )
    expect(screen.getByTestId('cancelaciones')).toContainElement(screen.getByText(/Política de cancelación/i))
  })
})
