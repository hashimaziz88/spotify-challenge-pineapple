import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const ImageComponentStyles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.386,
    alignSelf: 'center',

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
});

export default ImageComponentStyles;