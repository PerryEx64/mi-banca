import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider } from '@ui-kitten/components'
import React from 'react'
import { AppNavigation } from './navigation'

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ApplicationProvider>
  )
}

export default App
