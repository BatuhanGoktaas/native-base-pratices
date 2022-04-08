import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import theme from '../theme'

type Props = {
  children: React.ReactNode
}

export default class AppContainer extends React.Component<Props> {
  render() {
    return (
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          {this.props.children}
        </NativeBaseProvider>
      </NavigationContainer>
    )
  }
}
