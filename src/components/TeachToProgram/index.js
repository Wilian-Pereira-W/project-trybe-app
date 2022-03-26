import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function TeachToProgram() {
  const [visibleModal, setVisibleModal] = useState(false);

  const handlePress = (visibleModal) => {
    if(visibleModal) {
      setVisibleModal(false);
    } else {
      setVisibleModal(true);
    }
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.contentBtn} onPress={() => handlePress(visibleModal)}>
          <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/terminal.png')} />
          <Text numberOfLines={2} style={styles.contentProgrammingText}>Ensimamos a programar</Text>
          {!visibleModal ? 
            ( <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/chevron-1.png')} />) : 
            ( <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/chevron-2.png')} />)}
        </TouchableOpacity>
        {visibleModal && (
          <View style={styles.contentProgram}>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Nosso currículo é desenhado em parceria com pessoas referência em tecnologia e as empresas mais buscadas para se trabalhar do mercado.
            </Text>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Você dominará as principais habilidades técnicas esperadas para desenvolvimento web.
            </Text>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Fazemos melhorias contínuas, atualizando nossos conteúdos com base nos feedbacks que recebemos de você e do mercado.
            </Text>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  contentBtn: {
    backgroundColor: '#2FC18C',
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  contentProgram:{
    backgroundColor: '#2FC18C',
    width: 300,
    padding: 10,
  },
  contentProgramText: {
    color: '#fff',
    marginBottom: 20,
  },
  contentProgrammingImg: {
    width: 40,
    height: 40,
  },
  contentProgrammingText:{
    fontSize: 20,
    width: 150,
    lineHeight: 22,
    fontWeight: '300',
    color: '#FFF'
  }
});

export default TeachToProgram;