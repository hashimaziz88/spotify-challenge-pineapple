// SearchScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, LayoutChangeEvent, Dimensions } from 'react-native';
import ImageComponent from './components/search/ImageComponent';
import GradientComponent from './components/search/GradientComponent';
import ArtistSectionComponent from './components/search/ArtistSectionComponent';

const { height: windowHeight } = Dimensions.get('window');

const SearchScreen: React.FC = () => {
  const [imageHeight, setImageHeight] = useState(0);

  const handleImageLayout = (event: LayoutChangeEvent) => {
    setImageHeight(event.nativeEvent.layout.height);
  };

  const gradientHeight = windowHeight - imageHeight;

  return (
    <ScrollView style={styles.container}>
      <View onLayout={handleImageLayout}>
        <ImageComponent />
      </View>
      <GradientComponent height={gradientHeight > 0 ? gradientHeight : windowHeight * 0.6} />
        <ArtistSectionComponent />
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
