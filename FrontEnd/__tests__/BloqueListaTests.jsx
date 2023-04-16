import React from "react";
import BloqueLista from "../src/modules/BloqueLista/BloqueLista/BloqueLista";
import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import EstadosGlobalesProvider, { useEstadosGlobalesContext } from '../src/context/global.context'
import { mockEstadosGlobales } from '../EstadosGlobalesMock'

fetchMock.enableMocks();

jest.mock('../src/context/global.context', () => ({
    __esModule: true,
    default: jest.fn(),
    useEstadosGlobalesContext: jest.fn()
  }))

describe.skip('Bloque Lista', () => {
  const hotelesMock = [
    { id: 1, titulo: 'Hotel 1' },
     { id: 2, titulo: 'Hotel 2' }
   ];

   beforeEach(() => {
    jest.resetAllMocks();
    useEstadosGlobalesContext.mockReturnValue(mockEstadosGlobales);
  });

      test('Debería tener título "Recomendaciones"', () => {
       fetchMock.mockResponseOnce(JSON.stringify(hotelesMock));
          render(<BloqueLista fetchFn={fetchMock}/>);
          expect(screen.getByText(/Recomendaciones/i)).toBeInTheDocument()
      })

      test('El elemento "titulo" debería ser de tipo h2', () => {
        fetchMock.mockResponseOnce(JSON.stringify(hotelesMock));
        const { getByTestId } = render(<BloqueLista fetchFn={fetchMock}/>);
        const titulo = getByTestId('titulo');
        expect(titulo).toHaveAttribute('data-testid', 'titulo');
        expect(titulo.tagName).toBe('H2');
      })

      test('Debería tener un div "botonera"', () => {
        fetchMock.mockResponseOnce(JSON.stringify(hotelesMock));
        render(<BloqueLista fetchFn={fetchMock}/>);
        expect(screen.getByTestId("botonera")).toBeInTheDocument()
      })

      test('El div "botonera" debería contener 2 botones', () => {
        fetchMock.mockResponseOnce(JSON.stringify(hotelesMock));
        const { getByTestId } = render(<BloqueLista fetchFn={fetchMock}/>);
        const botonera = getByTestId('botonera');
        const botones = botonera.querySelectorAll('button');
        expect(botones.length).toBe(2);
      });

      test('Debería tener un contenedor con la lista de productos', () => {
        fetchMock.mockResponseOnce(JSON.stringify(hotelesMock));
        render(<BloqueLista fetchFn={fetchMock}/>);
        expect(screen.getByTestId("lista-hoteles")).toBeInTheDocument()
      })
});