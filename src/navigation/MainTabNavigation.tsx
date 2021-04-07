import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types/navigation';
import colors from '../styles/colors';
import PlayListScreen from '../screens/PlayListScreen';
import MusicListScreen from '../screens/MusicListScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name='MusicList'
        component={MusicListScreen}
        options={{
          title: 'MusicList',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons size={size} color={color} name='musical-notes-outline' />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
        }}
        initialParams={{ test: 'test' }}
      />
      <Tab.Screen
        name='PlayList'
        component={PlayListScreen}
        options={{
          title: 'Play List',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name='list-outline' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
