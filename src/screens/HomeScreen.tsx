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
import { useDispatch, useSelector } from 'react-redux';
import {
  getHomeNewReleases,
  getHomeFeaturedPlayList,
} from '../slice/homeThunk';
import { homeReleasesSelector } from '../slice/homeSlice';
import NewReleaseAlbumList from '../components/home/NewReleaseAlbumList';
interface Props {
  navigation: StackNavigationProp<RootTabParamList, 'HomeStack'>;
  route: RouteProp<RootTabParamList, 'HomeStack'>;
}

const HomeScreen = ({ navigation, route }: Props) => {
  const dispatch = useDispatch();
  const newReleaseList = useSelector(homeReleasesSelector);
  useEffect(() => {
    dispatch(getHomeNewReleases());
    dispatch(getHomeFeaturedPlayList());
  }, []);

  const onSelectAlbum = (id: string) => {
    console.log(id);
  };
  console.log(newReleaseList);
  return (
    <View style={styles.wrapper}>
      <HomeContent title='New Release' link='test'>
        <NewReleaseAlbumList
          list={newReleaseList}
          onSelectAlbum={onSelectAlbum}
        />
      </HomeContent>
      <HomeContent title='PlayList' link='test'>
        <Text>art</Text>
      </HomeContent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});

export default HomeScreen;
