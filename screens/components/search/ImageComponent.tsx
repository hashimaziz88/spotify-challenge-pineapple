import React from "react";
import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = 340;

const ImageComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/header.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: IMAGE_HEIGHT,
    overflow: 'hidden',
    backgroundColor: '#181818',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '150%', // Make image taller than container
    marginBottom: -IMAGE_HEIGHT * 0.18, // Shift image up so bottom is cut off
  },
});
    

export default ImageComponent;