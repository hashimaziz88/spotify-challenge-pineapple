
import React from "react";
import { StyleSheet, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Button, Text } from "@react-navigation/elements";

const GradientComponent: React.FC<{ height?: number }> = ({ height }) => {
  const { width, height: windowHeight } = useWindowDimensions();
  const isPortrait = windowHeight >= width;
  // Use more of the screen in portrait, less in landscape
  const gradientHeight = height
    ? height * (isPortrait ? 0.22 : 0.18)
    : isPortrait
      ? windowHeight * 0.22
      : windowHeight * 0.18;

  const styles = StyleSheet.create({
    gradient: {
      width: width,
      height: gradientHeight,
      minHeight: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: 120,
      backgroundColor: 'transparent',
      marginTop: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'SpotifyMix-Bold',
    },
    icon: {
      color: '#FFFFFF',
      fontSize: 30,
      margin: 5,
    }
  });

  return (
    <LinearGradient
      colors={["#2B2620", "#131313"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <Text>587.9K monthly listeners</Text>
      <MaterialDesignIcons name="shuffle-variant" style={styles.icon} />
      <MaterialDesignIcons name="dots-horizontal" style={styles.icon} />
      <MaterialDesignIcons name="pause-circle" style={styles.icon} />
      <Button style={styles.button} ><Text style={styles.buttonText}>Follow</Text></Button>
    </LinearGradient>
  );
};

export default GradientComponent;