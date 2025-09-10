import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = 340;

const ImageComponentStyles = StyleSheet.create({
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
    height: '150%',
    marginBottom: -IMAGE_HEIGHT * 0.18,
  },
});

export default ImageComponentStyles;