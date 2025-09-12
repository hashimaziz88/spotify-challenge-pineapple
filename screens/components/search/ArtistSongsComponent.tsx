// ArtistSongsComponent.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

const { height } = Dimensions.get('window');
const ArtistSongsComponent: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular</Text>
      <MaterialDesignIcons name="music-note" color="#ff0000" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#131313',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'SpotifyMix-Bold',
  },
});

export default ArtistSongsComponent;
