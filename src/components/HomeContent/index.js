import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';


function HomeContent() {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.contentTitle}>A porta de entrada para sua carreira em tecnologia</Text>
          <Text  style={styles.contentText}>Construímos nosso currículo com base no que o mercado de trabalho busca em profissionais de tecnologia.
            Com o Modelo de Sucesso Compartilhado, você tem a opção de começar a pagar apenas quando estiver trabalhando.
          </Text>
          <TouchableOpacity style={styles.contentBtn}>
            <Text style={styles.contentBtnText}>Dê o primeiro passo</Text>
          </TouchableOpacity>
          <Image 
            style={styles.contentImg}
            source={require('../../assets/images/principal.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTitle: {
    width: '80%',
    fontSize: 36,
    fontWeight: '300',
    color: '#525252',
    borderBottomWidth: 2,
    borderBottomColor: '#2FC18C',
  },
  contentText: {
    width: '80%',
    fontSize: 16,
    marginTop: 30,
    fontWeight: '300',
    color: '#525252'
  }, 
  contentBtn: {
    backgroundColor: '#006dfb',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 150,
    marginTop: 20,
  },
  contentBtnText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#FFF'
  },
  contentImg: {
    marginTop: 80,
    maxWidth: '100%',
    maxHeight: 400
  }
});


export default HomeContent;
