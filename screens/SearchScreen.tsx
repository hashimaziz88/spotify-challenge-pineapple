// SearchScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, LayoutChangeEvent, Dimensions } from 'react-native';
import ImageComponent from './components/search/ImageComponent';
import GradientComponent from './components/search/GradientComponent';
import ArtistSectionComponent from './components/search/ArtistSectionComponent';
import ArtistSongsComponent from './components/search/ArtistSongsComponent';

const { height: windowHeight } = Dimensions.get('window');

const SearchScreen: React.FC = () => {
  const [imageHeight, setImageHeight] = useState(0);

  const handleImageLayout = (event: LayoutChangeEvent) => {
    setImageHeight(event.nativeEvent.layout.height);
  };


  return (
    <ScrollView style={styles.container}>
      <View onLayout={handleImageLayout}>
        <ImageComponent />
      </View>
      <GradientComponent/>
      <ArtistSectionComponent />
      <ArtistSongsComponent />

    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
