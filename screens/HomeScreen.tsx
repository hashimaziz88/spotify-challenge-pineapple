// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <MaterialDesignIcons name="home" color="#ff0000" size={20} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
