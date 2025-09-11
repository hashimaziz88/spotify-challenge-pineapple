import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const ImageComponentStyles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.386,
    overflow: 'hidden',
    backgroundColor: '#181818',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    borderBottomColor: '#b34141ff',
    borderBottomWidth: 2,
    borderStyle: 'solid', // Add this

  },
  image: {
    width: '100%',
    height: '150%',
  },
});

export default ImageComponentStyles;