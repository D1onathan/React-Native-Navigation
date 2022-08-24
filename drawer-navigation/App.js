import React, {Component} from 'react';
import ContactScreen from './components/ContactScreen';
import {  NavigationContainer } from "@react-navigation/native";
import {  createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

const Drawer = createDrawerNavigator();

export default function App () {
  return(
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='HomeScreen' component={HomeScreen}/>
          <Drawer.Screen name='AboutScreen' component={AboutScreen}/>
          <Drawer.Screen name='ContactScreen' component={ContactScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}