import React from "react";
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Button, Text } from "@react-navigation/elements";

const GradientComponent: React.FC= () => {
  const { width, height } = useWindowDimensions();
  const gradientHeight = height;

  const styles = StyleSheet.create({
    gradient: {
      width: width,
      // You can keep a minimum height if needed, or set it based on content
      height: gradientHeight * 0.1, 
      minHeight: 100,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      // Using a percentage for horizontal padding for better responsiveness
      paddingHorizontal: '5%', 
    },
    button: {
      borderColor: '#5B5A5A',
      borderWidth: 2,
      borderRadius: 50,
      // Using a percentage for padding to make it scale with the screen
      paddingHorizontal: '5%', 
      paddingVertical: '2%',
      width: "auto",
      backgroundColor: 'transparent',
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'SpotifyMix-Bold',
      // The font size can be made responsive with a library or a percentage
      // For this example, we'll keep it simple
    },
    icon: {
      color: '#FFFFFF',
      // Using a relative unit or adjusting the font size based on screen width would improve this
      fontSize: 30,
    },
    pauseButton: {
      color: '#00D15E',
      fontSize: 50
    },
    leftGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    rightGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
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
      <View style={styles.buttonsContainer}>
        <View style={styles.leftGroup}>
          <Button style={styles.button}>
              <Text style={styles.buttonText}>Follow</Text>
          </Button>
          <MaterialDesignIcons name="dots-horizontal" style={styles.icon} />
        </View>
        <View style={styles.rightGroup}>
          <MaterialDesignIcons name="shuffle-variant" style={styles.icon} />
          <MaterialDesignIcons name="pause-circle" style={[styles.icon, styles.pauseButton]} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default GradientComponent;