import { StyleSheet } from 'react-native';

const MyTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#181818',
  },
  pressable: {
    flex: 1,
  },
  label: {
    textAlign: 'center',
    padding: 10,
    fontFamily: 'SpotifyMix-Black',
  },
});

export default MyTabBarStyles;
