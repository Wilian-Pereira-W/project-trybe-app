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
          <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/psychology.png')} />
          <Text numberOfLines={2} style={styles.contentProgrammingText}>Ensinamos a aprender</Text>
          {!visibleModal ? 
            ( <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/chevron-1.png')} />) : 
            ( <Image style={styles.contentProgrammingImg} source={ require('../../assets/images/chevron-2.png')} />)}
        </TouchableOpacity>
        {visibleModal && (
          <View style={styles.contentProgram}>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Nossas metodologias ativas garantem que você aprenda a aprender colocando a mão na massa.
            </Text>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Você desenvolve projetos com problemas da vida real e vivencia os desafios do mercado de trabalho.
            </Text>
            <Text numberOfLines={5} style={styles.contentProgramText}>
              Com a nossa comunidade digital,  a pessoa estudante  conta com momentos de interações para networking, para aprender ensinando e tirando dúvidas.
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
    backgroundColor: '#036b52',
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  contentProgram:{
    backgroundColor: '#036b52',
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

export default TeachToProgram;
