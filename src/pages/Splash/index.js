import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image, View, StyleSheet } from 'react-native';

function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
      setTimeout(() => {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}]
        }))
      }, 1500);
    }, []);
    return (
      <View style={styles.container}>
         <Image 
           style={styles.splashImg}
           source={require('../../assets/images/logo.png')}
         />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#036B52'
  },
  splashImg: {
  }
});

export default Splash;
