import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import React from 'react'

const EmptyComponents = ({ content }) => {
  return (
    <View >
      <Text category='h6'  style={{ textAlign: 'center'}} >{content}</Text>
    </View>
  )
}

export default EmptyComponents