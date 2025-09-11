import React from "react";
import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Button, Text } from "@react-navigation/elements";

const { width } = Dimensions.get('window');

const GradientComponent: React.FC<{ height?: number }> = ({ height }) => (
  <LinearGradient
    colors={["#2B2620", "#131313"]}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    style={[styles.gradient, height ? { height: height * 0.18 } : { minHeight: 200 }]}>
  <Text>587.9K monthly listeners</Text>
  <MaterialDesignIcons name="shuffle-variant"/>
  <MaterialDesignIcons name="dots-horizontal"/>
  <MaterialDesignIcons name="pause-circle" />
  <Button style={styles.button} ><Text style={styles.buttonText}>Follow</Text></Button>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradient: {
    width: width,
  },
  button: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 120,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'SpotifyMix-Bold',
  }
});

export default GradientComponent;