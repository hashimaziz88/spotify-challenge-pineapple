import React from "react";
import { View, Image} from 'react-native';

const ImageComponent: React.FC = () => {
  return (

    <View>
        <Image resizeMode="cover" source={require('../../../assets/images/header.jpg')}/>
    </View>
    );
    };
    

export default ImageComponent;