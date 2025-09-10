import React from "react";
import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const GradientComponent: React.FC<{ height?: number }> = ({ height }) => (
  <LinearGradient
    colors={["#2B2620", "#121212"]}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    style={[styles.gradient, height ? { height } : { minHeight: 200 }]}
  />
);

const styles = StyleSheet.create({
  gradient: {
    width: width,
  },
});

export default GradientComponent;