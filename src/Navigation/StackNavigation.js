import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/HomeScreens/Home';
import TopTabs from './TopTabs';
import StoryOpen from '../Components/StoryComponent/StoryOpen';
import CreateStory from '../Components/StoryComponent/CreateStory';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen component={TopTabs} name={"TopTabs"}/>
     <Stack.Screen component={StoryOpen} name={"StoryOpen"}/>
     <Stack.Screen component={CreateStory} name={"CreateStory"}/>
     
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})