import { Text } from "@react-navigation/elements";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import React from "react";
import { Image, View, useWindowDimensions } from 'react-native';
import ArtistSectionComponentStyles from "./styles/ArtistSectionComponentStyles";

const ArtistSectionComponent: React.FC = () => {
  const { width } = useWindowDimensions();
  const styles = ArtistSectionComponentStyles(width);

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        <View style={{ position: 'relative' }}>
          <Text style={[styles.tab, styles.activeTab]}>Music</Text>
          <View style={styles.underlineContainer}>
            <View style={styles.underline} />
          </View>
        </View>
        <View style={{ position: "relative" }}>
          <Text style={styles.tab}>Events</Text>
          <View style={styles.underlineContainer}>
          </View>
        </View>
      </View>
      <View style={styles.artistRow}>
        <View style={styles.bubbleContainer}>
          <View style={styles.bubble}>
            <Image
              source={require("../../../assets/images/header.jpg")} // Ensure this path is correct
              style={styles.artistImage}
            />
          </View>
          {/* Heart icon wrapped in its green circle container */}
          <View style={styles.overlayHeartIconContainer}>
            <MaterialDesignIcons name="heart" style={styles.overlayHeartIcon} />
          </View>
        </View>
        <View style={styles.artistInfo}>
          <Text style={styles.artistTitle}>You liked</Text>
          <Text style={styles.artistMeta}>28 songs • 9 releases • AKA</Text>
        </View>
      </View>
    </View>
  );
};

export default ArtistSectionComponent;