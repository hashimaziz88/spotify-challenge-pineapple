import React from "react";
import { StyleSheet, useWindowDimensions, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Button } from "@react-navigation/elements";

const GradientComponent: React.FC= () => {
  const { width, height } = useWindowDimensions();

  // Define sizes and spacing based on a percentage of the screen's width
  const baseSize = width > 500 ? 500 : width; // Use a cap for tablets/desktops
  const iconSize = baseSize * 0.065; // 6.5% of the base size
  const pauseButtonSize = baseSize * 0.12; // 12% of the base size
  const buttonHeight = baseSize * 0.1; // 10% of the base size
  const buttonPaddingHorizontal = baseSize * 0.05; // 5% of the base size

  const styles = StyleSheet.create({
    gradient: {
      width: '100%',
      // Using a percentage of screen height for vertical space
      height: height * 0.1,
      justifyContent: 'center',
      minHeight: 100, // Ensure a minimum height
    },
    listenersText: {
      color: '#B3B3B3',
      fontFamily: 'SpotifyMix-Light',
      // Font size based on screen width for responsiveness
      fontSize: width * 0.035,
      marginLeft: '5%',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '5%',
    },
    buttonContainer: {
        height: pauseButtonSize, // Responsive height based on a percentage of screen width
        justifyContent: 'center',
    },
    button: {
      borderColor: '#B3B3B3',
      borderWidth: 1,
      borderRadius: 50,
      height: buttonHeight, // Responsive height
      justifyContent: 'center',
      paddingHorizontal: buttonPaddingHorizontal, // Responsive padding
      backgroundColor: 'transparent',
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'SpotifyMix-Bold',
      fontSize: width * 0.035, // Responsive font size
    },
    leftGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dotsIcon: {
      color: '#B3B3B3',
      fontSize: iconSize, // Responsive icon size
      marginLeft: '2.5%', // Responsive margin
    },
    rightGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: width * 0.05, // Responsive gap
    },
    shuffleIcon: {
      color: '#B3B3B3',
      fontSize: iconSize, // Responsive icon size
    },
    pauseButtonCircle: {
      width: pauseButtonSize,
      height: pauseButtonSize,
      borderRadius: pauseButtonSize / 2, // Responsive border radius
      backgroundColor: '#1DB954',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pauseIcon: {
      color: '#131313',
      fontSize: iconSize, // Responsive icon size
    },
  });

  return (
    <LinearGradient
      colors={["#2B2620", "#131313"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <Text style={styles.listenersText}>587.9K monthly listeners</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.leftGroup}>
          <View style={styles.buttonContainer}>
              <Button style={styles.button}>
                  <Text style={styles.buttonText}>Follow</Text>
              </Button>
          </View>
          <MaterialDesignIcons name="dots-horizontal" style={styles.dotsIcon} />
        </View>
        <View style={styles.rightGroup}>
          <MaterialDesignIcons name="shuffle-variant" style={styles.shuffleIcon} />
          <View style={styles.pauseButtonCircle}>
              <MaterialDesignIcons name="pause" style={styles.pauseIcon} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default GradientComponent;