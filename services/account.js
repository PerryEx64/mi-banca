const API_DOMAIN = ' http://127.0.0.1:3000/auth/'
const HeadersPrueba = (token) => {
  return {
    'Content-Type': 'application/json',
    authorization: token
  }
}

//Registro de usuarios
export const Register = async (body) => {
  const response = await fetch('http://127.0.0.1:3000/auth/register', {
    method: 'POST',
    body: body
  })
  const data = await response.json()
  return data
}

/**
 * Solicitudes para guardar informacion
 */

/**
 * Solicitudes para eliminar informacion
 */

/**
 *
 */

//cierre de cuenta
