import { View, StyleSheet } from 'react-native'
import { Text, Card } from '@ui-kitten/components'
import React from 'react'

const CardsHistory = ({ items }) => {
  return (
    <View style={styles.container}>
      <Card
        style={styles.card}
        status={items.type !== 'debito' ? 'primary' : 'danger'}
      >      
      
        <Text category="label" style={{ fontSize: 15, textAlign: 'center' }}>
          {items.type.toUpperCase()}
        </Text>
    
      <View style={{ flexDirection: 'row', marginTop: 2 }}>
        <Text category="s1">{'Se transfirio '}</Text>
        <Text category="label" style={{ fontSize: 15 }} status="danger">
          Q{items.amount}.00{' '}
        </Text>
        {items.type === 'debito' ? (
          <Text category="s1">a {items.destination.user.toUpperCase()} </Text>
        ) : (
          <Text category="s1">a {items.origin.user.toUpperCase()} </Text>
        )}
      </View>
      </Card>
    </View>
  )
}

export default CardsHistory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  },
  operationType: {
    flexDirection: 'row'
  }
})
