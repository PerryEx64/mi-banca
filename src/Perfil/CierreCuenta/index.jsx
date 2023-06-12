import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Input, Layout } from '@ui-kitten/components'

const CierreCuenta = () => {
  const [motivo, setMotivo] = React.useState('')
  return (
    <Layout style={styles.container}>
      <View style={styles.inputs} >
        <Input
          value={motivo}
          label="Motivo Cierre Cuenta"
          placeholder="Ingrese el motivo por el cual desea cerrar su cuenta"
          size="large"
          textAlign="center"
          multiline={true}
          onChangeText={(value) => setMotivo(value)}
        />
      </View>
      <View style={styles.buttons} >
        <Button>Crear Solicitud</Button>
        <Button appearance='outline' status='basic' style={{marginLeft: 10}}  >Cancelar</Button>
      </View>
    </Layout>
  )
}

export default CierreCuenta

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10
  },
  inputs: {
    marginTop: 10, 
    marginHorizontal: 35
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15
  }
})
