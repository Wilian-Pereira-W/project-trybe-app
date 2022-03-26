import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function CarouselRender( {item} ) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img}
          source={{uri: item.imagens}}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.turma}</Text>
          <Text style={styles.hired} numberOfLines={2}>{item.hired}</Text>
        </View>
      </View>
      <Text style={styles.testimonyText} numberOfLines={15}>{item.testimony}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderWidth: 0.1,
    padding: 20,
    width: 280,
    backgroundColor: '#fff',
    height: 2,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 40
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'sans-serif',
    marginBottom: 10
  },
  hired: {
      width: 140,
      fontSize: 13,
      fontWeight: 'bold',
      color: '#000',
      fontFamily: 'sans-serif',
      marginTop: 10
  },
    testimonyText: {
    marginTop: 30,
    marginBottom: 15,
    color: '#000',
    fontSize: 12,
    lineHeight: 24,
    fontWeight: '300'
  }
});

export default CarouselRender;
