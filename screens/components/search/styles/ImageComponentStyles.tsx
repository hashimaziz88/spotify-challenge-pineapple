import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const ImageComponentStyles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.385,
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
    height: '150%',
  },
  text: {
    position: 'absolute',
    bottom: 0,
    left: 12.75,
    color: '#ffffff',
    fontSize: 60,
    fontFamily: 'SpotifyMix-Bold',
    
    // textShadowOffset: { width: 2, height: 2 },
  },
});

export default ImageComponentStyles;