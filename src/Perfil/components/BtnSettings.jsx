import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
  Avatar,
  Button,
  Layout,
  MenuItem,
  OverflowMenu,
  Text
} from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

const BtnSettings = () => {
  const [visible, setVisible] = React.useState(false)
  const [selectedTitle, setSelectedTitle] = React.useState('No items selected')
  const navigation = useNavigation()

  const onSolicitudTarjeta = () => {
    navigation.navigate('SolicitudTarjeta')
    setVisible(false)
  }

  const onCierreCuenta = () => {
    navigation.navigate('CierreCuenta')
    setVisible(false)
  }

  const onNavigation = (screen) => {
    navigation.navigate(screen)
    setVisible(false)
  }

  const renderToggleButton = () => (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <Image source={require(`../../../assets/menu.png`)} style={styles.img} />
    </TouchableOpacity>
  )
  return (
    <Layout style={styles.container} level="1">
      <OverflowMenu
        visible={visible}
        anchor={renderToggleButton}
        onBackdropPress={() => setVisible(false)}
      >
        <MenuItem title="Solicitar Tarjeta" onPress={() => onNavigation('SolicitudTarjeta')} />
        <MenuItem title="Solicitud Cierre de cuenta" onPress={() => onNavigation('CierreCuenta')} />
        <MenuItem title="Bloqueo/Desbloqueo Tarjeta" onPress={() => onNavigation('BloqueoDesbloqueoTarjeta')} />
      </OverflowMenu>
    </Layout>
  )
}

export default BtnSettings

const styles = StyleSheet.create({
  container: {
  },
  img: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 3
  }
})
