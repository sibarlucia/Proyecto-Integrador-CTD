import { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useEstadosGlobalesContext } from '../../context/global.context'

import './login.css'

import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { links } from '../../Routes/links'
import { postData } from '../../utils/getData'

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

const Login = () => {
  const { login } = useEstadosGlobalesContext()
  const navigate = useNavigate()
  const location = useLocation()

  const authUser = async () => {
    const auth = {
      email: loginField.email.value,
      password: loginField.pwd.value
    }

    const token = await postData(undefined, '/login', auth)

    if (!token || !token.data?.token) {
      setLoginField({
        ...loginField,
        authStatusMessage: 'Por favor vuelva a intentarlo, sus credenciales son inválidas'
      })
      return
    }

    login(token.data.token)

    // const usuario = decodeToken(token.data.token)
    // const tokenExpirado = isExpired(token.data.token)

    // setUser({
    //   id: usuario.id,
    //   nombre: usuario.nombre,
    //   apellido: usuario.apellido,
    //   email: usuario.sub,
    //   token: token.data.token,
    //   role: usuario.authorities[0].authority,
    //   isLogged: true
    // })

    const fromProduct = location.state?.fromProduct
    const dataReservacion = fromProduct && location.state.dataReservacion
    const url = location.state?.reservaUrl

    if (fromProduct) {
      navigate(url, { state: { dataReservacion: {} } })
      return
    }
    navigate(links.home.path)
  }

  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false)

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const [loginField, setLoginField] = useState({
    authStatusMessage: null,
    email: {
      value: '',
      hasError: false,
      messageError: null
    },
    pwd: {
      value: '',
      hasError: false,
      messageError: null
    }
  })

  const handleChangeEmail = event => {
    setLoginField({
      ...loginField,
      authStatusMessage: null,
      email: {
        value: event.target.value,
        hasError: false,
        messageError: null
      }
    })
  }

  const handleChangePwd = event => {
    setLoginField({
      ...loginField,
      authStatusMessage: null,
      pwd: {
        value: event.target.value,
        hasError: false,
        messageError: null
      }
    })
  }

  const handleSubmit = event => {
    //Prevent page reload
    event.preventDefault()

    const logObject = {
      authStatusMessage: null,
      email: {
        value: loginField.email.value,
        hasError: false,
        messageError: null
      },
      pwd: {
        value: loginField.pwd.value,
        hasError: false,
        messageError: null
      }
    }

    if (!emailRegexp.test(loginField.email.value)) {
      logObject.email.hasError = true
      logObject.email.messageError = !loginField.email.value
        ? 'Este campo es obligatorio'
        : 'Correo electrónico inválido'
    }

    if (!loginField.pwd.value) {
      logObject.pwd.hasError = true
      logObject.pwd.messageError = 'Este campo es obligatorio'
    }

    setLoginField(logObject)

    if (logObject.email.hasError || logObject.pwd.hasError) {
      return
    }

    authUser()
  }

  useEffect(() => {
    const fromProduct = location.state?.fromProduct

    if (fromProduct) {
      setLoginField(prev => ({ ...prev, authStatusMessage: 'Para realizar una reserva necesitas estar logeado' }))
    }
  }, [location.state])

  return (
    <main className="body">
      {loginField.authStatusMessage && (
        <div className="error__container">
          <p className="error__message">{loginField.authStatusMessage}</p>
        </div>
      )}
      <div className="form">
        <form className="form__content" onSubmit={handleSubmit} noValidate>
          <div className="form__content__header">
            <h1 className="form__content__heading">Iniciar sesión</h1>
          </div>
          <div className="form__field">
            <label className="form__label" data-testid="email">
              Correo electrónico
            </label>
            <input
              // className="form__input"
              className={
                loginField.email.hasError ? 'form__input form__input__error' : 'form__input form__input__default'
              }
              type="email"
              name="email"
              id="email"
              value={loginField.email.value}
              aria-errormessage="emailErrorID"
              aria-invalid={loginField.email.hasError}
              onChange={handleChangeEmail}
            />
            <p
              id="emailErrorID"
              className="form__p__error"
              aria-live="assertive"
              style={{ visibility: loginField.email.hasError ? 'visible' : 'hidden' }}
            >
              {loginField.email.messageError}
            </p>
          </div>
          <div className="form__field">
            <label className="form__label" data-testid="pwd">
              Contraseña
            </label>
            <input
              className={
                loginField.pwd.hasError ? 'form__input form__input__error' : 'form__input form__input__default'
              }
              type={passwordShown ? 'text' : 'password'}
              name="pwd"
              id="pwd"
              value={loginField.pwd.value}
              aria-errormessage="pwdErrorID"
              aria-invalid={loginField.pwd.hasError}
              onChange={handleChangePwd}
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
              id="pwdErrorID"
              className="form__p__error"
              aria-live="assertive"
              style={{ visibility: loginField.pwd.hasError ? 'visible' : 'hidden' }}
            >
              {loginField.pwd.messageError}
            </p>
          </div>
          <div className="form__field form__submit">
            <input className="btn" type="submit" value="Ingresar" />
            <div className="form__submit__register">
              ¿Aún no tenes cuenta? <Link to="/register">Registrate</Link>
            </div>
          </div>
          <p id="submitErrorID" aria-live="assertive" style={{ visibility: loginField.submit ? 'visible' : 'hidden' }}>
            {loginField.messageSubmit}
          </p>
        </form>
      </div>
    </main>
  )
}

export default Login
