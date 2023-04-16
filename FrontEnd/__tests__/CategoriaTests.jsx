import React from 'react'
import Categoria from '../src/modules/components/categorias/Categoria'
import { render, screen } from '@testing-library/react'
import EstadosGlobalesProvider, { useEstadosGlobalesContext } from '../src/context/global.context'
import { mockEstadosGlobales } from '../EstadosGlobalesMock'

jest.mock('../src/context/global.context', () => ({
  __esModule: true,
  default: jest.fn(),
  useEstadosGlobalesContext: jest.fn()
}))

const mockSetCategoria = jest.fn()

describe('Categoria', () => {
  const categoria = {
    id: 1,
    url_imagen: '',
    titulo: 'titulo',
    descripcion: 'descripcion'
  }

  beforeEach(() => {
    jest.resetAllMocks()
    useEstadosGlobalesContext.mockReturnValue(mockEstadosGlobales)
  })

  test('No debería estar vacío', () => {
    render(<Categoria categoria={categoria} setCategoria={mockSetCategoria} />)
    expect(screen.getByTestId('categoria')).not.toBeEmptyDOMElement()
  })

  test('Debería tener un contenedor de imagen', () => {
    render(<Categoria categoria={categoria} setCategoria={mockSetCategoria} />)
    expect(screen.getByTestId('img-container')).toBeInTheDocument()
  })

  test('Debería tener un título h2', () => {
    render(<Categoria categoria={categoria} setCategoria={mockSetCategoria} />)
    expect(screen.getByTestId('titulo').tagName).toBe('H2')
  })

  test('Debería tener una descripción p', () => {
    render(<Categoria categoria={categoria} setCategoria={mockSetCategoria} />)
    expect(screen.getByTestId('descripcion').tagName).toBe('P')
  })

  test('Debería tener una imagen img', () => {
    render(<Categoria categoria={categoria} setCategoria={mockSetCategoria} />)
    expect(screen.getByTestId('imagen').tagName).toBe('IMG')
  })
})
