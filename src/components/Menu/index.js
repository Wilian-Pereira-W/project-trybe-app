import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Menu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerBtn}>
        <Text style={styles.containerBtnText}>Formação</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.containerBtn}>
        <Text style={styles.containerBtnText}>Investimento</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.containerBtn}>
        <Text style={styles.containerBtnText}>Contrate Trybers</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.containerBtn}>
        <Text style={styles.containerBtnText}>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.containerBtn}>
        <Text style={styles.containerBtnText}>Trabalhe conosco</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.containerBtn}>
        <Text style={styles.containerBtnText}>Dúvidas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#036B52',
    height: 215,
    zIndex: 2
  },
  containerBtn: {
    marginTop: 7,
    marginBottom: 7
  },
  containerBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'sans-serif'
  },
});

export default Menu;