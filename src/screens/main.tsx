import * as React from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'
import { StatusBar } from 'expo-status-bar'
import ThemeToggle from '../components/theme-toggle'
import { background } from 'native-base/lib/typescript/theme/styled-system'

export default class MainScreen extends React.Component {
  render() {
    return (
      <Center
        _dark={{ bg: 'blue.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Box bg={'amber.200'} p={10}>
            <Text style={{ color: 'black' }}>Helloooo</Text>
          </Box>
          <ThemeToggle />
        </VStack>
        <StatusBar style="auto" />
      </Center>
    )
  }
}
