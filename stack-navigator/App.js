import React from 'react';
import {  NavigationContainer } from "@react-navigation/native";
import {  createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

const Stack = createStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='AboutScreen' component={AboutScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
