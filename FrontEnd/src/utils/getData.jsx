import axios from 'axios'

// const baseAPIURL = 'https://pokeapi.co/api/v2/pokemon/ditto'
const baseAPIURL = 'http://ec2-3-15-171-212.us-east-2.compute.amazonaws.com:8080'
// const baseAPIURL = 'http://localhost:8080'

/**
 * Obtiene los datos de una URL utilizando Axios.
 *
 * @param {string} baseAPIURL La URL base de la API.
 * @param {string} path La ruta de la API a la que se desea acceder.
 * @param {function} setIsLoading Función para establecer el estado de carga.
 * @param {function} setError Función para establecer el estado de error.
 * @param {function} setState Función para establecer el estado de datos.
 * @param {object} params Los parámetros a enviar.
 * @param {object} data Los datos a enviar.
 * @returns {Promise} Una promesa que se resuelve con los datos de la respuesta.
 */
export async function getData(
  URL = baseAPIURL,
  path = '',
  setIsLoading = () => {},
  setError = () => {},
  setState = () => {},
  params = {},
  data = {}
) {
  setIsLoading(true)
  setError(null)
  setState(null)

  const searchParams = new URLSearchParams()
  Object.entries(params)
    .filter(([key, value]) => value != null) // Filtrar los parámetros que son null o undefined
    .forEach(([key, value]) => searchParams.append(key, value)) // Agregar los parámetros a la URL solo si su valor no es null o undefined

  const paramsString = `${searchParams.toString() ? `?${searchParams.toString()}` : ''}`

  const finalURL = `${URL}${path ? path : ''}${paramsString}`
  console.log('finalURL: ', finalURL)

  // TESTING
  // setIsLoading(false)
  // return
  // END TESTING

  try {
    const response = await axios.get(finalURL, data)

    if (response.status !== 200) {
      setError(response.statusText)
    }

    // setTimeout(() => {
    console.log(response.data)
    setState(response.data)
    setIsLoading(false)
    // }, 2000)
  } catch (error) {
    console.log('error: ', error)
    setError(error)
  }
}

/**
 * Envía datos a una URL utilizando el método POST de Axios.
 *
 * @param {string} baseAPIURL La URL base de la API.
 * @param {string} path La ruta de la API a la que se desea acceder.
 * @param {object} data Los datos a enviar.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor.
 */
export async function postData(URL = baseAPIURL, path = '', data = {}, headersObject = {}) {
  const finalURL = `${URL}${path ? path : ''}`
  console.log('POST finalURL: ', finalURL)

  try {
    const response = await axios.post(finalURL, data, headersObject)
    return response
  } catch (error) {
    console.log('POST error: ', error)
  }
}

/**
 * Actualiza datos en una URL utilizando el método PUT de Axios.
 *
 * @param {string} baseAPIURL La URL base de la API.
 * @param {string} path La ruta de la API a la que se desea acceder.
 * @param {object} data Los datos a enviar.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor.
 */
export async function putData(baseAPIURL, path, data) {
  const response = await axios.put(`${baseAPIURL}${path}`, data)
  return response
}

/**
 * Envía datos a una URL utilizando el método POST de Axios.
 *
 * @param {string} baseAPIURL La URL base de la API.
 * @param {string} path La ruta de la API a la que se desea acceder.
 * @param {object} data Los datos a enviar.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor.
 */
export async function deleteData(URL = baseAPIURL, path = '', headersObject = {}) {
  const finalURL = `${URL}${path ? path : ''}`
  console.log('DELETE finalURL: ', finalURL)

  try {
    const response = await axios.delete(finalURL, headersObject)
    return response
  } catch (error) {
    console.log('POST error: ', error)
  }
}
