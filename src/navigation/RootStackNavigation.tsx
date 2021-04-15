import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../styles/colors';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumScreen from '../screens/AlbumScreen';
import MainTabNavigation from './MainTabNavigation';
import { RootStackParamList } from '../types/navigation';
import ErrorModal from '../components/common/modal/ErrorModal';
import { useSelector, useDispatch } from 'react-redux';
import { errorSelector, errorActions } from '../slice/errorSlice';
const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const onCloseError = () => dispatch(errorActions.resetError());
  return (
    <>
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
      <ErrorModal error={error} onClose={onCloseError} />
    </>
  );
};

export default RootStackNavigation;
