import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
  Button,
  Input,
  Layout
} from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const SolicitudTarjeta = () => {
  const navigation = useNavigation()
  const [name, setName] = React.useState('')
  const [estimacionIngresos, setEstimacionIngresos] = React.useState('')
  const [address, setAddress] = React.useState('')

  const BackIcon = (props) => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginRight: 10 }}
    >
      <AntDesign name="back" size={24} color="black" />
    </TouchableOpacity>
  )

  const onSubmit = () => {}

  return (
    <Layout style={styles.container}>
      <Layout style={styles.content}>
        <Input
          value={name}
          label="Nombre Tarjeta"
          placeholder="Ingrese nombre que desee en su tarjeta"
          size="large"
          textAlign="center"
          onChangeText={(name) => setName(name)}
        />

        <Input
          value={estimacionIngresos}
          label="Estimacion de Ingresos"
          placeholder="ingrese sus ingresos mensuales"
          size="large"
          keyboardType="number-pad"
          textAlign="center"
          onChangeText={(ingresos) => setEstimacionIngresos(ingresos)}
        />
        <Input
          value={address}
          label="Direccion Domiciliar"
          placeholder="Ingrese su direccion completa"
          size="large"
          keyboardType="number-pad"
          textAlign="center"
          onChangeText={(direccion) => setAddress(direccion)}
        />
      </Layout>
      <Button size="medium" style={{ marginTop: 25 }}>
        Solicitar
      </Button>
    </Layout>
  )
}

export default SolicitudTarjeta

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 3,
    marginRight: 10
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
    justifyContent: 'space-between',
    height: '40%'
  }
})
