import React from "react";
import { Image, View, useWindowDimensions, StyleSheet } from 'react-native';
import { Text } from "@react-navigation/elements";


const ImageComponent: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: isPortrait ? height * 0.385 : height * 0.6,
      alignSelf: 'center',
      overflow: 'hidden',
    },
    bottomBorder: {
      width: '100%',
      height: 10,
      borderColor: '#b34141ff',
      borderTopWidth: 2,
    },
    image: {
      width: '100%',
      height: isPortrait ? '150%' : '100%',
    },
    text: {
      position: 'absolute',
      bottom: 0,
      left: 12.75,
      color: '#ffffff',
      fontSize: isPortrait ? 60 : 40,
      fontFamily: 'SpotifyMix-Bold',
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/header.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>AKA</Text>
      <View style={styles.bottomBorder} />
    </View>
  );
};

export default ImageComponent;