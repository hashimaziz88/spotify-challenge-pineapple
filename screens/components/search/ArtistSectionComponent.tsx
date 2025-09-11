import { Text } from "@react-navigation/elements";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import React from "react";
import { Image, View } from 'react-native';
import ArtistSectionComponentStyles from "../search/styles/ArtistSectionComponentStyles";

const ArtistSectionComponent: React.FC = () => {
  return (
    <View style={ArtistSectionComponentStyles.container}>
      <View style={ArtistSectionComponentStyles.tabRow}>
        <View style={{ position: 'relative' }}>
          <Text style={[ArtistSectionComponentStyles.tab, ArtistSectionComponentStyles.activeTab]}>Music</Text>
          <View style={ArtistSectionComponentStyles.underlineContainer}>
            <View style={ArtistSectionComponentStyles.underline} />
          </View>
        </View>
        <View style={{ position: "relative" }}>
          <Text style={ArtistSectionComponentStyles.tab}>Events</Text>
          <View style={ArtistSectionComponentStyles.underlineContainer}>
          </View>
        </View>
      </View>
      <View style={ArtistSectionComponentStyles.artistRow}>
        <View style={ArtistSectionComponentStyles.bubble}>
          <Image
            source={require("../../../assets/images/header.jpg")}
            style={ArtistSectionComponentStyles.artistImage}
          />
        </View>
        <View style={ArtistSectionComponentStyles.artistInfo}>
          <Text style={ArtistSectionComponentStyles.artistTitle}>You liked</Text>
          <View style={ArtistSectionComponentStyles.artistMetaRow}>
            <MaterialDesignIcons name="heart" size={18} color="#1ED760" style={ArtistSectionComponentStyles.heartIcon} />
            <Text style={ArtistSectionComponentStyles.artistMeta}>28 songs • 9 releases • AKA</Text>
          </View>
        </View>
      </View>
    </View>
  );
};



export default ArtistSectionComponent;
