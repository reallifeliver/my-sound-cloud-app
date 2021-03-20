import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootTabParamList } from '../types/navigation';
interface Props {
  navigation: StackNavigationProp<RootTabParamList, 'Home'>;
  route: RouteProp<RootTabParamList, 'Home'>;
}

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>Tracks</Text>
      <Text>PlayLists</Text>
      <Text>Users</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
