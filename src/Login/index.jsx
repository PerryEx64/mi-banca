import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '@ui-kitten/components/ui'

const Login = () => {
  const navigation = useNavigation()
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => {
            navigation.navigate('Main')
          }}
        >
          Siguiete Vista
        </Button>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
