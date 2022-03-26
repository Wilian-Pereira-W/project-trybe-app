import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Modules() {
  return (
    <View style={styles.container}>
      <Text style={styles.modulo1}>Módulo 1: </Text>
      <Text style={styles.moduloText}>Fundamentos de desenvolvimento web</Text>
      <View style={styles.shadow} />
      <Text style={styles.modulo2}>Módulo 2: </Text>
      <Text style={styles.moduloText}>Desenvolvimento Front-end</Text>
      <View style={styles.shadow} />
      <Text style={styles.modulo3}>Módulo 3: </Text>
      <Text style={styles.moduloText}>Desenvolvimento Back-end</Text>
      <View style={styles.shadow} />
      <Text style={styles.modulo4}>Módulo 4: </Text>
      <Text style={styles.moduloText}>Ciência da Computação</Text>
      <View style={styles.shadow} />
      <View style={styles.contentBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Baixar o Programa de Formação</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 0.1,
    width: '100%',
    height: 500,
  },
  modulo1: {
    color: '#218661',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 45
  },
  modulo2: {
    color: '#006dfb',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 45
  },
  modulo3: {
    color: '#41197f',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 45
  },
  modulo4: {
    color: '#036b52',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 45
  },
  moduloText: {
    color: '#525252',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '300',
    width: '100%',
    paddingLeft: 45,
    marginBottom: 20,
  
  },
  shadow: {
    borderBottomColor:'white',
    borderBottomWidth: 5,
    height: 7,
    opacity: 0.3,
    marginBottom: 20
  },
  contentBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#006dfb',
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 40,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#FFF'
  },

 
});

export default Modules;
