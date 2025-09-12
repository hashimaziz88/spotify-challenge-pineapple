// MyTabBar.tsx
import React from 'react';
import { View } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import MyTabBarStyles from './styles/MyTabBarStyles';
import { useLinkBuilder} from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, PlatformPressable } from '@react-navigation/elements';

const MyTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();

  return (
  <View style={MyTabBarStyles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: string =
          options.tabBarLabel !== undefined
            ? (options.tabBarLabel as string)
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={MyTabBarStyles.pressable}
          >
            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 2 }}>
              {label === 'Home' && (
                <MaterialDesignIcons name="home-variant" color={isFocused ? '#FFFFFF' : '#B4B4B4'} size={24} style={{ marginBottom: 2 }} />
              )}
              {label === 'Search' && (
                <MaterialDesignIcons name="magnify" color={isFocused ? '#FFFFFF' : '#B4B4B4'} size={24} style={{ marginBottom: 2 }} />
              )}
              {label === 'Your Library' && (
                <MaterialDesignIcons name="library-music" color={isFocused ? '#FFFFFF' : '#B4B4B4'} size={24} style={{ marginBottom: 2 }} />
              )}
              <Text style={{ color: isFocused ? '#FFFFFF' : '#B4B4B4', fontSize: 12 }}>
                {label}
              </Text>
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default MyTabBar;
