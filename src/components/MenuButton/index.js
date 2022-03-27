import React, { useContext } from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native'
import { MenuContext } from '../../contexts/MenuContext';

function MenuButton() {
  const { menuVisible, setMenuVisible } = useContext(MenuContext);
  const handlePress = () => {
    if(menuVisible){
      setMenuVisible(false);
    } else{
      setMenuVisible(true);
    }
  };
  return (
    <TouchableOpacity onPress={() => handlePress()}>
    <Image style={styles.menuImg}
      source={require('../../assets/images/menu.png')} />
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuImg: {
    width: 30,
    height: 30,
  },

});

export default MenuButton;