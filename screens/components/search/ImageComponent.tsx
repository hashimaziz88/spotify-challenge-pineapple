import React from "react";
import { Image, View } from 'react-native';
import ImageComponentStyles from './styles/ImageComponentStyles';
import { Text } from "@react-navigation/elements";


const ImageComponent: React.FC = () => {
  return (
    <View style={ImageComponentStyles.container}>
      <Image
        source={require('../../../assets/images/header.jpg')}
        style={ImageComponentStyles.image}
        resizeMode="cover"
      />
      <Text style={ImageComponentStyles.text}>AKA</Text>
      <View style={ImageComponentStyles.bottomBorder} />
    </View>
  );
};
    

export default ImageComponent;