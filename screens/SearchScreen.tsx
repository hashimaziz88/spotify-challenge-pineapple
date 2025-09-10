// SearchScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageComponent from './components/search/ImageComponent';

const SearchScreen: React.FC = () => {

  const insets = useSafeAreaInsets();

  return (
    
    <ScrollView>
      <ImageComponent />
      <Text style={styles.text}>Search Screen</Text>
    </ScrollView>
  );
};

export default SearchScreen;

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
