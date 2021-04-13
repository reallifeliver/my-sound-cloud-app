import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeContent from '../components/home/HomeContent';
import { useDispatch, useSelector } from 'react-redux';
import {
  getHomeNewReleases,
  getHomeFeaturedPlayList,
  getHomeCategoryList,
} from '../slice/main/homeThunk';
import {
  homeReleasesSelector,
  homePlayListsSelector,
  homePlayListMessageSelector,
  homeCategoryListSelector,
} from '../slice/main/homeSlice';
import NewReleaseAlbumList from '../components/home/NewReleaseAlbumList';
import PlayListList from '../components/home/PlayListList';
import CategoryContainer from '../containers/home/CategoryContainer';

const HomeScreen = () => {
  const naviagation = useNavigation();
  const dispatch = useDispatch();
  const newReleaseList = useSelector(homeReleasesSelector);
  const playLists = useSelector(homePlayListsSelector);
  const playListMessage = useSelector(homePlayListMessageSelector);
  const categoryList = useSelector(homeCategoryListSelector);
  useEffect(() => {
    dispatch(getHomeCategoryList());
    dispatch(getHomeNewReleases());
    dispatch(getHomeFeaturedPlayList());
  }, []);

  const onSelectAlbum = (id: string) => {
    naviagation.navigate('Album', { id });
    //naviagation.push('Album'); FIXME nested tab에서 push사용하는 법이 있다는데 TypeScript는 어떻게 해결하지?
  };

  const onSelectPlayList = (id: string) => {
    console.log(id);
  };
  console.log(categoryList);

  return (
    <ScrollView style={styles.wrapper}>
      <HomeContent title='New Release' link='test'>
        <NewReleaseAlbumList list={newReleaseList} onSelect={onSelectAlbum} />
      </HomeContent>
      <HomeContent title={playListMessage || 'PlayList'} link='test'>
        <PlayListList list={playLists} onSelect={onSelectPlayList} />
      </HomeContent>
      <HomeContent title={'Category'} link='test'>
        <CategoryContainer categories={categoryList} />
      </HomeContent>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});

export default HomeScreen;
