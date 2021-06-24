import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './Button'

export const Menu = () => {
  return (
    <View>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Imagenconeenl.png')} /></View>

    <View style={styles.menu}>
      <Button title='Eventos' /> 
      <Button title='Calendario' />
      <Button title='Talleres' />
      <Button title='Expociciones' />
      <Button title='Resintos' />
      <Button title='Rutas' />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 23,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 50,
  },
  menu: {
    marginBottom: 50,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
