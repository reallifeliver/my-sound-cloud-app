import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PlayListScreen from '../screens/PlayListScreen';
import MusicListScreen from '../screens/MusicListScreen';
import HomeStackNavigation from './home/HomeStackNavigation';
import { RootTabParamList } from '../types/navigation';
import colors from '../styles/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'HomeStack'}
        tabBarOptions={{
          activeTintColor: colors.PRIMARY,
        }}
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: colors.PRIMARY,
        //   },
        //   headerTintColor: colors.G_0,
        // }}
      >
        <Tab.Screen
          name='MusicList'
          component={MusicListScreen}
          options={{
            title: 'MusicList',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                size={size}
                color={color}
                name='musical-notes-outline'
              />
            ),
          }}
        />
        <Tab.Screen
          name='HomeStack'
          component={HomeStackNavigation}
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
    </NavigationContainer>
  );
};

export default RootNavigation;
