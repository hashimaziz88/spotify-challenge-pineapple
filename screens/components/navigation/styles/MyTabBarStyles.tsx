import { StyleSheet } from 'react-native';

const MyTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000000ec',
    paddingVertical: 30,
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
