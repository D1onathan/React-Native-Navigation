import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

 HomeScreen=({navigation})=>{
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
          <Button title="Got to About" onPress={() => navigation.navigate('AboutScreen')}/>
      </View>
    )
  }

export default HomeScreen;