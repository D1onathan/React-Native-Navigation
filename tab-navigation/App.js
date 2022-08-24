import React, {Component} from 'react';
import ContactScreen from './components/ContactScreen';
import {  NavigationContainer } from "@react-navigation/native";
import {  createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App () {
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='HomeScreen' component={HomeScreen}/>
          <Tab.Screen name='AboutScreen' component={AboutScreen}/>
          <Tab.Screen name='ContactScreen' component={ContactScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}