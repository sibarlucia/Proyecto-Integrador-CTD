import React from 'react';
import { render, screen } from '@testing-library/react';
import Producto from '../src/pages/Producto/Producto';
import { useEstadosGlobalesContext } from '../src/context/global.context';
import fetchMock from 'jest-fetch-mock';

jest.mock('../src/context/global.context', () => ({
    useEstadosGlobalesContext: jest.fn(() => ({
      setIniciateBusqueda: jest.fn(),
    })),
  }));

  describe.skip('Producto', () => {
    const hotelMock = {
        productoId: 1,
        titulo: "Mansión Foster",
        descripcion: "Explora la rica historia y cultura de nuestra ciudad desde la comodidad de nuestro hotel de estilo colonial, donde cada detalle evoca la época dorada de la región.",
        ubicacion: "Calle Falsa 123",
        frase: "Alójate en el corazón de Buenos Aires",
        esFavorito: true,
        ciudad: {
            ciudadID: 1,
            nombre: "Buenos Aires",
            pais: {
                paisID: 1,
                nombre: "Argentina"
            }
        },
        categoria: {
            idCategoria: 2,
            titulo: "Bed and Breakfast",
            descripcion: "Descripción de la categoría 2",
            urlImagen: "https://images.unsplash.com/photo-1590856029620-9b5a4825d3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        },
        caracteristicas:  
             [{
                 id: 1,
                nombre: "Piscina",
                 icono: "swimmer"
             },
             {
                 id: 2,
                 nombre: "Gimnasio",
                 icono: "dumbbell"
             }],
        
        imagen: [
            {
                id: 1,
                urlImagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
                imagen: null
            },
            {
                id: 2,
                urlImagen: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                imagen: null
            }
        ],
        reservas: [
            {
                id: 35,
                fechaIngreso: "2023-03-31T00:00:00",
                fechaEgreso: "2023-04-02T00:00:00",
                productoId: 1,
                usuarioId: 18,
                resenia: {
                    id: 12,
                    puntaje: 3.3
                },
                ciudadUsuario: "Chajarí"
            },
            {
                id: 44,
                fechaIngreso: "2023-03-20T00:00:00",
                fechaEgreso: "2023-04-25T00:00:00",
                productoId: 1,
                usuarioId: 6,
                resenia: {
                    id: 8,
                    puntaje: 3.5
                },
                ciudadUsuario: "Mercedes"
            }
        ],
        puntajePromedio: 3.6799996,
        politicasAgrupadasPorTipo: {
            saludYSeguridad: [
                {
                    id: 57,
                    tipo: {
                        descripcion: "Salud y seguridad"
                    },
                    descripcion: "Detector de humo"
                },
                {
                    id: 77,
                    tipo: {
                        descripcion: "Salud y seguridad"
                    },
                    descripcion: "Depósito de seguridad"
                }
            ],
            normasDeLaCasa: [
                {
                    id: 1,
                    tipo: {
                        descripcion: "Normas de la casa"
                    },
                    descripcion: "No fumar"
                }
            ],
            politicaDeCancelacion: [
                {
                    id: 94,
                    tipo: {
                        descripcion: "Política de cancelación"
                    },
                    descripcion: "Cancelación sin costo con 48 hs de anticipación"
                }
            ]
        }
        }

        test('Renderizamo?', () => {
            render(<Producto productInfo={hotelMock} />)
            expect(screen.getByTestId("product-container")).toBeInTheDocument()
        })
  })