import React, { useContext } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Splash from './src/pages/Splash';
import Home from './src/pages/Home';
import MenuProvider from './src/contexts/MenuProvider';
import MenuButton from './src/components/MenuButton';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <MenuProvider>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen 
              name="Splash"
              component={Splash}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerStyle: {
                  backgroundColor: '#036B52',
                },
                headerTitle: () => (
                    <View style={styles.container}>
                      <Image style={styles.logo}
                        source={require('./src/assets/images/logo.png')} />
                      <View style={styles.menu}>
                        <TouchableOpacity>
                          <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                        <MenuButton />
                      </View>
                    </View>
                )
              }}
            />
          </Stack.Navigator>
        </MenuProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '110%',
    borderBottomWidth: 7,
    borderBottomColor: '#2FC18C',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    marginLeft: 120
  },
  logo : {
    marginLeft: 50,
    width: 100,
    height: 70,
  },
  menuImg: {
    width: 30,
    height: 30,
  },
  login: {
    color:  '#9ae6ca',
  }
});
