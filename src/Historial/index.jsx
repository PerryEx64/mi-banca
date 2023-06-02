import React, { useContext } from 'react'
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { MainContext } from '../../context/MainContext'
import CardsHistory from './components/CardsHistory'
import Separator from './components/Separator'
import EmptyComponents from '../components/EmptyComponents'
import { currencyFormatter } from '../../adapters/currency.adapters'
import { DataUsers } from '../../utils/constants'
import { MaterialIcons } from '@expo/vector-icons'

const Historial = () => {
  const { dataUser, setDataUser, updateMoney, setUpdateMoney } =
    useContext(MainContext)

  React.useEffect(() => {
    const query = DataUsers.filter((data) => data.user === dataUser.user)

    setDataUser(query[0])
  }, [updateMoney])

  return (
    <Layout level="2" style={{ flex: 1 }}>
      <Text category="h5" style={styles.txt}>
        {'Historial de Transacciones'}
      </Text>
      <Text category="s2" style={styles.txt}>
        {'Saldo Disponible'}
      </Text>
      <View style={styles.contentMoney}>
        <TouchableOpacity onPress={() => setUpdateMoney(!updateMoney)}>
          <MaterialIcons name="update" size={24} color="blue" />
        </TouchableOpacity>
        <Text
          category="label"
          style={{ textAlign: 'center', marginTop: 2, marginLeft: 10 }}
        >
          {currencyFormatter(dataUser.money)}
        </Text>
      </View>

      <FlatList
        data={dataUser.history}
        ItemSeparatorComponent={<Separator />}
        ListEmptyComponent={
          <EmptyComponents
            content={'Oops, parece que aun no haz hecho ninguna transferencia'}
          />
        }
        renderItem={({ item }) => <CardsHistory items={item} />}
        style={{ marginTop: 15 }}
      />
    </Layout>
  )
}

export default Historial

const styles = StyleSheet.create({
  contentMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  txt: { textAlign: 'center', marginTop: 10 }
})
