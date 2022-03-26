import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function   WeTeachToWork() {
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
          <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/work.png')} />
          <Text numberOfLines={2} style={styles.contentProgrammingText}>Ensinamos a trabalhar</Text>
          {!visibleModal ? 
            ( <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/chevron-1.png')} />) : 
            ( <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/chevron-2.png')} />)}
        </TouchableOpacity>
        {visibleModal && (
          <View style={styles.contentProgram}>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Ensinamos tudo que o mercado busca: conhecimento em programação e soft skills.
            </Text>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Preparamos você para encarar todos os desafios encontrados nos processos seletivos.
            </Text>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Te conectamos com as melhores empresas para se trabalhar. Você começa um relacionamento com o mercado já ao longo do curso.
            </Text>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  contentBtn: {
    backgroundColor: '#41197f',
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  contentProgram:{
    backgroundColor: '#41197f',
    width: 300,
    padding: 10,
  },
  contentProgramText: {
    color: '#fff',
    marginBottom: 20,
  },
  contentProgrammingImg: {
    width: 30,
    height: 30,
  },
  contentProgrammingText:{
    fontSize: 20,
    width: 150,
    lineHeight: 22,
    fontWeight: '300',
    color: '#FFF'
  }
});

export default   WeTeachToWork;
