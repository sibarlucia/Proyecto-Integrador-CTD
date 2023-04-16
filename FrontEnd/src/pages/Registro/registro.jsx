import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import './registro.css'
import { links } from '../../Routes/links'
import { postData } from '../../utils/getData'
import { useEstadosGlobalesContext } from '../../context/global.context'

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

const mensajeError = {
  nombre: 'Este campo es obligatorio',
  apellido: 'Este campo es obligatorio',
  email: 'Este campo es obligatorio y debe tener un formato de correo válido',
  password: 'Este campo es obligatorio y debe tener al más de 6 caracteres',
  repassword: 'Las contraseñas no coinciden'
}

const Registro = () => {
  const navigate = useNavigate()

  const { setUser } = useEstadosGlobalesContext()

  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false)

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const [errors, setErrors] = useState([])

  const [valoresFormulario, setValoresFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    repassword: ''
  })

  const handleSubmit = async event => {
    //Prevent page reload
    event.preventDefault()

    const newErrors = []

    if (!valoresFormulario.nombre) {
      newErrors.push({ campo: 'nombre' })
    }

    if (!valoresFormulario.apellido) {
      newErrors.push({ campo: 'apellido' })
    }

    if (!valoresFormulario.email || !emailRegexp.test(valoresFormulario.email)) {
      newErrors.push({ campo: 'email' })
    }

    if (!valoresFormulario.password || valoresFormulario.password.length < 7) {
      newErrors.push({ campo: 'password' })
    }

    if (valoresFormulario.password !== valoresFormulario.repassword || !valoresFormulario.repassword) {
      newErrors.push({ campo: 'repassword' })
    }

    setErrors(newErrors)

    if (newErrors.length) {
      return
    }

    //post al endpoint

    const datosCrearUsuario = {
      nombre: valoresFormulario.nombre,
      apellido: valoresFormulario.apellido,
      email: valoresFormulario.email,
      contrasenia: valoresFormulario.password
    }

    const response = await postData(undefined, '/registro', datosCrearUsuario)

    if (response.status !== 201) {
      return
    }

    const user = response.data
    setUser({
      id: user.usuarioId,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyM0BtYWlsLmNvbSIsImV4cCI6MTY4MjkwMzY4NSwiYXBlbGxpZG8iOiJUZW5hZ2xpYSIsImlkIjoyOCwibm9tYnJlIjoiRmVkZSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.abzdC4TvhY64SMtcv3AFrE7e6gxzl9_LRPpgeDXs-co',
      role: user.rol.nombre,
      isLogged: true
    })

    navigate(links.home.path)
  }

  return (
    <main className="body">
      <div className="form" data-testid="formulario">
        <form className="form__content" onSubmit={handleSubmit} noValidate>
          <div className="form__content__header">
            <h1 className="form__content__heading" data-testid="titulo">
              Crear cuenta
            </h1>
          </div>

          <div className="form__field__name">
            <div className="form__field">
              <label className="form__label">Nombre</label>
              <input
                className={
                  errors.some(error => error.campo === 'nombre')
                    ? 'form__input form__input__error__fullname'
                    : 'form__input form__input__fullname'
                }
                data-testid="nombre"
                type="text"
                value={valoresFormulario.nombre}
                onChange={e => setValoresFormulario({ ...valoresFormulario, nombre: e.target.value })}
                onBlur={() => setErrors(errors.filter(error => error.campo !== 'nombre'))}
              />
              <p
                className="form__p__error"
                style={{ visibility: errors.some(error => error.campo === 'nombre') ? 'visible' : 'hidden' }}
              >
                {mensajeError.nombre}
              </p>
            </div>

            <div className="form__field">
              <label className="form__label">Apellido</label>
              <input
                className={
                  errors.some(error => error.campo === 'apellido')
                    ? 'form__input form__input__error__fullname'
                    : 'form__input form__input__fullname'
                }
                data-testid="apellido"
                type="text"
                value={valoresFormulario.apellido}
                onChange={e => setValoresFormulario({ ...valoresFormulario, apellido: e.target.value })}
                onBlur={() => setErrors(errors.filter(error => error.campo !== 'apellido'))}
              />
              <p
                className="form__p__error"
                style={{ visibility: errors.some(error => error.campo === 'apellido') ? 'visible' : 'hidden' }}
              >
                {mensajeError.apellido}
              </p>
            </div>
          </div>

          <div className="form__field">
            <label className="form__label">Correo electrónico</label>
            <input
              className={
                errors.some(error => error.campo === 'email')
                  ? 'form__input form__input__error'
                  : 'form__input form__input__default'
              }
              data-testid="email"
              type="email"
              value={valoresFormulario.email}
              onChange={e => setValoresFormulario({ ...valoresFormulario, email: e.target.value })}
              onBlur={() => setErrors(errors.filter(error => error.campo !== 'email'))}
            />
            <p
              className="form__p__error"
              style={{ visibility: errors.some(error => error.campo === 'email') ? 'visible' : 'hidden' }}
            >
              {mensajeError.email}
            </p>
          </div>

          <div className="form__field">
            <label className="form__label">Contraseña</label>
            <input
              className={
                errors.some(error => error.campo === 'password')
                  ? 'form__input form__input__error'
                  : 'form__input form__input__default'
              }
              data-testid="pwd"
              type={passwordShown ? 'text' : 'password'}
              value={valoresFormulario.password}
              onChange={e => setValoresFormulario({ ...valoresFormulario, password: e.target.value })}
              onBlur={() => setErrors(errors.filter(error => error.campo !== 'password'))}
            />
            <BsEye
              style={{ visibility: passwordShown ? 'visible' : 'hidden' }}
              onClick={togglePassword}
              className="input-icon"
            />
            <BsEyeSlash
              style={{ visibility: passwordShown ? 'hidden' : 'visible' }}
              onClick={togglePassword}
              className="input-icon"
            />
            <p
              className="form__p__error"
              style={{ visibility: errors.some(error => error.campo === 'password') ? 'visible' : 'hidden' }}
            >
              {mensajeError.password}
            </p>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="repwd">
              Confirmar contraseña
            </label>
            <input
              className={
                errors.some(error => error.campo === 'repassword')
                  ? 'form__input form__input__error'
                  : 'form__input form__input__default'
              }
              type={passwordShown ? 'text' : 'password'}
              value={valoresFormulario.repassword}
              onChange={e => setValoresFormulario({ ...valoresFormulario, repassword: e.target.value })}
              onBlur={() => setErrors(errors.filter(error => error.campo !== 'repassword'))}
            />
            <p
              className="form__p__error"
              style={{ visibility: errors.some(error => error.campo === 'repassword') ? 'visible' : 'hidden' }}
            >
              {mensajeError.repassword}
            </p>
          </div>

          <div className="form__field form__submit">
            <input className="btn" type="submit" value="Crear cuenta" data-testid="submit" />
            <div className="form__submit__register">
              ¿Ya tiene una cuenta?{' '}
              <Link to="/login" data-testid="login-link">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Registro
