import React, { useRef, useState } from 'react'

import './CreacionProducto.scss'

import HeaderCreacionProducto from '../../modules/CreacionProducto/HeaderCreacionProducto'
import FormularioCreacion from '../../modules/CreacionProducto/FormularioCreacion'
import Atributos from '../../modules/CreacionProducto/Atributos'
import PoliticasCreacion from '../../modules/CreacionProducto/PoliticasCreacion'
import CargaImagenes from '../../modules/CreacionProducto/CargaImagenes'
import { postData } from '../../utils/getData'
import { useEstadosGlobalesContext } from '../../context/global.context'
import { Navigate, useNavigate } from 'react-router-dom'
import Preview from '../../modules/CreacionProducto/Preview'
import { links } from '../../Routes/links'

const CreacionProducto = () => {
  const [payload, setPayload] = useState({
    titulo: undefined,
    descripcion: undefined,
    ubicacion: undefined,
    frase: undefined,
    longitud: undefined,
    latitud: undefined,
    ciudad: undefined,
    categoria: undefined,
    caracteristicas: [],
    imagenes: [],
    politicas: []
  })

  const { user } = useEstadosGlobalesContext()
  const requisitosRef = useRef(null)
  const navigate = useNavigate()

  async function handleSubmit() {
    const todosLosCamposCompletos = !Object.values(payload).some(
      val => val === undefined || val === '' || val.length === 0
    )

    if (!todosLosCamposCompletos) {
      requisitosRef.current.scrollIntoView({ behavior: 'smooth' })
      return
    }

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    }

    const postDataPayload = {
      titulo: payload.titulo,
      descripcion: payload.descripcion,
      ubicacion: payload.ubicacion,
      frase: payload.frase,
      longitud: payload.longitud,
      latitud: payload.latitud,
      ciudadID: payload.ciudad.ciudadID,
      idCategoria: payload.categoria.idCategoria,
      caracteristicasId: payload.caracteristicas.map(caracteristica => caracteristica.id),
      imagenes: payload.imagenes,
      politicas: payload.politicas
    }

    const respuesta = await postData(undefined, '/productos', postDataPayload, axiosConfig)
    console.log('respuesta', respuesta)

    navigate(links.reservaExitosa.path)
  }

  return (
    <div style={{ marginTop: '95px', marginBottom: '50px' }}>
      <HeaderCreacionProducto />
      <h1 style={{ color: '#545776', margin: '20px' }}>Crear propiedad</h1>
      <div className="bordes" style={{ padding: '20px', margin: '20px', display: 'flex', flexDirection: 'column' }}>
        <FormularioCreacion style={{ margin: '20px' }} setPayload={setPayload} />
        <Atributos setPayload={setPayload} />
        <PoliticasCreacion setPayload={setPayload} />
        <CargaImagenes setPayload={setPayload} />
        <button
          onClick={handleSubmit}
          style={{
            alignSelf: 'center',
            maxWidth: '300px',
            width: '80%'
          }}
          className="botonSubmit"
        >
          Crear
        </button>

        <div className="preview">
          <Preview payload={payload} />
          <div className="requisitos-container">
            <p>
              Tenga en cuenta a la hora de crear un hotel, el mismo <u>debe</u> contar con:{' '}
            </p>
            <ul className="requisitos" ref={requisitosRef}>
              <li className={payload.titulo ? 'cumplido' : 'pendiente'}>Un título para el hotel</li>
              <li className={payload.descripcion ? 'cumplido' : 'pendiente'}>Una descripción</li>
              <li className={payload.ubicacion ? 'cumplido' : 'pendiente'}>La ubicación</li>
              <li className={payload.frase ? 'cumplido' : 'pendiente'}>Una frase que lo represente</li>
              <li className={payload.longitud ? 'cumplido' : 'pendiente'}>La longitud</li>
              <li className={payload.latitud ? 'cumplido' : 'pendiente'}>La latitud</li>
              <li className={payload.ciudad?.ciudadID ? 'cumplido' : 'pendiente'}>La ciudad a la que pertenece</li>
              <li className={payload.categoria?.idCategoria ? 'cumplido' : 'pendiente'}>
                Una categoría que lo represente
              </li>
              <li className={payload.caracteristicas.length ? 'cumplido' : 'pendiente'}>Las características</li>
              <li className={payload.imagenes.length ? 'cumplido' : 'pendiente'}>Al menos una imágen representativa</li>
              <li className={payload.politicas.length ? 'cumplido' : 'pendiente'}>Las políticas de la casa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreacionProducto
