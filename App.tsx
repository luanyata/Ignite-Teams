/* eslint-disable camelcase */
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from './src/theme'
import { Loading } from './src/components/Loading'
import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </>
    </ThemeProvider>
  )
}
