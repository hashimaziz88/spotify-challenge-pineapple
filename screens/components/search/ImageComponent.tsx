import React from "react";
import { Image, View } from 'react-native';
import ImageComponentStyles from './styles/ImageComponentStyles';


const ImageComponent: React.FC = () => {
  return (
    <View style={ImageComponentStyles.container}>
      <Image
        source={require('../../../assets/images/header.jpg')}
        style={ImageComponentStyles.image}
        resizeMode="cover"
      />
    </View>
  );
};
    

export default ImageComponent;