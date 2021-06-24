import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Index'
import { Menu } from './src/components/Menu'

export default function App() {
  return (
    <>
      <View style={styles.menu}>
      <Menu />
        </View>
      <View style={styles.container}>
          <Main />  
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  menu: {
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'red',
  },container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
