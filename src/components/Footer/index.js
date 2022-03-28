import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';

function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contentTitle}>
          <Image style={styles.logoImg}
            source={require('../../assets/images/logo.png')}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.bcorporation.net/pt-br/find-a-b-corp/company/trybe/')}
          >
            <Image style={styles.certifiedImg}
              source={{
                uri: 'https://moodle.com/wp-content/uploads/2021/09/B-Corp_header@2x.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.betrybe.com/trabalhe-conosco')}
          >
            <Text style={styles.optionsText}>Tabalhe conosco</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://ajuda.betrybe.com/hc/pt-br')}
          >
            <Text style={styles.optionsText}>Fale com a gente</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.betrybe.com/empresas-parceiras')}
          >
            <Text style={styles.optionsText}>Quero ser empresa parecira</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://blog.betrybe.com/')}
          >
            <Text style={styles.optionsText}>Blog</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.instagram.com/betrybe/')}
            style={{width: 30, height: 30, margin:5, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50, width:20, height:20}}
              source={require('../../assets/images/instagram.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.facebook.com/betrybe')}
            style={{width: 30, height: 30, margin:5, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50, width:20, height:20}}
              source={require('../../assets/images/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://twitter.com/betrybe')}
            style={{width: 30, height: 30, margin:5, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50, width:20, height:20}}
              source={require('../../assets/images/twitter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.linkedin.com/school/betrybe/')}
            style={{width: 30, height: 30, margin:5, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50, width:20, height:20}}
              source={require('../../assets/images/linkedin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.youtube.com/channel/UCZeN5eLUwiIyMaQjKR_ydVg')}
            style={{width: 30, height: 30, margin:5, backgroundColor: '#2FC18C', alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
            <Image style={{borderRadius: 50, width:20, height:20}}
              source={require('../../assets/images/youtube.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.betrybe.com/compliance')}
          >
            <Text style={styles.optionsText1}>Compliance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.betrybe.com/politica-de-privacidade')}
          >
            <Text style={styles.optionsText1}>Política de Privacidade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.betrybe.com/termos-de-uso')}
          >
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
