import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

function  TalkingAboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confira o que andam falando sobre nós</Text>
      <Text style={styles.titleDecoration}></Text>
      <View style={styles.contentImg}>
        <TouchableOpacity 
          style={{width: 150, height: 150, backgroundColor: '#FFF'}}
          onPress={() => Linking.openURL('https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2020/03/22/escola-de-programacao-banca-estudos-de-alunos-e-so-recebe-se-ele-conseguir-trabalho.ghtml')}>
          <Image
            style={{width: 150, height: 150}} 
            source={require('../../assets/images/rede-globo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => Linking.openURL('https://exame.com/revista-exame/temporada-de-caca-aos-devs/')}>
          <Image
            style={{width: 150, height: 150, marginLeft: 27}} 
            source={require('../../assets/images/exame.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => Linking.openURL('https://www.istoedinheiro.com.br/startup-que-forma-desenvolvedor-e-cobra-apos-aluno-conseguir-emprego-capta-r-42-milhoes/')}>
          <Image
            style={styles.img} 
            source={require('../../assets/images/istoe.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www1.folha.uol.com.br/mpme/2020/01/empresarios-contam-como-adaptaram-ao-brasil-ideias-de-negocio-do-exterior.shtml')}>
          <Image
            style={{width: 150, height: 150,  marginTop: 30}} 
            source={require('../../assets/images/folha.jpg')}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  title: {
    marginTop: 120,
    color: '#525252',
    fontSize: 36,
    fontWeight: '300',
    lineHeight: 41,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 90
  },
  titleDecoration: {
    borderTopWidth: 2,
    borderTopColor: '#2FC18C',
    marginLeft: 136,
    width: 150,
  },
  contentImg: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img:{
    width: 150,
    height: 150, 
    marginRight: 30, 
    marginTop: 30,
    // maxWidth: 200,
    // maxHeight: 150,
    backgroundColor: 'red'
  },
});

export default  TalkingAboutUs;