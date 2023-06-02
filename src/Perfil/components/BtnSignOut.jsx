import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MainContext } from '../../../context/MainContext'

const BtnSignOut = () => {
  const navigation = useNavigation()
  const { setDataUser } = useContext(MainContext)

  const signOut = () => {
    /**
     * Elimina los datos del usuario que se almacenaron en el context
     * Retorna al login
     * Mensaje de confirmacion de sesion finalizada
     */

    setDataUser({})
    navigation.navigate('Login')
    Alert.alert('Sesion finalizada')
  }
  return (
    <TouchableOpacity style={styles.btnSignOut} onPress={signOut}>
      <Text style={{ marginRight: 5 }}>{'Cerrar Sesion'}</Text>
      <FontAwesome name="sign-out" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default BtnSignOut

const styles = StyleSheet.create({
  btnSignOut: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
