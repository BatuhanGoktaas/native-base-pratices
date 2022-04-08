import React, { Component } from 'react'
import AppContainer from './src/components/app-container'
import MainScreen from './src/screens/main'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <MainScreen/>
      </AppContainer>
    )
  }
}

export default App
