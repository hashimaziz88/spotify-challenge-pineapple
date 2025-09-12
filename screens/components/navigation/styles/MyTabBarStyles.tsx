import { StyleSheet } from 'react-native';

const MyTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#131313',
  },
  pressable: {
    flex: 1,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'SpotifyMix-Regular',
  },
});

export default MyTabBarStyles;
