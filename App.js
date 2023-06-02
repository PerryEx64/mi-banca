import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider } from '@ui-kitten/components'
import React from 'react'
import { AppNavigation } from './navigation'
import { MainContext } from './context/MainContext'

const App = () => {
  const [dataUser, setDataUser] = React.useState({})
  const [updateMoney, setUpdateMoney] = React.useState(false)

  const contextState = {
    dataUser,
    setDataUser,
    updateMoney,
    setUpdateMoney
  }
  return (
    <MainContext.Provider value={contextState}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    </MainContext.Provider>
  )
}

export default App
