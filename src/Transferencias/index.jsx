import { View, StyleSheet, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Layout, Input, Text, Button } from '@ui-kitten/components'
import { MainContext } from '../../context/MainContext'
import { currencyFormatter } from '../../adapters/currency.adapters'
import { DataUsers } from '../../utils/constants'

const Transferencias = () => {
  const { dataUser, setDataUser } = useContext(MainContext)
  const [deposito, setDeposit] = useState('')
  const [accountDestination, setAccountDestination] = useState('')
  const [nameDestination, setNameDestination] = useState('')
  const [userDestination, setUserDesntination] = useState('')
  const [description, setDescription] = useState('')

  const handleTransfer = () => {
    /**
     * Generamos Historial para el remitente
     * Generamos Historial para el destinatario
     */

    const historyRemitente = {
      type: 'debito',
      amount: Number(deposito),
      destination: {
        user: nameDestination,
        account_number: Number(accountDestination)
      },
      description: description
    }

    const historyDestinatario = {
      type: 'credito',
      amount: Number(deposito),
      origin: {
        user: dataUser.name + ' ' + dataUser.lastname,
        account_number: Number(dataUser.account_number)
      },
      description: description
    }

    // Agregar el historial a la informacion del remitente y destinatario

    /**
     * Remitente
     *
     * Buscamos la posicion en la que se encuentra el usuario
     * Insertamos la informacion nueva del remitente
     * Actualizamos el saldo del usuario
     *
     */

    const positionRemitente = DataUsers.findIndex(
      (data) => data.user === dataUser.user
    )

    if (positionRemitente >= 0) {
      const DataRemitente = DataUsers[positionRemitente]
      DataRemitente.history.push(historyRemitente)

      DataRemitente.money = Number(dataUser.money) - Number(deposito)

      console.log('haber haber',DataRemitente)
      setDataUser(DataRemitente)

    }
  }

  const onSubmit = () => {
    /**
     * Valida si el usuario cuenta con los fondos necesarios para la transferencia
     * Hacer la transferencia
     * Crea un historial
     */
    if (dataUser.money < deposito)
      return Alert.alert(
        'No cuenta con los fondos necesarios para la transferencia'
      )

    try {
      handleTransfer()
    } catch (error) {
      console.log('error al guardar')
    }
  }
  return (
    <Layout style={styles.container}>
      <Layout style={styles.content}>
        <Image
          style={styles.gif}
          source={require('../../assets/transferencia.gif')}
        />

        <Text category="label" style={{ marginBottom: 5, fontSize: 14 }}>
          {'Datos del Remitente'}
        </Text>
        <Input
          value={`${dataUser.name}  ${dataUser.lastname}`}
          disabled={true}
          label="Nombre"
          size="large"
        />

        <Input
          value={currencyFormatter(dataUser.money)}
          disabled={true}
          label="Saldo Disponible"
          size="large"
        />

        <Text
          category="label"
          style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}
        >
          {'Datos del Destinatario'}
        </Text>

        <Input
          value={String(accountDestination)}
          placeholder="ingresa numero de cuenta completo"
          label="Cuenta del destinatario"
          size="large"
          onChangeText={(text) => {
            setAccountDestination(text)
            /**
             * Buscamos en entre todos los usuario existe alguno con el numero de cuenta
             * Comprobamos que el numero de cuenta tenga mas de 10 caracteres
             * Comprobamos si al momento de filtrar si se obtuvo un valor
             * Guardamos la informacion en el estado del nombre del destinatario
             */
            const filter = DataUsers.filter(
              (data) => data.account_number === Number(text)
            )

            if (text.length === 10 && filter.length > 0) {
              const name = filter[0].name + ' ' + filter[0].lastname
              setNameDestination(name)
              setUserDesntination(filter[0].user)
            }
          }}
        />

        <Input
          value={nameDestination}
          label="Nombre del Destinatario"
          placeholder="destinatario"
          size="large"
          disabled={true}
        />

        <Input
          value={deposito}
          label="Cantidad a depositar"
          placeholder="Ingresa cantidad a depositar"
          size="large"
          keyboardType="number-pad"
          onChangeText={(value) => setDeposit(value)}
        />

        <Input
          value={description}
          label="Descripcion de la transferencia"
          placeholder="Ingresa una corta descripcion"
          size="large"
          keyboardType="number-pad"
          multiline={true}
          maxLength={60}
          onChangeText={(value) => setDescription(value)}
        />

        {deposito > 0 && nameDestination !== '' ? (
          <Button style={styles.btn} onPress={() => onSubmit()}>
            Guardar
          </Button>
        ) : (
          <></>
        )}
      </Layout>
    </Layout>
  )
}

export default Transferencias

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  content: {
    marginHorizontal: 15
  },
  gif: {
    width: 140,
    height: 140,
    alignSelf: 'center'
  },
  btn: {
    marginTop: 15
  }
})
