import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.separator}  />
  )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        height: 2,
        marginVertical: 6,
    }
})