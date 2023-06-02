import { Input, Avatar, Layout } from '@ui-kitten/components'
import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import BtnSignOut from './components/BtnSignOut'
import { MainContext } from '../../context/MainContext'
import { FontAwesome } from '@expo/vector-icons'
import { currencyFormatter } from '../../adapters/currency.adapters'

const Perfil = () => {
  const { dataUser } = useContext(MainContext)
  return (
    <Layout style={styles.container} level='1' >
      <View style={styles.content}>
        <Avatar
          size="giant"
          source={require(`../../assets/avatar2.png`)}
          style={styles.img}
        />
        <View style={{ height: '60%', justifyContent: 'space-around' }}>
          <Input
            value={`${dataUser.name} ${dataUser.lastname} `}
            disabled={true}
            label="Nombre"
            size='large'
          />
          <Input
            value={String(dataUser.account_number)}
            disabled={true}
            label="Numero de Cuenta"
            size='large'
          />
          <Input
            value={dataUser.account_type}
            disabled={true}
            label="Tipo de Cuenta"
            size='large'
          />
          <Input
            value={currencyFormatter(dataUser.money)}
            disabled={true}
            label="Dinero disponible"
            size='large'
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <BtnSignOut />
        </View>
      </View>
    </Layout>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: '10%'
  },
  img: {
    width: 95,
    height: 95,
    alignSelf: 'center',
    marginTop: 3
  }
})
