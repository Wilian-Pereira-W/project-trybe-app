import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contentTitle}>
          <Image style={styles.logoImg}
            source={require('../../assets/images/logo.png')}
          />
          <Image style={styles.certifiedImg}
            source={{
              uri: 'https://moodle.com/wp-content/uploads/2021/09/B-Corp_header@2x.png',
            }}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.optionsText}>Tabalhe conosco</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText}>Fale com a gente</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText}>Quero ser empresa parecira</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText}>Blog</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center'}}>
          <TouchableOpacity style={{width: 60, height: 60, margin:10, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50}}
              source={require('../../assets/images/instagram.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 60, height: 60, margin:10, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50}}
              source={require('../../assets/images/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 60, height: 60, margin:10, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50}}
              source={require('../../assets/images/twitter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 60, height: 60, margin:10, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50}}
              source={require('../../assets/images/linkedin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 60, height: 60, margin:10, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50}}
              source={require('../../assets/images/youtube.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.optionsText1}>Compliance</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText1}>Política de Privacidade</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText1}>Termo de Uso</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionsText1}>Desabilitar Cookies</Text>
          </TouchableOpacity>
          <View style={{marginTop: 50}}>
            <Text style={styles.optionsText2}>Trybe Desenvolvimento de Software LTDA</Text>
            <Text style={styles.optionsText2}>CNPJ 34.389.271/0001-00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#444955',
    width: '100%',
    height: 700,
  },
  contentTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  logoImg: {
    width: 150,
    maxHeight: 100,
    marginRight: 10,
    marginLeft: 85
  },
  certifiedImg: {
    width: 30,
    height: 60,
  },
  optionsText: {
    textAlign: 'center',
    fontSize: 12,
    color: "#FFF",
    lineHeight: 12,
    marginTop: 20
  },
  optionsText1: {
    textAlign: 'center',
    fontSize: 12,
    color: "#D3D3D3",
    lineHeight: 12,
    marginTop: 20
  },
  optionsText2: {
    textAlign: 'center',
    fontSize: 12,
    color: "#D3D3D3",
    lineHeight: 12,
    marginTop: 20
  },
});

export default Footer;
