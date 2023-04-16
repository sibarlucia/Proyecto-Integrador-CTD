import { createContext, useContext, useEffect, useState } from 'react'
import { isExpired, decodeToken } from 'react-jwt'
import { Navigate } from 'react-router-dom'
import { links } from '../Routes/links'

const noUser = {
  id: null,
  nombre: null,
  apellido: null,
  email: null,
  token: null,
  role: null,
  isLogged: false
}

const NoIniciateBusqueda = {
  iniciate: false,
  ciudadID: null,
  ciudadNombre: null,
  fechaInicio: new Date(),
  fechaFin: null,
  categoriaID: null,
  categoriaNombre: null
}

const NoIniciateReserva = {
  producto: null,
  fechaInicio: null,
  fechaFin: null
}

const EstadosGlobales = createContext()

const EstadosGlobalesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState(noUser)
  const [iniciateBusqueda, setIniciateBusqueda] = useState(NoIniciateBusqueda)
  const [iniciateReserva, setIniciateReserva] = useState(NoIniciateReserva)
  const [hoteles, setHoteles] = useState([])

  useEffect(() => {
    if (user.isLogged) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user.isLogged])

  const logout = () => {
    setUser(noUser)
    setIniciateReserva(NoIniciateReserva)
    localStorage.removeItem('user')
    return <Navigate to={links.home.path} />
  }

  const login = (token, url = '') => {
    const usuario = decodeToken(token)
    const tokenExpirado = isExpired(token)

    if (tokenExpirado) {
      alert('La sesión ha expirado, por favor inicie sesión nuevamente')
      logout()
    }

    setUser({
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.sub,
      token: token,
      role: usuario.authorities[0].authority,
      isLogged: true
    })

    if (url) {
      // navigate(url, { state: { dataReservacion: {} } })
    }
  }

  const value = {
    user,
    setUser,
    logout,
    login,
    isLoading,
    setIsLoading,
    iniciateBusqueda,
    setIniciateBusqueda,
    NoIniciateBusqueda,
    iniciateReserva,
    setIniciateReserva,
    NoIniciateReserva,
    hoteles,
    setHoteles
  }

  return <EstadosGlobales.Provider value={value}>{children}</EstadosGlobales.Provider>
}

export default EstadosGlobalesProvider
export const useEstadosGlobalesContext = () => useContext(EstadosGlobales)
