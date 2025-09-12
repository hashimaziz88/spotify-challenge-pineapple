
import React from "react";
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Button, Text } from "@react-navigation/elements";

const GradientComponent: React.FC= () => {
  const { width, height } = useWindowDimensions();
  // Use more of the screen in portrait, less in landscape
  const gradientHeight = height;

  const styles = StyleSheet.create({
    gradient: {
      width: width,
      height: gradientHeight * 0.1,
      minHeight: 100,
    },
    buttonscontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'middle',
      marginTop: 10,
    },
    button: {
      borderColor: '#5B5A5A',
      borderWidth: 2,
      borderRadius: 50,
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: "auto",
      backgroundColor: 'transparent',
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'SpotifyMix-Bold',
    },
    righticon: {
      color: '#FFFFFF',
      fontSize: 30,
      margin: 5,
    },
    lefticon: {
      color: '#FFFFFF',
      fontSize: 30,
      margin: 5,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 10,
    },
    pauseButton: {
      color: '#00D15E',
      fontSize: 50
    },
  });

  return (
    <LinearGradient
      colors={["#2B2620", "#131313"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >       
     <Text>587.9K monthly listeners</Text>
      <View style={styles.buttonscontainer}>
        <View style={styles.leftContainer}>
          <Button style={styles.button} >
              <Text style={styles.buttonText}>Follow</Text>
          </Button>
          <MaterialDesignIcons name="dots-horizontal" style={styles.lefticon} />
        </View>
        <View style={styles.rightContainer}>
          <MaterialDesignIcons name="shuffle-variant" style={styles.righticon} />
          <MaterialDesignIcons name="pause-circle" style={[styles.righticon, styles.pauseButton]} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default GradientComponent;