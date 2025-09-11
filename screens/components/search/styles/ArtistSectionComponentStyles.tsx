import { StyleSheet } from 'react-native';

const ArtistSectionComponentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    paddingHorizontal: 16,
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  tab: {
    color: '#b3b3b3',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 24,
    paddingBottom: 10,
    fontFamily: 'SpotifyMix-Regular',
  },
  activeTab: {
    color: '#fff',
    },
    // Add underline container for green underline with black border
    underlineContainer: {
      position: 'relative',
      height: 4,
      alignItems: 'flex-start',
    },
    underline: {
      width: '70%',
      height: 4.5,
      backgroundColor: '#1ED760',
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#140005',
    },
  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    },
  bubble: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#181818',
  },
  artistImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  artistInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  artistTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  artistMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 6,
  },
  artistMeta: {
    color: '#b3b3b3',
    fontSize: 13,
  },
});

export default ArtistSectionComponentStyles;