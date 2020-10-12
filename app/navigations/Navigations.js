import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

//Stacks
import HomeStack from './HomeStack'
import SettingsStack from './SettingsStack'

//Screens
import Home from '../screens/Home';
import Settings from '../screens/Settings/Settings';

const Tab = createBottomTabNavigator();

export default function Navigations(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"

        tabBarOptions={{
          inactiveTintColor:'#d5d5d5',
          activeTintColor:'#0057A5',
        }}

        screenOptions={(rutas) => ({
          tabBarIcon: ({color}) => screenOptions(rutas,color),
        })}
      >
        <Tab.Screen 
          name="home"
          component={HomeStack}
          options={{ title: 'Servicios'}}
          />
        <Tab.Screen
          name="settings"
          component={SettingsStack}
          options={{ title: 'Ajustes'}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function  screenOptions(rutas, color){
  let iconName = 'access-point-check';
  let {name} = rutas.route;
  console.log(name);
  switch(name) {
    case "home":
      iconName="format-list-checkbox";
    break;
    case "settings":
      iconName="account-details";
    break;
    default:
      break;
  }

  return (
    <Icon type='material-community' name={iconName} size={26} color={color} />
  );
}