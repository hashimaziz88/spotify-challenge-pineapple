import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, ScrollView, ViewComponent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ImageComponent: React.FC = () => {

  const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({
    container: {
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
    },
    image: {
        
    },
    });
  return (

    <View style={styles.container}>
        <Image resizeMode="cover" style={styles.image} source={require('../../../assets/images/header.jpg')}/>
    </View>
    );
    };
    

export default ImageComponent;