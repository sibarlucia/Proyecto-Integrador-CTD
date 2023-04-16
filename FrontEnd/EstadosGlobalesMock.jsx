export const mockEstadosGlobales = {
    user: {
      id: 1,
      nombre: 'John',
      apellido: 'Doe',
      email: 'johndoe@example.com',
      token: 'abc123',
      role: 'admin',
      isLogged: true
    },
    setUser: jest.fn(),
    logout: jest.fn(),
    isLoading: false,
    setIsLoading: jest.fn(),
    iniciateBusqueda: {
      iniciate: true,
      ciudadID: 123,
      ciudadNombre: 'Ciudad de México',
      fechaInicio: new Date('2023-04-01'),
      fechaFin: new Date('2023-04-07'),
      categoriaID: 456,
      categoriaNombre: 'Cultura'
    },
    setIniciateBusqueda: jest.fn(),
    NoIniciateBusqueda: {
      iniciate: false,
      ciudadID: null,
      ciudadNombre: null,
      fechaInicio: new Date(),
      fechaFin: null,
      categoriaID: null,
      categoriaNombre: null
    }
  }