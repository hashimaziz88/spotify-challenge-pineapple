import { StyleSheet, useWindowDimensions } from 'react-native';

const ArtistSectionComponentStyles = (width: number) => { // Accept width as a parameter
  // Define a base size for scaling, using a cap for larger screens
  const baseWidth = width > 768 ? 768 : width;

  const bubbleSize = baseWidth * 0.12; // Size for the circular image bubble
  const heartContainerSize = baseWidth * 0.07; // Size for the green circle around the heart
  const heartIconSize = baseWidth * 0.04; // Size for the white heart icon itself

  return StyleSheet.create({
    container: {
      backgroundColor: '#131313',
      paddingHorizontal: width * 0.05, // 4% of screen width
      paddingBottom: width * 0.04, // 4% of screen width
    },
    tabRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: width * 0.025, // 2.5% of screen width
    },
    tab: {
      color: '#b3b3b3',
      fontSize: baseWidth * 0.045, // Responsive font size
      fontWeight: '500',
      marginRight: baseWidth * 0.06, // Responsive margin based on base width
      paddingBottom: width * 0.02, // 2% of screen width
      fontFamily: 'SpotifyMix-Regular',
    },
    activeTab: {
      color: '#fff',
    },
    underlineContainer: {
      position: 'absolute',
      bottom: -10,
      left: 0,
      right: 0,
      alignItems: 'flex-start',
      height: 3,
    },
    underline: {
      width: '70%',
      height: '100%',
      backgroundColor: '#1ED760',
      borderRadius: 1.5,
    },
    artistRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: width * 0.03,
      paddingBottom: width * 0.04,
    },
    bubbleContainer: {
      width: bubbleSize,
      height: bubbleSize,
      marginRight: baseWidth * 0.03, // 3% of the base width
      position: 'relative', // Allow absolute positioning for children
    },
    bubble: {
      width: '100%', // Take full width of bubbleContainer
      height: '100%', // Take full height of bubbleContainer
      borderRadius: bubbleSize / 2,
      overflow: 'hidden', // Crucial for a clean circular image
    },
    artistImage: {
      width: '100%',
      height: '100%',
    },
    // The green circle with the white heart
    overlayHeartIconContainer: {
      position: 'absolute',
      bottom: -heartContainerSize * 0.1, // Adjusted for exact overlap
      right: -heartContainerSize * 0.1, // Adjusted for exact overlap
      width: heartContainerSize,
      height: heartContainerSize,
      borderRadius: heartContainerSize / 2,
      backgroundColor: '#1ED760', // Green background
      borderWidth: 1.5, // Thin white border
      borderColor: '#140002',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayHeartIcon: {
      fontSize: heartIconSize,
      color: '#FFFFFF', // White heart icon
    },
    artistInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    artistTitle: {
      color: '#fff',
      fontSize: baseWidth * 0.04,
      fontWeight: '700',
      marginBottom: baseWidth * 0.005,
    },
    artistMeta: {
      color: '#b3b3b3',
      fontSize: baseWidth * 0.03,
      fontWeight: '500',
    },
  });
};

export default ArtistSectionComponentStyles;