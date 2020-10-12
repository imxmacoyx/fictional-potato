import React, {UseState, useEffect} from 'react';
import {View, Text}  from 'react-native';
import UserLogged from './UserLogged';

export default function Settings(){

  //const [login, setLogin] = useState(null);

  //Verificación de usuario si esta logeado
  useEffect( () => {
    //Método para verificación de usuario
  }, []);

  //if(login === null ) return <Text> Cargando usuario...</Text>

  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}