import React, { useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as ExpoLocation from 'expo-location';
import Constants from 'expo-constants';

export default function Location() {
  const setLocation = async() => {
    const { status } = await ExpoLocation.requestPermissionsAsync();
    if (status == 'granted'){
      return Alert.alert('no tenemos los permisos necesarios para acceder a la localización');
    }
    const location  = await ExpoLocation.getCurrentPositionAsync({});
    console.log(location);
  }

  useEffect( () => {
    setLocation();
  });

  return (
    <View style= {StyleSheet.container}>
      
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'stretch',
    justifyContent:'center',
    paddingTop: 22,
  },
});