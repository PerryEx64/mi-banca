import { View, Text } from 'react-native'
import React from 'react'
import { Layout, Input, Button } from '@ui-kitten/components'
import { Register } from '../../services/account'

const CrearCuenta = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmit = async () => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    if (firstName !== '' && password !== '') {
      fetch('http://127.0.0.1:3000/auth/register', {
        method: 'POST',
        body: body
      }).then(res => console.log('funcion')).catch((err) => console.log('no funcionp', err))
    }
  }
  return (
    <Layout>
      <Input
        value={firstName}
        label="Nombres"
        placeholder="Ingrese sus nombres"
        size="large"
        textAlign="center"
        onChangeText={(value) => setFirstName(value)}
      />

      <Input
        value={lastName}
        label="Apellidos"
        placeholder="Ingrese sus apellidos"
        size="large"
        textAlign="center"
        onChangeText={(value) => setLastName(value)}
      />

      <Input
        value={email}
        label="Correo Electronico"
        placeholder="Registro correo electronico"
        size="large"
        textAlign="center"
        onChangeText={(value) => setEmail(value)}
      />

      <Input
        value={password}
        label="Contrasena"
        placeholder="Ingrese una contrasena"
        size="large"
        textAlign="center"
        onChangeText={(value) => setPassword(value)}
      />

      <Button
        onPress={() => {
          onSubmit()
        }}
        size="medium"
        style={{ marginTop: 10 }}
      >
        Registrarse
      </Button>
    </Layout>
  )
}

export default CrearCuenta
