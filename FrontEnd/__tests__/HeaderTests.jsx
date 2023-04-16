import React from 'react'
import Header from '../src/modules/components/Header'
import { getByTestId, render, screen } from '@testing-library/react'
import EstadosGlobalesProvider, { useEstadosGlobalesContext } from '../src/context/global.context'
import { mockEstadosGlobales } from '../EstadosGlobalesMock'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('../src/context/global.context', () => ({
  __esModule: true,
  default: jest.fn(),
  useEstadosGlobalesContext: jest.fn()
}))

const mockUseLocation = jest.fn()

describe('Header', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    useEstadosGlobalesContext.mockReturnValue(mockEstadosGlobales)
  })

  test('renderizado', () => {
    render(
      <Router>
        <Header useLocation={mockUseLocation} />
      </Router>
    )
    expect(null).toBe(null)
  })

  test('El header no está vacío', () => {
    render(
      <Router>
        <Header useLocation={mockUseLocation} />
      </Router>
    )
    expect(screen.getByTestId('header')).not.toBeEmptyDOMElement()
  })

  test('Debería tener un mensaje p', () => {
    render(
      <Router>
        <Header useLocation={mockUseLocation} />
      </Router>
    )
    expect(screen.getByTestId('mensaje').tagName).toBe('P')
  })

  test('El mensaje dice Sentite como en tu hogar', () => {
    render(
      <Router>
        <Header useLocation={mockUseLocation} />
      </Router>
    )
    expect(screen.getByTestId('mensaje').textContent).toBe('Sentite como en tu hogar')
  })

  test('Debería haber un botón', () => {
    render(
      <Router>
        <Header useLocation={mockUseLocation} />
      </Router>
    )
    expect(screen.getByTestId('boton').tagName).toBe('BUTTON')
  })

  test.skip('Debería tener un link a crear cuenta', () => {
    render(
      <Router>
        <Header useLocation={mockUseLocation} />
      </Router>
    )
    expect(screen.getByTestId('crear-cuenta').tagName).toBe('A')
  })
})
