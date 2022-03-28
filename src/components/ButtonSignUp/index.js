import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

function ButtonSignUp(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text>Inscreva-se agora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#036B52',
    height: 20,
    top: 50,
    left: 0,
  },

});


export default ButtonSignUp;