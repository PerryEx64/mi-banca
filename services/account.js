const API_DOMAIN = 'https://us-central1-move-app-gt.cloudfunctions.net/api/'
const HeadersPrueba = (token) => {
  return {
    'Content-Type': 'application/json',
    authorization: token
  }
}

export const GetOneCollection = async (collection) => {
  const jsonValue = await AsyncStorage.getItem('@token')
  const tokenResponse = jsonValue != null ? JSON.parse(jsonValue) : null
  const response = await fetch(
    `${API_DOMAIN}GetAllCollection?collection=${collection}`,
    {
      method: 'GET',
      headers: HeadersPrueba(tokenResponse)
    }
  )
  const data = await response.json()
  return data
}
