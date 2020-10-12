import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/Settings/Settings'; 

//Stack
const Stack =  createStackNavigator();

export default function SettingStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen 
      name='settings'
      component = {Settings}
      options={{title:'Ajustes'}}
    />
  </Stack.Navigator>
  ); 
}