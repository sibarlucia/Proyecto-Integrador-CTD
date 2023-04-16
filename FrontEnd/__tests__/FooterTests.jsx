import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../src/modules/components/Footer'

describe('Footer', () => {
  test('El footer no está vacío', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).not.toBeEmptyDOMElement()
  })

  test('Tiene el nombre del proyecto', () => {
    render(<Footer />)
    const texto = screen.getByText(/Digital Booking/i)
    expect(texto).toBeInTheDocument()
  })

  test('debería tener un ícono de Instagram', () => {
    const { getByTitle } = render(<Footer />)
    const instagramIcon = getByTitle('Instagram')
    expect(instagramIcon).toBeInTheDocument()
  })

  test('debería tener un ícono de Facebook', () => {
    const { getByTitle } = render(<Footer />)
    const facebookIcon = getByTitle('Facebook')
    expect(facebookIcon).toBeInTheDocument()
  })

  test('debería tener un ícono de Twitter', () => {
    const { getByTitle } = render(<Footer />)
    const twitterIcon = getByTitle('Twitter')
    expect(twitterIcon).toBeInTheDocument()
  })

  test('debería tener un ícono de LinkedIn', () => {
    const { getByTitle } = render(<Footer />)
    const linkedInIcon = getByTitle('LinkedIn')
    expect(linkedInIcon).toBeInTheDocument()
  })

  test('debería tener un background-color rgb(29, 190, 180)', () => {
    const { getByTestId } = render(<Footer />)
    const elemento = getByTestId('footer')
    const estilos = window.getComputedStyle(elemento)
    expect(estilos.backgroundColor).toBe('rgb(29, 190, 180)')
  })
})
