import React from 'react';
import { useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootTabParamList } from '../types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import HomeContent from '../components/home/HomeContent';
import { useDispatch } from 'react-redux';
import { getHomeTracks } from '../slice/homeSlice';
interface Props {
  navigation: StackNavigationProp<RootTabParamList, 'Home'>;
  route: RouteProp<RootTabParamList, 'Home'>;
}

const Home = ({ navigation, route }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeTracks());
  }, []);

  return (
    <View style={styles.wrapper}>
      <HomeContent title='Tracks' link='test'>
        <Text>test</Text>
      </HomeContent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});

const HomeStack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.PRIMARY,
        },
        headerTintColor: colors.G_0,
      }}
    >
      <HomeStack.Screen name='HOME' component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
