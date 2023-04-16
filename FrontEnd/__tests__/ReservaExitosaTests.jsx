import React from "react";
import ReservaExitosa from "../src/pages/ReservaExitosa/ReservaExitosa";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Reserva Exitosa', () => {
    test('El contenedor no debe estar vacío', () => {
        render(
        <Router>
            <ReservaExitosa />
        </Router>);
        expect(screen.getByTestId("reserva-exitosa")).not.toBeEmptyDOMElement()
    })

    test('Debería tener el mensaje muchas gracias', () => {
        render(
        <Router>
            <ReservaExitosa />
        </Router>);
        expect(screen.getByText("¡Muchas gracias!")).toBeInTheDocument()
    })

    test('Debería tener el mensaje de confirmación', () => {
        render(
        <Router>
            <ReservaExitosa />
        </Router>);
        expect(screen.getByText("Su reserva se ha realizado con éxito")).toBeInTheDocument()
    })

    test('El mensaje de confirmación debería ser h2', () => {
        render(
            <Router>
                <ReservaExitosa />
            </Router>);
            expect(screen.getByTestId("confirmacion").tagName).toBe("H2")
    })

    test('El mensaje de agradecimiento debería ser h1', () => {
        render(
            <Router>
                <ReservaExitosa />
            </Router>);
            expect(screen.getByTestId("agradecimiento").tagName).toBe("H1")
    })
})