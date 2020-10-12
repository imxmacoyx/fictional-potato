import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

// Create stack component
const Stack =  createStackNavigator();


export default function HomeStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='services'
        component = {Home}
        options={{title:'Servicios'}}
      />
    </Stack.Navigator>
  );
}