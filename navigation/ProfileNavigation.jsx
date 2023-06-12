import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Perfil from '../src/Perfil'
import SolicitudTarjeta from '../src/Perfil/SolicitudTarjeta'
import CierreCuenta from '../src/Perfil/CierreCuenta'
import BloqueoDesbloqueoTarjeta from '../src/Perfil/BloqueoDesbloqueoTarjeta'

const ProfileNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="SolicitudTarjeta"
        component={SolicitudTarjeta}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CierreCuenta"
        component={CierreCuenta}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="BloqueoDesbloqueoTarjeta"
        component={BloqueoDesbloqueoTarjeta}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileNavigation