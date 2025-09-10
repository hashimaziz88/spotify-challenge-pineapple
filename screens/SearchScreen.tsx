// SearchScreen.tsx
import React from 'react';
import { Text, StyleSheet,ScrollView } from 'react-native';
import ImageComponent from './components/search/ImageComponent';

const SearchScreen: React.FC = () => {


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
