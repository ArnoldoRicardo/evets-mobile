import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCalendar } from '@fortawesome/free-solid-svg-icons'


export default ({ title, icon, ...rest }) => {

  const [background, setBackground] = useState('#eee');
  

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: background,
    borderRadius: 5,
    borderColor: '#000',
  },
});
  return <View style={styles.button}>
      <FontAwesomeIcon icon={ faCoffee } />
    <Text>{title}</Text>
    </View>;
}


