import { useNavigation } from '@react-navigation/native'
import { Button, Input, Layout, Text } from '@ui-kitten/components/ui'
import React, { useContext } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native'
import { UsersCredential as credential, DataUsers } from '../../utils/constants'
import { MainContext } from '../../context/MainContext'

const Login = () => {
  const navigation = useNavigation()
  const { setDataUser } = useContext(MainContext)
  const [user, setUser] = React.useState('bisrael')
  const [password, setPassword] = React.useState('12345678')

  const validateUser = () => {
    if (user === credential.user && password === credential.password) {
      /**
       * Busca la informacion del usuario
       * Guarda en el context
       * Redirecciona al main donde puede hacer operaciones en la banca
       */
      const result = DataUsers.filter((data) => data.user === user)
      setDataUser(result[0])

      if(result[0].type === 'admin') {

        return navigation.navigate('Admin')
      } else {
        return navigation.navigate('Main')
      }
      
    }
    Alert.alert(
      'Credenciales invalidas',
      'Revise que haya ingresado la informacion correctamente'
    )
  }

  return (
    <Layout style={styles.container} >
      <View style={styles.content}>
        <Text category="h3" style={styles.title}>
          {'Inicio de Sesion'}
        </Text>

        <Input
          value={user}
          label="Usuario"
          placeholder="Ingrese su usuario"
          size="large"
          textAlign="center"
          onChangeText={(nextValue) => setUser(nextValue)}
        />

        <Input
          value={password}
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          size="large"
          textAlign="center"
          secureTextEntry={true}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
        <Button
          appearance="outline"
          style={styles.btn}
          onPress={validateUser}
        >
          Iniciar Sesion
        </Button>

        <View style={{flexDirection: 'row', marginTop: 15, alignSelf: 'center'}} >
          <Text>{'Aun no tienes una cuenta?'}</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Crearcuenta') }} style >
          <Text status='primary' style={{marginLeft: 5}} >{'creala aqui'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  content: {
    marginHorizontal: 30
  },
  btn: {
    alignSelf: 'center',
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    marginBottom: 5
  }
})
