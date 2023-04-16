import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Registro from '../src/pages/Registro/registro';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockEstadosGlobales } from '../EstadosGlobalesMock'
import EstadosGlobalesProvider, { useEstadosGlobalesContext } from '../src/context/global.context'

jest.mock('../src/context/global.context', () => ({
  __esModule: true,
  default: jest.fn(),
  useEstadosGlobalesContext: jest.fn()
}))

const mockSetUser = jest.fn()

describe('Registro', () => {

  beforeEach(() => {
    jest.resetAllMocks()
    useEstadosGlobalesContext.mockReturnValue(mockEstadosGlobales)
  })

    test('Debe tener un titulo h1 Crear cuenta', () => {
        const { getByTestId } = render(
                        <Router>
                             <Registro useEstadosGlobalesContext={useEstadosGlobalesContext}/>
                         </Router>);
        const titulo = getByTestId("titulo")
        expect(titulo.tagName).toBe("H1")
        expect(titulo.textContent).toBe('Crear cuenta')
    })
     test('Debe mostrar mensaje de error al ingresar un mail inválido', () => {
         const { getByTestId, queryByText } = render(
             <Router>
                 <Registro />
             </Router>);
         const emailInput = getByTestId('email');
         const submitButton = getByTestId('submit');
         fireEvent.change(emailInput, { target: { value: 'mail' } });
         fireEvent.click(submitButton);
         expect(queryByText('Este campo es obligatorio y debe tener un formato de correo válido')).toBeInTheDocument();
     });

     test('Debe mostrar mensaje de error al ingresar un apellido inválido', () => {
       const { getByTestId, findAllByText } = render(
           <Router>
               <Registro />
           </Router>);
       const apellidoInput = getByTestId('apellido');
       const submitButton = getByTestId('submit');
       fireEvent.change(apellidoInput, { target: { value: '12' } });
       fireEvent.click(submitButton);
       const listaErrores = findAllByText('Este campo es obligatorio')
      expect(listaErrores).not.toBeNull();
   });

     test('Debe mostrar mensaje de error al ingresar un password de menos de 8 caracteres', () => {
       const { getByTestId, queryByText } = render(
           <Router>
               <Registro />
           </Router>);
       const passwordInput = getByTestId('pwd');
       const submitButton = getByTestId('submit');
       fireEvent.change(passwordInput, { target: { value: '123' } });
       fireEvent.click(submitButton);
       expect(queryByText('Este campo es obligatorio y debe tener al menos 8 caracteres')).toBeInTheDocument();
   });
  
     test('Debe mostrar error al no ingresar un nombre', () => {
       const { getByTestId, findAllByText } = render(
         <Router>
           <Registro />
        </Router>);
       const nombreInput = getByTestId('nombre');
       const submitButton = getByTestId('submit');
       fireEvent.change(nombreInput, { target: { value: '' } });
       fireEvent.click(submitButton);
       const listaErrores = findAllByText('Este campo es obligatorio')
       expect(listaErrores).not.toBeNull();
     });

     test('Debe tener el mensaje "¿Ya tiene una cuenta?"', () => {
       render( 
       <Router>
         <Registro />
       </Router>);
     const texto = screen.getByText(/Ya tiene una cuenta/i);
     expect(texto).toBeInTheDocument();
     })

     test('Debería tener un elemento Link que diga Iniciar sesión', () => {
       const { getByTestId } = render(
         <Router>
           <Registro />
         </Router>);
       expect(getByTestId('login-link').textContent).toBe('Iniciar sesión')
     })

     test('El elemento Iniciar sesión debería ser Link', () => {
       const { getByTestId } = render(<Router>
         <Registro />
       </Router>);
         const loginLink = getByTestId('login-link');
         expect(loginLink.tagName).toBe('A');
    })
  });