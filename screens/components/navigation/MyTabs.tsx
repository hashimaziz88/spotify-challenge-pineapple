// MyTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './MyTabBar';
import SearchScreen from '../../SearchScreen';
import HomeScreen from '../..//HomeScreen';
import ProfileScreen from '../..//ProfileScreen';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Your Library" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
