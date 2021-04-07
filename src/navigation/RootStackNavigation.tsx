import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../styles/colors';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumScreen from '../screens/AlbumScreen';
import MainTabNavigation from './MainTabNavigation';
import { RootStackParamList } from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.PRIMARY,
          },
          headerTintColor: colors.G_0,
        }}
      >
        <RootStack.Screen name='Main' component={MainTabNavigation} />
        <RootStack.Screen name='Album' component={AlbumScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
