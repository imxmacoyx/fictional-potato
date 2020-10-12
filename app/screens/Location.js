import React, { useEffect } from 'react';
import {StyleSheet, View, Text, Dimensions, Alert} from 'react-native';
import * as ExpoLocation from 'expo-location';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';

export default function Location() {
  
  const setLocation = async () => {
    const { status } = await ExpoLocation.requestPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('No tenemos los permisos necesarios para acceder a la localización');
    }
    const location = await ExpoLocation.getCurrentPositionAsync({});
    console.warn(location);
  }

  useEffect( () => {
    setLocation();
  });

  return (
    <View style= {StyleSheet.container}>
      <MapView style={style.map} />
    </View>
  );
}

const style = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'stretch',
    justifyContent:'center',
    paddingTop: 22,
  },
});