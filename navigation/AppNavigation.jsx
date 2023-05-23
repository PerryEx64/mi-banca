import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../src/Login'
import ButtonTabsNavigation from './ButtonTabsNavigation'

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
        name="Main"
        component={ButtonTabsNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation