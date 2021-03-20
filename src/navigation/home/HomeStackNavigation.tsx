import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import colors from '../../styles/colors';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.PRIMARY,
        },
        headerTintColor: colors.G_0,
      }}
    >
      <HomeStack.Screen name='HOME' component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
