import React from 'react'
import { render, screen } from '@testing-library/react'
import BloqueCategorias from '../src/modules/bloque-categorias/BloqueCategorias'
import { useEstadosGlobalesContext } from '../src/context/global.context'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

jest.mock('../src/context/global.context', () => ({
  useEstadosGlobalesContext: jest.fn(() => ({
    setIniciateBusqueda: jest.fn()
  }))
}))

describe('BloqueCategorias', () => {
  const categoriasMock = [
    { id: 1, nombre: 'Categoria 1' },
    { id: 2, nombre: 'Categoria 2' }
  ]

  test('Debería mostrar el título', () => {
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(categoriasMock))
    render(<BloqueCategorias fetchFn={categoriasMock} />)
    const title = screen.getByText('Buscar por tipo de alojamiento')
    expect(title).toBeInTheDocument()
  })

  test('El título debería ser de tipo h2', () => {
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(categoriasMock))
    render(<BloqueCategorias fetchFn={categoriasMock} />)
    const titulo = screen.getByTestId('titulo')
    expect(titulo.tagName).toBe('H2')
  })

  test('Debería tener un elemento "lista-categorias"', () => {
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(categoriasMock))
    render(<BloqueCategorias fetchFn={categoriasMock} />)
    expect(screen.getByTestId('lista-categorias')).toBeInTheDocument()
  })

  test('Bloque categoría no debería estar vacío', () => {
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(categoriasMock))
    render(<BloqueCategorias fetchFn={categoriasMock} />)
    expect(screen.getByTestId('bloque-categoria')).not.toBeEmptyDOMElement()
  })

  test('Lista-categorias debería estar contenido por bloque-categoría', () => {
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(categoriasMock))
    render(<BloqueCategorias fetchFn={categoriasMock} />)
    expect(screen.getByTestId('bloque-categoria')).toContainElement(screen.getByTestId('lista-categorias'))
  })
})
