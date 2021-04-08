import React from 'react';
import { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabParamList } from 'types/navigation';

interface Props {
  navigation: StackNavigationProp<MainTabParamList, 'MusicList'>;
}

const MusicListScreen = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title='search' onPress={() => console.log('search')} />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>music list</Text>
    </View>
  );
};
export default MusicListScreen;
