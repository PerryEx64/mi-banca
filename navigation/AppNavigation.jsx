import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../src/Login'
import ButtonTabsNavigation from './ButtonTabsNavigation'
import CrearCuenta from '../src/CrearCuenta'
import ButtonTabsAdminNavigation from './ButtonTabsAdminNavigation'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Crearcuenta"
        component={CrearCuenta}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Main"
        component={ButtonTabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin"
        component={ButtonTabsAdminNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation