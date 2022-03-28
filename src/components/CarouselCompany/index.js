import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function CarouselCompany( {item} ) {
  return (
    <View style={styles.container}>
        <Image style={styles.img}
          source={item.img}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 250,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    maxHeight: 400,
  }
});

export default CarouselCompany;
