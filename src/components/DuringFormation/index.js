import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DuringFormation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Durante toda a formação</Text>
      <View style={styles.content}>
        <Text style={styles.contentTextImg}>{`</>`}</Text>
        <Text style={styles.contentText}>Desenvolvimento de software na vida real</Text>
      </View>
      <View style={styles.content}>
        <Image 
          style={styles.contentImg}
          source={require('../../assets/images/heart.png')} />
        <Text style={styles.contentText}>Soft skills</Text>
      </View>
      <View style={styles.content}>
        <Image 
          style={styles.contentImg}
          source={require('../../assets/images/airplane.png')} />
        <Text style={styles.contentText}>Metodologias ágeis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 60,
   backgroundColor: '#D3D3D3',
   width: '100%',
   paddingLeft: 40,
  },
  title: {
    color: '#036B52',
    marginBottom: 40,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    marginTop: 40
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  contentTextImg: {
    color: '#2FC18C',
    fontSize: 30,
    width: 50,
    height: 50,
    marginRight: 25
  },
  contentText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
    maxWidth: '100%',
  },
  contentImg: {
    width: 50,
    height: 50,
    marginRight: 25
  },
});

export default DuringFormation;