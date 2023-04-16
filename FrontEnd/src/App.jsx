import { Route, Routes } from 'react-router-dom'
import { useEstadosGlobalesContext } from './context/global.context'
import { useEffect, useState } from 'react'

import { Layout } from './pages/Layout/Layout'
import { links } from './Routes/links'

import './scss/App.scss'

import Loading from './modules/components/loading/Loading'
import LandingPage from './pages/LandingPage/LandingPage'
import Product from './pages/Producto/Producto'
import Registro from './pages/Registro/registro'
import Login from './pages/Login/login'
import ReservaTemplate from './pages/reservas/ReservaTemplate'
import ReservaExitosa from './pages/ReservaExitosa/ReservaExitosa'
import NotFound from './pages/NotFound/NotFound'
import CreacionProducto from './pages/CreacionProducto/CreacionProducto'
import MisReservas from './pages/MisReservas/MisReservas'
import CreacionExitosa from './pages/CreacionExitosa/CreacionExitosa'

function App() {
  const { home, login, register, productoDetail, productoReserva, reservaExitosa, creacionProducto, misReservas } =
    links
  const { isLoading, user, login: inicioSesion } = useEstadosGlobalesContext()
  const [token, setToken] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user?.token) {
      const { token } = user
      setToken(token)
      inicioSesion(token)
    }
  }, [])

  return (
    <div className="App">
      <Loading cargando={isLoading} />
      <Routes>
        <Route element={<Layout />}>
          <Route path={home.path} element={<LandingPage />} />
          <Route path={productoDetail.path} element={<Product />} />
          <Route path={register.path} element={<Registro />} />
          <Route path={login.path} element={<Login />} />
          <Route path={productoReserva.path} element={user.isLogged ? <ReservaTemplate /> : <Login />} />
          <Route path={reservaExitosa.path} element={user.isLogged ? <ReservaExitosa /> : <Login />} />
          <Route path={creacionProducto.path} element={user.role === 'ROLE_ADMIN' ? <CreacionProducto /> : <Login />} />
          <Route path={misReservas.path} element={user.isLogged ? <MisReservas /> : <Login />} />
          <Route path={"/creacion-exitosa"} element={<CreacionExitosa />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
