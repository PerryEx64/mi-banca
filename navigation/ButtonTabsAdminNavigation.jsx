import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AdminCreateAccount from '../src/AdminCreateAccount'

const ButtonTabsAdminNavigation = () => {
    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminCreateAccount"
        component={AdminCreateAccount}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.img}
              source={require('../assets/perfil.png')}
            />
          ),
          title: 'Perfil'
        }}
      />
      </Tab.Navigator>
  )
}

export default ButtonTabsAdminNavigation

const styles = StyleSheet.create({
    img: {
        width: 27,
        height: 27
      }
})