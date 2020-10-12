import { Assets } from '@react-navigation/stack';
import React from 'react';
import { Formik,useFormikContext, useField } from 'formik';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as Yup from 'yup';
import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const CustomInput = ({fieldName,...props}) => {
  const [field, meta] =  useField(fieldName);
  return(
    <>
    <TextInput
    style={styles.input}
    onChange={field.onChange(fieldName)}
    onBlur={field.onBlur(fieldName)}
    value={field.value}
    {...props}
    />
    {meta.error && meta.touched && (
      <Text style={{color: 'red'}}> {meta.error} </Text>
    )}
    </>
  );
}

const SingUpForm = () => {
  const {submitForm} = useFormikContext();
  return(
    <>
    <Text>Correo electrónico:</Text>
    <CustomInput fieldName="email" />
    <Text>Contraseña:</Text>
    <CustomInput fieldName="password" />
    <Button onPress={submitForm} title='Ingresar' />
    </>
  );
}


export default function AuthScreen() {
  return(
    <View style={styles.container}>

      <Image
        source={require('../../assets/img/actiun-logo.png')}
        style={styles.logo}
      />

      <Formik
        validationSchema={Yup.object({
          email: Yup.string()
          .email('Correo inválido')
          .required('El correo es requerido'),
          password: Yup.string()
          .required('La contraseña es requerido')
        })}

        initialValues =
        {
          {
          email: '',
          password: '',
          }
        }
      >
        <SingUpForm />
      </Formik>
    </View>
  );
}

const styles =  StyleSheet.create({
  logo: {
    width: '100%',
    height: 100,
    marginTop: 20,
    resizeMode: 'contain',
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:12,
    backgroundColor:'#eee',
    margin:20,
    fontSize: 16,
  }, 
  texts:{
    fontSize: 18,
    padding:10,
  },
});