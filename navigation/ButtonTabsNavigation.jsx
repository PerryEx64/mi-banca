import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image } from 'react-native'
import React from 'react'
import Perfil from '../src/Perfil/index'
import Historial from '../src/Historial/index'
import Transferencias from '../src/Transferencias/index'
import EstadoCuenta from '../src/EstadoCuenta/index'
import ProfileNavigation from './ProfileNavigation'

const Tab = createBottomTabNavigator()

function ButtonTabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.img}
              source={require('../assets/perfil.png')}
            />
          ),
          title: 'Perfil',
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Historial"
        component={Historial}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.img}
              source={require('../assets/historial.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Transferencias"
        component={Transferencias}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.img}
              source={require('../assets/transaccion.png')}
            />
          )
        }}
      />
     {/*  <Tab.Screen
        name="EstadoCuenta"
        component={EstadoCuenta}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.img}
              source={require('../assets/estadocuenta.png')}
            />
          )
        }}
      /> */}
    </Tab.Navigator>
  )
}

export default ButtonTabsNavigation

const styles = StyleSheet.create({
  img: {
    width: 27,
    height: 27
  }
})
