import * as React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumInfoThunk } from '../slice/root/albumThunk';
import { RootStackParamList } from 'types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { albumInfoSelector } from '../slice/root/albumSlice';
import AlbumInfo from '../components/album/AlbumInfo';
import { getArtistSummary } from '../utils/artist';
import AlbumTrackListContainer from '../containers/album/AlbumTrackListContainer';
import TrackListInfo from '../components/common/TrackListInfo';

type AlbumScreenRouteProps = RouteProp<RootStackParamList, 'Album'>;
type AlbumScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Album'
>;
const AlbumScreen = () => {
  const route = useRoute<AlbumScreenRouteProps>();
  const { id } = route.params;
  const dispatch = useDispatch();
  const albumInfo = useSelector(albumInfoSelector);

  React.useEffect(() => {
    dispatch(getAlbumInfoThunk(id));
  }, [id]);
  console.log(albumInfo);

  if (!albumInfo) return <Text>loading</Text>;
  const { artists, images, name } = albumInfo;
  return (
    <View style={{ flex: 1 }}>
      <TrackListInfo
        title={name}
        thumbnail={images[0].url}
        subTitle={getArtistSummary(artists)}
      />
      <AlbumTrackListContainer thumbnail={images[0].url} />
    </View>
  );
};

export default AlbumScreen;
