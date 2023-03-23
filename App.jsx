import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>     
    <StackNavigation />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})